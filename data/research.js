/**
 * ════════════════════════════════════════════════════════════════
 * data/research.js  —  RESEARCH & SCIENCE CONTENT
 * ════════════════════════════════════════════════════════════════
 * Publications · Skills · Achievements · YouTube
 * Edit this file to update your academic content.
 * ════════════════════════════════════════════════════════════════
 */

/* ── SKILLS GRID ─────────────────────────────────────────────── */
const SKILLS = [
  { icon: '⚛️', nameEn: 'Simulation', nameBn: 'সিমুলেশন',
    items: ['Molecular Dynamics (MD)', 'Monte Carlo (MC)', 'DFT', 'Enhanced Sampling'] },
  { icon: '🧠', nameEn: 'ML / AI', nameBn: 'এমএল / এআই',
    items: ['Neural Networks', 'CNN · LLM', 'NLP', 'Small-data ML'] },
  { icon: '🔬', nameEn: 'Software', nameBn: 'সফটওয়্যার',
    items: ['AMBER · GROMACS', 'LAMMPS · GAUSSIAN', 'Quantum ESPRESSO', 'Materials Studio'] },
  { icon: '💻', nameEn: 'Coding', nameBn: 'কোডিং',
    items: ['Python · Bash', 'VMD Tcl · Fortran', 'Git · Jupyter', 'Google Cloud'] },
];

/* ── PUBLICATIONS ────────────────────────────────────────────── */
/*
 * HOW TO ADD A PUBLICATION:
 * Copy any block below, paste at the top (most recent first),
 * update num, title, authors, journal, year, doi, doiShort.
 */
const PUBLICATIONS = [
  {
    num: '01',
    title: 'Complexation of siRNA with Galactose-Functionalized Dendrimers: PAMAM vs PETIM',
    authors: '<strong>Maity, T.</strong>, Kumar, Y., & Maiti, P. K.',
    journal: 'Langmuir (2025)',
    year: '2025',
    doi: 'https://doi.org/10.1021/acs.langmuir.5c03613',
    doiShort: 'doi:10.1021/acs.langmuir.5c03613',
    searchText: 'siRNA galactose dendrimer PAMAM PETIM Langmuir 2025',
  },
  {
    num: '02',
    title: 'Enhanced Extraction of Uranyl Ions from Aqueous Waste Using Graphene/CNT-PAMAM Nanocomposites',
    authors: '<strong>Maity, T.</strong>, Kumar, Y., Singha Deb, A. K., Sheikh, M. A., & Maiti, P. K.',
    journal: 'Langmuir, 41(22), 13811–13823 (2025)',
    year: '2025',
    doi: 'https://doi.org/10.1021/acs.langmuir.5c00280',
    doiShort: 'doi:10.1021/acs.langmuir.5c00280',
    searchText: 'uranyl graphene CNT PAMAM nanocomposite extraction Langmuir 2025',
  },
  {
    num: '03',
    title: 'Data-Driven Approaches to Predict Dendrimer Cytotoxicity',
    authors: '<strong>Maity, T.</strong>, Balachandran, A. K., et al., & Maiti, P. K.',
    journal: 'ACS Omega, 9(23), 24899–24906 (2024)',
    year: '2024',
    doi: 'https://doi.org/10.1021/acsomega.4c01775',
    doiShort: 'doi:10.1021/acsomega.4c01775',
    searchText: 'dendrimer cytotoxicity machine learning data-driven ACS Omega 2024',
  },
  {
    num: '04',
    title: 'Efficient Removal of Uranyl Ions Using PAMAM Dendrimer: Simulation and Experiment',
    authors: '<strong>Maity, T.</strong>, Aggarwal, A., Dasgupta, S., et al., & Maiti, P. K.',
    journal: 'Langmuir, 39(19), 6794–6802 (2023)',
    year: '2023',
    doi: 'https://doi.org/10.1021/acs.langmuir.3c00332',
    doiShort: 'doi:10.1021/acs.langmuir.3c00332',
    searchText: 'uranyl PAMAM dendrimer removal simulation experiment Langmuir 2023',
  },
  {
    num: '05',
    title: 'Molecular Insights into the Physics of PAMAM-Dendrimer-Based Supercapacitors',
    authors: '<strong>Maity, T.</strong>, Gosika, M., Pascal, T. A., & Maiti, P. K.',
    journal: 'Physical Review Applied, 18(5), 054031 (2022)',
    year: '2022',
    doi: 'https://doi.org/10.1103/PhysRevApplied.18.054031',
    doiShort: 'doi:10.1103/PhysRevApplied.18.054031',
    searchText: 'PAMAM dendrimer supercapacitor energy storage Physical Review Applied 2022',
  },
];

/* ── ACHIEVEMENTS ────────────────────────────────────────────── */
const ACHIEVEMENTS = [
  { rank: 'AIR 8',  exam: 'JEST Physics',       descEn: 'All-India Rank 8th · ~15,000 participants · 2016',           descBn: 'সর্বভারতীয় র‌্যাংক ৮ম · ~১৫,০০০ অংশগ্রহণকারী · ২০১৬' },
  { rank: 'AIR 19', exam: 'IIT JAM',             descEn: 'All-India Rank 19th in Physics · ~15,000 participants · 2016', descBn: 'পদার্থবিজ্ঞানে সর্বভারতীয় র‌্যাংক ১৯তম · ২০১৬' },
  { rank: 'AIR 25', exam: 'CSIR-UGC NET JRF',   descEn: 'All-India Rank 25th · Physics · 2018',                        descBn: 'সর্বভারতীয় র‌্যাংক ২৫তম · পদার্থবিজ্ঞান · ২০১৮' },
  { rank: 'AIR 33', exam: 'GATE Physics',        descEn: 'All-India Rank 33rd · ~15,000 participants · 2018',           descBn: 'সর্বভারতীয় র‌্যাংক ৩৩তম · ২০১৮' },
  { rank: '99th',   exam: 'IAPT · NGPE',         descEn: '99th Percentile · ~20,000 participants · 2016',               descBn: '৯৯তম শতকরা হার · ~২০,০০০ অংশগ্রহণকারী · ২০১৬' },
  { rank: '★',      exam: 'INSPIRE Scholarship', descEn: 'Govt. of India DST · 2013–2018',                              descBn: 'ভারত সরকার ডিএসটি · ২০১৩–২০১৮' },
];

/* ── YOUTUBE ─────────────────────────────────────────────────── */
const YOUTUBE = {
  channelUrl:    'https://www.youtube.com/@FunandFundamentalsofScience',
  channelNameEn: 'Fun and Fundamentals of Science',
  channelNameBn: 'বিজ্ঞানের মজা ও মূলনীতি',
  descEn: 'Explaining the fundamentals of science in the easiest and most fun-loving way.',
  descBn: 'বিজ্ঞানের মূলনীতিগুলি সবচেয়ে সহজ ও মজাদার উপায়ে ব্যাখ্যা করা।',
  /*
   * HOW TO ADD YOUR VIDEOS:
   * 1. Go to your YouTube video
   * 2. Copy the ID from: youtube.com/watch?v=VIDEO_ID_HERE
   * 3. Replace 'dQw4w9WgXcQ' with your real ID
   * 4. Update titleEn and titleBn
   */
  videos: [
    { id: 'CtCNZnHX5tI', titleEn: 'Introduction to Molecular Dynamics',   titleBn: 'আণবিক গতিবিদ্যার ভূমিকা' },
    { id: '9NsxsC3iof0', titleEn: 'What is a Dendrimer?',                  titleBn: 'ডেনড্রিমার কী?' },
    { id: 'M9M9ZrYk4Bc', titleEn: 'Machine Learning in Materials Science', titleBn: 'উপকরণ বিজ্ঞানে মেশিন লার্নিং' },
    /* ADD MORE VIDEOS ↓
    { id: 'YOUR_VIDEO_ID', titleEn: 'Your Video Title', titleBn: 'বাংলা শিরোনাম' },
    */
  ],
  features: [
    { icon: '🎬', labelEn: 'Science Videos',      labelBn: 'বিজ্ঞান ভিডিও' },
    { icon: '🔬', labelEn: 'Research Explainers', labelBn: 'গবেষণা ব্যাখ্যা' },
    { icon: '📐', labelEn: 'Physics Concepts',    labelBn: 'পদার্থ ধারণা' },
    { icon: '💡', labelEn: 'Fun Science',          labelBn: 'মজার বিজ্ঞান' },
  ],
};
