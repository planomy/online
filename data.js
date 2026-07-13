/* Scribble Power — 10-week curriculum
   Each lesson = 45 minutes (5-min fun soaker + 40 minutes of work)
   Champs · Legends side by side on every screen
   Same multi-skill lessons every week · new theme each week to strengthen craft
   Legends examples are crafted denser/harder than Champs
*/
window.SCRIBBLE_POWER = {
  brand: {
    company: 'Scribble Ink',
    title: 'Scribble Power',
    tagline: 'Same craft lessons every week. New theme each week. Stronger writers over time.',
  },
  lessonMinutes: 45,
  soakerMinutes: 5,
  toolkit: [
    'Strong sentence starts',
    'Minimise stop words',
    'Power verbs',
    'Exact adjectives',
    'Ban very / limp adverbs',
    'No noun/verb repetition',
    'Sophisticated vocabulary',
  ],
  weeks: [
    {
      id: 1,
      title: 'Storm Night',
      focus: 'Weather, chaos, and sudden change',
      skillsGoal: 'Practise the full craft toolkit through tonight’s theme.',
      pressureGoal: 'Put the same craft toolkit under pressure through tonight’s theme.',
      soaker:
        {
          id: '1soak',
          title: 'Soaker: Storm Night Warm-Up',
          minutes: 5,
          genre: 'Game',
          mode: 'Fun warm-up',
          skills: ['Power verbs', 'Exact adjectives'],
          coach: 'Keep it loud and fast. Theme words only — sharp, not vague.',
          checklist: [
            'Stay inside tonight’s theme',
            'Fire sharp verbs and exact adjectives',
            'Celebrate the strongest upgrades'
          ],
          a: {
            lead: 'Warm up storm words.',
            source: 'Upgrade: went → ? · big → ? · wet → ? · loud → ? · scared → ?',
            sample: 'went → sprinted / bolted<br>big → towering / massive<br>wet → soaked / drenched<br>loud → roaring / cracking<br>scared → frozen / panicked',
          },
          b: {
            lead: 'Warm up precision storm diction — no vague weather words.',
            source: 'Upgrade under pressure: devastate → ? · obscure → ? · intensify → ? · evacuate → ? · compromise → ?',
            sample: 'devastate → ravage / obliterate<br>obscure → shroud / veil<br>intensify → escalate / amplify<br>evacuate → abandon / withdraw<br>compromise → undermine / jeopardise',
          },
        },
      skills: [
        {
          id: '1s1',
          title: 'Launch + Lift',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Fix the opener and the verb in one move. Kill any very/really.',
          checklist: [
            'No weak starters (it/a/an/he/she/this/they/then/there…)',
            'Upgrade flat verbs',
            'Delete very/really/extremely'
          ],
          a: {
            lead: 'Rewrite limp storm lines.',
            source: '1) There was a weird noise and he ran very quickly.<br>2) She said she was really scared.<br>3) It was a big storm that came suddenly.',
            sample: '1) Under the stairs, a scrape-noise sent Kai sprinting.<br>2) “Don’t open it,” Maya whispered, frozen.<br>3) Across the oval, the storm slammed in.',
          },
          b: {
            lead: 'Recast these storm lines for craft density and control — no limp openers.',
            source: '1) There was escalating tension as officials walked rather hurriedly toward the briefing room.<br>2) She indicated that the contingency plan was extremely inadequate.<br>3) It became apparent that evacuation needed to commence immediately.',
            sample: '1) Toward the briefing room, officials strode through the hush.<br>2) “This contingency collapses on contact,” Amira muttered.<br>3) Evacuation orders already demanded a decision.',
          },
        },
        {
          id: '1s2',
          title: 'Open + Tighten',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives'],
          coach: 'Hook first. Then cut empty weight. Keep one exact adjective if needed.',
          checklist: [
            'Strong first sentence',
            'Cut stop-word fluff',
            'Replace vague adjectives (nice/weird/big)'
          ],
          a: {
            lead: 'Rescue this soggy storm opener.',
            source: 'There are lots of really big storms that just kind of make people feel very scared and then things get wet everywhere.',
            sample: 'Severe storms reorder a town in minutes. Roofs lift. Streets vanish under brown water.',
          },
          b: {
            lead: 'Rescue this bureaucratic storm opener — cut hedges, raise diction.',
            source: 'It is important to note that there are a number of somewhat significant meteorological systems that kind of influence how municipalities basically prepare for cascading infrastructure failures.',
            sample: 'Severe weather systems test preparation before they test courage. Clear alerts save more lives than brave improvisation when grids fail in sequence.',
          },
        },
        {
          id: '1s3',
          title: 'Persuade Without Repetition',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Three openings. No repeated key nouns/verbs next door. Sound sharp, not stuffed.',
          checklist: [
            'Three strong openings',
            'No adjacent repetition of key nouns/verbs',
            'At least two upgraded vocabulary choices'
          ],
          a: {
            lead: 'Topic: schools should close earlier on storm-warning days.',
            source: 'Write three openings. Vary language. Take a clear stance.',
            sample: '1) Storm warnings deserve empty classrooms, not heroics.<br>2) Buses crawl when roofs already shudder.<br>3) Early dismissal protects families before roads drown.',
          },
          b: {
            lead: 'Topic: cities should fund underground storm shelters despite budget pushback.',
            source: 'Craft three elevated openings. No adjacent noun/verb repetition. Natural, not stuffed.',
            sample: '1) Shelter funding is public safety infrastructure, not civic luxury.<br>2) Sirens without refuge reduce warning to theatre.<br>3) Underground capacity buys decisive minutes when minutes decide survival.',
          },
        },
        {
          id: '1s4',
          title: 'Five-Skill Sprint',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Minimise stop words'],
          coach: 'Same idea, five sentences. Each sentence must obey the full mini-checklist.',
          checklist: [
            'Five sentences, one idea',
            'Strong starts + power verbs',
            'No very-words, no fluff, no repetition'
          ],
          a: {
            lead: 'Idea: lightning hits the school power box.',
            source: 'Build five clean, punchy sentences.',
            sample: 'White flash swallowed the oval. Lights died mid-cheer. Phones lit faces in the dark. Rain hammered the locked gym doors. Coaches counted names by torchlight.',
          },
          b: {
            lead: 'Idea: flood sirens interrupt a formal assembly — five multi-skill sentences.',
            source: 'Control tone. Dense craft. No fluff, no intensifiers, no repetition.',
            sample: 'Sirens severed the principal mid-sentence. Rows emptied toward marked exits with practiced urgency. Windows rattled as pressure climbed the facade. Radios barked revised routes through static. Calm voices pinned panic to the floor.',
          },
        },
        {
          id: '1s5',
          title: 'Adjective + Verb Pairing',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          skills: ['Exact adjectives', 'Power verbs', 'Strong sentence starts'],
          coach: 'One exact adjective + one power verb per sentence. No stacks.',
          checklist: [
            'Write 5 sentences about one place',
            'One precise adjective per line max',
            'Strong verb + strong start each time'
          ],
          a: {
            lead: 'Place: flooded school oval at dusk.',
            source: 'Make it vivid without decorating every noun.',
            sample: 'Brown water mirrored the goalposts. Boots sucked through soft mud. Sharp wind sliced across the stands. Pale lightning stitched the sky. Empty bags floated past the fence.',
          },
          b: {
            lead: 'Place: city rooftop during a blackout storm — exact adjective + power verb pairs.',
            source: 'Atmosphere through disciplined pairs. One precise adjective max per line.',
            sample: 'Glass towers blinked into darkness. Needle-fine rain needled exposed necks. Distant sirens braided through crosswinds. Orange emergency lights stuttered awake. Empty arterial streets waited below.',
          },
        },
        {
          id: '1s6',
          title: 'Cut 30% + Re-open',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          skills: ['Minimise stop words', 'Strong sentence starts', 'Sophisticated vocabulary'],
          coach: 'Compress, then rebuild the first sentence so it hooks.',
          checklist: [
            'Cut roughly 30%',
            'Replace the opener if weak',
            'Keep meaning; raise diction slightly'
          ],
          a: {
            lead: 'Edit this storm analysis.',
            source: 'In the story, the main character is someone who is always feeling scared, and this is something that makes the reader feel tense because they do not know what is going to happen next in the dark storm.',
            sample: 'Fear keeps the protagonist hunted in every scene. That tension climbs as danger waits inside the dark storm.',
          },
          b: {
            lead: 'Edit this storm-policy analysis — compress ~30%, rebuild the opener.',
            source: 'The article’s central argument appears to suggest that early-warning networks are able to provide a range of benefits that can help to reduce community harm while also helping agencies to coordinate response protocols in meaningful ways across jurisdictions.',
            sample: 'Early-warning networks cut harm and sharpen cross-agency response. Alerts do organisational work as well as scientific work.',
          },
        },
        {
          id: '1s7',
          title: 'Mentor Mash',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Steal structure, not content. Keep multi-skill discipline.',
          checklist: [
            'Imitate the mentor twice with new content',
            'No weak starters or very-words',
            'No repetition across your two lines'
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Two fresh storm imitations.',
            sample: '1) Behind the thunder, a silence crouched.<br>2) Above the rooftops, pressure gathered.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated storm imitations. Stack starts, verbs, no intensifiers, no repetition.',
            sample: '1) Not every calm is safety; some are crowded with unspent lightning.<br>2) Not every all-clear is honest; some are crowded with unfinished risk assessments.',
          },
        },
        {
          id: '1s8',
          title: 'Skills Stack Share',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Perform',
          skills: ['Strong sentence starts', 'Power verbs', 'Exact adjectives', 'Minimise stop words', 'No noun/verb repetition'],
          coach: 'Students read their best line. Class names the skills they hear.',
          checklist: [
            'Pick your strongest sentence from tonight',
            'Read it aloud',
            'Name two skills it demonstrates'
          ],
          a: {
            lead: 'Showcase one storm sentence. Defend the craft.',
            source: 'Use the sentence you are proudest of from earlier drills.',
            sample: 'Example: “Rain needled Kai’s neck as he tore across the oval.” Skills: strong start, power verb, exact detail.',
          },
          b: {
            lead: 'Showcase one storm sentence. Defend the craft with precision language.',
            source: 'Choose density over volume. Name two skills aloud.',
            sample: 'Example: “Blackout settled across the CBD before officials admitted grid failure.” Skills: strong start, elevated diction, no fluff.',
          },
        }
      ],
      pressure: [
        {
          id: '1p1',
          title: 'Story Opening Under Fire',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition'],
          coach: 'First five sentences set the standard for the whole piece.',
          checklist: [
            '8–12 sentences',
            'No weak starters; no very-words',
            'Varied verbs; no adjacent repetition'
          ],
          a: {
            lead: 'Opening of a school camp story that goes wrong in a storm.',
            source: 'Begin in the moment. Multi-skill on.',
            sample: 'Torch beams sliced the gum trees as Year Six filed toward Cabin B. Behind the last bunk, something scraped—slow, metallic. Coach Rivera counted heads twice and still came up short.',
          },
          b: {
            lead: 'Opening of an emergency briefing that derails mid-storm — sustained multi-skill control.',
            source: '8–12 sentences. Elevated tone. No weak starters or intensifiers.',
            sample: 'Outside the ops room, wet boots tapped an anxious rhythm. Across the table waited three saturated maps and one dead radio. Before introductions finished, the lights failed with a theatrical click. Rain needled the windows like static. Someone checked a phone and found no bars left to bargain with.',
          },
        },
        {
          id: '1p2',
          title: 'Info Hook + Lean Body',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives', 'Sophisticated vocabulary'],
          coach: 'Hook, explain, trim. Sound smart without stuffing.',
          checklist: [
            '7–10 sentences',
            'Strong open + lean middle',
            'Precise words; minimal fluff'
          ],
          a: {
            lead: 'Why storm preparation matters at home.',
            source: 'Teach classmates clearly.',
            sample: 'Storm kits look boring until the lights die. Torches, water, and a charged battery turn panic into a plan. Families who rehearse move faster when roofs start complaining.',
          },
          b: {
            lead: 'How early-warning systems save cities — informational under craft pressure.',
            source: '7–10 lean, elevated sentences. Precise vocabulary; minimal filler.',
            sample: 'Early-warning systems buy decision time. Sensors catch rising rivers before streets drown. Communities that trust alerts evacuate while exits still function. Rumour fills any silence the network leaves.',
          },
        },
        {
          id: '1p3',
          title: 'Persuade With Full Toolkit',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Argument + craft. Counterpoint welcome.',
          checklist: [
            '10–14 sentences',
            'All listed skills visible',
            'Include one counterpoint + rebuttal'
          ],
          a: {
            lead: 'Argue for a covered outdoor learning shelter at school.',
            source: 'Convince the principal.',
            sample: 'Covered shelters keep outdoor learning alive when weather turns. Fresh air still wakes brains up. Critics cite cost, yet lost days already spend more.',
          },
          b: {
            lead: 'Argue for compulsory flood drills twice yearly in all schools.',
            source: '10–14 sentences. Include counterpoint + rebuttal. Full toolkit visible.',
            sample: 'Flood drills protect attention when minutes matter most. Practice converts maps into muscle memory. Critics cite lost timetable hours; those hours look cheap beside blocked exits. Compulsory drills equalise readiness across postcodes, not just cautious schools.',
          },
        },
        {
          id: '1p4',
          title: 'Quick Analyse + Polish',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write + edit',
          skills: ['Minimise stop words', 'Exact adjectives', 'No noun/verb repetition', 'Strong sentence starts'],
          coach: '7 minutes write, 3 minutes craft-lift.',
          checklist: [
            'Analyse a craft choice in a scene (invent if needed)',
            'Then cut fluff and repetition',
            'Finish with a cleaner version'
          ],
          a: {
            lead: 'Analyse craft in a storm scene (invent if needed).',
            source: 'Judge then polish.',
            sample: 'Short sentences accelerate panic. Sparse detail leaves room for dread. After the lift: Fear moves faster when lines stay lean.',
          },
          b: {
            lead: 'Analyse craft in a storm-report extract (invent if needed), then polish.',
            source: '7 min analyse, 3 min lift. Cut fluff/repetition; finish denser.',
            sample: 'Selective statistics steer urgency without melodrama. Clean verbs persuade harder than adjectives. After the lift: Evidence persuades when diction stays exact and sentences refuse to wander.',
          },
        }
      ],
    },
    {
      id: 2,
      title: 'Lost & Found',
      focus: 'Missing things, missing people, unexpected returns',
      skillsGoal: 'Practise the full craft toolkit through tonight’s theme.',
      pressureGoal: 'Put the same craft toolkit under pressure through tonight’s theme.',
      soaker:
        {
          id: '2soak',
          title: 'Soaker: Lost & Found Warm-Up',
          minutes: 5,
          genre: 'Game',
          mode: 'Fun warm-up',
          skills: ['Power verbs', 'Exact adjectives'],
          coach: 'Keep it loud and fast. Theme words only — sharp, not vague.',
          checklist: [
            'Stay inside tonight’s theme',
            'Fire sharp verbs and exact adjectives',
            'Celebrate the strongest upgrades'
          ],
          a: {
            lead: 'Warm up lost/found words.',
            source: 'Upgrade: looked → ? · gone → ? · found → ? · sad → ? · took → ?',
            sample: 'looked → scanned / hunted<br>gone → vanished / missing<br>found → uncovered / recovered<br>sad → gutted / hollow<br>took → snatched / claimed',
          },
          b: {
            lead: 'Warm up precision lost/found diction — institutional and investigative.',
            source: 'Upgrade: investigate → ? · conceal → ? · recover → ? · misplace → ? · verify → ?',
            sample: 'investigate → scrutinise / interrogate<br>conceal → obscure / suppress<br>recover → reclaim / retrieve<br>misplace → misfile / displace<br>verify → corroborate / authenticate',
          },
        },
      skills: [
        {
          id: '2s1',
          title: 'Launch + Lift',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Fix the opener and the verb in one move. Kill any very/really.',
          checklist: [
            'No weak starters (it/a/an/he/she/this/they/then/there…)',
            'Upgrade flat verbs',
            'Delete very/really/extremely'
          ],
          a: {
            lead: 'Rewrite limp lost-and-found lines.',
            source: '1) There was a missing bag and she looked very quickly.<br>2) He said he was really sad.<br>3) It was a big mystery that started suddenly.',
            sample: '1) Across the yard, a missing bag sent Amira scanning.<br>2) “It’s gone,” Noah whispered, hollow.<br>3) At the gate, the mystery landed hard.',
          },
          b: {
            lead: 'Recast for investigative craft and control.',
            source: '1) There was confusion as he walked rather hurriedly toward administration.<br>2) She indicated that the recovery plan was extremely inadequate.<br>3) It became apparent that verification needed to occur immediately.',
            sample: '1) Toward administration, Jordan strode through the hush.<br>2) “This recovery collapses without witnesses,” Priya muttered.<br>3) Verification protocols already demanded a decision.',
          },
        },
        {
          id: '2s2',
          title: 'Open + Tighten',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives'],
          coach: 'Hook first. Then cut empty weight. Keep one exact adjective if needed.',
          checklist: [
            'Strong first sentence',
            'Cut stop-word fluff',
            'Replace vague adjectives (nice/weird/big)'
          ],
          a: {
            lead: 'Rescue this soggy opener about lost property.',
            source: 'There are lots of really important things that just kind of go missing at school and this is very annoying for people.',
            sample: 'Lost property piles grow when hurry outruns care. Names in bags bring things home.',
          },
          b: {
            lead: 'Rescue this soggy opener about missing institutional records.',
            source: 'It is important to note that there are a number of somewhat significant archival records that kind of go missing when digital systems basically fail without redundant backups.',
            sample: 'Missing records expose fragile systems. Clear chains of custody beat hopeful guessing when servers fail.',
          },
        },
        {
          id: '2s3',
          title: 'Persuade Without Repetition',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Three openings. No repeated key nouns/verbs next door. Sound sharp, not stuffed.',
          checklist: [
            'Three strong openings',
            'No adjacent repetition of key nouns/verbs',
            'At least two upgraded vocabulary choices'
          ],
          a: {
            lead: 'Topic: every student bag should have a name tag.',
            source: 'Write three openings. Vary language. Take a clear stance.',
            sample: '1) Name tags end lost-bag detective work.<br>2) Unlabelled gear fills bins for months.<br>3) Tiny labels return big stress to zero.',
          },
          b: {
            lead: 'Topic: schools should run a searchable digital lost-and-found log.',
            source: 'Three elevated openings. No adjacent repetition. Natural sophistication.',
            sample: '1) Digital logs convert chaos into searchable accountability.<br>2) Paper bins conceal what transparent databases reveal.<br>3) Traceability returns belongings faster than corridor rumours.',
          },
        },
        {
          id: '2s4',
          title: 'Five-Skill Sprint',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Minimise stop words'],
          coach: 'Same idea, five sentences. Each sentence must obey the full mini-checklist.',
          checklist: [
            'Five sentences, one idea',
            'Strong starts + power verbs',
            'No very-words, no fluff, no repetition'
          ],
          a: {
            lead: 'Idea: a key appears in the wrong locker.',
            source: 'Build five clean, punchy sentences.',
            sample: 'Inside locker 214, a brass key waited. Metal clicked as Jordan tugged the latch. Cold air leaked from the shelf. Heart hammering, Jordan scanned the tag. Weekend plans dissolved in an instant.',
          },
          b: {
            lead: 'Idea: a shared-lab hard drive vanishes before assessment week.',
            source: 'Five controlled sentences. Multi-skill tight. Adult stakes, student voices.',
            sample: 'Across the lab bench, an empty cradle glared under strip lights. Fingerprints smudged the glass door like unfinished alibis. Cameras captured only a blurred sleeve. Silence thickened between partners. Evidence demanded a better narrative than panic.',
          },
        },
        {
          id: '2s5',
          title: 'Adjective + Verb Pairing',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          skills: ['Exact adjectives', 'Power verbs', 'Strong sentence starts'],
          coach: 'One exact adjective + one power verb per sentence. No stacks.',
          checklist: [
            'Write 5 sentences about one place',
            'One precise adjective per line max',
            'Strong verb + strong start each time'
          ],
          a: {
            lead: 'Place: lost-property room after lunch.',
            source: 'Make it vivid without decorating every noun.',
            sample: 'Dusty jackets slumped on hooks. Sneakers leaned in odd pairs. Bright lunchboxes stacked like towers. Tangy orange peels sat in a bin. Quiet clocks watched the mess.',
          },
          b: {
            lead: 'Place: evidence-style locker room after hours.',
            source: 'Atmosphere through exact pairs — clinical, not cartoonish.',
            sample: 'Fluorescent glare flattened every typed label. Metal drawers clicked shut in sequence. Refrigerated air drifted from the vents. Distant footsteps paused beyond the threshold. Empty shelves waited for returns that might never arrive.',
          },
        },
        {
          id: '2s6',
          title: 'Cut 30% + Re-open',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          skills: ['Minimise stop words', 'Strong sentence starts', 'Sophisticated vocabulary'],
          coach: 'Compress, then rebuild the first sentence so it hooks.',
          checklist: [
            'Cut roughly 30%',
            'Replace the opener if weak',
            'Keep meaning; raise diction slightly'
          ],
          a: {
            lead: 'Edit this lost-and-found analysis.',
            source: 'In the story, the main character is someone who is always feeling worried, and this is something that makes the reader feel tense because they do not know where the missing thing is.',
            sample: 'Worry keeps the protagonist hunting in every scene. That tension climbs as clues stay one step ahead.',
          },
          b: {
            lead: 'Edit this analysis of a missing-document case.',
            source: 'The article’s central argument appears to suggest that rigorous tracking systems are able to provide a range of benefits that can help to reduce institutional loss while also helping teams to recover materials in meaningful ways across departments.',
            sample: 'Rigorous tracking cuts loss and accelerates recovery. Systems do quiet preventative work before crises arrive.',
          },
        },
        {
          id: '2s7',
          title: 'Mentor Mash',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Steal structure, not content. Keep multi-skill discipline.',
          checklist: [
            'Imitate the mentor twice with new content',
            'No weak starters or very-words',
            'No repetition across your two lines'
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Two fresh lost/found imitations.',
            sample: '1) Behind the smile, a secret crouched.<br>2) Above the desk, a name tag waited.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated lost/found imitations.',
            sample: '1) Not every apology is restitution; some are crowded with unfinished theft.<br>2) Not every archive is complete; some are crowded with deliberate omissions.',
          },
        },
        {
          id: '2s8',
          title: 'Skills Stack Share',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Perform',
          skills: ['Strong sentence starts', 'Power verbs', 'Exact adjectives', 'Minimise stop words', 'No noun/verb repetition'],
          coach: 'Students read their best line. Class names the skills they hear.',
          checklist: [
            'Pick your strongest sentence from tonight',
            'Read it aloud',
            'Name two skills it demonstrates'
          ],
          a: {
            lead: 'Showcase one lost/found sentence. Defend the craft.',
            source: 'Use the sentence you are proudest of from earlier drills.',
            sample: 'Example: “Dust lifted as Kai tore open the lost-property bin.” Skills: strong start, power verb, exact detail.',
          },
          b: {
            lead: 'Showcase one investigative sentence. Defend the craft.',
            source: 'Precision over volume.',
            sample: 'Example: “Absence sat on the form before anyone risked a signature.” Skills: strong start, elevated diction, no fluff.',
          },
        }
      ],
      pressure: [
        {
          id: '2p1',
          title: 'Story Opening Under Fire',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition'],
          coach: 'First five sentences set the standard for the whole piece.',
          checklist: [
            '8–12 sentences',
            'No weak starters; no very-words',
            'Varied verbs; no adjacent repetition'
          ],
          a: {
            lead: 'Opening of a story about something precious going missing.',
            source: 'Begin in the moment. Multi-skill on.',
            sample: 'Lunch bells rang as Maya reached for her bag and grabbed empty air. Across the seat, a zipper hung open like a confession. Someone had been quick—and careful.',
          },
          b: {
            lead: 'Opening of an investigation into a vanished assessment file.',
            source: 'Control tone. Stack skills. Institutional stakes.',
            sample: 'Outside Room 3B, polished shoes tapped an anxious rhythm. Across the table waited three passwords and one missing drive. Before questions began, the backup folder reported zero. Fluorescent light made every face look guilty by default.',
          },
        },
        {
          id: '2p2',
          title: 'Info Hook + Lean Body',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives', 'Sophisticated vocabulary'],
          coach: 'Hook, explain, trim. Sound smart without stuffing.',
          checklist: [
            '7–10 sentences',
            'Strong open + lean middle',
            'Precise words; minimal fluff'
          ],
          a: {
            lead: 'How a school lost-and-found actually works.',
            source: 'Teach classmates clearly.',
            sample: 'Lost-and-found rooms sort chaos into categories. Named items go home first. Unlabelled treasures wait until term’s end, then become donation piles.',
          },
          b: {
            lead: 'How chain-of-custody protects evidence and trust.',
            source: 'Clear, elevated, multi-skill informational writing.',
            sample: 'Chain-of-custody converts objects into trustworthy evidence. Each handoff requires a name, a time, and a reason. Breaks in that chain fracture cases before courts ever open.',
          },
        },
        {
          id: '2p3',
          title: 'Persuade With Full Toolkit',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Argument + craft. Counterpoint welcome.',
          checklist: [
            '10–14 sentences',
            'All listed skills visible',
            'Include one counterpoint + rebuttal'
          ],
          a: {
            lead: 'Argue for a weekly classroom sweep for lost items.',
            source: 'Convince the principal.',
            sample: 'Weekly sweeps return gear before it becomes landfill. Small habits beat big cleanouts. Critics cite minutes lost; families cite wallets saved.',
          },
          b: {
            lead: 'Argue for mandatory device check-in after shared specialist lessons.',
            source: 'Firm, fair, crafted. Counterpoint + rebuttal required.',
            sample: 'Device check-ins protect expensive tools and communal trust. Inventories consume minutes; replacements consume months. Privacy objections fade when transparent counts replace blame theatre.',
          },
        },
        {
          id: '2p4',
          title: 'Quick Analyse + Polish',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write + edit',
          skills: ['Minimise stop words', 'Exact adjectives', 'No noun/verb repetition', 'Strong sentence starts'],
          coach: '7 minutes write, 3 minutes craft-lift.',
          checklist: [
            'Analyse a craft choice in a scene (invent if needed)',
            'Then cut fluff and repetition',
            'Finish with a cleaner version'
          ],
          a: {
            lead: 'Analyse craft in a missing-object scene.',
            source: 'Judge then polish.',
            sample: 'Short sentences accelerate dread. Sparse clues leave room for suspicion. After the lift: Absence speaks louder when lines stay lean.',
          },
          b: {
            lead: 'Analyse craft in a missing-evidence report, then polish.',
            source: 'Judge density, then lift.',
            sample: 'Selective detail steers blame without announcing it. Clean verbs persuade harder than hedges. After the lift: Evidence persuades when diction stays exact and repetition dies on contact.',
          },
        }
      ],
    },
    {
      id: 3,
      title: 'The Rivalry',
      focus: 'Competition, pride, and fair play',
      skillsGoal: 'Practise the full craft toolkit through tonight’s theme.',
      pressureGoal: 'Put the same craft toolkit under pressure through tonight’s theme.',
      soaker:
        {
          id: '3soak',
          title: 'Soaker: The Rivalry Warm-Up',
          minutes: 5,
          genre: 'Game',
          mode: 'Fun warm-up',
          skills: ['Power verbs', 'Exact adjectives'],
          coach: 'Keep it loud and fast. Theme words only — sharp, not vague.',
          checklist: [
            'Stay inside tonight’s theme',
            'Fire sharp verbs and exact adjectives',
            'Celebrate the strongest upgrades'
          ],
          a: {
            lead: 'Warm up the rivalry words.',
            source: 'Upgrade: went → ? · said → ? · big → ? · bad → ? · looked → ?',
            sample: 'went → sprinted / bolted<br>said → snapped / whispered<br>big → towering / massive<br>bad → unfair / flawed<br>looked → scanned / glared',
          },
          b: {
            lead: 'Warm up elevated the rivalry diction — no playground vagueness.',
            source: 'Upgrade: compete → ? · accuse → ? · prove → ? · fail → ? · decide → ?',
            sample: 'compete → contest / challenge<br>accuse → allege / indict<br>prove → substantiate / corroborate<br>fail → falter / collapse<br>decide → determine / adjudicate',
          },
        },
      skills: [
        {
          id: '3s1',
          title: 'Launch + Lift',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Fix the opener and the verb in one move. Kill any very/really.',
          checklist: [
            'No weak starters (it/a/an/he/she/this/they/then/there…)',
            'Upgrade flat verbs',
            'Delete very/really/extremely'
          ],
          a: {
            lead: 'Rewrite limp lines about rivalry.',
            source: '1) There was a problem with the match and they went very quickly.<br>2) She said she was really scared.<br>3) It was a big moment that came suddenly.',
            sample: '1) Across the yard, the match problem sent Kai sprinting.<br>2) “Don’t blink,” Maya whispered, frozen.<br>3) At the scoreboard, the moment slammed in.',
          },
          b: {
            lead: 'Recast limp lines about competition ethics for craft density.',
            source: '1) There was tension as she walked rather hurriedly into the selection panel room.<br>2) He indicated that the process was extremely unfair.<br>3) It became apparent that the rankings sheet needed review immediately.',
            sample: '1) Into the selection panel room, Amira strode through calculated quiet.<br>2) “This process collapses under scrutiny,” Noah muttered.<br>3) The rankings sheet already demanded adjudication.',
          },
        },
        {
          id: '3s2',
          title: 'Open + Tighten',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives'],
          coach: 'Hook first. Then cut empty weight. Keep one exact adjective if needed.',
          checklist: [
            'Strong first sentence',
            'Cut stop-word fluff',
            'Replace vague adjectives (nice/weird/big)'
          ],
          a: {
            lead: 'Rescue this soggy opener about rivalry.',
            source: 'There are lots of really important things to know about rivalry that just kind of matter in a very big way.',
            sample: 'The Rivalry rewards clear eyes and lean sentences. Facts travel farther without filler.',
          },
          b: {
            lead: 'Rescue this soggy opener about competition ethics.',
            source: 'It is important to note that there are a number of somewhat significant issues surrounding competition ethics that kind of influence how people basically respond in stressful situations.',
            sample: 'The Rivalry exposes systems when language stays precise. Clarity beats theatrical outrage when team selection fairness is on the line.',
          },
        },
        {
          id: '3s3',
          title: 'Persuade Without Repetition',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Three openings. No repeated key nouns/verbs next door. Sound sharp, not stuffed.',
          checklist: [
            'Three strong openings',
            'No adjacent repetition of key nouns/verbs',
            'At least two upgraded vocabulary choices'
          ],
          a: {
            lead: 'Topic: school sport tryouts should be judged by clear published skills, not popularity.',
            source: 'Write three openings. Vary language. Take a clear stance.',
            sample: '1) Clear tryout skills beat secret popularity contests.<br>2) Friendship votes crush fair teams.<br>3) Published criteria protect every player, not just the loud ones.',
          },
          b: {
            lead: 'Topic: institutions should publish transparent criteria around competition ethics.',
            source: 'Three elevated openings. No adjacent repetition. Sophisticated but speakable.',
            sample: '1) Transparency around competition ethics is governance, not generosity.<br>2) Secret criteria breed legitimate distrust.<br>3) Published standards protect both process and people.',
          },
        },
        {
          id: '3s4',
          title: 'Five-Skill Sprint',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Minimise stop words'],
          coach: 'Same idea, five sentences. Each sentence must obey the full mini-checklist.',
          checklist: [
            'Five sentences, one idea',
            'Strong starts + power verbs',
            'No very-words, no fluff, no repetition'
          ],
          a: {
            lead: 'Idea: the match appears where it should not.',
            source: 'Build five clean, punchy sentences.',
            sample: 'Beside the scoreboard, a match waited. Voices dropped. Decisions hardened. Time thinned. Action followed.',
          },
          b: {
            lead: 'Idea: the rankings sheet appears with one critical line altered.',
            source: 'Five controlled sentences. Multi-skill discipline. Adolescent-to-adult stakes.',
            sample: 'Inside the selection panel room, the altered rankings sheet waited under glass. Voices flattened. Allegiances hardened. Time compressed. Evidence outran excuses.',
          },
        },
        {
          id: '3s5',
          title: 'Adjective + Verb Pairing',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          skills: ['Exact adjectives', 'Power verbs', 'Strong sentence starts'],
          coach: 'One exact adjective + one power verb per sentence. No stacks.',
          checklist: [
            'Write 5 sentences about one place',
            'One precise adjective per line max',
            'Strong verb + strong start each time'
          ],
          a: {
            lead: 'Place: a scoreboard linked to rivalry.',
            source: 'Make it vivid without decorating every noun.',
            sample: 'Harsh light cut the scoreboard. Boots scraped. Quiet air waited. Sharp voices returned. Empty chairs listened.',
          },
          b: {
            lead: 'Place: the selection panel room under institutional pressure.',
            source: 'Exact adjective + power verb pairs. Clinical atmosphere.',
            sample: 'Fluorescent glare flattened every face around the selection panel room. Cold laminate bit restless palms. Distant corridor noise braided through sealed doors. Official stamps waited like loaded pauses. Empty chairs listened harder than people.',
          },
        },
        {
          id: '3s6',
          title: 'Cut 30% + Re-open',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          skills: ['Minimise stop words', 'Strong sentence starts', 'Sophisticated vocabulary'],
          coach: 'Compress, then rebuild the first sentence so it hooks.',
          checklist: [
            'Cut roughly 30%',
            'Replace the opener if weak',
            'Keep meaning; raise diction slightly'
          ],
          a: {
            lead: 'Edit this analysis about rivalry.',
            source: 'In the text, rivalry is something that is really important and this makes readers feel things because they do not know what will happen next.',
            sample: 'Fear and focus cling to rivalry. Tension climbs when sentences stay lean.',
          },
          b: {
            lead: 'Edit this analysis of competition ethics.',
            source: 'The piece appears to suggest that careful attention to competition ethics is able to provide a range of somewhat significant benefits that can help communities to navigate conflict in meaningful ways over time.',
            sample: 'Attention to competition ethics clarifies stakes and reduces performative conflict. Lean analysis persuades where slogans stall.',
          },
        },
        {
          id: '3s7',
          title: 'Mentor Mash',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Steal structure, not content. Keep multi-skill discipline.',
          checklist: [
            'Imitate the mentor twice with new content',
            'No weak starters or very-words',
            'No repetition across your two lines'
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Two imitations about rivalry.',
            sample: '1) Behind the slogan, a cost crouched.<br>2) Above the cheering, doubt gathered.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated imitations tied to competition ethics.',
            sample: '1) Not every victory is clean; some are crowded with quiet concessions.<br>2) Not every apology repairs trust; some are crowded with image management.',
          },
        },
        {
          id: '3s8',
          title: 'Skills Stack Share',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Perform',
          skills: ['Strong sentence starts', 'Power verbs', 'Exact adjectives', 'Minimise stop words', 'No noun/verb repetition'],
          coach: 'Students read their best line. Class names the skills they hear.',
          checklist: [
            'Pick your strongest sentence from tonight',
            'Read it aloud',
            'Name two skills it demonstrates'
          ],
          a: {
            lead: 'Showcase one sentence about rivalry. Defend the craft.',
            source: 'Use the sentence you are proudest of from earlier drills.',
            sample: 'Example: “Mud sprayed behind Kai as he tore toward the scoreboard.” Skills: strong start, power verb, exact detail.',
          },
          b: {
            lead: 'Showcase one sentence about competition ethics. Defend the craft.',
            source: 'Precision over volume. Name two skills.',
            sample: 'Example: “Compromise sat between them before either admitted the cost.” Skills: strong start, elevated diction, no fluff.',
          },
        }
      ],
      pressure: [
        {
          id: '3p1',
          title: 'Story Opening Under Fire',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition'],
          coach: 'First five sentences set the standard for the whole piece.',
          checklist: [
            '8–12 sentences',
            'No weak starters; no very-words',
            'Varied verbs; no adjacent repetition'
          ],
          a: {
            lead: 'Narrative opening linked to rivalry.',
            source: 'Begin in the moment. Multi-skill on.',
            sample: 'Torchlight cut the dark near the scoreboard as footsteps closed in. Someone counted names twice and still came up short.',
          },
          b: {
            lead: 'Narrative opening: a turning point around competition ethics inside the selection panel room.',
            source: '8–12 sentences. Elevated control. No weak starters or intensifiers.',
            sample: 'Outside the selection panel room, shoes tapped a rehearsed rhythm. Across the table, the rankings sheet waited like a verdict. Before introductions finished, someone noticed the altered line. Silence did the interviewing after that.',
          },
        },
        {
          id: '3p2',
          title: 'Info Hook + Lean Body',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives', 'Sophisticated vocabulary'],
          coach: 'Hook, explain, trim. Sound smart without stuffing.',
          checklist: [
            '7–10 sentences',
            'Strong open + lean middle',
            'Precise words; minimal fluff'
          ],
          a: {
            lead: 'Explain something important about rivalry.',
            source: 'Teach classmates clearly.',
            sample: 'The Rivalry looks simple until you track the moving parts. Clear steps beat long excuses.',
          },
          b: {
            lead: 'Explain a non-obvious mechanism behind competition ethics.',
            source: '7–10 elevated informational sentences. Teach without talking down.',
            sample: 'The Rivalry looks simple until incentives are mapped. Definitions before opinions prevent circular arguments. Concrete cases turn fog into procedure when team selection fairness matters.',
          },
        },
        {
          id: '3p3',
          title: 'Persuade With Full Toolkit',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Argument + craft. Counterpoint welcome.',
          checklist: [
            '10–14 sentences',
            'All listed skills visible',
            'Include one counterpoint + rebuttal'
          ],
          a: {
            lead: 'Persuade on an issue near rivalry.',
            source: 'Convince a decision-maker.',
            sample: 'The Rivalry is not optional decoration. Critics cite cost; inaction spends more.',
          },
          b: {
            lead: 'Persuade a decision-maker on a contested issue near competition ethics.',
            source: '10–14 sentences. Counterpoint + rebuttal. Full toolkit.',
            sample: 'The Rivalry is not optional decoration for policy. Critics cite disruption costs; opaque processes spend more in lost trust. Delay is also a decision — usually the weaker one when team selection fairness is already fraying.',
          },
        },
        {
          id: '3p4',
          title: 'Quick Analyse + Polish',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write + edit',
          skills: ['Minimise stop words', 'Exact adjectives', 'No noun/verb repetition', 'Strong sentence starts'],
          coach: '7 minutes write, 3 minutes craft-lift.',
          checklist: [
            'Analyse a craft choice in a scene (invent if needed)',
            'Then cut fluff and repetition',
            'Finish with a cleaner version'
          ],
          a: {
            lead: 'Analyse craft in a scene about rivalry.',
            source: 'Judge then polish.',
            sample: 'Short sentences accelerate pressure. Sparse detail leaves room for dread. After the lift: Tension climbs when lines stay lean.',
          },
          b: {
            lead: 'Analyse craft in a text about competition ethics, then polish for density.',
            source: '7 min write, 3 min lift. Exact diction; kill repetition.',
            sample: 'Selective detail steers judgement without sermonising. Design, not accident, carries persuasion. After the lift: Exact diction and lean structure do the ethical work.',
          },
        }
      ],
    },
    {
      id: 4,
      title: 'Secret Places',
      focus: 'Hidden rooms, shortcuts, and quiet corners',
      skillsGoal: 'Practise the full craft toolkit through tonight’s theme.',
      pressureGoal: 'Put the same craft toolkit under pressure through tonight’s theme.',
      soaker:
        {
          id: '4soak',
          title: 'Soaker: Secret Places Warm-Up',
          minutes: 5,
          genre: 'Game',
          mode: 'Fun warm-up',
          skills: ['Power verbs', 'Exact adjectives'],
          coach: 'Keep it loud and fast. Theme words only — sharp, not vague.',
          checklist: [
            'Stay inside tonight’s theme',
            'Fire sharp verbs and exact adjectives',
            'Celebrate the strongest upgrades'
          ],
          a: {
            lead: 'Warm up secret places words.',
            source: 'Upgrade: went → ? · said → ? · big → ? · bad → ? · looked → ?',
            sample: 'went → sprinted / bolted<br>said → snapped / whispered<br>big → towering / massive<br>bad → unfair / flawed<br>looked → scanned / glared',
          },
          b: {
            lead: 'Warm up elevated secret places diction — no playground vagueness.',
            source: 'Upgrade: compete → ? · accuse → ? · prove → ? · fail → ? · decide → ?',
            sample: 'compete → contest / challenge<br>accuse → allege / indict<br>prove → substantiate / corroborate<br>fail → falter / collapse<br>decide → determine / adjudicate',
          },
        },
      skills: [
        {
          id: '4s1',
          title: 'Launch + Lift',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Fix the opener and the verb in one move. Kill any very/really.',
          checklist: [
            'No weak starters (it/a/an/he/she/this/they/then/there…)',
            'Upgrade flat verbs',
            'Delete very/really/extremely'
          ],
          a: {
            lead: 'Rewrite limp lines about secret places.',
            source: '1) There was a problem with the hidden door and they went very quickly.<br>2) She said she was really scared.<br>3) It was a big moment that came suddenly.',
            sample: '1) Across the yard, the hidden door problem sent Kai sprinting.<br>2) “Don’t blink,” Maya whispered, frozen.<br>3) At the tunnel, the moment slammed in.',
          },
          b: {
            lead: 'Recast limp lines about restricted access spaces for craft density.',
            source: '1) There was tension as she walked rather hurriedly into the maintenance tunnel.<br>2) He indicated that the process was extremely unfair.<br>3) It became apparent that the coded map needed review immediately.',
            sample: '1) Into the maintenance tunnel, Amira strode through calculated quiet.<br>2) “This process collapses under scrutiny,” Noah muttered.<br>3) The coded map already demanded adjudication.',
          },
        },
        {
          id: '4s2',
          title: 'Open + Tighten',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives'],
          coach: 'Hook first. Then cut empty weight. Keep one exact adjective if needed.',
          checklist: [
            'Strong first sentence',
            'Cut stop-word fluff',
            'Replace vague adjectives (nice/weird/big)'
          ],
          a: {
            lead: 'Rescue this soggy opener about secret places.',
            source: 'There are lots of really important things to know about secret that just kind of matter in a very big way.',
            sample: 'Secret Places rewards clear eyes and lean sentences. Facts travel farther without filler.',
          },
          b: {
            lead: 'Rescue this soggy opener about restricted access spaces.',
            source: 'It is important to note that there are a number of somewhat significant issues surrounding restricted access spaces that kind of influence how people basically respond in stressful situations.',
            sample: 'Secret Places exposes systems when language stays precise. Clarity beats theatrical outrage when privacy versus curiosity is on the line.',
          },
        },
        {
          id: '4s3',
          title: 'Persuade Without Repetition',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Three openings. No repeated key nouns/verbs next door. Sound sharp, not stuffed.',
          checklist: [
            'Three strong openings',
            'No adjacent repetition of key nouns/verbs',
            'At least two upgraded vocabulary choices'
          ],
          a: {
            lead: 'Topic: students should not explore locked school spaces without staff permission.',
            source: 'Write three openings. Vary language. Take a clear stance.',
            sample: '1) Locked doors exist for safety, not dares.<br>2) Secret shortcuts can become accidents.<br>3) Curiosity still needs permission slips.',
          },
          b: {
            lead: 'Topic: institutions should publish transparent criteria around restricted access spaces.',
            source: 'Three elevated openings. No adjacent repetition. Sophisticated but speakable.',
            sample: '1) Transparency around restricted access spaces is governance, not generosity.<br>2) Secret criteria breed legitimate distrust.<br>3) Published standards protect both process and people.',
          },
        },
        {
          id: '4s4',
          title: 'Five-Skill Sprint',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Minimise stop words'],
          coach: 'Same idea, five sentences. Each sentence must obey the full mini-checklist.',
          checklist: [
            'Five sentences, one idea',
            'Strong starts + power verbs',
            'No very-words, no fluff, no repetition'
          ],
          a: {
            lead: 'Idea: the hidden door appears where it should not.',
            source: 'Build five clean, punchy sentences.',
            sample: 'Beside the tunnel, a hidden door waited. Voices dropped. Decisions hardened. Time thinned. Action followed.',
          },
          b: {
            lead: 'Idea: the coded map appears with one critical line altered.',
            source: 'Five controlled sentences. Multi-skill discipline. Adolescent-to-adult stakes.',
            sample: 'Inside the maintenance tunnel, the altered coded map waited under glass. Voices flattened. Allegiances hardened. Time compressed. Evidence outran excuses.',
          },
        },
        {
          id: '4s5',
          title: 'Adjective + Verb Pairing',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          skills: ['Exact adjectives', 'Power verbs', 'Strong sentence starts'],
          coach: 'One exact adjective + one power verb per sentence. No stacks.',
          checklist: [
            'Write 5 sentences about one place',
            'One precise adjective per line max',
            'Strong verb + strong start each time'
          ],
          a: {
            lead: 'Place: a tunnel linked to secret.',
            source: 'Make it vivid without decorating every noun.',
            sample: 'Harsh light cut the tunnel. Boots scraped. Quiet air waited. Sharp voices returned. Empty chairs listened.',
          },
          b: {
            lead: 'Place: the maintenance tunnel under institutional pressure.',
            source: 'Exact adjective + power verb pairs. Clinical atmosphere.',
            sample: 'Fluorescent glare flattened every face around the maintenance tunnel. Cold laminate bit restless palms. Distant corridor noise braided through sealed doors. Official stamps waited like loaded pauses. Empty chairs listened harder than people.',
          },
        },
        {
          id: '4s6',
          title: 'Cut 30% + Re-open',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          skills: ['Minimise stop words', 'Strong sentence starts', 'Sophisticated vocabulary'],
          coach: 'Compress, then rebuild the first sentence so it hooks.',
          checklist: [
            'Cut roughly 30%',
            'Replace the opener if weak',
            'Keep meaning; raise diction slightly'
          ],
          a: {
            lead: 'Edit this analysis about secret places.',
            source: 'In the text, secret is something that is really important and this makes readers feel things because they do not know what will happen next.',
            sample: 'Fear and focus cling to secret. Tension climbs when sentences stay lean.',
          },
          b: {
            lead: 'Edit this analysis of restricted access spaces.',
            source: 'The piece appears to suggest that careful attention to restricted access spaces is able to provide a range of somewhat significant benefits that can help communities to navigate conflict in meaningful ways over time.',
            sample: 'Attention to restricted access spaces clarifies stakes and reduces performative conflict. Lean analysis persuades where slogans stall.',
          },
        },
        {
          id: '4s7',
          title: 'Mentor Mash',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Steal structure, not content. Keep multi-skill discipline.',
          checklist: [
            'Imitate the mentor twice with new content',
            'No weak starters or very-words',
            'No repetition across your two lines'
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Two imitations about secret places.',
            sample: '1) Behind the slogan, a cost crouched.<br>2) Above the cheering, doubt gathered.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated imitations tied to restricted access spaces.',
            sample: '1) Not every victory is clean; some are crowded with quiet concessions.<br>2) Not every apology repairs trust; some are crowded with image management.',
          },
        },
        {
          id: '4s8',
          title: 'Skills Stack Share',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Perform',
          skills: ['Strong sentence starts', 'Power verbs', 'Exact adjectives', 'Minimise stop words', 'No noun/verb repetition'],
          coach: 'Students read their best line. Class names the skills they hear.',
          checklist: [
            'Pick your strongest sentence from tonight',
            'Read it aloud',
            'Name two skills it demonstrates'
          ],
          a: {
            lead: 'Showcase one sentence about secret places. Defend the craft.',
            source: 'Use the sentence you are proudest of from earlier drills.',
            sample: 'Example: “Mud sprayed behind Kai as he tore toward the tunnel.” Skills: strong start, power verb, exact detail.',
          },
          b: {
            lead: 'Showcase one sentence about restricted access spaces. Defend the craft.',
            source: 'Precision over volume. Name two skills.',
            sample: 'Example: “Compromise sat between them before either admitted the cost.” Skills: strong start, elevated diction, no fluff.',
          },
        }
      ],
      pressure: [
        {
          id: '4p1',
          title: 'Story Opening Under Fire',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition'],
          coach: 'First five sentences set the standard for the whole piece.',
          checklist: [
            '8–12 sentences',
            'No weak starters; no very-words',
            'Varied verbs; no adjacent repetition'
          ],
          a: {
            lead: 'Narrative opening linked to secret.',
            source: 'Begin in the moment. Multi-skill on.',
            sample: 'Torchlight cut the dark near the tunnel as footsteps closed in. Someone counted names twice and still came up short.',
          },
          b: {
            lead: 'Narrative opening: a turning point around restricted access spaces inside the maintenance tunnel.',
            source: '8–12 sentences. Elevated control. No weak starters or intensifiers.',
            sample: 'Outside the maintenance tunnel, shoes tapped a rehearsed rhythm. Across the table, the coded map waited like a verdict. Before introductions finished, someone noticed the altered line. Silence did the interviewing after that.',
          },
        },
        {
          id: '4p2',
          title: 'Info Hook + Lean Body',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives', 'Sophisticated vocabulary'],
          coach: 'Hook, explain, trim. Sound smart without stuffing.',
          checklist: [
            '7–10 sentences',
            'Strong open + lean middle',
            'Precise words; minimal fluff'
          ],
          a: {
            lead: 'Explain something important about secret places.',
            source: 'Teach classmates clearly.',
            sample: 'Secret Places looks simple until you track the moving parts. Clear steps beat long excuses.',
          },
          b: {
            lead: 'Explain a non-obvious mechanism behind restricted access spaces.',
            source: '7–10 elevated informational sentences. Teach without talking down.',
            sample: 'Secret Places looks simple until incentives are mapped. Definitions before opinions prevent circular arguments. Concrete cases turn fog into procedure when privacy versus curiosity matters.',
          },
        },
        {
          id: '4p3',
          title: 'Persuade With Full Toolkit',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Argument + craft. Counterpoint welcome.',
          checklist: [
            '10–14 sentences',
            'All listed skills visible',
            'Include one counterpoint + rebuttal'
          ],
          a: {
            lead: 'Persuade on an issue near secret.',
            source: 'Convince a decision-maker.',
            sample: 'Secret Places is not optional decoration. Critics cite cost; inaction spends more.',
          },
          b: {
            lead: 'Persuade a decision-maker on a contested issue near restricted access spaces.',
            source: '10–14 sentences. Counterpoint + rebuttal. Full toolkit.',
            sample: 'Secret Places is not optional decoration for policy. Critics cite disruption costs; opaque processes spend more in lost trust. Delay is also a decision — usually the weaker one when privacy versus curiosity is already fraying.',
          },
        },
        {
          id: '4p4',
          title: 'Quick Analyse + Polish',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write + edit',
          skills: ['Minimise stop words', 'Exact adjectives', 'No noun/verb repetition', 'Strong sentence starts'],
          coach: '7 minutes write, 3 minutes craft-lift.',
          checklist: [
            'Analyse a craft choice in a scene (invent if needed)',
            'Then cut fluff and repetition',
            'Finish with a cleaner version'
          ],
          a: {
            lead: 'Analyse craft in a scene about secret places.',
            source: 'Judge then polish.',
            sample: 'Short sentences accelerate pressure. Sparse detail leaves room for dread. After the lift: Tension climbs when lines stay lean.',
          },
          b: {
            lead: 'Analyse craft in a text about restricted access spaces, then polish for density.',
            source: '7 min write, 3 min lift. Exact diction; kill repetition.',
            sample: 'Selective detail steers judgement without sermonising. Design, not accident, carries persuasion. After the lift: Exact diction and lean structure do the ethical work.',
          },
        }
      ],
    },
    {
      id: 5,
      title: 'Strange Creatures',
      focus: 'Odd animals, cryptids, and unlikely pets',
      skillsGoal: 'Practise the full craft toolkit through tonight’s theme.',
      pressureGoal: 'Put the same craft toolkit under pressure through tonight’s theme.',
      soaker:
        {
          id: '5soak',
          title: 'Soaker: Strange Creatures Warm-Up',
          minutes: 5,
          genre: 'Game',
          mode: 'Fun warm-up',
          skills: ['Power verbs', 'Exact adjectives'],
          coach: 'Keep it loud and fast. Theme words only — sharp, not vague.',
          checklist: [
            'Stay inside tonight’s theme',
            'Fire sharp verbs and exact adjectives',
            'Celebrate the strongest upgrades'
          ],
          a: {
            lead: 'Warm up strange creatures words.',
            source: 'Upgrade: went → ? · said → ? · big → ? · bad → ? · looked → ?',
            sample: 'went → sprinted / bolted<br>said → snapped / whispered<br>big → towering / massive<br>bad → unfair / flawed<br>looked → scanned / glared',
          },
          b: {
            lead: 'Warm up elevated strange creatures diction — no playground vagueness.',
            source: 'Upgrade: compete → ? · accuse → ? · prove → ? · fail → ? · decide → ?',
            sample: 'compete → contest / challenge<br>accuse → allege / indict<br>prove → substantiate / corroborate<br>fail → falter / collapse<br>decide → determine / adjudicate',
          },
        },
      skills: [
        {
          id: '5s1',
          title: 'Launch + Lift',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Fix the opener and the verb in one move. Kill any very/really.',
          checklist: [
            'No weak starters (it/a/an/he/she/this/they/then/there…)',
            'Upgrade flat verbs',
            'Delete very/really/extremely'
          ],
          a: {
            lead: 'Rewrite limp lines about strange creatures.',
            source: '1) There was a problem with the pawprint and they went very quickly.<br>2) She said she was really scared.<br>3) It was a big moment that came suddenly.',
            sample: '1) Across the yard, the pawprint problem sent Kai sprinting.<br>2) “Don’t blink,” Maya whispered, frozen.<br>3) At the nest, the moment slammed in.',
          },
          b: {
            lead: 'Recast limp lines about cryptozoology claims for craft density.',
            source: '1) There was tension as she walked rather hurriedly into the wetlands observation hide.<br>2) He indicated that the process was extremely unfair.<br>3) It became apparent that the cast footprint needed review immediately.',
            sample: '1) Into the wetlands observation hide, Amira strode through calculated quiet.<br>2) “This process collapses under scrutiny,” Noah muttered.<br>3) The cast footprint already demanded adjudication.',
          },
        },
        {
          id: '5s2',
          title: 'Open + Tighten',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives'],
          coach: 'Hook first. Then cut empty weight. Keep one exact adjective if needed.',
          checklist: [
            'Strong first sentence',
            'Cut stop-word fluff',
            'Replace vague adjectives (nice/weird/big)'
          ],
          a: {
            lead: 'Rescue this soggy opener about strange creatures.',
            source: 'There are lots of really important things to know about creature that just kind of matter in a very big way.',
            sample: 'Strange Creatures rewards clear eyes and lean sentences. Facts travel farther without filler.',
          },
          b: {
            lead: 'Rescue this soggy opener about cryptozoology claims.',
            source: 'It is important to note that there are a number of somewhat significant issues surrounding cryptozoology claims that kind of influence how people basically respond in stressful situations.',
            sample: 'Strange Creatures exposes systems when language stays precise. Clarity beats theatrical outrage when evidence standards is on the line.',
          },
        },
        {
          id: '5s3',
          title: 'Persuade Without Repetition',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Three openings. No repeated key nouns/verbs next door. Sound sharp, not stuffed.',
          checklist: [
            'Three strong openings',
            'No adjacent repetition of key nouns/verbs',
            'At least two upgraded vocabulary choices'
          ],
          a: {
            lead: 'Topic: schools should teach how to check animal “mystery” claims with real evidence.',
            source: 'Write three openings. Vary language. Take a clear stance.',
            sample: '1) Footprints need measurements, not myths.<br>2) Viral creature clips are entertainment until tested.<br>3) Evidence standards keep wonder honest.',
          },
          b: {
            lead: 'Topic: institutions should publish transparent criteria around cryptozoology claims.',
            source: 'Three elevated openings. No adjacent repetition. Sophisticated but speakable.',
            sample: '1) Transparency around cryptozoology claims is governance, not generosity.<br>2) Secret criteria breed legitimate distrust.<br>3) Published standards protect both process and people.',
          },
        },
        {
          id: '5s4',
          title: 'Five-Skill Sprint',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Minimise stop words'],
          coach: 'Same idea, five sentences. Each sentence must obey the full mini-checklist.',
          checklist: [
            'Five sentences, one idea',
            'Strong starts + power verbs',
            'No very-words, no fluff, no repetition'
          ],
          a: {
            lead: 'Idea: the pawprint appears where it should not.',
            source: 'Build five clean, punchy sentences.',
            sample: 'Beside the nest, a pawprint waited. Voices dropped. Decisions hardened. Time thinned. Action followed.',
          },
          b: {
            lead: 'Idea: the cast footprint appears with one critical line altered.',
            source: 'Five controlled sentences. Multi-skill discipline. Adolescent-to-adult stakes.',
            sample: 'Inside the wetlands observation hide, the altered cast footprint waited under glass. Voices flattened. Allegiances hardened. Time compressed. Evidence outran excuses.',
          },
        },
        {
          id: '5s5',
          title: 'Adjective + Verb Pairing',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          skills: ['Exact adjectives', 'Power verbs', 'Strong sentence starts'],
          coach: 'One exact adjective + one power verb per sentence. No stacks.',
          checklist: [
            'Write 5 sentences about one place',
            'One precise adjective per line max',
            'Strong verb + strong start each time'
          ],
          a: {
            lead: 'Place: a nest linked to creature.',
            source: 'Make it vivid without decorating every noun.',
            sample: 'Harsh light cut the nest. Boots scraped. Quiet air waited. Sharp voices returned. Empty chairs listened.',
          },
          b: {
            lead: 'Place: the wetlands observation hide under institutional pressure.',
            source: 'Exact adjective + power verb pairs. Clinical atmosphere.',
            sample: 'Fluorescent glare flattened every face around the wetlands observation hide. Cold laminate bit restless palms. Distant corridor noise braided through sealed doors. Official stamps waited like loaded pauses. Empty chairs listened harder than people.',
          },
        },
        {
          id: '5s6',
          title: 'Cut 30% + Re-open',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          skills: ['Minimise stop words', 'Strong sentence starts', 'Sophisticated vocabulary'],
          coach: 'Compress, then rebuild the first sentence so it hooks.',
          checklist: [
            'Cut roughly 30%',
            'Replace the opener if weak',
            'Keep meaning; raise diction slightly'
          ],
          a: {
            lead: 'Edit this analysis about strange creatures.',
            source: 'In the text, creature is something that is really important and this makes readers feel things because they do not know what will happen next.',
            sample: 'Fear and focus cling to creature. Tension climbs when sentences stay lean.',
          },
          b: {
            lead: 'Edit this analysis of cryptozoology claims.',
            source: 'The piece appears to suggest that careful attention to cryptozoology claims is able to provide a range of somewhat significant benefits that can help communities to navigate conflict in meaningful ways over time.',
            sample: 'Attention to cryptozoology claims clarifies stakes and reduces performative conflict. Lean analysis persuades where slogans stall.',
          },
        },
        {
          id: '5s7',
          title: 'Mentor Mash',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Steal structure, not content. Keep multi-skill discipline.',
          checklist: [
            'Imitate the mentor twice with new content',
            'No weak starters or very-words',
            'No repetition across your two lines'
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Two imitations about strange creatures.',
            sample: '1) Behind the slogan, a cost crouched.<br>2) Above the cheering, doubt gathered.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated imitations tied to cryptozoology claims.',
            sample: '1) Not every victory is clean; some are crowded with quiet concessions.<br>2) Not every apology repairs trust; some are crowded with image management.',
          },
        },
        {
          id: '5s8',
          title: 'Skills Stack Share',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Perform',
          skills: ['Strong sentence starts', 'Power verbs', 'Exact adjectives', 'Minimise stop words', 'No noun/verb repetition'],
          coach: 'Students read their best line. Class names the skills they hear.',
          checklist: [
            'Pick your strongest sentence from tonight',
            'Read it aloud',
            'Name two skills it demonstrates'
          ],
          a: {
            lead: 'Showcase one sentence about strange creatures. Defend the craft.',
            source: 'Use the sentence you are proudest of from earlier drills.',
            sample: 'Example: “Mud sprayed behind Kai as he tore toward the nest.” Skills: strong start, power verb, exact detail.',
          },
          b: {
            lead: 'Showcase one sentence about cryptozoology claims. Defend the craft.',
            source: 'Precision over volume. Name two skills.',
            sample: 'Example: “Compromise sat between them before either admitted the cost.” Skills: strong start, elevated diction, no fluff.',
          },
        }
      ],
      pressure: [
        {
          id: '5p1',
          title: 'Story Opening Under Fire',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition'],
          coach: 'First five sentences set the standard for the whole piece.',
          checklist: [
            '8–12 sentences',
            'No weak starters; no very-words',
            'Varied verbs; no adjacent repetition'
          ],
          a: {
            lead: 'Narrative opening linked to creature.',
            source: 'Begin in the moment. Multi-skill on.',
            sample: 'Torchlight cut the dark near the nest as footsteps closed in. Someone counted names twice and still came up short.',
          },
          b: {
            lead: 'Narrative opening: a turning point around cryptozoology claims inside the wetlands observation hide.',
            source: '8–12 sentences. Elevated control. No weak starters or intensifiers.',
            sample: 'Outside the wetlands observation hide, shoes tapped a rehearsed rhythm. Across the table, the cast footprint waited like a verdict. Before introductions finished, someone noticed the altered line. Silence did the interviewing after that.',
          },
        },
        {
          id: '5p2',
          title: 'Info Hook + Lean Body',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives', 'Sophisticated vocabulary'],
          coach: 'Hook, explain, trim. Sound smart without stuffing.',
          checklist: [
            '7–10 sentences',
            'Strong open + lean middle',
            'Precise words; minimal fluff'
          ],
          a: {
            lead: 'Explain something important about strange creatures.',
            source: 'Teach classmates clearly.',
            sample: 'Strange Creatures looks simple until you track the moving parts. Clear steps beat long excuses.',
          },
          b: {
            lead: 'Explain a non-obvious mechanism behind cryptozoology claims.',
            source: '7–10 elevated informational sentences. Teach without talking down.',
            sample: 'Strange Creatures looks simple until incentives are mapped. Definitions before opinions prevent circular arguments. Concrete cases turn fog into procedure when evidence standards matters.',
          },
        },
        {
          id: '5p3',
          title: 'Persuade With Full Toolkit',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Argument + craft. Counterpoint welcome.',
          checklist: [
            '10–14 sentences',
            'All listed skills visible',
            'Include one counterpoint + rebuttal'
          ],
          a: {
            lead: 'Persuade on an issue near creature.',
            source: 'Convince a decision-maker.',
            sample: 'Strange Creatures is not optional decoration. Critics cite cost; inaction spends more.',
          },
          b: {
            lead: 'Persuade a decision-maker on a contested issue near cryptozoology claims.',
            source: '10–14 sentences. Counterpoint + rebuttal. Full toolkit.',
            sample: 'Strange Creatures is not optional decoration for policy. Critics cite disruption costs; opaque processes spend more in lost trust. Delay is also a decision — usually the weaker one when evidence standards is already fraying.',
          },
        },
        {
          id: '5p4',
          title: 'Quick Analyse + Polish',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write + edit',
          skills: ['Minimise stop words', 'Exact adjectives', 'No noun/verb repetition', 'Strong sentence starts'],
          coach: '7 minutes write, 3 minutes craft-lift.',
          checklist: [
            'Analyse a craft choice in a scene (invent if needed)',
            'Then cut fluff and repetition',
            'Finish with a cleaner version'
          ],
          a: {
            lead: 'Analyse craft in a scene about strange creatures.',
            source: 'Judge then polish.',
            sample: 'Short sentences accelerate pressure. Sparse detail leaves room for dread. After the lift: Tension climbs when lines stay lean.',
          },
          b: {
            lead: 'Analyse craft in a text about cryptozoology claims, then polish for density.',
            source: '7 min write, 3 min lift. Exact diction; kill repetition.',
            sample: 'Selective detail steers judgement without sermonising. Design, not accident, carries persuasion. After the lift: Exact diction and lean structure do the ethical work.',
          },
        }
      ],
    },
    {
      id: 6,
      title: 'Fair Game',
      focus: 'Rules, justice, and speaking up',
      skillsGoal: 'Practise the full craft toolkit through tonight’s theme.',
      pressureGoal: 'Put the same craft toolkit under pressure through tonight’s theme.',
      soaker:
        {
          id: '6soak',
          title: 'Soaker: Fair Game Warm-Up',
          minutes: 5,
          genre: 'Game',
          mode: 'Fun warm-up',
          skills: ['Power verbs', 'Exact adjectives'],
          coach: 'Keep it loud and fast. Theme words only — sharp, not vague.',
          checklist: [
            'Stay inside tonight’s theme',
            'Fire sharp verbs and exact adjectives',
            'Celebrate the strongest upgrades'
          ],
          a: {
            lead: 'Warm up fair game words.',
            source: 'Upgrade: went → ? · said → ? · big → ? · bad → ? · looked → ?',
            sample: 'went → sprinted / bolted<br>said → snapped / whispered<br>big → towering / massive<br>bad → unfair / flawed<br>looked → scanned / glared',
          },
          b: {
            lead: 'Warm up elevated fair game diction — no playground vagueness.',
            source: 'Upgrade: compete → ? · accuse → ? · prove → ? · fail → ? · decide → ?',
            sample: 'compete → contest / challenge<br>accuse → allege / indict<br>prove → substantiate / corroborate<br>fail → falter / collapse<br>decide → determine / adjudicate',
          },
        },
      skills: [
        {
          id: '6s1',
          title: 'Launch + Lift',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Fix the opener and the verb in one move. Kill any very/really.',
          checklist: [
            'No weak starters (it/a/an/he/she/this/they/then/there…)',
            'Upgrade flat verbs',
            'Delete very/really/extremely'
          ],
          a: {
            lead: 'Rewrite limp lines about fairness.',
            source: '1) There was a problem with the rulebook and they went very quickly.<br>2) She said she was really scared.<br>3) It was a big moment that came suddenly.',
            sample: '1) Across the yard, the rulebook problem sent Kai sprinting.<br>2) “Don’t blink,” Maya whispered, frozen.<br>3) At the umpire, the moment slammed in.',
          },
          b: {
            lead: 'Recast limp lines about procedural justice for craft density.',
            source: '1) There was tension as she walked rather hurriedly into the tribunal room.<br>2) He indicated that the process was extremely unfair.<br>3) It became apparent that the rulebook amendment needed review immediately.',
            sample: '1) Into the tribunal room, Amira strode through calculated quiet.<br>2) “This process collapses under scrutiny,” Noah muttered.<br>3) The rulebook amendment already demanded adjudication.',
          },
        },
        {
          id: '6s2',
          title: 'Open + Tighten',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives'],
          coach: 'Hook first. Then cut empty weight. Keep one exact adjective if needed.',
          checklist: [
            'Strong first sentence',
            'Cut stop-word fluff',
            'Replace vague adjectives (nice/weird/big)'
          ],
          a: {
            lead: 'Rescue this soggy opener about fairness.',
            source: 'There are lots of really important things to know about fairness that just kind of matter in a very big way.',
            sample: 'Fair Game rewards clear eyes and lean sentences. Facts travel farther without filler.',
          },
          b: {
            lead: 'Rescue this soggy opener about procedural justice.',
            source: 'It is important to note that there are a number of somewhat significant issues surrounding procedural justice that kind of influence how people basically respond in stressful situations.',
            sample: 'Fair Game exposes systems when language stays precise. Clarity beats theatrical outrage when due process is on the line.',
          },
        },
        {
          id: '6s3',
          title: 'Persuade Without Repetition',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Three openings. No repeated key nouns/verbs next door. Sound sharp, not stuffed.',
          checklist: [
            'Three strong openings',
            'No adjacent repetition of key nouns/verbs',
            'At least two upgraded vocabulary choices'
          ],
          a: {
            lead: 'Topic: class competitions need the same rules for every team.',
            source: 'Write three openings. Vary language. Take a clear stance.',
            sample: '1) Shared rules make winning mean something.<br>2) Quiet rule-bending teaches the wrong lesson.<br>3) Fair games build trust faster than trophies.',
          },
          b: {
            lead: 'Topic: institutions should publish transparent criteria around procedural justice.',
            source: 'Three elevated openings. No adjacent repetition. Sophisticated but speakable.',
            sample: '1) Transparency around procedural justice is governance, not generosity.<br>2) Secret criteria breed legitimate distrust.<br>3) Published standards protect both process and people.',
          },
        },
        {
          id: '6s4',
          title: 'Five-Skill Sprint',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Minimise stop words'],
          coach: 'Same idea, five sentences. Each sentence must obey the full mini-checklist.',
          checklist: [
            'Five sentences, one idea',
            'Strong starts + power verbs',
            'No very-words, no fluff, no repetition'
          ],
          a: {
            lead: 'Idea: the rulebook appears where it should not.',
            source: 'Build five clean, punchy sentences.',
            sample: 'Beside the umpire, a rulebook waited. Voices dropped. Decisions hardened. Time thinned. Action followed.',
          },
          b: {
            lead: 'Idea: the rulebook amendment appears with one critical line altered.',
            source: 'Five controlled sentences. Multi-skill discipline. Adolescent-to-adult stakes.',
            sample: 'Inside the tribunal room, the altered rulebook amendment waited under glass. Voices flattened. Allegiances hardened. Time compressed. Evidence outran excuses.',
          },
        },
        {
          id: '6s5',
          title: 'Adjective + Verb Pairing',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          skills: ['Exact adjectives', 'Power verbs', 'Strong sentence starts'],
          coach: 'One exact adjective + one power verb per sentence. No stacks.',
          checklist: [
            'Write 5 sentences about one place',
            'One precise adjective per line max',
            'Strong verb + strong start each time'
          ],
          a: {
            lead: 'Place: an umpire linked to fairness.',
            source: 'Make it vivid without decorating every noun.',
            sample: 'Harsh light cut the umpire. Boots scraped. Quiet air waited. Sharp voices returned. Empty chairs listened.',
          },
          b: {
            lead: 'Place: the tribunal room under institutional pressure.',
            source: 'Exact adjective + power verb pairs. Clinical atmosphere.',
            sample: 'Fluorescent glare flattened every face around the tribunal room. Cold laminate bit restless palms. Distant corridor noise braided through sealed doors. Official stamps waited like loaded pauses. Empty chairs listened harder than people.',
          },
        },
        {
          id: '6s6',
          title: 'Cut 30% + Re-open',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          skills: ['Minimise stop words', 'Strong sentence starts', 'Sophisticated vocabulary'],
          coach: 'Compress, then rebuild the first sentence so it hooks.',
          checklist: [
            'Cut roughly 30%',
            'Replace the opener if weak',
            'Keep meaning; raise diction slightly'
          ],
          a: {
            lead: 'Edit this analysis about fairness.',
            source: 'In the text, fairness is something that is really important and this makes readers feel things because they do not know what will happen next.',
            sample: 'Fear and focus cling to fairness. Tension climbs when sentences stay lean.',
          },
          b: {
            lead: 'Edit this analysis of procedural justice.',
            source: 'The piece appears to suggest that careful attention to procedural justice is able to provide a range of somewhat significant benefits that can help communities to navigate conflict in meaningful ways over time.',
            sample: 'Attention to procedural justice clarifies stakes and reduces performative conflict. Lean analysis persuades where slogans stall.',
          },
        },
        {
          id: '6s7',
          title: 'Mentor Mash',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Steal structure, not content. Keep multi-skill discipline.',
          checklist: [
            'Imitate the mentor twice with new content',
            'No weak starters or very-words',
            'No repetition across your two lines'
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Two imitations about fairness.',
            sample: '1) Behind the slogan, a cost crouched.<br>2) Above the cheering, doubt gathered.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated imitations tied to procedural justice.',
            sample: '1) Not every victory is clean; some are crowded with quiet concessions.<br>2) Not every apology repairs trust; some are crowded with image management.',
          },
        },
        {
          id: '6s8',
          title: 'Skills Stack Share',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Perform',
          skills: ['Strong sentence starts', 'Power verbs', 'Exact adjectives', 'Minimise stop words', 'No noun/verb repetition'],
          coach: 'Students read their best line. Class names the skills they hear.',
          checklist: [
            'Pick your strongest sentence from tonight',
            'Read it aloud',
            'Name two skills it demonstrates'
          ],
          a: {
            lead: 'Showcase one sentence about fairness. Defend the craft.',
            source: 'Use the sentence you are proudest of from earlier drills.',
            sample: 'Example: “Mud sprayed behind Kai as he tore toward the umpire.” Skills: strong start, power verb, exact detail.',
          },
          b: {
            lead: 'Showcase one sentence about procedural justice. Defend the craft.',
            source: 'Precision over volume. Name two skills.',
            sample: 'Example: “Compromise sat between them before either admitted the cost.” Skills: strong start, elevated diction, no fluff.',
          },
        }
      ],
      pressure: [
        {
          id: '6p1',
          title: 'Story Opening Under Fire',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition'],
          coach: 'First five sentences set the standard for the whole piece.',
          checklist: [
            '8–12 sentences',
            'No weak starters; no very-words',
            'Varied verbs; no adjacent repetition'
          ],
          a: {
            lead: 'Narrative opening linked to fairness.',
            source: 'Begin in the moment. Multi-skill on.',
            sample: 'Torchlight cut the dark near the umpire as footsteps closed in. Someone counted names twice and still came up short.',
          },
          b: {
            lead: 'Narrative opening: a turning point around procedural justice inside the tribunal room.',
            source: '8–12 sentences. Elevated control. No weak starters or intensifiers.',
            sample: 'Outside the tribunal room, shoes tapped a rehearsed rhythm. Across the table, the rulebook amendment waited like a verdict. Before introductions finished, someone noticed the altered line. Silence did the interviewing after that.',
          },
        },
        {
          id: '6p2',
          title: 'Info Hook + Lean Body',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives', 'Sophisticated vocabulary'],
          coach: 'Hook, explain, trim. Sound smart without stuffing.',
          checklist: [
            '7–10 sentences',
            'Strong open + lean middle',
            'Precise words; minimal fluff'
          ],
          a: {
            lead: 'Explain something important about fairness.',
            source: 'Teach classmates clearly.',
            sample: 'Fair Game looks simple until you track the moving parts. Clear steps beat long excuses.',
          },
          b: {
            lead: 'Explain a non-obvious mechanism behind procedural justice.',
            source: '7–10 elevated informational sentences. Teach without talking down.',
            sample: 'Fair Game looks simple until incentives are mapped. Definitions before opinions prevent circular arguments. Concrete cases turn fog into procedure when due process matters.',
          },
        },
        {
          id: '6p3',
          title: 'Persuade With Full Toolkit',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Argument + craft. Counterpoint welcome.',
          checklist: [
            '10–14 sentences',
            'All listed skills visible',
            'Include one counterpoint + rebuttal'
          ],
          a: {
            lead: 'Persuade on an issue near fairness.',
            source: 'Convince a decision-maker.',
            sample: 'Fair Game is not optional decoration. Critics cite cost; inaction spends more.',
          },
          b: {
            lead: 'Persuade a decision-maker on a contested issue near procedural justice.',
            source: '10–14 sentences. Counterpoint + rebuttal. Full toolkit.',
            sample: 'Fair Game is not optional decoration for policy. Critics cite disruption costs; opaque processes spend more in lost trust. Delay is also a decision — usually the weaker one when due process is already fraying.',
          },
        },
        {
          id: '6p4',
          title: 'Quick Analyse + Polish',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write + edit',
          skills: ['Minimise stop words', 'Exact adjectives', 'No noun/verb repetition', 'Strong sentence starts'],
          coach: '7 minutes write, 3 minutes craft-lift.',
          checklist: [
            'Analyse a craft choice in a scene (invent if needed)',
            'Then cut fluff and repetition',
            'Finish with a cleaner version'
          ],
          a: {
            lead: 'Analyse craft in a scene about fairness.',
            source: 'Judge then polish.',
            sample: 'Short sentences accelerate pressure. Sparse detail leaves room for dread. After the lift: Tension climbs when lines stay lean.',
          },
          b: {
            lead: 'Analyse craft in a text about procedural justice, then polish for density.',
            source: '7 min write, 3 min lift. Exact diction; kill repetition.',
            sample: 'Selective detail steers judgement without sermonising. Design, not accident, carries persuasion. After the lift: Exact diction and lean structure do the ethical work.',
          },
        }
      ],
    },
    {
      id: 7,
      title: 'Deep Ocean',
      focus: 'Depth, pressure, and underwater worlds',
      skillsGoal: 'Practise the full craft toolkit through tonight’s theme.',
      pressureGoal: 'Put the same craft toolkit under pressure through tonight’s theme.',
      soaker:
        {
          id: '7soak',
          title: 'Soaker: Deep Ocean Warm-Up',
          minutes: 5,
          genre: 'Game',
          mode: 'Fun warm-up',
          skills: ['Power verbs', 'Exact adjectives'],
          coach: 'Keep it loud and fast. Theme words only — sharp, not vague.',
          checklist: [
            'Stay inside tonight’s theme',
            'Fire sharp verbs and exact adjectives',
            'Celebrate the strongest upgrades'
          ],
          a: {
            lead: 'Warm up deep ocean words.',
            source: 'Upgrade: went → ? · said → ? · big → ? · bad → ? · looked → ?',
            sample: 'went → sprinted / bolted<br>said → snapped / whispered<br>big → towering / massive<br>bad → unfair / flawed<br>looked → scanned / glared',
          },
          b: {
            lead: 'Warm up elevated deep ocean diction — no playground vagueness.',
            source: 'Upgrade: compete → ? · accuse → ? · prove → ? · fail → ? · decide → ?',
            sample: 'compete → contest / challenge<br>accuse → allege / indict<br>prove → substantiate / corroborate<br>fail → falter / collapse<br>decide → determine / adjudicate',
          },
        },
      skills: [
        {
          id: '7s1',
          title: 'Launch + Lift',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Fix the opener and the verb in one move. Kill any very/really.',
          checklist: [
            'No weak starters (it/a/an/he/she/this/they/then/there…)',
            'Upgrade flat verbs',
            'Delete very/really/extremely'
          ],
          a: {
            lead: 'Rewrite limp lines about the deep ocean.',
            source: '1) There was a problem with the current and they went very quickly.<br>2) She said she was really scared.<br>3) It was a big moment that came suddenly.',
            sample: '1) Across the yard, the current problem sent Kai sprinting.<br>2) “Don’t blink,” Maya whispered, frozen.<br>3) At the reef, the moment slammed in.',
          },
          b: {
            lead: 'Recast limp lines about deep-sea exploration ethics for craft density.',
            source: '1) There was tension as she walked rather hurriedly into the research vessel bridge.<br>2) He indicated that the process was extremely unfair.<br>3) It became apparent that the sonar log needed review immediately.',
            sample: '1) Into the research vessel bridge, Amira strode through calculated quiet.<br>2) “This process collapses under scrutiny,” Noah muttered.<br>3) The sonar log already demanded adjudication.',
          },
        },
        {
          id: '7s2',
          title: 'Open + Tighten',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives'],
          coach: 'Hook first. Then cut empty weight. Keep one exact adjective if needed.',
          checklist: [
            'Strong first sentence',
            'Cut stop-word fluff',
            'Replace vague adjectives (nice/weird/big)'
          ],
          a: {
            lead: 'Rescue this soggy opener about the deep ocean.',
            source: 'There are lots of really important things to know about ocean that just kind of matter in a very big way.',
            sample: 'Deep Ocean rewards clear eyes and lean sentences. Facts travel farther without filler.',
          },
          b: {
            lead: 'Rescue this soggy opener about deep-sea exploration ethics.',
            source: 'It is important to note that there are a number of somewhat significant issues surrounding deep-sea exploration ethics that kind of influence how people basically respond in stressful situations.',
            sample: 'Deep Ocean exposes systems when language stays precise. Clarity beats theatrical outrage when science versus exploitation is on the line.',
          },
        },
        {
          id: '7s3',
          title: 'Persuade Without Repetition',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Three openings. No repeated key nouns/verbs next door. Sound sharp, not stuffed.',
          checklist: [
            'Three strong openings',
            'No adjacent repetition of key nouns/verbs',
            'At least two upgraded vocabulary choices'
          ],
          a: {
            lead: 'Topic: ocean plastic clean-ups should be part of every coastal school year.',
            source: 'Write three openings. Vary language. Take a clear stance.',
            sample: '1) Beach clean-ups teach care you can carry home.<br>2) Plastic does not wait for adult committees.<br>3) Small hands still move heavy problems.',
          },
          b: {
            lead: 'Topic: institutions should publish transparent criteria around deep-sea exploration ethics.',
            source: 'Three elevated openings. No adjacent repetition. Sophisticated but speakable.',
            sample: '1) Transparency around deep-sea exploration ethics is governance, not generosity.<br>2) Secret criteria breed legitimate distrust.<br>3) Published standards protect both process and people.',
          },
        },
        {
          id: '7s4',
          title: 'Five-Skill Sprint',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Minimise stop words'],
          coach: 'Same idea, five sentences. Each sentence must obey the full mini-checklist.',
          checklist: [
            'Five sentences, one idea',
            'Strong starts + power verbs',
            'No very-words, no fluff, no repetition'
          ],
          a: {
            lead: 'Idea: the current appears where it should not.',
            source: 'Build five clean, punchy sentences.',
            sample: 'Beside the reef, a current waited. Voices dropped. Decisions hardened. Time thinned. Action followed.',
          },
          b: {
            lead: 'Idea: the sonar log appears with one critical line altered.',
            source: 'Five controlled sentences. Multi-skill discipline. Adolescent-to-adult stakes.',
            sample: 'Inside the research vessel bridge, the altered sonar log waited under glass. Voices flattened. Allegiances hardened. Time compressed. Evidence outran excuses.',
          },
        },
        {
          id: '7s5',
          title: 'Adjective + Verb Pairing',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          skills: ['Exact adjectives', 'Power verbs', 'Strong sentence starts'],
          coach: 'One exact adjective + one power verb per sentence. No stacks.',
          checklist: [
            'Write 5 sentences about one place',
            'One precise adjective per line max',
            'Strong verb + strong start each time'
          ],
          a: {
            lead: 'Place: a reef linked to ocean.',
            source: 'Make it vivid without decorating every noun.',
            sample: 'Harsh light cut the reef. Boots scraped. Quiet air waited. Sharp voices returned. Empty chairs listened.',
          },
          b: {
            lead: 'Place: the research vessel bridge under institutional pressure.',
            source: 'Exact adjective + power verb pairs. Clinical atmosphere.',
            sample: 'Fluorescent glare flattened every face around the research vessel bridge. Cold laminate bit restless palms. Distant corridor noise braided through sealed doors. Official stamps waited like loaded pauses. Empty chairs listened harder than people.',
          },
        },
        {
          id: '7s6',
          title: 'Cut 30% + Re-open',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          skills: ['Minimise stop words', 'Strong sentence starts', 'Sophisticated vocabulary'],
          coach: 'Compress, then rebuild the first sentence so it hooks.',
          checklist: [
            'Cut roughly 30%',
            'Replace the opener if weak',
            'Keep meaning; raise diction slightly'
          ],
          a: {
            lead: 'Edit this analysis about the deep ocean.',
            source: 'In the text, ocean is something that is really important and this makes readers feel things because they do not know what will happen next.',
            sample: 'Fear and focus cling to ocean. Tension climbs when sentences stay lean.',
          },
          b: {
            lead: 'Edit this analysis of deep-sea exploration ethics.',
            source: 'The piece appears to suggest that careful attention to deep-sea exploration ethics is able to provide a range of somewhat significant benefits that can help communities to navigate conflict in meaningful ways over time.',
            sample: 'Attention to deep-sea exploration ethics clarifies stakes and reduces performative conflict. Lean analysis persuades where slogans stall.',
          },
        },
        {
          id: '7s7',
          title: 'Mentor Mash',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Steal structure, not content. Keep multi-skill discipline.',
          checklist: [
            'Imitate the mentor twice with new content',
            'No weak starters or very-words',
            'No repetition across your two lines'
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Two imitations about the deep ocean.',
            sample: '1) Behind the slogan, a cost crouched.<br>2) Above the cheering, doubt gathered.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated imitations tied to deep-sea exploration ethics.',
            sample: '1) Not every victory is clean; some are crowded with quiet concessions.<br>2) Not every apology repairs trust; some are crowded with image management.',
          },
        },
        {
          id: '7s8',
          title: 'Skills Stack Share',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Perform',
          skills: ['Strong sentence starts', 'Power verbs', 'Exact adjectives', 'Minimise stop words', 'No noun/verb repetition'],
          coach: 'Students read their best line. Class names the skills they hear.',
          checklist: [
            'Pick your strongest sentence from tonight',
            'Read it aloud',
            'Name two skills it demonstrates'
          ],
          a: {
            lead: 'Showcase one sentence about the deep ocean. Defend the craft.',
            source: 'Use the sentence you are proudest of from earlier drills.',
            sample: 'Example: “Mud sprayed behind Kai as he tore toward the reef.” Skills: strong start, power verb, exact detail.',
          },
          b: {
            lead: 'Showcase one sentence about deep-sea exploration ethics. Defend the craft.',
            source: 'Precision over volume. Name two skills.',
            sample: 'Example: “Compromise sat between them before either admitted the cost.” Skills: strong start, elevated diction, no fluff.',
          },
        }
      ],
      pressure: [
        {
          id: '7p1',
          title: 'Story Opening Under Fire',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition'],
          coach: 'First five sentences set the standard for the whole piece.',
          checklist: [
            '8–12 sentences',
            'No weak starters; no very-words',
            'Varied verbs; no adjacent repetition'
          ],
          a: {
            lead: 'Narrative opening linked to ocean.',
            source: 'Begin in the moment. Multi-skill on.',
            sample: 'Torchlight cut the dark near the reef as footsteps closed in. Someone counted names twice and still came up short.',
          },
          b: {
            lead: 'Narrative opening: a turning point around deep-sea exploration ethics inside the research vessel bridge.',
            source: '8–12 sentences. Elevated control. No weak starters or intensifiers.',
            sample: 'Outside the research vessel bridge, shoes tapped a rehearsed rhythm. Across the table, the sonar log waited like a verdict. Before introductions finished, someone noticed the altered line. Silence did the interviewing after that.',
          },
        },
        {
          id: '7p2',
          title: 'Info Hook + Lean Body',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives', 'Sophisticated vocabulary'],
          coach: 'Hook, explain, trim. Sound smart without stuffing.',
          checklist: [
            '7–10 sentences',
            'Strong open + lean middle',
            'Precise words; minimal fluff'
          ],
          a: {
            lead: 'Explain something important about the deep ocean.',
            source: 'Teach classmates clearly.',
            sample: 'Deep Ocean looks simple until you track the moving parts. Clear steps beat long excuses.',
          },
          b: {
            lead: 'Explain a non-obvious mechanism behind deep-sea exploration ethics.',
            source: '7–10 elevated informational sentences. Teach without talking down.',
            sample: 'Deep Ocean looks simple until incentives are mapped. Definitions before opinions prevent circular arguments. Concrete cases turn fog into procedure when science versus exploitation matters.',
          },
        },
        {
          id: '7p3',
          title: 'Persuade With Full Toolkit',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Argument + craft. Counterpoint welcome.',
          checklist: [
            '10–14 sentences',
            'All listed skills visible',
            'Include one counterpoint + rebuttal'
          ],
          a: {
            lead: 'Persuade on an issue near ocean.',
            source: 'Convince a decision-maker.',
            sample: 'Deep Ocean is not optional decoration. Critics cite cost; inaction spends more.',
          },
          b: {
            lead: 'Persuade a decision-maker on a contested issue near deep-sea exploration ethics.',
            source: '10–14 sentences. Counterpoint + rebuttal. Full toolkit.',
            sample: 'Deep Ocean is not optional decoration for policy. Critics cite disruption costs; opaque processes spend more in lost trust. Delay is also a decision — usually the weaker one when science versus exploitation is already fraying.',
          },
        },
        {
          id: '7p4',
          title: 'Quick Analyse + Polish',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write + edit',
          skills: ['Minimise stop words', 'Exact adjectives', 'No noun/verb repetition', 'Strong sentence starts'],
          coach: '7 minutes write, 3 minutes craft-lift.',
          checklist: [
            'Analyse a craft choice in a scene (invent if needed)',
            'Then cut fluff and repetition',
            'Finish with a cleaner version'
          ],
          a: {
            lead: 'Analyse craft in a scene about the deep ocean.',
            source: 'Judge then polish.',
            sample: 'Short sentences accelerate pressure. Sparse detail leaves room for dread. After the lift: Tension climbs when lines stay lean.',
          },
          b: {
            lead: 'Analyse craft in a text about deep-sea exploration ethics, then polish for density.',
            source: '7 min write, 3 min lift. Exact diction; kill repetition.',
            sample: 'Selective detail steers judgement without sermonising. Design, not accident, carries persuasion. After the lift: Exact diction and lean structure do the ethical work.',
          },
        }
      ],
    },
    {
      id: 8,
      title: 'Future City',
      focus: 'Transport, towers, and tomorrow’s streets',
      skillsGoal: 'Practise the full craft toolkit through tonight’s theme.',
      pressureGoal: 'Put the same craft toolkit under pressure through tonight’s theme.',
      soaker:
        {
          id: '8soak',
          title: 'Soaker: Future City Warm-Up',
          minutes: 5,
          genre: 'Game',
          mode: 'Fun warm-up',
          skills: ['Power verbs', 'Exact adjectives'],
          coach: 'Keep it loud and fast. Theme words only — sharp, not vague.',
          checklist: [
            'Stay inside tonight’s theme',
            'Fire sharp verbs and exact adjectives',
            'Celebrate the strongest upgrades'
          ],
          a: {
            lead: 'Warm up future city words.',
            source: 'Upgrade: went → ? · said → ? · big → ? · bad → ? · looked → ?',
            sample: 'went → sprinted / bolted<br>said → snapped / whispered<br>big → towering / massive<br>bad → unfair / flawed<br>looked → scanned / glared',
          },
          b: {
            lead: 'Warm up elevated future city diction — no playground vagueness.',
            source: 'Upgrade: compete → ? · accuse → ? · prove → ? · fail → ? · decide → ?',
            sample: 'compete → contest / challenge<br>accuse → allege / indict<br>prove → substantiate / corroborate<br>fail → falter / collapse<br>decide → determine / adjudicate',
          },
        },
      skills: [
        {
          id: '8s1',
          title: 'Launch + Lift',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Fix the opener and the verb in one move. Kill any very/really.',
          checklist: [
            'No weak starters (it/a/an/he/she/this/they/then/there…)',
            'Upgrade flat verbs',
            'Delete very/really/extremely'
          ],
          a: {
            lead: 'Rewrite limp lines about future city.',
            source: '1) There was a problem with the drone and they went very quickly.<br>2) She said she was really scared.<br>3) It was a big moment that came suddenly.',
            sample: '1) Across the yard, the drone problem sent Kai sprinting.<br>2) “Don’t blink,” Maya whispered, frozen.<br>3) At the skyrail, the moment slammed in.',
          },
          b: {
            lead: 'Recast limp lines about automated urban systems for craft density.',
            source: '1) There was tension as she walked rather hurriedly into the traffic control hub.<br>2) He indicated that the process was extremely unfair.<br>3) It became apparent that the sensor feed needed review immediately.',
            sample: '1) Into the traffic control hub, Amira strode through calculated quiet.<br>2) “This process collapses under scrutiny,” Noah muttered.<br>3) The sensor feed already demanded adjudication.',
          },
        },
        {
          id: '8s2',
          title: 'Open + Tighten',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives'],
          coach: 'Hook first. Then cut empty weight. Keep one exact adjective if needed.',
          checklist: [
            'Strong first sentence',
            'Cut stop-word fluff',
            'Replace vague adjectives (nice/weird/big)'
          ],
          a: {
            lead: 'Rescue this soggy opener about future city.',
            source: 'There are lots of really important things to know about future city that just kind of matter in a very big way.',
            sample: 'Future City rewards clear eyes and lean sentences. Facts travel farther without filler.',
          },
          b: {
            lead: 'Rescue this soggy opener about automated urban systems.',
            source: 'It is important to note that there are a number of somewhat significant issues surrounding automated urban systems that kind of influence how people basically respond in stressful situations.',
            sample: 'Future City exposes systems when language stays precise. Clarity beats theatrical outrage when efficiency versus liberty is on the line.',
          },
        },
        {
          id: '8s3',
          title: 'Persuade Without Repetition',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Three openings. No repeated key nouns/verbs next door. Sound sharp, not stuffed.',
          checklist: [
            'Three strong openings',
            'No adjacent repetition of key nouns/verbs',
            'At least two upgraded vocabulary choices'
          ],
          a: {
            lead: 'Topic: future-city designs should include parks, not only towers and sensors.',
            source: 'Write three openings. Vary language. Take a clear stance.',
            sample: '1) Parks keep future cities human.<br>2) Sensors cannot replace shade and play.<br>3) Green space is infrastructure kids use daily.',
          },
          b: {
            lead: 'Topic: institutions should publish transparent criteria around automated urban systems.',
            source: 'Three elevated openings. No adjacent repetition. Sophisticated but speakable.',
            sample: '1) Transparency around automated urban systems is governance, not generosity.<br>2) Secret criteria breed legitimate distrust.<br>3) Published standards protect both process and people.',
          },
        },
        {
          id: '8s4',
          title: 'Five-Skill Sprint',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Minimise stop words'],
          coach: 'Same idea, five sentences. Each sentence must obey the full mini-checklist.',
          checklist: [
            'Five sentences, one idea',
            'Strong starts + power verbs',
            'No very-words, no fluff, no repetition'
          ],
          a: {
            lead: 'Idea: the drone appears where it should not.',
            source: 'Build five clean, punchy sentences.',
            sample: 'Beside the skyrail, a drone waited. Voices dropped. Decisions hardened. Time thinned. Action followed.',
          },
          b: {
            lead: 'Idea: the sensor feed appears with one critical line altered.',
            source: 'Five controlled sentences. Multi-skill discipline. Adolescent-to-adult stakes.',
            sample: 'Inside the traffic control hub, the altered sensor feed waited under glass. Voices flattened. Allegiances hardened. Time compressed. Evidence outran excuses.',
          },
        },
        {
          id: '8s5',
          title: 'Adjective + Verb Pairing',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          skills: ['Exact adjectives', 'Power verbs', 'Strong sentence starts'],
          coach: 'One exact adjective + one power verb per sentence. No stacks.',
          checklist: [
            'Write 5 sentences about one place',
            'One precise adjective per line max',
            'Strong verb + strong start each time'
          ],
          a: {
            lead: 'Place: a skyrail linked to future city.',
            source: 'Make it vivid without decorating every noun.',
            sample: 'Harsh light cut the skyrail. Boots scraped. Quiet air waited. Sharp voices returned. Empty chairs listened.',
          },
          b: {
            lead: 'Place: the traffic control hub under institutional pressure.',
            source: 'Exact adjective + power verb pairs. Clinical atmosphere.',
            sample: 'Fluorescent glare flattened every face around the traffic control hub. Cold laminate bit restless palms. Distant corridor noise braided through sealed doors. Official stamps waited like loaded pauses. Empty chairs listened harder than people.',
          },
        },
        {
          id: '8s6',
          title: 'Cut 30% + Re-open',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          skills: ['Minimise stop words', 'Strong sentence starts', 'Sophisticated vocabulary'],
          coach: 'Compress, then rebuild the first sentence so it hooks.',
          checklist: [
            'Cut roughly 30%',
            'Replace the opener if weak',
            'Keep meaning; raise diction slightly'
          ],
          a: {
            lead: 'Edit this analysis about future city.',
            source: 'In the text, future city is something that is really important and this makes readers feel things because they do not know what will happen next.',
            sample: 'Fear and focus cling to future city. Tension climbs when sentences stay lean.',
          },
          b: {
            lead: 'Edit this analysis of automated urban systems.',
            source: 'The piece appears to suggest that careful attention to automated urban systems is able to provide a range of somewhat significant benefits that can help communities to navigate conflict in meaningful ways over time.',
            sample: 'Attention to automated urban systems clarifies stakes and reduces performative conflict. Lean analysis persuades where slogans stall.',
          },
        },
        {
          id: '8s7',
          title: 'Mentor Mash',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Steal structure, not content. Keep multi-skill discipline.',
          checklist: [
            'Imitate the mentor twice with new content',
            'No weak starters or very-words',
            'No repetition across your two lines'
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Two imitations about future city.',
            sample: '1) Behind the slogan, a cost crouched.<br>2) Above the cheering, doubt gathered.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated imitations tied to automated urban systems.',
            sample: '1) Not every victory is clean; some are crowded with quiet concessions.<br>2) Not every apology repairs trust; some are crowded with image management.',
          },
        },
        {
          id: '8s8',
          title: 'Skills Stack Share',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Perform',
          skills: ['Strong sentence starts', 'Power verbs', 'Exact adjectives', 'Minimise stop words', 'No noun/verb repetition'],
          coach: 'Students read their best line. Class names the skills they hear.',
          checklist: [
            'Pick your strongest sentence from tonight',
            'Read it aloud',
            'Name two skills it demonstrates'
          ],
          a: {
            lead: 'Showcase one sentence about future city. Defend the craft.',
            source: 'Use the sentence you are proudest of from earlier drills.',
            sample: 'Example: “Mud sprayed behind Kai as he tore toward the skyrail.” Skills: strong start, power verb, exact detail.',
          },
          b: {
            lead: 'Showcase one sentence about automated urban systems. Defend the craft.',
            source: 'Precision over volume. Name two skills.',
            sample: 'Example: “Compromise sat between them before either admitted the cost.” Skills: strong start, elevated diction, no fluff.',
          },
        }
      ],
      pressure: [
        {
          id: '8p1',
          title: 'Story Opening Under Fire',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition'],
          coach: 'First five sentences set the standard for the whole piece.',
          checklist: [
            '8–12 sentences',
            'No weak starters; no very-words',
            'Varied verbs; no adjacent repetition'
          ],
          a: {
            lead: 'Narrative opening linked to future city.',
            source: 'Begin in the moment. Multi-skill on.',
            sample: 'Torchlight cut the dark near the skyrail as footsteps closed in. Someone counted names twice and still came up short.',
          },
          b: {
            lead: 'Narrative opening: a turning point around automated urban systems inside the traffic control hub.',
            source: '8–12 sentences. Elevated control. No weak starters or intensifiers.',
            sample: 'Outside the traffic control hub, shoes tapped a rehearsed rhythm. Across the table, the sensor feed waited like a verdict. Before introductions finished, someone noticed the altered line. Silence did the interviewing after that.',
          },
        },
        {
          id: '8p2',
          title: 'Info Hook + Lean Body',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives', 'Sophisticated vocabulary'],
          coach: 'Hook, explain, trim. Sound smart without stuffing.',
          checklist: [
            '7–10 sentences',
            'Strong open + lean middle',
            'Precise words; minimal fluff'
          ],
          a: {
            lead: 'Explain something important about future city.',
            source: 'Teach classmates clearly.',
            sample: 'Future City looks simple until you track the moving parts. Clear steps beat long excuses.',
          },
          b: {
            lead: 'Explain a non-obvious mechanism behind automated urban systems.',
            source: '7–10 elevated informational sentences. Teach without talking down.',
            sample: 'Future City looks simple until incentives are mapped. Definitions before opinions prevent circular arguments. Concrete cases turn fog into procedure when efficiency versus liberty matters.',
          },
        },
        {
          id: '8p3',
          title: 'Persuade With Full Toolkit',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Argument + craft. Counterpoint welcome.',
          checklist: [
            '10–14 sentences',
            'All listed skills visible',
            'Include one counterpoint + rebuttal'
          ],
          a: {
            lead: 'Persuade on an issue near future city.',
            source: 'Convince a decision-maker.',
            sample: 'Future City is not optional decoration. Critics cite cost; inaction spends more.',
          },
          b: {
            lead: 'Persuade a decision-maker on a contested issue near automated urban systems.',
            source: '10–14 sentences. Counterpoint + rebuttal. Full toolkit.',
            sample: 'Future City is not optional decoration for policy. Critics cite disruption costs; opaque processes spend more in lost trust. Delay is also a decision — usually the weaker one when efficiency versus liberty is already fraying.',
          },
        },
        {
          id: '8p4',
          title: 'Quick Analyse + Polish',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write + edit',
          skills: ['Minimise stop words', 'Exact adjectives', 'No noun/verb repetition', 'Strong sentence starts'],
          coach: '7 minutes write, 3 minutes craft-lift.',
          checklist: [
            'Analyse a craft choice in a scene (invent if needed)',
            'Then cut fluff and repetition',
            'Finish with a cleaner version'
          ],
          a: {
            lead: 'Analyse craft in a scene about future city.',
            source: 'Judge then polish.',
            sample: 'Short sentences accelerate pressure. Sparse detail leaves room for dread. After the lift: Tension climbs when lines stay lean.',
          },
          b: {
            lead: 'Analyse craft in a text about automated urban systems, then polish for density.',
            source: '7 min write, 3 min lift. Exact diction; kill repetition.',
            sample: 'Selective detail steers judgement without sermonising. Design, not accident, carries persuasion. After the lift: Exact diction and lean structure do the ethical work.',
          },
        }
      ],
    },
    {
      id: 9,
      title: 'Heroes & Villains',
      focus: 'Courage, choices, and consequences',
      skillsGoal: 'Practise the full craft toolkit through tonight’s theme.',
      pressureGoal: 'Put the same craft toolkit under pressure through tonight’s theme.',
      soaker:
        {
          id: '9soak',
          title: 'Soaker: Heroes & Villains Warm-Up',
          minutes: 5,
          genre: 'Game',
          mode: 'Fun warm-up',
          skills: ['Power verbs', 'Exact adjectives'],
          coach: 'Keep it loud and fast. Theme words only — sharp, not vague.',
          checklist: [
            'Stay inside tonight’s theme',
            'Fire sharp verbs and exact adjectives',
            'Celebrate the strongest upgrades'
          ],
          a: {
            lead: 'Warm up heroes & villains words.',
            source: 'Upgrade: went → ? · said → ? · big → ? · bad → ? · looked → ?',
            sample: 'went → sprinted / bolted<br>said → snapped / whispered<br>big → towering / massive<br>bad → unfair / flawed<br>looked → scanned / glared',
          },
          b: {
            lead: 'Warm up elevated heroes & villains diction — no playground vagueness.',
            source: 'Upgrade: compete → ? · accuse → ? · prove → ? · fail → ? · decide → ?',
            sample: 'compete → contest / challenge<br>accuse → allege / indict<br>prove → substantiate / corroborate<br>fail → falter / collapse<br>decide → determine / adjudicate',
          },
        },
      skills: [
        {
          id: '9s1',
          title: 'Launch + Lift',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Fix the opener and the verb in one move. Kill any very/really.',
          checklist: [
            'No weak starters (it/a/an/he/she/this/they/then/there…)',
            'Upgrade flat verbs',
            'Delete very/really/extremely'
          ],
          a: {
            lead: 'Rewrite limp lines about hero.',
            source: '1) There was a problem with the villain and they went very quickly.<br>2) She said she was really scared.<br>3) It was a big moment that came suddenly.',
            sample: '1) Across the yard, the villain problem sent Kai sprinting.<br>2) “Don’t blink,” Maya whispered, frozen.<br>3) At the choice, the moment slammed in.',
          },
          b: {
            lead: 'Recast limp lines about moral ambiguity in leadership for craft density.',
            source: '1) There was tension as she walked rather hurriedly into the press conference foyer.<br>2) He indicated that the process was extremely unfair.<br>3) It became apparent that the leaked directive needed review immediately.',
            sample: '1) Into the press conference foyer, Amira strode through calculated quiet.<br>2) “This process collapses under scrutiny,” Noah muttered.<br>3) The leaked directive already demanded adjudication.',
          },
        },
        {
          id: '9s2',
          title: 'Open + Tighten',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives'],
          coach: 'Hook first. Then cut empty weight. Keep one exact adjective if needed.',
          checklist: [
            'Strong first sentence',
            'Cut stop-word fluff',
            'Replace vague adjectives (nice/weird/big)'
          ],
          a: {
            lead: 'Rescue this soggy opener about hero.',
            source: 'There are lots of really important things to know about hero that just kind of matter in a very big way.',
            sample: 'Heroes & Villains rewards clear eyes and lean sentences. Facts travel farther without filler.',
          },
          b: {
            lead: 'Rescue this soggy opener about moral ambiguity in leadership.',
            source: 'It is important to note that there are a number of somewhat significant issues surrounding moral ambiguity in leadership that kind of influence how people basically respond in stressful situations.',
            sample: 'Heroes & Villains exposes systems when language stays precise. Clarity beats theatrical outrage when courage versus image is on the line.',
          },
        },
        {
          id: '9s3',
          title: 'Persuade Without Repetition',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Three openings. No repeated key nouns/verbs next door. Sound sharp, not stuffed.',
          checklist: [
            'Three strong openings',
            'No adjacent repetition of key nouns/verbs',
            'At least two upgraded vocabulary choices'
          ],
          a: {
            lead: 'Topic: classroom “heroes” should be people who help others, not only winners.',
            source: 'Write three openings. Vary language. Take a clear stance.',
            sample: '1) Helpfulness deserves louder praise than trophies.<br>2) Quiet helpers hold classes together.<br>3) Hero stories teach what we choose to admire.',
          },
          b: {
            lead: 'Topic: institutions should publish transparent criteria around moral ambiguity in leadership.',
            source: 'Three elevated openings. No adjacent repetition. Sophisticated but speakable.',
            sample: '1) Transparency around moral ambiguity in leadership is governance, not generosity.<br>2) Secret criteria breed legitimate distrust.<br>3) Published standards protect both process and people.',
          },
        },
        {
          id: '9s4',
          title: 'Five-Skill Sprint',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Minimise stop words'],
          coach: 'Same idea, five sentences. Each sentence must obey the full mini-checklist.',
          checklist: [
            'Five sentences, one idea',
            'Strong starts + power verbs',
            'No very-words, no fluff, no repetition'
          ],
          a: {
            lead: 'Idea: the villain appears where it should not.',
            source: 'Build five clean, punchy sentences.',
            sample: 'Beside the choice, a villain waited. Voices dropped. Decisions hardened. Time thinned. Action followed.',
          },
          b: {
            lead: 'Idea: the leaked directive appears with one critical line altered.',
            source: 'Five controlled sentences. Multi-skill discipline. Adolescent-to-adult stakes.',
            sample: 'Inside the press conference foyer, the altered leaked directive waited under glass. Voices flattened. Allegiances hardened. Time compressed. Evidence outran excuses.',
          },
        },
        {
          id: '9s5',
          title: 'Adjective + Verb Pairing',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          skills: ['Exact adjectives', 'Power verbs', 'Strong sentence starts'],
          coach: 'One exact adjective + one power verb per sentence. No stacks.',
          checklist: [
            'Write 5 sentences about one place',
            'One precise adjective per line max',
            'Strong verb + strong start each time'
          ],
          a: {
            lead: 'Place: a choice linked to hero.',
            source: 'Make it vivid without decorating every noun.',
            sample: 'Harsh light cut the choice. Boots scraped. Quiet air waited. Sharp voices returned. Empty chairs listened.',
          },
          b: {
            lead: 'Place: the press conference foyer under institutional pressure.',
            source: 'Exact adjective + power verb pairs. Clinical atmosphere.',
            sample: 'Fluorescent glare flattened every face around the press conference foyer. Cold laminate bit restless palms. Distant corridor noise braided through sealed doors. Official stamps waited like loaded pauses. Empty chairs listened harder than people.',
          },
        },
        {
          id: '9s6',
          title: 'Cut 30% + Re-open',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          skills: ['Minimise stop words', 'Strong sentence starts', 'Sophisticated vocabulary'],
          coach: 'Compress, then rebuild the first sentence so it hooks.',
          checklist: [
            'Cut roughly 30%',
            'Replace the opener if weak',
            'Keep meaning; raise diction slightly'
          ],
          a: {
            lead: 'Edit this analysis about hero.',
            source: 'In the text, hero is something that is really important and this makes readers feel things because they do not know what will happen next.',
            sample: 'Fear and focus cling to hero. Tension climbs when sentences stay lean.',
          },
          b: {
            lead: 'Edit this analysis of moral ambiguity in leadership.',
            source: 'The piece appears to suggest that careful attention to moral ambiguity in leadership is able to provide a range of somewhat significant benefits that can help communities to navigate conflict in meaningful ways over time.',
            sample: 'Attention to moral ambiguity in leadership clarifies stakes and reduces performative conflict. Lean analysis persuades where slogans stall.',
          },
        },
        {
          id: '9s7',
          title: 'Mentor Mash',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Steal structure, not content. Keep multi-skill discipline.',
          checklist: [
            'Imitate the mentor twice with new content',
            'No weak starters or very-words',
            'No repetition across your two lines'
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Two imitations about hero.',
            sample: '1) Behind the slogan, a cost crouched.<br>2) Above the cheering, doubt gathered.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated imitations tied to moral ambiguity in leadership.',
            sample: '1) Not every victory is clean; some are crowded with quiet concessions.<br>2) Not every apology repairs trust; some are crowded with image management.',
          },
        },
        {
          id: '9s8',
          title: 'Skills Stack Share',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Perform',
          skills: ['Strong sentence starts', 'Power verbs', 'Exact adjectives', 'Minimise stop words', 'No noun/verb repetition'],
          coach: 'Students read their best line. Class names the skills they hear.',
          checklist: [
            'Pick your strongest sentence from tonight',
            'Read it aloud',
            'Name two skills it demonstrates'
          ],
          a: {
            lead: 'Showcase one sentence about hero. Defend the craft.',
            source: 'Use the sentence you are proudest of from earlier drills.',
            sample: 'Example: “Mud sprayed behind Kai as he tore toward the choice.” Skills: strong start, power verb, exact detail.',
          },
          b: {
            lead: 'Showcase one sentence about moral ambiguity in leadership. Defend the craft.',
            source: 'Precision over volume. Name two skills.',
            sample: 'Example: “Compromise sat between them before either admitted the cost.” Skills: strong start, elevated diction, no fluff.',
          },
        }
      ],
      pressure: [
        {
          id: '9p1',
          title: 'Story Opening Under Fire',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition'],
          coach: 'First five sentences set the standard for the whole piece.',
          checklist: [
            '8–12 sentences',
            'No weak starters; no very-words',
            'Varied verbs; no adjacent repetition'
          ],
          a: {
            lead: 'Narrative opening linked to hero.',
            source: 'Begin in the moment. Multi-skill on.',
            sample: 'Torchlight cut the dark near the choice as footsteps closed in. Someone counted names twice and still came up short.',
          },
          b: {
            lead: 'Narrative opening: a turning point around moral ambiguity in leadership inside the press conference foyer.',
            source: '8–12 sentences. Elevated control. No weak starters or intensifiers.',
            sample: 'Outside the press conference foyer, shoes tapped a rehearsed rhythm. Across the table, the leaked directive waited like a verdict. Before introductions finished, someone noticed the altered line. Silence did the interviewing after that.',
          },
        },
        {
          id: '9p2',
          title: 'Info Hook + Lean Body',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives', 'Sophisticated vocabulary'],
          coach: 'Hook, explain, trim. Sound smart without stuffing.',
          checklist: [
            '7–10 sentences',
            'Strong open + lean middle',
            'Precise words; minimal fluff'
          ],
          a: {
            lead: 'Explain something important about hero.',
            source: 'Teach classmates clearly.',
            sample: 'Heroes & Villains looks simple until you track the moving parts. Clear steps beat long excuses.',
          },
          b: {
            lead: 'Explain a non-obvious mechanism behind moral ambiguity in leadership.',
            source: '7–10 elevated informational sentences. Teach without talking down.',
            sample: 'Heroes & Villains looks simple until incentives are mapped. Definitions before opinions prevent circular arguments. Concrete cases turn fog into procedure when courage versus image matters.',
          },
        },
        {
          id: '9p3',
          title: 'Persuade With Full Toolkit',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Argument + craft. Counterpoint welcome.',
          checklist: [
            '10–14 sentences',
            'All listed skills visible',
            'Include one counterpoint + rebuttal'
          ],
          a: {
            lead: 'Persuade on an issue near hero.',
            source: 'Convince a decision-maker.',
            sample: 'Heroes & Villains is not optional decoration. Critics cite cost; inaction spends more.',
          },
          b: {
            lead: 'Persuade a decision-maker on a contested issue near moral ambiguity in leadership.',
            source: '10–14 sentences. Counterpoint + rebuttal. Full toolkit.',
            sample: 'Heroes & Villains is not optional decoration for policy. Critics cite disruption costs; opaque processes spend more in lost trust. Delay is also a decision — usually the weaker one when courage versus image is already fraying.',
          },
        },
        {
          id: '9p4',
          title: 'Quick Analyse + Polish',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write + edit',
          skills: ['Minimise stop words', 'Exact adjectives', 'No noun/verb repetition', 'Strong sentence starts'],
          coach: '7 minutes write, 3 minutes craft-lift.',
          checklist: [
            'Analyse a craft choice in a scene (invent if needed)',
            'Then cut fluff and repetition',
            'Finish with a cleaner version'
          ],
          a: {
            lead: 'Analyse craft in a scene about hero.',
            source: 'Judge then polish.',
            sample: 'Short sentences accelerate pressure. Sparse detail leaves room for dread. After the lift: Tension climbs when lines stay lean.',
          },
          b: {
            lead: 'Analyse craft in a text about moral ambiguity in leadership, then polish for density.',
            source: '7 min write, 3 min lift. Exact diction; kill repetition.',
            sample: 'Selective detail steers judgement without sermonising. Design, not accident, carries persuasion. After the lift: Exact diction and lean structure do the ethical work.',
          },
        }
      ],
    },
    {
      id: 10,
      title: 'Second Chance',
      focus: 'Replays, repairs, and fresh starts',
      skillsGoal: 'Practise the full craft toolkit through tonight’s theme.',
      pressureGoal: 'Put the same craft toolkit under pressure through tonight’s theme.',
      soaker:
        {
          id: '10soak',
          title: 'Soaker: Second Chance Warm-Up',
          minutes: 5,
          genre: 'Game',
          mode: 'Fun warm-up',
          skills: ['Power verbs', 'Exact adjectives'],
          coach: 'Keep it loud and fast. Theme words only — sharp, not vague.',
          checklist: [
            'Stay inside tonight’s theme',
            'Fire sharp verbs and exact adjectives',
            'Celebrate the strongest upgrades'
          ],
          a: {
            lead: 'Warm up second chance words.',
            source: 'Upgrade: went → ? · said → ? · big → ? · bad → ? · looked → ?',
            sample: 'went → sprinted / bolted<br>said → snapped / whispered<br>big → towering / massive<br>bad → unfair / flawed<br>looked → scanned / glared',
          },
          b: {
            lead: 'Warm up elevated second chance diction — no playground vagueness.',
            source: 'Upgrade: compete → ? · accuse → ? · prove → ? · fail → ? · decide → ?',
            sample: 'compete → contest / challenge<br>accuse → allege / indict<br>prove → substantiate / corroborate<br>fail → falter / collapse<br>decide → determine / adjudicate',
          },
        },
      skills: [
        {
          id: '10s1',
          title: 'Launch + Lift',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Fix the opener and the verb in one move. Kill any very/really.',
          checklist: [
            'No weak starters (it/a/an/he/she/this/they/then/there…)',
            'Upgrade flat verbs',
            'Delete very/really/extremely'
          ],
          a: {
            lead: 'Rewrite limp lines about second chance.',
            source: '1) There was a problem with the restart and they went very quickly.<br>2) She said she was really scared.<br>3) It was a big moment that came suddenly.',
            sample: '1) Across the yard, the restart problem sent Kai sprinting.<br>2) “Don’t blink,” Maya whispered, frozen.<br>3) At the apology, the moment slammed in.',
          },
          b: {
            lead: 'Recast limp lines about restorative practice for craft density.',
            source: '1) There was tension as she walked rather hurriedly into the mediation suite.<br>2) He indicated that the process was extremely unfair.<br>3) It became apparent that the repair agreement needed review immediately.',
            sample: '1) Into the mediation suite, Amira strode through calculated quiet.<br>2) “This process collapses under scrutiny,” Noah muttered.<br>3) The repair agreement already demanded adjudication.',
          },
        },
        {
          id: '10s2',
          title: 'Open + Tighten',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives'],
          coach: 'Hook first. Then cut empty weight. Keep one exact adjective if needed.',
          checklist: [
            'Strong first sentence',
            'Cut stop-word fluff',
            'Replace vague adjectives (nice/weird/big)'
          ],
          a: {
            lead: 'Rescue this soggy opener about second chance.',
            source: 'There are lots of really important things to know about second chance that just kind of matter in a very big way.',
            sample: 'Second Chance rewards clear eyes and lean sentences. Facts travel farther without filler.',
          },
          b: {
            lead: 'Rescue this soggy opener about restorative practice.',
            source: 'It is important to note that there are a number of somewhat significant issues surrounding restorative practice that kind of influence how people basically respond in stressful situations.',
            sample: 'Second Chance exposes systems when language stays precise. Clarity beats theatrical outrage when accountability versus soft resets is on the line.',
          },
        },
        {
          id: '10s3',
          title: 'Persuade Without Repetition',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Three openings. No repeated key nouns/verbs next door. Sound sharp, not stuffed.',
          checklist: [
            'Three strong openings',
            'No adjacent repetition of key nouns/verbs',
            'At least two upgraded vocabulary choices'
          ],
          a: {
            lead: 'Topic: students who make a mistake should get one clear chance to repair it.',
            source: 'Write three openings. Vary language. Take a clear stance.',
            sample: '1) Repair teaches more than permanent labels.<br>2) One clear chance rebuilds trust.<br>3) Fresh starts still need honest ownership.',
          },
          b: {
            lead: 'Topic: institutions should publish transparent criteria around restorative practice.',
            source: 'Three elevated openings. No adjacent repetition. Sophisticated but speakable.',
            sample: '1) Transparency around restorative practice is governance, not generosity.<br>2) Secret criteria breed legitimate distrust.<br>3) Published standards protect both process and people.',
          },
        },
        {
          id: '10s4',
          title: 'Five-Skill Sprint',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Minimise stop words'],
          coach: 'Same idea, five sentences. Each sentence must obey the full mini-checklist.',
          checklist: [
            'Five sentences, one idea',
            'Strong starts + power verbs',
            'No very-words, no fluff, no repetition'
          ],
          a: {
            lead: 'Idea: the restart appears where it should not.',
            source: 'Build five clean, punchy sentences.',
            sample: 'Beside the apology, a restart waited. Voices dropped. Decisions hardened. Time thinned. Action followed.',
          },
          b: {
            lead: 'Idea: the repair agreement appears with one critical line altered.',
            source: 'Five controlled sentences. Multi-skill discipline. Adolescent-to-adult stakes.',
            sample: 'Inside the mediation suite, the altered repair agreement waited under glass. Voices flattened. Allegiances hardened. Time compressed. Evidence outran excuses.',
          },
        },
        {
          id: '10s5',
          title: 'Adjective + Verb Pairing',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          skills: ['Exact adjectives', 'Power verbs', 'Strong sentence starts'],
          coach: 'One exact adjective + one power verb per sentence. No stacks.',
          checklist: [
            'Write 5 sentences about one place',
            'One precise adjective per line max',
            'Strong verb + strong start each time'
          ],
          a: {
            lead: 'Place: a apology linked to second chance.',
            source: 'Make it vivid without decorating every noun.',
            sample: 'Harsh light cut the apology. Boots scraped. Quiet air waited. Sharp voices returned. Empty chairs listened.',
          },
          b: {
            lead: 'Place: the mediation suite under institutional pressure.',
            source: 'Exact adjective + power verb pairs. Clinical atmosphere.',
            sample: 'Fluorescent glare flattened every face around the mediation suite. Cold laminate bit restless palms. Distant corridor noise braided through sealed doors. Official stamps waited like loaded pauses. Empty chairs listened harder than people.',
          },
        },
        {
          id: '10s6',
          title: 'Cut 30% + Re-open',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          skills: ['Minimise stop words', 'Strong sentence starts', 'Sophisticated vocabulary'],
          coach: 'Compress, then rebuild the first sentence so it hooks.',
          checklist: [
            'Cut roughly 30%',
            'Replace the opener if weak',
            'Keep meaning; raise diction slightly'
          ],
          a: {
            lead: 'Edit this analysis about second chance.',
            source: 'In the text, second chance is something that is really important and this makes readers feel things because they do not know what will happen next.',
            sample: 'Fear and focus cling to second chance. Tension climbs when sentences stay lean.',
          },
          b: {
            lead: 'Edit this analysis of restorative practice.',
            source: 'The piece appears to suggest that careful attention to restorative practice is able to provide a range of somewhat significant benefits that can help communities to navigate conflict in meaningful ways over time.',
            sample: 'Attention to restorative practice clarifies stakes and reduces performative conflict. Lean analysis persuades where slogans stall.',
          },
        },
        {
          id: '10s7',
          title: 'Mentor Mash',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          skills: ['Strong sentence starts', 'No noun/verb repetition', 'Power verbs', 'Ban very / limp adverbs'],
          coach: 'Steal structure, not content. Keep multi-skill discipline.',
          checklist: [
            'Imitate the mentor twice with new content',
            'No weak starters or very-words',
            'No repetition across your two lines'
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Two imitations about second chance.',
            sample: '1) Behind the slogan, a cost crouched.<br>2) Above the cheering, doubt gathered.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated imitations tied to restorative practice.',
            sample: '1) Not every victory is clean; some are crowded with quiet concessions.<br>2) Not every apology repairs trust; some are crowded with image management.',
          },
        },
        {
          id: '10s8',
          title: 'Skills Stack Share',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Perform',
          skills: ['Strong sentence starts', 'Power verbs', 'Exact adjectives', 'Minimise stop words', 'No noun/verb repetition'],
          coach: 'Students read their best line. Class names the skills they hear.',
          checklist: [
            'Pick your strongest sentence from tonight',
            'Read it aloud',
            'Name two skills it demonstrates'
          ],
          a: {
            lead: 'Showcase one sentence about second chance. Defend the craft.',
            source: 'Use the sentence you are proudest of from earlier drills.',
            sample: 'Example: “Mud sprayed behind Kai as he tore toward the apology.” Skills: strong start, power verb, exact detail.',
          },
          b: {
            lead: 'Showcase one sentence about restorative practice. Defend the craft.',
            source: 'Precision over volume. Name two skills.',
            sample: 'Example: “Compromise sat between them before either admitted the cost.” Skills: strong start, elevated diction, no fluff.',
          },
        }
      ],
      pressure: [
        {
          id: '10p1',
          title: 'Story Opening Under Fire',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition'],
          coach: 'First five sentences set the standard for the whole piece.',
          checklist: [
            '8–12 sentences',
            'No weak starters; no very-words',
            'Varied verbs; no adjacent repetition'
          ],
          a: {
            lead: 'Narrative opening linked to second chance.',
            source: 'Begin in the moment. Multi-skill on.',
            sample: 'Torchlight cut the dark near the apology as footsteps closed in. Someone counted names twice and still came up short.',
          },
          b: {
            lead: 'Narrative opening: a turning point around restorative practice inside the mediation suite.',
            source: '8–12 sentences. Elevated control. No weak starters or intensifiers.',
            sample: 'Outside the mediation suite, shoes tapped a rehearsed rhythm. Across the table, the repair agreement waited like a verdict. Before introductions finished, someone noticed the altered line. Silence did the interviewing after that.',
          },
        },
        {
          id: '10p2',
          title: 'Info Hook + Lean Body',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Minimise stop words', 'Exact adjectives', 'Sophisticated vocabulary'],
          coach: 'Hook, explain, trim. Sound smart without stuffing.',
          checklist: [
            '7–10 sentences',
            'Strong open + lean middle',
            'Precise words; minimal fluff'
          ],
          a: {
            lead: 'Explain something important about second chance.',
            source: 'Teach classmates clearly.',
            sample: 'Second Chance looks simple until you track the moving parts. Clear steps beat long excuses.',
          },
          b: {
            lead: 'Explain a non-obvious mechanism behind restorative practice.',
            source: '7–10 elevated informational sentences. Teach without talking down.',
            sample: 'Second Chance looks simple until incentives are mapped. Definitions before opinions prevent circular arguments. Concrete cases turn fog into procedure when accountability versus soft resets matters.',
          },
        },
        {
          id: '10p3',
          title: 'Persuade With Full Toolkit',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          skills: ['Strong sentence starts', 'Power verbs', 'Ban very / limp adverbs', 'No noun/verb repetition', 'Sophisticated vocabulary'],
          coach: 'Argument + craft. Counterpoint welcome.',
          checklist: [
            '10–14 sentences',
            'All listed skills visible',
            'Include one counterpoint + rebuttal'
          ],
          a: {
            lead: 'Persuade on an issue near second chance.',
            source: 'Convince a decision-maker.',
            sample: 'Second Chance is not optional decoration. Critics cite cost; inaction spends more.',
          },
          b: {
            lead: 'Persuade a decision-maker on a contested issue near restorative practice.',
            source: '10–14 sentences. Counterpoint + rebuttal. Full toolkit.',
            sample: 'Second Chance is not optional decoration for policy. Critics cite disruption costs; opaque processes spend more in lost trust. Delay is also a decision — usually the weaker one when accountability versus soft resets is already fraying.',
          },
        },
        {
          id: '10p4',
          title: 'Quick Analyse + Polish',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write + edit',
          skills: ['Minimise stop words', 'Exact adjectives', 'No noun/verb repetition', 'Strong sentence starts'],
          coach: '7 minutes write, 3 minutes craft-lift.',
          checklist: [
            'Analyse a craft choice in a scene (invent if needed)',
            'Then cut fluff and repetition',
            'Finish with a cleaner version'
          ],
          a: {
            lead: 'Analyse craft in a scene about second chance.',
            source: 'Judge then polish.',
            sample: 'Short sentences accelerate pressure. Sparse detail leaves room for dread. After the lift: Tension climbs when lines stay lean.',
          },
          b: {
            lead: 'Analyse craft in a text about restorative practice, then polish for density.',
            source: '7 min write, 3 min lift. Exact diction; kill repetition.',
            sample: 'Selective detail steers judgement without sermonising. Design, not accident, carries persuasion. After the lift: Exact diction and lean structure do the ethical work.',
          },
        }
      ],
    }
  ],
};
