const data = window.SCRIBBLE_POWER;

const ACTIVITY_SCALES = [1, 1.15, 1.3, 1.5, 1.75, 2];
const FONT_STORAGE_KEY = 'scribble-power-activity-scale';

const state = {
  screen: 'hub',
  weekId: null,
  night: null, // 'skills' | 'pressure'
  taskIndex: 0,
  secondsLeft: 0,
  timerId: null,
  timerRunning: false,
  present: false,
  activityScaleIndex: 0,
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function weekById(id) {
  return data.weeks.find((w) => w.id === id);
}

function currentTasks() {
  const week = weekById(state.weekId);
  if (!week || !state.night) return [];
  const nightTasks = week[state.night] || [];
  return week.soaker ? [week.soaker, ...nightTasks] : nightTasks;
}

function currentTask() {
  return currentTasks()[state.taskIndex] || null;
}

function formatTime(total) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
  state.timerRunning = false;
}

function startTimer(minutes) {
  stopTimer();
  state.secondsLeft = Math.round(minutes * 60);
  state.timerRunning = true;
  renderTimer();
  state.timerId = setInterval(() => {
    state.secondsLeft -= 1;
    if (state.secondsLeft <= 0) {
      state.secondsLeft = 0;
      stopTimer();
      const el = $('#timerCard');
      el?.classList.add('is-done');
      el?.classList.remove('is-running');
    }
    renderTimer();
  }, 1000);
}

function renderTimer() {
  const el = $('#timerCard');
  const value = $('#timerValue');
  if (!el || !value) return;
  value.textContent = formatTime(state.secondsLeft);
  el.classList.toggle('is-running', state.timerRunning && state.secondsLeft > 0);
  el.classList.toggle('is-done', !state.timerRunning && state.secondsLeft === 0 && currentTask());
}

function showScreen(name) {
  state.screen = name;
  $$('.screen').forEach((s) => s.classList.toggle('is-active', s.dataset.screen === name));
  if (name !== 'task' && state.present) setPresent(false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setPresent(on) {
  state.present = Boolean(on);
  document.body.classList.toggle('is-present', state.present);
  const toggle = $('#presentToggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(state.present));
    toggle.textContent = state.present ? 'Exit present' : 'Present';
    toggle.classList.toggle('is-on', state.present);
  }
  if (state.present) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function activityScale() {
  return ACTIVITY_SCALES[state.activityScaleIndex] || 1;
}

function applyActivityScale() {
  const scale = activityScale();
  document.documentElement.style.setProperty('--activity-scale', String(scale));
  const label = `${Math.round(scale * 100)}%`;
  $$('.font-resizer__label').forEach((el) => {
    el.textContent = label;
  });
  const atMin = state.activityScaleIndex <= 0;
  const atMax = state.activityScaleIndex >= ACTIVITY_SCALES.length - 1;
  ['fontSmaller', 'presentFontSmaller'].forEach((id) => {
    const btn = $(`#${id}`);
    if (btn) btn.disabled = atMin;
  });
  ['fontBigger', 'presentFontBigger'].forEach((id) => {
    const btn = $(`#${id}`);
    if (btn) btn.disabled = atMax;
  });
}

function bumpActivityScale(delta) {
  const next = Math.max(0, Math.min(ACTIVITY_SCALES.length - 1, state.activityScaleIndex + delta));
  if (next === state.activityScaleIndex) return;
  state.activityScaleIndex = next;
  try {
    localStorage.setItem(FONT_STORAGE_KEY, String(next));
  } catch (_) {
    /* ignore */
  }
  applyActivityScale();
}

function loadActivityScale() {
  try {
    const raw = localStorage.getItem(FONT_STORAGE_KEY);
    const idx = Number(raw);
    if (Number.isInteger(idx) && idx >= 0 && idx < ACTIVITY_SCALES.length) {
      state.activityScaleIndex = idx;
    }
  } catch (_) {
    /* ignore */
  }
  applyActivityScale();
}

function goPrevTask() {
  if (state.taskIndex <= 0) return;
  state.taskIndex -= 1;
  const task = currentTask();
  if (task) startTimer(task.minutes);
  renderTask();
}

function goNextTask() {
  const tasks = currentTasks();
  if (state.taskIndex >= tasks.length - 1) return;
  state.taskIndex += 1;
  const task = currentTask();
  if (task) startTimer(task.minutes);
  renderTask();
}

function renderHub() {
  const grid = $('#weekGrid');
  grid.innerHTML = data.weeks
    .map(
      (w) => `
      <button type="button" class="week-card" data-week="${w.id}">
        <span class="week-card__num">Week ${String(w.id).padStart(2, '0')}</span>
        <span class="week-card__title">${w.title}</span>
        <span class="week-card__focus">${w.focus}</span>
      </button>`
    )
    .join('');
}

function openWeek(id) {
  stopTimer();
  state.weekId = id;
  state.night = null;
  state.taskIndex = 0;
  const week = weekById(id);
  $('#weekTitle').textContent = `Week ${id}: ${week.title}`;
  $('#weekFocus').textContent = week.focus;
  $('#skillsBlurb').textContent = week.skillsGoal;
  $('#pressureBlurb').textContent = week.pressureGoal;
  $('#skillsCount').textContent = `45 min · soaker + ${week.skills.length} × ~5`;
  $('#pressureCount').textContent = `45 min · soaker + ${week.pressure.length} × ~10`;
  showScreen('week');
}

function openNight(night) {
  state.night = night;
  state.taskIndex = 0;
  const task = currentTask();
  if (task) startTimer(task.minutes);
  renderTask();
  showScreen('task');
}

function renderTask() {
  const week = weekById(state.weekId);
  const tasks = currentTasks();
  const task = currentTask();
  if (!week || !task) return;

  const nightLabel = state.night === 'skills' ? 'Skills Night' : 'Under Pressure';
  $('#taskCrumb').innerHTML = `<strong>Week ${week.id}</strong> · ${nightLabel}`;
  $('#taskTitle').textContent = task.title;
  $('#nightHeroText').textContent =
    state.night === 'skills'
      ? week.skillsGoal
      : week.pressureGoal;

  const nav = $('#taskNav');
  nav.innerHTML = tasks
    .map(
      (t, i) => `
      <button type="button" class="task-pill ${i === state.taskIndex ? 'is-active' : ''}" data-task-index="${i}">
        ${i + 1}. ${t.title}
      </button>`
    )
    .join('');

  const skillTags = (task.skills || [])
    .map((skill) => `<span class="tag tag--skill">${skill}</span>`)
    .join('');
  $('#promptTags').innerHTML = `
    <span class="tag tag--mode">${task.mode}</span>
    <span class="tag tag--genre">${task.genre}</span>
    <span class="tag tag--time">${task.minutes} min · Champs + Legends</span>
    ${skillTags}
  `;
  $('#promptLeadA').textContent = task.a.lead;
  $('#promptSourceA').innerHTML = task.a.source;
  $('#promptLeadB').textContent = task.b.lead;
  $('#promptSourceB').innerHTML = task.b.source;
  $('#promptChecklist').innerHTML = task.checklist.map((item) => `<li>${item}</li>`).join('');
  $('#coachText').textContent = task.coach;

  const demo = $('#demoPanel');
  const sample = $('#sampleBox');
  const area = $('#demoText');
  demo.classList.remove('is-open');
  sample.classList.remove('is-visible');
  $('#sampleA').innerHTML = task.a.sample;
  $('#sampleB').innerHTML = task.b.sample;
  area.value = '';
  $('#demoToggleLabel').textContent = 'Show teacher demo space';

  renderTimer();
  const isSoaker = task.mode === 'Fun warm-up' || task.id?.includes('soak');
  $('#timerLabel').textContent = isSoaker
    ? 'Soaker timer'
    : state.night === 'skills'
      ? 'Skill timer'
      : 'Pressure timer';
}

function bind() {
  $('#weekGrid').addEventListener('click', (e) => {
    const card = e.target.closest('[data-week]');
    if (!card) return;
    openWeek(Number(card.dataset.week));
  });

  $('#backToHub')?.addEventListener('click', () => {
    stopTimer();
    showScreen('hub');
  });

  $('#backToWeek')?.addEventListener('click', () => {
    stopTimer();
    showScreen('week');
  });

  $('#openSkills')?.addEventListener('click', () => openNight('skills'));
  $('#openPressure')?.addEventListener('click', () => openNight('pressure'));

  $('#taskNav').addEventListener('click', (e) => {
    const pill = e.target.closest('[data-task-index]');
    if (!pill) return;
    state.taskIndex = Number(pill.dataset.taskIndex);
    const task = currentTask();
    if (task) startTimer(task.minutes);
    renderTask();
  });

  $('#restartTimer')?.addEventListener('click', () => {
    const task = currentTask();
    if (task) startTimer(task.minutes);
    const pause = $('#pauseTimer');
    if (pause) pause.textContent = 'Pause';
  });

  $('#pauseTimer')?.addEventListener('click', () => {
    if (state.timerRunning) {
      stopTimer();
      renderTimer();
      $('#pauseTimer').textContent = 'Resume';
    } else if (state.secondsLeft > 0) {
      state.timerRunning = true;
      $('#pauseTimer').textContent = 'Pause';
      state.timerId = setInterval(() => {
        state.secondsLeft -= 1;
        if (state.secondsLeft <= 0) {
          state.secondsLeft = 0;
          stopTimer();
          $('#timerCard')?.classList.add('is-done');
        }
        renderTimer();
      }, 1000);
      renderTimer();
    }
  });

  $('#demoToggle')?.addEventListener('click', () => {
    const demo = $('#demoPanel');
    const open = !demo.classList.contains('is-open');
    demo.classList.toggle('is-open', open);
    $('#demoToggleLabel').textContent = open ? 'Hide teacher demo space' : 'Show teacher demo space';
    $('#demoChevron').textContent = open ? '▾' : '▸';
  });

  $('#clearDemo')?.addEventListener('click', () => {
    $('#demoText').value = '';
    $('#demoText').focus();
  });

  $('#revealSample')?.addEventListener('click', () => {
    $('#sampleBox').classList.toggle('is-visible');
  });

  $('#prevTask')?.addEventListener('click', goPrevTask);
  $('#nextTask')?.addEventListener('click', goNextTask);
  $('#presentPrev')?.addEventListener('click', goPrevTask);
  $('#presentNext')?.addEventListener('click', goNextTask);

  $('#presentToggle')?.addEventListener('click', () => setPresent(!state.present));
  $('#presentExit')?.addEventListener('click', () => setPresent(false));

  $('#fontSmaller')?.addEventListener('click', () => bumpActivityScale(-1));
  $('#fontBigger')?.addEventListener('click', () => bumpActivityScale(1));
  $('#presentFontSmaller')?.addEventListener('click', () => bumpActivityScale(-1));
  $('#presentFontBigger')?.addEventListener('click', () => bumpActivityScale(1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.present) {
      setPresent(false);
      return;
    }
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'TEXTAREA' || tag === 'INPUT') return;
    if ((e.key === 'p' || e.key === 'P') && state.screen === 'task' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      setPresent(!state.present);
    }
    if (state.screen === 'task' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      if (e.key === '+' || e.key === '=') bumpActivityScale(1);
      if (e.key === '-' || e.key === '_') bumpActivityScale(-1);
    }
  });
}

function init() {
  $('#company').textContent = data.brand.company;
  $('#brandTitle').textContent = data.brand.title;
  $('#brandTag').textContent = data.brand.tagline;
  loadActivityScale();
  renderHub();
  bind();
  showScreen('hub');
}

init();
