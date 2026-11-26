// English 5 (Top Goal 2) — Unit 3 — lesson 2: Future possibility: be going to, may, might (Student's Book pp. 36-37) — v2: beats (" || ") = one board line each, in-lesson questions
window.LESSONS = window.LESSONS || {};
window.LESSONS['e5-3-2'] = {
  v: 2,
  title: 'Future Plans: Be Going To, May and Might',
  sub: 'اللغة الإنجليزية — الوحدة ٣ Job Paths — درس ٢',
  steps: [
    {
      say: 'أهلاً يا بطل! تخيل إن صاحبك بيحب الطيارات جداً. لو سألته: هتبقى طيار لما تكبر؟ ممكن يقول: أيوه أكيد هبقى طيار. وممكن يقول: يمكن أبقى طيار. وممكن يقول: يمكن مابقاش طيار. كل إجابة فيها درجة تأكد مختلفة، وبالإنجليزي لكل درجة طريقة. النهارده هنتعلم be going to وmay وmight. يلا بينا.',
      show: { type: 'title', title: 'Be Going To, May, Might', sub: '✈️ I will be a pilot… maybe!' },
    },
    {
      say: 'الفكرة كلها في درجة التأكد. || لو متأكد مية في المية إن الحاجة هتحصل، بنقول be going to. || لو الحاجة ممكنة، يعني احتمال تحصل واحتمال لأ، بنقول may أو might. || ولو الحاجة مش مرجحة، بنقول may not أو might not.',
      show: { type: 'lines', head: 'How sure are you?', lines: ['متأكد تمامًا ← <b>going to</b>', 'ممكن ← <b>may / might</b>', 'مش مرجح ← <b>may not / might not</b>'] },
    },
    {
      say: 'نبدأ بالتأكد التام. || لما نكون متأكدين مية في المية من خطتنا، بنقول be going to. I am going to be an artist. يعني أنا هبقى فنان، وأنا متأكد. || ولو متأكدين إن الحاجة مستحيلة، بنقول isn\'t going to. He isn\'t going to act on TV. يعني مش هيمثل في التليفزيون خالص.',
      show: { type: 'grid', pics: ['pics/hundred.png', 'pics/prohibited.png'], title: 'Sure', head: ['How sure?', 'Example'], rows: [['100% sure', 'I am going to be an artist.'], ['0% impossible', 'He isn\'t going to act on TV.']], caption: 'متأكد تمامًا — مستحيل' },
    },
    {
      say: 'دورك. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'Tom is 100% sure. Tom says: "I ... be a journalist."', o: ['am going to', 'might', 'may not'], a: 0 },
    },
    {
      say: 'الإجابة am going to. || لأن توم متأكد مية في المية. || والمتأكد تماماً بنقول فيه be going to. || أما might فهي للاحتمال، وmay not للشيء غير المرجح.',
      show: { type: 'lines', pics: ['pics/hundred.png', 'pics/newspaper.png', ''], head: 'Answer', lines: ['متأكد 100% ← <b>going to</b>', 'I <b>am going to</b> be a journalist.', 'might = احتمال فقط'] },
    },
    {
      say: 'دلوقتي الاحتمال. لما الحاجة ممكنة، يعني احتمال تحصل واحتمال لأ، بنستخدم may أو might. || المعنى واحد، يعني ممكن أو يمكن. || You may fly all over the world. يعني ممكن تسافر العالم كله. || She might be a pilot. يعني ممكن تبقى طيارة. || وبعد may وmight بنكتب الفعل الأصلي.',
      show: { type: 'lines', pics: ['', 'pics/globe.png', 'pics/airplane.png', ''], head: 'Possible: may / might', lines: ['may = might = ممكن', 'You <b>may</b> fly all over the world.', 'She <b>might</b> be a pilot.', 'may / might + <b>base verb</b>'] },
    },
    {
      say: 'دورك تاني. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'She likes flying planes. She ... be a pilot.', o: ['isn\'t going to', 'may', 'didn\'t'], a: 1 },
    },
    {
      say: 'الإجابة may. || هي بتحب الطيران، فممكن تبقى طيارة، لكن مش مؤكد. || والممكن بنقول فيه may أو might. || وبعدها الفعل الأصلي be.',
      show: { type: 'lines', pics: ['', 'pics/airplane.png', ''], head: 'Answer', lines: ['بتحب الطيران ← ممكن', 'She <b>may</b> be a pilot.', 'may + base verb'] },
    },
    {
      say: 'ولو الحاجة مش مرجحة، يعني احتمالها قليل، بنقول may not أو might not. || She may not become an engineer. يعني ممكن ما تبقاش مهندسة. || وفي الكلام العادي بنفضّل might not. || Julian might not be a pilot because he\'s scared of planes. يعني جوليان يمكن مايبقاش طيار، لأنه خايف من الطيارات.',
      show: { type: 'lines', pics: ['', 'pics/gear.png', 'pics/airplane.png', 'pics/fearful.png'], head: 'Unlikely: may not / might not', lines: ['احتمال قليل ← <b>may not / might not</b>', 'She <b>may not</b> become an engineer.', 'Julian <b>might not</b> be a pilot.', 'He\'s scared of planes.'] },
    },
    {
      say: 'دورك. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'Ali is scared of planes. He ... be a pilot.', o: ['is going to', 'might not', 'will'], a: 1 },
    },
    {
      say: 'الإجابة might not. || لأن علي خايف من الطيارات، فاحتمال إنه يبقى طيار قليل. || والاحتمال القليل بنقول فيه might not أو may not.',
      show: { type: 'lines', pics: ['', '', 'pics/airplane.png'], head: 'Answer', lines: ['خايف من الطيارات', 'احتمال قليل', 'He <b>might not</b> be a pilot.'] },
    },
    {
      say: 'الجدول ده بيلخّص الدرجات كلها. || مية في المية: am going to أو is أو are going to. || خمسين في المية، يعني ممكن: may أو might. || تلاتين في المية، يعني مش مرجح: may not أو might not. || صفر في المية، يعني مستحيل: isn\'t going to.',
      show: { type: 'grid', pics: ['pics/hundred.png', '', '', 'pics/prohibited.png'], title: 'Future plans', head: ['Chance', 'Use'], rows: [['100%', 'am / is / are going to'], ['50%', 'may / might'], ['30%', 'may not / might not'], ['0%', 'isn\'t / aren\'t going to']], caption: 'درجة التأكد' },
    },
    {
      say: 'نطبّق على أمثلة الكتاب. || She likes flying. يعني هي بتحب الطيران. فنقول: She may be a pilot. || He is scared of planes. يعني هو خايف من الطيارات. فنقول: He might not be a pilot. || ولو حد متأكد إنه مش عايز، يقول: I\'m not going to work in an office. يعني أنا مش هشتغل في مكتب.',
      show: { type: 'lines', pics: ['pics/airplane.png', 'pics/fearful.png', 'pics/office-building.png'], head: 'Practice', lines: ['She likes flying. → She <b>may</b> be a pilot.', 'He is scared of planes. → He <b>might not</b> be a pilot.', 'I\'m <b>not going to</b> work in an office.'] },
    },
    {
      say: 'نلخّص الدرس. || be going to للمتأكد. || may وmight للممكن. || may not وmight not لغير المرجح. || وبعدهم كلهم الفعل الأصلي. برافو عليك! يلا بينا على الاختبار.',
      show: { type: 'lines', head: 'Summary', lines: ['✔ going to = sure', '✔ may / might = possible', '✔ may not / might not = unlikely', '✔ + base verb'] },
    },
  ],
  quiz: [
    {"q":"I am sure. I ... be an artist.","o":["might","am going to","may not","might not"],"a":1,"why":"الجملة تقول إنني متأكد، فنستعمل be going to، ومع I نقول am going to: I am going to be an artist.","ow":["might للاحتمال فقط، وأنا هنا متأكد.","","may not تدل على أن الأمر غير مرجح، وأنا هنا متأكد.","might not تدل على أن الأمر غير مرجح، وأنا هنا متأكد."]},
    {"q":"You ... fly all over the world. It is possible.","o":["may","are going","isn't","did"],"a":0,"why":"الجملة تقول إن الأمر ممكن، فنستعمل may بعد You، وبعدها الفعل الأصلي fly. فنقول: You may fly all over the world.","ow":["","are going ناقصة، فنحتاج are going to كاملة، وهي للتأكد.","isn't لا تناسب You، ولا تدل على الاحتمال.","did ماضٍ، ولا يناسب احتمالًا في المستقبل."]},
    {"q":"Julian is scared of planes. He ... be a pilot.","o":["is going to","might not","will","did"],"a":1,"why":"جوليان يخاف من الطائرات، فاحتمال أن يصبح طيارًا قليل. فنستعمل might not: He might not be a pilot.","ow":["is going to تدل على التأكد التام، وهو يخاف من الطائرات.","","will تدل على التأكد، وهو يخاف من الطائرات.","did ماضٍ، ولا يناسب احتمالًا في المستقبل."]},
    {"q":"She might ... a pilot.","o":["is","be","being","to be"],"a":1,"why":"بعد might نكتب الفعل الأصلي be بدون تغيير. فنقول: She might be a pilot أي قد تصبح طيارة.","ow":["is لا تأتي بعد might، فنكتب الفعل الأصلي be.","","being فيها ing، وبعد might نكتب الفعل الأصلي be.","to be لا نضع to بعد might، بل نكتب be مباشرة."]},
    {"q":"It is impossible. He ... act on TV.","o":["isn't going to","may","might","is going to"],"a":0,"why":"كلمة impossible تعني مستحيل، والمستحيل نعبر عنه بـ isn't going to. فنقول: He isn't going to act on TV أي لن يمثل في التلفزيون أبدًا.","ow":["","may تدل على أن الأمر ممكن، وهنا الأمر مستحيل.","might تدل على الاحتمال، وهنا الأمر مستحيل.","is going to تدل على التأكد من حدوث الأمر، وهنا الأمر مستحيل."]},
    {"q":"\"May\" and \"might\" are used to talk about ...","o":["past actions","possible future plans","habits","numbers"],"a":1,"why":"may وmight نستعملهما للكلام عن الخطط المستقبلية الممكنة، أي التي قد تحدث وقد لا تحدث، مثل She may be a pilot.","ow":["الأفعال الماضية نعبر عنها بـ ed أو بفعل شاذ، وليس بـ may وmight.","","العادات نعبر عنها بالمضارع البسيط، وليس بـ may وmight.","الأرقام ليست موضوع may وmight."]},
    {"q":"Choose the correct sentence.","o":["She may goes.","She might go.","She might to go.","She mights go."],"a":1,"why":"بعد might نكتب الفعل الأصلي go بدون to وبدون s. فالجملة الصحيحة: She might go. ولا نضيف s إلى might.","ow":["She may goes خطأ، لأن بعد may نكتب الفعل الأصلي بدون s.","","She might to go خطأ، لأننا لا نضع to بعد might.","She mights go خطأ، لأن might لا نضيف لها s."]},
    {"q":"Which sentence is WRONG?","o":["I may be a pilot.","He might be a chef.","She may be an actress.","They mights be singers."],"a":3,"why":"might لا نضيف لها s، فنقول: They might be singers. أما «They mights be singers» ففيها خطأ.","ow":["I may be a pilot جملة صحيحة، فبعد may نكتب الفعل الأصلي be.","He might be a chef جملة صحيحة، فبعد might نكتب الفعل الأصلي be.","She may be an actress جملة صحيحة، فبعد may نكتب الفعل الأصلي be.",""]},
  ],
};
