# Engineering Portfolio

Yonatan Konstantine's portfolio, built with React, TypeScript, and Vite.

## Local development

```sh
npm ci
npm run dev
```

Run `npm run build` for a production build and `npm run preview` to preview it.

## GitHub Pages

Source code and deployment configuration are kept in this GitHub repository.
The workflow in `.github/workflows/deploy.yml` builds and deploys the site on
pushes to `main`, or when run manually from the Actions tab.

One-time setup: in the GitHub repository, open **Settings > Pages** and set
**Source** to **GitHub Actions**. Commit and push the local changes to trigger
 deployment.

Site URL after deployment: https://Yoni04.github.io/Engineering-Portfolio/

Vite's base path is `/Engineering-Portfolio/`. Public images and the résumé use
that base path so their links work on GitHub Pages.

Vercel is not required. If this repository was previously connected to a Vercel
project, disconnect its Git integration in Vercel to stop its deployments;
removing local configuration does not disconnect an existing integration.
