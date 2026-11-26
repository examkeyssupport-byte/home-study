// English 5 (Top Goal 2) — Unit 2 — lesson 3: Will vs Be going to (Student's Book pp. 29-30) — v2: beats (" || ") = one board line each, in-lesson questions
window.LESSONS = window.LESSONS || {};
window.LESSONS['e5-2-3'] = {
  v: 2,
  title: 'Will vs Be Going To',
  sub: 'اللغة الإنجليزية — الوحدة ٢ House Designs — درس ٣',
  steps: [
    {
      say: 'أهلاً يا بطل! تخيل موقفين. في الأول انت قاعد في المطعم، وفجأة اكتشفت إنك مش بتحب السمك، فقررت في نفس اللحظة تطلب فرخة. وفي التاني، انت مرتب من أسبوع إنك هتنام الليلة عند صاحبك. الموقفين عن المستقبل، بس بنقولهم بطريقتين مختلفتين: will وbe going to. النهارده هنعرف الفرق بينهم. يلا بينا.',
      show: { type: 'title', title: 'Will vs Be Going To', sub: '🍽️ quick decision  vs  📅 old plan' },
    },
    {
      say: 'نبدأ بـ will. بنستخدمها للقرار اللي بناخده في نفس اللحظة، فجأة. || تخيل صاحبك قال لك: I\'m hungry. يعني أنا جعان. || وانت قررت فوراً وقلت: I will make a sandwich. يعني هعملك ساندوتش. || القرار جه في لحظة الكلام.',
      show: { type: 'lines', pics: ['pics/hungry.png', 'pics/sandwich.png', ''], head: 'Will = a decision now', lines: ['"I\'m hungry."', '"I <b>will</b> make a sandwich."', 'قرار في لحظة الكلام'] },
    },
    {
      say: 'وبعدين be going to. بنستخدمها للخطة اللي قررناها قبل كده، يعني حاجة مرتبين لها من الأول. || I am going to sleep at Luna\'s house tonight. يعني هنام عند لونا الليلة. || She is going to come after school. يعني هي هتيجي بعد المدرسة. || We are going to watch a movie. يعني هنتفرج على فيلم. الخطة كانت جاهزة من قبل.',
      show: { type: 'lines', pics: ['', 'pics/bed.png', 'pics/school.png', 'pics/clapper.png'], head: 'Be going to = a plan', lines: ['خطة من قبل ← <b>be going to</b>', 'I <b>am going to</b> sleep at Luna\'s house tonight.', 'She <b>is going to</b> come after school.', 'We <b>are going to</b> watch a movie.'] },
    },
    {
      say: 'دورك. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'Your friend says: "I\'m thirsty." You say: "I ... get you some water."', o: ['will', 'am going to', 'is going to'], a: 0 },
    },
    {
      say: 'الإجابة will. || صاحبك قال إنه عطشان، وانت قررت في نفس اللحظة. || يعني القرار جه فجأة، من غير ما كنت مرتب له. || والقرار الفجائي بنقول فيه will.',
      show: { type: 'lines', pics: ['pics/cup-straw.png', '', 'pics/droplet.png'], head: 'Answer', lines: ['صاحبك قال "thirsty"', 'قرار فجأة', '<b>will</b> ← I <b>will</b> get you some water.'] },
    },
    {
      say: 'خلينا نتعلم شكل be going to. || مع I بنستخدم am، وبعدها going to وبعدها الفعل الأصلي. || ومع he وshe وit بنستخدم is. || ومع we وyou وthey بنستخدم are.',
      show: { type: 'grid', title: 'Be going to', head: ['Subject', 'Form'], rows: [['I', 'am going to + verb'], ['he / she / it', 'is going to + verb'], ['we / you / they', 'are going to + verb']], caption: 'نفي: am not / isn\'t / aren\'t going to' },
    },
    {
      say: 'والنفي سهل. بنزود not بعد am أو is أو are. || I am not going to sleep. يعني مش هنام. || She isn\'t going to come. يعني هي مش هتيجي. || They aren\'t going to play. يعني هما مش هيلعبوا.',
      show: { type: 'lines', pics: ['pics/bed.png', 'pics/school.png', 'pics/soccer.png'], head: 'Negative', lines: ['I <b>am not</b> going to sleep.', 'She <b>isn\'t</b> going to come.', 'They <b>aren\'t</b> going to play.'] },
    },
    {
      say: 'دورك تاني. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'Luna invited me yesterday. I ... sleep at her house tonight.', o: ['will', 'am going to', 'did'], a: 1 },
    },
    {
      say: 'الإجابة am going to. || لأن لونا دعتني إمبارح، يعني الخطة كانت جاهزة من قبل. || والخطة السابقة بنقول فيها be going to. || ومع I بنقول am.',
      show: { type: 'lines', pics: ['', '', 'pics/bed.png'], head: 'Answer', lines: ['دعتني إمبارح ← خطة قديمة', '<b>be going to</b>', 'I <b>am</b> going to sleep there.'] },
    },
    {
      say: 'نقارن بين الاتنين في مثال الكتاب. || Charlotte مابتحبش السمك، فقالت في نفس اللحظة: I will ask for chicken. يعني هطلب فرخة. دي will، قرار جديد. || لكن لونا قالت: I am going to sleep at Luna\'s house tonight. دي be going to، خطة قديمة. || يبقى will للقرار الفجائي، وbe going to للخطة.',
      show: { type: 'grid', title: 'Compare', head: ['Will', 'Be going to'], rows: [['quick decision', 'old plan'], ['I will ask for chicken.', 'I am going to sleep there.'], ['قرار لحظي', 'خطة سابقة']], caption: 'will = الآن — going to = قبل كده' },
    },
    {
      say: 'والأسئلة. مع will بنقول: Will you help me؟ يعني هتساعدني؟ || ومع be going to بنقول: Are you going to watch a movie؟ يعني هتتفرج على فيلم؟ || ومع she بنقول: Is she going to come؟ يعني هي هتيجي؟ || لاحظ إننا بنقدّم am أو is أو are على الفاعل.',
      show: { type: 'lines', pics: ['pics/handshake.png', 'pics/clapper.png', 'pics/school.png'], head: 'Questions', lines: ['<b>Will</b> you help me?', '<b>Are</b> you <b>going to</b> watch a movie?', '<b>Is</b> she <b>going to</b> come?'] },
    },
    {
      say: 'آخر سؤال قبل الاختبار. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: '... she going to come after school?', o: ['Are', 'Will', 'Is'], a: 2 },
    },
    {
      say: 'الإجابة Is. || لأن الفاعل هو she. || ومع she وhe وit بنستخدم is. || يعني Is she going to come؟',
      show: { type: 'lines', head: 'Answer', lines: ['she → <b>is</b>', '<b>Is</b> she going to come?', 'Are she ✘'] },
    },
    {
      say: 'ولو تايه وعايز تفرّق بسرعة، اسأل نفسك سؤال واحد. || هل القرار جه فجأة دلوقتي؟ يبقى will. || هل الخطة كانت جاهزة من قبل؟ يبقى be going to. || وبعد الاتنين نكتب الفعل الأصلي.',
      show: { type: 'lines', head: 'How to choose', lines: ['فجأة دلوقتي؟ ← <b>will</b>', 'مرتب له قبل كده؟ ← <b>be going to</b>', 'وبعدهم الفعل الأصلي'] },
    },
    {
      say: 'نلخّص الدرس. || will للقرار اللحظي. || be going to للخطة اللي اتقررت قبل كده. || وبعد الاتنين الفعل الأصلي. || ومع be going to بنستخدم am وis وare. برافو عليك! يلا بينا على الاختبار.',
      show: { type: 'lines', head: 'Summary', lines: ['✔ will = decision now', '✔ be going to = plan before', '✔ am / is / are going to + verb', '✔ Are you going to ...?'] },
    },
  ],
  quiz: [
    {"q":"The phone is ringing. I ... answer it!","o":["am going to","will","was","did"],"a":1,"why":"الهاتف يرن الآن، فنقرر في نفس اللحظة أن نرد. القرار المفاجئ نستعمل معه will: I will answer it.","ow":["am going to نستعملها للخطة المجهزة من قبل، وهذا قرار مفاجئ.","","was ماضٍ، ولا يناسب القرار في لحظة الكلام.","did ماضٍ، ولا يناسب القرار في لحظة الكلام."]},
    {"q":"I bought tickets. We ... see a movie tonight.","o":["will","are going to","did","were"],"a":1,"why":"الخطة جاهزة من قبل، فقد اشتريتُ التذاكر. لذلك نستعمل be going to، ومع We نستعمل are: We are going to see a movie tonight.","ow":["will نستعملها للقرار المفاجئ، وهذه خطة مجهزة من قبل.","","did ماضٍ، والجملة هنا عن خطة قادمة الليلة.","were ماضٍ، والجملة هنا عن خطة قادمة الليلة."]},
    {"q":"She ... going to sleep at Luna's house.","o":["am","is","are","will"],"a":1,"why":"الفاعل She، ومع she وhe وit نستعمل is قبل going to. فنقول: She is going to sleep at Luna's house.","ow":["am نستعملها مع I فقط، وليس مع She.","","are نستعملها مع we وyou وthey، وليس مع She.","will لا تأتي قبل going to، فنستعمل am أو is أو are."]},
    {"q":"I ... going to visit my uncle tomorrow.","o":["is","are","am","will"],"a":2,"why":"الفاعل I، ومع I نستعمل am قبل going to. فنقول: I am going to visit my uncle tomorrow.","ow":["is نستعملها مع he وshe وit، وليس مع I.","are نستعملها مع we وyou وthey، وليس مع I.","","will لا تأتي قبل going to، فنستعمل am مع I."]},
    {"q":"Charlotte doesn't like fish, so she says: \"I ... ask for chicken.\"","o":["am going to","will","is going to","did"],"a":1,"why":"تشارلوت لا تحب السمك، فتقرر في نفس اللحظة أن تطلب دجاجًا. هذا قرار مفاجئ فنستعمل will: I will ask for chicken.","ow":["am going to نستعملها للخطة المجهزة من قبل، وهذا قرار مفاجئ.","","is going to لا تناسب I، وهذا قرار مفاجئ فنستعمل will.","did ماضٍ، ولا يناسب قرارًا للمستقبل."]},
    {"q":"Which sentence is correct?","o":["They are going to play.","They is going to play.","They going to play.","They are go to play."],"a":0,"why":"مع They نستعمل are قبل going to، وبعدها الفعل الأصلي play. فالجملة الصحيحة: They are going to play.","ow":["","They is خطأ، لأن is مع he وshe وit فقط.","They going to ناقصة، فنحتاج are قبل going to.","go to بعد are غير صحيحة، فنحتاج going to وبعدها الفعل الأصلي."]},
    {"q":"... you going to watch a movie this evening?","o":["Do","Will","Are","Is"],"a":2,"why":"مع you نستعمل Are في بداية السؤال: Are you going to watch a movie this evening؟ أي هل ستشاهد فيلمًا هذا المساء؟","ow":["Do لا تأتي قبل going to في هذا السؤال.","Will تستعمل مع الفعل الأصلي مباشرة، وليس مع going to.","","Is نستعملها مع he وshe وit، وليس مع you."]},
    {"q":"We use \"be going to\" for ...","o":["plans made before","past actions","quick decisions","habits"],"a":0,"why":"نستعمل be going to للخطط التي قررناها قبل الكلام، أي المجهزة من قبل. مثل: I am going to sleep at Luna's house.","ow":["","الأفعال الماضية نعبر عنها بـ ed أو بفعل شاذ، وليس بـ be going to.","القرارات السريعة نستعمل لها will، وليس be going to.","العادات نعبر عنها بالمضارع البسيط، وليس be going to."]},
  ],
};
