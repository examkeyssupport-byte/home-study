// English 5 (Top Goal 2) — Welcome — lesson 2: How many / How long, simple past, superlatives (pp. 6-9) — v2: beats (" || ") = one board line each, in-lesson questions
window.LESSONS = window.LESSONS || {};
window.LESSONS['e5-0-2'] = {
  v: 2,
  title: 'Welcome: How many / How long, Past and Superlatives',
  sub: 'اللغة الإنجليزية — Welcome — درس ٢',
  steps: [
    {
      say: 'أهلاً يا بطل! تخيل إنك قاعد في الفصل ومدرس الإنجليزي بيسألك تلات أسئلة. الأول: كام حصة عندك يوم الأربع؟ وبعدين: الحصة بتاخد قد إيه؟ وآخر سؤال: مين أطول واحد في الفصل؟ النهارده هنتعلم نسأل ونجاوب على الأسئلة دي بالإنجليزي. وكمان هنراجع الماضي البسيط، وأعلى درجة. يلا بينا.',
      show: { type: 'title', title: 'How many / How long', sub: '🏫 How many classes? How long is the lesson? Who is the tallest?' },
    },
    {
      say: 'نبدأ بـ How many. دي بنسأل بيها عن العدد، يعني كام؟ || بعد How many بنحط اسم جمع، زي classes أو books. || مثلاً: How many classes do you have on Wednesdays؟ يعني كام حصة عندك يوم الأربع؟ || والإجابة: I have five classes. يعني عندي خمس حصص.',
      show: { type: 'lines', head: 'How many + plural noun', lines: ['<b>How many</b> = كام؟ (عدد)', 'How many <b>classes</b> / <b>books</b>…', '<b>How many</b> classes do you have on Wednesdays?', 'I have <b>five</b> classes.'] },
    },
    {
      say: 'دورك. اختار الكلمة الصح للسؤال ده. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: '... students are in your class?', o: ['How long', 'How many', 'How tall'], a: 1 },
    },
    {
      say: 'الإجابة How many. || ليه؟ لأننا بنسأل عن عدد الطلاب. || والطلاب اسم جمع، وهو students. كل ما تسمع عدد وجمع، قول How many.',
      show: { type: 'lines', head: 'Answer', lines: ['<b>How many</b> students are in your class?', 'عدد الطلاب ← How many', 'students = جمع'] },
    },
    {
      say: 'دلوقتي How long. دي بنسأل بيها عن المدة، يعني كام ساعة أو كام دقيقة. || How long is the English lesson؟ يعني الحصة بتاخد قد إيه؟ || والإجابة: It is forty-five minutes. يعني خمسة وأربعين دقيقة. || وكمان: How long does it take to get there؟ يعني الوصول هناك بياخد قد إيه؟ || والإجابة: About two minutes. يعني حوالي دقيقتين.',
      show: { type: 'lines', head: 'How long = المدة', lines: ['<b>How long</b> is the English lesson?', 'It is forty-five minutes.', '<b>How long</b> does it take to get there?', 'About two minutes.'] },
    },
    {
      say: 'خلينا نفرّق بينهم بشكل واضح. || How many بنسأل بيها عن عدد الحاجات، زي How many books. || وHow long بنسأل بيها عن المدة الزمنية، زي How long is the break.',
      show: { type: 'grid', title: 'Difference', head: ['Question', 'Asks about'], rows: [['How many', 'العدد'], ['How long', 'المدة']], caption: 'How many books? — How long is the break?' },
    },
    {
      say: 'دورك تاني. السؤال ده عن إيه؟ اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'How ... is the break? — It is twenty minutes.', o: ['many', 'long', 'old'], a: 1 },
    },
    {
      say: 'الإجابة long. || لأن الإجابة twenty minutes، يعني عشرين دقيقة، وده وقت. || وسؤال الوقت بنقول فيه How long.',
      show: { type: 'lines', head: 'Answer', lines: ['How <b>long</b> is the break?', 'twenty minutes = مدة', 'مدة ← How long'] },
    },
    {
      say: 'ندخل على الماضي البسيط، Simple Past. بنستخدمه للحاجة اللي حصلت وخلصت. || زي كلمة yesterday، يعني إمبارح. || الأفعال العادية بنزود عليها ed. مثلاً play بتبقى played. || I played football yesterday. يعني لعبت كورة إمبارح.',
      show: { type: 'lines', head: 'Simple Past', lines: ['حدث حصل وخلص ← <b>Past</b>', 'yesterday = إمبارح', 'play → play<b>ed</b>', 'I <b>played</b> football yesterday.'] },
    },
    {
      say: 'وفيه أفعال شاذة. دي مابنزودش عليها ed، دي بتغيّر شكلها خالص. لازم تحفظها. || go بتبقى went. || have بتبقى had. || do بتبقى did. وفي الجملة نقول: I went to school. يعني رحت المدرسة.',
      show: { type: 'grid', title: 'Irregular verbs', head: ['Present', 'Past'], rows: [['go', 'went'], ['have', 'had'], ['do', 'did']], caption: 'I went to school.' },
    },
    {
      say: 'والنفي في الماضي. بنقول did not، واختصارها didn\'t. || وبعد didn\'t بنكتب الفعل زي ما هو، من غير ed ومن غير تغيير. || يعني I didn\'t go yesterday. يعني ما رحتش إمبارح. || ومانقولش I didn\'t went، ده غلط.',
      show: { type: 'lines', head: 'Negative past', lines: ['did not = <b>didn\'t</b>', 'I <b>didn\'t go</b> yesterday. ✔', 'I didn\'t went yesterday. ✘'] },
    },
    {
      say: 'آخر حاجة: أعلى درجة، اللي اسمها Superlative. بنستخدمها لما نقارن حاجة بكل الباقي. || مثلاً tall بتبقى the tallest، يعني الأطول. || يعني ناخد الكلمة القصيرة ونزود عليها est. || وفي الأول نحط the.',
      show: { type: 'lines', head: 'Superlatives', lines: ['نقارن واحد بالباقي كلهم', 'tall → <b>the tallest</b>', 'كلمة قصيرة + <b>est</b>', 'ونحط <b>the</b> قبلها'] },
    },
    {
      say: 'خلينا نشوف أمثلة تانية. || big بتبقى the biggest. لاحظ إننا كررنا الحرف الأخير g. || easy بتبقى the easiest. الـ y بتتحول i. || funny بتبقى the funniest. برضه الـ y بتتحول i. || أما الكلمات الطويلة زي difficult فبنقول the most difficult. ما بنزودش est.',
      show: { type: 'grid', title: 'Superlatives', head: ['Word', 'Superlative'], rows: [['big', 'the biggest'], ['easy', 'the easiest'], ['funny', 'the funniest'], ['difficult', 'the most difficult']], caption: 'كلمة قصيرة: est — كلمة طويلة: the most' },
    },
    {
      say: 'آخر سؤال قبل الاختبار. اختار الشكل الصح.',
      show: { type: 'ask', q: 'Sam is the ... boy in the class. (funny)', o: ['funniest', 'funnyest', 'most funny'], a: 0 },
    },
    {
      say: 'الإجابة funniest. || funny كلمة قصيرة، فنزود عليها est. || بس الـ y بتتحول i، فتبقى funniest. || ومانسيناش the في الأول: the funniest.',
      show: { type: 'lines', head: 'Answer', lines: ['funny + est', 'y → i', '<b>the funniest</b> boy'] },
    },
    {
      say: 'نلخّص الدرس. || How many للعدد، وHow long للمدة. || الماضي البسيط للحاجة اللي خلصت، وبنزود ed أو نستخدم فعل شاذ زي went. || والنفي didn\'t وبعدها الفعل الأصلي. || وأعلى درجة: the tallest وthe biggest وthe most difficult. برافو عليك! يلا بينا على الاختبار.',
      show: { type: 'lines', head: 'Summary', lines: ['✔ <b>How many</b> + جمع = عدد', '✔ <b>How long</b> = مدة', '✔ Past: played, went, didn\'t go', '✔ the tallest – the biggest – the most difficult'] },
    },
  ],
  quiz: [
    { q: '... classes do you have on Wednesdays?', o: ['How long', 'How many', 'How much', 'How old'], a: 1, why: 'نسأل عن عدد الحصص: How many.' },
    { q: '... is the English lesson? — Forty-five minutes.', o: ['How many', 'How often', 'How long', 'How tall'], a: 2, why: 'السؤال عن المدة: How long.' },
    { q: 'Yesterday, I ... to school.', o: ['go', 'goes', 'went', 'going'], a: 2, why: 'الماضي من go هو went.' },
    { q: 'I ... go to the park yesterday.', o: ["didn't", "don't", "doesn't", "wasn't"], a: 0, why: "نفي الماضي: didn't + الفعل الأصلي." },
    { q: 'Marco is the ... student in our class.', o: ['tall', 'taller', 'tallest', 'most tall'], a: 2, why: 'الصفة القصيرة + est: the tallest.' },
    { q: 'The science lab is the ... classroom in the school.', o: ['big', 'bigger', 'bigest', 'biggest'], a: 3, why: 'big تصبح biggest بتكرار الحرف g.' },
    { q: 'This is the ... class for me. (difficult)', o: ['difficultest', 'most difficult', 'more difficult', 'difficulter'], a: 1, why: 'الكلمة الطويلة نستخدم معها the most.' },
    { q: 'How ... does it take to get to school? — About ten minutes.', o: ['many', 'much', 'long', 'old'], a: 2, why: 'ten minutes مدة، فنسأل How long.' },
  ],
};
