# RankFrame — Paste-Ready SEO + Schema Document (v2)

Site URL: `https://rankframe.com`  
Updated: 2026-05-08  
Source: Framer JSON-LD official docs + schema.org best practices

---

### Critical Framer variable filter rules

| Situation | Syntax | Why |
|---|---|---|
| Text field used inside a JSON string value | `{{Field Name \| json}}` | Escapes quotes/special chars; Framer wraps value in `"…"` |
| Pre-built JSON stored in CMS field | `{{Field Name \| unsafeRaw}}` | Outputs the raw JSON object as-is; no escaping |
| URL slug embedded in a hard-coded URL | `{{Slug}}` (no filter) | Slugs are safe chars; `| json` would add unwanted quotes |
| Date field | `{{Created \| json}}` or `{{Updated \| json}}` | Built-in Framer variables; always use `| json` |

> ⚠️ **`| unsafeRaw` note:** Only use this on fields where *you* control the content (your own CMS schema fields). Never on user-submitted content.

---

## 0) SITE-WIDE — Site Settings → General → Custom Code → Start of `<head>`

Paste this **once**. It applies to every page. Contains the entity anchors that all per-page schemas reference.

```html
<!-- ===== Organization entity ===== -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rankframe.com/#organization",
  "name": "RankFrame",
  "url": "https://rankframe.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://framerusercontent.com/images/XE1sqaQyYF9jXODewkOIlcQ3KKo.png",
    "width": 512,
    "height": 512
  },
  "description": "RankFrame is the only comprehensive SEO plugin built natively inside Framer. Manage meta tags, schema markup, Google indexing, image alt text, and keyword tracking without leaving the Framer editor.",
  "foundingDate": "2025",
  "knowsAbout": [
    "Framer SEO",
    "Schema markup",
    "Structured data",
    "Google Indexing API",
    "Image SEO",
    "Keyword tracking",
    "Core Web Vitals",
    "Framer plugins"
  ],
  "sameAs": [
    "https://x.com/Rank_Frame",
    "https://www.framer.com/marketplace/plugins/rankframe/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "https://rankframe.com/support",
    "availableLanguage": ["English"]
  }
}
</script>

<!-- ===== WebSite entity + SiteLinks Search Box ===== -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://rankframe.com/#website",
  "url": "https://rankframe.com",
  "name": "RankFrame",
  "description": "The first native SEO plugin for Framer — schema, indexing, image SEO, keyword tracking, and audits inside the Framer editor.",
  "publisher": { "@id": "https://rankframe.com/#organization" },
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://rankframe.com/blogs?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>

<!-- ===== Global Twitter Card defaults ===== -->
<meta name="twitter:site" content="@Rank_Frame" />
<meta name="twitter:creator" content="@Rank_Frame" />
```

---

## 1) HOME — `/`  (Page node `udrpHeAWv`)

**Focus keywords:** framer seo plugin, rankframe, seo for framer, framer seo tool, native seo plugin framer

### Page Settings → SEO

- **SEO Title** (58 chars): `RankFrame — The First Native SEO Plugin for Framer`
- **SEO Description** (148 chars): `RankFrame is the only comprehensive SEO plugin built natively inside Framer. Schema, indexing, image SEO, keyword tracking — all in one place.`
- **Social Image:** upload a 1200×630 image (RankFrame dashboard + tagline)

### Page Settings → Custom Code → Start of `<head>`

```html
<!-- ===== SoftwareApplication ===== -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://rankframe.com/#software",
  "name": "RankFrame",
  "applicationCategory": "SEOApplication",
  "applicationSubCategory": "Framer Plugin",
  "operatingSystem": "Web, Framer",
  "url": "https://rankframe.com",
  "description": "Native Framer SEO plugin: schema generator, Google Indexing API, image SEO, keyword tracker, page speed, 404 monitor and SEO audit — inside the Framer editor.",
  "featureList": [
    "Meta tags manager (title and description)",
    "Automatic Schema Generator with 6+ structured data types",
    "Unlimited Google Indexing API submissions",
    "Sitemap push to Google",
    "24/7 404 Monitor",
    "Intelligent AI Audit with downloadable reports",
    "Image SEO — alt text, structure, image relevance, global brand suffix, CSV export",
    "Keyword Tracker (Google Search Console)",
    "Page Speed Intelligence (Core Web Vitals)",
    "Deep page-level SEO (4 on-page benchmarks)",
    "Two-level SEO controls (global and per-page)",
    "Centralised SEO dashboard"
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Personal (monthly)",
      "price": "15",
      "priceCurrency": "USD",
      "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" },
      "description": "1 Framer website. All features included.",
      "url": "https://dashboard.rankframe.com/auth/signin"
    },
    {
      "@type": "Offer",
      "name": "Personal (yearly)",
      "price": "108",
      "priceCurrency": "USD",
      "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1Y" },
      "description": "1 Framer website. 40% off vs monthly.",
      "url": "https://dashboard.rankframe.com/auth/signin"
    },
    {
      "@type": "Offer",
      "name": "Agency (monthly)",
      "price": "40",
      "priceCurrency": "USD",
      "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" },
      "description": "Unlimited Framer websites. All features included.",
      "url": "https://dashboard.rankframe.com/auth/signin"
    },
    {
      "@type": "Offer",
      "name": "Agency (yearly)",
      "price": "288",
      "priceCurrency": "USD",
      "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1Y" },
      "description": "Unlimited Framer websites. 40% off vs monthly.",
      "url": "https://dashboard.rankframe.com/auth/signin"
    }
  ],
  "author": { "@id": "https://rankframe.com/#organization" },
  "publisher": { "@id": "https://rankframe.com/#organization" }
}
</script>

<!-- ===== FAQPage (Home FAQ section) ===== -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is RankFrame a native Framer plugin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. RankFrame runs entirely inside the Framer editor as an official plugin. Nothing to install on your website, no embed codes, no external dashboards."
      }
    },
    {
      "@type": "Question",
      "name": "Can RankFrame add schema markup to my Framer site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. RankFrame's Automatic Schema Generator supports 6+ structured data types and injects them into your Framer site with one click."
      }
    },
    {
      "@type": "Question",
      "name": "Does RankFrame submit pages to Google for indexing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. RankFrame connects to the Google Indexing API and lets you submit individual URLs or your entire sitemap directly from within the Framer plugin."
      }
    },
    {
      "@type": "Question",
      "name": "How does the image SEO feature work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RankFrame's Image SEO automatically optimises alt text, image structure, and image relevance across every image on your Framer site. You can apply a global brand suffix that auto-appends to descriptions, and export the full image SEO report as a CSV."
      }
    },
    {
      "@type": "Question",
      "name": "Does RankFrame work for Framer agencies managing multiple sites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Agency plan covers unlimited Framer client websites under a single $40/month subscription ($288/year — 40% off). Every Personal feature is included."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free trial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Both the Personal ($15/mo or $108/year) and Agency ($40/mo or $288/year) plans include a 7-day free trial. Annual billing saves 40%, and all trial limitations are lifted the moment you subscribe."
      }
    }
  ]
}
</script>

<!-- ===== BreadcrumbList ===== -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankframe.com" }
  ]
}
</script>

<!-- ===== WebPage (ties the home page into the entity graph) ===== -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://rankframe.com/#webpage",
  "url": "https://rankframe.com",
  "name": "RankFrame — The First Native SEO Plugin for Framer",
  "isPartOf": { "@id": "https://rankframe.com/#website" },
  "about": { "@id": "https://rankframe.com/#software" },
  "publisher": { "@id": "https://rankframe.com/#organization" },
  "inLanguage": "en-US"
}
</script>
```

---

## 2) DOCS INDEX — `/docs`  (Page node `MEWeefl6o`)

**Focus keywords:** rankframe docs, framer seo guide, framer seo documentation, rankframe tutorial

### Page Settings → SEO

- **SEO Title:** `RankFrame Docs — Framer SEO Guides & Documentation`
- **SEO Description:** `Step-by-step guides for everything inside RankFrame: schema markup, Google indexing, image SEO, keyword tracking, audits, and Framer SEO best practices.`

### Page Settings → Custom Code → Start of `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://rankframe.com/docs#collectionpage",
  "name": "RankFrame Documentation",
  "url": "https://rankframe.com/docs",
  "description": "Complete documentation for the RankFrame Framer plugin — setup, schema, indexing, image SEO, keyword tracking, and SEO audits.",
  "isPartOf": { "@id": "https://rankframe.com/#website" },
  "publisher": { "@id": "https://rankframe.com/#organization" },
  "inLanguage": "en-US"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankframe.com" },
    { "@type": "ListItem", "position": 2, "name": "Docs", "item": "https://rankframe.com/docs" }
  ]
}
</script>
```

---

## 3) DOCS TEMPLATE — `/docs/:slug`  (Page node `Mw_xi7paI`)

**These CMS fields store complete pre-built JSON** → use `| unsafeRaw` so Framer outputs the raw object without escaping it.

### Page Settings → SEO (use variable picker)

- **SEO Title:** `{{SEO Title | json}}` ← type this into the SEO Title field
  *(If the docs CMS doesn't have an SEO Title field, use:* `{{Title}} — RankFrame Docs` *)*
- **SEO Description:** `{{Short Description | json}}`
- **Social Image:** bind to CMS image field if one exists

### Page Settings → Custom Code → Start of `<head>`

```html
<!-- TechArticle (pre-built JSON stored per doc item) -->
<script type="application/ld+json">{{Schema Article | unsafeRaw}}</script>

<!-- FAQPage (pre-built JSON stored per doc item) -->
<script type="application/ld+json">{{Schema: FAQ | unsafeRaw}}</script>

<!-- BreadcrumbList (pre-built JSON stored per doc item) -->
<script type="application/ld+json">{{Schema: Breadcrumb | unsafeRaw}}</script>
```

> **If the CMS schema fields are empty for some doc items**, this inline fallback uses `| json` on all string values and `{{Updated | json}}` (Framer built-in) for the date:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": {{Title | json}},
  "description": {{Short Description | json}},
  "url": "https://rankframe.com/docs/{{Slug}}",
  "datePublished": {{Updated | json}},
  "dateModified": {{Updated | json}},
  "inLanguage": "en-US",
  "author": { "@id": "https://rankframe.com/#organization" },
  "publisher": { "@id": "https://rankframe.com/#organization" },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://rankframe.com/docs/{{Slug}}"
  },
  "isPartOf": {
    "@type": "CollectionPage",
    "@id": "https://rankframe.com/docs#collectionpage"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankframe.com" },
    { "@type": "ListItem", "position": 2, "name": "Docs", "item": "https://rankframe.com/docs" },
    { "@type": "ListItem", "position": 3, "name": {{Title | json}}, "item": "https://rankframe.com/docs/{{Slug}}" }
  ]
}
</script>
```

> **Variable name reference for Docs CMS:**
> - `{{Schema Article}}` (no colon) — stores TechArticle JSON
> - `{{Schema: FAQ}}` (with colon) — stores FAQPage JSON
> - `{{Schema: Breadcrumb}}` (with colon) — stores BreadcrumbList JSON
> - `{{Title}}`, `{{Short Description}}`, `{{Slug}}`, `{{Updated}}` — standard doc fields

---

## 4) BLOG INDEX — `/blogs`  (Page node `fajtLTGc7`)

**Focus keywords:** framer seo blog, framer seo articles, rankframe blog, framer seo tips

### Page Settings → SEO

- **SEO Title:** `Framer SEO Blog — Guides, Audits & Tutorials | RankFrame`
- **SEO Description:** `Practical Framer SEO articles: schema markup, Google indexing, image SEO, Core Web Vitals, keyword tracking, and step-by-step Framer optimization guides.`

### Page Settings → Custom Code → Start of `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://rankframe.com/blogs#blog",
  "url": "https://rankframe.com/blogs",
  "name": "RankFrame Blog",
  "description": "The Framer SEO blog from RankFrame. Tutorials, audits, and ranking strategy for Framer sites.",
  "inLanguage": "en-US",
  "publisher": { "@id": "https://rankframe.com/#organization" },
  "isPartOf": { "@id": "https://rankframe.com/#website" }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankframe.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://rankframe.com/blogs" }
  ]
}
</script>
```

---

## 5) BLOG TEMPLATE — `/blogs/:slug`  (Page node `UswqXMGEn`)

**All 34 blog posts already have these CMS fields populated** → use `| unsafeRaw`.

### Page Settings → SEO (use variable picker)

- **SEO Title:** `{{SEO Title}}` *(or use the variable picker to bind it)*
- **SEO Description:** `{{SEO Description}}`
- **Social Image:** bind to `{{Image}}`

### Page Settings → Custom Code → Start of `<head>`

```html
<!-- BlogPosting / Article (pre-built JSON, one per post) -->
<script type="application/ld+json">{{Schema: Article | unsafeRaw}}</script>

<!-- FAQPage (pre-built JSON, one per post) -->
<script type="application/ld+json">{{Schema: FAQ | unsafeRaw}}</script>

<!-- BreadcrumbList (pre-built JSON, one per post) -->
<script type="application/ld+json">{{Schema: Breadcrumb | unsafeRaw}}</script>

<!-- HowTo (pre-built JSON; only non-empty for how-to posts) -->
<script type="application/ld+json">{{Schema: How To Schema | unsafeRaw}}</script>
```

> **Fallback inline template** (if you ever need to rebuild from raw fields instead of the stored schema):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": {{Headline | json}},
  "description": {{Sub headline | json}},
  "image": {{Image | json}},
  "url": "https://rankframe.com/blogs/{{Slug}}",
  "datePublished": {{Created | json}},
  "dateModified": {{Updated | json}},
  "inLanguage": "en-US",
  "wordCount": 2000,
  "author": { "@id": "https://rankframe.com/#organization" },
  "publisher": { "@id": "https://rankframe.com/#organization" },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://rankframe.com/blogs/{{Slug}}"
  },
  "isPartOf": {
    "@type": "Blog",
    "@id": "https://rankframe.com/blogs#blog",
    "name": "RankFrame Blog"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankframe.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://rankframe.com/blogs" },
    { "@type": "ListItem", "position": 3, "name": {{Headline | json}}, "item": "https://rankframe.com/blogs/{{Slug}}" }
  ]
}
</script>
```

> **Variable name reference for Blog CMS:**
> - `{{Schema: Article}}` — stores BlogPosting JSON (note colon)
> - `{{Schema: FAQ}}` — stores FAQPage JSON
> - `{{Schema: Breadcrumb}}` — stores BreadcrumbList JSON
> - `{{Schema: How To Schema}}` — stores HowTo JSON
> - `{{Headline}}`, `{{Sub headline}}`, `{{Image}}`, `{{Slug}}`, `{{SEO Title}}`, `{{SEO Description}}`

---

## 6) SUPPORT — `/support`  (Page node `NoGfT0TyZ`)

**Focus keywords:** rankframe support, framer seo plugin help, rankframe contact

### Page Settings → SEO

- **SEO Title:** `Support & Contact — RankFrame Help Center`
- **SEO Description:** `Get help with RankFrame, the SEO plugin for Framer. Contact support, find answers, and request features for your Framer SEO workflow.`

### Page Settings → Custom Code → Start of `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://rankframe.com/support#contactpage",
  "name": "RankFrame Support",
  "url": "https://rankframe.com/support",
  "description": "Customer support and contact options for the RankFrame Framer SEO plugin.",
  "isPartOf": { "@id": "https://rankframe.com/#website" },
  "publisher": { "@id": "https://rankframe.com/#organization" },
  "inLanguage": "en-US",
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://rankframe.com/#organization",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://rankframe.com/support",
      "availableLanguage": ["English"]
    }
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankframe.com" },
    { "@type": "ListItem", "position": 2, "name": "Support", "item": "https://rankframe.com/support" }
  ]
}
</script>
```

---

## 7) IMAGE SEO FEATURE — `/features/image-seo`  (Page node `I2wEAmhtR`)

**Focus keywords:** framer image seo, framer alt text, bulk alt text framer, framer image optimization

### Page Settings → SEO

- **SEO Title:** `Framer Image SEO — Bulk AI Alt Text & Audit | RankFrame`
- **SEO Description:** `Optimize every image on your Framer site. Bulk AI alt text, image structure & relevance scoring, global brand suffix, and CSV export — all inside the Framer editor with RankFrame.`

### Page Settings → Custom Code → Start of `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://rankframe.com/features/image-seo#service",
  "name": "Framer Image SEO with RankFrame",
  "serviceType": "Image SEO Optimization",
  "provider": { "@id": "https://rankframe.com/#organization" },
  "url": "https://rankframe.com/features/image-seo",
  "description": "Automatically optimises alt text, image structure, and image relevance across your Framer site. Includes global brand suffix and CSV export.",
  "areaServed": "Worldwide",
  "audience": {
    "@type": "Audience",
    "audienceType": "Framer designers and agencies"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Image SEO features",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bulk AI alt text generation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Image structure optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Image relevance scoring" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Global brand suffix for alt text" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CSV export of image SEO data" } }
    ]
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankframe.com" },
    { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://rankframe.com/features/image-seo" },
    { "@type": "ListItem", "position": 3, "name": "Image SEO", "item": "https://rankframe.com/features/image-seo" }
  ]
}
</script>
```

---

## 8) 404 — `/404`  (Page node `ISDoOo1S0`)

No schema. Critical: **noindex** this page.

### Page Settings → SEO

- **SEO Title:** `Page Not Found — RankFrame`
- **SEO Description:** `Sorry, this page doesn't exist. Browse RankFrame docs, the blog, or head back home.`
- ✅ **Toggle ON "Hide from search engines"** — this is mandatory.

### Page Settings → Custom Code → Head

*(Leave empty — no schema on 404.)*

---

## 9) POLICIES TEMPLATE — `/policies/:slug`  (Page node `c5zBCJLWw`)

**Focus keywords:** none (legal content; don't promote in search).

### Page Settings → SEO

- **SEO Title:** `{{Title}} | RankFrame`
- **SEO Description:** `Read the {{Title}} policy for RankFrame, the SEO plugin for Framer.`

### Page Settings → Custom Code → Start of `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": {{Title | json}},
  "url": "https://rankframe.com/policies/{{Slug}}",
  "description": "RankFrame policy page.",
  "isPartOf": { "@id": "https://rankframe.com/#website" },
  "publisher": { "@id": "https://rankframe.com/#organization" },
  "inLanguage": "en-US"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rankframe.com" },
    { "@type": "ListItem", "position": 2, "name": "Policies", "item": "https://rankframe.com/policies" },
    { "@type": "ListItem", "position": 3, "name": {{Title | json}}, "item": "https://rankframe.com/policies/{{Slug}}" }
  ]
}
</script>
```

---

## 10) ARCHIVE PAGES — noindex only

These must NOT be indexed:

- `/archive/old-home` (`augiA20Il`)
- `/archive/old-home-2` (`wfs0i7QoT`)
- `/archive/pricing` (`xQDZ7dEqL`)
- `/archive/coming-soon` (`QUKnYxZt2`)

For each → Page Settings → SEO → toggle **"Hide from search engines"** ON. No schema needed.

---

## Implementation order

1. **Site Settings → Custom Code → Head** → paste Section 0 (Organization + WebSite). Publish.
2. **Home** → paste SEO title + description + Section 1 schema. Publish. Run Rich Results Test.
3. **Docs Index** (`/docs`) → Section 2.
4. **Docs Template** (`/docs/:slug`) → Section 3. Verify one doc page live before moving on.
5. **Blog Index** (`/blogs`) → Section 4.
6. **Blog Template** (`/blogs/:slug`) → Section 5. Verify one blog post live.
7. **Support** → Section 6.
8. **Image SEO** → Section 7.
9. **404** → noindex toggle + Section 8 (just the noindex; no schema).
10. **Policies Template** → Section 9.
11. **Archive pages** → noindex toggle only.

---

## Validation checklist

After each publish:

1. **View Source** on the live page → search `application/ld+json` → confirm correct blocks, no duplicates, no `{{}}` placeholders left un-substituted.
2. **Google Rich Results Test** (`search.google.com/test/rich-results`):
   - `/` → SoftwareApplication, FAQPage, BreadcrumbList, Organization, WebSite
   - `/docs` → CollectionPage, BreadcrumbList
   - `/docs/[any-slug]` → TechArticle, FAQPage, BreadcrumbList
   - `/blogs` → Blog, BreadcrumbList
   - `/blogs/[any-slug]` → BlogPosting, FAQPage, BreadcrumbList
   - `/features/image-seo` → Service, BreadcrumbList
   - `/support` → ContactPage, BreadcrumbList
3. **Google Search Console → Enhancements** — watch for structured data errors after indexing.
4. Submit sitemap: `https://rankframe.com/sitemap.xml` in GSC.
5. Use RankFrame's own **Submit Indexing** tab to push every important URL via the Indexing API.

---

## Quick reference: where each piece goes

| What | Where in Framer |
|---|---|
| Organization + WebSite entities | Site Settings → General → Custom Code → Start of `<head>` |
| Per-page SEO title & description | Page Settings (gear icon) → SEO tab |
| Per-page schema (Article, FAQ, etc.) | Page Settings → Custom Code → Start of `<head>` |
| OG / Social image | Page Settings → SEO → Social Image |
| Noindex | Page Settings → SEO → "Hide from search engines" toggle |
| CMS variable in SEO title | Click the `{ }` icon next to the SEO Title field → pick CMS field |
| CMS variable in Custom Code | Type `{{Field Name \| unsafeRaw}}` or `{{Field Name \| json}}` directly |

---

## Framer variable cheat-sheet for copy-paste

### Blog template (`/blogs/:slug`)
```
{{Schema: Article | unsafeRaw}}
{{Schema: FAQ | unsafeRaw}}
{{Schema: Breadcrumb | unsafeRaw}}
{{Schema: How To Schema | unsafeRaw}}
{{Headline | json}}
{{Sub headline | json}}
{{Image | json}}
{{Slug}}
{{Created | json}}
{{Updated | json}}
```

### Docs template (`/docs/:slug`)
```
{{Schema Article | unsafeRaw}}
{{Schema: FAQ | unsafeRaw}}
{{Schema: Breadcrumb | unsafeRaw}}
{{Title | json}}
{{Short Description | json}}
{{Slug}}
{{Updated | json}}
```

### Policies template (`/policies/:slug`)
```
{{Title | json}}
{{Slug}}
```
