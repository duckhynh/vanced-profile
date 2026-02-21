// ─── Portfolio Data — @duckhynh (GitHub) ────────────────────────────────────
export const developer = {
  name: 'Pham Duc Hung',
  displayName: 'Hung',
  githubLogin: 'duckhynh',
  role: 'Fullstack Developer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'hungpdse182153@fpt.edu.vn',
  github: 'https://github.com/duckhynh',
  linkedin: 'https://linkedin.com/in/duckhynh',
  facebook: 'https://www.facebook.com/duchungpham.dev',
  avatar: 'https://avatars.githubusercontent.com/u/78641845?v=4',
  bio: '"No time to die" — building software, one commit at a time.',
  memberSince: '2021',
  publicRepos: 12,
  followers: 3,
  following: 7,
};

export const skills = [
  // Frontend — ChatSignal_IR (HTML), demo repos (JS)
  { name: 'HTML / CSS',     category: 'Frontend',  icon: '🌐',  color: '#e34c26', level: 85 },
  { name: 'JavaScript',     category: 'Frontend',  icon: '🟨',  color: '#f7df1e', level: 80 },
  { name: 'React',          category: 'Frontend',  icon: '⚛',  color: '#61dafb', level: 72 },
  // Backend — PRIMARY: C# (InfertilityTreatment, QuanLyDieuTri, WPF)
  { name: 'C#',             category: 'Backend',   icon: '💜',  color: '#9b4f96', level: 90 },
  { name: 'ASP.NET Core',   category: 'Backend',   icon: '💎',  color: '#512bd4', level: 85 },
  { name: 'SignalR',        category: 'Backend',   icon: '🔊',  color: '#007acc', level: 78 },
  // Java — RAM_ItemManager, Lab1_LAB211, CSD201
  { name: 'Java',           category: 'Backend',   icon: '☕',  color: '#b07219', level: 80 },
  // Database — inferred from C# medical & mgmt apps
  { name: 'SQL Server',     category: 'Database',  icon: '🗄',  color: '#cc2927', level: 82 },
  { name: 'MySQL',          category: 'Database',  icon: '🐬',  color: '#00758f', level: 70 },
  // Tools — WPF (PhamDucHungWPF), Git
  { name: 'WPF / XAML',     category: 'DevOps',    icon: '🖥',  color: '#0078d4', level: 78 },
  { name: 'Git',            category: 'DevOps',    icon: '🌿',  color: '#f05032', level: 88 },
  { name: '.NET',           category: 'DevOps',    icon: '🔵',  color: '#512bd4', level: 84 },
];

export const projects = [
  {
    id: 1,
    title: 'ChatSignal_IR',
    filename: 'ChatSignal.jsx',
    extension: 'jsx',
    description: 'Student Management Chat App with Teams-like design — real-time messaging, channels, and role-based student management system.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SignalR'],
    github: 'https://github.com/duckhynh/ChatSignal_IR',
    demo: null,
    lines: 1840,
    stars: 0,
    color: '#61dafb',
    updatedAt: 'Feb 2026',
  },
  {
    id: 2,
    title: 'Locker',
    filename: 'Locker.cs',
    extension: 'cs',
    description: 'IoT Smart Locker System — full-stack monorepo with ESP32-S3 firmware, ASP.NET Core API, React + TypeScript web dashboard, Flutter mobile app, and Docker infra with MQTT.',
    tech: ['C#', 'ASP.NET Core', 'Flutter', 'React', 'TypeScript', 'ESP32', 'MQTT'],
    github: 'https://github.com/hoaifpt/Locker',
    demo: null,
    lines: 2400,
    stars: 0,
    color: '#00b4d8',
    updatedAt: 'Feb 2026',
  },
  {
    id: 3,
    title: 'Artifact-Defenders',
    filename: 'ArtifactDefenders.cs',
    extension: 'cs',
    description: '2D resource & time management game built in Unity — Scriptable Object architecture, localization support, Android APK build, created for Ludum Dare 46 with theme "Keep It Alive".',
    tech: ['C#', 'Unity', 'Android'],
    github: 'https://github.com/hungnqse182498/Artifact-Defenders/tree/hungpd',
    demo: 'https://drive.google.com/file/d/1bHOIPqUTl5r6EHG8IOJkePUjyHvPep2O/view',
    lines: 1800,
    stars: 0,
    color: '#f4a261',
    updatedAt: 'Nov 2025',
  },
  {
    id: 4,
    title: 'SchoolManagement',
    filename: 'Assignment01.cs',
    extension: 'cs',
    description: 'School Management System built with ASP.NET Core MVC — 3-tier architecture, student/teacher/class management, role-based auth, EF Core, SQL Server. PRN222 @ FPT University.',
    tech: ['C#', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Bootstrap 5'],
    github: 'https://github.com/PRN222-SE1815/Assignment-01',
    demo: null,
    lines: 3200,
    stars: 0,
    color: '#2dc653',
    updatedAt: 'Feb 2026',
  },
];

export const aboutLines = [
  { type: 'comment', text: '/**' },
  { type: 'comment', text: ' * @author  Pham Duc Hung (@duckhynh)' },
  { type: 'comment', text: ' * @role    Fullstack Developer' },
  { type: 'comment', text: ' * @github  https://github.com/duckhynh' },
  { type: 'comment', text: ' * @since   2021 (joined GitHub)' },
  { type: 'comment', text: ' *' },
  { type: 'comment', text: ' * "No time to die" — always shipping.' },
  { type: 'comment', text: ' * C# · Java · JavaScript · ASP.NET · WPF' },
  { type: 'comment', text: ' *' },
  { type: 'comment', text: ' * Repos:     12 public repositories' },
  { type: 'comment', text: ' * Followers:  3 developers following' },
  { type: 'comment', text: ' * Status:     Open to exciting opportunities' },
  { type: 'comment', text: ' */' },
  { type: 'blank',   text: '' },
  { type: 'code',    text: 'const me = {' },
  { type: 'prop',    key: 'name',       value: '"Pham Duc Hung"' },
  { type: 'prop',    key: 'github',     value: '"@duckhynh"' },
  { type: 'prop',    key: 'onGitHubSince', value: '"February 2021"' },
  { type: 'prop',    key: 'location',   value: '"Ho Chi Minh City 🇻🇳"' },
  { type: 'prop',    key: 'languages',  value: '["Vietnamese", "English"]' },
  { type: 'prop',    key: 'hobbies',    value: '["Coding", "Gaming", "Coffee ☕"]' },
  { type: 'code',    text: '};' },
];

export const terminalCommands = [
  { cmd: 'gh api users/duckhynh --jq ".name"',   out: 'duchungpham.dev' },
  { cmd: 'gh repo list duckhynh --limit 4',       out: 'duckhynh/ChatSignal_IR           HTML      Feb 2026\nhoaifpt/Locker                    C#        Feb 2026\nhungnqse182498/Artifact-Defenders C#        Nov 2025\nPRN222-SE1815/Assignment-01       C#        Feb 2026' },
  { cmd: 'git log --oneline -3',                  out: 'f3a92d1 feat: ChatSignal Teams-like UI\naa64463 chore: Downgrade backend to .NET 8.0\nf07295e Revise README for Artifact-Defenders' },
  { cmd: 'echo $STATUS',                          out: 'Open to opportunities  ✔  |  12 repos  |  on GitHub since 2021' },
];

export const navFiles = [
  { name: 'hero.jsx',     section: 'hero',     icon: '⚛',  active: true  },
  { name: 'about.md',     section: 'about',    icon: '📝', active: false },
  { name: 'skills.json',  section: 'skills',   icon: '{}', active: false },
  { name: 'projects.ts',  section: 'projects', icon: '📁', active: false },
  { name: 'contact.sh',   section: 'contact',  icon: '>_', active: false },
];

export const explorerTree = [
  { type: 'folder', name: 'src',      open: true,  depth: 0 },
  { type: 'folder', name: 'components', open: true, depth: 1 },
  { type: 'file',   name: 'Hero.jsx',   icon: '⚛',  depth: 2, section: 'hero'     },
  { type: 'file',   name: 'About.md',   icon: '📝', depth: 2, section: 'about'    },
  { type: 'file',   name: 'Skills.json', icon: '{}', depth: 2, section: 'skills'   },
  { type: 'file',   name: 'Projects.ts', icon: '📁', depth: 2, section: 'projects' },
  { type: 'file',   name: 'Contact.sh',  icon: '>_', depth: 2, section: 'contact'  },
  { type: 'folder', name: 'assets',    open: false, depth: 1 },
  { type: 'file',   name: 'README.md',  icon: '📝', depth: 1, section: null       },
  { type: 'file',   name: 'package.json', icon: '{}', depth: 1, section: null     },
];
