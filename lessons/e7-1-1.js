// إنجليزي أول متوسط — Super Goal 1 — Unit 1 Good Morning! — درس ١ (ص ٢–٣، ٦–٧) — v2: beats (" || ") = one board line each, in-lesson questions
window.LESSONS = window.LESSONS || {};
window.LESSONS['e7-1-1'] = {
  v: 2,
  title: 'Greetings & Introductions — التحيات والتعارف',
  sub: 'English — Unit 1 — Lesson 1',
  steps: [
    {
      say: 'أهلاً يا بطل! تخيّل معايا إنك أول يوم في مدرسة جديدة في الرياض. دخلت الفصل، والمدرس قال لك: Good morning. وإنت واقف ساكت ومش عارف ترد! بلاش الموقف ده. النهارده هنتعلم نسلّم على الناس بالإنجليزي، ونعرّف نفسنا، ونودّع. وكل كلمة هنقولها أكتر من مرة عشان تثبت.',
      show: { type: 'title', title: 'Good Morning!', sub: '🏫 أول يوم في مدرسة جديدة: ماذا تقول؟' },
    },
    {
      say: 'أسهل سلام في الدنيا: Hello. Hello. وكمان Hi. Hi. الاتنين معناهم أهلاً. || Hello عادية ومؤدبة. || وHi أخف شوية، بنقولها لصاحبنا. || وكلمة هنحتاجها: Welcome. يعني أهلاً بك. بنقولها لحد جاي عندنا.',
      show: { type: 'lines', pics: ['pics/hello-hand.png', '', 'pics/handshake.png'], head: 'Hello / Hi', lines: ['<b>Hello</b> = أهلاً', '<b>Hi</b> = أهلاً (مع الأصدقاء)', '<b>Welcome</b> = أهلاً بك'] },
    },
    {
      say: 'دلوقتي التحيات اللي بتتغير حسب الوقت. الكتاب حاطط لنا ساعات تعرّفنا الوقت. || الساعة سبعة الصبح بنقول: Good morning. Good morning. || الساعة واحدة بعد الضهر بنقول: Good afternoon. Good afternoon. || والساعة سبعة بالليل بنقول: Good evening. Good evening.',
      show: { type: 'grid', pics: ['pics/sunrise.png', 'pics/sun.png', 'pics/sunset.png'], title: 'Greetings — التحيات', head: ['الوقت', 'التحية'], rows: [['7:00 am (صباحًا)', '<b>Good morning</b>'], ['1:00 pm (بعد الظهر)', '<b>Good afternoon</b>'], ['7:00 pm (مساءً)', '<b>Good evening</b>']], caption: 'التحية تتغير حسب الوقت' },
    },
    {
      say: 'دورك. الساعة واحدة بعد الضهر، وإنت قابلت المدرس في الممر. هتقول له إيه؟ اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'الساعة 1:00 pm. تقول: Good ______', o: ['morning', 'afternoon', 'night'], a: 1 },
    },
    {
      say: 'الإجابة afternoon. || لأن الساعة واحدة بعد الضهر، والـ afternoon يعني بعد الظهر. || أما morning فللصبح بس. || وللليل في كلمة خاصة: Good night. Good night. وبنقولها بس قبل النوم، يعني تصبح على خير. زي ما في الكتاب: Good night, Fatima.',
      show: { type: 'lines', pics: ['pics/sun.png', 'pics/sunrise.png', 'pics/moon.png'], head: 'الإجابة', lines: ['<b>Good afternoon</b> بعد الظهر', 'morning للصباح فقط', '<b>Good night</b> = تصبح على خير (قبل النوم)'] },
    },
    {
      say: 'خلينا نسأل حد عن حاله. بنقول: How are you? How are you? يعني عامل إيه؟ || وفيه طريقة تانية أخف: How\'s it going? How\'s it going? برضه يعني عامل إيه. || والرد: I\'m fine, thanks. I\'m fine, thanks. يعني أنا بخير، شكرًا. || وفيه ردود تانية: I\'m OK. يعني تمام. وNot bad. يعني مش وحش.',
      show: { type: 'lines', pics: ['pics/smile.png', '', 'pics/thumbs-up.png', ''], head: 'How are you?', lines: ['<b>How are you?</b> = كيف حالك؟', '<b>How\'s it going?</b> = كيف الحال؟', '<b>I\'m fine, thanks.</b> = أنا بخير، شكرًا', '<b>I\'m OK.</b> / <b>Not bad.</b> = بخير / لا بأس'] },
    },
    {
      say: 'دورك تاني. صاحبك سألك: How are you? هترد تقول إيه؟ اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'A: How are you?<br>B: ______', o: ['My name is Ali.', 'I\'m fine, thanks.', 'See you later.'], a: 1 },
    },
    {
      say: 'الإجابة I\'m fine, thanks. || لأن السؤال عن الحال، فنرد بحالنا. || أما My name is Ali فدي بتجاوب على سؤال الاسم. || وSee you later دي للوداع مش للرد على الحال.',
      show: { type: 'lines', pics: ['pics/thumbs-up.png', 'pics/name-badge.png', 'pics/hello-hand.png'], head: 'الإجابة', lines: ['<b>I\'m fine, thanks.</b> ← يرد على How are you?', 'My name is Ali ← جواب سؤال الاسم', 'See you later ← عبارة وداع'] },
    },
    {
      say: 'طيب لما نمشي نقول إيه؟ الكتاب بيقول كده. || Goodbye. Goodbye. يعني مع السلامة. || وكمان Bye. Bye. أخف شوية. || وSee you later. يعني أشوفك بعدين. || وTake care. Take care. يعني خلّي بالك من نفسك.',
      show: { type: 'grid', pics: ['pics/hello-hand.png', '', '', 'pics/heart-hands.png'], title: 'Saying Goodbye — الوداع', head: ['English', 'المعنى'], rows: [['Goodbye', 'مع السلامة'], ['Bye', 'مع السلامة (أخف)'], ['See you later', 'أراك لاحقًا'], ['Take care', 'اعتنِ بنفسك']] },
    },
    {
      say: 'نيجي للتعارف. لما تقابل حد جديد، أول حاجة تقول اسمك: My name\'s Ahmed. My name\'s Ahmed. يعني اسمي أحمد. || وتقول: Nice to meet you. Nice to meet you. يعني تشرفنا. || والتاني يرد: Nice to meet you, too. يعني وأنا كمان. || ولو بتعرّف صاحبك على حد تقول: This is Ali. يعني ده علي.',
      show: { type: 'lines', pics: ['pics/name-badge.png', 'pics/handshake.png', '', ''], head: 'Introductions — التعارف', lines: ['<b>My name\'s</b> Ahmed. = اسمي أحمد', '<b>Nice to meet you.</b> = تشرفنا', '<b>Nice to meet you, too.</b> = وأنا أيضًا', '<b>This is</b> Ali. = هذا علي'] },
    },
    {
      say: 'ولما بنكلّم المدرسين أو الكبار بنستعمل لقب قبل الاسم. الكتاب بيعمل جدول للألقاب. || Mister، ومكتوبة Mr. للراجل. || Missis، ومكتوبة Mrs. للست المتجوزة. || Miss للبنت أو الست اللي مش متجوزة. || وMs، بنقولها Miz، لأي ست.',
      show: { type: 'grid', title: 'Titles — الألقاب', head: ['اللقب', 'يُستخدم مع'], rows: [['Mr.', 'رجل'], ['Mrs.', 'امرأة متزوجة'], ['Miss', 'امرأة غير متزوجة'], ['Ms.', 'أي امرأة']], caption: 'نستخدم اللقب مع اسم العائلة' },
    },
    {
      say: 'والقاعدة المهمة: في التحية نستعمل اللقب مع اسم العيلة. يعني نقول: Hello, Ms. Jones. وما نقولش اللقب مع الاسم الأول لوحده. || ومن الكتاب كمان: Good afternoon, Mr. Porter. || وGood evening, Mr. Lang.',
      show: { type: 'lines', pics: ['pics/hello-hand.png', 'pics/sun.png', 'pics/sunset.png'], head: 'اللقب + اسم العائلة', lines: ['<b>Hello, Ms. Jones.</b>', '<b>Good afternoon, Mr. Porter.</b>', '<b>Good evening, Mr. Lang.</b>'] },
    },
    {
      say: 'آخر سؤال في الدرس. واحد قال لك: Nice to meet you. هترد تقول إيه؟ اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'A: Nice to meet you.<br>B: ______', o: ['Nice to meet you, too.', 'Good night.', 'Not bad.'], a: 0 },
    },
    {
      say: 'الإجابة Nice to meet you, too. || كلمة too معناها كمان، يعني وأنا كمان تشرفت بيك. || وزي ما في حوار الكتاب: Ali قال لـ Ahmed: Welcome to the class. || وAhmed رد: Thank you. وده أدب مهم: لما حد يقول لك Welcome، رد Thank you.',
      show: { type: 'lines', pics: ['pics/handshake.png', '', 'pics/heart-hands.png'], head: 'الإجابة', lines: ['<b>Nice to meet you, too.</b>', 'too = أيضًا / كذلك', '<b>Welcome</b> ← <b>Thank you</b>'] },
    },
    {
      say: 'وكلمات تانية هتقابلها في المدرسة. || teacher يعني مدرس. || student يعني طالب. || classmate يعني زميل الفصل. || best friend يعني أعز صديق. || وعشان الأدب: Thank you يعني شكرًا. وI\'m sorry يعني أنا آسف، لما تغلط في حاجة.',
      show: { type: 'grid', pics: ['pics/teacher.png', 'pics/student.png', 'pics/students.png', 'pics/hug.png', 'pics/heart-hands.png', 'pics/sorry-face.png'], title: 'Words — كلمات', head: ['English', 'المعنى'], rows: [['teacher', 'مدرس'], ['student', 'طالب'], ['classmate', 'زميل الفصل'], ['best friend', 'أعز صديق'], ['Thank you.', 'شكرًا'], ['I\'m sorry.', 'أنا آسف']] },
    },
    {
      say: 'نلخّص الدرس. || الصبح Good morning، وبعد الضهر Good afternoon، وبالمسا Good evening، وقبل النوم Good night. || لو عايز تسأل عن الحال: How are you؟ والرد: I\'m fine, thanks. || للتعارف: My name\'s، وNice to meet you. || وللوداع: Goodbye وSee you later وTake care. برافو عليك! يلا بينا على الاختبار.',
      show: { type: 'lines', pics: ['pics/sunrise.png', 'pics/smile.png', 'pics/handshake.png', 'pics/hello-hand.png'], head: 'الخلاصة', lines: ['✔ Good morning / afternoon / evening / night', '✔ How are you? — I\'m fine, thanks.', '✔ My name\'s ... Nice to meet you.', '✔ Goodbye / See you later / Take care'] },
    },
  ],
  quiz: [
    {"q":"It is 7:00 am. You say: \"Good ______.\"","o":["evening","morning","night","afternoon"],"a":1,"why":"الساعة 7:00 am في الصباح، فنقول Good morning. وكلمة morning معناها صباح، ونقولها عند لقاء أحد في أول اليوم.","ow":["evening نقولها في المساء، والساعة هنا في الصباح.","","night نقولها قبل النوم، وليس عند اللقاء في الصباح.","afternoon نقولها بعد الظهر، والساعة هنا صباحًا."]},
    {"q":"You are going to bed. You say: \"Good ______.\"","o":["morning","afternoon","night","hello"],"a":2,"why":"قبل النوم نقول Good night، أي تصبح على خير. وهي للوداع قبل النوم، وليست مثل التحيات الأخرى.","ow":["Good morning نقولها في الصباح، وليس قبل النوم.","Good afternoon نقولها بعد الظهر، وليس قبل النوم.","","hello تحية عند اللقاء، وليس قبل النوم."]},
    {"q":"A: How are you? B: ______","o":["My name is Ali.","Nice to meet you.","I'm fine, thanks.","See you later."],"a":2,"why":"سؤال How are you؟ عن الحال، فنرد بحالنا فنقول I'm fine, thanks أي أنا بخير، شكرًا.","ow":["My name is Ali نرد بها عن سؤال الاسم، وليس الحال.","Nice to meet you نقولها عند التعارف، وليست ردًّا على سؤال الحال.","","See you later نقولها عند الوداع، وليست ردًّا على سؤال الحال."]},
    {"q":"A: Nice to meet you. B: ______","o":["Nice to meet you, too.","Good night.","I'm sorry.","Not bad."],"a":0,"why":"عندما يقول لك أحد Nice to meet you ترد: Nice to meet you, too. وكلمة too معناها أيضًا.","ow":["","Good night نقولها قبل النوم، وليست ردًّا على التعارف.","I'm sorry نقولها عند الاعتذار، وليست ردًّا على التعارف.","Not bad نرد بها عن سؤال الحال، وليست ردًّا على التعارف."]},
    {"q":"Which phrase means goodbye?","o":["Welcome","See you later","Hello","Hi"],"a":1,"why":"See you later معناها أراك لاحقًا، وهي عبارة وداع مثل Goodbye. أما Welcome وHello وHi فللتحية.","ow":["Welcome معناها أهلًا بك، وهي تحية وليست وداعًا.","","Hello معناها أهلًا، وهي تحية وليست وداعًا.","Hi معناها أهلًا، وهي تحية وليست وداعًا."]},
    {"q":"We use \"Mr.\" with a ______.","o":["girl","woman","man","school"],"a":2,"why":"Mr. لقب للرجل، نضعه قبل اسم العائلة مثل Mr. Porter. أما المرأة فلها Mrs. أو Ms. أو Miss.","ow":["girl تعني بنتًا، والبنت لقبها Miss.","woman تعني امرأة، ولها ألقاب مثل Mrs. وMs.","","school تعني مدرسة، وليست شخصًا نعطيه لقبًا."]},
    {"q":"You step on someone's foot. You say:","o":["Thanks.","I'm sorry.","Good morning.","Take care."],"a":1,"why":"عندما نخطئ، كأن ندوس على قدم شخص من غير قصد، نعتذر بقول I'm sorry أي أنا آسف. وهذا من الأدب.","ow":["Thanks معناها شكرًا، وليست اعتذارًا.","","Good morning تحية في الصباح، وليست اعتذارًا.","Take care معناها اعتنِ بنفسك، وليست اعتذارًا."]},
    {"q":"What does \"classmate\" mean?","o":["مدير المدرسة","مدرس","أعز صديق","زميل في الفصل"],"a":3,"why":"classmate معناها زميل في الفصل، أي طالب معنا في الفصل نفسه. أما best friend فهو أعز صديق، وteacher هو المدرس.","ow":["مدير المدرسة ليس زميلًا في الفصل، فهو لا يجلس معنا كطالب.","المدرس بالإنجليزية teacher، وهو يعلّم الطلاب.","أعز صديق بالإنجليزية best friend، وليس classmate.",""]},
  ],
};
