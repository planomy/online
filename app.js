const data = window.SCRIBBLE_POWER;

const state = {
  screen: 'hub',
  weekId: null,
  night: null, // 'skills' | 'pressure'
  taskIndex: 0,
  version: 'a',
  secondsLeft: 0,
  timerId: null,
  timerRunning: false,
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function weekById(id) {
  return data.weeks.find((w) => w.id === id);
}

function currentTasks() {
  const week = weekById(state.weekId);
  if (!week || !state.night) return [];
  return week[state.night] || [];
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
  $('#skillsCount').textContent = `${week.skills.length} × ~5 min`;
  $('#pressureCount').textContent = `${week.pressure.length} × ~10 min`;
  showScreen('week');
}

function openNight(night) {
  state.night = night;
  state.taskIndex = 0;
  state.version = 'a';
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

  $$('.version-toggle .btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.version === state.version);
  });

  const version = task[state.version];
  $('#promptTags').innerHTML = `
    <span class="tag tag--mode">${task.mode}</span>
    <span class="tag tag--genre">${task.genre}</span>
    <span class="tag tag--time">${task.minutes} min · Version ${state.version.toUpperCase()}</span>
  `;
  $('#promptHeading').textContent = task.title;
  $('#promptLead').textContent = version.lead;
  $('#promptSource').innerHTML = version.source;
  $('#promptChecklist').innerHTML = task.checklist.map((item) => `<li>${item}</li>`).join('');
  $('#coachText').textContent = task.coach;

  const demo = $('#demoPanel');
  const sample = $('#sampleBox');
  const area = $('#demoText');
  demo.classList.remove('is-open');
  sample.classList.remove('is-visible');
  sample.querySelector('p').innerHTML = version.sample;
  area.value = '';
  $('#demoToggleLabel').textContent = 'Show teacher demo space';

  renderTimer();
  $('#timerLabel').textContent = state.night === 'skills' ? 'Skill timer' : 'Pressure timer';
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

  $$('.version-toggle .btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.version = btn.dataset.version;
      renderTask();
    });
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

  $('#prevTask')?.addEventListener('click', () => {
    if (state.taskIndex <= 0) return;
    state.taskIndex -= 1;
    const task = currentTask();
    if (task) startTimer(task.minutes);
    renderTask();
  });

  $('#nextTask')?.addEventListener('click', () => {
    const tasks = currentTasks();
    if (state.taskIndex >= tasks.length - 1) return;
    state.taskIndex += 1;
    const task = currentTask();
    if (task) startTimer(task.minutes);
    renderTask();
  });
}

function init() {
  $('#company').textContent = data.brand.company;
  $('#brandTitle').textContent = data.brand.title;
  $('#brandTag').textContent = data.brand.tagline;
  renderHub();
  bind();
  showScreen('hub');
}

init();
