# Engineering Portfolio

Yonatan Konstantine's portfolio, built with React, TypeScript, and Vite.

## Local development

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 5175 --strictPort
```

Open the URL printed by Vite. Keep the server running while editing. On Windows,
use `npm.cmd` if PowerShell blocks `npm.ps1`.

Run `npm run build` to produce `dist/`. Run `npm run preview` to check that build.

## Pages and content

- `/` — introduction, filterable project grid, background, skills, and contact.
- `/projects/early-bird/` — ultrasonic parametric speaker case study.
- `/projects/smartzle/` — interactive educational puzzle case study.

The case studies are real static HTML entry points declared in `vite.config.ts`.
Direct links and reloads work on GitHub Pages without a client-side routing
fallback or a new routing dependency.

- `src/data/projects.ts` holds project facts, images, and concise summaries.
- `src/components/CaseStudy.tsx` renders the project narrative.
- `src/components/ProjectGallery.tsx` provides image selection and enlargement.
- `src/components/Lightbox.tsx` uses a native modal dialog for keyboard focus.
- `src/App.tsx` contains the homepage and shared navigation.
- `src/App.css` and `src/index.css` hold the shared design and responsive behavior.
- `docs/CONTENT.md` records the sources supporting the published content.

The résumé remains at `public/Yonatan Konstantine Resume.pdf`. Replace it using
the same filename. Original project images are retained; live pages use smaller
WebP images and locally hosted WOFF2 fonts. Font licenses are in `public/fonts/`.

## GitHub Pages

This checkout's origin is `ykonstantine/ykonstantine.github.io`, and the site is
served at https://ykonstantine.github.io/. Vite's base path is `/`.

The existing `.github/workflows/deploy.yml` builds and deploys pushes to `main`
or a manual workflow run. GitHub Pages must use **GitHub Actions** as its source.
Review and approve changes before pushing: a push to `main` can deploy the site.

If the hosting origin or path changes, update the base path and each HTML page's
canonical/Open Graph URLs together. No Vercel deployment is required.
