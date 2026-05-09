# RankFrame SEO Audit

Same playbook applied to `https://rankframe.com/` as the Framer audit. Source-level inspection of the homepage HTML, robots.txt and sitemap.xml.

---

## 1. Head-level signals (homepage)

| Signal | Status | Value |
|---|---|---|
| `<title>` | OK | "RankFrame: The First Native SEO Plugin for Framer" |
| `<meta name="description">` | OK | "The only comprehensive SEO app built inside Framer. AI meta tags, schema markup, Google indexing, image alt text, and keyword tracking in one workspace." |
| Canonical | OK | `https://rankframe.com/` |
| Robots meta | OK | `max-image-preview:large` |
| Viewport / charset / `lang` | OK (`lang` defaults — verify) |
| OG tags | OK | type, title, description, image, url |
| Twitter Card | OK | `summary_large_image`, title, desc, image |
| Favicon | OK (single asset reused for light/dark/apple-touch) |
| `google-site-verification` | OK | 1 token |
| `preconnect` | OK | `fonts.gstatic.com` (×2) |
| `modulepreload` graph | OK | Framer default |
| **JSON-LD structured data** | **MISSING** | Zero blocks — no Organization, no SoftwareApplication, no FAQ |
| **LCP image preload** | **MISSING** | No `rel="preload" as="image"` for hero |
| **hreflang** | N/A (single language — fine) |

**Mismatch with own marketing.** The llms.txt advertises "schema markup generation" as a flagship feature, yet rankframe.com itself ships **no JSON-LD**. Framer's homepage has Organization schema; RankFrame should at minimum publish `Organization` + `SoftwareApplication` + `FAQPage` (the homepage already has a FAQ section).

---

## 2. Robots.txt

```
User-agent: *
Allow: /
Sitemap: https://rankframe.com/sitemap.xml
```

- Open crawl. Fine for a small site.
- **No parameter-disallow rules** — not yet a problem (no faceted nav exists).
- **Missing** `Content-Signal: ai-train=yes, search=yes, ai-input=yes` — Framer opts into AI/AEO ingestion explicitly. RankFrame should too, since AEO is part of its pitch.
- Only one sitemap declared.

---

## 3. Sitemap.xml — the biggest leak

Only **5 URLs** listed:

```
/
/support
/policies/refund-policy
/policies/terms-conditions
/policies/privacy
```

But these URLs all return HTTP 200 and are **not in the sitemap** (live but orphaned from Google's discovery path):

| URL | Status | In sitemap? |
|---|---|---|
| `/docs` | 200 | NO |
| `/blogs` | 200 | NO |
| `/features/image-seo` | 200 | NO |
| `/support` | 200 | yes |
| `/pricing` | **404** | — (pricing is only an anchor `#pricing` on home) |
| `/compare` | **404** | — |

**Action:** regenerate sitemap to include `/docs`, every `/docs/{slug}` guide, `/blogs`, every `/blogs/{slug}` post, `/features/image-seo` and any other `/features/*` pages.

---

## 4. Homepage internal-link graph

The homepage carries only **7 unique `href`s** total (5 anchors + relative paths). Outbound destinations from home:

- `./` (self)
- `./#pricing` (anchor only)
- `./policies/privacy`
- `./policies/refund-policy`
- `./policies/terms-conditions`
- `./support`
- `https://dashboard.rankframe.com/auth/signin`

**Critical:** the homepage does NOT link to `/docs`, `/blogs`, or `/features/image-seo`. These pages exist, are advertised in llms.txt, but receive **zero internal PageRank** from the highest-authority page on the site. This is the single biggest fix.

For comparison, Framer's homepage links to ~12 product pages, ~6 solution pages, ~12 compare pages, marketplace, experts, blog, stories, academy, and more — that footer-driven link graph is the engine behind their rankings.

---

## 5. Heading hierarchy issues

```
H1: The first native SEO plugin for Framer            ← good, single H1
H2: The only complete SEO solution made for Framer websites
H2: Built to solve Framer SEO problems other tools ignore
H2: Comprehensive Image SEO
H2: 404 Monitor
H2: Automatic Schema Generator
H2: Submit Indexing
H2: Tools that scale with your Framer business
H2: Built for designers. Trusted by agencies.
H2: 0 Hours +     ← stat counter placeholder, indexed as heading
H2: 0 Hours +     ← duplicated
H2: 0 X           ← stat counter placeholder
H2: 0 X
H2: 0%
H2: 0%
H2: Pricing that scales with your Framer portfolio
H2: Frequently asked questions about SEO for Framer
H3: $9, $9, $24, $24, $15, $15, $40, $40, $9, $9, $35, $35   ← duplicates from monthly/yearly toggle
```

Problems:
1. **Animated counter placeholders** ("0 Hours +", "0 X", "0%") render as `<h2>` in source — these become headings in Google's eyes. They should be `<span>` / `<div>` with aria labels, not headings.
2. **Every pricing tier H3 appears twice** because both monthly and yearly variants are in the DOM and toggled by JS. To a crawler this looks like duplicate content. Either render only the active state server-side or wrap inactive in `hidden` + `aria-hidden`.
3. The four key feature H2s (Image SEO / 404 Monitor / Schema Generator / Submit Indexing) are good — but they are not separate URLs. Each should become a feature page (`/features/image-seo` exists; the other three should follow), each ranking for its own keyword cluster, each linked from home.

---

## 6. Performance / Core Web Vitals

- `preconnect` to `fonts.gstatic.com`: ✓
- `modulepreload` graph for Framer's JS bundle: ✓ (default)
- **LCP preload missing.** Framer's homepage explicitly preloads its hero PNG with `imagesrcset`/`imagesizes`. RankFrame doesn't — the hero will be discovered late by the browser.
- No custom INP scheduler (Framer ships one). Probably fine for a small site, but worth knowing.

---

## 7. Side-by-side vs Framer

| Lever | Framer | RankFrame | Gap |
|---|---|---|---|
| Single canonical | ✓ | ✓ | — |
| OG / Twitter | ✓ | ✓ | — |
| JSON-LD | Organization | **none** | Add Organization + SoftwareApplication + FAQPage |
| LCP image preload | ✓ | ✗ | Add `rel=preload imagesrcset` |
| Sitemap coverage | 50+ URLs (+ marketplace mega-sitemap) | **5 URLs** | Add docs, blogs, feature pages |
| Homepage internal links | ~80+ to topic clusters | **7** | Link to docs, blog, features from home + footer |
| Comparison pages | 12 (`/compare/framer-vs-*`) | **0** | Build `/compare/rankframe-vs-yoast`, `vs-screaming-frog`, `vs-schema-dev`, `vs-search-console`, `vs-semrush` |
| Solutions / use-case pages | 6 (`/solutions/*`) | **0** | Build for "Framer SEO for agencies", "Framer schema markup", "Framer image alt text", etc. |
| Programmatic content | Marketplace, experts | **none** | Limited surface — but template/plugin gallery could become one |
| `Content-Signal` opt-in | ✓ | ✗ | Add to robots.txt |
| Robots parameter rules | extensive | none | Not needed yet |
| Multiple GSC verifications | 4 | 1 | Fine |

---

## 8. Page tree (everything currently reachable)

```
rankframe.com/
├── /                                  ← homepage (only page in nav)
├── /docs                              ← 200, NOT in sitemap, NOT linked from home
│   └── /docs/{slug}                   (per llms.txt: setup, meta-tags, schema, indexing,
│                                       sitemap-push, 404-monitor, audit, image-seo,
│                                       keyword-tracker, page-speed, page-level-seo)
├── /blogs                             ← 200, NOT in sitemap, NOT linked from home
│   └── /blogs/{slug}                  (Framer SEO tutorials, audits, ranking strategy)
├── /features/
│   └── /features/image-seo            ← 200, only feature page that exists
│       (missing: /features/schema-markup, /features/google-indexing,
│                 /features/404-monitor, /features/keyword-tracker,
│                 /features/page-speed, /features/seo-audit)
├── /support                           ← in sitemap
├── /policies/
│   ├── /policies/privacy              ← in sitemap
│   ├── /policies/refund-policy        ← in sitemap
│   └── /policies/terms-conditions     ← in sitemap
└── (external) dashboard.rankframe.com/auth/signin
```

llms.txt also references `/policies` (404), `/pricing` (404), and `/sitemap.xml` (200). Pricing exists only as `#pricing` anchor — no standalone URL to rank.

---

## 9. Prioritized fix list

**P0 — do this week**
1. Regenerate `sitemap.xml` to include `/docs`, every `/docs/{slug}`, `/blogs`, every `/blogs/{slug}`, `/features/image-seo`, and any new feature pages.
2. Link to `/docs`, `/blogs`, `/features/image-seo` from the homepage (header nav and/or footer). These pages currently have zero internal links from the home.
3. Add JSON-LD on every page:
   - Homepage: `Organization` + `SoftwareApplication` (with offers for $15/$108/$40/$288 plans, 7-day free trial) + `FAQPage` (the homepage already has Q&A content).
   - Docs: `TechArticle` or `HowTo` per page + `BreadcrumbList`.
   - Blog posts: `BlogPosting` + `BreadcrumbList`.
4. Fix heading abuse: the "0 Hours +", "0 X", "0%" counters should not be `<h2>`. Convert to `<div>` / `<span>`.
5. Fix duplicate pricing H3s (only render the active monthly/yearly state in the DOM, hide the other with `hidden`).

**P1 — next 2-4 weeks**
6. Build a real `/pricing` page (canonical destination for pricing-intent searches).
7. Build the missing `/features/*` pages (schema-markup, google-indexing, 404-monitor, keyword-tracker, page-speed, seo-audit). Each becomes a ranking surface for its keyword cluster.
8. Build `/compare/*` pages — RankFrame's strongest SEO opportunity:
   - `rankframe-vs-yoast`, `rankframe-vs-rank-math`
   - `rankframe-vs-screaming-frog`
   - `rankframe-vs-search-console`
   - `rankframe-vs-schema-dev`
   - `rankframe-vs-semrush`, `rankframe-vs-ahrefs`
   - "Best SEO plugin for Framer" round-up page
9. Add `Content-Signal: ai-train=yes, search=yes, ai-input=yes` to robots.txt (consistent with the AEO positioning in llms.txt).
10. Preload the hero LCP image with `<link rel="preload" as="image" imagesrcset=...>`.

**P2 — the moat**
11. Programmatic surface: a public template/plugin/component gallery (mirrors Framer's marketplace play) gives thousands of long-tail URLs.
12. Customer story pages (`/stories/{customer}`) for E-E-A-T.
13. Author bios on docs/blog posts with `Person` schema.
14. Submit both sitemaps in Google Search Console; monitor coverage weekly.

---

## 10. One-paragraph summary

RankFrame's homepage technical SEO basics are fine (canonical, OG, Twitter, robots-meta, preconnect, GSC verified) — but the site is essentially a single-page brochure to Google: the sitemap lists only 5 URLs, the homepage links to only 5 internal destinations, the docs and blog are orphaned from discovery, and there is **no structured data** on a site whose entire pitch includes "schema markup generation." The fastest wins are (1) put the existing `/docs` and `/blogs` and `/features/*` into the sitemap and link them from the homepage, (2) ship JSON-LD (Organization + SoftwareApplication + FAQPage), and (3) start a `/compare/*` cluster — the same play that drives a meaningful share of Framer's own organic traffic.
