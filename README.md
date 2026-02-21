<div align="center">

# 🖥️ vanced-profile

**A VS Code-themed personal portfolio — built with React 19 + Vite 7**

[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-ff0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

[![GitHub](https://img.shields.io/badge/GitHub-duckhynh-181717?style=for-the-badge&logo=github)](https://github.com/duckhynh)

</div>

---

## ✨ Preview

> A fully interactive portfolio that looks and feels like **Visual Studio Code** — complete with Activity Bar, Sidebar, Tab Bar, Terminal, Status Bar, and Command Palette.

```
┌──────────────────────────────────────────────────────────┐
│  ◉ ◎ ○   vanced-profile — Visual Studio Code            │
├───┬──────────────┬────────────────────────────────────────┤
│   │ EXPLORER     │  hero.jsx  about.md  skills.json  +   │
│ ⚛ ├──────────────┼────────────────────────────────────────┤
│   │ 📁 src       │                                        │
│   │  ├ Hero.jsx  │   const developer = {                  │
│   │  ├ About.md  │     name: "Pham Duc Hung",             │
│   │  ├ Skills    │     role: "Fullstack Developer",       │
│   │  ├ Projects  │     github: "@duckhynh",               │
│   │  └ Contact   │   };                                   │
│   │              │                                        │
├───┴──────────────┴────────────────────────────────────────┤
│  TERMINAL  >_ duckhynh@portfolio ~/contact %              │
├──────────────────────────────────────────────────────────┤
│  🔵 main  ✔  Ln 1, Col 1  UTF-8  JSX                    │
└──────────────────────────────────────────────────────────┘
```

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 🎨 **VS Code Dark Theme** | Authentic VS Code UI — Activity Bar, Sidebar, Tabs, Status Bar |
| ⌨️ **Command Palette** | `Ctrl+P` / `Ctrl+Shift+P` to navigate sections instantly |
| 💻 **Interactive Terminal** | Fake terminal in Contact section with real commands (`ls`, `whoami`, `help`…) |
| 📱 **Mobile Responsive** | Bottom navigation bar, mobile-optimized layout |
| ✨ **Framer Motion** | Smooth animations on all section transitions |
| 🌐 **Real GitHub Data** | Projects pulled directly from real GitHub repos |

---

## 🗂️ Sections

| File | Section |
|------|---------|
| `hero.jsx` | Introduction with animated code window |
| `about.md` | Bio, stats, comment-style code block |
| `skills.json` | Skills with progress bars, filter by category |
| `projects.ts` | Project cards with GitHub links & live demos |
| `contact.sh` | Interactive terminal + quick action buttons |

---

## 🛠️ Tech Stack

```json
{
  "frontend": ["React 19", "Vite 7", "Tailwind CSS v4", "Framer Motion"],
  "fonts":    ["JetBrains Mono", "Fira Code"],
  "deploy":   ["GitHub Pages / Vercel"]
}
```

---

## ⚡ Getting Started

```bash
# Clone the repo
git clone https://github.com/duckhynh/vanced-profile.git
cd vanced-profile

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build
```

---

## 📁 Project Structure

```
vanced-profile/
├── src/
│   ├── components/
│   │   ├── layout/          # ActivityBar, Sidebar, TabBar, Terminal, StatusBar
│   │   ├── sections/        # Hero, About, Skills, Projects, Contact
│   │   └── ui/              # LoadingScreen, CommandPalette, TypeWriter
│   ├── data/
│   │   └── portfolioData.js # All content & project data
│   ├── hooks/               # useCommandPalette, useTyping
│   ├── pages/
│   │   └── Home.jsx         # Main layout assembly
│   └── index.css            # Tailwind v4 @theme tokens (VS Code palette)
└── index.html
```

---

## 🎨 Color Palette (VS Code Dark+)

| Token | Hex | Usage |
|-------|-----|-------|
| `vsc-bg` | `#0d1117` | App background |
| `vsc-editor` | `#1e1e1e` | Editor panels |
| `vsc-sidebar` | `#252526` | Sidebar / cards |
| `vsc-border` | `#3e3e42` | All borders |
| `syn-keyword` | `#569cd6` | Keywords (blue) |
| `syn-string` | `#ce9178` | Strings (orange) |
| `syn-type` | `#4ec9b0` | Types (teal) |
| `syn-comment` | `#6a9955` | Comments (green) |
| `vsc-status` | `#007acc` | Status bar |

---

## 📬 Contact

<div align="center">

**Pham Duc Hung** — `@duckhynh`

[![GitHub](https://img.shields.io/badge/GitHub-duckhynh-181717?style=flat-square&logo=github)](https://github.com/duckhynh)
[![Facebook](https://img.shields.io/badge/Facebook-duchungpham.dev-1877f2?style=flat-square&logo=facebook&logoColor=white)](https://www.facebook.com/duchungpham.dev)
[![Email](https://img.shields.io/badge/Email-hungpdse182153@fpt.edu.vn-ea4335?style=flat-square&logo=gmail&logoColor=white)](mailto:hungpdse182153@fpt.edu.vn)

*Ho Chi Minh City, Vietnam 🇻🇳 · FPT University SE182153*

</div>

---

<div align="center">

Made with ❤️ and too much ☕ by **duckhynh**

*"No time to die" — always shipping.*

</div>
