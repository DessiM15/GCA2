# SEO & i18n Enhancement — Handoff Notes

## Phase 1: SEO Foundation (COMPLETED)

### What was done:
- **robots.ts** — Generated `robots.txt` via Next.js App Router convention (`src/app/robots.ts`). Allows all crawlers, references sitemap at `https://www.gulfcoastalloys.net/sitemap.xml`. Uses `export const dynamic = "force-static"` for static export compatibility.
- **sitemap.ts** — Generated `sitemap.xml` via Next.js App Router (`src/app/sitemap.ts`). Includes all 5 pages + 3 blog posts with priorities and change frequencies. Auto-includes new blog posts from `src/data/posts.ts`.
- **Open Graph + Twitter Cards** — Added to ALL pages (layout.tsx, about, contact, partners, blog, blog/[slug]). Blog posts use `og:type=article` with `publishedTime` and `section`. Partners page uses `partners-img.jpg` as its OG image; all other pages use `hero-1.jpg`.
- **Canonical URLs** — Added `alternates.canonical` to every page via Next.js Metadata API.
- **Title template** — Root layout uses `title.template: "%s — Gulf Coast Alloys, LLC"` so child pages just set `title: "About"` and get "About — Gulf Coast Alloys, LLC".
- **Robots meta** — Added `index: true, follow: true` with googleBot-specific directives (`max-image-preview: large`, `max-snippet: -1`, `max-video-preview: -1`).
- **Preconnect hints** — Added `preconnect` and `dns-prefetch` for `cdnjs.cloudflare.com` (Font Awesome CDN).
- **GA4 + Search Console** — Added commented-out placeholders in `layout.tsx <head>`. Client needs to provide their GA4 Measurement ID and Search Console verification code.
- **Image optimization** — Documented in `next.config.ts` that built-in optimization requires a Node.js server (incompatible with `output: "export"`). Options: deploy to Vercel, use a custom loader, or manually optimize images.

### Key configuration:
- **Site domain**: `https://www.gulfcoastalloys.net` (set in `metadataBase` in layout.tsx and `BASE_URL` in sitemap.ts)
- **Static export**: Both robots.ts and sitemap.ts require `export const dynamic = "force-static"` to work with `output: "export"`

### Build status: Passing (13/13 static pages generated)

---

## Phase 2: Structured Data + Blog SEO (NEXT)

### What needs to be done:
1. **JSON-LD structured data** — Add `Organization`, `LocalBusiness`, and `WebSite` schema to root layout
2. **Article schema** — Add `Article` JSON-LD to each blog post page
3. **Blog meta descriptions** — Review and hand-tune for better click-through rates
4. **Breadcrumb structured data** — Add `BreadcrumbList` schema to blog posts and inner pages

### Files to modify:
- `src/app/layout.tsx` — Organization + LocalBusiness + WebSite JSON-LD
- `src/app/blog/[slug]/page.tsx` — Article JSON-LD + BreadcrumbList
- `src/app/about/page.tsx` — BreadcrumbList
- `src/app/contact/page.tsx` — BreadcrumbList
- `src/app/partners/page.tsx` — BreadcrumbList
- `src/app/blog/page.tsx` — BreadcrumbList
- `src/data/posts.ts` — May need author field added

---

## Phase 3: i18n Infrastructure + Language Switcher (FUTURE)

### What needs to be done:
1. Build translation provider/context (client-side, since this is for visitors not SEO)
2. Extract all English strings into base translation JSON
3. Build globe + dropdown language switcher component
4. Integrate switcher into Navbar
5. Add hreflang tags to metadata

### Technical approach decided:
- Client-side translation (not route-based) since the goal is for Korean/Vietnamese visitors who already found the site, not for ranking in those languages
- Globe icon + dropdown in the Navbar (matching the navy/steel-blue design)

---

## Phase 4: Translations + Accessibility + Final Polish (FUTURE)

### What needs to be done:
1. Korean (한국어) translation file
2. Vietnamese (Tiếng Việt) translation file
3. Accessibility pass on language switcher (ARIA labels, keyboard nav, focus management)
4. Final QA

---

## Client action items:
- [ ] Provide Google Analytics 4 Measurement ID (for layout.tsx)
- [ ] Set up Google Search Console and provide verification code (for layout.tsx)
- [ ] Favicon suite (client is handling this)
