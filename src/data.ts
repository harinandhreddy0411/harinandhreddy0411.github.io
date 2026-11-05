export const profile = {
  firstName: 'Harinandh',
  lastName: 'Reddy',
  fullName: 'HarinandhReddy Areti',
  email: 'harinandhreddy@gmail.com',
  github: 'https://github.com/harinandhreddy0411',
  githubLabel: 'github.com/harinandhreddy0411',
  linkedin: 'https://www.linkedin.com/in/harinandhreddy',
  linkedinLabel: 'linkedin.com/in/harinandhreddy',
  cvPath: './HarinandhReddy_Areti_CV.pdf',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export type ArtKind = 'alumni' | 'travel' | 'novus' | 'bot' | 'ctf';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  art: ArtKind;
  accent: string;
  kind: string;
  title: string;
  pitch: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  note?: string;
  image?: { src: string; alt: string; url: string };
}

export const projects: Project[] = [
  {
    id: 'alumni',
    art: 'alumni',
    accent: '#f2b84b',
    kind: 'Full-stack platform',
    title: 'Alumni Mentorship Matcher',
    pitch:
      'A platform that connects students with alumni mentors. The matching and the rules around it live inside the database, not in application code.',
    highlights: [
      'Mentors are ranked by shared skills, then same department, then rating, using a MySQL function (fn_match_score).',
      'Integrity is enforced by MySQL itself: 13 tables in BCNF, 14 triggers, 11 stored procedures and 5 views.',
      'Requests, chat, Jitsi meetings and reviews, with mentor capacity from 1 to 20 and an admin side for verification, invite codes and analytics.',
    ],
    stack: ['JavaScript', 'Node.js', 'Express', 'MySQL 8', 'GitHub Pages', 'Render', 'Aiven'],
    links: [
      { label: 'Live demo', href: 'https://harinandhreddy0411.github.io/alumni-mentorship-matcher/' },
      { label: 'Source', href: 'https://github.com/harinandhreddy0411/alumni-mentorship-matcher' },
    ],
    note: 'The API sleeps on free hosting, so the first request can take up to a minute.',
    image: {
      src: './projects/alumni.jpg',
      alt: 'Landing page of the Alumni Mentorship Matcher',
      url: 'harinandhreddy0411.github.io/alumni-mentorship-matcher',
    },
  },
  {
    id: 'travel',
    art: 'travel',
    accent: '#3fc7b6',
    kind: 'AI trip planner',
    title: 'Travel Companion',
    pitch:
      'Plans a trip from a destination, a length and a style. The language model may only choose from places a map service has verified, and every rule is checked in code.',
    highlights: [
      'Gemini nominates place names, Geoapify verifies each one within 30 km, and the planner can only use the verified ones.',
      'Rules such as dinner every day, at most two museums a day and stops within about 4 km are validated in code, with up to three retries that list the exact problems.',
      'Routes are drawn on a Leaflet map. Known limits: no opening hours, ratings or prices yet, and a plan takes 20 to 45 seconds.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Gemini', 'Geoapify', 'Leaflet', 'Zod', 'Vercel'],
    links: [
      { label: 'Live demo', href: 'https://travel-companion-seven-gold.vercel.app' },
      { label: 'Source', href: 'https://github.com/harinandhreddy0411/travel-companion' },
    ],
    image: {
      src: './projects/travel.jpg',
      alt: 'A generated Hyderabad itinerary with a route map',
      url: 'travel-companion-seven-gold.vercel.app',
    },
  },
  {
    id: 'novus',
    art: 'novus',
    accent: '#a78bfa',
    kind: 'Interview practice',
    title: 'Novus AI Interview Simulator',
    pitch:
      'A mock-interview app that asks adaptive questions and scores each answer on what you said, how you said it and how steady you were.',
    highlights: [
      'Four role banks (software, data, frontend, behavioral) with ten topic-tagged questions each. Every topic is asked once, then the weakest topic is weighted higher.',
      'Scored on correctness (an LLM rubric), communication (pace, filler words, response delay) and composure (a face and timing proxy), shown as a radar plus per-topic bars.',
      'Sessions are saved per user in Supabase with row-level security, and the Gemini key stays server-side in an Edge Function.',
      'Face analysis runs on-device with a TensorFlow.js model trained on FER-2013 (about 58% accurate), so it is labelled a proxy rather than a verdict.',
    ],
    stack: ['JavaScript', 'Supabase', 'Gemini', 'TensorFlow.js', 'MediaPipe', 'Chart.js', 'Piston'],
    links: [{ label: 'Source', href: 'https://github.com/harinandhreddy0411/Novus-AI-Interview-Simulator' }],
  },
  {
    id: 'bot',
    art: 'bot',
    accent: '#7bd88f',
    kind: 'Community tooling',
    title: 'Mentor assignment bot',
    pitch:
      'A Discord bot for the biOs Pentest Club that assigns new recruits to mentors the moment they join, fairly and without anyone running a script.',
    highlights: [
      'Recruits are divided equally among the ten second-year mentors first, and any remainder goes to the five third-year mentors.',
      'State is kept in JSON on disk, and the bot catches up on anyone it missed at startup.',
      'Fixed a bug where an interrupted run lost assignments, by saving after every single assignment and chunking the guild member list.',
    ],
    stack: ['Python', 'discord.py', 'JSON'],
    links: [],
    note: 'Built for the club, so there is no public repository.',
  },
  {
    id: 'ctf',
    art: 'ctf',
    accent: '#ff7a6b',
    kind: 'Security',
    title: 'Android CTF challenges',
    pitch:
      'Three Android reverse-engineering challenges written for a CTF: one easy and two medium, each shipped as an APK for players to pull apart.',
    highlights: [
      'Each challenge is a self-contained APK: one easy and two medium, so there is a way in for newcomers and something to chew on for the rest.',
      'Day-to-day tooling for this kind of work: jadx, apktool and ADB.',
    ],
    stack: ['Android', 'Java', 'jadx', 'apktool', 'ADB'],
    links: [],
    note: 'Challenge names are left out on purpose.',
  },
];

export interface PullRequest {
  repo: string;
  number: number;
  title: string;
  detail: string;
  status: string;
  href: string;
}

export const pullRequests: PullRequest[] = [
  {
    repo: 'kyverno/policies',
    number: 1496,
    title: 'Strict seccomp inheritance in a CEL policy',
    detail: 'A fix for how a CEL policy handled strict seccomp inheritance.',
    status: 'Merged',
    href: 'https://github.com/kyverno/policies/pull/1496',
  },
  {
    repo: 'kyverno/kyverno',
    number: 16259,
    title: 'JMESPath crash on a missing key',
    detail:
      'A scoped logical-OR evaluator that is recursive for nested expressions, backed by 11 test cases and reworked through three rounds of maintainer review.',
    status: 'Opened',
    href: 'https://github.com/kyverno/kyverno/pull/16259',
  },
  {
    repo: 'kyverno/kyverno',
    number: 16660,
    title: 'Prometheus workqueue metrics for the background controller',
    detail: 'Routes the metrics into the exposed registry, with the endpoint output checked locally.',
    status: 'Opened',
    href: 'https://github.com/kyverno/kyverno/pull/16660',
  },
];

export const openSourceNotes = [
  'Proposed stronger mTLS certificate verification in the webhook server. The maintainers asked for a formal Kyverno Design Proposal instead.',
  'Invited by a maintainer to present at a Kyverno community meeting.',
];

export const education = [
  {
    school: 'Amrita Vishwa Vidyapeetham, Amritapuri',
    detail: 'B.Tech, Computer Science and Engineering',
    when: '2025 to 2029',
    score: 'CGPA 9.01 / 10',
  },
  {
    school: 'Sri Chaitanya Junior College',
    detail: 'Class 12',
    when: '',
    score: '97.4%',
  },
  {
    school: "St. Peter's School",
    detail: 'CBSE, Class 10',
    when: '',
    score: '96.4%',
  },
];

export const coursework = [
  'Object-Oriented Programming (Java)',
  'DBMS and SQL',
  'Data Structures and Algorithms',
  'Python',
  'C++',
  'Discrete Mathematics',
];

export const beyondClass = [
  { title: 'biOs Pentest Club', detail: 'Active member' },
  { title: 'ACM Student Chapter', detail: 'Former member for about six months; completed the ACM Bridge Course on programming fundamentals' },
  { title: 'College hockey team', detail: 'Played in inter- and intra-college tournaments' },
  { title: 'Amrita Annual Sports Meet 2026', detail: 'Participant' },
];

export const skillGroups = [
  { badge: 'Co', label: 'Languages', items: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'Go', 'SQL', 'HTML and CSS'] },
  { badge: 'Fe', label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Leaflet', 'Chart.js'] },
  { badge: 'Be', label: 'Backend and data', items: ['Node.js', 'Express', 'MySQL', 'Supabase', 'REST APIs', 'Zod'] },
  { badge: 'Ai', label: 'AI and ML tooling', items: ['Gemini API', 'TensorFlow.js', 'MediaPipe'] },
  { badge: 'Cl', label: 'Cloud and delivery', items: ['Kubernetes policy with Kyverno', 'Git and GitHub', 'Linux', 'Vercel', 'Render', 'GitHub Pages'] },
  { badge: 'Se', label: 'Security', items: ['Android reverse engineering', 'jadx', 'apktool', 'ADB', 'CTF design'] },
];
