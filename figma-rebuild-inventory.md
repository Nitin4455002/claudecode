# RankFrame Figma Rebuild Inventory

Source: 116 product screenshots in `/images/`. This catalog walks each screen one by one and lists components, layout, copy, and states needed to recreate the RankFrame plugin UI in the RankFrame Design System Figma file (`MlvOoXk04ToPFwHXfkefFM`).

---

## Shared Chrome (every plugin screen)

**Top bar:** RankFrame logo + product name (left), Close `X` (right).

**Left sidebar (240px, dark surface):**
1. `RankFrame` label with back arrow (returns to plugin home)
2. Nav items (icon + label, active state = light purple bg + left accent):
   - Global Settings (gear)
   - Pages (database)
   - Submit Indexing (bolt)
   - SEO Analyzer (bar chart)
   - Image SEO (image)
3. **SEO Score widget** — circular progress ring, large numeric (e.g. `82`), pill label `Excellent`
4. Support (with green online dot)
5. Documentation (book icon)
6. Go To Dashboard (globe icon)
7. **Account block:** purple circle avatar (initials), name (`7seers media`), email
8. **Plan info:** `Agency Yearly Plan`, `Renews in 357 days`
9. `See Billing` (full-width purple)
10. `Recrawl Website` (full-width coral/red)

**Main canvas:** dark background (#0a0a0a-ish), white headings, gray sub-copy, purple accent (#A855F7-ish), pink/coral CTA accent.

**Tokens needed in Figma:**
- Colors: bg/0, bg/1 (cards), border/subtle, text/primary, text/secondary, text/muted, accent/purple, accent/purple-soft, accent/pink, success/green, danger/coral
- Type: H1 24/32 semibold, H2 18/24, body 14/20, caption 12/16, label 13/18
- Radius: 8 (input), 12 (card), 999 (pill)
- Spacing: 4/8/12/16/24/32

---

## 1. Global Settings — Basic

### 1.1 `RankFrame Global Settings.png` (full screen)
- **Page header:** `Global Settings` H1 + sub `Manage your global Framer SEO settings.`
- **Tab bar:** `Basic | Keywords | Advanced | 404 Monitor` (active = underline + white text)
- **Section header:** `Basic SEO Settings` with sub-copy `Update your SEO title and description, both of which can also be customized at the page level.` + `Learn More` purple link
- **2-col grid (Title row):**
  - Left card: `Current Title` label, read-only text box, `58/70 characters` counter
  - Right card: `AI-Generated Title` label, text box with content, footer row → `Copy` (ghost icon button) + `Write with AI` (purple pill, sparkle icon)
- **2-col grid (Description row, same pattern):**
  - Left: `Current Description` + `165/260 characters`
  - Right: `AI-Generated Description` + `Copy` + `Write with AI`

### 1.2 `Current Title And Ai Generated Title.png`
- Zoom on Title row, confirms: `Copy` and `Write with AI` overlay the bottom-right of the AI text box.

### 1.3 `Current Description and Ai generated Description.png`
- Zoom on Description row. Same buttons. Same character counter pattern.

**Figma components to build for §1:**
- `Tabs/Underline` (active + idle)
- `Card/SEOInput` variant: { state: readOnly | aiOutput }
- `Button/IconGhost` (Copy)
- `Button/AIPrimary` (sparkle + "Write with AI")
- `CharCounter` (auto-text)

---

## 2. Global Settings — Keywords

### 2.1 `Focus Keyword Home.png`
- Tab `Keywords` active.
- **Section header:** `Keywords` + sub `Manage focus keywords and review keyword density for your homepage.`
- **Row 1:** `Focus Keyword Script` toggle (ON, purple) with sub `Enable meta keyword injection.`
- **Row 2:** `Target Page` dropdown (selected `/`)
- **Row 3:** `Keyword` text input (placeholder `Enter focus keyword...`), right-aligned buttons `Check` (ghost) + `Save` (purple).
  - Helper: `Keyword will be assigned to the selected page.`
- **Metrics row (empty/disabled state):** 4 stat tiles (Search Vol, Difficulty, Competition, CPC) — all gray dashes.
- Below: `Saved Keywords (3)` with `Manage` link (right).
- Below that: `Keyword Analysis` section starts (cut off).

### 2.2 `Focus Keyword Select A Page.png`
- Same as 2.1 with `Target Page` dropdown OPEN.
- Dropdown list shows scrollable site pages: `/`, `/thoughts`, `/projects/rkg`, `/projects/ember-and-bloom`, `/projects/lumae`, `/projects/shr`, `/projects/centralsquare`, …
- Scrollbar visible on right.

### 2.3 `Check keyword Search Volume, Difficulty, Competition and CPC.png`
- Keyword `Framer` typed. Metrics tiles populated:
  - `74.0K` Search Vol (purple)
  - `86` Difficulty (pink)
  - `MEDIUM` Competition (yellow)
  - `$3.73` CPC (green)
- Each metric uses a color-coded numeric.

### 2.4 `Manage Saved Keywords.png`
- Same screen scrolled. Under metrics, `Saved Keywords (3)` list expanded with `Hide` toggle (top right):
  - Rows: `7 Seers`, `All in one Agency in Lucknow`, `Best Framer Agency in Lucknow`
  - Each row shows: keyword name, `Vol:` and `KD:` stat chips (right), trash icon (delete).
- Below: `Keyword Analysis` summary card with `50 Total Keywords | 0.84% Avg Density | 10371 Total Frequency` + `View more detail` link.

### 2.5 `Look at Keyword Analysis of your website.png`
- Drill-in view of `Keyword Analysis`.
- Top row: collapsed keyword card (`Best Framer Agency in Lucknow`, Vol/KD).
- `Keyword Analysis` panel with `Hide details` link.
- 3 stat tiles: `50 Total Keywords`, `0.84% Avg Density`, `10371 Total Frequency`.
- `Keyword Details` heading with right-side `1 word` dropdown (1/2/3-word n-grams).
- Search input (`Search keywords...`).
- Table: columns `Keyword | Freq | Density` — rows: `and 1232 4.99%`, `to 849 3.44%`, `of 565 2.29%`, `design 526 2.13%`, `color 421 1.78%` …
- Footer note: `SHOWING 50 ITEMS`.

**Figma components to add for §2:**
- `Toggle/Switch` (on/off, purple track)
- `Dropdown/PageSelect` (with searchable list)
- `Input/WithActions` (right-side button cluster)
- `StatTile/Metric` color variants: { purple | pink | yellow | green | muted }
- `Row/SavedKeyword` (name + stat chips + delete)
- `Table/Compact` (3-col, hover row)
- `Dropdown/Inline` (n-word selector)

---

## 3. Global Settings — Advanced (Schema Injection)

### 3.1 `Schema Home.png` (Saved Schema, manual vs auto split)
- Tab `Advanced` active.
- **Section header:** `Schema Injection` + sub `Manage and inject structured data (JSON-LD) across your website.` + master toggle (ON, top-right).
- **Two action buttons (full width row):**
  - `+ Manual Schema` (dark pill, outlined)
  - `Auto-Generate` (purple pill, sparkle icon)
- **Saved Schemas** card with `Refresh` and `Hide Management` controls (top-right).
  - Sub-tabs: `Manual (0) | Generated (2)` (active underline on Manual).
  - Empty state: icon + `No manual schemas found.` + `Create one now` purple link.
- **Sticky footer bar:** `</> 0 schemas ready for injection.` (left) + `Save & Inject` (green pill, right).

### 3.2 `Manual Schema Select Page.png`
- Sub-page `← Select Page for Schema`.
- Search input `Search pages...`.
- List of page cards: `/`, `/thoughts`, `/projects/rkg`, `/projects/ember-and-bloom`, `/projects/lumae` — each card shows path label + full URL underneath, with a small page icon left.

### 3.3 `Manual Schema Searching Sitemap.png`
- Same `Select Page for Schema` view but in loading state — centered purple spinner + `Scanning sitemap...`.

### 3.4 `All Manual Schema Selector.png` (Add a Schema)
- Header `Add a Schema` with `← Back to advanced` link (right).
- Chip `Adding to: /` (purple ghost).
- **2-col grid of schema-type cards** (each has `+`):
  - `Person and Organization Schema`
  - `Article Schema`
  - `Book Schema`
  - `Restaurant Schema`
  - `Service Schema`
- Footer copy: `Add schema markup for your pages to help search engines use structured data and showcase rich results in SERPs.`

**Figma components for §3 (shared):**
- `Button/SplitAction` (Manual + Auto-Generate paired)
- `Tabs/Counted` (Manual (0) | Generated (2))
- `EmptyState/CenteredLink`
- `PageRow/PathCard` (path + full URL + icon)
- `LoadingState/CenteredSpinner` with label
- `SchemaTypeCard` (label + plus icon)
- `Footer/Sticky` (status text left, action right)
- `Chip/Context` ("Adding to: …")

### 3.A Article Schema (form, 12 field crops)
Single scrollable form. Fields, in order:
1. **Article Type** (required *) — dropdown, default `Article` (options likely: Article, NewsArticle, BlogPosting, TechArticle, ScholarlyArticle)
2. **Article Headline** (required *) — single-line input, placeholder `Headline (max 110 characters)`, right-aligned counter `0 / 110`
3. **URL** (required *) — input pre-filled with site URL e.g. `https://7seersmedia.com/`
4. **Description** — single-line input, placeholder `Brief description of the article`
5. **Date Published** + **Date Modified** (2-col row) — both date pickers with calendar icon, placeholders `Select published date`, `Select modified date`
6. Section divider label: `AUTHOR DETAILS` (uppercase tracking)
   - **Author Type** (required *) — dropdown, default `Person` (likely Person | Organization)
   - **Author Name** — input, placeholder `Name of the author`
7. Section divider label: `PUBLISHER DETAILS`
   - **Publisher Name** — input, placeholder `Name of the publisher`
   - **Publisher Logo URL** — input, placeholder `https://example.com/logo.png`
   - **Logo Width** + **Logo Height** (2-col row) — placeholders `e.g. 600`, `e.g. 60`
8. Section divider label: `IMAGE DETAILS`
   - **Image URL** (required *) — placeholder `https://example.com/image.jpg`
   - **Width** + **Height** (2-col row) — placeholders `e.g. 1200`, `e.g. 630`

**New components introduced here:**
- `Field/Label` (required → red `*`)
- `Input/Single` with optional right-side counter
- `Input/Date` with calendar icon
- `Section/Divider` uppercase label (e.g. `AUTHOR DETAILS`)
- `Layout/TwoCol` (2-col field row, gap 16)

### 3.B Book Schema (13 field crops)
Form fields top → bottom:
1. **Book Title (Headline)** * — placeholder `Enter the title of the book`
2. **URL** * — pre-filled site URL
3. **Author Type** * (dropdown, default `Person`) + **Author Name** * (placeholder `e.g., J.K. Rowling`) — 2-col
4. **ISBN** — placeholder `e.g., 978-0321765723`
5. **Date of Publication** — date picker (placeholder `Select date`)
   - **Date picker popover:** dark card, month label `May 2026` w/ chevrons, weekday header (Su–Sa), date grid, today highlighted with purple ring, `Today` ghost pill at bottom
6. **Editions** section, header row with `↳ Add Edition` purple link (right-aligned, edit icon)
   - **Edition Title** (placeholder `Leave blank to use main title`) + **Book Format** dropdown (default `Hardcover`) — 2-col
   - **Book Format dropdown open:** options `Hardcover` (purple active) / `Paperback` / `E-Book` / `Audiobook`
   - **Edition URL** — placeholder `Specific edition URL`
   - **Author Name** (per-edition) — placeholder `Leave blank to use main author`
7. **Rating Score** (e.g. `8`) + **Rating Min** (`1`) + **Rating Max** (`10`) — 3-col
8. **Review Details** `(Optional)` header
   - **Review Body** — multi-line textarea, placeholder `Write a short review...`

**New components:**
- `DatePicker/Popover` (calendar grid)
- `Repeater/AddItem` (Editions, `↳ Add ...` link)
- `Textarea/Multiline`
- `Layout/ThreeCol`

### 3.C Person & Organization Schema (9 crops)
- **Page header:** `Person Schema` H2 + `← Back` link
- **Sub-tab bar (3 tabs):** `Edit | Preview JSON | Validator [Ext]` (active = purple underline; `Ext` is a small `Ext` chip on Validator indicating external link/tool)

**Edit tab fields:**
1. **Schema Type** — radio group: `(•) Person   ( ) Organization` (purple filled radio)
2. **Name** *
3. **URL** * (pre-filled)
4. **Image URL** — placeholder `https://example.com/profile.jpg`
5. **Job Title**
6. **Company**
7. **Social Profiles** — repeater card: input `https://twitter.com/username` + trash icon, `+ Add Profile` purple link below.

**Preview JSON tab:** card titled `Generated Schema` + `Copy` button right.
- Code block with syntax-highlighted JSON-LD:
  ```html
  <script type="application/ld+json">
  { "@context": "https://schema.org", "@type": "Person", "url": "https://7seersmedia.com/" }
  </script>
  ```

**Validator tab:** external (opens schema validator). Labeled with `Ext` pill.

**New components:**
- `Radio/Group` (purple)
- `Tabs/Sub` with optional `Ext` badge
- `CodeBlock/Preview` (mono font, syntax color, with Copy button)
- `Repeater/InputRow` (input + delete + add link)

### 3.D Restaurant Schema (10 crops)
Form fields:
1. **Restaurant Name** * — placeholder `e.g., The Cozy Diner`
2. **Description** * — textarea, placeholder `A short description...`
3. **Address** (section header)
   - **Street Address** (full width)
   - **City / Locality** + **State / Region** (2-col)
   - **Postal Code** + **Country** (2-col)
   - **Latitude (e.g. 40.71)** + **Longitude (e.g. -74.00)** (2-col)
4. **Telephone** * — paired control: `Canada (+1)` country code dropdown + `9876543210` number input
   - **Dropdown open:** scrollable searchable country list (`Afghanistan...`, `Albania (+3...`, `Algeria (+21...`, `American S...`, `Andorra (+3...`, `Angola (+24...`)
5. **Website URL** — pre-filled site URL
6. **Cuisine** — placeholder `Italian, Mexican, Sushi` (comma list)
7. **Price Range** — paired: `USD ($)` currency dropdown + numeric input `50`
   - **Currency dropdown open:** alphabetical list `AED`, `AFN`, `ALL`, `AMD`, `ANG`, `AOA`, `ARS ($)` …
8. **Working Hours** section — header with clock icon
   - Card containing 7 day rows (Mon–Sun), each: toggle (off=Closed italic right) | day label | status `Closed`.
   - When toggle ON likely reveals open/close time pickers (not shown).

**New components:**
- `Input/PhoneWithCountry` (country dropdown + number)
- `Input/PriceWithCurrency`
- `Dropdown/SearchableList` (country/currency)
- `WorkingHoursRow` (toggle + day + status/time picker)
- `Section/HeaderWithIcon` (clock, etc.)

### 3.E Service Schema (8 crops)
Form fields:
1. **Service Name** * — placeholder `e.g., Professional SEO Services`
2. **Service Type** — placeholder `e.g., Digital Marketing`
3. **Description** * — textarea `A detailed description of the service provided.`
4. **Provider Name** — placeholder `Your Company Name`
5. **Service URL** — pre-filled site URL
6. **Area Served** — placeholder `e.g., Bhopal, New York`
7. **Offer Details** (section header)
   - **Price & Currency** — `USD ($)` dropdown + numeric `e.g., 99.99`
8. **Contact Details** (section header)
   - **Telephone** — `Canada (+1)` dropdown + number

(Reuses components introduced earlier — no new components.)

---

## 4. Global Settings — 404 Monitor

### 4.1 `Global Setting 404 Monitor full screen.png` (full screen)
- Tab `404 Monitor` active.
- **Toggle row:** `404 Monitor Script` (label) + sub `Enable or disable the script that tracks 404 errors.` + toggle right (ON).
- **Allowed Domains** section (globe icon + label):
  - Domain chip `7seersmedia.com ×` (purple ghost outline)
- **404 Monitor** header + sub `Keeps track of all 404 errors on the website`
- **Toolbar:** `🔽 All Domains ⌄` (filter dropdown, left) | `Reload` (ghost, right) | `Export ⌄` (purple, right)
- **Stat tiles row:** `17 Total 404 Errors` | `8 Unique Routes`
- **Table:** columns `Page URI | User Agent | Last Hit | Hits`. First row visible: `/our-service/ai-and-3d-solutions 7seersmedia.com | Mozilla/5.0 (Linu... | 5/6, 2:09 PM | 5`.

### 4.2 `404 Monitor Table with Pagination.png`
- Full table view, 5 rows visible:
  - `/our-service/ai-and-3d-solutions` (5 hits)
  - `/our-cases/steel-shed-company-uk` (4)
  - `/our-cases/sparkeng` (3)
  - `/404` (1)
  - `/409` (1)
- Sub-row shows host (`7seersmedia.com`) under each path.
- Pagination: `Page 1 of 2` (left) + prev/next chevron buttons (right). Active next = purple bg.

### 4.3 `404 Monitor All Domains Filter.png`
- `All Domains` filter dropdown OPEN. Options: `All Domains` (active purple) / `7seersmedia.com`.

### 4.4 `404 Monitor Allowed Domains.png`
- Zoom on Allowed Domains card. Shows: globe icon + `Allowed Domains` heading + chip `7seersmedia.com ×` (purple outlined, dismissible). Probably has hidden `+ Add` action.

### 4.5 `404 Monitor Exception Routes.png`
- Card `Exception Routes` (shield icon, purple). Sub `Routes added here will be ignored by the 404 monitor.`
- Input row: text input placeholder `/path-to-ignore` + `+ Add` ghost button.

### 4.6 `404 Monitor Exception Route Set.png`
- Same as 4.5 but with one route added: `/404 ×` chip below the input.

### 4.7 `404 Monitor Export filter.png`
- `Export` dropdown OPEN. Options: `Export PDF` / `Export CSV`.

### 4.8 `404 Monitor Important Note.png`
- Banner: purple background, warning triangle icon, copy: `**Important:** After enabling the monitor or modifying exception routes, you must **publish your website to production** to see the effects.` + dismiss `×`.

### 4.9 / 4.10 `404 Monitor Script Disabled.png` / `(1)`
- Toggle in OFF state (gray track, white handle left) vs ON (purple track, handle right). Confirms two-state spec for `Toggle/Switch`.

**New components for §4:**
- `Chip/DomainOutline` (dismissible)
- `Chip/RouteDismissible`
- `Filter/Dropdown` with funnel icon
- `Button/SplitDropdown` (Export, with caret)
- `Table/Standard` (sortable header, sub-row text, hits column right-aligned)
- `Pagination/Compact` (Page X of Y + chevrons)
- `Banner/InlineAlert` (purple notice variant)
- `Card/SectionWithIcon` (icon + title + sub-copy + body slot)

---

## 5. Image SEO

### 5.1 `Image SEO Full Page.png` (full screen)
- Page header `Image SEO` + sub `Manage and auto-generate alt text for your website images to boost accessibility and SEO.`
- **Header right cluster:** `Buy Credits` (purple ghost pill), credits pill `🔗 60,498 Credits` (dark with purple icon), and expand/fullscreen icon button.
- **Stat tiles row:** `517 TOTAL IMAGES` (white) | `72 MISSING ALT` (orange numeric).
- **Toolbar:** `⚙ Suffix...` (ghost button, gear icon, left), `Search…` (search input, center, magnifier icon), refresh icon button, `🠗 Export` (purple, right).
- **Two-pane content:**
  - **Left pane `EXPLORER`** (folder tree):
    - `All Images (517)` (active purple)
    - `▸ Canvas (428)`
    - `▾ CMS (89)`
      - `▸ Our Cases (33)`
      - `▸ Our Service (29)`
      - `▸ Thoughts (12)`
      - `▸ Work (15)`
  - **Right pane `All Images`** (`517 items` count + `Select All`):
    - List rows. Each row has: checkbox + thumbnail + image type label (`📷 Canvas Image`) + alt text input (current alt) + magic-wand icon button (generate alt).
- **Footer pagination:** `Prev | Page 1 of 65 | Next`.

### 5.2 `Image Alt text Metrics.png`
- Zoom: two stat tiles. Confirms color tokens — total in white, missing in orange/coral.

### 5.3 `Single Image Generation .png`
- Single image row zoomed. Thumb (grayscale retro Mac), `📷 Canvas Image` label, alt input `Retro Mac hello scre`, right-aligned wand button (`AI generate alt`).

### 5.4 `Credits for generation.png`
- Zoom: `Buy Credits` purple ghost + `🔗 60,498 Credits` dark pill with linked-rings icon (purple).

### 5.5 `Suffix settings.png`
- Zoom: ghost button `⚙ Suffix...`. (Clicking opens a settings popover, not captured.)

### 5.6 `Export Alt Image list.png`
- Zoom: `🠗 Export` purple solid button with download icon.

**New components for §5:**
- `Pill/Credits` (icon + number + label, dark surface)
- `TreeView/Folder` (collapse arrow + label + count chip)
- `Row/ImageItem` (checkbox + thumb + type label + input + wand)
- `Button/Wand` (alt-text generation)
- `Toolbar/MultiAction` (left controls + search + right actions)
- `Counter/PageStatus` (`Page X of Y` with prev/next)

---

## 6. SEO Analyzer

### 6.1 `Analyze website metrics.png` (header + summary card)
- **Header:** `SEO Analyzer` H1 + sub `Analyze your website SEO`.
- **Status pill:** `● Live SEO` (green dot).
- **Right buttons:** `🔄 Refresh Analysis` (ghost outline white) | `🠗 Download Audit` (purple solid).
- **Summary card:**
  - `Last Checked May 15, 2026` (date in blue) | site URL (blue link, right)
  - Big circular gauge: `82/100` (purple ring, partial fill)
  - Stat grid (2-col): `● Red Zone 1` / `● Warnings 3` / `● Green Zone 21` / `● Speed 540ms` (colored bullets red/yellow/green/blue)
  - Right block: `Rank Frame` H3 (split purple/white branding) + `Best Framer SEO Plugin` + chip `Good SEO. Target: 90+`

### 6.2 `Refresh and download button.png`
- Zoom: paired `Refresh Analysis` (ghost) + `Download Audit` (purple solid) buttons.

### 6.3 Inner tab bar (across analyzer pages)
- `All | Green Zone | Red Zone | Warnings | Speed` — active = purple underline.

### 6.4 `Performance Section.png`
- Section header `Performance` (with thin divider line right).
- 5 row cards, each: status icon (✓ green or ! orange) + title + sub-copy:
  - `! Page Size` — `Page size is moderately large (52.19 KB). Consider optimizing for better performance.`
  - `✓ Mobile Speed` — `Mobile Speed is good.`
  - `✓ Page Objects` — `Good number of page objects (47).`
  - `✓ Response Time` — `Response time is good (540ms).`
  - `✓ Image Headers Expire` — `No local images found on the page.`

### 6.5 `Basic SEO .png`
- Tab bar visible (`All` active).
- Section `Basic SEO` with row cards:
  - `✓ SEO Title` — `The title tag is well-optimized (58 characters). Title: 7 SEERS - Marketing for SaaS, eCommerce, and Entertainment`
  - `✓ H1 Heading` — `The page has a proper H1 heading tag.`
  - `✓ H2 Headings` — `The page has 40 H2 heading tags for good content structure.`
  - `! Links Ratio` — `Low internal links ratio (53.3%). Consider adding more internal links.`
  - `✓ Common Keywords` — (continues)

### 6.6 `Advance SEO.png`
- Section `Advanced SEO`:
  - `✓ Sitemaps` — `Sitemap found at https://7seersmedia.com/sitemap.xml`
  - `✓ Robots.txt` — `The site has a robots.txt file.`
  - `(red broken-chain icon) Broken Links` — `No broken links on the page.`
  - `✓ Noindex Meta` — `The page does not contain any index meta tag or header.`
  - `✓ Canonical Tag` — `The page has a canonical tag https://7seersmedia.com/.`

### 6.7 `Keyword Analysis.png`
- Section `Keyword Analysis` with 2-col card grid:
  - **Keyword Density** card: stat rows `Total Keywords: 250`, `Average Density: 0.25%` (blue), `Total Frequency: 13433` (green)
  - **Common Keywords** card: ranked list `and 1232`, `to 849`, `of 565`, `design 526`, `color 421`

### 6.8 `Security Section.png`
- Section `Security`:
  - `✓ Theme Visibility` — `The theme is not publicly visible, so it is not easily identifiable.`
  - `✓ Secure Connection` — `The site is using a secure transfer protocol (https).`

### 6.9 `Speed Insights full.png` (Speed tab)
- Tab `Speed` active. Header `Speed Insights` + `🔄 Re-analyze Speed` (ghost) right.
- 2-col cards: **Mobile Performance** (yellow ring) | **Desktop Performance** (red/coral ring).
- Below each gauge: stat rows `First Contentful Paint`, `Largest Contentful Paint`, `Cumulative Layout Shift`.
- Footer section `Speed Optimization Suggestions` (cut off).

### 6.10 `Mobile Performance.png`
- Zoom: phone icon (blue) + title `Mobile Performance`, yellow ring at `66/100`, stats `2.4 s`, `4.4 s`, `0.037`.

### 6.11 `Desktop Performance.png`
- Zoom: monitor icon (purple) + title `Desktop Performance`, coral ring at `39/100`, stats `0.7 s`, `6.6 s`, `0.003`.

### 6.12 `Speed optimization Suggestion.png`
- Card `Speed Optimization Suggestions` with yellow-bulleted list:
  - `Optimize large images using WebP format to improve Largest Contentful Paint (LCP).`
  - `Minify CSS and JavaScript files.`
  - `Consider using a CDN for static assets to reduce server response time (540ms).`

### 6.13 `Rank Speed Meter.png`
- Zoom: purple SEO score gauge `82/100` ring (matches sidebar widget).

**New components for §6:**
- `Pill/StatusDot` (Live SEO)
- `Gauge/CircularScore` color variants: { purple | yellow | coral | green } with center number + `/100`
- `Card/SummaryWide` (gauge + stat grid + brand block)
- `Row/AuditFinding` (status icon + title + sub-copy) — variants: pass/warn/fail
- `Card/StatList` (label : value rows)
- `List/RankedKeywords` (term + freq)
- `List/SuggestionBullets` (yellow dot + text)
- `Tabs/UnderlineMulti` (5-tab variant)

---

## 7. Submit Indexing (Instant Indexing — Powered by Google)

Shared chrome: page header `Instant Indexing` + `🟢 Powered by Google` chip + sub `Manage search presence securely via the official Google API.`
**Inner tab bar (5):** `Submit URLs | Setup | Analytics | Keyword Tracker | Indexing History` (active = purple underline).

### 7.1 Setup tab — `Instant Indexing Setup Full Page.png` (disconnected)
- Step card `1. Connect Google Account` — sub `Required to securely authenticate with Google APIs.`
  - Full-width button: `G Connect Google Account` (white-on-dark with Google G).
- Step card `2. Domain Verification` — sub `Connect your account above to check domain access.` (locked until step 1 done).

### 7.2 Setup tab — `Instant Indexing Setup Account Connected.png`
- `1. Connect Google Account ✓` — row shows `G 7seersmedia@gmail.com` (account name left) + `Disconnect` red link (right).
- `2. Domain Verification ✓` — green success banner: `You have verified access to this property in Search Console. No further action needed!`

### 7.3 Submit URLs tab — `Submit URL full Page.png`
- Card `🗺 Sync Sitemap` — sub `Directly submit your sitemap to Google Search Console.` + `Push Sitemap` button (dark ghost, right).
- Card `G Manual URL Submission` — sub `Select the pages you want to push to the Google Indexing API. This directly notifies Google that these pages have been added or updated.`
- Pages list with checkboxes: `Select All Pages` (with `17 selected` right) + rows `/`, `/thoughts`, `/projects/rkg`, `/projects/ember-and-bloom`, `/projects/lumae`, `/projects/shrj`, …

### 7.4 `Submit URL Manual Submission.png`
- Zoom on Manual URL Submission card header — Google `G` icon + title + helper copy.

### 7.5 `Submit URL Pages.png`
- Zoom on selection list with all rows checked (blue check), `17 selected` indicator, bottom-right `Push 17 URLs` purple button (sticky CTA).

### 7.6 `Submit URL Sync Sitemap.png`
- Zoom on Sync Sitemap row (map icon + label + sub + `Push Sitemap` button).

### 7.7 Indexing History tab — `Full Page Indexing History.png`
- Purple info banner at top: `ⓘ Click Check Live next to any URL to ask Google if it has successfully indexed that specific page yet. It may take hours or days for Google to crawl pushed URLs.`
- Subheading: `Showing logs for: 7seersmedia.com` + `🔄 Refresh` (ghost) right.
- **Table:** `Date | Type | URL | Status | Action`.
  - Row: `30/04/2026 20:57` | `🌐 URL` | `https://7seersmedia.com/thoughts/master-the-power-of-color-the…` | `✓ Success` (green chip) | `🔍 Check Live` (purple ghost).
  - Expanded sub-row below: `✓ Indexed by Google` (green) + `State: Submitted and indexed` (muted).

### 7.8 `Logs for the connected website.png` / 7.9 `Logs with check live for indexing.png`
- Zoom on the same table row with collapsed (7.8) and expanded (7.9) state. Confirms expand-on-click affordance.

### 7.10 `Indexing check disclaimer.png`
- Zoom on the purple info banner from 7.7.

### 7.11 Analytics tab — `Instant Indexing Analytics full page.png`
- Section `G Performance Dashboard` + sub `Verified Property Insights` + `Last 28 Days ⌄` filter + `🔄 Reload` (right).
- **4 stat tiles row:** `19 Total Clicks` / `3,616 Total Impressions` / `0.5% Average CTR` / `17.0 Avg Position`.
- **Chart card:** `📊 Clicks Over Time (28 Days)` — purple vertical bar chart (varying heights, no y-axis labels visible).
- **Pivot tabs:** `Keywords | Page | Country | Device` (Keywords active, purple pill).
- **Table** under tabs: `Top Keywords | Clicks | Impr. | Position`.

### 7.12 `Metric Cards .png`
- Zoom on 4 stat tiles. Values different in this crop (`21 / 3,480 / 0.6% / 19.2`) — confirms numbers refresh.

### 7.13 `Analytics Chart.png`
- Zoom on `Clicks Over Time` purple bar chart.

### 7.14 `Analytics Filter of days.png`
- Date-range dropdown OPEN. Options: `Last 7 Days`, `Last 28 Days` (active purple), `Last 3 Months`, `Last 6 Months`, `Last Year`.

### 7.15 `Metrics Of Analytics.png` (Keywords table)
- Full keyword-pivot table. Columns: `Top Keywords | Clicks | Impr. | Position`.
- 10 rows visible (e.g. `7 seers 7 / 115 / 0.0`, `7seers 2 / 193 / 0.0`, `2 color combination 0 / 1 / 0.0`, `7 colors palette 0 / 1 / 0.0`, …). Clicks column color: purple/pink for nonzero, magenta zeros.
- Footer: `Showing 1-10 of 50` + prev/next chevrons.

### 7.16 Keyword Tracker tab — `Full Page Keyword Tracker.png`
- Card `🎯 Add New Keyword` (purple target icon).
- Input row: text input placeholder `seo on wordpress, rank math vs yoast...` + `Save` button (purple).
- Helper: `You can add multiple keywords at a time by separating them with commas.`
- Section `Keyword Manager` with search input `🔍 Search Keyword...` (right).
- Table: `KEYWORD | IMPRESSIONS | CLICKS | SEARCH POSITION | POSITION HISTORY`.
  - Row 1: `complementary color palette | 12 | 0 | 4.3 | No Data`
  - Row 2: `7 seers | 118 | 7 | 2.3 ▲ 0.6 | (blue sparkline)`

### 7.17 `Add Keywords.png` / 7.18 `Keyword Manager.png`
- Zooms on the two main sections (input row and manager table). Sparkline column uses thin blue line.

**New components for §7:**
- `Pill/PoweredBy` (`🟢 Powered by Google` etc.)
- `Tabs/UnderlineMulti` (5 tabs)
- `Card/StepNumbered` (step number + title + sub + body slot, lockable)
- `Button/GoogleAuth` (white-on-dark with G mark)
- `Banner/SuccessInline` (green, with check icon)
- `Row/CheckboxList` (checkbox + label) with `Select All` master
- `Button/StickyPrimary` (e.g. `Push 17 URLs`)
- `Table/WithExpandRow` (expandable success/state under main row)
- `Chip/StatusSuccess` (green check + label)
- `Card/MetricTile` (numeric + label, 4-up grid)
- `Chart/BarPurple` (vertical bars, evenly spaced)
- `Tabs/Pill` (Keywords / Page / Country / Device — pill style, purple active fill)
- `Sparkline/Mini` (line chart inside table cell)
- `Delta/UpDown` (`▲ 0.6` green positive)

---

## 8. Account Settings (modal)

### 8.1 Profile tab — `Profile.png`
- **Modal header:** `Account Settings` H1 + close `×` (right).
- **Tab bar:** `👤 Profile | 🎯 Personalization` (Profile active, purple).
- Centered avatar: large purple circle with `7M` + small shield badge bottom-right (verified).
- Name `7seers media` (H2) + plan chip `Free Plan` (purple ghost).
- Info card: `ⓘ Read Only View` (blue) + copy `To update your personal details or change your password, please visit your account dashboard.`
- **Field: Email Address** — input prefixed with envelope icon, value `7seersmedia@gmail.com`.
- Below: `Joined Date` and `Status` (sub-fields, cut off in this screenshot).

### 8.2 Profile second half — `Profile second half.png`
- **Joined Date** — calendar icon + `April 24, 2026`.
- **Status** — shield icon + `Google Auth`.
- **Sign Out** button — full-width red ghost (red border, red text, sign-out icon).

### 8.3 Personalization tab — `Personalization.png` (full)
- Tab `🎯 Personalization` active.
- **Section: BRAND IDENTITY** (uppercase label, document icon)
  - `Brand Name` input → `7 Seers`
  - `Brand About` multi-line textarea → multi-line description
- Divider.
- **Section: STRATEGY** (target icon)
  - `Main Goals` dropdown — value `4 Goals Selected`
  - `Industry` and `Audience` (2-col), tag-style inputs (cut off here).

### 8.4 `Brand Identity.png`
- Zoom on Brand Identity section. Shows full multi-line Brand About filled in.

### 8.5 `Strategy.png`
- Zoom on Strategy section.
- `Main Goals` dropdown showing `4 Goals Selected`.
- `Industry` tag input with chips: `SaaS ×`, `Agency ×`, `E-commerce ×`, `Startup ×` + helper `Press Enter to add multiple tags`.
- `Audience` tag input with chips: `Saas Founders ×`, `Business Owners ×`, `Premium Businesses ×` + same helper.

### 8.6 `Competitors.png`
- **Competitors (URLs)** field — input pre-filled `https://dashdigital.studio/` + `+ Add Competitor` purple link below.
- Full-width `💾 Save Settings` purple gradient button.

**New components for §8:**
- `Modal/StandardSheet` (header + close + tabbed body)
- `Tabs/IconPair` (2-tab variant with icons)
- `Avatar/InitialsLarge` with verified badge
- `Chip/PlanBadge`
- `Banner/InfoBlue` (Read Only View)
- `Input/IconPrefix` (mail, calendar, shield)
- `Button/DangerFullWidth` (Sign Out)
- `Section/IconLabel` (uppercase label + icon)
- `Input/TagsRepeater` (entered tags as chips with × + helper text)
- `Repeater/CompetitorURL` (URL input + `+ Add` link)
- `Button/GradientPrimary` (Save Settings)

---

## Coverage check
All 116 screenshots accounted for:
- 404 Monitor: 10 · Account Settings: 6 · Global Basic: 3 · Global Keywords: 5
- Global Advanced (Schema): 56 (home 4 + Article 12 + Book 13 + Person & Org 9 + Restaurant 10 + Service 8)
- Image SEO: 6 · SEO Analyzer: 12 · Submit Indexing: 18

## Suggested Figma build order

**Phase 1 — Foundations (build before any screen):**
1. Color tokens, type ramp, radius/spacing scales (see Shared Chrome section)
2. Icons set (gear, database, bolt, bar-chart, image, book, globe, user, shield, clock, mail, target, calendar, plus, x, check, info, warn, magic-wand, refresh, download, copy, search, trash, chevron, broken-link, monitor, phone)
3. Plugin chrome frame (top bar + sidebar + main canvas grid)

**Phase 2 — Atomic components (used everywhere):**
- Inputs: `Input/Single`, `Input/IconPrefix`, `Input/Date` (+ `DatePicker/Popover`), `Input/WithActions`, `Input/PhoneWithCountry`, `Input/PriceWithCurrency`, `Input/TagsRepeater`, `Textarea/Multiline`
- Buttons: `Button/AIPrimary`, `Button/IconGhost`, `Button/SplitDropdown`, `Button/GoogleAuth`, `Button/Wand`, `Button/StickyPrimary`, `Button/DangerFullWidth`, `Button/GradientPrimary`
- Selection: `Dropdown/PageSelect`, `Dropdown/SearchableList`, `Toggle/Switch`, `Radio/Group`
- Tabs: `Tabs/Underline`, `Tabs/UnderlineMulti`, `Tabs/Sub` (w/ `Ext` badge), `Tabs/Pill`, `Tabs/IconPair`, `Tabs/Counted`
- Chips & pills: `Chip/Context`, `Chip/DomainOutline`, `Chip/RouteDismissible`, `Chip/StatusSuccess`, `Pill/StatusDot`, `Pill/PoweredBy`, `Pill/Credits`, `Chip/PlanBadge`
- Counters: `CharCounter`, `Counter/PageStatus`, `Pagination/Compact`, `Delta/UpDown`
- Status: `Banner/InlineAlert` (purple), `Banner/SuccessInline` (green), `Banner/InfoBlue`
- Data viz: `Gauge/CircularScore` (4 color variants), `StatTile/Metric` (5 color variants), `Card/MetricTile`, `Chart/BarPurple`, `Sparkline/Mini`

**Phase 3 — Composite cards (assemble from atoms):**
- `Card/SEOInput`, `Card/SectionWithIcon`, `Card/StepNumbered`, `Card/SummaryWide`, `Card/StatList`
- `Row/SavedKeyword`, `Row/ImageItem`, `Row/AuditFinding` (3 states), `Row/CheckboxList`
- `Table/Standard`, `Table/Compact`, `Table/WithExpandRow`
- `TreeView/Folder`, `PageRow/PathCard`, `EmptyState/CenteredLink`, `LoadingState/CenteredSpinner`
- `WorkingHoursRow`, `SchemaTypeCard`, `Repeater/InputRow`, `Repeater/AddItem`, `Repeater/CompetitorURL`
- `List/RankedKeywords`, `List/SuggestionBullets`, `CodeBlock/Preview`

**Phase 4 — Screens (one Figma frame per screenshot, organized by section):**
- Page 1: Plugin Home + Shared Chrome states
- Page 2: Global Settings (Basic, Keywords, Advanced root + 5 schema forms + JSON preview)
- Page 3: 404 Monitor (all states)
- Page 4: Image SEO
- Page 5: SEO Analyzer (All tab × 5 sections + Speed tab)
- Page 6: Submit Indexing (5 inner tabs)
- Page 7: Account Settings (Profile + Personalization modal)

**Phase 5 — Code Connect** (after screens approved): map each Figma component to its real component in the RankFrame plugin codebase via `add_code_connect_map`.

---

## What's still missing from screenshots (gaps to confirm later)
- **Pages** nav item — no screenshot folder for the Pages section (per-page meta editor mentioned in `rankframe.md` §2). Need to capture.
- **Plugin home / landing** state before any nav item is opened.
- **Personal/Agency billing modal**, **Recrawl Website** confirmation, **See Billing** modal.
- **AI write / generate** loading + result states for Title/Description and Image alt.
- **Empty / first-run / onboarding** states.
- **Working hours toggle ON** state (open/close time pickers) for Restaurant schema.
- **Multi-Goals dropdown OPEN** state (only closed value shown).
- **PDF audit report** layout (mentioned but not screenshotted — exists separately as a real PDF in repo root).
- **Section 38** features (multi-user team, content engine) — no screenshots yet, those are still on `claude/lucid-keller-bc8Jc` as written specs.


