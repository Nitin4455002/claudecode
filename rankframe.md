# RankFrame: Complete Product Reference

This document is the single source of truth for RankFrame. Use it for marketing copy, listing copy, documentation, support replies, llms.txt, schema, and any AI-generated content about the product.

---

## Quick Facts

- **Product:** RankFrame, a native Framer SEO plugin
- **Maker:** 7 Seers, design and software studio in Lucknow, India
- **Founders:** Harsh Upadhyay, Utkarsh
- **Support:** hello@7seersmedia.com
- **Website:** rankframe.com
- **Dashboard:** dashboard.rankframe.com
- **Marketplace:** Framer Plugin Marketplace
- **Payment processor:** Polar.sh
- **Launch:** May 2026
- **Tagline:** The first and only native SEO plugin built for Framer

---

## Brand Rules

- Never use em dashes anywhere, ever. Use commas, colons, parentheses, or periods instead.
- Tone: second person, instructional, designer-first.
- Primary keyword: "Framer SEO plugin"
- Secondary keywords: "SEO for Framer", "Framer SEO tool", "Framer plugin SEO"
- Always frame the product as native to Framer (lives inside the editor, not an external dashboard)

---

## The Plugin Interface (Layout & Navigation)

The plugin opens inside Framer as a side panel. Every screen shares the same outer chrome.

### Top bar
- RankFrame logo and product name
- Close (X) button

### Left sidebar (always visible)
1. **RankFrame** label with back arrow (returns to plugin home)
2. **Five main navigation items:**
   - Global Settings (gear icon)
   - Pages (database icon)
   - Submit Indexing (lightning bolt icon)
   - SEO Analyzer (bar chart icon)
   - Image SEO (image icon)
3. **SEO Score widget** below nav: circular progress ring with current score (e.g. 82) and label (e.g. "Excellent")
4. **Support** (green dot indicator when team is online)
5. **Documentation** (book icon)
6. **Go To Dashboard** (globe icon, opens dashboard.rankframe.com)
7. **User account block:** avatar (initials in purple circle), name, email
8. **Plan info:** plan tier and renewal countdown (e.g. "Agency Yearly Plan, Renews in 357 days")
9. **See Billing** button (purple, full width)
10. **Recrawl Website** button (red/coral, full width)

### SEO Score Widget Labels
- 90+ Excellent
- 80-89 Good (current label range for "Excellent" pill at 82)
- 60-79 Needs Work
- Below 60 Critical

---

## Onboarding Flow (Personalization)

When a user first connects a Framer site to RankFrame, the **Personalization** screen appears before any AI feature can run. This is what makes every AI suggestion specific to the user's business instead of generic.

Personalization sits inside Account Settings under the Personalization tab. It has two sections:

### 1. BRAND IDENTITY
- **Brand Name:** free text (e.g. "7 Seers")
- **Brand About:** multi-line description of what the business does, who it serves, and what makes it different

### 2. STRATEGY
- **Main Goals:** multi-select dropdown ("4 Goals Selected"). Options include Increase Traffic, Generate Leads, Boost Sales, Brand Awareness, Local Presence, Improve Authority
- **Industry:** tag input (SaaS, Agency, E-commerce, Startup, etc.). Press Enter to add multiple tags.
- **Audience:** tag input (SaaS Founders, Business Owners, Premium Businesses, etc.). Press Enter to add multiple tags.
- **Competitors (URLs):** add competitor URLs one per line (e.g. https://dashdigital.studio/) with a "+ Add Competitor" link
- **Save Settings** button (full-width purple)

This data feeds every AI output: meta titles, meta descriptions, image alt text, schema field suggestions. Without it, AI gives generic copy. With it, AI writes copy that sounds like the brand.

---

## Section 1: Global Settings

Four tabs across the top: **Basic | Keywords | Advanced | 404 Monitor**

### 1A. Basic Tab
"Update your SEO title and description, both of which can also be customized at the page level."

Two-column layout:
- **Left column:** Current Title (read-only display of live site title) with character counter (X/70). Current Description with counter (X/260).
- **Right column:** AI-Generated Title with Copy and "Write with AI" buttons. AI-Generated Description with Copy and "Write with AI" buttons.

Character limits:
- Title: 70 characters recommended max
- Description: 260 characters recommended max (Google often truncates around 160)

The "Write with AI" button uses credits from the AI Credits balance and pulls context from Personalization data.

### 1B. Keywords Tab
"Manage focus keywords and review keyword density for your homepage."

**Focus Keyword Script** toggle (on/off): enables meta keyword injection on the live site.

**Target Page** dropdown: select which page the keyword applies to. Lists every page from the sitemap (/, /thoughts, /projects/rkg, etc.).

**Keyword input field** with Check and Save buttons. After typing a keyword and clicking Check, four metric cards populate:
- Search Vol
- Difficulty (KD)
- Competition
- CPC

Helper text: "Keyword will be assigned to the selected page."

**Saved Keywords (N):** list of keywords already assigned, each with Vol and KD (red if difficulty is high). Each row has a delete (trash) icon. Manage and Hide controls in the header.

**Keyword Analysis** (with Show details/Hide details toggle):
- Total Keywords (e.g. 50)
- Avg Density (e.g. 0.84%)
- Total Frequency (e.g. 10371)

**Keyword Details:** filter by word count (1 word, 2 words, 3 words). Search keywords field. Table: Keyword | Freq | Density (e.g. "and" 1232, 4.99%; "to" 849, 3.44%).

### 1C. Advanced Tab (Schema Injection)
"Manage and inject structured data (JSON-LD) across your website."

**Schema Injection** toggle (on/off, master switch).

Two action paths:
- **+ Manual Schema** (dark button): build a schema from scratch
- **Auto-Generate** (purple button, primary): AI scans the sitemap and generates schemas for every page

**Saved Schemas** section with Refresh and Hide Management controls. Two sub-tabs:
- **Manual (N):** schemas the user built by hand
- **Generated (N):** schemas auto-generated by AI

Each saved schema row shows: schema name, type pill (e.g. ORGANIZATION, ARTICLE), URL the schema is bound to, edit (pencil), enable toggle, delete (trash).

Bottom bar: "N schemas ready for injection" with green **Save & Inject** button.

#### Manual Schema Flow
1. Click + Manual Schema
2. **Select Page for Schema** screen: search pages, click any URL from the sitemap
3. **Add a Schema** screen: pick schema type
4. Fill the form
5. Preview JSON or open Validator (Ext) to confirm via Google's Rich Results Test
6. Save & Inject

#### Auto-Generate Flow
1. Click Auto-Generate
2. **Pages Found** screen: shows N URLs in sitemap, each row indicates current schema state
   - Page with schema: green dot + schema type badge + </> (view JSON) + refresh (regenerate)
   - Page without schema: "No Schema" label + Generate button
3. Click Generate on any page: opens the schema form pre-filled with AI-generated content (Article Type, Headline, URL, Description, Image URL)
4. Edit the AI output, then Save to push it into Saved Schemas, Generated tab
5. Toggle each schema on, then Save & Inject to push everything live

Info banner on the Auto-Generate screen: "This view displays raw AI-generated schemas. Any schemas you edit and save will appear in the Saved Schemas section."

#### Schema Types Supported
1. **Person and Organization Schema** (toggle Person/Organization via radio inside the form)
2. **Article Schema** (with Article Type sub-options like Article, BlogPosting, TechArticle, NewsArticle)
3. **Book Schema**
4. **Restaurant Schema**
5. **Service Schema**

(Internal docs may also reference HowTo, FAQPage, Product, LocalBusiness, WebSite, BreadcrumbList for future expansion.)

#### Schema Form Tabs
Every schema form has three tabs:
- **Edit:** field-by-field form
- **Preview JSON:** see the raw JSON-LD output before injection
- **Validator (Ext):** opens Google Rich Results Test in a new tab with the schema pre-loaded

Bottom of every form has two buttons: **Copy JSON** and **Save Schema**.

#### JSON-LD Preview Modal
Clicking </> on any auto-generated page opens a modal showing the raw structured data, e.g.:
```json
{
  "url": "https://7seersmedia.com/",
  "logo": "https://framerusercontent.com/images/...",
  "name": "7 SEERS Media",
  "@type": "Organization",
  "@context": "https://schema.org"
}
```

#### Auto-Generate: Current vs Future Behavior
- **Current:** Auto-Generate uses the same schema type form fields as Manual Schema. The AI fills each field (Headline, URL, Description, Image URL, etc.) based on page content, URL, and Personalization data. The user then reviews and edits each field before saving.
- **Future (roadmap):** Auto-Generate will shift to a fully AI-driven model where the AI reads the live page content directly and produces the entire schema without relying on the manual form field structure. This will produce more specific, page-aware schemas automatically.

#### Schema Field Reference

##### Person and Organization Schema Fields
Both types share the same form. A radio toggle at the top switches between Person and Organization (sets the `@type`).

| Field | JSON-LD property | Notes |
|---|---|---|
| Name | `name` | Full name of person or official brand name of organization |
| URL | `url` | Canonical URL representing the entity, usually homepage or about page |
| Image URL | `image` | Profile photo (Person) or logo (Organization). Square/near-square recommended |
| Job Title | `jobTitle` | Person's professional role (e.g. "Founder", "Creative Director"). Person only |
| Company | `worksFor.name` | Organization the person is affiliated with. Person only |
| Social Profiles | `sameAs` (array) | Multiple URLs: LinkedIn, X, Instagram, Facebook, YouTube, Wikipedia, etc. One per entry |

##### Article Schema Fields
Article Type selector at top: **Article**, **BlogPosting**, **TechArticle**, **NewsArticle** (sets `@type`).

| Field | JSON-LD property | Notes |
|---|---|---|
| Article Type | `@type` | One of: Article, BlogPosting, TechArticle, NewsArticle |
| Headline | `headline` | Article title, under 110 chars, match visible H1 |
| URL | `mainEntityOfPage.@id` | Canonical URL of the article page |
| Description | `description` | 1-2 sentence summary |
| Image URL | `image.url` | Featured image, absolute URL |
| Image Width | `image.width` | Pixel width, Google recommends 1200+ |
| Image Height | `image.height` | Pixel height, Google recommends 630+ |
| Author Name | `author.name` | Individual who wrote the article |
| Author URL | `author.url` | Author's profile or bio page |
| Publisher Name | `publisher.name` | Publishing organization |
| Publisher Logo URL | `publisher.logo.url` | Publisher logo, 600x60px preferred |
| Date Published | `datePublished` | ISO 8601: YYYY-MM-DD |
| Date Modified | `dateModified` | ISO 8601: YYYY-MM-DD, update on edits |

##### Book Schema Fields

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

Editions section is a repeater: click Add Edition to add a new row per format.

##### Restaurant Schema Fields

| Field | JSON-LD property | Notes |
|---|---|---|
| Name | `name` | Official restaurant name |
| Description | `description` | 1-3 sentences about cuisine, atmosphere, uniqueness |
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

##### Service Schema Fields

| Field | JSON-LD property | Notes |
|---|---|---|
| Service Name | `name` | Name of the specific service |
| Description | `description` | 1-3 sentences on what the service includes and delivers |
| URL | `url` | Canonical URL of the service page |
| Service Type | `serviceType` | Category label (e.g. "Web Design", "SEO Consulting") |
| Provider Name | `provider.name` | Person or organization providing the service |
| Area Served | `areaServed` | City, country, or "Worldwide" for remote services |
| Telephone | `provider.telephone` | Contact phone with country code |
| Price | `offers.price` | Numeric price or starting price |
| Currency | `offers.priceCurrency` | ISO 4217 code: USD, EUR, GBP, INR, etc. |

### 1D. 404 Monitor Tab
"Keeps track of all 404 errors on the website."

**404 Monitor Script** toggle (on/off): enables the monitoring script on the live site.

**Allowed Domains:** list of domains the script monitors (e.g. 7seersmedia.com). Add or remove via tag input.

**Top stats:**
- Total 404 Errors (e.g. 12)
- Unique Routes (e.g. 7)

**Controls:** filter by domain (All Domains dropdown), Reload, Export.

**Errors table:** Page URI | User Agent | Last Hit | Hits. Long URIs include a copy icon for quick paste. Paginated.

**Exception Routes** section (often missed but important): "Routes added here will be ignored by the 404 monitor." Input field with placeholder "/path-to-ignore" and a + Add button. Use this to whitelist intentional catch-all routes (e.g. /404, /409, redirect testing paths) so they don't pollute the error log.

**Status indicator at the bottom:** green dot, "Monitoring script active, 404 errors are being tracked"

---

## Section 2: Pages

### List View
"Manage your page settings in Framer."

- Refresh button at top
- Search bar (filters all pages instantly across folders)
- Pages organized in **collapsible folders** matching the Framer site structure (e.g. Insaaf, Projects, Thoughts)
- Each folder shows: type label (Static or CMS), page count badge
- Each page row shows: full title, URL, SEO score with colored dot, last crawled date

**Score color coding:**
- Purple dot: 85+
- Orange dot: 70-84
- Red dot (when applicable): below 70

### Per-Page View (Split Layout)
Clicking any page opens a split-screen view.

- **Left panel:** live preview of the actual Framer page (header, hero image, content, scrollable). The user sees the real page while editing its SEO.
- **Right panel:** SEO control surface for that single page.
- **Top bar:** "Back to pages" link, Download button (purple, exports per-page audit PDF)

**Right panel structure:**
1. **Score header:** "Rankframe SEO X/100" with a purple progress bar
2. **Google Snippet preview:** exactly how this page appears in Google search results (blue title link, green URL, description text, all live)
3. **Current Title** with character counter (warns when over the 70 limit)
4. **AI Generated Title** field with Copy and Generate buttons
5. **Current Description** with character counter (recommended 150-160 chars)
6. **AI Generated Description** field with Copy and Generate buttons
7. **Five collapsible audit sections** (each opens to detailed checks):
   - Keyword Analysis
   - Basic SEO
   - Advanced SEO
   - Performance
   - Security

### Keyword Analysis (per page)
- Total Keywords (e.g. 231)
- Avg Density (e.g. 0.40%)
- Total Frequency (e.g. 2958)
- Word count filter (1 word, 2 words, 3 words)
- Search keywords field
- Table: Keyword | Freq | Density (e.g. "in interaction design" 14, 0.6%)

### Per-Page Audit Categories (4 zones with specific checks)

Every check returns a specific value, not just pass/fail. Red X items expand to show the actual problematic HTML (e.g. specific `<img>` tags missing alt).

#### Basic SEO checks
- **SEO Title:** length and quality (warns if over 70 chars)
- **H1 Heading:** presence
- **H2 Headings:** count, structure
- **Links Ratio:** % internal vs external (warns if low, e.g. 53.3% triggers a warning)
- **SEO Description:** length (warns if over 165, recommends 150-160)
- **Image ALT Attributes:** count missing, expands to show the exact `<img>` tags with no alt
- **Homepage Is Reachable:** confirms homepage returns 200
- **Create a responsive site:** confirms responsive design via media queries
- **Keywords in Title and Description:** confirms shared keyword between title and description
- **Common Keywords:** finds N single-word keywords, shows top by frequency as visual pills (e.g. and 1232, to 849, of 565, design 526, color 421)

#### Advanced SEO checks
- **Sitemaps:** sitemap found at /sitemap.xml
- **Robots.txt:** file present
- **Broken Links:** count of broken links on the page
- **Noindex Meta:** confirms no accidental noindex tag
- **Canonical Tag:** confirms correct canonical URL
- **OpenGraph Meta:** confirms OG tags present
- **Schema Meta Data:** confirms Schema.org data found
- **WWW Canonicalization:** confirms www and non-www both redirect correctly
- **Keep your content fresh:** confirms updated within last 6 months
- **Search Preview** (info): renders desktop Google snippet
- **Mobile Snapshot** (info): renders mobile preview
- **Mobile Search Preview** (info): renders mobile Google snippet

#### Performance checks
- **Page Size:** total KB (warns if moderately large, e.g. 50.51 KB)
- **Mobile Speed:** good/fair/poor
- **Page Objects:** total count (e.g. 47)
- **Response Time:** server response in ms (e.g. 1063ms)
- **Image Headers Expire:** caching check on local images

#### Security checks
- **Theme Visibility:** confirms theme is not publicly visible (cannot be reverse-engineered)
- **Secure Connection:** confirms HTTPS

---

## Section 3: Submit Indexing

Header: "Instant Indexing" with **Powered by Google** badge (uses official Google Indexing API).
Subtitle: "Manage search presence securely via the official Google API."

Five tabs: **Submit URLs | Setup | Analytics | Keyword Tracker | Indexing History**

### 3A. Submit URLs Tab
Two stacked actions:

**1. Sync Sitemap**
- Description: "Directly submit your sitemap to Google Search Console."
- Single button: **Push Sitemap**

**2. Manual URL Submission**
- Description: "Select the pages you want to push to the Google Indexing API. This directly notifies Google that these pages have been added or updated."
- "Select All Pages" master checkbox with live count (e.g. 17 selected)
- Individual checkbox for every page: /, /thoughts, /projects/rkg, /projects/ember-and-bloom, etc.
- Bottom-right action button: **Push N URLs** (purple, count updates dynamically)

### 3B. Setup Tab
Two-step setup, both auto-handled.

**Step 1: Connect Google Account**
- Connected email shown (e.g. 7seersmedia@gmail.com) with Google G logo
- Disconnect option in red text

**Step 2: Domain Verification**
- Auto-handled by RankFrame
- Green success box: "You have verified access to this property in Search Console. No further action needed!"

No manual property creation, no verification meta tag, no DNS records. The plugin handles all of it on the user's behalf.

### 3C. Analytics Tab
**Performance Dashboard** with Google G logo and "Verified Property Insights" label.

- Date range dropdown (Last 28 Days default, changeable) + Reload button
- Four headline metrics:
  - Total Clicks
  - Total Impressions
  - Average CTR
  - Avg Position
- "Clicks Over Time (N Days)" bar chart (purple)
- Drill-down tabs: **Keywords | Page | Country | Device**
- Top Keywords table: Keyword | Clicks | Impr. | Position (e.g. "7 seers" 6 clicks, 122 impressions)
- Paginated (e.g. Showing 1-10 of 50)

This data is pulled live from Google Search Console without leaving the plugin.

### 3D. Keyword Tracker Tab
- **Add New Keyword** input (target/bullseye icon) with placeholder "seo on wordpress, rank math vs yoast..." and Save button
- Helper text: "You can add multiple keywords at a time by separating them with commas."
- **Keyword Manager** with search field
- Table: KEYWORD | IMPRESSIONS | CLICKS | SEARCH POSITION | POSITION HISTORY (sparkline mini chart)
- Position change indicator: green up arrow with delta when ranking improves (e.g. 2.4 ▲ 0.3)

### 3E. Indexing History Tab
Info banner: "Click Check Live next to any URL to ask Google if it has successfully indexed that specific page yet. It may take hours or days for Google to crawl pushed URLs."

- "Showing logs for: [domain]" with Refresh button
- Table: Date | Type | URL | Status | Action
- Each row: timestamp, type (URL globe icon), full URL (truncated if long), status (green Success badge), Check Live button
- Clicking **Check Live** queries Google in real time and shows an inline tooltip: "Indexed by Google" with State: "Submitted and indexed"

This is the only tool in the Framer ecosystem that gives live indexing confirmation from Google directly inside the design tool.

---

## Section 4: SEO Analyzer (Site-Wide Audit)

"Analyze your website SEO."

This is the **site-wide** audit (different from the per-page audit inside the Pages section).

### Header
- **Live SEO** indicator (green dot)
- **Refresh Analysis** button
- **Download Audit** button (purple, exports PDF)

### Sidebar tip
"SEO Analyzer Tip. Pro Tip: Click any issue in the analyzer to see detailed suggestions." Every check item is clickable for deeper detail.

### Score panel
- Last Checked date and full site URL
- Large circular score (e.g. 82/100) with purple ring
- Score breakdown with colored dots:
  - Red Zone (count of critical fails)
  - Warnings (count)
  - Green Zone (count of passing checks)
  - Speed (response time in ms)
- Right side: brand pill ("RankFrame, Best Framer SEO Plugin") and target label ("Good SEO. Target: 90+")

### Filter tabs
- All
- Green Zone
- Red Zone
- Warnings
- Speed (separate dedicated tab)

### Speed tab
- "Speed Insights" with **Re-analyze Speed** button
- Two circular gauges side by side:
  - **Mobile Performance** (e.g. 72/100, amber)
  - **Desktop Performance** (e.g. 61/100, amber)
- **Core Web Vitals** for each device:
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Cumulative Layout Shift (CLS)
- **Speed Optimization Suggestions** (specific and actionable):
  - "Optimize large images using WebP format to improve Largest Contentful Paint (LCP)."
  - "Minify CSS and JavaScript files."
  - "Consider using a CDN for static assets to reduce server response time (1063ms)."

---

## Section 5: Image SEO

"Manage and auto-generate alt text for your website images to boost accessibility and SEO."

### Header
- **Buy Credits** button (purple, solid)
- **Credits balance** badge: dark red/coral pill with coin icon, credit count, and a refresh icon (e.g. "0 Credits" when empty, "60,498 Credits" when topped up)
- **Expand/Collapse** arrows icon at far right (toggles Minimized Mode)

### Stats
Two large stat cards side by side:
- **TOTAL IMAGES** (e.g. 517, white number)
- **MISSING ALT** (e.g. 72, orange number, orange label)

### Controls (below stats)
- **Site selector:** gear icon + site name (e.g. "7 Seers"), full rounded pill button
- **Search field:** magnifier icon + "Search..." placeholder, takes up most of the row width
- **Refresh** button: circular arrows icon, rounded pill
- **Export** button: purple, download arrow icon, downloads CSV with all image data

### Explorer (left panel within Image SEO)
Two-level tree:
- **All Images** (e.g. 517)
- **Canvas** (e.g. 428)
- **CMS** (e.g. 89, expandable)
  - Per-collection sub-folders: Our Cases (33), Our Service (29), Thoughts (8), Work (19)

### Image grid (right panel)
Each card row shows:
- Checkbox (left)
- Thumbnail of the image
- Label: "Canvas Image" or CMS file name (e.g. "01") with collection path (e.g. "Our Cases >")
- **Wand icon** (right): generates alt text for just that single image
- **Alt text input field** (full width below thumbnail/label):
  - Pre-filled with existing alt text if present
  - Empty placeholder "Alt text..." if missing
- **Red dot** on the thumbnail corner = missing alt text (visual indicator)

### Bulk generation
- Click **Select All** at top: every card gets a purple border and check
- "Select All" toggles to "Deselect All"
- A large purple **Generate Alt Text (N)** button appears at the top of the grid, where N updates live based on selected count
- Click to bulk-generate alt text for every selected image (uses 1 credit per image)

### Pagination
Page X of Y, with Prev/Next arrows.

### Minimized Mode
Clicking the expand arrows icon collapses the outer plugin nav entirely, giving the full panel width to Image SEO. Useful for large bulk operations on multi-hundred-image sites. Click again to return to standard view.

### Suffix (referenced feature, position TBD in UI)
A global suffix can be appended to every alt text site-wide (e.g. "by Studio Name", "high-resolution photo"). This is set once and auto-applies to all generated alt text going forward. Massive time saver for branded portfolios.

### Buy Credits flow
Clicking Buy Credits opens a top-up modal. Standard offers:
- **First-time max-credits offer:** $49 for 30,000 credits (one-time discount)
- **Regular refill:** $100 for 30,000 credits (or $10 for 1,000 credits at lower tiers)

1 credit = 1 AI generation (alt text, meta title, meta description, schema field).

---

## Account Settings

Modal opened from the user account block in the sidebar.

Two tabs: **Profile | Personalization**

### Profile tab
- Avatar: large purple circle with initials, small shield/auth badge at bottom-right
- Name (e.g. "7seers media")
- **Plan badge** (e.g. "Free Plan", or "Personal", "Agency")
- **Read Only View notice:** "To update your personal details or change your password, please visit your account dashboard." (Profile data is read-only inside the plugin. All edits go through dashboard.rankframe.com.)
- **Email Address** (read-only field with mail icon)
- **Joined Date** (calendar icon, e.g. April 24, 2026)
- **Status** (shield icon, e.g. "Google Auth" or "Email + Password")
- **Sign Out** button (full-width, dark red)

### Personalization tab
(See **Onboarding Flow** section above for the full structure.)

---

## Pricing & Plans

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
  - Image SEO: no usage limit, but credits apply
  - Automatic Schema: limited to 3 visible pages during trial
  - 404 Monitor: no limit, all errors tracked
  - Recrawl: 1 use during trial
  - Submit Indexing: limited to 2 URL submissions during trial
  - Total Pages: no limit, all visible
- All trial limits are lifted the moment the user upgrades

### Yearly Billing
- 40% saving on both plans (Personal and Agency)
- Renewal countdown shown in the sidebar (e.g. "Renews in 357 days")

---

## AI Credits System

Credits power every AI feature in RankFrame:
- AI meta title generation (Global and per-page)
- AI meta description generation (Global and per-page)
- AI alt text generation (Image SEO, single or bulk)
- AI schema field suggestions (Auto-Generate flow)
- AI keyword and content recommendations

### Credit pricing
- **First-time offer:** 30,000 credits for $49 (one-time, biggest saving)
- **Regular refill:** 30,000 credits for $100 (or 1,000 credits for $10 at smaller tiers)
- **Free signup credits:** included on trial start (typically 500)

### Credit math
- 1 credit = 1 AI generation
- Bulk image alt text on a 500-image site = 500 credits
- Refilling is instant via the Buy Credits modal in Image SEO header
- Credits never expire while the subscription is active
- Credits are non-refundable once used

---

## Always-Visible Buttons (Bottom of Sidebar)

### See Billing (purple, full width)
Opens the billing portal (Polar.sh). User can:
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

Trial users get 1 recrawl. Paid users get unlimited.

---

## Downloadable SEO Audit Report (PDF)

Generated by clicking **Download Audit** on the SEO Analyzer page (site-wide) or the **Download** button on any per-page view.

### Report header
- Title: "SEO Audit Report : [Site Title]"
- Site URL
- Date
- Summary tiles: Passed | Failed | Warnings | Total Checks
- SEO Score (e.g. 82)

### Report body (4 sections, each with pass-rate %)

**Basic SEO** (10 checks): SEO Title, H1, H2, Links Ratio, Common Keywords (with top keyword frequency), SEO Description, Image ALT Attributes (with specific missing tags), Homepage Reachable, Responsive Design, Keywords in Title and Description.

**Advanced SEO** (12 checks): Sitemaps, Robots.txt, Broken Links, Noindex Meta, Canonical Tag, OpenGraph Meta, **Search Preview** (renders desktop Google snippet visually), **Mobile Snapshot** (renders mobile preview), Schema Meta Data, WWW Canonicalization, **Mobile Search Preview** (renders mobile Google snippet visually), Keep your content fresh.

**Performance** (5 checks): Page Size, Mobile Speed, Page Objects, Response Time, Image Headers Expire.

**Security** (2 checks): Theme Visibility, Secure Connection.

### Icons used in the report
- ✓ Pass (green)
- ✗ Fail (red)
- ! Warning (orange)
- ℹ Info / preview (blue)

### Footer
"Generated by RankFrame, Report generated on [date]"

### Future plan: White-label and automated reports
Roadmap item: agencies will be able to replace the "Generated by RankFrame" footer with their own branding (logo, name, contact). Reports will run automatically on a schedule (weekly/monthly) and email to clients without manual download. This is the agency upsell that makes RankFrame indispensable beyond a single user.

---

## Documentation Architecture

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
### Module 3: Schema Markup
### Module 4: Submit Indexing
### Module 5: Image SEO
### Module 6: SEO Audit
### Module 7: 404 Monitor (with Exception Routes guide)
### Module 8: Keyword Research
### Module 9: Page-Level SEO
### Module 10: Page Speed
### Module 11: Keyword Tracker
### Module 12: AI Personalization (onboarding deep dive)
### Module 13: Billing
### Module 14: Account
### Module 15: Troubleshooting

---

## SEO Strategy

### Primary Keyword
- Framer SEO plugin

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
- Getting Started (trust, onboarding)
- Feature Deep Dives (ranking for feature-specific queries)
- Framer SEO Guides (top-of-funnel educational)
- Comparisons (vs WordPress plugins like Yoast/RankMath, vs external tools like Ahrefs/Semrush, vs manual SEO)

---

## Framer Marketplace Listing

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

## Policy Documents

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

## llms.txt

- File location: rankframe.com/llms.txt
- Companion file: rankframe.com/llms-full.txt
- Purpose: AI crawler discovery for ChatGPT, Claude, Perplexity, Gemini
- Content covers: product overview, every feature in detail, pricing, documentation, support, FAQs, comparisons, use cases, technical details, contact

---

## Key Differentiators

1. **Only native Framer SEO plugin** (runs inside the plugin panel, not an external dashboard)
2. **Schema injection without duplicate script tags** (updates the existing script in place on republish)
3. **Auto-Generate schema for the entire sitemap in one flow**
4. **Live page preview alongside per-page SEO editing** (see the page while you optimise it)
5. **Image SEO at scale with AI alt text** (bulk generation, CSV export, global suffix)
6. **Live Google indexing confirmation** ("Check Live" returns Google's actual indexing state inline)
7. **404 monitoring with Exception Routes** (whitelist intentional catch-alls)
8. **Google Lighthouse Core Web Vitals data inside Framer**
9. **Live Google Search Console analytics inside the plugin** (clicks, impressions, CTR, position)
10. **Built-in Keyword Tracker with sparkline position history**
11. **AI Personalization onboarding** that makes every AI output specific to the brand
12. **Downloadable PDF audit reports** (per-page and site-wide), white-label coming
13. **Built by designers who use Framer daily** (every feature came from a real client problem)

---

## What RankFrame Does NOT Do

- No automatic keyword discovery (manual GSC copy-paste workflow for keyword tracker; Search Vol/Difficulty/Competition/CPC data does populate when checking individual keywords)
- Image SEO works on Canvas pages and CMS collections that RankFrame can scan (covered: Canvas, CMS Our Cases, Our Service, Thoughts, Work). Coverage of newly-added Framer features may lag
- Disconnecting a Personal-plan site requires emailing hello@7seersmedia.com
- No SEO for external non-Framer sites (Framer-native only by design)
- No A/B testing of meta tags
- No competitor backlink analysis
- White-label audit reports are roadmap, not yet shipping

---

## Future Roadmap

- **White-label SEO audit reports:** agencies replace "Generated by RankFrame" with their own branding
- **Automated audit scheduling:** weekly/monthly reports auto-emailed to clients
- **More schema types:** HowTo, FAQPage, Product, LocalBusiness, BreadcrumbList expansion
- **CMS image SEO expansion:** deeper coverage as Framer adds new CMS features
- **Team collaboration:** multi-user access on Agency plan
- **Client dashboards:** read-only client view of audit progress
- **API access:** programmatic audit triggers for agencies

---

## Website Issues to Fix (rankframe.com)

These are issues currently live on rankframe.com that should be corrected:

- Pricing showing $9/$24 instead of $15/$40
- Placeholder impact stats: "0 Hours +", "0 X", "0%" (need real numbers or remove the section)
- Both plans labeled "Popular" (only Agency should be marked)
- Hero and subheadline say the same thing back-to-back
- Footer typo: "All Rights Reserve" should be "All Rights Reserved"
- No support email or contact link in footer (add hello@7seersmedia.com)

---

## Common Marketing Frames

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

## Document Maintenance

This document should be updated whenever:
- A new feature ships
- Pricing changes
- A new schema type is added
- A new plan tier is introduced
- The UI changes (tabs, sections, buttons rename)
- A new policy document goes live
- The white-label / automated report features ship

Last meaningful update: 2026-05-02 (added full UI walkthrough, audit PDF format, Image SEO details, Personalization onboarding, Submit Indexing tab structure, Account Settings detail, future roadmap)
