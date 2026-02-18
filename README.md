# UBC Game Dev Club Website

> The official website for UBC Game Development Association — built with Astro, React, and TailwindCSS with a cyberpunk-themed design.

## ✅ Tech Stack

| Technology            | Version   | Purpose                          |
| :-------------------- | :-------- | :------------------------------- |
| **Astro**             | ^5.17.1   | Static site framework (SSG)      |
| **React**             | ^19.2.0   | Interactive components (islands) |
| **TailwindCSS**       | ^4.1.12   | Utility-first CSS styling        |
| **TypeScript**        | ^5.9.3    | Type safety                      |
| **Framer Motion**     | ^12.23.26 | Animations & transitions         |
| **Typewriter Effect** | ^2.22.0   | Terminal-style text animations   |
| **Vercel**            | —         | Deployment & hosting             |

### Prerequisites

- **Node.js**: v18.20.8+ / v20.3.0+ (recommended) / v22.0.0+
- **npm**: v9+ (bundled with Node)

## 🚀 Project Structure

```text
/
├── public/                   # Static assets (images, fonts, favicons)
│   └── assets/               # Exec photos, merch images, game media, partner logos
│
├── src/
│   ├── assets/               # Build-processed assets (Astro image optimization)
│   ├── components/           # UI components organized by feature
│   │   ├── about/            # About page (ExecGrid, ExecRoster)
│   │   ├── common/           # Shared (PageHeader, LoadingScreen, CyberBadge)
│   │   ├── effects/          # Visual effects (GlitchText, Marquee)
│   │   ├── events/           # Event components
│   │   ├── games/            # Game showcase
│   │   ├── home/             # Landing page sections
│   │   ├── layout/           # App shell (Navbar, Footer)
│   │   ├── merch/            # Merch store components
│   │   ├── partners/         # Partner/sponsor section
│   │   └── team/             # Team page components
│   ├── config/               # App configuration
│   ├── data/                 # Static data (execs, events, games, merch)
│   ├── layouts/              # Base page layouts
│   ├── pages/                # File-based routing (Astro pages)
│   ├── services/             # Business logic layer
│   ├── styles/               # Global CSS, variables, animations
│   └── types/                # TypeScript type definitions
│
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🎨 Design System

The site uses a **cyberpunk** aesthetic with:

- **CSS Variables** for theming (`--cyber-blue`, `--cyber-yellow`, `--brand`, etc.)
- **Custom fonts**: `font-display`, `font-tech`, `font-pixel`
- **Glitch effects**, scanlines, and neon glow animations
- **Dark mode** by default with glass-morphism panels

## 🌐 Hosting & Deployment

This repo pushes to **two remote repositories**:

| Remote           | Repository                                              | Purpose                                                |
| :--------------- | :------------------------------------------------------ | :----------------------------------------------------- |
| `origin` (fetch) | `UBC-Game-Development-Association/UBC_Game_Dev_Website` | Organization repo — source of truth                    |
| `origin` (push)  | `UBC-Game-Development-Association/UBC_Game_Dev_Website` | Syncs with org repo                                    |
| `origin` (push)  | `UBCGameDevelopment/ubc-game-dev-website`               | Personal repo — connected to **Vercel** for deployment |

Pushes go to both remotes simultaneously. The **personal GitHub repo** is the one linked to Vercel, which handles automatic builds and deployment on push.
