# Max Benedict Chavez — Portfolio

Personal portfolio for Max Benedict Chavez, frontend engineer and NLP researcher. Built with React, TypeScript, and Vite.

## Pages

- `/` — Home
- `/experience` — Work experience
- `/papers` — NLP research papers
- `/projects` — Projects
- `/productions` — Productions
- `/case-study/coming-soon` — Coming soon case study

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [MUI](https://mui.com/)
- [react-router](https://reactrouter.com/)

## Structure

```
src/
├── app/                 # App root and route table
├── pages/               # Thin route components that compose feature containers
├── features/<name>/     # home, experience, papers, projects, productions, case-study
│   ├── index.ts         # Public API (containers only) — import features only from here
│   ├── containers/      # Read data, run domain logic, pass props down
│   ├── components/      # Presentational: props in, UI out
│   ├── data/            # Portfolio content
│   └── domain/          # Types and pure logic (e.g. tenure durations, paper stats)
├── components/shared/   # UI used by 2+ features (Navbar, PageHero, AtAGlance, Tag…)
├── config/links.ts      # Profile and nav links
├── lib/                 # Formatting and motion presets
├── assets/              # Images, grouped by feature
└── styles/
```

To add a project, paper, or production, edit the matching `features/<name>/data/*.data.ts`.

## Getting started

```sh
npm install
npm run dev
```

## Build

```sh
npm run typecheck
npm run build
```
