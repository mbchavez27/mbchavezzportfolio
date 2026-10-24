# mbchavezz portfolio

Personal portfolio site, built as a client-side React app and deployed on Cloudflare Workers.

## How it's made

### Stack

- [React 19](https://react.dev/) + TypeScript (strict), bundled with [Vite 8](https://vite.dev/)
- [React Router 8](https://reactrouter.com/), with every page except home lazy-loaded
- [Tailwind CSS 4](https://tailwindcss.com/) for styling, with theme tokens in `src/styles/theme.css`
- [Motion](https://motion.dev/) for scroll and page animations
- [Lucide](https://lucide.dev/) icons
- [Zod](https://zod.dev/) (`zod/mini`) to validate URL params and log headers
- [react-markdown](https://github.com/remarkjs/react-markdown) + GFM and [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) for log posts
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) static assets for hosting, via `@cloudflare/vite-plugin` and Wrangler

### Architecture

The code is organized by feature. Each feature splits into containers and presentational components:

- **Pages** (`src/pages/`) only compose feature containers.
- **Containers** read the feature's data, run its domain logic, and pass ready-to-render props down.
- **Presentational components** take props and render. They don't import data or call domain logic.
- **Domain** files hold types and pure logic. For example, tenure durations are computed from start and end months, and paper counts come from the papers list.
- **Shared components** (used by two or more features) follow atomic design: atoms, molecules, organisms, templates.

```
src/
├── app/                 # App root, router, scroll-to-top layout
├── pages/               # Thin route components
├── features/<name>/     # home, experience, papers, projects, productions, logs, case-study
│   ├── index.ts         # Public API: other code imports a feature only from here
│   ├── containers/      # Wire data and domain logic to components
│   ├── components/      # Feature-specific presentational components
│   ├── data/            # Portfolio content
│   └── domain/          # Types and pure functions
├── components/          # Shared UI by atomic level
│   ├── atoms/           # Tag, NavAnchor, brand icons
│   ├── molecules/       # TagList, PageHero, SectionIntro, NavDropdown, RevealOnHover
│   ├── organisms/       # Navbar, AtAGlance
│   └── templates/       # PageShell
├── config/links.ts      # Profile links and navbar items
├── lib/                 # Formatting, motion presets, scroll helper
├── assets/              # Images, grouped by feature
└── styles/              # Tailwind entry, fonts, theme tokens
```

## Setup

Requires Node.js 22.22 or newer (CI uses Node 24).

```sh
git clone git@github.com:mbchavez27/mbchavezzportfolio.git
cd mbchavezzportfolio
npm install
```

## Usage

| Command             | What it does                                                    |
| ------------------- | --------------------------------------------------------------- |
| `npm run dev`       | Start the dev server at http://localhost:5173                   |
| `npm run typecheck` | Type-check the project with `tsc`                               |
| `npm run build`     | Build for production into `dist/`                               |
| `npm run preview`   | Serve the production build locally                              |
| `npm run deploy`    | Build and deploy to Cloudflare Workers (needs `wrangler login`) |

Restart `npm run dev` after installing or upgrading dependencies. Vite reloads config changes, but not packages that change on disk.

### Editing content

All content lives in each feature's `data/` folder. Most edits never touch components:

| To change…                              | Edit                                                   |
| --------------------------------------- | ------------------------------------------------------ |
| Work experience and education           | `src/features/experience/data/experience.data.ts`      |
| Papers (stats update automatically)     | `src/features/papers/data/papers.data.ts`              |
| Projects and the technical stack        | `src/features/projects/data/projects.data.ts`          |
| Productions and capabilities            | `src/features/productions/data/productions.data.ts`    |
| Home hero, hat cards, highlights, contact | `src/features/home/data/home.data.ts`                |
| Navbar items and profile links          | `src/config/links.ts`                                  |
| Logs (blog posts)                       | `src/features/logs/posts/*.md` (see below)             |

Images go in `src/assets/<feature>/` and are imported from the matching data file.

### Writing a log

1. Copy `src/features/logs/posts/_template.md` to `src/features/logs/posts/<slug>.md`. The file name becomes the URL, `/logs/<slug>`.
2. Fill in the header: `title`, `date` (YYYY-MM-DD) and `summary` are required, and `tags` is an optional comma-separated list.
3. Write the body in Markdown. GitHub extras like tables and task lists work.
4. Keep `draft: true` while you're writing: the post shows in `npm run dev` but not on the live site. Remove it to publish.

A missing or malformed header fails the build with the file name and the problem, so a broken post never ships.

### CI and dependency updates

- GitHub Actions (`.github/workflows/ci.yml`) runs the typecheck and build on every push to `main` and on every pull request.
- Dependabot opens weekly PRs for npm packages and GitHub Actions.
