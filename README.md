# HarinandhReddy Areti: portfolio

Vite, React 18, TypeScript, Framer Motion. Plain CSS in `src/index.css`.

## Run

    npm install
    npm run dev

## Build

    npm run build
    npm run preview

## Where things live

- `src/data.ts`: projects, pull requests, education, skills, links. Edit content here.
- `src/index.css`: `--name-font` at the top controls the font of the hero name.
- `public/HarinandhReddy_Areti_CV.pdf`: the file behind every "Download CV" button.
- `public/projects/`: project screenshots.

## Change the name font

Install the font (for example `npm i @fontsource-variable/<name>`), import it in `src/main.tsx`, then set `--name-font` in `src/index.css`.

## Deploy to GitHub Pages

`vite.config.ts` uses `base: './'`, so the contents of `dist/` work from any sub-path.
