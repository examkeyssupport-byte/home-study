// English 5 (Top Goal 2) — Welcome — lesson 1: months, dates, numbers (Student's Book pp. 4-7) — v2: beats (" || ") = one board line each, in-lesson questions
window.LESSONS = window.LESSONS || {};
window.LESSONS['e5-0-1'] = {
  v: 2,
  title: 'Welcome: Months and Numbers',
  sub: 'اللغة الإنجليزية — Welcome — درس ١',
  steps: [
    {
      say: 'أهلاً يا بطل! تخيل إن المدرس دخل الفصل وسألك بالإنجليزي: When is your birthday؟ يعني عيد ميلادك إمتى؟ وانت عايز تقول: في شهر أكتوبر. أو سألك: كام كتاب في المكتبة؟ وانت عايز تقول: ميتين وخمسين. النهارده هنتعلم شهور السنة والأرقام الكبيرة بالإنجليزي، عشان تجاوب بسهولة. وكرر ورايا الكلمات. يلا بينا.',
      show: { type: 'title', title: 'Welcome: Months and Numbers', sub: '🎂 When is your birthday?' },
    },
    {
      say: 'الأول نفهم الأساس. || السنة اللي بنعيشها اسمها year. || والسنة فيها اتناشر شهر، والشهر اسمه month. وكل شهر له اسم بالإنجليزي، وده اللي هنتعلمه.',
      show: { type: 'lines', head: 'The year', lines: ['<b>year</b> = سنة', '12 <b>months</b> in a year', '<b>month</b> = شهر'] },
    },
    {
      say: 'نبدأ بأول ست شهور. كل شهر هقوله وانت كرر ورايا. || January، يعني يناير. January. || February، يعني فبراير. February. || March، يعني مارس. March. || April، يعني أبريل. April. || May، يعني مايو. May. || June، يعني يونيو. June.',
      show: { type: 'grid', title: 'Months of the Year', head: ['English', 'العربية'], rows: [['January', 'يناير'], ['February', 'فبراير'], ['March', 'مارس'], ['April', 'أبريل'], ['May', 'مايو'], ['June', 'يونيو']], caption: 'الشهور من ١ إلى ٦' },
    },
    {
      say: 'وبعدين بقية الشهور. كمّل معايا. || July، يعني يوليو. July. || August، يعني أغسطس. August. || September، يعني سبتمبر. September. || October، يعني أكتوبر. October. || November، يعني نوفمبر. November. || وآخر شهر December، يعني ديسمبر. December.',
      show: { type: 'grid', title: 'Months of the Year', head: ['English', 'العربية'], rows: [['July', 'يوليو'], ['August', 'أغسطس'], ['September', 'سبتمبر'], ['October', 'أكتوبر'], ['November', 'نوفمبر'], ['December', 'ديسمبر']], caption: 'الشهور من ٧ إلى ١٢' },
    },
    {
      say: 'دورك. أي شهر بييجي بعد March؟ اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'Which month comes after <b>March</b>?', o: ['February', 'May', 'April'], a: 2 },
    },
    {
      say: 'الإجابة April. || شهر March هو التالت، والرابع هو April. || وبعد April بييجي May. كرر الترتيب كده كذا مرة وهتحفظه.',
      show: { type: 'lines', head: 'The order', lines: ['<b>March</b> → <b>April</b> → May', 'January – February – March – April', 'ترتيب الشهور مهم'] },
    },
    {
      say: 'دلوقتي كلمات الوقت اللي في الكتاب. || Month يعني شهر. وYear يعني سنة. || Calendar يعني تقويم، يعني الورقة اللي مكتوب عليها الأيام والشهور. || Date يعني تاريخ. || Early يعني بدري، وlate يعني متأخر، وهما عكس بعض. || وago يعني من زمان، يعني قبل كده.',
      show: { type: 'grid', title: 'Time Words', head: ['English', 'العربية'], rows: [['month / year', 'شهر / سنة'], ['calendar', 'تقويم'], ['date', 'تاريخ'], ['early', 'مبكر'], ['late', 'متأخر'], ['ago', 'منذ']], caption: 'كلمات الوقت' },
    },
    {
      say: 'نستخدمها في جمل. || I woke up early today. يعني صحيت بدري النهارده. || He came late. يعني هو جه متأخر. || I saw him two days ago. يعني شفته من يومين. كلمة ago بنحطها في آخر الجملة بعد المدة.',
      show: { type: 'lines', head: 'Examples', lines: ['I woke up <b>early</b> today.', 'He came <b>late</b>.', 'I saw him two days <b>ago</b>.'] },
    },
    {
      say: 'تعالى بقى للأرقام الكبيرة. بنبدأ بالمئات. || one hundred يعني مية. || two hundred يعني ميتين. || three hundred يعني تلتمية. || five hundred يعني خمسمية. || nine hundred يعني تسعمية. || وبعد تسعمية بييجي one thousand، يعني ألف.',
      show: { type: 'grid', title: 'Numbers', head: ['Number', 'Say it'], rows: [['100', 'one hundred'], ['200', 'two hundred'], ['300', 'three hundred'], ['500', 'five hundred'], ['900', 'nine hundred'], ['1000', 'one thousand']], caption: 'hundred بدون s' },
    },
    {
      say: 'لاحظ حاجة مهمة جداً. كلمة hundred ما بنحطش عليها s لما قبلها رقم. || يعني نقول two hundred، مش two hundreds. || ونقول five hundred، مش five hundreds. وده بيجي كتير في الاختبار.',
      show: { type: 'lines', head: 'Careful!', lines: ['two <b>hundred</b> ✔', 'two hundreds ✘', 'five <b>hundred</b> books'] },
    },
    {
      say: 'طيب لو الرقم فيه مئات وكمان عشرات وآحاد؟ نقول المئات الأول، وبعدين كلمة and، وبعدين باقي الرقم. || مية وستة وعشرين نقولها: one hundred and twenty-six. || وتلتمية وخمسين نقولها: three hundred and fifty. || وسبعمية وعشرين نقولها: seven hundred and twenty.',
      show: { type: 'lines', head: 'Say the number', lines: ['126 = <b>one hundred and twenty-six</b>', '350 = <b>three hundred and fifty</b>', '720 = <b>seven hundred and twenty</b>'] },
    },
    {
      say: 'دورك. إزاي نقول الرقم تلتمية وخمسين؟ اختار الإجابة بالريموت.',
      show: { type: 'ask', q: 'How do we say <big>350</big>?', o: ['three hundreds fifty', 'three hundred and fifty', 'thirty hundred and five'], a: 1 },
    },
    {
      say: 'الإجابة three hundred and fifty. || أول حاجة نقول تلتمية، يعني three hundred، من غير s. || وبعدها and. || وبعدها fifty، يعني خمسين. ركّب الأجزاء دي ورا بعض وهتقول أي رقم.',
      show: { type: 'lines', head: 'Build the number', lines: ['<b>three hundred</b> (من غير s)', '<b>and</b>', '<b>fifty</b>', '350 = three hundred and fifty'] },
    },
    {
      say: 'ودلوقتي تدريب على الجمع. || لو جمعنا مية وتلاتين مع ستة وعشرين، الناتج مية وستة وخمسين. || بنقولها: one hundred and fifty-six. || ولو جمعنا خمسمية مع خمسمية، الناتج ألف. || بنقولها: one thousand.',
      show: { type: 'lines', head: 'Adding', lines: ['130 + 26 = <b>156</b>', 'one hundred and fifty-six', '500 + 500 = <b>1000</b>', 'one thousand'] },
    },
    {
      say: 'آخر سؤال قبل الاختبار. تلتمية زائد مية، الناتج كام وإزاي نقوله؟',
      show: { type: 'ask', q: '<big>300 + 100</big> = ?', o: ['four hundred', 'one thousand', 'four thousand'], a: 0 },
    },
    {
      say: 'الإجابة four hundred. || تلتمية زائد مية يساوي أربعمية. || بنقولها four hundred، وhundred من غير s.',
      show: { type: 'lines', head: 'Answer', lines: ['300 + 100 = <b>400</b>', 'three hundred + one hundred', '<b>four hundred</b> (no s)'] },
    },
    {
      say: 'نلخّص الدرس. || السنة فيها اتناشر شهر، من January لحد December. || كلمات الوقت: month وyear وdate وago. || كلمة hundred من غير s، زي two hundred. || ولو الرقم فيه تفاصيل نقول and بعد المئات: one hundred and fifty-six. برافو عليك! يلا بينا على الاختبار.',
      show: { type: 'lines', head: 'Summary', lines: ['✔ 12 months: January … December', '✔ month – year – date – ago', '✔ two hundred (no s)', '✔ one hundred <b>and</b> fifty-six'] },
    },
  ],
  quiz: [
    { q: 'What is the first month of the year?', o: ['March', 'January', 'December', 'April'], a: 1, why: 'January هو أول شهر (يناير).' },
    { q: 'Which month comes after September?', o: ['August', 'November', 'October', 'July'], a: 2, why: 'الترتيب: September ثم October ثم November.' },
    { q: 'What does "calendar" mean?', o: ['ساعة', 'تقويم', 'شهر', 'سنة'], a: 1, why: 'calendar = تقويم.' },
    { q: 'The opposite of "late" is ...', o: ['ago', 'early', 'date', 'year'], a: 1, why: 'late متأخر، عكسها early مبكر.' },
    { q: '500 + 500 = ...', o: ['five hundred', 'one hundred', 'one thousand', 'ten hundreds'], a: 2, why: '500 + 500 = 1000 = one thousand.' },
    { q: 'How do we say 130 + 26 = 156?', o: ['one hundred fifty-six', 'one hundred and six', 'one thousand fifty-six', 'sixteen hundred'], a: 0, why: '156 = one hundred (and) fifty-six.' },
    { q: 'Choose the correct form: "I have two ... books."', o: ['hundreds', 'hundred', 'hundred of', 'hundreds of'], a: 1, why: 'بعد الرقم نقول hundred بدون s: two hundred.' },
    { q: 'He started school two years ...', o: ['ago', 'late', 'early', 'date'], a: 0, why: 'ago = منذ: two years ago.' },
  ],
};
