# RankFrame Email Sequence: Trial to Paid
## Zapier + MailerLite Integration Spec

**Product:** RankFrame, native Framer SEO plugin  
**Trial:** 7 days, no credit card required  
**Plans:** Personal $15/mo ($108/yr) · Agency $40/mo ($288/yr)  
**Support:** hello@7seersmedia.com  
**Brand rules:** No em dashes. Second person. Designer-first. Always native to Framer.

---

## 1. Sequence Map

| # | Email | Trigger | Segment | Goal |
|---|-------|---------|---------|------|
| 1 | Welcome + First Win | Immediately on trial start | All | Activate: push sitemap to Google |
| 2 | Schema in 60 Seconds | Day 1 +20h | All | Activate: auto-generate schema |
| 3 | Your Images Are Invisible to Google | Day 2 +20h | All | Activate: bulk alt text |
| 4 | Fix What's Actually Broken | Day 3 +20h | All | Activate: per-page audit |
| 5 | Live Google Indexing Check (Inside Framer) | Day 5 +10h | Not yet converted | Show differentiator + social proof |
| 6 | Your Trial Ends Tomorrow | Day 6 +10h | Not yet converted | Urgency |
| 7 | Your Trial Has Ended | Day 8 | Not yet converted | Soft close + objection handle |
| 8 | Still There? | Day 14 | Not yet converted | Winback |

**Segmentation tags (applied via Zapier):**
- `audience:freelancer` (Personal plan interest)
- `audience:agency` (Agency plan interest or multiple sites)
- `converted` (added when subscriber upgrades, suppresses emails 5-8)
- `feature:schema`, `feature:images`, `feature:pages` (added when feature is first used)

---

## 2. Email Copy

---

### Email 1: Welcome + First Win
**Send:** Immediately on trial start  
**Subject:** Your Framer site is not indexed yet. Fix that in 30 seconds.  
**Preheader:** RankFrame is live inside your Framer editor. Here's the first thing to do.

---

Hi [first_name],

You just started your RankFrame trial. Good move.

RankFrame is the only SEO plugin built natively inside Framer. Everything happens inside your editor. No external dashboards, no code, no developer.

Here is the single most important thing you can do right now.

**Push your sitemap to Google.**

Most Framer sites are not indexed properly because Google has never been told they exist. RankFrame fixes that in three clicks.

1. Open RankFrame inside Framer
2. Go to Submit Indexing
3. Click "Push Sitemap"

That's it. Google now knows every page on your site exists and needs to be crawled.

While you're there, check the Indexing History tab. You'll see a "Check Live" button next to each URL. Click it and RankFrame will ask Google directly whether your page is indexed. No guessing, no waiting, no leaving Framer.

No other tool in the Framer ecosystem does that.

You have 7 days of full access. I'll send you one tip per day so you get the most out of it.

See you tomorrow.

Harsh  
Co-founder, RankFrame  
hello@7seersmedia.com

P.S. If you run an agency or manage more than one Framer site, reply and let me know. There's a plan built specifically for studios.

---

**CTA button text:** Open RankFrame in Framer  
**CTA URL:** https://rankframe.com  
**Footer:** RankFrame by 7 Seers, Lucknow, India · Unsubscribe

---

### Email 2: Schema in 60 Seconds
**Send:** Day 1, 20 hours after Email 1  
**Subject:** Google still doesn't know what your Framer site is about  
**Preheader:** Schema markup tells Google exactly what you do. Here's how to auto-generate it for every page.

---

Hi [first_name],

Yesterday you pushed your sitemap. Google knows your pages exist now.

Today, let's tell Google what those pages actually are.

That's what schema markup does. It's structured data that helps Google understand your content: whether a page is an article, a service, an organization, a product. Without it, Google guesses. With it, Google ranks you for the right things.

Schema is also what powers rich results: those enhanced search listings with star ratings, prices, and breadcrumbs that get more clicks.

Here's the problem. Adding schema manually is tedious. You have to write JSON-LD by hand, paste it into your site, and repeat it for every page. Most Framer designers skip it entirely.

RankFrame removes that problem completely.

**Auto-generate schema for your entire sitemap in one flow.**

1. Go to Global Settings inside RankFrame
2. Open the Advanced tab
3. Click "Auto-Generate"

RankFrame scans every page in your sitemap. For each one, it shows you whether schema exists or not. Click Generate on any page and RankFrame pre-fills the entire schema form using AI, pulling from your site content and the brand details you set in Personalization.

Review it, make any edits, toggle it on, and click "Save and Inject."

Done. Proper structured data on every page, injected cleanly without duplicate script tags.

Try it today while your trial is running.

Harsh  
Co-founder, RankFrame

---

**CTA button text:** Auto-Generate Schema Now  
**CTA URL:** https://rankframe.com  

---

### Email 3: Your Images Are Invisible to Google
**Send:** Day 2, 20 hours after Email 2  
**Subject:** 72 images with no alt text. Google can't see any of them.  
**Preheader:** RankFrame found the missing alt text on your site. Here's how to fix all of it in minutes.

---

Hi [first_name],

Images are one of the most overlooked SEO opportunities on Framer sites.

Google cannot see images. It reads the alt text to understand what the image shows. If the alt text is missing, that image is invisible to search. It does not contribute to your rankings, it does not show up in image search, and it signals to Google that your site is incomplete.

The average Framer portfolio or studio site has 100 to 500 images. Writing alt text manually for all of them would take hours.

RankFrame does it in minutes.

**Here's how to bulk-generate alt text for every image on your site.**

1. Go to Image SEO inside RankFrame
2. You'll see the full image inventory: Canvas images and CMS collections, organized by folder
3. Click "Select All"
4. Click "Generate Alt Text"

RankFrame generates accurate, brand-aware alt text for every selected image using AI. It pulls context from your Personalization settings so the copy sounds like your brand, not like a generic description.

You can also set a global suffix (like "by [Your Studio Name]") that gets appended to every alt text automatically. One setting, applied to everything.

Your images start working for your SEO the moment you generate and save.

You can export the full alt text list as a CSV too. Useful if you want a record or if a client asks for it.

Harsh  
Co-founder, RankFrame

P.S. Credits power every AI generation. You have free credits on your trial. Use them.

---

**CTA button text:** Generate Alt Text Now  
**CTA URL:** https://rankframe.com  

---

### Email 4: Fix What's Actually Broken
**Send:** Day 3, 20 hours after Email 3  
**Subject:** Your Framer site has SEO issues. Here's exactly where they are.  
**Preheader:** Per-page audit with live preview. See every issue and fix it without switching tabs.

---

Hi [first_name],

Most SEO audits give you a list of problems with no context.

"H1 missing." Okay, which page? Which heading? Where in the code?

RankFrame shows you exactly what's broken and exactly where.

**Open the Pages section inside RankFrame.**

Every page on your Framer site is listed here, organized into folders matching your site structure. Each one has a live SEO score with a color-coded dot.

Click any page. You get a split-screen view.

On the left: the live page, scrollable, exactly as visitors see it. On the right: the full SEO control surface for that page, including AI-generated title and description, a Google snippet preview showing exactly how this page appears in search results, and a full audit broken into four sections.

**What the audit checks:**

Basic SEO: title length, H1, H2 structure, image alt attributes (with the specific missing tags expanded so you can see exactly which images are the problem), internal vs external link ratio, keywords in title and description.

Advanced SEO: sitemap, robots.txt, broken links, noindex meta, canonical tag, OpenGraph meta, schema data, WWW canonicalization, mobile and desktop search previews.

Performance: page size, mobile speed, Core Web Vitals, response time, image caching headers.

Security: HTTPS, theme visibility.

Every failed check shows you the actual issue, not just a label. Click it for detailed suggestions.

You can also download the full audit as a PDF. Useful for client reports, useful for tracking progress over time.

Harsh  
Co-founder, RankFrame

---

**CTA button text:** Run Your First Page Audit  
**CTA URL:** https://rankframe.com  

---

### Email 5: Live Google Indexing Check (Inside Framer)
**Send:** Day 5, 10 hours after trial start  
**Suppress if:** tag `converted` is present  
**Subject:** This is the only Framer tool that checks Google indexing in real time  
**Preheader:** No guessing. No waiting. Ask Google directly whether your page is indexed, without leaving the editor.

---

Hi [first_name],

You're on day 5. Two days left in your trial.

I want to show you one feature that no other tool in the Framer ecosystem has.

**Live Google indexing confirmation, inside Framer.**

Here's the usual workflow when you publish a new page and want to know if Google has indexed it. You go to Google Search Console, navigate to URL Inspection, paste the URL, wait for the result, and then switch back to Framer.

With RankFrame, you don't leave the editor.

Go to Submit Indexing, open the Indexing History tab. Next to every URL you've pushed, there's a "Check Live" button. Click it.

RankFrame asks Google directly: has this page been indexed?

You get the answer inline: "Submitted and indexed." No switching tabs, no copy-pasting URLs, no waiting.

You also get live Google Search Console analytics inside the same panel: total clicks, impressions, average CTR, average position, a clicks-over-time chart, and a keyword breakdown by page, country, and device. All pulled from your verified GSC property without ever leaving Framer.

This is SEO workflow that actually fits how designers work.

If you're ready to keep it running after your trial:

Personal plan: $15/month or $108/year (one Framer site, full access)  
Agency plan: $40/month or $288/year (unlimited sites, priority support)

Both plans include a 40% saving on annual billing.

Harsh  
Co-founder, RankFrame

---

**CTA button text:** Upgrade and Keep Full Access  
**CTA URL:** https://dashboard.rankframe.com  

---

### Email 6: Your Trial Ends Tomorrow
**Send:** Day 6, 10 hours after trial start  
**Suppress if:** tag `converted` is present  
**Subject:** Your RankFrame trial ends tomorrow  
**Preheader:** Everything you've set up stays live. Your subscription keeps it running.

---

Hi [first_name],

Your 7-day RankFrame trial ends tomorrow.

Everything you've built this week: the schema injected into your pages, the alt text generated for your images, the indexing submissions to Google, the audit scores, the keyword tracking data. It all stays live as long as your subscription is active.

If your trial ends without upgrading, the monitoring and injection features stop running. Your site won't break, but new 404 errors won't be tracked, schema injections won't fire on republish, and you lose access to the live GSC data inside Framer.

Here's what it costs to keep everything running:

**Personal plan** (one Framer site): $15/month or $108/year  
**Agency plan** (unlimited Framer sites): $40/month or $288/year

Annual billing saves you 40% on both plans.

If you have any questions before deciding, reply to this email. I read every reply.

Harsh  
Co-founder, RankFrame  
hello@7seersmedia.com

---

**CTA button text:** Upgrade Before Your Trial Ends  
**CTA URL:** https://dashboard.rankframe.com  

---

### Email 7: Your Trial Has Ended
**Send:** Day 8 (1 day after trial expiry)  
**Suppress if:** tag `converted` is present  
**Subject:** Your RankFrame trial has ended  
**Preheader:** Your data is still there. Pick up where you left off.

---

Hi [first_name],

Your RankFrame trial ended yesterday.

Your account is still there. Your settings, your schema, your image alt text, your keyword data: all saved. You can pick up exactly where you left off the moment you upgrade.

A few things that stop working without an active plan:

- Schema injection on every Framer republish
- 404 error monitoring (new errors not tracked)
- Google indexing submissions
- AI generation (meta titles, descriptions, alt text, schema fields)
- Live GSC analytics inside Framer

Everything reactivates the moment you subscribe.

**Still not sure?** Here's the honest version.

RankFrame costs $15/month for one site. That's one hour of your time at typical freelance rates. If it saves you two hours of manual SEO work, it's already paid for itself. If it helps a client page rank for one more keyword, the ROI is significant.

For agencies, $40/month covers every client site you manage. No per-site fees, no caps.

**Personal plan:** $15/month or $108/year  
**Agency plan:** $40/month or $288/year

Questions? Reply here. I'm happy to answer.

Harsh  
Co-founder, RankFrame  
hello@7seersmedia.com

---

**CTA button text:** Reactivate Your Account  
**CTA URL:** https://dashboard.rankframe.com  

---

### Email 8: Still There?
**Send:** Day 14  
**Suppress if:** tag `converted` is present  
**Subject:** One question before I stop emailing you  
**Preheader:** What stopped you from upgrading? I'd genuinely like to know.

---

Hi [first_name],

This is the last email I'll send about your RankFrame trial.

I have one question: what stopped you from upgrading?

Was it the price? The timing? A feature that wasn't there? Something that didn't work the way you expected?

Reply and tell me. I read every reply and I use the feedback directly to improve the product. If something is broken or missing, I want to know.

If the timing just wasn't right, here's the short version of what's waiting for you when you come back:

- The only native SEO plugin built inside Framer
- AI-generated meta titles, descriptions, schema, and alt text specific to your brand
- Live Google indexing confirmation without leaving the editor
- Core Web Vitals and GSC analytics inside Framer
- Per-page audit with live preview
- 404 monitoring, keyword tracking, schema injection

Personal plan: $15/month (one site) or $108/year  
Agency plan: $40/month (unlimited sites) or $288/year  
7-day free trial anytime, no card required

If you ever want to come back, your data is still saved.

Harsh  
Co-founder, RankFrame  
hello@7seersmedia.com

---

**CTA button text:** Come Back to RankFrame  
**CTA URL:** https://rankframe.com  

---

## 3. Zapier Setup

### Trigger: Catch Webhook (Zapier Webhooks app)

Create a Zapier webhook URL. This is the endpoint RankFrame (or your auth/signup system) POSTs to when a new trial starts.

**Webhook payload schema (what RankFrame sends):**

```json
{
  "email": "user@example.com",
  "first_name": "Alex",
  "last_name": "Morgan",
  "plan_interest": "agency",
  "site_url": "https://example.com",
  "trial_start": "2026-05-02T10:00:00Z",
  "source": "framer_marketplace",
  "sites_count": 3
}
```

**Field reference:**

| Field | Type | Values | Notes |
|-------|------|--------|-------|
| email | string | any | Required. Primary identifier in MailerLite. |
| first_name | string | any | Used in email personalization. |
| last_name | string | any | Optional. |
| plan_interest | string | `personal`, `agency`, `unknown` | Determines audience tag. |
| site_url | string | URL | The Framer site they connected. |
| trial_start | string | ISO 8601 | Used to calculate send delays. |
| source | string | `framer_marketplace`, `direct`, `referral` | For attribution tracking. |
| sites_count | integer | 1+ | If >1, override plan_interest to `agency`. |

---

### Zapier Steps

**Step 1: Catch Hook**
Trigger app: Webhooks by Zapier  
Event: Catch Hook  
Copy the generated webhook URL and configure it as the trial-start webhook endpoint in RankFrame's settings (or your auth provider).

---

**Step 2: Formatter (optional but recommended)**
App: Formatter by Zapier  
Event: Text, Capitalize  
Input: `first_name` from Step 1  
Output: `first_name_formatted` (ensures "alex" becomes "Alex" in emails)

---

**Step 3: Filter: Agency override**
App: Filter by Zapier  
Condition: `sites_count` is greater than 1  
Action: Set `plan_interest` to `agency` (use Paths in next step to handle this)

If you use **Zapier Paths**, create two paths:
- Path A: `plan_interest` = `agency` OR `sites_count` > 1
- Path B: all others (personal / unknown)

---

**Step 4A (Path A) or Step 4B (Path B): Create or Update Subscriber in MailerLite**

App: MailerLite  
Event: Create or Update Subscriber  

**Field mapping:**

| MailerLite Field | Zapier Value |
|------------------|--------------|
| Email | `email` |
| Name | `first_name_formatted` (or `first_name`) |
| Fields: last_name | `last_name` |
| Fields: plan_interest | `plan_interest` |
| Fields: site_url | `site_url` |
| Fields: trial_start | `trial_start` |
| Fields: source | `source` |
| Fields: sites_count | `sites_count` |

---

**Step 5A (Agency path): Add to Group**
App: MailerLite  
Event: Add Subscriber to Group  
Group: `RankFrame Trial - Agency`  

**Step 5B (Personal path): Add to Group**
App: MailerLite  
Event: Add Subscriber to Group  
Group: `RankFrame Trial - Personal`

---

**Step 6: Add Tag (audience)**
App: MailerLite  
Event: Add Tag to Subscriber  
Tag: `audience:agency` (Path A) or `audience:freelancer` (Path B)

---

**Second Zap: Conversion webhook**

When a subscriber upgrades (paid plan starts), fire a second webhook to Zapier:

```json
{
  "email": "user@example.com",
  "plan": "agency_yearly",
  "converted_at": "2026-05-05T14:00:00Z"
}
```

Zapier steps for this Zap:
1. Catch Hook
2. MailerLite: Add Tag to Subscriber → tag: `converted`
3. MailerLite: Remove Subscriber from Group → group: `RankFrame Trial - Agency` or `RankFrame Trial - Personal`
4. MailerLite: Add Subscriber to Group → group: `RankFrame Paid - [plan]`

This tag suppresses emails 5 through 8 via MailerLite automation conditions.

---

## 4. MailerLite Automation Spec

### Automation 1: RankFrame Trial Sequence

**Trigger:** Subscriber joins group `RankFrame Trial - Agency` or `RankFrame Trial - Personal`  
(Set up one automation per group, or use a single automation triggered by either group.)

**Automation steps:**

```
Trigger: Joined group "RankFrame Trial - [Agency|Personal]"
│
├── Email 1: Welcome + First Win
│   Send immediately
│
├── Wait: 20 hours
│
├── Email 2: Schema in 60 Seconds
│
├── Wait: 20 hours
│
├── Email 3: Your Images Are Invisible to Google
│
├── Wait: 20 hours
│
├── Email 4: Fix What's Actually Broken
│
├── Wait: 44 hours (puts us at Day 5)
│
├── Condition: Does subscriber have tag "converted"?
│   YES → Exit automation
│   NO  → Continue
│
├── Email 5: Live Google Indexing Check
│
├── Wait: 24 hours (Day 6)
│
├── Condition: Does subscriber have tag "converted"?
│   YES → Exit automation
│   NO  → Continue
│
├── Email 6: Your Trial Ends Tomorrow
│
├── Wait: 48 hours (Day 8)
│
├── Condition: Does subscriber have tag "converted"?
│   YES → Exit automation
│   NO  → Continue
│
├── Email 7: Your Trial Has Ended
│
├── Wait: 6 days (Day 14)
│
├── Condition: Does subscriber have tag "converted"?
│   YES → Exit automation
│   NO  → Continue
│
└── Email 8: Still There?
    End automation
```

---

### Segmentation: Agency vs Personal copy variants

For emails 5, 6, 7, and 8, use MailerLite's dynamic content blocks to swap the plan recommendation:

**Condition:** subscriber field `plan_interest` = `agency`

**Agency block (show when condition is true):**
> Agency plan: $40/month or $288/year (unlimited Framer sites, priority support)

**Personal block (show when condition is false):**
> Personal plan: $15/month or $108/year (one Framer site, full access)

No need to duplicate the entire automation. One automation, dynamic pricing block in each relevant email.

---

### A/B Test: Email 6 subject line

Run a 50/50 A/B test on Email 6 (the highest-leverage urgency email):

- **Version A:** Your RankFrame trial ends tomorrow
- **Version B:** 24 hours left on your Framer SEO trial

Winner: whichever drives more upgrade clicks in 48 hours. Promote winner automatically.

---

### Custom Fields to Create in MailerLite

Go to Subscribers, then Fields, and add:

| Field name | Type | Description |
|------------|------|-------------|
| plan_interest | Text | personal / agency / unknown |
| site_url | Text | Connected Framer site URL |
| trial_start | Date | ISO 8601 trial start timestamp |
| source | Text | framer_marketplace / direct / referral |
| sites_count | Number | Number of Framer sites |

---

### Groups to Create in MailerLite

| Group name | Purpose |
|------------|---------|
| RankFrame Trial - Personal | Personal plan trial subscribers |
| RankFrame Trial - Agency | Agency plan trial subscribers |
| RankFrame Paid - Personal Monthly | Converted, Personal Monthly |
| RankFrame Paid - Personal Yearly | Converted, Personal Yearly |
| RankFrame Paid - Agency Monthly | Converted, Agency Monthly |
| RankFrame Paid - Agency Yearly | Converted, Agency Yearly |

---

### Tags to Create in MailerLite

| Tag | Applied when |
|-----|-------------|
| `audience:freelancer` | plan_interest = personal (via Zapier) |
| `audience:agency` | plan_interest = agency or sites_count > 1 (via Zapier) |
| `converted` | Upgrade webhook fires (via second Zap) |
| `feature:schema` | User uses Auto-Generate schema (optional 3rd Zap) |
| `feature:images` | User uses Image SEO bulk generation (optional 3rd Zap) |
| `feature:indexing` | User pushes a URL to Google (optional 3rd Zap) |
| `winback` | Completed Email 8 without converting |

---

## 5. Implementation Checklist

### Zapier
- [ ] Create Webhook URL in Zapier (Catch Hook)
- [ ] Configure RankFrame/auth system to POST to webhook on trial start
- [ ] Build Paths: agency vs personal (based on plan_interest + sites_count)
- [ ] Map all fields to MailerLite subscriber
- [ ] Add to correct MailerLite group per path
- [ ] Apply audience tag per path
- [ ] Build second Zap for conversion webhook (adds `converted` tag, moves groups)
- [ ] Test both Zaps with sample payloads

### MailerLite
- [ ] Create all custom fields listed above
- [ ] Create all groups listed above
- [ ] Create all tags listed above
- [ ] Import/create all 8 email templates with correct subject, preheader, body, CTA
- [ ] Add dynamic content blocks for agency vs personal pricing (emails 5, 6, 7, 8)
- [ ] Build automation with correct wait steps and conversion-check conditions
- [ ] Set up A/B test on Email 6 subject line
- [ ] Enable automation
- [ ] Send test subscriber through full flow and verify timing + suppression

### Testing
- [ ] Trigger trial-start webhook with a test email
- [ ] Verify subscriber appears in MailerLite with correct fields, group, and tag
- [ ] Wait through automation and verify each email fires at correct delay
- [ ] Trigger conversion webhook with same test email
- [ ] Verify `converted` tag appears and emails 5-8 are suppressed
- [ ] Check unsubscribe link works in every email

---

## 6. From Address and Sender Settings

| Setting | Value |
|---------|-------|
| From name | Harsh from RankFrame |
| From email | hello@7seersmedia.com |
| Reply-to | hello@7seersmedia.com |
| Company name | 7 Seers |
| Company address | Lucknow, India |

All emails must include a visible unsubscribe link (MailerLite handles this automatically in the footer).

---

*Last updated: 2026-05-02*  
*Branch: claude/email-sequence-zapier-sDCVx*
