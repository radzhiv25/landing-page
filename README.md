# SSA Hunter Valley Landing Page

A Next.js landing page for SSA Hunter Valley — tennis academy, camps, performance programs, and world-class facilities.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Image Optimization (CDN)

Images are loaded from remote CDNs and optimized automatically through Next.js `Image`:

| Source | CDN | Usage |
|--------|-----|--------|
| [Unsplash](https://images.unsplash.com) | `images.unsplash.com` | Section photos (about, programs, facilities, etc.) |
| [Framer](https://framerusercontent.com) | `framerusercontent.com` | Background assets (quote section) |

### How it works

1. **Centralized URLs** — All image URLs live in [`lib/images.ts`](lib/images.ts). Use the helpers to request sized crops from the CDN:

   ```ts
   unsplash("photo-…", 1200)           // width-only crop
   unsplashCrop("photo-…", 900, 900)   // exact width × height crop
   ```

2. **CDN query params** — Unsplash supports `w`, `h`, `fit=crop`, `q`, and `auto=format` so the CDN delivers WebP/AVIF at the right dimensions before Next.js processes the file.

3. **Next.js Image** — The [`CoverImage`](components/cover-image.tsx) component uses `next/image` with `fill`, `object-cover`, and responsive `sizes` for lazy loading, srcset generation, and format conversion.

4. **Remote patterns** — Allowed hostnames are configured in [`next.config.ts`](next.config.ts). Add new CDN domains there before using them.

### Adding a new image

```ts
// lib/images.ts
export const myImage = unsplashCrop("photo-your-id", 1000, 750);
```

```tsx
<CoverImage src={myImage} alt="Descriptive alt text" sizes="50vw" />
```

Always provide meaningful `alt` text — it improves accessibility and SEO.

## SEO

The site includes several SEO basics out of the box:

| Feature | Location |
|---------|----------|
| Page title & meta description | [`app/layout.tsx`](app/layout.tsx) |
| Open Graph & Twitter cards | [`app/layout.tsx`](app/layout.tsx) |
| Canonical URL | [`app/layout.tsx`](app/layout.tsx) |
| `robots.txt` | [`app/robots.ts`](app/robots.ts) |
| `sitemap.xml` | [`app/sitemap.ts`](app/sitemap.ts) |
| JSON-LD structured data | [`app/layout.tsx`](app/layout.tsx) (`SportsActivityLocation`) |
| Semantic HTML | `<main>`, `<section>`, heading hierarchy, `aria-labelledby` |
| Optimized images | `next/image` with alt text and responsive sizes |
| `lang="en"` on `<html>` | [`app/layout.tsx`](app/layout.tsx) |

### Production checklist

Set the public site URL so metadata, sitemap, and canonical links resolve correctly:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Further SEO improvements

- Replace placeholder copy with final marketing content
- Add a social sharing image (`openGraph.images`)
- Expand structured data (events, courses, FAQ)
- Add per-page metadata if the site grows beyond a single page

## Project Structure

```
app/                  # Next.js App Router (layout, page, robots, sitemap)
components/           # UI components and page sections
lib/images.ts         # CDN image URLs
lib/site.ts           # Site name, description, SEO config
```

## Deploy

Deploy on [Vercel](https://vercel.com) or any platform that supports Next.js. Set `NEXT_PUBLIC_SITE_URL` in your environment variables.
