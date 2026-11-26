// English 5 (Top Goal 2) — Unit 3 — lesson 3: Question tags (Student's Book pp. 41-42) — v2: beats (" || ") = one board line each, in-lesson questions
window.LESSONS = window.LESSONS || {};
window.LESSONS['e5-3-3'] = {
  v: 2,
  title: 'Question Tags',
  sub: 'اللغة الإنجليزية — الوحدة ٣ Job Paths — درس ٣',
  steps: [
    {
      say: 'أهلاً يا بطل! تخيل إنك داخل مع صاحبك مسرح كبير، وانت عايز تتأكد من حاجة فتقول: ده مسرح، مش كده؟ في العربي بنقول مش كده في آخر الجملة. وفي الإنجليزي بنقول isn\'t it. يعني: This is a theater, isn\'t it؟ ده اسمه Question Tag، يعني السؤال القصير اللي بنحطه في آخر الجملة. النهارده هنتعلم نعمله صح. يلا بينا.',
      show: { type: 'title', title: 'Question Tags', sub: '🎭 This is a theater, isn\'t it?' },
    },
    {
      say: 'الأول نفهم الفكرة. || الجملة بتبقى عادية، يعني بتقول حاجة. || وفي آخرها بنحط سؤال قصير بعد فاصلة. || والسؤال ده بنستخدمه عشان نتأكد، يعني نقول مش كده؟ أو صح؟',
      show: { type: 'lines', pics: ['', 'pics/performing-arts.png', ''], head: 'What is a question tag?', lines: ['جملة + فاصلة + سؤال قصير', 'This is a theater<b>, isn\'t it?</b>', 'معناه: مش كده؟ للتأكد'] },
    },
    {
      say: 'القاعدة الأولى. لو الجملة مثبتة، يعني من غير not، فالتاج بيبقى منفي. || This is a theater, isn\'t it؟ الجملة فيها is، والتاج isn\'t. || You saw a famous actor, didn\'t you؟ يعني انت شفت ممثل مشهور، مش كده؟ || He is a pilot, isn\'t he؟ يعني هو طيار، مش كده؟',
      show: { type: 'lines', pics: ['', 'pics/performing-arts.png', 'pics/star.png', 'pics/pilot.png'], head: 'Affirmative → negative tag', lines: ['جملة مثبتة ← تاج منفي', 'This <b>is</b> a theater, <b>isn\'t</b> it?', 'You <b>saw</b> a famous actor, <b>didn\'t</b> you?', 'He <b>is</b> a pilot, <b>isn\'t</b> he?'] },
    },
    {
      say: 'دورك. اختار التاج الصح. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'It is a big stage, ... ?', o: ["isn't it", 'is it', "doesn't it"], a: 0 },
    },
    {
      say: 'الإجابة isn\'t it. || الجملة مثبتة، يعني من غير not. || فالتاج بيبقى منفي، isn\'t. || والفعل في الجملة is، فبنستخدم isn\'t مع it.',
      show: { type: 'lines', pics: ['', '', 'pics/performing-arts.png'], head: 'Answer', lines: ['جملة مثبتة ← تاج منفي', 'is → <b>isn\'t</b>', 'It is a big stage, <b>isn\'t it</b>?'] },
    },
    {
      say: 'والقاعدة التانية هي العكس. لو الجملة منفية، يعني فيها not أو n\'t، فالتاج بيبقى مثبت. || You aren\'t a pilot, are you؟ يعني انت مش طيار، صح؟ || You haven\'t managed a team, have you؟ يعني انت ماقدتش فريق قبل كده، صح؟ || She isn\'t a doctor, is she؟ يعني هي مش دكتورة، صح؟',
      show: { type: 'lines', pics: ['', 'pics/pilot.png', 'pics/briefcase.png', 'pics/doctor.png'], head: 'Negative → affirmative tag', lines: ['جملة منفية ← تاج مثبت', 'You <b>aren\'t</b> a pilot, <b>are</b> you?', 'You <b>haven\'t</b> managed a team, <b>have</b> you?', 'She <b>isn\'t</b> a doctor, <b>is</b> she?'] },
    },
    {
      say: 'دورك تاني. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'They aren\'t late, ... ?', o: ["aren't they", 'are they', 'do they'], a: 1 },
    },
    {
      say: 'الإجابة are they. || الجملة منفية، فيها aren\'t. || يبقى التاج مثبت، يعني are. || والفاعل they، فنقول are they.',
      show: { type: 'lines', pics: ['', '', 'pics/alarm-clock.png'], head: 'Answer', lines: ['جملة منفية ← تاج مثبت', 'aren\'t → <b>are</b>', 'They aren\'t late, <b>are they</b>?'] },
    },
    {
      say: 'وفيه حاجة مهمة. التاج بيستخدم نفس الفعل المساعد اللي في الجملة. || لو الجملة فيها is، فالتاج isn\'t. || لو فيها can، فالتاج can\'t. She can swim, can\'t she؟ || لو فيها have، فالتاج haven\'t. || ومع الماضي البسيط بنستخدم didn\'t، زي: You saw a famous actor, didn\'t you؟',
      show: { type: 'grid', title: 'Same helper verb', head: ['Sentence', 'Tag'], rows: [['It is …', 'isn\'t it?'], ['She can …', 'can\'t she?'], ['You have …', 'haven\'t you?'], ['You saw …', 'didn\'t you?']], caption: 'نفس الفعل المساعد' },
    },
    {
      say: 'طيب لو الجملة فيها فعل عادي في المضارع؟ بنستخدم don\'t أو doesn\'t. || She enjoys taking photos, doesn\'t she؟ يعني هي بتحب التصوير، مش كده؟ لاحظ إن she ماشية مع doesn\'t. || You like pizza, don\'t you؟ يعني انت بتحب البيتزا، مش كده؟ || وفي حالة I بنقول: I can come, can\'t I؟ يعني أقدر أجي، مش كده؟',
      show: { type: 'lines', pics: ['', 'pics/camera.png', 'pics/pizza.png', ''], head: 'Present simple', lines: ['فعل عادي + he / she / it ← <b>doesn\'t</b>', 'She enjoys photos, <b>doesn\'t she</b>?', 'You like pizza, <b>don\'t you</b>?', 'I can come, <b>can\'t I</b>?'] },
    },
    {
      say: 'دورك. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'You like pizza, ... ?', o: ["doesn't you", "don't you", "aren't you"], a: 1 },
    },
    {
      say: 'الإجابة don\'t you. || الجملة مثبتة وفيها فعل عادي like في المضارع. || فنستخدم don\'t، وهنا الفاعل you. || يعني You like pizza, don\'t you؟',
      show: { type: 'lines', pics: ['', '', 'pics/pizza.png'], head: 'Answer', lines: ['like = فعل عادي، مضارع', 'you ← <b>don\'t</b>', 'You like pizza, <b>don\'t you</b>?'] },
    },
    {
      say: 'تدريب على أمثلة الكتاب. || That was an office, ... ؟ الجملة مثبتة وفيها was، فالتاج wasn\'t it. || He is going to work here, ... ؟ الجملة مثبتة، فالتاج isn\'t he. || You aren\'t a pilot, ... ؟ الجملة منفية، فالتاج are you.',
      show: { type: 'grid', pics: ['pics/office-building.png', 'pics/briefcase.png', 'pics/pilot.png'], title: 'Practice', head: ['Sentence', 'Tag'], rows: [['That was an office,', 'wasn\'t it?'], ['He is going to work here,', 'isn\'t he?'], ['You aren\'t a pilot,', 'are you?']], caption: 'اختر التاج الصحيح' },
    },
    {
      say: 'نلخّص الدرس. || الجملة المثبتة ليها تاج منفي. || والجملة المنفية ليها تاج مثبت. || ونستخدم نفس الفعل المساعد. || ومع الأفعال العادية بنستخدم don\'t وdoesn\'t وdidn\'t. برافو عليك! يلا بينا على الاختبار.',
      show: { type: 'lines', head: 'Summary', lines: ['✔ + sentence → − tag', '✔ − sentence → + tag', '✔ same helper verb', '✔ didn\'t / don\'t / doesn\'t for actions'] },
    },
  ],
  quiz: [
    {"q":"This is the theater, ... ?","o":["is it","isn't it","doesn't it","wasn't it"],"a":1,"why":"الجملة مثبتة وفيها is، فالتاج منفي بنفس الفعل المساعد: isn't. والفاعل it، فنقول: This is the theater, isn't it؟","ow":["is it تاج مثبت، والجملة مثبتة أصلًا، فنحتاج تاجًا منفيًا.","","doesn't it لا تناسب is، فنستعمل isn't.","wasn't it ماضٍ، والجملة هنا في المضارع مع is."]},
    {"q":"You saw a famous actor, ... ?","o":["don't you","didn't you","aren't you","weren't you"],"a":1,"why":"الجملة مثبتة في الماضي البسيط (saw)، فالتاج منفي بـ didn't. فنقول: You saw a famous actor, didn't you؟","ow":["don't you للمضارع، والجملة هنا في الماضي saw.","","aren't you لا تناسب الفعل العادي saw، فنستعمل didn't.","weren't you لا تناسب الفعل العادي saw، فنستعمل didn't."]},
    {"q":"You aren't a pilot, ... ?","o":["aren't you","are you","do you","did you"],"a":1,"why":"الجملة منفية فيها aren't، فالتاج يكون مثبتًا بنفس الفعل المساعد: are. فنقول: You aren't a pilot, are you؟","ow":["aren't you تاج منفي، والجملة منفية أصلًا، فنحتاج تاجًا مثبتًا.","","do you لا تناسب aren't، فنستعمل are you.","did you للماضي البسيط، والجملة فيها aren't في المضارع."]},
    {"q":"She enjoys taking photos, ... ?","o":["don't she","isn't she","doesn't she","didn't she"],"a":2,"why":"الجملة مثبتة وفيها فعل عادي enjoys مع she، فالتاج منفي بـ doesn't. فنقول: She enjoys taking photos, doesn't she؟","ow":["don't she خطأ، لأن مع she نستعمل doesn't وليس don't.","isn't she لا تناسب الفعل العادي enjoys، فنستعمل doesn't.","","didn't she للماضي، والجملة هنا في المضارع."]},
    {"q":"He is going to work here, ... ?","o":["isn't he","doesn't he","is he","won't he"],"a":0,"why":"الجملة مثبتة وفيها is going to، فالتاج منفي بنفس الفعل المساعد: isn't. فنقول: He is going to work here, isn't he؟","ow":["","doesn't he لا تناسب is going to، فنستعمل isn't.","is he تاج مثبت، والجملة مثبتة أصلًا، فنحتاج تاجًا منفيًا.","won't he لا تناسب is going to، فنستعمل isn't."]},
    {"q":"You haven't managed a team before, ... ?","o":["haven't you","have you","did you","do you"],"a":1,"why":"الجملة منفية فيها haven't، فالتاج يكون مثبتًا بنفس الفعل المساعد: have. فنقول: You haven't managed a team before, have you؟","ow":["haven't you تاج منفي، والجملة منفية أصلًا، فنحتاج تاجًا مثبتًا.","","did you للماضي البسيط، والجملة فيها haven't فنستعمل have.","do you لا تناسب haven't، فنستعمل نفس الفعل المساعد have."]},
    {"q":"That was an office, ... ?","o":["wasn't it","was it","isn't it","didn't it"],"a":0,"why":"الجملة مثبتة وفيها was، فالتاج منفي بنفس الفعل المساعد: wasn't. والفاعل it، فنقول: That was an office, wasn't it؟","ow":["","was it تاج مثبت، والجملة مثبتة أصلًا، فنحتاج تاجًا منفيًا.","isn't it للمضارع، والجملة هنا في الماضي was.","didn't it لا تناسب was، فنستعمل wasn't."]},
    {"q":"I can come, ... ?","o":["can I","can't I","don't I","won't I"],"a":1,"why":"الجملة مثبتة وفيها can، فالتاج منفي بنفس الفعل المساعد: can't. وهذه الجملة مع I فنقول: I can come, can't I؟","ow":["can I تاج مثبت، والجملة مثبتة أصلًا، فنحتاج تاجًا منفيًا.","","don't I لا تناسب can، فنستعمل can't.","won't I لا تناسب can، فنستعمل نفس الفعل المساعد can't."]},
  ],
};
