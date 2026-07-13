/* Scribble Power — 10-week curriculum
   Version A ≈ Grades 4–6 · Version B ≈ Grades 7–9
*/
window.SCRIBBLE_POWER = {
  brand: {
    company: 'Scribble Ink',
    title: 'Scribble Power',
    tagline: 'Ten weeks of sharper sentence craft — then writing under pressure.',
  },
  weeks: [
    {
      id: 1,
      title: 'Open Strong',
      focus: 'Sentence starts that pull readers in',
      skillsGoal: 'Ban weak openers. Launch with action, place, sound, or feeling.',
      pressureGoal: 'Write openings that refuse to start with filler words.',
      skills: [
        {
          id: '1s1',
          title: 'Ban the Boring Start',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Rewrite',
          coach: 'Cross out It / There / Then / He / She / This if they open the sentence. Rebuild from a stronger detail.',
          checklist: [
            'Do not start with: it, a, an, he, she, his, her, this, these, those, they, then, there',
            'Open with action, place, sound, object, or emotion',
            'Keep the meaning — upgrade the launch',
          ],
          a: {
            lead: 'Rewrite each opener so it punches harder.',
            source:
              '1) There was a weird noise under the stairs.<br>2) He ran through the muddy playground.<br>3) It was the scariest night of the year.',
            sample:
              '1) Under the stairs, a scrape-scratch noise waited.<br>2) Mud sprayed behind Kai as he tore across the playground.<br>3) Midnight pressed against the windows like a dare.',
          },
          b: {
            lead: 'Recast these limp openings into cinematic first lines.',
            source:
              '1) There was an argument building in the staffroom.<br>2) She walked into the exam hall feeling nervous.<br>3) It was clear the plan had already failed.',
            sample:
              '1) Voices cracked like dry twigs in the staffroom.<br>2) Into the exam hall stepped Maya, pulse hammering Morse code.<br>3) Failure sat on the table before anyone admitted it.',
          },
        },
        {
          id: '1s2',
          title: 'Five Fresh Launches',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          coach: 'Same idea, five openings. No weak starters. Vary the pattern.',
          checklist: [
            'Write 5 openings for the same idea',
            'Zero weak starters',
            'Use at least three different launch types (action / place / sound / object / feeling)',
          ],
          a: {
            lead: 'Idea: a student finds a mysterious note in their locker.',
            source: 'Produce five strong first sentences. Make each feel different.',
            sample:
              '1) Inside locker 214, a folded note waited like a secret with teeth.<br>2) Paper whispered as Jordan tugged the locker door.<br>3) Before lunch, the note changed everything.<br>4) Blue ink glared up from the metal shelf.<br>5) Heart racing, Jordan read the first line twice.',
          },
          b: {
            lead: 'Idea: a coastal town discovers the tide is rising an hour early.',
            source: 'Write five sophisticated openings. No weak starters. Aim for precision.',
            sample:
              '1) Along the seawall, water arrived ahead of the clock.<br>2) Gulls abandoned the pier as salt spray climbed the steps.<br>3) Early tide meant early panic for Harbour Street.<br>4) Nets floated where market stalls should have stood.<br>5) By 8:12, the harbour admitted what the instruments already knew.',
          },
        },
        {
          id: '1s3',
          title: 'Persuade From Line One',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          coach: 'Open persuasive writing with a claim, image, or challenge — never a soft filler.',
          checklist: [
            'Write 3 opening sentences for the prompt',
            'Each must take a clear stance',
            'No weak starters',
          ],
          a: {
            lead: 'Prompt: Schools should start later in the morning.',
            source: 'Write three powerful opening sentences that argue for later starts.',
            sample:
              '1) Sleepy brains make messy learning.<br>2) Morning bells punish teenagers for biology they cannot change.<br>3) Later starts unlock sharper thinking before first period.',
          },
          b: {
            lead: 'Prompt: Cities should ban private cars from central streets one day a week.',
            source: 'Write three openings that feel bold, specific, and persuasive.',
            sample:
              '1) Car-free Fridays return the city to people, not parking.<br>2) Exhaust should not own the CBD more than pedestrians do.<br>3) One quiet day a week proves streets can breathe again.',
          },
        },
      ],
      pressure: [
        {
          id: '1p1',
          title: 'Story Start Sprint',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          coach: 'Every sentence start must earn its place. Especially the first five.',
          checklist: [
            'Write 8–12 sentences',
            'No weak starters anywhere',
            'Include setting + problem in the opening stretch',
          ],
          a: {
            lead: 'Write the opening of a story about a school overnight camp that goes wrong.',
            source: 'Begin in the moment. Make readers lean forward by line two.',
            sample:
              'Torch beams sliced the gum trees as Year Six filed toward Cabin B. Behind the last bunk, something scraped—slow, deliberate, metallic. Coach Rivera counted heads twice and still came up short. Near the fire pit, marshmallows blackened, forgotten. From the ridge, a second set of lights answered theirs.',
          },
          b: {
            lead: 'Write the opening of a story about a scholarship interview that derails.',
            source: 'Control tone. Strong launches. No weak starters.',
            sample:
              'Outside Room 3B, polished shoes tapped an anxious rhythm. Across the table waited three judges and one empty chair that somehow felt occupied. Before introductions finished, the projector died with a theatrical click. Maya opened her folio anyway, voice steadier than her hands. Beyond the glass wall, rain rehearsed its own applause.',
          },
        },
        {
          id: '1p2',
          title: 'Info Hook',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          coach: 'Informational writing can still open with energy. Hook, then teach.',
          checklist: [
            'Write one short informational paragraph (7–10 sentences)',
            'First sentence must hook without weak starters',
            'Include at least two concrete facts or examples',
          ],
          a: {
            lead: 'Topic: Why bees matter to everyday food.',
            source: 'Open strong, then explain clearly for classmates.',
            sample:
              'Without bees, supermarket shelves would look strangely empty. Apple trees rely on pollination to turn blossom into fruit. Almond farms hire truckloads of hives each spring for this reason. Vegetables like pumpkin and cucumber also depend on busy foragers. Losing bee colonies threatens breakfast bowls as much as wildflowers.',
          },
          b: {
            lead: 'Topic: How confirmation bias shapes online arguments.',
            source: 'Open with a sharp claim, then explain with clear examples.',
            sample:
              'Confirmation bias turns feeds into mirrors. Readers click evidence that flatters existing beliefs and scroll past the rest. Platform algorithms reward that comfort with more of the same. Over time, disagreement feels like attack rather than information. Recognising the habit is the first defence against it.',
          },
        },
      ],
    },
    {
      id: 2,
      title: 'Cut the Fluff',
      focus: 'Minimise stop words and tighten every line',
      skillsGoal: 'Delete empty weight. Keep meaning. Raise pace.',
      pressureGoal: 'Produce clean, direct writing with no soggy filler.',
      skills: [
        {
          id: '2s1',
          title: 'Stop-Word Surgery',
          minutes: 5,
          genre: 'Informational',
          mode: 'Tighten',
          coach: 'Hunt: really, just, that, very, quite, in order to, started to, began to, there is/are.',
          checklist: [
            'Cut unnecessary stop words',
            'Keep the meaning intact',
            'Read aloud — faster should feel clearer',
          ],
          a: {
            lead: 'Tighten this paragraph by removing fluff.',
            source:
              'The team started to get ready in order to begin the race that was really very important to them, and they just tried to focus on the things that they needed to do.',
            sample:
              'The team prepared for the important race and focused on what mattered.',
          },
          b: {
            lead: 'Compress this without losing authority.',
            source:
              'It is important to note that students often begin to lose clarity when they rely on fillers that are really just padding in order to make sentences seem more formal than they actually are.',
            sample:
              'Students lose clarity when fillers pad sentences to sound formal.',
          },
        },
        {
          id: '2s2',
          title: 'Lean Machines',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Rewrite',
          coach: 'One idea per sentence. Cut hedges. Prefer strong nouns and verbs.',
          checklist: [
            'Rewrite into 3 lean sentences',
            'No hedges (maybe, sort of, kind of, a bit)',
            'Every word must work',
          ],
          a: {
            lead: 'Flabby claim: We should kind of maybe get more bins in the playground because rubbish is getting a bit out of control.',
            source: 'Turn it into three crisp persuasive sentences.',
            sample:
              'Playground rubbish is out of control. More bins make clean-up easier. Students deserve a yard that looks cared for.',
          },
          b: {
            lead: 'Flabby claim: One could argue that it might be somewhat beneficial for schools to potentially reduce homework in order to possibly improve wellbeing.',
            source: 'Rewrite as three decisive sentences.',
            sample:
              'Heavy homework drains evenings. Reduced loads improve sleep and focus. Wellbeing rises when schools protect recovery time.',
          },
        },
        {
          id: '2s3',
          title: 'Cut 30%',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          coach: 'Same ideas, fewer words. Aim to cut about a third.',
          checklist: [
            'Shorten by roughly 30%',
            'Preserve key points',
            'Stronger verbs beat stacks of weak ones',
          ],
          a: {
            lead: 'Trim this analysis.',
            source:
              'In the story, the main character is someone who is always feeling scared, and this is something that makes the reader feel tense because they do not know what is going to happen next in the dark forest.',
            sample:
              'In the story, the protagonist’s fear keeps readers tense as danger waits in the dark forest.',
          },
          b: {
            lead: 'Trim this analysis.',
            source:
              'The article’s central argument appears to suggest that urban green spaces are able to provide a range of benefits that can help to reduce stress while also helping communities to connect with one another in meaningful ways.',
            sample:
              'The article argues urban green spaces reduce stress and help communities connect.',
          },
        },
      ],
      pressure: [
        {
          id: '2p1',
          title: 'Tight Inform',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          coach: 'Explain clearly. No fluff tax. Count wasteful words and cut them.',
          checklist: [
            'Write 9–12 sentences',
            'Minimise stop words and hedges',
            'Include a clear definition + two examples',
          ],
          a: {
            lead: 'Explain how a compass works for someone your age.',
            source: 'Be accurate and lean. Open strong.',
            sample:
              'A compass needle points toward magnetic north. Inside, a magnetised pointer floats or pivots freely. Earth’s magnetic field tugs that pointer into line. Hikers use the dial to set a bearing and walk a chosen direction. Unlike phone maps, a basic compass needs no signal.',
          },
          b: {
            lead: 'Explain how a heat map communicates data.',
            source: 'Audience: curious Year 8 students. Keep language precise and lean.',
            sample:
              'A heat map turns values into colour. Darker or warmer cells usually mark higher intensity. Viewers spot patterns faster than they would in a table. Weather apps, websites, and sports analytics all use the technique. Clear legends stop colour from becoming decoration.',
          },
        },
        {
          id: '2p2',
          title: 'Persuade Without Padding',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          coach: 'Short sentences can still sound powerful. Cut every limp phrase.',
          checklist: [
            'Write a persuasive paragraph (8–11 sentences)',
            'No weak starters',
            'No filler phrases',
          ],
          a: {
            lead: 'Argue for a weekly outdoor learning session.',
            source: 'Convince the principal with clean, forceful writing.',
            sample:
              'Outdoor learning wakes brains up. Fresh air improves focus after long indoor blocks. Science investigations become real when students measure wind, shadow, and soil. Teamwork grows when groups solve problems beyond desks. One session a week costs little and returns attention.',
          },
          b: {
            lead: 'Argue for a phone-free first hour of school.',
            source: 'Be firm, fair, and free of waffle.',
            sample:
              'A phone-free first hour protects attention when it matters most. Notifications fracture focus before learning begins. Conversation returns to corridors and classrooms. Teachers reclaim minutes otherwise lost to device drama. Schools that guard mornings give students a calmer start.',
          },
        },
      ],
    },
    {
      id: 3,
      title: 'Verbs That Move',
      focus: 'Replace flat verbs with precise action',
      skillsGoal: 'Choose verbs that show force, manner, and meaning.',
      pressureGoal: 'Write scenes and explanations powered by exact verbs.',
      skills: [
        {
          id: '3s1',
          title: 'Verb Upgrades',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Replace',
          coach: 'Swap went, got, put, did, made, said for verbs with muscle.',
          checklist: [
            'Upgrade every underlined-style weak verb',
            'Keep tense consistent',
            'Make the action visible',
          ],
          a: {
            lead: 'Upgrade the verbs.',
            source:
              'Sam went into the kitchen and got a snack. He put it on the table and said he was hungry. Rain did hit the window.',
            sample:
              'Sam slipped into the kitchen and grabbed a snack. He slid it onto the table and muttered that he was starving. Rain hammered the window.',
          },
          b: {
            lead: 'Upgrade the verbs for sharper tone.',
            source:
              'The committee went over the proposal and got angry. They put pressure on the mayor and said the delay was unacceptable. Protesters did gather outside.',
            sample:
              'The committee dissected the proposal and bristled. They cornered the mayor and declared the delay unacceptable. Protesters massed outside.',
          },
        },
        {
          id: '3s2',
          title: 'One Verb, Many Worlds',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          coach: 'Same subject, different verbs → different moods.',
          checklist: [
            'Write 6 sentences with the same subject',
            'Change only the main verb (and necessary endings)',
            'Create six different moods or meanings',
          ],
          a: {
            lead: 'Subject: The puppy',
            source: 'Example mood targets: playful, nervous, sneaky, exhausted, brave, cheeky.',
            sample:
              'The puppy bounced across the mat. The puppy trembled behind the couch. The puppy crept toward the sandwich. The puppy collapsed into the sunbeam. The puppy charged the vacuum. The puppy grinned around a stolen sock.',
          },
          b: {
            lead: 'Subject: The headline',
            source: 'Create six tones: alarming, calm, sarcastic, urgent, reflective, triumphant.',
            sample:
              'The headline screamed across the homepage. The headline murmured beneath the fold. The headline smirked at both parties. The headline demanded attention by noon. The headline lingered after the scandal faded. The headline crowned the underdog.',
          },
        },
        {
          id: '3s3',
          title: 'Scientific Motion',
          minutes: 5,
          genre: 'Informational',
          mode: 'Craft',
          coach: 'Informational verbs can still be vivid: surge, settle, fracture, circulate.',
          checklist: [
            'Rewrite with precise scientific/action verbs',
            'Avoid vague did/got/went',
            'Stay accurate',
          ],
          a: {
            lead: 'Topic sentence set: a volcano erupting.',
            source:
              'The volcano got angry and lava went down the side. Ash did go into the sky and people got out of the way.',
            sample:
              'The volcano erupted and lava surged down the slope. Ash climbed into the sky as people evacuated the valley.',
          },
          b: {
            lead: 'Topic sentence set: a market crash.',
            source:
              'Prices went down quickly and investors got scared. Banks did make emergency decisions and confidence went away.',
            sample:
              'Prices plummeted and investors panicked. Banks activated emergency protocols as confidence evaporated.',
          },
        },
      ],
      pressure: [
        {
          id: '3p1',
          title: 'Action Page',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          coach: 'Let verbs carry the camera. Limit adjectives if verbs are working.',
          checklist: [
            'Write a 10-minute action scene',
            'Circle your five strongest verbs afterwards',
            'No weak starters',
          ],
          a: {
            lead: 'Scene: escaping a maze before the gates lock.',
            source: 'Keep moving. Every sentence should advance action.',
            sample:
              'Boots slapped wet stone as Ava sprinted left, then doubled back. A gate shrieked toward the floor. She dove, rolled, and scrambled through the gap. Torches guttered. Somewhere behind, footsteps multiplied.',
          },
          b: {
            lead: 'Scene: a journalist fleeing with a leaked USB.',
            source: 'Tension through verbs. Minimal filler.',
            sample:
              'Rain needled Noah’s collar as he cut through the alley. Sirens braided in the distance. He vaulted a delivery crate, shouldered a side door, and vanished into stairwell gloom. The USB burned in his fist like evidence with a pulse.',
          },
        },
        {
          id: '3p2',
          title: 'Explain With Energy',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          coach: 'Teach a process using exact verbs at each step.',
          checklist: [
            'Explain a process in order',
            'Use precise verbs for each stage',
            'End with why it matters',
          ],
          a: {
            lead: 'Explain how a seed becomes a seedling.',
            source: 'Keep it lively and accurate.',
            sample:
              'Moisture awakens the seed. A root anchors downward while a shoot pushes toward light. Leaves unfurl and begin making food. Gardeners water gently so roots can spread. That early growth decides whether the plant thrives.',
          },
          b: {
            lead: 'Explain how a bill becomes law in simple terms (your country or a general democratic model).',
            source: 'Prioritise clarity and exact verbs.',
            sample:
              'Lawmakers draft a bill and introduce it to parliament. Committees scrutinise details and recommend changes. Chambers debate, amend, and vote. If both sides approve, the bill advances for final assent. Law then binds the public it was built to serve.',
          },
        },
      ],
    },
    {
      id: 4,
      title: 'Exact Colour',
      focus: 'Adjectives that earn their place',
      skillsGoal: 'Choose precise adjectives — not piles of weak ones.',
      pressureGoal: 'Describe with control: one exact word beats three vague ones.',
      skills: [
        {
          id: '4s1',
          title: 'Adjective Triage',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Edit',
          coach: 'Delete stacked adjectives. Keep the one that changes meaning most.',
          checklist: [
            'Cut weak stacks (big huge enormous)',
            'Keep one precise adjective where needed',
            'Prefer noun/verb upgrades when possible',
          ],
          a: {
            lead: 'Triage the adjective piles.',
            source:
              'The big huge scary dog barked at the small tiny little mouse near the old ancient crumbling wall.',
            sample:
              'The mastiff barked at the mouse near the crumbling wall.',
          },
          b: {
            lead: 'Triage without losing atmosphere.',
            source:
              'A cold chilly icy wind moved through the empty vacant deserted corridor of the forgotten abandoned wing.',
            sample:
              'An icy wind moved through the deserted corridor of the abandoned wing.',
          },
        },
        {
          id: '4s2',
          title: 'Swap Vague → Exact',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Replace',
          coach: 'nice, weird, bad, good, stuff, things → specific choices.',
          checklist: [
            'Replace every vague adjective/noun pair',
            'Make images sharper',
            'Do not over-decorate',
          ],
          a: {
            lead: 'Make these specific.',
            source:
              'We had a nice lunch. The weird noise continued. It was a bad idea. She found good stuff in the box.',
            sample:
              'We had a lemon-chicken lunch. The metallic rattle continued. Skipping rehearsal was reckless. She found compasses and maps in the box.',
          },
          b: {
            lead: 'Make these specific and mature.',
            source:
              'The article made some good points about bad policy. The vibe was weird. People wanted nice changes to city stuff.',
            sample:
              'The article made sharp points about careless housing policy. The mood turned uneasy. Residents demanded practical changes to transport and parks.',
          },
        },
        {
          id: '4s3',
          title: 'Sensory Precision',
          minutes: 5,
          genre: 'Short story',
          mode: 'Craft',
          coach: 'One sensory adjective per sentence maximum — unless contrast needs two.',
          checklist: [
            'Write 5 sentences about one place',
            'Each sentence uses one precise sensory adjective',
            'Cover at least 3 senses across the set',
          ],
          a: {
            lead: 'Place: the school canteen at 11:00.',
            source: 'Make readers smell, hear, and see it.',
            sample:
              'Salty steam fogged the tray line. Sneakers squeaked on sticky tiles. Bright posters peeled at the corners. A tangy juice box split open under a bench. Laughter bounced off the metal shutters.',
          },
          b: {
            lead: 'Place: a late-night train platform.',
            source: 'Controlled, precise, atmospheric.',
            sample:
              'Fluorescent light flattened every face. Oil-sweet air drifted from the tracks. A distant announcement crackled mid-word. Cold aluminium benches bit through coats. Somewhere in the tunnel, wheels screamed.',
          },
        },
      ],
      pressure: [
        {
          id: '4p1',
          title: 'Setting Portrait',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          coach: 'Describe a place so clearly a stranger could film it.',
          checklist: [
            'Write a setting paragraph (9–12 sentences)',
            'Use precise adjectives sparingly',
            'Let strong nouns and verbs do heavy lifting',
          ],
          a: {
            lead: 'Describe a secret hideout behind the sports sheds.',
            source: 'Include what it looks, sounds, and feels like.',
            sample:
              'Behind the sports sheds, weeds threaded the fence wire. A milk crate table waited under corrugated shade. Soft dirt held footprints from lunchtime meetings. Paint flakes drifted whenever the wind shoved the door. From here, the oval looked far enough to feel free.',
          },
          b: {
            lead: 'Describe a protest march at dusk without naming every emotion.',
            source: 'Show atmosphere through exact detail.',
            sample:
              'At dusk, placards rose like a second skyline. Drums paced the avenue while shopfront glass threw back the crowd. Chalk slogans ghosted the asphalt. A child on shoulders waved a cardboard sun. Streetlights flickered on, late to the scene.',
          },
        },
        {
          id: '4p2',
          title: 'Analytical Detail',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write',
          coach: 'Use precise adjectives when judging craft: sparse dialogue, jagged pacing, muted palette.',
          checklist: [
            'Analyse a scene/text choice in 8–11 sentences',
            'Include at least 4 precise evaluative adjectives',
            'Support each judgement with a tiny example',
          ],
          a: {
            lead: 'Analyse why a spooky campfire scene works (invent the scene if needed).',
            source: 'Judge craft, not just plot.',
            sample:
              'The campfire scene works because the writer uses short, sharp sentences as footsteps approach. Dim lighting keeps faces half-hidden, so fear grows in the gaps. Sparse dialogue makes every whisper matter. A single wet sound near the trees does more than a paragraph of explanation.',
          },
          b: {
            lead: 'Analyse how a documentary uses music and cutting to shape opinion.',
            source: 'Be precise. Avoid vague “good/bad”.',
            sample:
              'The documentary nudges opinion through urgent percussion under crisis footage. Quick cuts deny viewers time to question the frame. Soft piano returns only for sympathetic interviews, colouring trust. That uneven soundscape is persuasive design, not neutral reporting.',
          },
        },
      ],
    },
    {
      id: 5,
      title: 'Ban Very',
      focus: 'Replace very-words and limp adverbs',
      skillsGoal: 'Trade intensifiers for exact words.',
      pressureGoal: 'Write persuasively without leaning on very/really/extremely.',
      skills: [
        {
          id: '5s1',
          title: 'Very Patrol',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Replace',
          coach: 'very tired → exhausted; really big → enormous; walked quickly → strode / hurried.',
          checklist: [
            'Eliminate every very/really/extremely',
            'Replace weak adverb+verb pairs',
            'Choose one exact word',
          ],
          a: {
            lead: 'Upgrade these.',
            source:
              'The test was very hard. She was really tired. He ran very quickly. The movie was extremely scary. They spoke very quietly.',
            sample:
              'The test was brutal. She was exhausted. He sprinted. The movie was terrifying. They whispered.',
          },
          b: {
            lead: 'Upgrade these with mature diction.',
            source:
              'The evidence was very clear. The delay was really unnecessary. Markets reacted extremely badly. The speech was very persuasive. Officials moved very slowly.',
            sample:
              'The evidence was unmistakable. The delay was needless. Markets recoiled. The speech was compelling. Officials stalled.',
          },
        },
        {
          id: '5s2',
          title: 'Adverb Audit',
          minutes: 5,
          genre: 'Narrative',
          mode: 'Edit',
          coach: 'If you delete the adverb and the verb still works, delete it. If not, upgrade the verb.',
          checklist: [
            'Remove limp adverbs (suddenly, just, actually, basically)',
            'Upgrade verbs where needed',
            'Keep meaning',
          ],
          a: {
            lead: 'Audit this.',
            source:
              'Suddenly, Maya basically just ran quickly to the door and actually yelled loudly for help.',
            sample:
              'Maya sprinted to the door and yelled for help.',
          },
          b: {
            lead: 'Audit this.',
            source:
              'The senator suddenly and rather forcefully essentially dismissed the report, basically insisting it was actually irrelevant.',
            sample:
              'The senator dismissed the report and insisted it was irrelevant.',
          },
        },
        {
          id: '5s3',
          title: 'Intensity Without Intensifiers',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          coach: 'Show intensity through specifics, not volume words.',
          checklist: [
            'Write 4 persuasive sentences',
            'Zero very/really/extremely/so',
            'Use concrete detail to create force',
          ],
          a: {
            lead: 'Topic: Plastic wrapping in school lunches.',
            source: 'Sound urgent without intensifiers.',
            sample:
              'Lunch bins overflow with soft plastic by noon. Wrappers outlive the sandwiches they protected. Reusable boxes cut waste before it starts. Schools that switch set a cleaner habit for every home.',
          },
          b: {
            lead: 'Topic: Youth voting education.',
            source: 'Urgent, precise, no intensifiers.',
            sample:
              'First-time voters inherit complex ballots with little practice. Civics lessons that include mock elections build confidence. Misinformation spreads faster than classroom catch-up. Early education turns confusion into informed participation.',
          },
        },
      ],
      pressure: [
        {
          id: '5p1',
          title: 'Persuasion Cleanse',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          coach: 'Make a strong case with exact language. Ban very-words completely.',
          checklist: [
            'Write 10–14 sentences',
            'No very/really/extremely/literally',
            'Include one counterpoint + rebuttal',
          ],
          a: {
            lead: 'Should homework be capped at 30 minutes for primary students?',
            source: 'Take a side and defend it cleanly.',
            sample:
              'Homework caps protect evenings for rest and family. Thirty focused minutes beat two tired hours. Critics claim more work builds discipline, yet exhausted practice teaches avoidance. Schools can prioritise quality tasks over quantity. Sleep is a study skill too.',
          },
          b: {
            lead: 'Should social media companies require proven age checks for under-16 accounts?',
            source: 'Argue with precision. No intensifier crutches.',
            sample:
              'Age checks reduce premature exposure to algorithmic pressure. Platforms already verify payments; identity is not a technical mystery. Opponents cite privacy, yet unprotected minors pay a higher cost. Strong verification pairs with clear data limits. Safety and privacy can travel together.',
          },
        },
        {
          id: '5p2',
          title: 'Narrative Without Crutches',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          coach: 'Emotion through action and exact words — not “very sad/angry”.',
          checklist: [
            'Write a tense scene',
            'No intensifiers',
            'Show emotion through verbs, objects, and dialogue beats',
          ],
          a: {
            lead: 'A character must apologise after breaking a friend’s project.',
            source: 'Keep it honest and intense without very-words.',
            sample:
              'Glue webs still clung to the cardboard solar system. Ben held the snapped Saturn ring like a confession. Across the desk, Priya stacked textbooks without looking up. Sorry left Ben’s mouth in pieces. He reached for tape, not excuses.',
          },
          b: {
            lead: 'A captain must tell the team they have been knocked out of finals.',
            source: 'Dignity over melodrama. Exact language.',
            sample:
              'Boots thudded into the change-room benches. The captain laid the fixture sheet down and flattened its corners. Finals had moved on without them. Somebody kicked a drink bottle; nobody laughed. Next season begins with what we fix tonight, the captain said.',
          },
        },
      ],
    },
    {
      id: 6,
      title: 'No Echo',
      focus: 'Stop repeating key nouns and verbs',
      skillsGoal: 'Avoid echo in a sentence and in neighbours.',
      pressureGoal: 'Sustain variety across longer analytical and narrative stretches.',
      skills: [
        {
          id: '6s1',
          title: 'Echo Hunt',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Edit',
          coach: 'Don’t repeat the same key noun/verb in one sentence or the next. Use pronouns, synonyms, or restructure.',
          checklist: [
            'Remove repeated key nouns/verbs',
            'Keep clarity (don’t get fancy-confused)',
            'Check adjacent sentences too',
          ],
          a: {
            lead: 'Fix the echoes.',
            source:
              'The dog chased the ball, and the dog brought the ball back. The dog wanted the ball again, so the dog barked at the ball.',
            sample:
              'The dog chased the ball and brought it back. Eager for another throw, he barked at the scuffed rubber.',
          },
          b: {
            lead: 'Fix the echoes.',
            source:
              'The report evaluates the policy, and the report claims the policy fails. The report repeats that the policy fails because the policy ignores evidence the report already presented.',
            sample:
              'The report evaluates the policy and concludes it fails. That failure, it argues, stems from ignoring evidence already presented.',
          },
        },
        {
          id: '6s2',
          title: 'Pronoun + Synonym Tools',
          minutes: 5,
          genre: 'Informational',
          mode: 'Rewrite',
          coach: 'Name it once, then vary: the experiment → the trial → it → the method.',
          checklist: [
            'Rewrite with controlled variety',
            'No confusing pronoun drift',
            'No copy-paste nouns',
          ],
          a: {
            lead: 'Topic: a school recycling program.',
            source:
              'The recycling program helps the school. The recycling program reduces waste. Students like the recycling program because the recycling program is easy.',
            sample:
              'The recycling program helps the school reduce waste. Students like it because the system is easy to follow.',
          },
          b: {
            lead: 'Topic: a clinical trial.',
            source:
              'The clinical trial tested the drug. The clinical trial showed the drug worked. Because the clinical trial was large, the clinical trial convinced doctors the drug was safe enough.',
            sample:
              'The clinical trial tested the drug and showed it worked. Because the study was large, doctors trusted the safety findings.',
          },
        },
        {
          id: '6s3',
          title: 'Adjacent Sentence Challenge',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Craft',
          coach: 'Write pairs where sentence 2 refuses to reuse sentence 1’s key noun/verb.',
          checklist: [
            'Write 4 sentence pairs',
            'No key noun/verb repeated across each pair',
            'Meaning must still connect',
          ],
          a: {
            lead: 'Create pairs about a storm arriving at sports day.',
            source: 'Keep it clear and echo-free.',
            sample:
              'Clouds bruised the sky above the oval. Parents grabbed esky lids as the first drops landed.<br>Runners stalled at the start line. Whistles soon redirected everyone toward the hall.',
          },
          b: {
            lead: 'Create pairs about a viral rumour at school.',
            source: 'Sophisticated, clear, no echoes.',
            sample:
              'A rumour sprinted through Year Nine before recess. Lockers became broadcast towers for a story nobody could verify.<br>Teachers interrupted the chatter with facts. Certainty returned slower than the gossip had travelled.',
          },
        },
      ],
      pressure: [
        {
          id: '6p1',
          title: 'Analysis Without Echo',
          minutes: 10,
          genre: 'Analytical',
          mode: 'Write',
          coach: 'Track your key nouns. If one word dominates, vary or restructure.',
          checklist: [
            'Write an analytical paragraph (9–12 sentences)',
            'No key noun/verb repeated in adjacent sentences',
            'Use evidence + explanation',
          ],
          a: {
            lead: 'Analyse why teamwork matters in a group science project.',
            source: 'Stay clear. Avoid hammering “teamwork” every line.',
            sample:
              'Group science projects succeed when roles are clear. One student records data while another builds the test setup. Shared responsibility reduces mistakes during messy trials. Disagreement, handled respectfully, improves the method. The final report then reflects many minds, not one rushed voice.',
          },
          b: {
            lead: 'Analyse how repetition in a speech can be powerful — and when it becomes lazy.',
            source: 'Irony alert: discuss repetition without accidental echo.',
            sample:
              'Skilled speakers repeat a refrain to brand a message in memory. That echo becomes lazy when every paragraph recycles the same noun with nothing new attached. Variation keeps emphasis fresh. Strategic return at the ending then feels earned, not automatic.',
          },
        },
        {
          id: '6p2',
          title: 'Story Continuity, Fresh Language',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          coach: 'Continue a scene without looping the same verbs.',
          checklist: [
            'Write a continuous scene',
            'Watch adjacent sentences for echo',
            'Strong starts + varied verbs',
          ],
          a: {
            lead: 'Continue: “Lockers slammed shut as the final bell released the hallway.”',
            source: 'Build 8–12 more sentences without echo traps.',
            sample:
              'Lockers slammed shut as the final bell released the hallway. Backpacks thudded into shoulders. Near the stairwell, a paper plane rode the warm air upward. Friends negotiated weekend plans in overlapping voices. Outside, bus engines idled like bored animals.',
          },
          b: {
            lead: 'Continue: “Floodlights washed the stadium as the underdogs took their places.”',
            source: 'Sustain energy and variety.',
            sample:
              'Floodlights washed the stadium as the underdogs took their places. Chants rolled down from the cheap seats. On the sideline, a coach traced plays into fogged air. Boots tested the turf’s give. Whistle-ready, the night held its breath.',
          },
        },
      ],
    },
    {
      id: 7,
      title: 'Word Power',
      focus: 'Sophisticated vocabulary that still sounds natural',
      skillsGoal: 'Upgrade word choice without sounding fake.',
      pressureGoal: 'Deploy richer vocabulary in real timed writing.',
      skills: [
        {
          id: '7s1',
          title: 'Tiered Swaps',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Replace',
          coach: 'Simple → stronger → sophisticated. Pick the best fit for audience.',
          checklist: [
            'Offer 2 upgrades for each underlined idea',
            'Keep meaning accurate',
            'Sound natural aloud',
          ],
          a: {
            lead: 'Upgrade: happy, sad, mad, scared, big problem.',
            source: 'Give classroom-ready sophisticated options.',
            sample:
              'happy → delighted / overjoyed<br>sad → gutted / sorrowful<br>mad → furious / livid<br>scared → alarmed / terrified<br>big problem → crisis / major setback',
          },
          b: {
            lead: 'Upgrade: show, important, wrong, help, idea.',
            source: 'Academic-friendly without stuffing.',
            sample:
              'show → demonstrate / reveal<br>important → essential / pivotal<br>wrong → flawed / unjust<br>help → support / enable<br>idea → concept / proposal',
          },
        },
        {
          id: '7s2',
          title: 'Context Fit',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Craft',
          coach: 'The best word matches tone. Don’t drop a thesaurus bomb.',
          checklist: [
            'Rewrite in a natural sophisticated voice',
            'No random rare words',
            'Tone matches purpose',
          ],
          a: {
            lead: 'Rewrite for a speech to students.',
            source: 'We need to get better at listening so our class can be nicer and problems can go away.',
            sample:
              'We need to listen more carefully so our class feels respectful and conflicts fade.',
          },
          b: {
            lead: 'Rewrite for a formal letter to council.',
            source: 'The park is messed up and kids can’t play properly because the gear is old and kind of dangerous.',
            sample:
              'The park’s ageing equipment has become unsafe, limiting children’s ability to play.',
          },
        },
        {
          id: '7s3',
          title: 'Precision Pairs',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Choose',
          coach: 'Near-synonyms aren’t twins: house/home, ask/demand, look/scrutinise.',
          checklist: [
            'Choose the better word for each sentence',
            'Explain why in a short clause',
            'Defend nuance',
          ],
          a: {
            lead: 'Pick and justify.',
            source:
              '1) The detective (looked at / scrutinised) the footprint.<br>2) Please (ask / demand) if you need help.<br>3) After the trip, camp felt like (a house / home).',
            sample:
              '1) scrutinised — careful study, not a glance<br>2) ask — polite request fits<br>3) home — warmth/belonging after the trip',
          },
          b: {
            lead: 'Pick and justify.',
            source:
              '1) The journalist (said / alleged) corruption without proof.<br>2) Reform is (possible / inevitable) if turnout rises.<br>3) The ending felt (surprising / abrupt).',
            sample:
              '1) alleged — claims without settled proof<br>2) possible — turnout helps but doesn’t guarantee<br>3) abrupt — sudden stop; surprising could still feel complete',
          },
        },
      ],
      pressure: [
        {
          id: '7p1',
          title: 'Vocabulary in Motion',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write',
          coach: 'Use 6–8 richer words that still sound like a human wrote them.',
          checklist: [
            'Write a scene of 10–14 sentences',
            'Include 6+ upgraded vocabulary choices',
            'No weak starters; no very-words',
          ],
          a: {
            lead: 'A character explores an abandoned carnival at dawn.',
            source: 'Rich words welcome. Fakeness is not.',
            sample:
              'Dawn leaked through torn circus canvas. A carousel horse leaned as if mid-gallop forever. Dust motes drifted in stale popcorn air. Under the ticket booth, a rusted bell waited. Footsteps felt too loud for such a hollow place.',
          },
          b: {
            lead: 'A character waits backstage before a high-stakes performance.',
            source: 'Sophisticated, controlled, vivid.',
            sample:
              'Backstage, ropes hung like quiet questions. A spotlight technician murmured cues into a headset. In the wings, the performer rehearsed stillness more than lines. Applause from the previous act thundered through velvet. Courage, for now, meant breathing on beat.',
          },
        },
        {
          id: '7p2',
          title: 'Elevated Inform',
          minutes: 10,
          genre: 'Informational',
          mode: 'Write',
          coach: 'Teach with mature vocabulary and clean structure.',
          checklist: [
            'Write an informational paragraph',
            'Use precise terms + plain explanations',
            'End with a so-what sentence',
          ],
          a: {
            lead: 'Explain camouflage in animals.',
            source: 'Sound smart and clear.',
            sample:
              'Camouflage helps animals blend into surroundings to hunt or hide. Some species match colour; others mimic texture and shape. A stick insect’s disguise works only when it stays still. Predators scan for movement more than perfect outlines. Survival often depends on that quiet trick.',
          },
          b: {
            lead: 'Explain the difference between weather and climate.',
            source: 'Precise diction; accessible examples.',
            sample:
              'Weather describes short-term conditions: today’s rain, wind, and temperature. Climate captures long-term patterns across decades. A heatwave is weather; rising average temperatures signal climate shift. Confusing the two muddles public debate. Clear terms help people interpret headlines wisely.',
          },
        },
      ],
    },
    {
      id: 8,
      title: 'Combine Craft',
      focus: 'Use multiple skills in one short burst',
      skillsGoal: 'Stack starters + verbs + no-echo + vocabulary.',
      pressureGoal: 'Longer writes that prove the toolkit works together.',
      skills: [
        {
          id: '8s1',
          title: 'Triple Threat Rewrite',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Rewrite',
          coach: 'Fix starters, verbs, and echoes in one pass.',
          checklist: [
            'No weak starters',
            'Upgrade flat verbs',
            'Remove echoes',
          ],
          a: {
            lead: 'Rescue this.',
            source:
              'There was a boy who went to the shop. He went to the shop because he wanted a drink. He got a drink and he got a snack too.',
            sample:
              'Outside the corner shop, Leo paused under the buzzing sign. Thirst tugged him inside for a cold drink. A packaged snack joined the bottle at the counter.',
          },
          b: {
            lead: 'Rescue this.',
            source:
              'It is clear that the author uses repetition. The author uses repetition to make the point clear. The author wants the point to be very clear to readers.',
            sample:
              'Repetition drives the author’s emphasis. Each return to the refrain brands the message in memory. Clarity comes from that controlled echo, not from intensifiers.',
          },
        },
        {
          id: '8s2',
          title: 'Genre Flip Micro',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Craft',
          coach: 'Same facts, three genres — all with Scribble Power rules on.',
          checklist: [
            'Write 1 narrative sentence, 1 informational, 1 persuasive',
            'All about the same event',
            'Apply starter + verb + no-very rules',
          ],
          a: {
            lead: 'Event: the school wins a regional robotics final.',
            source: 'Three genres, three sentences.',
            sample:
              'Narrative: Sparks of applause hit the team before the robot crossed the final marker.<br>Informational: Regional judges scored speed, design, and reliability to decide the robotics winner.<br>Persuasive: Investing in robotics clubs builds problem-solvers the future already needs.',
          },
          b: {
            lead: 'Event: a city introduces a night bus every 15 minutes.',
            source: 'Three genres, elevated control.',
            sample:
              'Narrative: Midnight tyres hissed to a stop as shift workers boarded with quiet relief.<br>Informational: The new timetable delivers a night bus every fifteen minutes across main corridors.<br>Persuasive: Frequent night buses widen opportunity for people whose shifts ignore daylight.',
          },
        },
        {
          id: '8s3',
          title: '60-Word Masterpiece',
          minutes: 5,
          genre: 'Short story',
          mode: 'Write',
          coach: 'Tiny word count, huge craft standards.',
          checklist: [
            'Max 60 words',
            'No weak starters, no very-words, no echoes',
            'Beginning, turn, end',
          ],
          a: {
            lead: 'Write a 60-word story about a lost house key.',
            source: 'Make every word pay rent.',
            sample:
              'Under the doormat: crumbs, not metal. Mia retraced the afternoon—oval, library, bus—while dusk cooled the street. In her hoodie pouch, headphones tangled around a familiar shape. Brass winked. Home opened on the second try.',
          },
          b: {
            lead: 'Write a 60-word story about a message delivered to the wrong person.',
            source: 'Compression + craft.',
            sample:
              'Inbox light blinked with a name one letter off. The attachment was meant for a stranger’s lawyer, not Jordan. Screenshots threatened a reputation still being built. Delete hovered. Forwarding it to the rightful address, Jordan chose sleep over gossip.',
          },
        },
      ],
      pressure: [
        {
          id: '8p1',
          title: 'Two-Mode Push',
          minutes: 10,
          genre: 'Mixed',
          mode: 'Write',
          coach: 'Paragraph 1 narrative craft. Paragraph 2 informational clarity. Same topic.',
          checklist: [
            'Write two paragraphs on one topic',
            'Paragraph 1 = short story energy',
            'Paragraph 2 = informational clarity',
            'All Scribble Power rules on',
          ],
          a: {
            lead: 'Topic: a power outage during homework time.',
            source: 'Show then explain.',
            sample:
              'Screens died mid-sentence and the house exhaled into dark. Candles blossomed on the kitchen bench while someone laughed too loudly.<br>Power outages interrupt devices, heating, and lighting at once. Families often switch to offline tasks until electricity returns. Torches and charged power banks reduce stress in those hours.',
          },
          b: {
            lead: 'Topic: a cyberattack on a school network.',
            source: 'Immersive then analytical/informational.',
            sample:
              'Login pages refused every password like locked gates. In the library, keyboards sat useless while rumours sprinted ahead of facts.<br>School cyberattacks can freeze attendance systems, email, and shared drives. Staff isolate networks and restore from secure backups. Clear communication limits panic while technicians work.',
          },
        },
        {
          id: '8p2',
          title: 'Full Toolkit Page',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write',
          coach: 'Starters, verbs, adjectives, no-very, no-echo, vocabulary — all visible.',
          checklist: [
            'Write a complete persuasive page (12–16 sentences)',
            'Self-check all six skills',
            'Include a memorable final line',
          ],
          a: {
            lead: 'Should every student learn basic first aid?',
            source: 'Convince a parent audience.',
            sample:
              'Basic first aid turns bystanders into helpers. Bleeding, choking, and burns appear in ordinary kitchens and playgrounds. Training builds calm steps for chaotic moments. Critics worry about classroom time, yet short courses fit into health weeks. Confidence spreads when students practise together. Prepared hands save minutes that matter.',
          },
          b: {
            lead: 'Should AI homework helpers be allowed if students disclose them?',
            source: 'Nuanced persuasion for teachers.',
            sample:
              'Disclosed AI helpers can support drafting without hiding the scaffolding. Transparency lets teachers judge learning rather than police guesswork. Blind bans push tools into the shadows where no guidance exists. Clear rules should limit copy-paste answers while allowing outline support. Integrity grows from honest process, not from pretending technology vanished.',
          },
        },
      ],
    },
    {
      id: 9,
      title: 'Edit Like a Pro',
      focus: 'Revise under time with ruthless eyes',
      skillsGoal: 'Diagnose weak craft fast and repair it.',
      pressureGoal: 'Draft, then improve — still against the clock.',
      skills: [
        {
          id: '9s1',
          title: 'Traffic-Light Edit',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Edit',
          coach: 'Red = must fix now. Amber = improve if time. Green = keep.',
          checklist: [
            'Mark issues mentally: starter / fluff / verb / very / echo / vocab',
            'Fix all reds',
            'Improve at least one amber',
          ],
          a: {
            lead: 'Edit hard.',
            source:
              'There was a really big problem when the group went to start the project. They got confused and they got annoyed because the instructions were very unclear and the instructions were also too long.',
            sample:
              'Confusion hit when the group opened the project brief. Annoyance followed: the instructions sprawled and blurred the first steps.',
          },
          b: {
            lead: 'Edit hard.',
            source:
              'It is important to note that the protagonist is very conflicted. The protagonist is conflicted because the protagonist must choose between loyalty and truth, which is a really difficult thing.',
            sample:
              'Conflict defines the protagonist. Loyalty pulls one way; truth pulls the other, and the choice costs either way.',
          },
        },
        {
          id: '9s2',
          title: 'Raise the Ceiling',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Upgrade',
          coach: 'Keep the bones. Upgrade openings, verbs, and diction.',
          checklist: [
            'Preserve original ideas',
            'Elevate craft across the whole piece',
            'Keep length similar',
          ],
          a: {
            lead: 'Upgrade this student draft.',
            source:
              'The writer uses short sentences. This makes it exciting. The reader wants to know what happens next. It is a good technique.',
            sample:
              'Short sentences accelerate the scene. Excitement builds as each line snaps forward. Readers lean in for the next beat. That pacing choice works.',
          },
          b: {
            lead: 'Upgrade this student draft.',
            source:
              'The documentary shows sad images to make us care. Music plays and we feel things. This helps the message. It is effective.',
            sample:
              'The documentary pairs confronting images with sparse music to guide empathy. Feeling becomes part of the argument. That design strengthens the message without explaining it to death.',
          },
        },
        {
          id: '9s3',
          title: 'Two-Minute Triage',
          minutes: 5,
          genre: 'Persuasive',
          mode: 'Edit',
          coach: 'You only have time for the highest-impact fixes. Choose wisely.',
          checklist: [
            'List the top 3 fixes before rewriting',
            'Apply only those',
            'Stop when time ends',
          ],
          a: {
            lead: 'Triage then rewrite.',
            source:
              'We should really get a class pet because it would be very fun and it would teach responsibility and it would make people happy and it would be nice.',
            sample:
              'Top fixes: cut fluff, strengthen claim, remove echo of “would”.<br>Rewrite: A class pet teaches responsibility while lifting daily morale. Care rosters turn fun into habit. Happiness follows when everyone contributes.',
          },
          b: {
            lead: 'Triage then rewrite.',
            source:
              'Uniforms are kind of good but also bad. They are good because they are fair. They are bad because they are boring. Schools should maybe think about it.',
            sample:
              'Top fixes: take a stance, kill hedges, stop echo.<br>Rewrite: Uniforms promote fairness by reducing clothing pressure. Boredom is a weak objection next to equity. Schools should keep them and refresh design options.',
          },
        },
      ],
      pressure: [
        {
          id: '9p1',
          title: 'Draft Then Lift',
          minutes: 10,
          genre: 'Short story',
          mode: 'Write + edit',
          coach: '7 minutes draft, 3 minutes lift. No new plot in the edit — only craft.',
          checklist: [
            'Draft quickly for 7 minutes',
            'Edit for starters/verbs/very/echo/vocab',
            'Finish with a cleaner version',
          ],
          a: {
            lead: 'Prompt: someone hears their name called in an empty gym.',
            source: 'Leave time to revise.',
            sample:
              'Draft energy first, then lift: Empty gymnasiums amplify secrets. From the far bleachers, a voice shaped her name. Sneakers froze on the foul line. Shadows did not move—but the voice did.',
          },
          b: {
            lead: 'Prompt: a coded note appears inside a returned library book.',
            source: 'Draft then craft-lift.',
            sample:
              'Between pages 184 and 185, pencil marks formed a spiral of initials. The librarian’s stamp looked ordinary; the message did not. Decoding began with who returned the book last. Curiosity outweighed the quiet rules of the stacks.',
          },
        },
        {
          id: '9p2',
          title: 'Persuasive Polish Pass',
          minutes: 10,
          genre: 'Persuasive',
          mode: 'Write + edit',
          coach: 'Same split: draft hard, polish harder.',
          checklist: [
            'Draft a full argument',
            'Polish openings and diction',
            'Cut 10% fluff on the final pass',
          ],
          a: {
            lead: 'Should break times be longer but less frequent?',
            source: 'Decide, draft, polish.',
            sample:
              'Longer breaks restore attention better than tiny scraps of time. Students return ready to learn rather than half-reset. Timetables can protect deep work blocks between. Energy management is part of academic success.',
          },
          b: {
            lead: 'Should streaming platforms label AI-generated actors clearly?',
            source: 'Nuanced stance + polish.',
            sample:
              'Clear AI-actor labels protect audience trust. Viewers can still enjoy the craft while knowing what they are watching. Hidden synthetic performances blur consent and credit. Transparency strengthens the industry it sometimes threatens.',
          },
        },
      ],
    },
    {
      id: 10,
      title: 'Showcase',
      focus: 'Bring every skill to a final performance',
      skillsGoal: 'Warm up the full toolkit.',
      pressureGoal: 'Capstone writes that prove growth.',
      skills: [
        {
          id: '10s1',
          title: 'Toolkit Warm-Up',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Generate',
          coach: 'One sentence per skill, all linked to one topic.',
          checklist: [
            'Topic stays constant',
            'Show: strong start, lean line, great verb, exact adjective, no very, no echo, rich vocab',
            'Seven sentences total',
          ],
          a: {
            lead: 'Topic: a championship relay race.',
            source: 'One sentence per craft move.',
            sample:
              'Start: Spikes bit the track as Lane Four coiled to spring.<br>Lean: Baton passes decide champions.<br>Verb: The anchor blasted off the block.<br>Adjective: A ragged cheer rolled from the home stand.<br>No very: Crowds erupted.<br>No echo: Metal warmed in the runner’s palm; speed did the rest.<br>Vocab: Victory tasted like salt and relief.',
          },
          b: {
            lead: 'Topic: a climate summit’s final day.',
            source: 'Seven craft-showcase sentences.',
            sample:
              'Start: Negotiators returned to the chamber with sleepless eyes.<br>Lean: Deadlines force decisions.<br>Verb: Applause ruptured after the gavel fell.<br>Adjective: A fragile consensus held.<br>No very: Stakes towered over tired arguments.<br>No echo: Delegates signed; cameras captured the ink.<br>Vocab: Ambition met accountability on the dotted line.',
          },
        },
        {
          id: '10s2',
          title: 'Before → After Flex',
          minutes: 5,
          genre: 'Analytical',
          mode: 'Rewrite',
          coach: 'Show how far your craft has come.',
          checklist: [
            'Transform a weak passage completely',
            'Keep core meaning',
            'Make growth obvious',
          ],
          a: {
            lead: 'Transform this Year-4-ish draft into showcase quality.',
            source:
              'It was a nice day. We went to the beach. We got wet. We had fun. Then we went home.',
            sample:
              'Sunlit surf hissed over our ankles. Into the breakers we charged until salt stung our grins. Drenched and laughing, we claimed the day. Home could wait.',
          },
          b: {
            lead: 'Transform this flat analysis.',
            source:
              'The advert uses colours and music. This makes people feel things. It is effective because it is effective at persuading them.',
            sample:
              'The advert floods the frame with saturated colour while a rising beat steers emotion. Feeling becomes the persuasive engine. Effectiveness comes from that designed pressure, not from vague decoration.',
          },
        },
        {
          id: '10s3',
          title: 'Mentor Sentence',
          minutes: 5,
          genre: 'Mixed',
          mode: 'Imitate',
          coach: 'Imitate structure — not content. Steal the craft pattern.',
          checklist: [
            'Imitate the mentor’s structure twice',
            'New content each time',
            'Maintain Scribble Power standards',
          ],
          a: {
            lead: 'Mentor: “Beneath the quiet, something waited.”',
            source: 'Write two imitations with different settings.',
            sample:
              '1) Behind the joke, a warning crouched.<br>2) Above the cheering, doubt gathered.',
          },
          b: {
            lead: 'Mentor: “Not every silence is empty; some are crowded with what nobody will say.”',
            source: 'Two sophisticated imitations.',
            sample:
              '1) Not every headline is honest; some are crowded with what advertisers prefer.<br>2) Not every apology is peace; some are crowded with unfinished blame.',
          },
        },
      ],
      pressure: [
        {
          id: '10p1',
          title: 'Capstone Choice',
          minutes: 10,
          genre: 'Student choice',
          mode: 'Write',
          coach: 'Pick the genre that shows your best control. Perform.',
          checklist: [
            'Choose narrative, informational, persuasive, or analytical',
            'Apply the full toolkit',
            'Leave 60 seconds to re-read',
          ],
          a: {
            lead: 'Write your best piece about “a second chance”.',
            source: 'Any genre. Showcase standards.',
            sample:
              'Second chances rarely arrive with music. More often they look like a quiet desk, a returned draft, a coach saying try again. Progress begins when pride steps aside. Ink proves the difference.',
          },
          b: {
            lead: 'Write your best piece about “the cost of being right”.',
            source: 'Any genre. Make it mature and controlled.',
            sample:
              'Being right can isolate a room faster than being wrong. Truth without tact becomes theatre. The wiser victory leaves dignity intact on both sides. Power shows in what we protect while we prove a point.',
          },
        },
        {
          id: '10p2',
          title: 'Final Pressure Page',
          minutes: 10,
          genre: 'Persuasive or analytical',
          mode: 'Write',
          coach: 'This is the exhibition piece. Calm hands. Sharp choices.',
          checklist: [
            'Write 12–18 sentences',
            'Full toolkit',
            'Memorable closing line',
          ],
          a: {
            lead: 'Prompt: Why writing skill is a superpower in real life.',
            source: 'Convince classmates who “don’t like English”.',
            sample:
              'Writing skill turns thoughts into tools. Clear messages win help, opportunities, and trust. Stories build empathy; arguments build decisions. Students who practise craft speak with options. Sentences can open doors keys cannot.',
          },
          b: {
            lead: 'Prompt: In a noisy digital world, careful writing is resistance.',
            source: 'Analytical or persuasive — your call.',
            sample:
              'Careful writing resists the scroll’s demand for haste. Precision slows reaction into thought. In comments, captions, and essays, craft signals respect for readers. Noise is easy; clarity takes courage. Resistance can look like one exact sentence.',
          },
        },
      ],
    },
  ],
};
