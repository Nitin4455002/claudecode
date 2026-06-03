# RankFrame — Master Session Memory
*Last updated: 2026-06-03. Start any new session by reading this file first.*

---

## 1. Product + Company

- **Product:** RankFrame — the first native SEO plugin built inside Framer
- **Company:** 7 Seers Media
- **Owner/Admin:** Nitin (nitinhazeldine@gmail.com, 7seersmedia@gmail.com)
- **Member:** Lingfei (lingfei@anytimeai.ai)
- **Site:** https://rankframe.com
- **Plugin:** https://www.framer.com/marketplace/plugins/rankframe/
- **Dashboard:** https://dashboard.rankframe.com
- **Support contact:** support@rankframe.com
- **X:** @Rank_Frame

### Pricing
- Personal: $15/mo or $108/year (1 site, all features)
- Agency: $40/mo or $288/year (unlimited Framer sites)
- Yearly saves 40%. 7-day free trial.

### Brand voice
Dark, premium, technical. Purple (#BA24D5) as the hero colour. Inter + JetBrains Mono. No em dashes ever.

---

## 2. Git State

- **Repo:** nitin4455002/claudecode
- **Active branch:** `rankframe-main` (renamed from `claude/review-chat-error-mz8i8`)
- **Status:** Clean working tree, all pushed
- **Key commits:** db47c00 (accordion nav unified across all prototypes), a446c98 (Figma plugin + session memory), db82c08 (session memory v2)

---

## 3. Framer Plugin — Technical Architecture

### API constraints
- `setCustomCode({location:"headEnd"})` — site-wide head injection ONLY. No per-page head API exists in Framer.
- `node.setText()` — write to TextNode on canvas
- `framer.notify()` — toast notifications
- `isAllowedTo()` — permission gating for members vs admin
- Page list source: published-site crawl + sitemap.xml (NOT `getProjectInfo()` which has no page list)

### Schema injection system
- Every schema block is fenced with marker comments:
  `<!-- RankFrame:<TYPE>:<start|end> source=<auto|llmseo> -->`
- Single `injectIntoFramer()` helper writes all schemas — Schema and LLM SEO never clobber each other
- **Single-owner FAQPage contract:** LLM SEO and Schema show banners/locks when the other owns FAQPage on a given page
- Speakable schema reserved for LLM SEO only, never appears in Schema suggestions

### AI model
- `claude-sonnet-4-6` for detection and generation
- Detection: POST /api/schema/analyze with page HTML + existing markers to prevent duplicates

### Sitemap bug (Matias support case — salesdose.io)
- **Bug:** RankFrame reads `<sitemapindex>` child `<loc>` entries as page URLs instead of recursing into child sitemaps
- **Fix logic:** `collectPageUrls(sitemapUrl, depth, seen)` — detect root element type: if `<sitemapindex>` recurse into children; if `<urlset>` extract `<loc>` entries as page URLs. Max depth 5, dedup by seen set, handle gzip.
- **Acceptance criteria:** Multi-locale Framer sites (which generate per-locale sitemaps under a sitemap index) must show actual page URLs in Target Page dropdown, not sitemap file URLs.

### Multi-user permission model
- Admin: full access, purple avatar, "7M" initials
- Member: restricted via `isAllowedTo()`, teal avatar, initials based on name (e.g., "L" for Lingfei)
- Permission-denied screens, seat management, invite flow, concurrent lock, activity log — all prototyped in rankframe-multiuser-prototype-v2.html

### GSC integration
- Uses GSC URL Inspection API (`urlInspection/index:inspect`)
- NOT the Rich Results Test API (that does not exist for plugin use)

---

## 4. Prototype Files (all complete on rankframe-main)

| File | Description | Screens |
|------|-------------|---------|
| rankframe-prototypes.html | 3-card chooser: Content Engine + Multi-User + Schema/LLM SEO | — |
| rankframe-schema-llmseo-prototype-v1.html | Schema + LLM SEO combined prototype | 49 screens |
| rankframe-multiuser-prototype-v2.html | Multi-user flows (source of truth for accordion nav) | Full |
| rankframe-content-engine-prototype-v2.html | Content Engine plugin panel | Full |
| rankframe-content-engine-spec.html | Content Engine feature spec | — |
| rankframe-schema-prototype-v2.html | Earlier schema-only prototype | — |
| rankframe-schema-prototype-v3.html | Iterated schema prototype | — |

### Prototype chooser (rankframe-prototypes.html)
- 3-card grid: `repeat(3, minmax(0, 320px))`, max-width 1024px, responsive to 2 then 1 col
- Hash routing: `#content`, `#multiuser`, `#schema`
- Templates: `<template id="tpl-content|tpl-multi|tpl-schema">`
- Mount: `var tplId={content:"tpl-content",multiuser:"tpl-multi",schema:"tpl-schema"}[target]`

### Accordion nav (unified across ALL 3 prototypes)
```
Groups: Setup > Optimize > Index > Monitor > Content Engine
```
- Setup: Global Settings
- Optimize: Pages, Images, Schema (NEW badge), LLM SEO (NEW badge)
- Index: Submit URLs, Sitemap
- Monitor: SEO Analyzer, Keywords, Speed, 404 Monitor
- Content Engine (NEW badge): Calendar, Research Hub, Draft Queue, Internal Links, Sync

**CSS classes:** `.plg-acc-group` `.plg-acc-head` `.plg-acc-children` `.plg-acc-item` `.plg-acc-dot` `.plg-acc-chev` `.plg-acc-ico` `.plg-acc-label` `.plg-acc-new`

**JS:** `PLUGIN_NAV_GROUPS` array + `pluginSubNav(activeKey, role)` function renders accordion. Role determines user card: admin=purple "7M", member=teal "L".

### Plugin dimensions
- `--plugin-w: 880px` / `--plugin-h: 720px` / `--sub-nav-w: 240px`
- Header: 42px. Sidebar: 240px. Main content: 640px.

### 49 screens in rankframe-schema-llmseo-prototype-v1.html
Covers: first-run, bulk scan, page picker, detect, suggest, generate, edit JSON, library, citation, entity map, speaker, FAQ, conflict/lock, GSC not connected, quota exceeded, empty states, error/retry, multi-user permission denied, seat management, invite flow, concurrent lock, activity log — all with annotations.

---

## 5. Design Tokens (CSS Variables from prototypes)

```css
/* Brand */
--rf-purple: #BA24D5
--rf-purple-btn: #AB33CE
--rf-purple-btn-2: #C234E0
--rf-purple-deep: #7A1A8C
--rf-purple-soft: rgba(186,36,213,0.10)
--rf-purple-soft-2: rgba(186,36,213,0.06)
--rf-purple-line: rgba(186,36,213,0.35)
--rf-purple-glow: rgba(186,36,213,0.30)

/* Backgrounds */
--rf-bg: #000000
--rf-bg-elev: #050608
--rf-bg-card: #0C0E11
--rf-bg-card-2: #131519
--rf-bg-card-3: #1C1F25
--rf-bg-active: #202937
--rf-bg-input: #08090B

/* Borders */
--rf-border: #1A1D24
--rf-border-2: #262A33
--rf-border-strong: #373C46

/* Text */
--rf-text: #FFFFFF
--rf-text-2: #D5D8DE
--rf-text-muted: #9BA1AE
--rf-text-dim: #8A91A0
--rf-text-faint: #7A8290

/* Semantic */
--rf-red: #DD524C
--rf-red-soft: rgba(221,82,76,0.12)
--rf-amber: #F5B919
--rf-amber-2: #F8C849
--rf-amber-soft: rgba(245,185,25,0.10)
--rf-green: #4ADE80
--rf-green-2: #22C55E
--rf-green-soft: rgba(74,222,128,0.12)
--rf-blue: #3B82F6
--rf-teal: #14B8A6
--rf-orange: #F97316
--rf-pink: #EC4899

/* Radius */
--rf-radius-sm: 6px
--rf-radius-md: 8px
--rf-radius-lg: 12px
--rf-radius-pill: 999px

/* Focus ring */
--rf-focus: 0 0 0 2px var(--rf-bg), 0 0 0 4px var(--rf-purple)

/* Shadows */
--rf-shadow-md: 0 8px 24px rgba(0,0,0,0.5)
--rf-shadow-lg: 0 20px 60px rgba(0,0,0,0.7)
--rf-glow-purple: 0 0 40px rgba(186,36,213,0.15)
```

---

## 6. Schema Setup Logic (rankframe.com site — paste-ready)

**File:** seo/rankframe-seo-paste-ready.md

### Site-wide head (Site Settings > General > Custom Code > Start of head)
Paste once. Contains:
- Organization entity with `@id: https://rankframe.com/#organization`
- WebSite entity with SiteLinks SearchAction
- SoftwareApplication schema

### Framer CMS variable filter rules
| Situation | Syntax |
|-----------|--------|
| Text field in JSON string value | `{{Field Name \| json}}` |
| Pre-built JSON in CMS field | `{{Field Name \| unsafeRaw}}` |
| URL slug in hard-coded URL | `{{Slug}}` (no filter) |
| Date field | `{{Created \| json}}` |

### Schema types implemented for rankframe.com
- Organization (`@id: #organization`)
- WebSite + SiteLinks SearchAction
- SoftwareApplication
- FAQPage (homepage FAQ section)
- BreadcrumbList (per-page)
- Article (blog posts)
- WebPage (docs pages)

### SEO audit findings (seo/rankframe-seo-audit.md)
- Homepage had zero JSON-LD at audit time — all schema now added via paste-ready doc
- Sitemap only had 5 URLs — missing /docs, /blogs, all slugs, /features/*
- robots.txt missing parameter-disallow rules and AI signal headers
- LCP image had no preload hint

---

## 7. LLM SEO Feature (in prototype)

LLM SEO is a separate nav section from Schema with its own tab system. Key screens:
- **Citation:** Structured citations for LLM answer engines
- **Entity Map:** Brand entities, topics, named entities
- **Generate / FAQ:** AI-generated FAQ content (speakable schema)
- **Detect existing:** Scan page for existing LLM-optimised content
- **Conflict:** Banner/lock when Schema already owns FAQPage

### FAQPage ownership rule
LLM SEO owns FAQPage if source=llmseo in marker. Schema cannot inject FAQPage if LLM SEO owns it, and vice versa. Banner shown to admin; members see lock screen.

### LLM SEO tabs
Overview, Citation, Entity Map, FAQ, Settings. Locked tabs shown with lock icon for members.

---

## 8. Blog Content (34 posts in /blog/)

All 34 HTML files are complete, styled in RankFrame dark theme, published-ready:

| File | Topic |
|------|-------|
| B01 | Is Framer good for SEO? |
| B02 | Best Framer SEO plugin |
| B03 | Framer SEO checklist |
| B04 | Framer schema markup |
| B05 | Framer vs WordPress SEO |
| B06 | Submit Framer site to Google |
| B07 | Framer alt text |
| B08 | Framer SEO audit |
| B09 | Framer keyword tracker |
| B10 | Framer 404 errors |
| B11 | Framer CMS SEO |
| B12 | Framer Core Web Vitals |
| B13 | How to add meta description in Framer |
| B14 | Verify Framer site in Google Search Console |
| B15 | Framer sitemap |
| B16 | How to add JSON-LD to Framer |
| B17 | Framer site not indexed |
| B18 | Framer canonical tags |
| B19 | Optimize Framer images for SEO |
| B20 | Track keyword rankings in Framer |
| B21 | Speed up Framer site |
| B22 | Add Open Graph to Framer |
| B23 | What is schema markup |
| B24 | What is JSON-LD |
| B25 | What is a sitemap |
| B26 | What are Core Web Vitals |
| B27 | What is Google Search Console |
| B28 | How to do keyword research |
| B29 | What are meta tags |
| B30 | What is alt text |
| B31 | What is technical SEO |
| B32 | What is on-page SEO |
| B33 | What is Google Indexing API |
| B34 | What is a 404 error |

---

## 9. SEO Assets (/seo/ folder)

| File | Description |
|------|-------------|
| rankframe-robots.txt | Full robots.txt — allows all AI crawlers (GPTBot, ClaudeBot, Perplexity, etc.), blocks /api/, /auth/, tracker params |
| rankframe-llms.txt | llms.txt for AI discovery — product overview, docs index, all feature docs with URLs |
| rankframe-seo-paste-ready.md | Complete JSON-LD schemas paste-ready for rankframe.com site settings and each page type |
| rankframe-seo-audit.md | Full SEO audit of rankframe.com — head signals, robots, sitemap gaps, internal link graph |
| rankframe-email-master-plan-corrected.md | 16-email automation plan for MailerLite (4 sequences) |
| rankframe-image-placement-guide.md | Exact image placement instructions for all docs pages |

### llms.txt coverage
All docs URLs listed: Getting Started, Global Settings, Keywords, Schema, Indexing, Image SEO, Audit/Speed, 404 Monitor, Account, Billing, CMS docs.

---

## 10. Email Automation (seo/rankframe-email-master-plan-corrected.md)

**Platform:** MailerLite. **Total:** 16 emails across 4 sequences.

| Sequence | Trigger | Emails | Goal |
|----------|---------|--------|------|
| 1. Free Trial | Joins group: Free Trial Users | 7 (Days 0-6) | Convert to paid |
| 2. Win-Back | Trial ends, no upgrade | 3 (Days 8-14) | Re-engage |
| 3. Personal Onboarding | Upgrades to Personal | 3 (Days 2-21) | Retain + upsell annual |
| 4. Agency Onboarding | Upgrades to Agency | 3 (Days 2-21) | Retain + upsell annual |

**Segmentation fork:** Day 2 Email 3 has two tracked links ("Just my own site" / "Managing client sites"). Clicking adds to Solo or Agency group. No click = Solo path default.

**Email 1:** Welcome + Personalization (complete personalization first — sets up all AI outputs)
**Email 2:** Quick win — Google Indexing submit (30 seconds)
Full copy written for all 16 emails.

---

## 11. Social Media Content

### rankframe-launch-posts.html
4-week launch post plan. Platforms: X (Twitter), Reddit, Framer Community.
Accounts: @Rank_Frame + Nitin's personal account.
Includes: video script callouts, copy per post, copy buttons, schedule table.

### rankframe-week1-posts.html
Week 1 marketing posts (dark theme UI). Specific post copy for each platform day by day.

### rankframe-launch-posts.html also contains
Schedule table with all posts by day, platform, account, type (text/image/video).

---

## 12. Explainer Video Script

**File:** rankframe-explainer-video-script.html
**Duration:** 40 seconds
**Style:** Fast-paced, dark UI background, RankFrame purple accent
**Structure:** Problem → Solution → Features → CTA
Full voiceover script + on-screen text + visual direction written.

---

## 13. Documentation Architecture

**From rankframe.md / llms.txt — 15 doc modules:**
1. Getting Started (install, connect, dashboard, plans, upgrade)
2. Global SEO (site-wide meta, AI meta generation)
3. Keywords (focus keywords, metrics, analysis, tracker)
4. Schema (injection overview, all schema types: Person/Org, Article, Book, Restaurant, Service + more)
5. Google Indexing (instant indexing, submit URLs, GSC setup, analytics, history)
6. Image SEO (overview, explorer/filters, single alt text, bulk generation, global suffix, CSV export)
7. SEO Audit (overview, site-wide audit, page speed)
8. 404 Monitor
9. Account (settings, personalization)
10. Billing (plans, upgrade, AI credits)
11. CMS (CMS collections, template pages, variable filter rules)
12. Changelog
13. Policies (refund, terms, privacy)
14. Support
15. FAQ

---

## 14. Figma Design System

### File
- **Name:** RankFrame Design System
- **File key:** MlvOoXk04ToPFwHXfkefFM
- **URL:** https://www.figma.com/design/MlvOoXk04ToPFwHXfkefFM/RankFrame-Design-System
- **Team:** 7 Seers Media (team::1437777503145820666, student plan, Full seat)

### MCP status
- Figma connector enabled in Claude Code (blue toggle in Connectors menu)
- `whoami` and `create_new_file` work
- ALL canvas tools (`use_figma`, `get_metadata`, etc.) fail: "This figma file could not be accessed"
- Root cause: `use_figma` needs local Figma MCP bridge (localhost). Claude Code runs in a remote sandbox that cannot reach localhost on user's machine.
- **Solution:** Run `rankframe-figma-plugin.js` in Figma console.

### How to run the plugin script
1. Figma desktop, open RankFrame Design System file
2. Plugins > Development > Open Console (if not visible: Figma menu > Preferences > Show plugin development options)
3. Paste entire contents of `rankframe-figma-plugin.js`, press Enter
4. Builds all pages/variables/styles/components in ~15 seconds

### What gets built (all coded in rankframe-figma-plugin.js)
**7 pages:** Cover, Color Tokens, Typography, Spacing + Radius, Components - Base, Components - Plugin UI, Screens

**Color variables (30+):**
- brand/purple #BA24D5, brand/purple-dark #8B1AAA, brand/purple-light #D966E8
- bg/base #000, bg/card #0C0E11, bg/surface #161B22, bg/elevated #1C2128, bg/overlay #21262D
- border/default #21262D, border/subtle #30363D, border/strong #484F58, border/focus #BA24D5
- text/primary #E6EDF3, text/secondary #8B949E, text/muted #484F58
- semantic success/warning/error/info (each with default, subtle, text variants)
- accent/teal #39C5CF, accent/pink #E040FB, accent/orange #FB8C00

**Spacing:** 0/2/4/6/8/10/12/16/20/24/32/40/48/64px
**Radius:** 0/4/6/8/12/16/9999px
**Opacity:** 0/10/20/40/60/80/100%

**24 text styles:** Display 2XL-LG (Inter Bold), Heading H1-H5, Body LG-XS (Regular+Medium), Label LG-XS (Medium), Code MD-SM (JetBrains Mono Regular+Medium)

**30 color styles + 4 effect styles:** Shadow SM/MD/LG + Purple Glow

**Base components:** Buttons (6 variants), Badges (6 types), Inputs (4 states), Toggles, Score rings, Toasts, Tabs

**Plugin UI components:** 880x720 Chrome, Sidebar accordion nav, User cards (Admin/Member), Stat cards, Modals

---

## 15. Other Files

| File | Description |
|------|-------------|
| rankframe.md | Master product reference (2061 lines) — complete product truth: features, pricing, personas, FAQs, glossary, comparisons, use cases |
| RankFrame-Master-Reference.docx | Word doc version of master reference |
| RankFrame-Email-Sequence.docx | Word doc of email sequence |
| build-prototypes.js | Build script for prototypes |
| build-schema.js | Build script for schema prototype |
| build_docx.py | Python script to build Word docs |
| schema-src/ | Source files (extra.css, nav.html, screens.js) for schema prototype build |
| seo-audit-7seersmedia.com-2026-05-02.pdf | PDF SEO audit of 7seersmedia.com |
| RankFrame-20260515T082006Z-3-001.zip | Archive of RankFrame screenshots/assets |

---

## 16. Support Cases Handled

### Matias (matias@salesdose.io) — Sitemap index bug
- **Issue:** Target Page dropdown shows sitemap files (sitemap_es.xml, sitemap_en.xml) instead of page URLs on his multi-locale Framer site
- **Root cause confirmed:** salesdose.io/sitemap.xml is a `<sitemapindex>` with 3 child sitemaps. RankFrame reads child `<loc>` entries as target pages instead of recursing.
- **Email sent:** Safe, non-assumptive reply asking for screen recording to confirm. Did not guess Framer localization as cause before verifying.
- **Dev fix writeup:** `collectPageUrls(sitemapUrl, depth, seen)` with sitemapindex vs urlset branching, recursion, dedup, gzip, max-depth guard.

---

## 17. CLAUDE.md Rules (permanent, no exceptions)

- **NEVER use em dashes (—)** in any output: chat, code comments, commits, PRs, emails, docs. Use commas, periods, parentheses, or colons instead.
- **NEVER guess or assume facts.** Verify directly before stating as fact. If unverifiable, say so explicitly.
