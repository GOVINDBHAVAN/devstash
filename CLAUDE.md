# DevStash

A developer knowledge hub for snippets, commands, prompts, notes, files, images, links and custom types.

## Context Files

Read the following to get the full context of the project:

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md



## Warning: Non-standard Next.js version

This project uses **Next.js 16.2.2** with **React 19.2.4** — versions released after your training cutoff. APIs, conventions, and file structure may differ from what you know. **Read the relevant guide in `node_modules/next/dist/docs/` before writing any Next.js code.** Heed deprecation notices.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16** — App Router (`src/app/`)
- **Tailwind CSS v4** — imported via `@import "tailwindcss"` in `globals.css` (no config file — v4 uses CSS-based config)
- **TypeScript**
- **Geist fonts** — loaded via `next/font/google` in `layout.tsx`, exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`

## Architecture

The root layout (`src/app/layout.tsx`) sets up fonts, global styles, and the `<html>`/`<body>` shell. Pages are added as `page.tsx` files inside `src/app/` route folders. There are no tests configured.
