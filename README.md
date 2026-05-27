# POSA NARENDRA | Narendra OS — Cyberpunk AI Portfolio

A cyberpunk-themed personal portfolio website built with React and Vite, deployed on Netlify.

## Live Site

Deployed at: [narendraposa.netlify.app](https://narendraposa.netlify.app)

## Overview

This portfolio presents a futuristic "Narendra OS" command-center aesthetic, featuring:

- **Boot Screen** — cinematic OS-style startup sequence
- **Hero Section** — animated holographic introduction
- **About** — background and personal summary
- **Skills** — tech stack visualized with cyberpunk UI elements
- **Experience** — professional timeline
- **Projects** — showcase of notable work
- **Achievements** — awards and milestones
- **GitHub Dashboard** — live GitHub activity stats
- **Contact** — reach-out form

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| 3D / WebGL | Three.js, React Three Fiber, Drei |
| Animation | Framer Motion, GSAP |
| Particles | tsParticles |
| Smooth Scroll | Lenis |
| Icons | React Icons |
| Deployment | Netlify |

## Project Structure

```
src/
├── animations/       # Reusable animation configs
├── assets/           # Images and static assets
├── components/       # Shared UI components (HUD, cursor, panels, etc.)
├── context/          # React context providers
├── data/             # Static content/data files
├── hooks/            # Custom React hooks
├── layouts/          # Page layout wrappers
├── pages/            # Route-level page components
├── sections/         # Portfolio sections (Hero, About, Skills, etc.)
├── styles/           # Global styles
├── utils/            # Utility functions
└── main.jsx          # App entry point
```

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deployment

This project is configured for Netlify. The `netlify.toml` sets:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Push to the connected branch to trigger an automatic deploy.

## License

This is a personal portfolio project. All content and design are owned by Posa Narendra.
