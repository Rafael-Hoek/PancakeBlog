# Personal site

Vite + React static site with Resume, Projects and Blog.

## Develop
```
npm install
npm run dev
```

## Edit content
- Resume: edit `src/content/resume.md`; optionally put a PDF at `public/resume.pdf` (linked from the Resume page).
- Project: add `src/content/projects/<slug>.md`.
- Blog post: add `src/content/blog/<slug>.md`.

Each file starts with frontmatter (single-line values):
```
---
title: My title
abstract: Short summary shown in the overview
date: 2026-03-01
tags: dotnet, aws   (optional)
---
Markdown body...
```
Overviews are sorted by date, newest first. Content is read at build time, so redeploy after changes.

## Project page structure
Every file in `src/content/projects` uses the same layout, so keep these sections in this order:

1. **Intro** (no heading): 1–3 sentences on what it is and why it exists, including context such as employer or purpose.
2. `## Features`: bullet list of what it does.
3. `## Technology`: bullet list of technologies, each with a short role note where useful.
4. `## Getting started`: how to use or run it (install steps, or a link to the live site).
5. `## Links`: bullet list with the live site (if any) and the source on GitHub.

Frontmatter: `title`, a one-sentence `abstract`, `date`, and `tags` (lowercase, 3–5).

## Deploy on Render
Create a Static Site (or use `render.yaml`): build command `npm install && npm run build`, publish directory `dist`,
and a rewrite rule `/*` -> `/index.html` so deep links work.
