// الأولاد والمواد والدروس. lesson ids = files in lessons/<id>.js
window.CONFIG = {
  // رابط استقبال التقارير (Google Apps Script) — يتحط بعد موافقة الأب. فاضي = التقرير يتحفظ على الشاشة بس.
  REPORT_URL: '',
  PIN: '1448', // رقم صفحة تقرير الأب
};
window.KIDS = [
  {
    id: 'omar', name: 'عمر', grade: 'الصف الخامس الابتدائي', color: '#2F80ED',
    subjects: [
      { id: 'm5', name: 'الرياضيات', icon: '➗', units: [
        { name: 'الفصل ١: القيمة المنزلية', lessons: ['m5-1-1'] },
      ] },
      { id: 's5', name: 'العلوم', icon: '🔬', units: [] },
      { id: 'a5', name: 'لغتي الجميلة', icon: '📖', units: [] },
      { id: 'so5', name: 'الدراسات الاجتماعية', icon: '🌍', units: [] },
      { id: 'e5', name: 'English', icon: '🔤', units: [] },
    ],
  },
  {
    id: 'abdo', name: 'عبد الرحمن', grade: 'الصف الأول المتوسط', color: '#27AE60',
    subjects: [
      { id: 'm7', name: 'الرياضيات', icon: '➗', units: [] },
      { id: 's7', name: 'العلوم', icon: '🔬', units: [] },
      { id: 'a7', name: 'لغتي الخالدة', icon: '📖', units: [] },
      { id: 'so7', name: 'الدراسات الاجتماعية', icon: '🌍', units: [] },
      { id: 'd7', name: 'المهارات الرقمية', icon: '💻', units: [] },
      { id: 'e7', name: 'English', icon: '🔤', units: [] },
    ],
  },
];
