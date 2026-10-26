# ejclarkin.com

Personal website built with Astro and deployed to GitHub Pages at https://ejclarkin.com


## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production
```

## Adding Content

Create a new `.md` file in `src/pages/` to add a page. The file will automatically become a route.

The sitemap is generated from the site's routes by `@astrojs/sitemap` on every
build, so adding or removing pages automatically updates it. It is published at
`https://ejclarkin.com/sitemap-index.xml` and referenced in `public/robots.txt`.

Example: `src/pages/my-page.md`
```markdown
---
layout: ../layouts/MarkdownLayout.astro
title: My Page
---

# My Page

Your content here.
```

## Deployment

Push to GitHub and GitHub Actions will automatically deploy to `https://ejclarkin.com`.
