# Davide Bert — Portfolio

Single-page site for a senior software developer in Trentino-Alto Adige. Theme: systems that stay on your hardware — self-hosted tools, IIoT, and local AI.

**Live:** [dcbert.github.io/portfolio](https://dcbert.github.io/portfolio/)

## Stack

- **React 19** + **Vite 6**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **GSAP ScrollTrigger** + **Lenis** for scroll and section motion
- **lucide-react** for icons

Path alias: `@/` → `src/`. Vite `base` is `/portfolio` for GitHub Pages.

## Structure

```
src/
  App.jsx              # shell, motion lifecycle, hash navigation
  index.css            # design tokens, layout, typography
  lib/motion.js        # Lenis + ScrollTrigger setup, reduced-motion
  components/          # TopBar, ProgressRail, SkipLink
  sections/            # Hero → Manifest → Experience → Work → SideFun → HowIWork → Contact
  visuals/             # project visuals (e.g. MinerDashboard)
public/
  me.jpg, llms.txt, sitemap.xml, robots.txt
```

## Develop

```bash
npm install
npm run dev
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint with `--fix` |
| `npm run format` | Prettier on `src/` |

## Deploy

Push to `master` runs [`.github/workflows/static.yml`](.github/workflows/static.yml): `npm ci` → `npm run build` → GitHub Pages from `dist/`.

Manual deploy from a local build:

```bash
npm run build
```

## Contact

- Email: [dc.bert@outlook.com](mailto:dc.bert@outlook.com)
- GitHub: [dcbert](https://github.com/dcbert)
- X: [@bertdev](https://x.com/bertdev)
