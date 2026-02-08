# ejclarkin.com

A simple Astro-based website for GitHub Pages.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

Build the site for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Adding Content

### Adding a New Page

To add a new page, simply create a new file in the `src/pages/` directory:

**Option 1: Markdown file (easiest for non-programmers)**

Create a file like `src/pages/my-page.md`:

```markdown
---
layout: ../layouts/MarkdownLayout.astro
title: My Page Title
---

# My Page Title

Your content here. You can use markdown formatting.

## Section 1

Write your content here.

## Section 2

More content here.
```

**Option 2: Astro file (for more control)**

Create a file like `src/pages/my-page.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="My Page Title">
  <h1>My Page Title</h1>
  <p>Your content here.</p>
</BaseLayout>
```

### Editing Existing Pages

- **Homepage**: Edit `src/pages/index.astro`
- **About page**: Edit `src/pages/about.md`
- **Other markdown pages**: Edit the corresponding `.md` file in `src/pages/`

### Markdown Tips

Markdown files support:
- Headers: `# H1`, `## H2`, `### H3`
- Bold: `**bold text**`
- Italic: `*italic text*`
- Links: `[link text](https://example.com)`
- Images: `![alt text](image-url.jpg)`
- Lists: Use `-` or `*` for bullet points
- Code: `` `code` `` for inline code

## GitHub Pages Deployment

This site is configured for GitHub Pages. To deploy:

1. Push your changes to GitHub
2. GitHub Actions will automatically build and deploy (if configured)
3. Or manually: run `npm run build` and push the `dist/` folder contents to the `gh-pages` branch

The site will be available at `https://ejclarkin.com`

## Project Structure

```
/
├── src/
│   ├── layouts/          # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── MarkdownLayout.astro
│   └── pages/            # Your pages go here
│       ├── index.astro   # Homepage
│       └── about.md      # About page (markdown)
├── public/               # Static assets (images, etc.)
├── astro.config.mjs      # Astro configuration
└── package.json          # Dependencies
```

## Need Help?

- [Astro Documentation](https://docs.astro.build)
- [Markdown Guide](https://www.markdownguide.org/)
