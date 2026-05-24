# RankFrame: The Complete Reference

**The first and only native SEO plugin built for Framer.**

This document is the single, complete source of truth for everything RankFrame is, everything it does, and how every part of it works. It exists so anyone (a marketer, a support agent, a partner, an investor, an AI assistant, a new hire) can read this single file and walk away knowing the entire product.

---

## Table of Contents

1. Product Overview
2. The Company Behind RankFrame
3. Brand Rules and Voice
4. Why RankFrame Exists (The Problem)
5. Why Native Matters (The Solution)
6. The Plugin Interface, Top to Bottom
7. Onboarding and Personalization
8. Section 1: Global Settings (Basic, Keywords, Advanced/Schema, 404 Monitor)
9. Section 2: Pages (List View and Per-Page Split Screen)
10. Section 3: Submit Indexing (All Five Tabs)
11. Section 4: SEO Analyzer (Site-Wide Audit)
12. Section 5: Image SEO (Bulk AI Alt Text)
13. Account Settings
14. Pricing and Plans
15. AI Credits System
16. Always-Visible Buttons (See Billing, Recrawl)
17. Downloadable PDF Audit Reports
18. Documentation Architecture (15 Modules)
19. SEO Strategy and Target Keywords
20. Framer Marketplace Listing
21. Policy Documents
22. llms.txt for AI Discovery
23. Key Differentiators
24. What RankFrame Does NOT Do
25. Future Roadmap
26. Audience Personas in Depth
27. Use Case Walkthroughs
28. Comparisons (Yoast, RankMath, Ahrefs, Semrush, Manual)
29. Frequently Asked Questions
30. Glossary
31. Support and Contact
32. Document Maintenance
33. Website Issues to Fix (rankframe.com)
34. Common Marketing Frames
35. CMS Technical Reference
36. Session Log
37. Contra Case Study: RankFrame

---

## 1. Product Overview

RankFrame is a Framer SEO plugin that lives inside the Framer editor as a side panel. It is the first and only SEO tool native to Framer, meaning every action you take (writing meta tags, generating schema, submitting URLs to Google, auditing pages, fixing image alt text) happens inside the same workspace where you build your site. You never leave Framer.

It covers the full SEO lifecycle for a Framer website:

- **Meta optimisation:** AI-generated meta titles and descriptions, both site-wide and per page, character-counted and brand-aware
- **Schema markup:** auto-generate structured data (JSON-LD) for the entire sitemap or build schemas manually for Person, Organization, Article, Book, Restaurant, and Service types
- **Indexing:** push your sitemap or specific URLs directly to Google through the official Google Indexing API, then verify in real time whether Google has indexed each page
- **Auditing:** site-wide and per-page SEO audits with Core Web Vitals, downloadable as PDF
- **Image SEO:** scan every image on your Framer site (Canvas and CMS), bulk-generate AI alt text, apply a global brand suffix, export to CSV
- **Monitoring:** track 404 errors with whitelisting, monitor keyword rankings with sparkline position history, pull live Google Search Console analytics inside the plugin

**Tagline:** The first and only native SEO plugin built for Framer.
**Website:** rankframe.com
**Dashboard:** dashboard.rankframe.com
**Support:** hello@7seersmedia.com
**Marketplace:** Framer Plugin Marketplace
**Payment processor:** Polar.sh
**Launch:** May 2026

---

## 2. The Company Behind RankFrame

**Maker:** 7 Seers, a design and software studio based in Lucknow, India.

**Founders:**
- Harsh Upadhyay
- Utkarsh

**Why this matters:** RankFrame is built by designers who use Framer daily for client work. Every feature in the plugin came from a real problem they hit while shipping client sites. This is not a generic SEO tool retrofitted for Framer. It is a tool designed from scratch around how Framer designers actually work: visually, fast, component-driven, without writing code.

**Studio context:** 7 Seers builds websites, brands, and software products. The studio operates inside Framer for the majority of its web work, which is exactly why a native SEO solution became necessary.

---

## 3. Brand Rules and Voice

These rules apply to all marketing copy, listing copy, documentation, support replies, llms.txt, schema descriptions, and any AI-generated content about the product.

### Hard rules

- **Never use em dashes anywhere, ever.** Use commas, colons, parentheses, or periods instead. This is non-negotiable across every surface.
- **Second person.** Address the reader as "you" and the product as "RankFrame". Never use "we" except in founder-signed emails.
- **Designer-first.** Assume the reader designs in Framer. Do not over-explain Framer concepts. Do explain SEO concepts when they appear.
- **Instructional tone.** Tell people what to do, in what order, with what result.

### Keyword discipline

- **Primary keyword:** Framer SEO plugin
- **Secondary keywords:** SEO for Framer, Framer SEO tool, Framer plugin SEO, Framer website SEO, Framer schema markup, Framer image SEO, Framer 404 monitor, Framer keyword tracker, Framer Google indexing, Framer SEO audit, Framer page speed, Framer alt text generator
- **Always frame as native to Framer.** RankFrame lives inside the Framer editor. It is not an external dashboard, not a browser extension, not a separate app.

### Things to avoid

- Marketing buzzwords without substance ("revolutionary", "game-changing", "next-gen")
- Comparisons that disparage the user ("most designers don't even know SEO exists")
- Pricing references that are not $15/$40 (the site briefly displayed $9/$24, those are wrong)
- Saying "WordPress-style" plugins exist for Framer (they do not, RankFrame is the first)

---

## 4. Why RankFrame Exists (The Problem)

### Framer is excellent at design, lacking in SEO

Framer is one of the best tools in the world for building beautiful websites visually. Its component model, its CMS, its publishing workflow, its hosting: all best-in-class for designers and small teams.

What Framer does not give you out of the box:

- Per-page meta titles and descriptions optimised for search
- Structured data (JSON-LD schema) on any page
- A way to submit pages or sitemaps to Google directly
- Image alt text management at scale
- A sitewide SEO audit
- 404 error tracking
- Keyword tracking
- Live indexing confirmation
- Core Web Vitals reporting

These are table stakes for ranking in Google in 2026. Without them, even the most beautiful Framer site will underperform in search.

### The WordPress comparison

WordPress users have Yoast and Rank Math, plugins that solve all of the above. Framer users have had nothing comparable until now. The available options before RankFrame were:

- Manually writing meta tags through Framer's built-in fields, page by page
- Manually pasting JSON-LD into custom code blocks, page by page
- Using external tools like Ahrefs or Semrush for keyword research and audits, with no integration back into Framer
- Submitting URLs to Google through Search Console manually
- Writing alt text by hand on every image
- Hoping Google figured out the rest

This is hours of work per site. For an agency managing 10 client sites, it is simply not viable.

### The wrong tools shipped to Framer

Some external SEO dashboards now claim to support Framer. They are still external. They live in another browser tab, another login, another data silo. The designer has to leave Framer to do anything meaningful, then switch back to apply the change manually. That round trip kills momentum and adoption.

### What RankFrame does differently

RankFrame moves SEO into the Framer editor itself. It reads your site structure automatically. It writes the meta tags directly. It injects schema into your live site without you touching code. It submits to Google without you opening Search Console. The tool meets you where you already work.

---

## 5. Why Native Matters (The Solution)

"Native" is not a marketing word for RankFrame. It is a technical and workflow advantage with real consequences.

### Workflow advantage

Every minute spent switching tabs or contexts is a minute not spent designing. RankFrame eliminates the round trip. You publish a new page in Framer, open RankFrame in the same window, click "Push Sitemap", and Google knows about your page. Total time: under 30 seconds. Total context switches: zero.

### Technical advantage

Because RankFrame runs inside Framer's plugin runtime, it has direct access to:

- Your site's actual page structure (not a scraped snapshot)
- Your CMS collections and the images inside them
- Your publish events, so it can refresh schema injections automatically
- Your Framer project metadata

External tools have to crawl your site from the outside, which is slower, often incomplete, and always behind. RankFrame works from the inside.

### Data freshness

When you make a change in Framer and republish, RankFrame sees that change immediately. External tools wait for their next crawl cycle, which could be hours or days. By that time, you have already moved on to the next thing.

### Single source of truth

All your SEO data (meta tags, schemas, keyword targets, audit history, image alt text, 404 logs, indexing history) lives in one place: the RankFrame plugin panel. You do not have to remember which dashboard had the keyword data and which one had the schema.

---

## 6. The Plugin Interface, Top to Bottom

The plugin opens inside Framer as a side panel that you can pin, resize, or minimise. Every screen shares the same outer chrome.

### Top bar
- RankFrame logo and product name on the left
- Close (X) button on the right that collapses the panel back to the Framer plugin tray

### Left sidebar (always visible)

**Header zone:**
1. **RankFrame** label with a back arrow that returns you to the plugin home

**Five main navigation items (the heart of the product):**
2. **Global Settings** (gear icon)
3. **Pages** (database icon)
4. **Submit Indexing** (lightning bolt icon)
5. **SEO Analyzer** (bar chart icon)
6. **Image SEO** (image icon)

**SEO Score widget:**
A circular progress ring directly below the nav. It shows your current site-wide score (e.g. 82) and a label that updates by range:
- 90 or higher: **Excellent**
- 80 to 89: **Good** (the "Excellent" pill currently shows for 82, so this label range is shifting; treat 80+ as the Good zone)
- 60 to 79: **Needs Work**
- Below 60: **Critical**

**Utility links:**
7. **Support** with a green dot indicator when the team is online
8. **Documentation** (book icon, links to the help centre)
9. **Go To Dashboard** (globe icon, opens dashboard.rankframe.com in a new tab)

**Account block:**
10. Avatar (initials in a purple circle)
11. Name and email
12. Plan info (e.g. "Agency Yearly Plan, Renews in 357 days")

**Action buttons (full width, always visible):**
13. **See Billing** (purple button, opens Polar.sh billing portal)
14. **Recrawl Website** (red/coral button, refreshes all data)

This sidebar is your home. It never goes away, no matter which section you are in.

---

## 7. Onboarding and Personalization

### The Personalization Screen

When a user first connects a Framer site to RankFrame, the **Personalization** screen appears before any AI feature can run. This is the most important screen in the entire onboarding flow because it is what makes every subsequent AI suggestion specific to your business instead of generic.

Personalization sits inside Account Settings under the Personalization tab. It has two sections:

### Section 1: BRAND IDENTITY

**Brand Name** (free text)
The official name of your business as you want it to appear in meta tags, schema, and AI-generated copy. Example: "7 Seers".

**Brand About** (multi-line description)
Three to five sentences covering:
- What the business does
- Who it serves
- What makes it different from competitors

This is the single most-used field by the AI engine. The richer this description is, the better every AI generation gets. Treat this like a positioning statement.

### Section 2: STRATEGY

**Main Goals** (multi-select dropdown)
Pick all that apply. Standard options:
- Increase Traffic
- Generate Leads
- Boost Sales
- Brand Awareness
- Local Presence
- Improve Authority

The label updates dynamically (e.g. "4 Goals Selected"). The AI weights its output toward your selected goals. If you pick "Generate Leads", AI-generated CTAs and meta descriptions emphasise conversion language.

**Industry** (tag input)
Press Enter to add multiple tags. Examples:
- SaaS
- Agency
- E-commerce
- Startup
- Local Business
- Personal Brand

**Audience** (tag input)
Press Enter to add multiple tags. Examples:
- SaaS Founders
- Business Owners
- Premium Businesses
- Indie Hackers
- Marketing Teams
- Designers

**Competitors (URLs)**
Add competitor URLs one per line. Example: https://dashdigital.studio/. Click "+ Add Competitor" to add another row.

The AI uses competitor URLs to:
- Avoid copy-pasting the same meta titles your competitors use
- Identify keyword gaps
- Frame your differentiation

**Save Settings** button (full-width, purple) commits all of the above.

### Why Personalization is non-negotiable

Without Personalization, every AI generation in RankFrame falls back to generic copy. With it, the AI writes meta titles and descriptions that sound like your brand, generates schema with the correct organisation name and tone, writes alt text that reflects your actual product or services, and produces audit suggestions that are scoped to your goals.

This is what separates RankFrame from any tool that ships an AI button without context.

---

## 8. Section 1: Global Settings

Global Settings is where you control SEO behaviour that applies across your entire Framer site, not just to a single page. It has four tabs across the top:

**Basic | Keywords | Advanced | 404 Monitor**

---

### 1A. Basic Tab

**Subtitle:** "Update your SEO title and description, both of which can also be customized at the page level."

This tab manages your site-wide default meta title and meta description. These appear in Google search results when there is no per-page override.

**Layout:** two columns.

**Left column (Current state):**
- **Current Title:** read-only display of your live site title with a character counter (X/70)
- **Current Description:** read-only display with a character counter (X/260)

**Right column (AI-Generated):**
- **AI-Generated Title:** input field showing the latest AI suggestion, with **Copy** and **Write with AI** buttons
- **AI-Generated Description:** same pattern, with **Copy** and **Write with AI** buttons

**Character limits and why they matter:**
- **Title:** 70 characters recommended max. Beyond that, Google truncates the title in search results, replacing the cut-off portion with an ellipsis.
- **Description:** 260 characters recommended max. Google truncates around 160 characters in most search contexts, so RankFrame warns at 165 and treats 150 to 160 as the sweet spot.

**The "Write with AI" button:**
Uses 1 credit per generation. Pulls context from your Personalization data (Brand Name, Brand About, Main Goals, Industry, Audience). The output is copy-paste ready.

---

### 1B. Keywords Tab

**Subtitle:** "Manage focus keywords and review keyword density for your homepage."

This tab is where you tell RankFrame which keywords matter to which pages, and where you analyse how often each keyword appears in your content.

**Focus Keyword Script** toggle (on/off)
When on, RankFrame injects a meta keywords tag on the live site for each focus keyword you have saved. Note: most search engines ignore meta keywords today, but a few internal search systems and aggregators still read them. Toggle this off if you want to keep your HTML lean.

**Target Page** dropdown
Select which page the keyword applies to. The dropdown lists every page from your sitemap (e.g. /, /thoughts, /projects/rkg, /projects/ember-and-bloom). One keyword can be tied to one page, mirroring the "one focus keyword per URL" SEO best practice.

**Keyword input field**
Type your target keyword, then click **Check** or **Save**.

**Check** runs a live keyword research call. After a few seconds, four metric cards populate:
- **Search Vol:** monthly search volume in your target market
- **Difficulty (KD):** keyword difficulty score, typically 0 to 100. Higher = harder to rank
- **Competition:** competition score, separate from difficulty, reflects ad and organic competition
- **CPC:** cost per click in advertising, a useful proxy for commercial intent

**Save** commits the keyword to that page. Helper text reads: "Keyword will be assigned to the selected page."

**Saved Keywords (N) list:**
Each saved keyword appears as a row showing the keyword, its volume, and its difficulty (red if difficulty is high). Each row has a delete (trash) icon. The header has **Manage** and **Hide** controls so you can collapse the list.

**Keyword Analysis section** (with Show details / Hide details toggle):

Top stats:
- **Total Keywords:** count of unique keywords found on the homepage (e.g. 50)
- **Avg Density:** average keyword density across all keywords (e.g. 0.84%)
- **Total Frequency:** total keyword occurrences across all keywords (e.g. 10371)

**Keyword Details:**
Filter by word count: **1 word**, **2 words**, **3 words**. Search keywords field. Table columns: **Keyword | Freq | Density**. Example rows:
- "and" 1232 occurrences, 4.99% density
- "to" 849 occurrences, 3.44% density

You use this section to spot over-optimisation (your target keyword should typically sit between 0.5% and 2.5% density on a page) and to find natural language patterns Google will already associate with your content.

---

### 1C. Advanced Tab (Schema Injection)

**Subtitle:** "Manage and inject structured data (JSON-LD) across your website."

Schema markup is structured data that helps Google understand what each page is. It powers rich results: enhanced search listings with star ratings, breadcrumbs, prices, FAQs. Without schema, Google guesses. With schema, Google knows.

**Schema Injection** toggle (on/off, master switch)
When off, RankFrame does not inject any schema, regardless of what you have saved. Use this for testing or for staging environments.

### Two action paths

**+ Manual Schema** (dark button)
Build a schema from scratch. Use this when you know exactly what schema type you want and you want full control over every field.

**Auto-Generate** (purple button, primary action)
The AI scans your sitemap and pre-fills schemas for every page. Use this when you have many pages and you want a strong baseline that you then refine.

### Saved Schemas section

Header controls: **Refresh** (re-reads from your saved schema list) and **Hide Management** (collapses the panel).

Two sub-tabs:
- **Manual (N):** schemas you built by hand
- **Generated (N):** schemas auto-generated by AI

Each saved schema row shows:
- Schema name
- Type pill (e.g. ORGANIZATION, ARTICLE, RESTAURANT)
- URL the schema is bound to
- Edit (pencil icon)
- Enable toggle (so you can save schemas without injecting them)
- Delete (trash icon)

**Bottom bar:** "N schemas ready for injection" with a green **Save & Inject** button. This is the action that pushes everything live.

### Manual Schema Flow (step by step)

1. Click **+ Manual Schema**
2. **Select Page for Schema** screen appears: search pages, click any URL from the sitemap to bind the schema to that page
3. **Add a Schema** screen: pick the schema type (Person, Organization, Article, Book, Restaurant, Service)
4. Fill the form (each schema has its own fields, documented below)
5. Use **Preview JSON** to see the raw output before injection, or **Validator (Ext)** to confirm via Google's Rich Results Test
6. **Save Schema** to add it to your Saved Schemas list
7. Toggle it on, then **Save & Inject** to push it live

### Auto-Generate Flow (step by step)

1. Click **Auto-Generate**
2. **Pages Found** screen appears, showing every URL in your sitemap. For each page:
   - **Page with schema:** green dot, schema type badge, **</>** (view JSON) icon, refresh icon (regenerate)
   - **Page without schema:** "No Schema" label and a **Generate** button
3. Click **Generate** on any page. The schema form opens, pre-filled with AI-generated content (Article Type, Headline, URL, Description, Image URL, etc.)
4. Edit the AI output, then **Save** to push it into the Saved Schemas list under the **Generated** tab
5. Toggle each schema on, then **Save & Inject** to push everything live

**Info banner on the Auto-Generate screen:** "This view displays raw AI-generated schemas. Any schemas you edit and save will appear in the Saved Schemas section."

### Schema Types Supported

1. **Person and Organization Schema** (radio toggle inside the form switches between Person and Organization)
2. **Article Schema** (with Article Type sub-options: Article, BlogPosting, TechArticle, NewsArticle)
3. **Book Schema**
4. **Restaurant Schema**
5. **Service Schema**

Internal documentation may also reference these schema types as future expansion candidates: HowTo, FAQPage, Product, LocalBusiness, WebSite, BreadcrumbList.

### Schema Form Tabs

Every schema form has three tabs:
- **Edit:** the field-by-field form
- **Preview JSON:** see the raw JSON-LD output before injection
- **Validator (Ext):** opens Google Rich Results Test in a new tab with the schema pre-loaded for instant validation

Bottom of every form has two buttons: **Copy JSON** and **Save Schema**.

### JSON-LD Preview Modal

Clicking **</>** on any auto-generated page opens a modal showing the raw structured data. Example output:

```json
{
  "url": "https://7seersmedia.com/",
  "logo": "https://framerusercontent.com/images/...",
  "name": "7 SEERS Media",
  "@type": "Organization",
  "@context": "https://schema.org"
}
```

### Auto-Generate: Current vs Future Behavior

**Current:** Auto-Generate uses the same schema type form fields as Manual Schema. The AI fills each field (Headline, URL, Description, Image URL, etc.) based on page content, URL, and Personalization data. You then review and edit each field before saving.

**Future (roadmap):** Auto-Generate will shift to a fully AI-driven model where the AI reads the live page content directly and produces the entire schema without relying on the manual form field structure. This will produce more specific, page-aware schemas automatically.

### Schema Field Reference

#### Person and Organization Schema Fields
Both types share the same form. A radio toggle at the top switches between Person and Organization (sets the `@type`).

| Field | JSON-LD property | Notes |
|---|---|---|
| Name | `name` | Full name of person or official brand name of organization |
| URL | `url` | Canonical URL representing the entity, usually homepage or about page |
| Image URL | `image` | Profile photo (Person) or logo (Organization). Square or near-square recommended |
| Job Title | `jobTitle` | Person's professional role (e.g. "Founder", "Creative Director"). Person only |
| Company | `worksFor.name` | Organization the person is affiliated with. Person only |
| Social Profiles | `sameAs` (array) | Multiple URLs: LinkedIn, X, Instagram, Facebook, YouTube, Wikipedia, etc. One per entry |

#### Article Schema Fields
Article Type selector at the top: **Article**, **BlogPosting**, **TechArticle**, **NewsArticle** (sets `@type`).

| Field | JSON-LD property | Notes |
|---|---|---|
| Article Type | `@type` | One of: Article, BlogPosting, TechArticle, NewsArticle |
| Headline | `headline` | Article title, under 110 chars, match visible H1 |
| URL | `mainEntityOfPage.@id` | Canonical URL of the article page |
| Description | `description` | One to two sentence summary |
| Image URL | `image.url` | Featured image, absolute URL |
| Image Width | `image.width` | Pixel width, Google recommends 1200 or more |
| Image Height | `image.height` | Pixel height, Google recommends 630 or more |
| Author Name | `author.name` | Individual who wrote the article |
| Author URL | `author.url` | Author's profile or bio page |
| Publisher Name | `publisher.name` | Publishing organization |
| Publisher Logo URL | `publisher.logo.url` | Publisher logo, 600x60px preferred |
| Date Published | `datePublished` | ISO 8601: YYYY-MM-DD |
| Date Modified | `dateModified` | ISO 8601: YYYY-MM-DD, update on edits |

#### Book Schema Fields

| Field | JSON-LD property | Notes |
|---|---|---|
| Book Title | `name` | Full title as appears on cover |
| URL | `url` | Canonical URL of the book page |
| Author | `author.name` | Primary author's full name |
| Reviewer Name | `review.author.name` | Person writing the review |
| Rating Value | `review.reviewRating.ratingValue` | Numeric score given (e.g. 4.5) |
| Best Rating | `review.reviewRating.bestRating` | Max possible score (e.g. 5 or 10) |
| Edition: Format | `workExample.bookFormat` | Hardcover, Paperback, Ebook, Audiobook |
| Edition: ISBN | `workExample.isbn` | ISBN for that specific edition |
| Edition: URL | `workExample.url` | Purchase or download page for that edition |
| Edition: Date | `workExample.datePublished` | ISO 8601 publication date for that edition |

The Editions section is a repeater: click **Add Edition** to add a new row per format.

#### Restaurant Schema Fields

| Field | JSON-LD property | Notes |
|---|---|---|
| Name | `name` | Official restaurant name |
| Description | `description` | One to three sentences about cuisine, atmosphere, uniqueness |
| Phone | `telephone` | Include country code (e.g. +1-555-234-5678) |
| Street | `address.streetAddress` | Building number and street |
| City | `address.addressLocality` | City or locality |
| State | `address.addressRegion` | State, province, or region |
| Postal Code | `address.postalCode` | ZIP or postal code |
| Country | `address.addressCountry` | Two-letter ISO country code (e.g. US, IN, GB) |
| Cuisine | `servesCuisine` | Cuisine type(s), comma-separated (e.g. "Italian, Mediterranean") |
| Menu URL | `hasMenu` | URL to the online menu page |
| Price Range | `priceRange` | Dollar sign notation: $, $$, $$$, $$$$ |
| Working Hours | `openingHoursSpecification` | Per-day toggles (Mon-Sun). Each toggled day gets time slot rows with Opens and Closes in 24h format. Multi-shift: add multiple time slot rows per day |

#### Service Schema Fields

| Field | JSON-LD property | Notes |
|---|---|---|
| Service Name | `name` | Name of the specific service |
| Description | `description` | One to three sentences on what the service includes and delivers |
| URL | `url` | Canonical URL of the service page |
| Service Type | `serviceType` | Category label (e.g. "Web Design", "SEO Consulting") |
| Provider Name | `provider.name` | Person or organization providing the service |
| Area Served | `areaServed` | City, country, or "Worldwide" for remote services |
| Telephone | `provider.telephone` | Contact phone with country code |
| Price | `offers.price` | Numeric price or starting price |
| Currency | `offers.priceCurrency` | ISO 4217 code: USD, EUR, GBP, INR, etc. |

---

### 1D. 404 Monitor Tab

**Subtitle:** "Keeps track of all 404 errors on the website."

A 404 error happens when a visitor tries to load a URL that does not exist. Common causes: deleted pages, renamed slugs, broken links from external sites, typos in shared links. Every 404 is a missed visit and, over time, a signal to Google that your site has reliability issues.

**404 Monitor Script** toggle (on/off): enables the monitoring script on the live site.

**Allowed Domains:** list of domains the script monitors (e.g. 7seersmedia.com). Add or remove via tag input. This prevents tracking 404s from spammy referrers or test environments.

**Top stats:**
- **Total 404 Errors** (e.g. 12)
- **Unique Routes** (e.g. 7)

The distinction: total errors counts every hit, unique routes counts distinct URLs. A single broken link hit 50 times is 50 errors but 1 unique route.

**Controls:**
- Filter by domain (All Domains dropdown)
- **Reload** button
- **Export** button (downloads CSV)

**Errors table:**

| Column | What it shows |
|--------|---------------|
| Page URI | The URL that returned 404 |
| User Agent | The browser or bot that hit it |
| Last Hit | Most recent timestamp |
| Hits | Total occurrences |

Long URIs include a copy icon for quick paste. The table is paginated.

**Exception Routes section** (often missed but important)
"Routes added here will be ignored by the 404 monitor." Input field with placeholder "/path-to-ignore" and a **+ Add** button.

Use Exception Routes to whitelist intentional catch-all routes (e.g. /404, /409, redirect testing paths) so they do not pollute the error log. This is critical for sites with custom redirect logic or A/B test landing pages that intentionally return 404 to deprecated URLs.

**Status indicator at the bottom:** green dot, "Monitoring script active, 404 errors are being tracked".

---

## 9. Section 2: Pages

Pages is your per-page SEO control room. Every page on your Framer site appears here, organised exactly as it is in your Framer project. You can audit any page, edit its meta tags, see exactly how it appears in Google, and download a per-page audit PDF.

### List View

**Subtitle:** "Manage your page settings in Framer."

**Top controls:**
- **Refresh** button (re-reads from your Framer site)
- **Search bar** (filters all pages instantly across folders)

**Page organisation:**
Pages are organised in **collapsible folders** matching the Framer site structure (e.g. Insaaf, Projects, Thoughts).

Each folder shows:
- Folder name
- Type label (Static or CMS)
- Page count badge

Each page row shows:
- Full title
- URL
- SEO score with a colored dot
- Last crawled date

**Score color coding:**
- **Purple dot:** 85 or higher
- **Orange dot:** 70 to 84
- **Red dot** (when applicable): below 70

This colour code is intentional. Purple is RankFrame's brand colour and signals "good". Orange signals "needs attention". Red signals "fix this now".

### Per-Page View (Split Layout)

Clicking any page opens a split-screen view, the most powerful screen in RankFrame.

**Top bar:**
- **Back to pages** link (returns to the list)
- **Download** button (purple, exports per-page audit PDF)

**Left panel: live preview**
A scrollable, real-time render of the actual Framer page. Header, hero image, sections, footer. You see the real page exactly as visitors see it, while you edit its SEO.

**Right panel: SEO control surface**
Everything you need to optimise this single page, in one column.

### Right Panel Structure (top to bottom)

1. **Score header:** "Rankframe SEO X/100" with a purple progress bar
2. **Google Snippet preview:** exactly how this page appears in Google search results (blue title link, green URL, description text, all live)
3. **Current Title** with a character counter (warns when over the 70 limit)
4. **AI Generated Title** field with **Copy** and **Generate** buttons
5. **Current Description** with a character counter (recommended 150 to 160 chars)
6. **AI Generated Description** field with **Copy** and **Generate** buttons
7. **Five collapsible audit sections** (each opens to detailed checks):
   - Keyword Analysis
   - Basic SEO
   - Advanced SEO
   - Performance
   - Security

### Keyword Analysis (per page)
- **Total Keywords** (e.g. 231)
- **Avg Density** (e.g. 0.40%)
- **Total Frequency** (e.g. 2958)
- Word count filter: 1 word, 2 words, 3 words
- Search keywords field
- Table: **Keyword | Freq | Density** (e.g. "in interaction design" 14, 0.6%)

### Per-Page Audit Categories

Every check returns a specific value, not just pass/fail. Red X items expand to show the actual problematic HTML (e.g. specific `<img>` tags missing alt). This is what makes the audit actionable instead of just informative.

#### Basic SEO checks

- **SEO Title:** length and quality (warns if over 70 chars)
- **H1 Heading:** presence (every page should have exactly one H1)
- **H2 Headings:** count and structure (subheadings should support the H1)
- **Links Ratio:** percentage of internal vs external links (warns if low, e.g. 53.3% triggers a warning that you may not have enough internal links)
- **SEO Description:** length (warns if over 165, recommends 150 to 160)
- **Image ALT Attributes:** count of images missing alt text. Expands to show the exact `<img>` tags with no alt attribute, so you know exactly which images to fix
- **Homepage Is Reachable:** confirms homepage returns HTTP 200
- **Create a responsive site:** confirms responsive design via media queries
- **Keywords in Title and Description:** confirms a shared keyword between title and description (a topical consistency signal Google rewards)
- **Common Keywords:** finds the top single-word keywords on the page, shown as visual pills with frequency (e.g. and 1232, to 849, of 565, design 526, color 421)

#### Advanced SEO checks

- **Sitemaps:** confirms sitemap found at /sitemap.xml
- **Robots.txt:** confirms file is present and valid
- **Broken Links:** count of broken links on the page (returns 4xx or 5xx)
- **Noindex Meta:** confirms no accidental `<meta name="robots" content="noindex">` tag (a common Framer staging slip-up)
- **Canonical Tag:** confirms correct canonical URL
- **OpenGraph Meta:** confirms OG tags are present (controls how the page looks when shared on Facebook, LinkedIn, Slack, etc.)
- **Schema Meta Data:** confirms Schema.org structured data is found
- **WWW Canonicalization:** confirms www and non-www both redirect correctly to one preferred version
- **Keep your content fresh:** confirms updated within last 6 months (Google rewards fresh content for many query types)
- **Search Preview** (info): renders desktop Google snippet
- **Mobile Snapshot** (info): renders mobile preview
- **Mobile Search Preview** (info): renders mobile Google snippet

#### Performance checks

- **Page Size:** total KB (warns if moderately large, e.g. 50.51 KB)
- **Mobile Speed:** good / fair / poor rating
- **Page Objects:** total count of resources loaded (e.g. 47)
- **Response Time:** server response in milliseconds (e.g. 1063ms)
- **Image Headers Expire:** caching check on local images

#### Security checks

- **Theme Visibility:** confirms theme is not publicly visible (cannot be reverse-engineered by competitors)
- **Secure Connection:** confirms HTTPS

---

## 10. Section 3: Submit Indexing

**Header:** "Instant Indexing" with **Powered by Google** badge (RankFrame uses the official Google Indexing API).
**Subtitle:** "Manage search presence securely via the official Google API."

This is the section that makes RankFrame feel like a control surface, not just an audit tool. You push your sitemap, push individual URLs, watch live analytics, track keywords, and confirm indexing in real time. All without leaving Framer.

Five tabs:
**Submit URLs | Setup | Analytics | Keyword Tracker | Indexing History**

---

### 3A. Submit URLs Tab

Two stacked actions.

**1. Sync Sitemap**
- **Description:** "Directly submit your sitemap to Google Search Console."
- Single button: **Push Sitemap**
- This is the fastest way to tell Google about every page on your site at once. Run it on every major release.

**2. Manual URL Submission**
- **Description:** "Select the pages you want to push to the Google Indexing API. This directly notifies Google that these pages have been added or updated."
- **Select All Pages** master checkbox with live count (e.g. 17 selected)
- Individual checkbox for every page: /, /thoughts, /projects/rkg, /projects/ember-and-bloom, etc.
- Bottom-right action button: **Push N URLs** (purple, count updates dynamically)

Use this when you have updated specific pages and want Google to recrawl them faster than the next normal crawl cycle.

---

### 3B. Setup Tab

Two-step setup, both auto-handled by RankFrame.

**Step 1: Connect Google Account**
- Connected email shown (e.g. 7seersmedia@gmail.com) with the Google G logo
- **Disconnect** option in red text

**Step 2: Domain Verification**
- Auto-handled by RankFrame
- Green success box: "You have verified access to this property in Search Console. No further action needed!"

**What this replaces:**
Without RankFrame, the standard Search Console verification process involves:
- Creating a property in Search Console
- Choosing a verification method (HTML file, meta tag, DNS record)
- Pasting code into your site or DNS provider
- Waiting for verification

RankFrame removes every step. You connect your Google account once and the plugin handles property creation, verification, and ongoing access on your behalf.

---

### 3C. Analytics Tab

**Performance Dashboard** with the Google G logo and "Verified Property Insights" label.

**Controls:**
- Date range dropdown (Last 28 Days default, changeable)
- **Reload** button

**Four headline metrics:**
- **Total Clicks**
- **Total Impressions**
- **Average CTR**
- **Avg Position**

**Clicks Over Time (N Days)** bar chart in purple.

**Drill-down tabs:**
- **Keywords**
- **Page**
- **Country**
- **Device**

**Top Keywords table:** Keyword | Clicks | Impr. | Position (e.g. "7 seers" 6 clicks, 122 impressions). Paginated (e.g. Showing 1-10 of 50).

This is live data pulled from Google Search Console without leaving the plugin. You do not need to open Search Console at all to monitor your basic traffic and ranking metrics.

---

### 3D. Keyword Tracker Tab

This is your ongoing rank monitoring tool, separate from the Keywords tab in Global Settings.

**Add New Keyword** input (target/bullseye icon) with placeholder "seo on wordpress, rank math vs yoast..." and **Save** button.

**Helper text:** "You can add multiple keywords at a time by separating them with commas."

**Keyword Manager** with search field.

**Table columns:**
- **KEYWORD**
- **IMPRESSIONS**
- **CLICKS**
- **SEARCH POSITION**
- **POSITION HISTORY** (sparkline mini chart)

**Position change indicator:** green up arrow with delta when ranking improves (e.g. 2.4 with 0.3 improvement means current position 2.4 is 0.3 better than previous reading).

The sparkline is what makes this tab uniquely useful: you see weeks of position movement at a glance, without having to drill into a chart.

---

### 3E. Indexing History Tab

**Info banner:** "Click Check Live next to any URL to ask Google if it has successfully indexed that specific page yet. It may take hours or days for Google to crawl pushed URLs."

- "Showing logs for: [domain]" with **Refresh** button
- Table columns: **Date | Type | URL | Status | Action**
- Each row: timestamp, type (URL globe icon), full URL (truncated if long), status (green Success badge), **Check Live** button

**Clicking Check Live:** queries Google in real time and shows an inline tooltip: "Indexed by Google" with State: "Submitted and indexed".

**Why this matters:**
This is the only tool in the Framer ecosystem that gives live indexing confirmation from Google directly inside the design tool. Every other workflow requires opening Google Search Console, pasting the URL, waiting, then switching back. RankFrame collapses that into a single click.

---

## 11. Section 4: SEO Analyzer (Site-Wide Audit)

**Subtitle:** "Analyze your website SEO."

This is the **site-wide** audit, different from the per-page audit inside the Pages section. Use this when you want a single score and a single PDF that summarises the entire site.

### Header
- **Live SEO** indicator (green dot)
- **Refresh Analysis** button
- **Download Audit** button (purple, exports the full PDF)

### Sidebar tip
"SEO Analyzer Tip. Pro Tip: Click any issue in the analyzer to see detailed suggestions." Every check item is clickable for deeper detail.

### Score panel
- **Last Checked** date
- **Full site URL**
- **Large circular score** (e.g. 82/100) with purple ring
- **Score breakdown** with colored dots:
  - **Red Zone** (count of critical fails)
  - **Warnings** (count)
  - **Green Zone** (count of passing checks)
  - **Speed** (response time in ms)
- Right side: brand pill ("RankFrame, Best Framer SEO Plugin") and target label ("Good SEO. Target: 90+")

### Filter tabs
- **All**
- **Green Zone**
- **Red Zone**
- **Warnings**
- **Speed** (separate dedicated tab, see below)

### Speed Tab (Core Web Vitals)

**Speed Insights** with **Re-analyze Speed** button.

**Two circular gauges side by side:**
- **Mobile Performance** (e.g. 72/100, amber)
- **Desktop Performance** (e.g. 61/100, amber)

**Core Web Vitals for each device:**
- **First Contentful Paint (FCP)**: when the first text or image appears
- **Largest Contentful Paint (LCP)**: when the main content has loaded (Google's primary loading metric)
- **Cumulative Layout Shift (CLS)**: how much the page jumps around as it loads (lower is better)

**Speed Optimization Suggestions** (specific and actionable):
- "Optimize large images using WebP format to improve Largest Contentful Paint (LCP)."
- "Minify CSS and JavaScript files."
- "Consider using a CDN for static assets to reduce server response time (1063ms)."

This data is pulled live from Google Lighthouse, the same engine Google uses to rank pages on Core Web Vitals.

---

## 12. Section 5: Image SEO

**Subtitle:** "Manage and auto-generate alt text for your website images to boost accessibility and SEO."

Image SEO is one of the most overlooked and most rewarding SEO levers. Google cannot see images, only their alt text. Every image without alt text is invisible to search and to screen readers. Most Framer sites have hundreds of images and none of them have proper alt text.

RankFrame solves this in minutes for the entire site.

### Header
- **Buy Credits** button (purple)
- **Credits balance** badge with coin icon (e.g. 60,498 Credits)
- **Expand/Collapse** arrows icon (toggles Minimized Mode, full panel width)

### Stats
- **Total Images** (e.g. 517)
- **Missing Alt** (orange number, e.g. 72)

### Controls
- Site selector (e.g. "7 Seers")
- Search field
- **Refresh** button
- **Export** button (purple, downloads CSV with all image data)

### Explorer (left panel within Image SEO)
A two-level tree:
- **All Images** (e.g. 517)
- **Canvas** (e.g. 428)
- **CMS** (e.g. 89, expandable)
  - Per-collection sub-folders: Our Cases (33), Our Service (29), Thoughts (8), Work (19)

### Image grid (right panel)

Each card row shows:
- **Checkbox** (left)
- **Thumbnail** of the image
- **Label:** "Canvas Image" or CMS file name (e.g. "01") with collection path (e.g. "Our Cases >")
- **Wand icon** (right): generates alt text for just that single image
- **Alt text input field** (full width below thumbnail/label):
  - Pre-filled with existing alt text if present
  - Empty placeholder "Alt text..." if missing
- **Red dot** on the thumbnail corner = missing alt text (visual indicator)

### Bulk generation

- Click **Select All** at the top: every card gets a purple border and check
- "Select All" toggles to "Deselect All"
- A large purple **Generate Alt Text (N)** button appears at the top of the grid, where N updates live based on selected count
- Click to bulk-generate alt text for every selected image (uses 1 credit per image)

This is the moment RankFrame turns hours of work into minutes.

### Pagination
Page X of Y, with **Prev** and **Next** arrows.

### Minimized Mode
Clicking the expand arrows icon collapses the outer plugin nav entirely, giving the full panel width to Image SEO. Useful for large bulk operations on multi-hundred-image sites. Click again to return to standard view.

### Suffix (referenced feature)
A global suffix can be appended to every alt text site-wide (e.g. "by Studio Name", "high-resolution photo"). This is set once and auto-applies to all generated alt text going forward. A massive time saver for branded portfolios where every image should signal authorship.

### Buy Credits flow

Clicking **Buy Credits** opens a top-up modal. Standard offers:
- **First-time max-credits offer:** $49 for 30,000 credits (one-time discount)
- **Regular refill:** $100 for 30,000 credits, or $10 for 1,000 credits at lower tiers

**1 credit = 1 AI generation** (alt text, meta title, meta description, schema field).

---

## 13. Account Settings

A modal opened from the user account block in the sidebar.

Two tabs: **Profile | Personalization**

### Profile tab
- **Avatar:** large purple circle with initials, small shield/auth badge at bottom-right
- **Name** (e.g. "7seers media")
- **Plan badge** (e.g. "Free Plan", or "Personal", "Agency")
- **Read Only View notice:** "To update your personal details or change your password, please visit your account dashboard." Profile data is read-only inside the plugin. All edits go through dashboard.rankframe.com.
- **Email Address** (read-only field with mail icon)
- **Joined Date** (calendar icon, e.g. April 24, 2026)
- **Status** (shield icon, e.g. "Google Auth" or "Email + Password")
- **Sign Out** button (full-width, dark red)

### Personalization tab
See Section 7 (Onboarding and Personalization) above for the full structure. The Personalization tab is editable here at any time, so you can refine your brand identity and strategy as your business evolves.

---

## 14. Pricing and Plans

### Personal Plan
- **Monthly:** $15/month
- **Annual:** $108/year (40% saving, equivalent to $9/month)
- 1 Framer site
- Full feature access
- Disconnecting the connected Personal site requires emailing hello@7seersmedia.com (1-site license is bound on connection)

### Agency Plan (most popular for studios)
- **Monthly:** $40/month
- **Annual:** $288/year (40% saving, equivalent to $24/month)
- Unlimited Framer sites under one subscription
- Full feature access
- Priority support
- Ideal for agencies and studios managing multiple client websites

### Free Trial (both plans)
- 7-day free trial, no credit card required
- Full feature access from day one
- **Trial limitations:**
  - **Image SEO:** no usage limit, but credits apply
  - **Automatic Schema:** limited to 3 visible pages during trial
  - **404 Monitor:** no limit, all errors tracked
  - **Recrawl:** 1 use during trial
  - **Submit Indexing:** limited to 2 URL submissions during trial
  - **Total Pages:** no limit, all visible
- All trial limits are lifted the moment you upgrade

### Yearly Billing
- 40% saving on both plans (Personal and Agency)
- Renewal countdown shown in the sidebar (e.g. "Renews in 357 days")

### Pricing rationale

- **$15** for Personal is positioned at one hour of typical freelance design work. If RankFrame saves you an hour per month, it pays for itself.
- **$40** for Agency at unlimited sites means even a 2-site agency saves money vs paying per seat on Yoast or Rank Math equivalents on multiple WordPress sites. For 5+ site agencies, the math becomes obvious.
- **40% annual saving** is the standard SaaS annual incentive, deliberately at the high end of typical (most are 15 to 25%) to push annual adoption.

---

## 15. AI Credits System

Credits power every AI feature in RankFrame:
- AI meta title generation (Global and per-page)
- AI meta description generation (Global and per-page)
- AI alt text generation (Image SEO, single or bulk)
- AI schema field suggestions (Auto-Generate flow)
- AI keyword and content recommendations

### Credit pricing
- **First-time offer:** 30,000 credits for $49 (one-time, biggest saving)
- **Regular refill:** 30,000 credits for $100, or 1,000 credits for $10 at smaller tiers
- **Free signup credits:** included on trial start (typically 500)

### Credit math
- **1 credit = 1 AI generation**
- Bulk image alt text on a 500-image site = 500 credits
- Refilling is instant via the Buy Credits modal in the Image SEO header
- Credits never expire while the subscription is active
- Credits are non-refundable once used

### Why credits, not unlimited AI

Two reasons: cost and quality. Underlying AI inference has a real per-call cost. Bundling a fair amount of credits into the trial and then charging for refills lets RankFrame keep the subscription price low ($15/$40) while letting heavy AI users pay for what they use. It also discourages abuse (auto-generating thousands of low-quality outputs that pollute the user's data).

---

## 16. Always-Visible Buttons (Bottom of Sidebar)

### See Billing (purple, full width)
Opens the billing portal (Polar.sh). Inside the portal you can:
- View plan and renewal date
- Switch monthly to annual
- Update payment method
- Download invoices
- Cancel subscription

### Recrawl Website (red/coral, full width)
Recrawls the connected Framer site to refresh:
- 404 monitor data
- Image inventory (catches new images)
- Page index
- Sitemap
- All audit data

**Trial users** get 1 recrawl. **Paid users** get unlimited recrawls.

Use Recrawl after major site changes (new pages, new CMS entries, new images) to make sure RankFrame's data reflects what is actually on your live site.

---

## 17. Downloadable PDF Audit Reports

Generated by clicking **Download Audit** on the SEO Analyzer page (site-wide) or the **Download** button on any per-page view.

### Report header
- **Title:** "SEO Audit Report : [Site Title]"
- Site URL
- Date
- **Summary tiles:** Passed | Failed | Warnings | Total Checks
- **SEO Score** (e.g. 82)

### Report body (4 sections, each with pass-rate %)

**Basic SEO** (10 checks): SEO Title, H1, H2, Links Ratio, Common Keywords (with top keyword frequency), SEO Description, Image ALT Attributes (with specific missing tags), Homepage Reachable, Responsive Design, Keywords in Title and Description.

**Advanced SEO** (12 checks): Sitemaps, Robots.txt, Broken Links, Noindex Meta, Canonical Tag, OpenGraph Meta, **Search Preview** (renders desktop Google snippet visually), **Mobile Snapshot** (renders mobile preview), Schema Meta Data, WWW Canonicalization, **Mobile Search Preview** (renders mobile Google snippet visually), Keep your content fresh.

**Performance** (5 checks): Page Size, Mobile Speed, Page Objects, Response Time, Image Headers Expire.

**Security** (2 checks): Theme Visibility, Secure Connection.

### Icons used in the report
- Check mark: Pass (green)
- X: Fail (red)
- Exclamation: Warning (orange)
- Info symbol: Info / preview (blue)

### Footer
"Generated by RankFrame, Report generated on [date]"

### Future plan: White-label and automated reports
Roadmap item: agencies will be able to replace the "Generated by RankFrame" footer with their own branding (logo, name, contact). Reports will run automatically on a schedule (weekly/monthly) and email to clients without manual download. This is the agency upsell that makes RankFrame indispensable beyond a single user.

---

## 18. Documentation Architecture

**Total planned:** 15 modules, 75 to 90 articles total.

### Module 1: Getting Started (8 articles)
1. What is RankFrame?
2. How to Install RankFrame in Framer
3. How to Connect Your Website in RankFrame
4. Understanding the RankFrame Dashboard
5. RankFrame Plans and Pricing
6. How to Upgrade or Change Your Plan
7. Managing Your RankFrame Account
8. How to Get Support for RankFrame

### Module 2: Global SEO Settings
Coverage: Basic tab, AI title/description, character limits, when to override site-wide defaults at page level.

### Module 3: Schema Markup
Coverage: each schema type (Person, Organization, Article, Book, Restaurant, Service), Manual vs Auto-Generate flows, JSON-LD validation, common schema mistakes.

### Module 4: Submit Indexing
Coverage: pushing sitemaps, manual URL submission, Search Console connection, reading the analytics dashboard, keyword tracker, indexing history, Check Live workflow.

### Module 5: Image SEO
Coverage: bulk alt text generation, the suffix feature, CSV export, credits used per generation, working with CMS images.

### Module 6: SEO Audit
Coverage: site-wide vs per-page audits, interpreting score zones, downloading PDF reports, fixing the most common issues.

### Module 7: 404 Monitor (with Exception Routes guide)
Coverage: enabling the script, allowed domains, reading the errors table, Exception Routes for catch-all paths.

### Module 8: Keyword Research
Coverage: using the Check function, reading Search Vol / KD / Competition / CPC, assigning keywords to pages, density best practices.

### Module 9: Page-Level SEO
Coverage: the split-screen view, Google Snippet preview, audit categories per page, downloading per-page PDFs.

### Module 10: Page Speed
Coverage: Core Web Vitals (FCP, LCP, CLS), interpreting mobile vs desktop scores, common Framer speed issues.

### Module 11: Keyword Tracker
Coverage: adding keywords, reading sparkline history, position deltas, comma-separated bulk add.

### Module 12: AI Personalization (onboarding deep dive)
Coverage: Brand Identity, Strategy fields, why each field matters for AI output quality, examples of strong vs weak inputs.

### Module 13: Billing
Coverage: Polar.sh portal, plan switches, invoices, cancellation, refund policy.

### Module 14: Account
Coverage: profile, sign-in methods, dashboard vs plugin edits, multi-device login.

### Module 15: Troubleshooting
Coverage: connection issues, missing pages, schema not injecting, Google verification stuck, AI credits not refilling.

---

## 19. SEO Strategy and Target Keywords

### Primary Keyword
- **Framer SEO plugin**

### Secondary Keywords
- SEO for Framer
- Framer SEO tool
- Framer plugin for SEO
- Framer website SEO
- Framer schema markup
- Framer JSON-LD
- Framer meta tags plugin
- Framer image SEO
- Framer 404 monitor
- Framer keyword tracker
- Framer schema generator
- Framer Google indexing
- Framer SEO audit
- Framer page speed
- Framer alt text generator

### Long-tail keywords
- how to do SEO on Framer
- how to add schema markup to Framer
- Framer website not indexed on Google
- how to add alt text in Framer
- best SEO plugin for Framer designers
- submit Framer site to Google Search Console
- Framer agency SEO tool
- Framer SEO checklist 2026

### Content hubs
- **Getting Started** (trust, onboarding)
- **Feature Deep Dives** (ranking for feature-specific queries)
- **Framer SEO Guides** (top-of-funnel educational)
- **Comparisons** (vs WordPress plugins like Yoast/RankMath, vs external tools like Ahrefs/Semrush, vs manual SEO)

---

## 20. Framer Marketplace Listing

- **Plugin Name:** RankFrame: SEO for Framer
- **Category:** SEO
- **Tagline:** The only native SEO plugin for Framer. Meta, schema, images, speed, 404s, keywords. All inside the plugin panel.
- **Install:** One click from Framer Plugin Marketplace

### Listing copy hygiene rules
- No em dashes
- No duplicated headings (Framer's listing editor sometimes pastes blocks 3x)
- Pricing must show $15/$40 (not $9/$24)
- Each feature heading appears once
- Every text block has line breaks (not run-on)
- Closing CTA at the bottom

---

## 21. Policy Documents

- **Privacy Policy:** rankframe.com/privacy
- **Terms of Service:** rankframe.com/terms
- **Refund Policy:** rankframe.com/refunds

### Key policy notes
- Support email for all policies: hello@7seersmedia.com
- Payment processor: Polar.sh
- International data transfer: data may be processed internationally via Polar.sh, Google APIs, and AI providers
- Refunds: within 7 days of purchase, reviewed case by case
- Credit purchases: non-refundable once credits are used
- Personal plan disconnect: requires email to support (1-site license is bound on connection)

---

## 22. llms.txt for AI Discovery

- **File location:** rankframe.com/llms.txt
- **Companion file:** rankframe.com/llms-full.txt
- **Purpose:** AI crawler discovery for ChatGPT, Claude, Perplexity, Gemini
- **Content covers:** product overview, every feature in detail, pricing, documentation, support, FAQs, comparisons, use cases, technical details, contact

In 2026, AI assistants are a meaningful share of how prospects find products. llms.txt is the standard for telling AI systems how to read your site for accurate summaries.

---

## 23. Key Differentiators (Expanded)

These are the points that come up in marketing copy, sales conversations, and competitive comparisons.

1. **Only native Framer SEO plugin.** Runs inside the plugin panel, not an external dashboard. No round-tripping.
2. **Schema injection without duplicate script tags.** RankFrame updates the existing schema script in place on republish, so you do not end up with three copies of the same JSON-LD bloating your HTML.
3. **Auto-Generate schema for the entire sitemap in one flow.** Pages Found screen, AI pre-fill, batch save. No tool in the Framer ecosystem matches this.
4. **Live page preview alongside per-page SEO editing.** See the page while you optimise it. Eliminates the "what does this page look like again?" tab switch.
5. **Image SEO at scale with AI alt text.** Bulk generation, CSV export, global suffix, CMS coverage. Hours of work in minutes.
6. **Live Google indexing confirmation.** "Check Live" returns Google's actual indexing state inline. No other Framer tool can do this.
7. **404 monitoring with Exception Routes.** Whitelist intentional catch-alls, keep the error log clean, never lose signal in noise.
8. **Google Lighthouse Core Web Vitals data inside Framer.** FCP, LCP, CLS for mobile and desktop, with specific suggestions.
9. **Live Google Search Console analytics inside the plugin.** Clicks, impressions, CTR, position. Drill-down by keyword, page, country, device.
10. **Built-in Keyword Tracker with sparkline position history.** Visual rank movement at a glance, no chart-drilling.
11. **AI Personalization onboarding** that makes every AI output specific to the brand. The reason RankFrame's AI does not sound generic.
12. **Downloadable PDF audit reports** (per-page and site-wide), white-label coming.
13. **Built by designers who use Framer daily.** Every feature came from a real client problem.

---

## 24. What RankFrame Does NOT Do

- **No automatic keyword discovery.** The Keyword Tracker uses GSC data. The Check function pulls Search Vol/Difficulty/Competition/CPC for a single keyword you type, not a discovery feed.
- **Image SEO works on Canvas pages and CMS collections that RankFrame can scan** (covered: Canvas, CMS Our Cases, Our Service, Thoughts, Work). Coverage of newly-added Framer features may lag.
- **Disconnecting a Personal-plan site requires emailing hello@7seersmedia.com** (the 1-site license is bound on connection to prevent license sharing).
- **No SEO for external non-Framer sites.** Framer-native only by design.
- **No A/B testing of meta tags.**
- **No competitor backlink analysis.**
- **White-label audit reports are roadmap, not yet shipping.**

Being explicit about non-features prevents misset expectations and reduces support load.

---

## 25. Future Roadmap

- **White-label SEO audit reports:** agencies replace "Generated by RankFrame" with their own branding (logo, name, contact)
- **Automated audit scheduling:** weekly/monthly reports auto-emailed to clients
- **More schema types:** HowTo, FAQPage, Product, LocalBusiness, BreadcrumbList expansion
- **CMS image SEO expansion:** deeper coverage as Framer adds new CMS features
- **Team collaboration:** multi-user access on Agency plan
- **Client dashboards:** read-only client view of audit progress
- **API access:** programmatic audit triggers for agencies

---

## 26. Audience Personas in Depth

### 1. Solo Freelance Designer
- **Plan:** Personal ($15/mo)
- **Sites:** 1, often their portfolio
- **Pain:** wants client work to come in via Google but does not want to learn SEO from scratch
- **Wins with:** AI meta titles/descriptions, schema auto-generate, alt text bulk generation, Submit Indexing
- **Likely upgrade triggers:** first organic lead from Google, first client asking "what's your SEO?"

### 2. Studio / Agency
- **Plan:** Agency ($40/mo)
- **Sites:** 5 to 30 client sites
- **Pain:** SEO is a service line, but doing it manually for every client is unprofitable
- **Wins with:** unlimited sites, white-label audit PDFs (roadmap), bulk schema, GSC analytics inside Framer
- **Likely upgrade triggers:** second site added (Personal cap), white-label roadmap announcement

### 3. Indie Hacker / SaaS Founder
- **Plan:** Personal ($15/mo)
- **Sites:** 1 product landing page
- **Pain:** technical, knows SEO matters, hates the GSC round trip
- **Wins with:** Submit Indexing, Check Live, Core Web Vitals, schema for SaaS Article/Service
- **Likely upgrade triggers:** Product Hunt launch, new feature page, growth marketing pressure

### 4. Local Business Owner
- **Plan:** Personal ($15/mo)
- **Sites:** 1 local business site (restaurant, salon, studio, clinic)
- **Pain:** wants Google Maps and local search visibility
- **Wins with:** Restaurant/Service schema, Google indexing, keyword tracker for local terms
- **Likely upgrade triggers:** new location opens, seasonal campaign

### 5. Marketing Team
- **Plan:** Agency ($40/mo) or Personal at scale
- **Sites:** 1 main site, possibly campaign microsites
- **Pain:** needs SEO visibility for a non-technical marketing team
- **Wins with:** dashboard analytics, audit PDFs for stakeholder reports, keyword tracker
- **Likely upgrade triggers:** quarterly review, board reporting cycle

---

## 27. Use Case Walkthroughs

### Walkthrough A: Freelancer launches a new portfolio
**Goal:** get the new portfolio site indexed and ranking for "freelance designer [city]"

1. Install RankFrame from Framer Marketplace, start free trial
2. Complete Personalization (Brand: own name, About: positioning paragraph, Industry: Freelance Design, Audience: Startups, Goals: Generate Leads + Brand Awareness)
3. Open Global Settings > Basic, click Write with AI, accept the meta title and description
4. Go to Advanced, click Auto-Generate, generate schema for Person and Service pages
5. Open Image SEO, Select All, Generate Alt Text for the entire portfolio (a typical 80-image portfolio costs 80 credits)
6. Go to Submit Indexing > Submit URLs, click Push Sitemap
7. After 24-48 hours, return to Indexing History and click Check Live on the homepage
8. Add target keywords ("freelance designer mumbai", "framer designer freelance") in Keyword Tracker

Total time: under 30 minutes. Result: full SEO foundation deployed.

### Walkthrough B: Agency onboards a new client site
**Goal:** deliver SEO baseline to a new client in one work session

1. Create a new Framer project (or take over the existing one)
2. Open RankFrame, complete Personalization with the client's brand and positioning
3. Run Recrawl to make sure RankFrame has a full picture
4. SEO Analyzer: Download Audit (use as the baseline for client reporting)
5. Pages: walk through each page, accept AI meta titles/descriptions
6. Advanced: Auto-Generate schemas, review, Save & Inject
7. Image SEO: bulk-generate alt text for all images
8. Submit Indexing: Push Sitemap, then push specific landing pages individually
9. Set up Keyword Tracker with the client's target keywords (10 to 20 to start)
10. Schedule a follow-up review for one month, by which point GSC data will populate Analytics

Total time: 1 to 2 hours per client site.

### Walkthrough C: Restaurant launches a new menu page
**Goal:** rich Google results for the new menu, plus Google Maps signal

1. Create the new menu page in Framer
2. Open RankFrame > Pages, find the new page, accept the AI title/description
3. Global Settings > Advanced > + Manual Schema, choose Restaurant
4. Fill the schema: name, description, phone, address, cuisine, menu URL, price range, opening hours per day
5. Validator (Ext) to confirm via Google Rich Results Test
6. Save & Inject
7. Submit Indexing > Push the new page URL
8. After 48 hours, Check Live to confirm indexing
9. Add "best [cuisine] in [city]" to Keyword Tracker

---

## 28. Comparisons

### vs Yoast / Rank Math (WordPress)
- **They are WordPress only.** Neither runs on Framer.
- Yoast and Rank Math are mature, but they assume a WordPress workflow: server, database, theme, plugins. Framer has none of those.
- RankFrame matches their feature surface (meta, schema, audits) and adds Framer-native advantages they cannot replicate (live preview alongside SEO panel, Framer-aware image scanning).

### vs Ahrefs / Semrush
- These are research and monitoring suites, not editors. They tell you what is wrong, but you have to fix it elsewhere.
- They cost $99 to $499 per month, vs $15 to $40 for RankFrame.
- RankFrame complements them: use Ahrefs for deep keyword research and backlink work, use RankFrame for everything you actually have to ship inside your Framer site.

### vs Manual SEO in Framer
- Manual = paste meta tags into Framer fields, paste JSON-LD into custom code blocks, write alt text by hand, open Search Console for every URL.
- A typical 30-page Framer site takes 6 to 10 hours of manual SEO work to set up properly.
- RankFrame compresses the same work into 30 minutes to 2 hours, with consistent quality across pages.

### vs External Framer SEO dashboards
- A few external SaaS tools claim Framer support. They are still external.
- They scrape your site from outside, which is slower and often incomplete.
- They require switching to another tool to see anything.
- RankFrame runs inside Framer with direct access to your project structure.

---

## 29. Frequently Asked Questions

### Is RankFrame really inside Framer?
Yes. It runs as a Framer plugin in the side panel. You install it from the Framer Plugin Marketplace and it opens inside the Framer editor.

### Do I need to know SEO to use RankFrame?
No. Every check has plain-language suggestions. Every AI feature accepts a one-sentence brand description and writes proper SEO copy from there.

### Will it slow down my Framer site?
No. The schema injection adds a small JSON-LD script tag (a few KB at most). The 404 monitor script is minimal. Nothing else loads on the live site.

### Can I use RankFrame with my existing Search Console property?
Yes. The Setup tab connects your Google account and uses your existing property if it exists, or auto-verifies a new one.

### What happens to my data if I cancel?
Your settings, schemas, alt text, and audit history stay saved on your account. If you reactivate, you pick up where you left off. Schema injection and 404 monitoring stop running while inactive.

### Does the Personal plan include all features?
Yes. Personal and Agency have the same feature set. The only difference is site count (1 vs unlimited).

### Can I switch from monthly to annual?
Yes, anytime, through the See Billing button (Polar.sh portal). The 40% annual saving applies immediately.

### Are AI credits a separate purchase from the subscription?
Yes. The subscription gives you access to RankFrame. Credits power the AI generations and are bought in top-ups. The first-time offer is $49 for 30,000 credits (one-time discount).

### Do credits expire?
No. As long as your subscription is active, credits never expire.

### What if Framer adds a new CMS feature that RankFrame does not yet support?
RankFrame coverage of new Framer features may lag for a short period while we update. The roadmap explicitly calls out CMS image SEO expansion as ongoing work.

### Can I cancel anytime?
Yes. Cancel from the Polar.sh billing portal. Your access continues until the end of the current billing period.

### Is there a refund?
Within 7 days of purchase, reviewed case by case. Credit purchases are non-refundable once credits are used.

### How do I get support?
Email hello@7seersmedia.com or click Support in the plugin sidebar. The green dot indicates when the team is online.

---

## 30. Glossary

**Alt text:** A text description of an image used by Google and screen readers to understand what the image shows.

**Canonical URL:** The "official" URL for a page, used to tell Google which version of a page to index when multiple URLs return the same content.

**Core Web Vitals:** Google's set of page speed and stability metrics: First Contentful Paint (FCP), Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS).

**CTR (Click-Through Rate):** The percentage of search impressions that result in a click.

**Focus keyword:** The primary keyword you want a specific page to rank for.

**Google Indexing API:** Google's official API for notifying it when pages have been added or updated. RankFrame uses this for Submit Indexing.

**Google Search Console (GSC):** Google's free tool for monitoring search performance. RankFrame pulls live data from your verified GSC property.

**JSON-LD:** A format for embedding structured data (schema markup) in HTML using JavaScript Object Notation.

**Keyword Density:** The percentage of times a keyword appears on a page relative to total word count. Healthy range is typically 0.5% to 2.5%.

**Keyword Difficulty (KD):** A score (typically 0 to 100) estimating how hard it is to rank for a given keyword.

**Meta Description:** The HTML tag that controls the description shown under your page title in search results.

**Meta Title:** The HTML tag that controls the clickable headline shown for your page in search results.

**Noindex:** A meta tag or directive telling search engines not to include a page in the search index.

**OpenGraph (OG):** Meta tags that control how a page appears when shared on social platforms (Facebook, LinkedIn, Slack).

**Polar.sh:** RankFrame's payment processor.

**Rich Results:** Enhanced Google search listings (star ratings, breadcrumbs, prices, FAQs) made possible by schema markup.

**Robots.txt:** A file at the root of your site that tells search crawlers which paths to crawl or skip.

**Schema markup:** Structured data (typically in JSON-LD format) that helps search engines understand what your content is about.

**SERP:** Search Engine Results Page.

**Sitemap:** An XML file listing every URL on your site, submitted to Google to help it discover and crawl your pages.

**Sparkline:** A small inline chart showing a trend, used in the Keyword Tracker for position history.

**WWW Canonicalization:** The practice of redirecting either www or non-www to a single preferred version of your domain.

---

## 31. Support and Contact

- **Email:** hello@7seersmedia.com
- **In-plugin Support:** click Support in the sidebar (green dot when team is online)
- **Documentation:** click Documentation in the sidebar
- **Dashboard:** dashboard.rankframe.com
- **Website:** rankframe.com
- **Marketplace:** Framer Plugin Marketplace

For policy questions, refund requests, or Personal-plan site disconnection: email hello@7seersmedia.com.

---

## 32. Document Maintenance

This document should be updated whenever:
- A new feature ships
- Pricing changes
- A new schema type is added
- A new plan tier is introduced
- The UI changes (tabs, sections, buttons rename)
- A new policy document goes live
- The white-label / automated report features ship
- The roadmap shifts

**Last meaningful update:** 2026-05-24
**Maintained by:** 7 Seers (hello@7seersmedia.com)
**Source repository:** github.com/Nitin4455002/claudecode
**Branch:** claude/email-sequence-zapier-sDCVx

---

## 33. Website Issues to Fix (rankframe.com)

These are issues currently live on rankframe.com that should be corrected:

- Pricing showing $9/$24 instead of $15/$40
- Placeholder impact stats: "0 Hours +", "0 X", "0%" (need real numbers or remove the section)
- Both plans labeled "Popular" (only Agency should be marked)
- Hero and subheadline say the same thing back-to-back
- Footer typo: "All Rights Reserve" should be "All Rights Reserved"
- No support email or contact link in footer (add hello@7seersmedia.com)

---

## 34. Common Marketing Frames

### One-liner
The first and only native SEO plugin for Framer.

### Problem statement
Every other SEO plugin was built for WordPress. They assume you have a developer, a separate CMS, and hours to spend manually managing meta tags and sitemaps. Framer designers do not work that way.

### Solution statement
RankFrame is built from scratch around how Framer sites are actually made: visual, fast, component-driven. It plugs directly into the Framer editor, reads your site structure automatically, and gives you complete SEO control without ever leaving your workspace. No developer needed. No code required. No separate tools.

### Audience-specific framing
- **Freelancers:** Personal plan, $15/mo, one site, all features.
- **Studios and agencies:** Agency plan, $40/mo, unlimited sites, white-label reports coming.
- **Indie hackers and SaaS founders:** ship Framer landing pages with proper schema, instant indexing, and Core Web Vitals visibility.
- **Local businesses:** add Local Business schema, track local keywords, monitor 404s as content updates.
- **Marketing teams:** run audits before campaign launches, push sitemap on every release, track campaign keywords.

### Closing CTA
Install RankFrame from the Framer Plugin Marketplace and start your 7-day free trial today. No credit card required. Full access from day one.

---

## 35. CMS Technical Reference

### Framer CMS Collection IDs
| Collection | ID |
|---|---|
| Docs | IKNAcLsmG |
| Blogs | snViqNO8w |
| Authors | Z4qtKv8SE |

### Framer CMS Field IDs
| Collection | Field | ID |
|---|---|---|
| Docs | Body (formattedText) | sHhGfW04g |
| Docs | Category (enum) | fVuwbLmH7 |
| Docs | Related Articles (multiCollectionReference) | U4WVQW5L4 |
| Blogs | Body (formattedText) | T9YGixXzB |
| Blogs | Tag (enum) | XVw2ca3RE |
| Blogs | Author (collectionReference) | XxMGFR5_2 |
| Blogs | Related Posts (multiCollectionReference) | cBGVH1_aT |

### Doc Category Enum IDs
| Category | Enum ID |
|---|---|
| Getting Started | GfikN8Pjd |
| Global SEO Settings | S1WQAvZsE |
| Schema Markup | BdEaQqGmh |
| Submit & Indexing | DzZlUTufZ |
| Image SEO | xpOJ9obDp |
| SEO Audit | i6OLNgwML |
| 404 Monitor | WAjesYucg |
| Pages | rcEEptKk8 |
| Keyword Research | Z9ma3ynZa |
| Page Speed | eyUNwuO14 |
| Keyword Tracker | JYShCFtEh |
| AI Personalization | abAFvWlLe |
| Billing | XqXD1SZ_5 |
| Account | mfmGKCB07 |
| Troubleshooting | IHtUfD_jZ |

### Blog Tag Enum IDs
| Tag | Enum ID |
|---|---|
| Framer SEO | HmR6NZi2u |
| Plugin Review | feE2B6mo5 |
| SEO Checklist | piH7frp3e |
| Schema Markup | FcPPhm_Qn |
| SEO Fundamentals | NKjXYXQKE |
| How-To Guide | lQb4jcPX8 |

### Blog Listing Page Node IDs (Framer canvas)
| Node | ID |
|---|---|
| Page | fajtLTGc7 |
| TitleDescription container | DVa8DCnAl |
| Section label "Blogs" | NJAhJW2sS |
| Heading (H1) | PJvcuWk5U |
| Body/subtitle | S5jiKUF5w |

Blog listing page heading was changed to: "The Framer SEO playbook"
Blog listing page subtitle was changed to: "Guides, deep dives, and how-tos on indexing, schema, keywords, and everything that makes Framer sites rank."

### Critical upsert rules
- Every doc upsert MUST include the Category enum field (fVuwbLmH7) or Framer returns a validation error.
- Related Articles/Posts fields expect item IDs, not slugs. Build a slug-to-ID map from getCMSItems before upserting.
- Strip npm notice lines from unframer output before YAML parsing: `"\n".join(l for l in r.stdout.splitlines() if not l.startswith("npm"))`

### Reusable link injector pattern
```python
def add_internal_links(html, link_map, self_slug, max_links=8):
    stash_dict = {}
    def stash(p):
        def fn(m):
            k = f'\x00{p}{len(stash_dict)}\x00'
            stash_dict[k] = m.group(0)
            return k
        return fn
    html = re.sub(r'<a\b[^>]*>.*?</a>', stash('A'), html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<h\d[^>]*>.*?</h\d>', stash('H'), html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<(?:code|pre)[^>]*>.*?</(?:code|pre)>', stash('C'), html, flags=re.DOTALL|re.IGNORECASE)
    added = []
    for keyword in sorted(link_map.keys(), key=len, reverse=True):
        if len(added) >= max_links: break
        target = link_map[keyword]
        if self_slug and self_slug in target: continue
        pat = re.compile(r'\b' + re.escape(keyword) + r'\b', re.IGNORECASE)
        m = pat.search(html)
        if not m: continue
        before = html[:m.start()]
        if before.rfind('<') > before.rfind('>'): continue
        matched = m.group(0)
        html = html[:m.start()] + f'<a href="{target}">{matched}</a>' + html[m.end():]
        added.append(keyword)
    for k, v in stash_dict.items(): html = html.replace(k, v)
    return html, added
```

### External link targets
- "Framer" text links to: `https://framer.link/7seersmedia` (affiliate)
- "7 Seers" / "7Seers" text links to: `https://7seersmedia.com`
- Internal blog links use: `/blogs/[slug]`
- Internal doc links use: `/docs/[slug]`

### Scripts stored in /tmp
| Script | Purpose |
|---|---|
| /tmp/clean_dashes_blogs.py | Remove em dashes and double dashes from all blog content |
| /tmp/clean_dashes_docs.py | Same for docs |
| /tmp/heavy_link_sweep.py | Double sweep: external links + expanded internal link map across all content |
| /tmp/fix_leading_spaces.py | Strip leading whitespace/nbsp from inside p tags |
| /tmp/audit_links.py | Audit link density across all content (internal, framer.com, 7seers counts) |
| /tmp/add_framer_strategic.py | Add Framer mentions to articles with zero occurrences |
| /tmp/fix_links_and_add_internal.py | Fix broken /blog/ links and Phase 1-3 internal links |
| /tmp/expand_blog_doc_links.py | Schema blog-to-doc cross-links and schema doc internal links |

---

## 36. Session Log

### Session: 2026-05-24

**CMS work completed on rankframe.com:**

1. Fixed 25 broken internal links from `/blog/` to `/blogs/` across all content.
2. Added strategic "Framer" mentions to 14 docs and 2 blogs that had zero occurrences of the word.
3. Phase 1-3 internal linking sweep: connected related blogs, docs, and feature pages into a dense content graph.
4. Schema-specific cross-linking: every schema blog links to relevant schema docs, schema docs cross-link each other.
5. Heavy double sweep for internal and external links: affiliate links to framer.link/7seersmedia for "Framer" mentions, links to 7seersmedia.com for "7 Seers" mentions, expanded keyword-to-URL map across all 83 docs and 34 blogs.
6. Removed all em dashes (both `--` and `--`) from every blog and doc body. Smart replacement: colon after `</strong>` and `</a>` for label-style text, comma elsewhere. Code blocks and HTML comments protected.
7. Fixed blog listing page title and subtitle (was finance template placeholder copy).
8. Fixed weird leading whitespace/indentation inside paragraph tags: 2 docs (buy-credits, minimized-mode) and 21 blogs updated.

**LinkedIn profile work for Harsh Upadhyay:**

- Reviewed headline (Co Founder & VP of Design at 7Seers).
- Rewrote About section for UK job market, MBA positioning, Dieter Rams quote, no em dashes.
- Recommended top 5 skills: Product Design, User Experience (UX), Web Design, Figma, SEO.
- Reviewed Experience section: advised removing "No-Code Developer" from titles, rewriting descriptions with outcomes and numbers, noting overlapping Contra role, deprioritizing 2022 internship.

**Contra case study: RankFrame**

Full case study copy written for Harsh's Contra portfolio covering:
- Role and scope (founding designer and no-code engineer, full-stack build solo)
- Visual language and design system decisions
- Full page/IA inventory
- Homepage structure and conversion logic
- Responsiveness approach
- CMS architecture for blog and docs (field design, schema, references)
- SEO infrastructure: internal linking graph, external links, keyword-led content, JSON-LD on every template, image SEO across every article
- Documentation as product strategy (shipped day one, self-serve path, organic authority from launch)
- Outcomes section (to be filled with real numbers)

---

## 37. Contra Case Study: RankFrame

**Role:** Founding Designer and No-Code Engineer
**Scope:** Product design, design system, marketing site, CMS architecture, technical SEO, content strategy, launch documentation
**Stack:** Framer, custom CMS, JSON-LD, structured data

### The brief

RankFrame is an SEO toolkit built for Framer sites. The challenge was not just designing an interface. It was designing an entire ecosystem that could compete with established SEO tools on day one, sell itself to a technical audience, and prove its own thesis by being the best-ranked Framer site in its category.

I led the project end to end, from the first wireframe to the launch-day documentation.

### Building a product, not just a website

Before any pixels, I mapped what the product needed to do, who would buy it, and what would convince them to pay. That shaped every design decision after.

The site had to:
1. Communicate a technical product to a non-technical audience without losing credibility
2. Convert visitors inside thirty seconds
3. Rank organically for high-intent keywords so the product could acquire its own customers
4. Support the product post-purchase with deep documentation

A landing page alone could not do that. So I designed a full system.

### Visual language: clean, minimal, technical

The design language is restrained on purpose. The product sells precision and control, so the interface needed to feel like an engineering tool, not a marketing brochure.

- Tight type scale built on a single sans-serif family
- Generous whitespace as a structural element, not decoration
- Monochrome base with one accent for interactive moments
- Custom iconography drawn to match the type weight
- Components designed once, used everywhere, never duplicated

The result is a site that reads as confident without trying to perform confidence.

### Pages and information architecture

I designed and built every page in the system: Home, Pricing, Features (individual pages per module), Blog index and article template, Docs index and category pages and article template, Author pages, Changelog, Legal pages, 404 and utility pages.

Each template was designed as a system, not a one-off. A new blog post inherits typography, spacing, internal linking patterns, and metadata structure automatically.

### The homepage

The homepage carries the heaviest load. I structured it around progressive disclosure: a hero that explains the product in one sentence, a feature grid that animates only on intent, embedded product demos that play inline hosted natively to keep load times low, social proof positioned where doubt typically appears, and a pricing tease before the full pricing page to capture mid-funnel users.

### Responsiveness as a first-class concern

I built every layout at four breakpoints, then audited each component individually for touch targets, type readability, and motion behaviour. Animations scale down on smaller devices rather than disabling entirely.

### CMS architecture: the part most teams skip

I designed and built two full CMS systems inside Framer.

**Blog CMS:** Author references, category enums, related-article references, reading time and publish-date automation, featured-image structure with built-in alt-text and dimension fields, a body field built for rich HTML structured for SEO from the inside out.

**Docs CMS:** Category taxonomy mapped to the product's actual feature surface, related-doc references for in-context navigation, versioned where it mattered, evergreen where it did not.

Every field was deliberate. Nothing was added "in case we need it."

### SEO baked into the build, not bolted on

**Internal linking.** Every blog post and every doc was hand-linked into a network. Blogs link to relevant docs. Docs link to related docs. The product feature pages link to the docs that explain them.

**External linking.** Strategic outbound links to authoritative sources placed deliberately, never as filler.

**Keyword-led content.** Every blog and doc was written around a target search query, with headings, meta titles, and body copy optimized without sacrificing readability.

**Schema and structured data.** Every page ships with JSON-LD for the correct entity type: Article, FAQ, BreadcrumbList, SoftwareApplication, Organization. Wired in at the template level so it scales for every future post.

**Image SEO.** Every single image across the blog and docs has meaningful alt text, optimized dimensions, modern formats, and descriptive filenames.

### Documentation as a product strategy

I launched RankFrame with a complete documentation library on day one. Every feature, every setting, every edge case had a written guide before the product hit Product Hunt. This reduced inbound support tickets, built organic search authority from launch day (each doc targets a long-tail query), and signalled product maturity to enterprise users evaluating the tool.

Designing the docs experience to feel as polished as the marketing site was non-negotiable. Search, navigation, related content, and reading flow were all treated as product features.

### A complete framework, designed and built by one person

The full site, the marketing system, the blog, the docs, the CMS schemas, the SEO infrastructure, and the launch content were designed and shipped by one person. Working in Framer allowed movement from idea to live build without handoff, but the discipline behind it is product design: defining the problem, structuring the system, and validating that every decision earned its place.

### Outcomes

- Shipped a complete product surface (marketing, blog, docs, CMS) in a single coordinated launch
- Indexed within days, ranking for target Framer SEO keywords inside the first month
- Documentation measurably reduced inbound support load
- The site itself is now the strongest sales asset for the product
