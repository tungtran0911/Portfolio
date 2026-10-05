// Single source for facts that appear on more than one page.
// Every figure here is taken from the CV (Sep 2026), the certificates themselves, or the linked repositories.

export const person = {
  name: 'Tung Tran',
  short: 'Tom',
  email: 'thanhtung.09112005@gmail.com',
  github: 'https://github.com/tungtran0911',
  linkedin: 'https://www.linkedin.com/in/thanhtung0911',
  cv: '/cv.pdf',
  location: 'Sydney, Australia',
};

// Front-page panels, in scroll order.
export const homeSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

// The whole site as one sequence, A to Z. Inner pages show previous / next links in this order,
// and page transitions slide up when you move forward and down when you move back.
export const pageSequence = [
  { path: '/', label: 'Home', section: 'home' },
  { path: '/about', label: 'About', section: 'about' },
  { path: '/projects', label: 'Research', section: 'research' },
  { path: '/projects/vn30-futures', label: 'VN30 index futures', section: 'research' },
  { path: '/projects/spy-volatility', label: 'SPY volatility', section: 'research' },
  { path: '/projects/quant-factor-portfolio', label: 'Quant factor portfolio', section: 'research' },
  { path: '/projects/finlab', label: 'FinLab', section: 'research' },
  { path: '/blog', label: 'Notes', section: 'research' },
  { path: '/contact', label: 'Contact', section: 'contact' },
];

export const repos = {
  vn30: 'https://github.com/tungtran0911/Vn30-future_pred',
  vol: 'https://github.com/tungtran0911/vol-har-conformal',
  volColab:
    'https://colab.research.google.com/github/tungtran0911/vol-har-conformal/blob/main/notebooks/A2_main.ipynb',
  qfp: 'https://github.com/tungtran0911/quant-factor-portfolio',
  finlab: 'https://github.com/tungtran0911/finlab',
};

// Experience, newest first. `tag` drives the small label in the table.
// Copy rule for the whole site: short sentences, no long dashes.
export const experience = [
  {
    id: 'uts-research',
    when: 'Sep 2026 → now',
    org: 'University of Technology Sydney',
    role: 'Research Volunteer, Dark Pattern Analysis',
    place: 'Sydney',
    tag: 'Research',
    bullets: [
      'Reviewing the literature on dark patterns, deceptive UI design.',
      'Scoping research questions with the team.',
    ],
  },
  {
    id: 'da',
    when: '2026 → now',
    org: 'D+A Strategies',
    role: 'Quantitative Trading Trainee',
    place: 'Remote, Europe',
    tag: 'Quant',
    bullets: [
      'Europe’s largest student-led quantitative trading association.',
      'Strategy development, macro research and backtesting.',
      'Working with students from Oxford, Cambridge, LSE, UCL, Imperial and Bocconi.',
    ],
  },
  {
    id: 'ededge',
    when: 'Nov 2025 → Feb 2026',
    org: 'Ededge',
    role: 'Data Analyst Intern',
    place: 'Sydney',
    tag: 'Industry',
    bullets: [
      'Turned 10 business requirements into SQL: high-value customers, top cities, brand revenue.',
      'Analysed 2018 to 2023 daily prices of Microsoft, Apple and Tesla against the S&P 500.',
      'Returns, descriptive statistics and CAPM beta by OLS.',
    ],
  },
  {
    id: 'uts',
    when: 'Aug 2025 → 2029',
    org: 'University of Technology Sydney',
    role: 'Bachelor of Computing Science (Honours)',
    place: 'Sydney',
    tag: 'Education',
    bullets: [
      'Major in AI & Data Analytics. Sub-major in Statistical Analysis.',
      'GPA 6.88/7, WAM 90.25. High Distinction in 7 of 8 subjects.',
      'Programming 2 (97), Mathematics 2 (95), Intro to Data Analytics (90), Discrete Mathematics (88).',
      'Dean’s List 2026. Academic Excellence International Scholarship (30%).',
    ],
  },
  {
    id: 'collab',
    when: 'Jan 2025 → now',
    org: 'Cross-university research (Vietnam, UK, Australia)',
    role: 'Research Collaborator',
    place: 'Hanoi · remote',
    tag: 'Research',
    bullets: [
      'KDCs and GenAI adoption, with RMIT Vietnam and the UK. Q2 paper expected.',
      'Co-designed the survey. Ran PLS-SEM (CR, AVE, HTMT, VIF, bootstrapping), t-tests and common-method-bias checks on n = 741.',
      'GenAI and sustainable innovation, Vietnam and Australia. Q1 paper expected.',
      'PLS-SEM with moderation and multi-group analysis on n = 989, plus NVivo-coded interviews. Found a “too much of a good thing” effect.',
    ],
  },
  {
    id: 'apatek',
    when: 'Feb 2024 → Aug 2024',
    org: 'Apatek Communication & Technology',
    role: 'Software Engineer Intern',
    place: 'Hanoi',
    tag: 'Industry',
    bullets: [
      'Prototyped a FAISS + LLM chatbot for document Q&A in client support.',
      'Maintained enterprise apps, 10k+ lines of Python and Java. Runtime improved by 20%.',
      'Designed and deployed a database schema holding 1M+ records.',
    ],
  },
  {
    id: 'second-chance',
    when: 'Jun 2022 → now',
    org: 'Second Chance',
    role: 'President',
    place: 'Hanoi',
    tag: 'Leadership',
    bullets: [
      'Raised $10,000 for STEM and rural-school initiatives.',
      'Organised STEM sessions for 350+ students.',
    ],
  },
];

// Older shape, still used by /about.
export const record = experience.map((e) => ({
  when: e.when,
  what: e.role,
  where: `${e.org}, ${e.place}`,
  note: e.bullets.join(' '),
}));

export const skills = [
  {
    group: 'Statistics & ML',
    items: 'Regression, gradient descent, custom losses, time series (HAR, GARCH, ARIMA, LSTM), walk-forward validation, hypothesis testing, block bootstrap, PLS-SEM',
  },
  {
    group: 'Market data',
    items: 'Order-flow features, contract rolls and back-adjustment, transaction-cost modelling, volatility estimators, VaR backtesting',
  },
  {
    group: 'Engineering',
    items: 'Python (pandas, NumPy, SciPy, scikit-learn, PyArrow), SQL, C++, Java, pytest, Git, Docker',
  },
  {
    group: 'AI & NLP',
    items: 'Retrieval-augmented generation (FAISS, sentence-transformers, LLMs), semantic search, document Q&A',
  },
];

// Certificate scans live in public/img/awards/<slug>.webp|.jpg, with a -sm.webp thumbnail.
// Ordered by relevance; the first three appear on the front page.
export const awards = [
  {
    slug: 'imc-prosperity-4',
    title: 'IMC Prosperity 4, finalist',
    meta: '2026 · IMC Trading',
    note: 'Algorithmic and manual trading challenge, with team 3aesieunhan; #9 in Vietnam.',
    w: 1200,
    h: 630,
    alt: 'IMC Prosperity 4 finalist badge, 2026, for team 3aesieunhan.',
  },
  {
    slug: 'deans-list-2026',
    title: 'Dean’s List 2026',
    meta: '2026 · UTS Faculty of Engineering & IT',
    note: 'For outstanding academic achievement.',
    w: 1400,
    h: 990,
    alt: 'UTS Faculty of Engineering and Information Technology certificate placing Thanh Tung Tran on the Dean’s List 2026.',
  },
  {
    slug: 'danang-code-league-2024',
    title: 'Danang Code League 2024, 12th runner-up team',
    meta: '2024 · FPT Software & Danang University of Science and Technology',
    note: 'Code Warrior category, 6 May – 13 July 2024.',
    w: 947,
    h: 675,
    alt: 'Danang Code League 2024 certificate of achievement awarded to Trần Thanh Tùng as a member of the 12th runner-up team.',
  },
  {
    slug: 'nam-cao-merit-2024',
    title: 'Certificate of merit, Nam Cao commune health station',
    meta: '2024 · Thái Bình, Vietnam',
    note: 'For helping renovate the commune health station and supporting its vaccination drive.',
    w: 1400,
    h: 989,
    alt: 'Certificate of merit (giấy khen) from the Nam Cao commune health station, Thái Bình, awarded to Trần Thanh Tùng.',
  },
  {
    slug: 'student-ambassador-2024',
    title: 'Student Ambassador, certificate of appreciation',
    meta: 'Oct 2023 – Jun 2024',
    note: 'For time and commitment given as a student ambassador.',
    w: 973,
    h: 725,
    alt: 'Certificate of appreciation to Tran Thanh Tung for serving as a student ambassador from October 2023 to June 2024.',
  },
  {
    slug: 'iot-course-2022',
    title: 'Internet of Things course',
    meta: '2022 · SEEE, Hanoi University of Science and Technology',
    note: 'Completed while at Hanoi Pedagogical High School for the Gifted.',
    w: 1260,
    h: 907,
    alt: 'Certificate from the School of Electrical and Electronic Engineering for completing the Internet of Things course, July 2022.',
  },
];
