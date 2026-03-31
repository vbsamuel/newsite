# Amalgus Publication

A professional publishing platform built with Next.js, TypeScript, Tailwind CSS, MDX, and App Router. This project is designed for enterprise-level technical writing, research commentary, and thoughtful analysis.

## Features

- Next.js App Router with static generation
- Tailwind CSS typography and editorial styling
- MDX-powered articles with custom components
- Topic-driven browsing and client-side article search
- Article detail pages with table of contents and reading progress
- SEO metadata, sitemap generation, and Vercel readiness
- Accessible, responsive, and premium editorial design

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run start
```

## Deployment

This project is ready for Vercel deployment. Connect the repository to Vercel, and it will automatically detect the Next.js app.

- Framework: Next.js
- Build command: `npm run build`
- Output directory: `.next`

## Content

Articles are stored in `content/articles` as MDX files. Each article supports frontmatter fields for:

- `title`
- `subtitle`
- `slug`
- `summary`
- `publishDate`
- `updatedDate`
- `tags`
- `topic`
- `featured`
- `readingTime`
- `coverImage`

## Notes

- Metadata is generated for every page and individual article.
- The site includes `public/robots.txt` and `app/sitemap.ts` for SEO.
- The `components/MdxComponents.tsx` file maps MDX components for callouts, figures, code blocks, and quotes.
