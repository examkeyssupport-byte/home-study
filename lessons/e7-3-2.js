// إنجليزي أول متوسط — Super Goal 1 — Unit 3 — درس ٢ Grammar (ص ١٩–٢٠) — v2: beats (" || ") = one board line each, in-lesson questions
window.LESSONS = window.LESSONS || {};
window.LESSONS['e7-3-2'] = {
  v: 2,
  title: 'this / that / these / those + Imperatives',
  sub: 'English — Unit 3 — Lesson 2',
  steps: [
    {
      say: 'أهلاً يا بطل! إنت في المتحف، وعايز تشاور على لوحة جنبك وتقول: دي لوحة حلوة. وبعدين عايز تشاور على تماثيل بعيدة وتقول: التماثيل دي. بالإنجليزي الكلمة بتتغير حسب القريب والبعيد، والواحد والكتير. وكمان هنتعلم نقول لحد: اقعد، أو ما تلمسش. وهنعرف إمتى نقول a وإمتى نقول an.',
      show: { type: 'title', title: 'this / that / these / those', sub: '🏛️ Look at that painting. Don\'t touch these!' },
    },
    {
      say: 'الكلمات دي اسمها demonstrative pronouns، يعني ضمائر إشارة. بنستعملها نشاور على الحاجات. || لو الحاجة قريبة منك وهي واحدة، بنقول this. this. || ولو قريبة وكتير، بنقول these. these. زي: This school is near my house. وThese chairs in my class are red.',
      show: { type: 'grid', title: 'Near — قريب', head: ['', 'Near'], rows: [['Singular (واحد)', '<b>this</b>'], ['Plural (جمع)', '<b>these</b>']], caption: 'This school is near my house. — These chairs in my class are red.' },
    },
    {
      say: 'ولو الحاجة بعيدة عنك. || وهي واحدة، بنقول that. that. زي: That park is far away from my house. || ولو بعيدة وكتير، بنقول those. those. زي: I like those trees in the park.',
      show: { type: 'grid', title: 'Far — بعيد', head: ['', 'Far'], rows: [['Singular (واحد)', '<b>that</b>'], ['Plural (جمع)', '<b>those</b>']], caption: 'That park is far away. — I like those trees in the park.' },
    },
    {
      say: 'دورك. في السما بعيد فيه عصفور واحد. هتقول إيه؟ Look at blank bird in the sky. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'Look at ______ bird in the sky!', o: ['this', 'that', 'these'], a: 1 },
    },
    {
      say: 'الإجابة that. || لأن العصفور واحد. || وهو بعيد في السما. || والواحد البعيد بنستعمل له that. أما these فللكتير القريب، وthis للواحد القريب.',
      show: { type: 'lines', head: 'الإجابة', lines: ['عصفور واحد ← singular', 'بعيد في السماء ← far', '<b>that</b> bird'] },
    },
    {
      say: 'تعالى نجرّب في سؤال وإجابة من الكتاب. || لو بتسأل عن حاجة واحدة قريبة: What\'s this؟ والإجابة: It\'s a pencil. || ولو بتسأل عن حاجات كتير بعيدة: What are those؟ والإجابة: They\'re keys. || خد بالك: مع الواحد بنقول It\'s، ومع الجمع بنقول They\'re.',
      show: { type: 'lines', pics: ['pics/pencil.png', 'pics/key.png', ''], head: 'Ask and answer', lines: ['A: What\'s <b>this</b>? B: <b>It\'s</b> a pencil.', 'A: What are <b>those</b>? B: <b>They\'re</b> keys.', 'واحد → It\'s ، جمع → They\'re'] },
    },
    {
      say: 'دلوقتي a وan. الاتنين معناهم واحد، بس بنستعمل واحدة منهم بحسب أول صوت في الكلمة. || بنقول a قبل الكلمة اللي بتبدأ بحرف ساكن. زي a radio، وa calculator، وa painting. || وبنقول an قبل الكلمة اللي بتبدأ بصوت حرف متحرك. زي an airplane، وan English class. || والحروف المتحركة خمسة: a وe وi وo وu.',
      show: { type: 'lines', pics: ['pics/radio.png', 'pics/airplane.png', ''], head: 'a / an', lines: ['<b>a</b> radio, <b>a</b> calculator, <b>a</b> painting', '<b>an</b> airplane, <b>an</b> English class', 'الحروف المتحركة: a, e, i, o, u'] },
    },
    {
      say: 'جرّب بنفسك. هنقول: It is blank airplane. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'It is ______ airplane.', o: ['a', 'an', 'the'], a: 1 },
    },
    {
      say: 'الإجابة an. || لأن كلمة airplane بتبدأ بحرف a. || وحرف a من الحروف المتحركة. || يبقى بنقول an airplane. وعشان كده a calculator بتبقى a لأنها بتبدأ بحرف c.',
      show: { type: 'lines', pics: ['pics/airplane.png', '', ''], head: 'الإجابة', lines: ['airplane تبدأ بـ a', 'a حرف متحرك ← <b>an</b>', 'calculator تبدأ بـ c ← a'] },
    },
    {
      say: 'نيجي للأوامر. الأمر بالإنجليزي اسمه imperative. بنستعمله لما نقول لحد يعمل حاجة، أو نديله نصيحة. || بنبدأ بالفعل على طول. Sit down. يعني اقعد. || Come in. يعني ادخل. || ولو عايزين نكون مؤدبين نقول please. Please sit down. || وكمان نصيحة: Buy those posters. They\'re nice.',
      show: { type: 'lines', pics: ['pics/chair.png', 'pics/door.png', '', 'pics/framed-picture.png'], head: 'Imperative (+)', lines: ['<b>Sit down.</b> = اجلس', '<b>Come in.</b> = ادخل', 'Please <b>sit down</b>. = من فضلك اجلس', 'Buy those posters. They\'re nice.'] },
    },
    {
      say: 'ولو عايز تمنع حد من حاجة، بتحط Don\'t قبل الفعل. || Don\'t sit down. يعني ما تقعدش. || Don\'t come in. يعني ما تدخلش. || وفي المتحف بنسمع: Don\'t touch. يعني ما تلمسش. || وبرضه نقدر نقول please: Please don\'t sit down.',
      show: { type: 'lines', pics: ['pics/chair.png', 'pics/door.png', 'pics/touch.png', ''], head: 'Imperative (–)', lines: ['<b>Don\'t</b> sit down.', '<b>Don\'t</b> come in.', '<b>Don\'t</b> touch.', 'Please <b>don\'t</b> sit down.'] },
    },
    {
      say: 'آخر سؤال. المرشد عايز يمنعك تلمس التمثال. هيقول: Don\'t blank the sculpture. اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'Don\'t ______ the sculpture.', o: ['touch', 'touching', 'touches'], a: 0 },
    },
    {
      say: 'الإجابة touch. || بعد Don\'t بنكتب الفعل زي ما هو. || من غير ing ومن غير s. || يبقى: Don\'t touch the sculpture.',
      show: { type: 'lines', pics: ['', '', 'pics/statue.png'], head: 'الإجابة', lines: ['Don\'t + <b>الفعل</b>', 'من غير ing ومن غير s', 'Don\'t <b>touch</b> the sculpture.'] },
    },
    {
      say: 'نلخّص الدرس. || this وthese للقريب. || that وthose للبعيد. || a قبل الحرف الساكن، وan قبل الحرف المتحرك. || والأمر بنبدأه بالفعل، والنهي بنبدأه بـ Don\'t. برافو عليك! يلا بينا على الاختبار.',
      show: { type: 'lines', head: 'الخلاصة', lines: ['✔ قريب: this (واحد) / these (جمع)', '✔ بعيد: that (واحد) / those (جمع)', '✔ a + حرف ساكن ، an + حرف متحرك', '✔ أمر: Sit down. — نهي: Don\'t sit down.'] },
    },
  ],
  quiz: [
    {"q":"______ is my pencil. (it is near me, one)","o":["That","These","This","Those"],"a":2,"why":"القلم واحد وقريب مني، فنستعمل this للمفرد القريب. فنقول: This is my pencil. أما these فللجمع القريب.","ow":["That للمفرد البعيد، وهنا القلم قريب مني.","These للجمع القريب، وهنا القلم واحد.","","Those للجمع البعيد، وهنا القلم واحد وقريب."]},
    {"q":"______ are my keys. (they are near me)","o":["This","These","That","Those"],"a":1,"why":"المفاتيح كثيرة وقريبة مني، فنستعمل these للجمع القريب. فنقول: These are my keys. أما this فللمفرد القريب.","ow":["This للمفرد القريب، وهنا المفاتيح كثيرة.","","That للمفرد البعيد، وهنا المفاتيح كثيرة وقريبة.","Those للجمع البعيد، وهنا المفاتيح قريبة مني."]},
    {"q":"Look at ______ bird in the sky! (far away, one)","o":["these","this","that","those"],"a":2,"why":"الطائر واحد وبعيد في السماء، فنستعمل that للمفرد البعيد. فنقول: Look at that bird in the sky!","ow":["these للجمع القريب، وهنا الطائر واحد وبعيد.","this للمفرد القريب، وهنا الطائر بعيد.","","those للجمع البعيد، وهنا الطائر واحد."]},
    {"q":"I like ______ trees in the park. (far away)","o":["those","this","that","these"],"a":0,"why":"الأشجار كثيرة وبعيدة، فنستعمل those للجمع البعيد. فنقول: I like those trees in the park.","ow":["","this للمفرد القريب، وهنا الأشجار كثيرة وبعيدة.","that للمفرد البعيد، وهنا الأشجار كثيرة.","these للجمع القريب، وهنا الأشجار بعيدة."]},
    {"q":"A: What are those? B: ______ keys.","o":["They're","It's","This is","That's"],"a":0,"why":"سؤال What are those؟ عن أشياء كثيرة، فنجيب بـ They're أي هي. فنقول: They're keys أي هذه مفاتيح.","ow":["","It's نستعملها للمفرد، وهنا المفاتيح كثيرة.","This is للمفرد القريب، ولا تناسب جوابًا عن أشياء كثيرة.","That's للمفرد البعيد، ولا تناسب جوابًا عن أشياء كثيرة."]},
    {"q":"Which sentence is correct?","o":["Don't touching.","Don't touch the painting.","No touch the painting.","Not touch the painting."],"a":1,"why":"الجملة الصحيحة: Don't touch the painting أي لا تلمس اللوحة. نبدأ النهي بـ Don't ثم الفعل الأصلي.","ow":["Don't touching خطأ، لأن بعد Don't نكتب الفعل بدون ing.","","No touch خطأ، فالنهي يكون بـ Don't وليس No.","Not touch خطأ، فالنهي يكون بـ Don't وليس Not."]},
    {"q":"Please ______ down. (sit)","o":["sitting","sits","sit","to sit"],"a":2,"why":"الأمر نبدأه بالفعل الأصلي مباشرة، فنقول: Please sit down أي من فضلك اجلس. ولا نضيف ing أو s.","ow":["sitting فيها ing، والأمر نبدأه بالفعل الأصلي.","sits فيها s، والأمر نبدأه بالفعل الأصلي.","","to sit فيها to، والأمر لا نضع فيه to."]},
    {"q":"It is ______ airplane.","o":["a","an","the","two"],"a":1,"why":"كلمة airplane تبدأ بحرف a وهو حرف متحرك، فنستعمل an قبلها. فنقول: It is an airplane أي هذه طائرة.","ow":["a نستعملها قبل الكلمة التي تبدأ بحرف ساكن، وairplane تبدأ بحرف متحرك.","","the لا تناسب هذه الجملة، فنريد أداة التنكير قبل الاسم.","two معناها اثنان، ولا تأتي قبل اسم مفرد."]},
    {"q":"It is ______ calculator.","o":["an","these","a","those"],"a":2,"why":"كلمة calculator تبدأ بحرف c وهو حرف ساكن، فنستعمل a قبلها. فنقول: It is a calculator أي هذه آلة حاسبة.","ow":["an نستعملها قبل الكلمة التي تبدأ بحرف متحرك، وcalculator تبدأ بحرف ساكن.","these للجمع القريب، ولا تأتي قبل اسم مفرد.","","those للجمع البعيد، ولا تأتي قبل اسم مفرد."]},
  ],
};
