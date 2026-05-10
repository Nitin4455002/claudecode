# RANKFRAME
## Email Automation Master Plan
**Free Trial to Paid Conversion · Built for MailerLite · May 2026**

> This document contains everything you need to build RankFrame's email automation from scratch in MailerLite — including the full copy for all 16 emails, the segmentation setup, and step-by-step MailerLite instructions. Follow the sections in order.

---

## 0. The Full Architecture

Four sequences. Sixteen emails. One segmentation fork. Here is every automation you will build, in priority order.

| Sequence | Trigger | Emails | Duration | Goal |
|---|---|---|---|---|
| 1. Free Trial | Joins group: Free Trial Users | 7 | Days 0–6 | Convert to Personal or Agency plan |
| 2. Win-Back | Trial ends with no upgrade | 3 | Days 8–14 | Re-engage non-converters |
| 3. Personal Onboarding | Upgrades to Personal plan | 3 | Days 2–21 | Retain + nudge to annual |
| 4. Agency Onboarding | Upgrades to Agency plan | 3 | Days 2–21 | Retain + nudge to annual |

**SEGMENTATION FORK** On Day 2, Email 3 contains two tracked links: "Just my own site" and "Managing client sites." Clicking either link adds the user to a MailerLite group (Solo Designers or Agency Users). A Condition step immediately after checks which group they joined and sends different Day 3 email content. Users who click neither link default to the Solo path. Full setup is in Section 6.

---

## Sequence 1: Free Trial — 7 Emails (Days 0–6)

Every new free trial user enters this sequence the moment they sign up. The goal is to get them to their aha moment as fast as possible, then convert before Day 7. Emails 1–3 are universal. Email 4 forks based on their segmentation click. Emails 5–7 are universal again.

- **Trigger:** Joins group: Free Trial Users
- **Length:** 7 emails, 7 days
- **Goal:** Upgrade to paid plan
- **Exit Condition:** Upgrades to any paid plan

---

### EMAIL 1 · WELCOME + ACTIVATE (PERSONALIZATION)

**SEND:** Immediately on signup — Day 0

**SUBJECT:** Your RankFrame trial is live — do this first

**PREVIEW:** Takes 3 minutes. Makes every AI feature 10x better.

**BODY COPY:**

Before you do anything else in RankFrame, open the plugin and complete Personalization.

Go to: Account Settings (your avatar, bottom-left) → Personalization tab.

It asks you four things:
· Your brand name
· What your business does and who it serves (3–5 sentences)
· Your goals: leads, traffic, sales — pick all that apply
· Your competitors' URLs

This is not busywork. Every AI-generated meta title, every schema description,
every alt text suggestion pulls from what you enter here.
Without it, the AI writes generic copy. With it, it writes like you.

Takes 3 minutes. Do it before your first AI generation.

— Harsh, RankFrame / 7 Seers

**CTA:** "Complete Personalization →" → Deep link to Account Settings > Personalization tab in plugin

**WHY IT WORKS:** Personalization is the highest-leverage first action a new user can take. Every subsequent AI generation improves because of it. Sending this immediately capitalises on peak motivation — right after signup. Starting with a setup action (not a feature) also filters for serious users and sets the expectation that RankFrame rewards effort with quality output.

---

### EMAIL 2 · QUICK WIN — GOOGLE INDEXING

**SEND:** Day 1 — 24 hours after signup

**SUBJECT:** Tell Google your site exists (takes 30 seconds)

**PREVIEW:** Most Framer sites wait weeks to be indexed. You don't have to.

**BODY COPY:**

Most Framer sites get discovered by Google whenever Google decides to crawl them.
That could be days or weeks after you publish.

You can skip that.

Open RankFrame → Submit Indexing → Submit URLs tab.
Click "Push Sitemap."

Done. Your entire sitemap is submitted to Google through the official
Google Indexing API in one click. No Search Console. No DNS records.
No verification steps. RankFrame handles all of it.

After 24–48 hours, go to the Indexing History tab and check the status of your homepage.
Google will tell you directly: indexed or not.

— Harsh

**CTA:** "Push Your Sitemap →" → Deep link to Submit Indexing > Submit URLs tab in plugin

**WHY IT WORKS:** Indexing is the most universally understood SEO pain point. Every type of user has felt the frustration of a new page not appearing in Google. This email makes them feel the product's power immediately, with one concrete action and one verifiable result. It also reinforces the core promise: never leave Framer.

---

### EMAIL 3 · AI META TITLES + SEGMENTATION FORK

**SEND:** Day 2 — 48 hours after signup

**SUBJECT:** Your Framer site's first impression in Google

**PREVIEW:** The blue headline people click or skip — let's make it count.

**BODY COPY:**

When someone searches Google and finds your site, the first thing they see
is your meta title. One line. 50–60 characters.
That line decides whether they click or scroll past.

Open RankFrame → Pages → click any page → look at the right panel.

You will see:
· A live Google preview showing exactly how your page appears in search
· An AI-generated title alternative, written using your Personalization data
· A character counter so you never get cut off mid-word

Click Copy on the AI title if it looks good. Click Generate again for another
option. Apply it to your three most important pages today.

────────────────────────────────

Quick question — so your next email is actually useful:
How are you using RankFrame?

→  Just my own site
→  Managing client sites

(Click one — takes one second.)

**CTA:** "Improve Your Meta Titles →" → Deep link to Pages section in plugin

**WHY IT WORKS:** This email does double duty: it showcases the most-used feature AND segments every user with a single frictionless click. The two segmentation links each trigger a MailerLite group addition (Solo Designers or Agency Users). A Condition block after the next 1-day delay sends users down separate Email 4A or 4B paths. No click = default Solo path. See Section 6 for exact MailerLite setup.

**SEGMENTATION SETUP REMINDER** The two links at the bottom of Email 3 are NOT regular hyperlinks. Each one must be set up with a MailerLite Click Action that adds the subscriber to a group. "Just my own site" → adds to group: Solo Designers. "Managing client sites" → adds to group: Agency Users. Exact steps are in Section 6, Step 2 of this document.

---

### EMAIL 4A · SCHEMA — SOLO DESIGNER PATH [SOLO DESIGNERS ONLY]

**SEND:** Day 3 — Solo Designers only

**SUBJECT:** The real reason your portfolio isn't getting organic traffic

**PREVIEW:** It's not the design. It's what Google can't read.

**BODY COPY:**

If you're a designer, your portfolio is your best business development tool.
But only if Google can understand what it's about.

The problem: Framer sites look stunning but ship with almost zero structured data.
Google sees your CSS grid and animation code.
It misses the fact that you're a Framer designer who takes on brand and web projects.

In RankFrame → Global Settings → Schema:
Click Auto-Generate.

RankFrame generates a Person or Organization schema for your site.
This tells Google exactly who you are, what you do, and who you work with.

That's the signal that starts putting your name in front of queries like
"freelance framer designer [city]" or "brand identity studio [city]."

— Harsh

**CTA:** "Generate Your Schema →" → Deep link to Global Settings > Schema section in plugin

**WHY IT WORKS:** Solo designers often don't know about schema markup. This email explains the why (Google can't read Framer sites without it) before the what (the Auto-Generate button). The city-based query example makes the outcome feel personal and achievable. This path speaks directly to the portfolio-to-organic-leads use case.

---

### EMAIL 4B · AGENCY VALUE + WORKFLOW [AGENCY USERS ONLY]

**SEND:** Day 3 — Agency Users only

**SUBJECT:** How long does an SEO setup take per client site?

**PREVIEW:** Manual: 6–10 hours. With RankFrame: under 2 hours.

**BODY COPY:**

If SEO is part of what you deliver for clients — or what you want to charge for —
this is the number that matters:

A typical 30-page Framer site takes 6–10 hours to set up properly with manual SEO.
Meta tags, JSON-LD on every page, alt text, Search Console, sitemap submission.

With RankFrame it's under 2 hours. For every client site.
Unlimited sites on one Agency subscription.

Here's the exact workflow:
1. Complete Personalization with the client's brand (not yours)
2. Auto-Generate schemas for the entire sitemap → Save & Inject
3. Image SEO → Select All → Generate Alt Text
4. Submit Indexing → Push Sitemap
5. Download the PDF audit — this is your client deliverable

That PDF has the client's site name, their SEO score, and a full audit breakdown.
Clients see real, documented work. You spent 20 minutes generating it.

— Harsh

**CTA:** "See the Agency Workflow →" → Deep link to Pages section or a walkthrough doc on rankframe.com

**WHY IT WORKS:** Agency users think in billable hours and client deliverables. This email speaks both languages: hours saved (6–10 becomes under 2) and a tangible client-facing output (the PDF audit). The numbered workflow gives them an exact process for their first client site. This also sets up the Agency plan conversion — at even 2 client sites, the $40/month math is obvious.

---

### EMAIL 5 · SEO AUDIT + PDF (BOTH PATHS)

**SEND:** Day 4 — same for Solo and Agency

**SUBJECT:** Your site's SEO score (the full picture)

**PREVIEW:** Full breakdown. Downloadable. Shareable.

**BODY COPY:**

Open RankFrame → SEO Audit.

You will see a score out of 100, broken into:
· Basic SEO — titles, headings, alt text, internal links
· Advanced SEO — schema, OG tags, canonical, robots.txt
· Performance — Core Web Vitals, page speed, response time
· Security checks

Click any red or orange item to see exactly what's wrong and what to fix.
Not a vague suggestion — the actual HTML element or specific page causing the issue.

When you're done reviewing, click Download Audit.
You get a full PDF: your score, every check result, and a Google snippet
preview of your homepage. Save it, share it, reference it in a month.

This is what a proper SEO baseline looks like.

— Harsh

**CTA:** "Run Your Full Audit →" → Deep link to SEO Audit in plugin

**WHY IT WORKS:** By Day 4, users have completed Personalization, pushed their sitemap, improved their meta titles, and generated schema. This email ties everything together and shows the complete picture. The PDF is a tangible deliverable — for solo designers it's a personal record, for agencies it's already a client-facing asset. It also seeds the upgrade need by showing exactly how much of the site has issues.

---

### EMAIL 6 · 3 DAYS LEFT — FIRST HARD CONVERSION CTA

**SEND:** Day 5 — 2 days before trial ends

**SUBJECT:** 3 days left in your trial

**PREVIEW:** Here's what keeps running and what pauses on Day 7.

**BODY COPY:**

Your trial ends in 3 days. Here's exactly what happens on Day 7:

What stays live after trial ends:
✓  Schema you've already injected stays live on your site
✓  Meta titles you've already applied stay applied

What pauses when trial ends:
✗  Schema injection for any new pages you publish
✗  404 error monitoring
✗  New AI meta title and description generations
✗  Additional image alt text generation
✗  Submit Indexing for any new or updated URLs

The work you've done this week does not disappear.
But every page you publish from Day 8 onward goes out with no schema,
no monitoring, and no indexing push.

Personal plan: $15/month (1 site)
Agency plan: $40/month (unlimited sites)
Both plans: 40% saving on annual billing.

— Harsh

**CTA:** "Upgrade Now →" → rankframe.com pricing page or direct upgrade link

**WHY IT WORKS:** Being explicit about what pauses vs. stays is more honest and more effective than vague 'trial ending' urgency. It removes the fear of losing everything (the work they've done stays) while creating a real, specific reason to upgrade. The checkmarks vs. X format is visual and scannable on mobile. This is the email that drives the majority of trial conversions when done right.

---

### EMAIL 7 · FINAL DAY — LAST PUSH

**SEND:** Day 6 — trial ends tomorrow

**SUBJECT:** Last day — your RankFrame trial ends tomorrow

**PREVIEW:** Annual billing gets you 40% off if you upgrade today.

**BODY COPY:**

Your 7-day trial ends tomorrow.

If RankFrame saved you time this week — on meta copy, schema,
alt text, indexing — that time compounds every month going forward.

Personal: $15/month (1 site)  or  $108/year — save 40%
Agency: $40/month (unlimited sites)  or  $288/year — save 40%

Upgrading to annual today means you pay the equivalent of
$9/month (Personal) or $24/month (Agency).

Questions? Reply to this email or hit the Support button inside
the plugin. I read every reply.

— Harsh

**CTA:** "Upgrade Now →" → rankframe.com pricing page or direct upgrade link

**WHY IT WORKS:** Short, direct, zero filler. By Day 6 you have given them 6 days of value — this email doesn't need to teach anything. It makes the upgrade decision easy by leading with the annual price equivalent ($9/$24), which reframes the cost lower than the monthly sticker. The 'I read every reply' line adds humanity without adding length. One email, one job: remove the last friction before upgrade.

---

## Sequence 2: Win-Back — 3 Emails (Days 8–14)

For users whose trial ended without upgrading. The tone shifts here — less instructional, more human and honest. The goal is either to convert them or to learn why they didn't. Both outcomes are valuable.

- **Trigger:** Group: Trial Expired — No Upgrade
- **Length:** 3 emails, 6 days
- **Goal:** Convert non-upgraders or gather feedback
- **Exit:** Upgrades to any paid plan

---

### EMAIL WB-1 · GENUINE CHECK-IN

**SEND:** Day 8 — 1 day after trial ends

**SUBJECT:** Did RankFrame miss the mark?

**PREVIEW:** Genuinely asking — what held you back?

**BODY COPY:**

Your trial just ended and you didn't upgrade.

That's fine — but I'd genuinely like to know why.

Was the pricing off? Did something not work the way you expected?
Did you not have time to fully try it during the 7 days?

Reply to this email with whatever's true.
I read every reply and it directly shapes what we build next.

If you want to come back, your account is still here.

— Harsh

**CTA:** "Upgrade and pick up where you left off →" → rankframe.com pricing page

**WHY IT WORKS:** The most effective win-back opener is a genuine question, not another feature pitch. This email does two things: it invites honest feedback (which has real product value for the team) and keeps the door open without pressure. Short, human, no sales language. Reply rates on honest emails like this consistently outperform feature-heavy win-back emails.

---

### EMAIL WB-2 · EDUCATIONAL — NO PITCH

**SEND:** Day 11 — 3 days after WB-1

**SUBJECT:** The one thing most Framer sites are missing in 2026

**PREVIEW:** Not a trick. It's just schema. And it's simpler than you think.

**BODY COPY:**

Quick educational email — no pitch.

In 2026, schema markup (structured data) is the difference between
Google guessing what your page is about and Google knowing.
Most Framer sites have zero schema.

The sites that rank in rich results — the ones with star ratings,
FAQs, and breadcrumbs visible directly in Google search — all have it.

RankFrame auto-generates it for your entire sitemap in one click.
Without RankFrame, you'd be pasting JSON-LD manually into a custom
code block on every single page.

Your call. But the door's open if you want the easier path.

— Harsh

**CTA:** "Come back and try it →" → rankframe.com or account reactivation link

**WHY IT WORKS:** Leading with 'no pitch' lowers defenses. This email teaches something genuinely useful (why schema matters in 2026) and lets the product benefit arrive naturally at the end. It also addresses a likely reason they didn't convert: they may not have fully explored or understood schema during the trial. This restarts the education without feeling like a restart.

---

### EMAIL WB-3 · ACCOUNT ARCHIVE NOTICE

**SEND:** Day 14 — 3 days after WB-2

**SUBJECT:** Closing your trial account

**PREVIEW:** Keeping it clean. One last thing.

**BODY COPY:**

We're archiving your trial data in the next few days.

If you want to keep your schemas, audit history, keyword data,
and image alt text on file — upgrade before then and it's all still there.

Personal: $15/month  ·  Agency: $40/month
40% off on annual billing for both plans.

If not — no hard feelings. You're welcome back anytime.

— Harsh

**CTA:** "Reactivate my account →" → rankframe.com pricing page

**WHY IT WORKS:** A soft last-chance email that leans on loss aversion (your data gets archived) without being manipulative. The 'no hard feelings' close is deliberate — it leaves the door open and protects the brand. Some users come back weeks or months later when they get a new client or launch a new site. This email should not burn that bridge.

---

## Sequence 3: Personal Plan Onboarding — 3 Emails

For users who upgraded to the Personal plan. Goal: make sure they get full value from the features they likely haven't used yet, build the weekly check-in habit, and move them to annual billing before their first billing cycle (Day 30).

- **Trigger:** Group: Converted — Personal
- **Length:** 3 emails, 21 days
- **Goal:** Retain + convert to annual
- **Exit:** Cancels or upgrades to Agency

---

### EMAIL P-1 · WELCOME TO PERSONAL + IMAGE SEO

**SEND:** Day 2 after upgrade

**SUBJECT:** Welcome to RankFrame Personal — the one feature you've probably skipped

**PREVIEW:** 517 images. 72 missing alt texts. Fixed in 10 minutes.

**BODY COPY:**

You're on Personal now. Good call.

One feature that most new users skip but shouldn't: Image SEO.

Open RankFrame → Image SEO.

You will see two numbers that matter:
· Total Images — every image on your site, Canvas and CMS
· Missing Alt — images with no alt text

Every image without alt text is invisible to Google and to screen readers.
On most Framer sites, that's 70–80% of all images.

Click Select All, then click Generate Alt Text.
RankFrame writes alt text for every selected image using your brand context.

Do this once, export to CSV if you want a record, done.

— Harsh

**CTA:** "Open Image SEO →" → Deep link to Image SEO section in plugin

**WHY IT WORKS:** Image SEO is the highest-surprise feature for new users — they don't expect the scale of the problem until they see their Missing Alt count. Starting the post-upgrade onboarding with this feature creates immediate additional value and drives product engagement. Engagement in the first 7 days after upgrade is the strongest predictor of long-term retention.

---

### EMAIL P-2 · KEYWORD TRACKER HABIT

**SEND:** Day 7 after upgrade

**SUBJECT:** Are you actually ranking for anything yet?

**PREVIEW:** Set up your keyword tracker in 2 minutes. See where you stand.

**BODY COPY:**

One week in. Let's check if Google is paying attention.

Open RankFrame → Keyword Tracker.

Add the keywords you want to rank for.
Type them in, press Enter or separate with commas for multiple.
Start with 5–10 terms that describe what you do.

Example: "framer designer london", "brand identity studio",
"web design for startups"

After a few days of data you will see:
· Your current search position for each keyword
· Position movement over time
· Click and impression data from Google Search Console

This is your baseline. Check it weekly.

— Harsh

**CTA:** "Set Up Keyword Tracker →" → Deep link to Keyword Tracker in plugin

**WHY IT WORKS:** Day 7 is when users are either engaged or drifting. The curiosity hook ('are you actually ranking?') drives a login. The Keyword Tracker is a habit-forming feature — once they see their first position data, they return weekly. That recurring visit is what keeps the subscription active past month 3.

---

### EMAIL P-3 · ANNUAL BILLING NUDGE

**SEND:** Day 21 after upgrade

**SUBJECT:** $15/month or $108/year — the 40% question

**PREVIEW:** If you're staying (and you should be), annual makes the math obvious.

**BODY COPY:**

Three weeks in. If RankFrame has been part of your workflow,
switching to annual billing is a straightforward decision.

Personal monthly:  $15/month
Personal annual:   $108/year  ($9/month equivalent — save 40%)

How to switch:
Inside the plugin → bottom of the left sidebar → See Billing button.
That opens the billing portal where you switch in one click.

The saving is real: $180/year monthly vs $108/year annual.
That's $72 back in your pocket for a tool you're already using.

— Harsh

**CTA:** "Switch to Annual →" → See Billing → billing portal (or direct annual upgrade link)

**WHY IT WORKS:** Day 21 is the sweet spot for the annual nudge: long enough that the user has proven to themselves they use the product, short enough that they haven't yet hit their first billing cycle (Day 30). The math is framed as savings on something they already buy, not an upsell on something new. The explicit dollar saving ($72/year) is more persuasive than the percentage alone.

---

## Sequence 4: Agency Plan Onboarding — 3 Emails

For users who upgraded to the Agency plan. Goal: make sure they successfully set up their first client site, understand the PDF audit as a client deliverable (which is the stickiest feature for agencies), and move to annual billing.

- **Trigger:** Group: Converted — Agency
- **Length:** 3 emails, 21 days
- **Goal:** First client site live + annual
- **Exit:** Cancels

---

### EMAIL A-1 · FIRST CLIENT SITE WORKFLOW

**SEND:** Day 2 after upgrade

**SUBJECT:** Your first client site setup — step by step

**PREVIEW:** 1 to 2 hours per site. Here's the exact workflow.

**BODY COPY:**

Welcome to Agency. Here's how to set up a client site the first time.
This becomes your repeatable workflow for every client going forward.

1.  Connect the client's Framer site to RankFrame
2.  Open Personalization — fill it with the CLIENT's brand, not yours
    Brand name, what they do, their goals, their competitors
3.  SEO Audit → Download Audit — this is your client baseline PDF
4.  Pages → walk each page, accept AI meta titles and descriptions
5.  Global Settings → Auto-Generate schemas → Save & Inject
6.  Image SEO → Select All → Generate Alt Text for all images
7.  Submit Indexing → Push Sitemap → push priority landing pages individually
8.  Keyword Tracker → add 10–20 of their target keywords

Total time: 1–2 hours per client site.
Client deliverable at step 3: a PDF audit with their score and every check result.

— Harsh

**CTA:** "Start Your First Client Site →" → Deep link to plugin home

**WHY IT WORKS:** Agency users need a process, not a feature tour. This email delivers the exact workflow in numbered order with a clear deliverable. The 1–2 hour time estimate is deliberately honest — it sets a realistic expectation that makes them comfortable booking client time for it. The workflow also ensures they touch every major feature, which drives both retention and client results.

---

### EMAIL A-2 · PDF AUDIT AS CLIENT DELIVERABLE

**SEND:** Day 7 after upgrade

**SUBJECT:** Turn your audit PDF into a client deliverable

**PREVIEW:** It has their brand name, their score, and every check. It looks like real work.

**BODY COPY:**

One week in — you've probably run at least one client site through RankFrame.

Here's something worth knowing about the PDF audit:

It's not just for you.

The audit PDF includes the client's site name, their SEO score out of 100,
a full breakdown of every check — Basic, Advanced, Performance, Security —
and a live Google snippet preview of their homepage.

Use it as a client deliverable:

At the start of an engagement: 'Here's your current SEO baseline.'
After 30 days: 'Here's what changed.'

Clients who see real data stay engaged.
Agencies that show documented progress retain clients longer.

(White-label reports — with your agency's branding instead of RankFrame's —
are on the roadmap. We'll let you know when that ships.)

— Harsh

**CTA:** "Download a Client Audit PDF →" → Deep link to SEO Audit section in plugin

**WHY IT WORKS:** This email reframes the PDF audit from a tool feature into a business asset. It addresses agency retention (clients who see data stay engaged) and teases the white-label roadmap feature — which is a strong motivator for studios that want to fully own the client relationship. The before/after audit ritual (baseline → 30-day update) gives agencies a repeatable client process that makes RankFrame central to their delivery.

---

### EMAIL A-3 · ANNUAL BILLING NUDGE — AGENCY MATH

**SEND:** Day 21 after upgrade

**SUBJECT:** $40/month or $288/year — the agency math

**PREVIEW:** At 3 client sites, annual billing pays for itself in month 2.

**BODY COPY:**

Three weeks in. If you're managing more than one client site,
the annual billing math is straightforward.

Agency monthly:  $40/month
Agency annual:   $288/year  ($24/month equivalent — save 40%)

Most agencies charge at minimum $200–400/month for SEO services.
Your tool cost on annual billing: $24/month.

At three client sites that's $8/client/month for unlimited, native Framer SEO.

How to switch:
Inside the plugin → See Billing button (bottom of sidebar).
That opens the billing portal. One click to switch to annual.

— Harsh

**CTA:** "Switch to Annual →" → See Billing → billing portal (or direct annual upgrade link)

**WHY IT WORKS:** Agency users think in margins. Framing $24/month against the $200–400+ they charge clients for SEO makes the ROI immediate. Calculated per client site ($8/client at 3 sites) makes it even more visceral. Day 21 is again the sweet spot — before the first billing cycle, after they've seen real results on at least one client site.

---

## Section 6: MailerLite Step-by-Step Implementation

Everything you need to build all four sequences in MailerLite from scratch. Written for someone new to the platform. Follow each step in order.

**BEFORE YOU START** You need a MailerLite account. Sign up at mailerlite.com — the free plan works to start. However, to use Click Actions on links (required for the segmentation fork in Email 3), you need the Growth plan at $9/month. This is not optional for this setup. Upgrade to Growth before building the Trial Sequence.

### Step 1: Create Your Groups

Groups are how MailerLite organises subscribers into segments. You will use groups as automation triggers and for the segmentation fork. Create all six groups before building any automation.

**How to create a group in MailerLite:**
1. Log in to MailerLite.
2. In the left sidebar, click Subscribers.
3. Click the Groups tab at the top of the page.
4. Click + Create group (top right corner).
5. Type the group name and click Save.
6. Repeat until you have all six groups below.

| Group Name | Purpose | Who Gets Added Here |
|---|---|---|
| Free Trial Users | Triggers the Trial Sequence | Every new RankFrame free trial signup |
| Solo Designers | Tags solo users after Email 3 click | Users who click 'Just my own site' in Email 3 |
| Agency Users | Tags agency users after Email 3 click | Users who click 'Managing client sites' in Email 3 |
| Converted — Personal | Triggers Personal Onboarding | Users who upgrade to Personal plan |
| Converted — Agency | Triggers Agency Onboarding | Users who upgrade to Agency plan |
| Trial Expired — No Upgrade | Triggers Win-Back Sequence | Users whose trial ended without upgrading |

### Step 2: Build the Free Trial Automation (Days 0–6)

This is the main automation. All 7 emails live here, including the segmentation fork.

**Create the automation:**
1. In the MailerLite sidebar, click Automations.
2. Click Create automation (top right).
3. Name it: RankFrame — Free Trial Sequence
4. Click Create automation to enter the editor.

**Set the trigger:**
1. Click the Trigger block at the top of the editor.
2. Select: When subscriber joins a group.
3. In the dropdown, choose: Free Trial Users.
4. Click Save trigger.

**Add Steps: Emails 1, 2, and 3 (Universal)**

> **HOW THE EDITOR WORKS** In MailerLite's automation editor, you build a flow by chaining steps. Each step is either an Email, a Delay, or a Condition. Click the + button below any step to add the next one. Delays go between every pair of emails.

1. Click + below the trigger → select Email → click Create new email.
2. Name it: E1 — Welcome. Click Continue.
3. Build the email using the copy from Email 1 in this document. Save.
4. Click + below the email → select Delay → set to: 1 day → Save.
5. Click + → Email → Create new: E2 — Push Sitemap. Build and save.
6. Click + → Delay → 1 day → Save.
7. Click + → Email → Create new: E3 — Meta Titles + Segmentation. Build the email body. Do NOT finalise the segmentation links yet — see the next section first. Save.
8. Click + → Delay → 1 day → Save.

**Set Up the Segmentation Links Inside Email 3**

> **THIS IS THE CRITICAL STEP** The two links at the bottom of Email 3 must be configured as Click Action links. A Click Action is a MailerLite feature that triggers an automation or group action the moment a subscriber clicks a specific link. This is how the segmentation fork works. Without this setup, the fork does not function.

Inside the Email 3 editor:
1. Locate the line: → Just my own site
2. Highlight that text and click the link icon in the editor toolbar.
3. In the URL field enter any valid URL (e.g. https://rankframe.com). The destination is secondary here — the Click Action is what matters.
4. Below the URL field, look for the section labelled Automation action on click or Click action. Toggle it on.
5. Set Action type to: Add subscriber to group.
6. Select group: Solo Designers.
7. Click Save or Insert link.
8. Now locate the line: → Managing client sites
9. Repeat steps 2–7 above, but set the group to: Agency Users.
10. Save the email.

> **IF YOU CAN'T FIND 'AUTOMATION ACTION ON CLICK'** This option only appears when: (1) you are on the MailerLite Growth plan or higher, and (2) you are editing an email inside an Automation (not a Campaign email). If you don't see it, check your plan in Settings → Billing. Free plan does not include Click Actions.

**Add the Condition Block (The Fork)**

After the 1-day delay following Email 3, you will add a Condition step that splits the flow into two branches — one for Agency Users and one for everyone else (Solo default).

1. Click + below the 1-day delay → select Condition.
2. In the condition editor, choose: Subscriber is in group.
3. Select the group: Agency Users.
4. Click Save.
5. The condition creates two visible branches in the editor: a TRUE path and a FALSE path.
6. On the TRUE branch (Agency Users): Click + → Email → Create: E4B — Agency Workflow. Build using Email 4B copy. Save.
7. On the FALSE branch (Solo default): Click + → Email → Create: E4A — Solo Schema. Build using Email 4A copy. Save.

**Complete Both Branches: Emails 5, 6, 7**

Both branches now need Emails 5, 6, and 7 with delays between them. Add these steps to BOTH branches:
- After Email 4B (True branch): Delay 1 day → Email 5 (Your SEO score) → Delay 1 day → Email 6 (3 days left) → Delay 1 day → Email 7 (Last day) → End.
- After Email 4A (False branch): Same pattern — Delay 1 day → Email 5 → Delay 1 day → Email 6 → Delay 1 day → Email 7 → End.

Note: You will build Email 5, 6, and 7 twice (once per branch). The content is identical — just duplicate the emails in each branch.

**Set the Exit Condition**
1. In the automation editor, click the Settings gear icon (usually top right of the editor).
2. Find Exit conditions or Stop conditions.
3. Add: Subscriber is added to group 'Converted — Personal' OR 'Converted — Agency.'
4. Save.

This ensures users who upgrade mid-sequence stop receiving trial emails immediately.

**Visual Reference: Full Trial Automation Flow**

```
TRIGGER: Joins group 'Free Trial Users'
     ↓
EMAIL 1: Welcome + Personalization   (Day 0 — Immediate)
     ↓  [Delay: 1 day]
EMAIL 2: Push Sitemap                (Day 1)
     ↓  [Delay: 1 day]
EMAIL 3: Meta Titles + Seg Links     (Day 2)
         [Link 1 → adds group: Solo Designers]
         [Link 2 → adds group: Agency Users]
     ↓  [Delay: 1 day]
CONDITION: Is in group 'Agency Users'?
     ↓ TRUE (Agency)          ↓ FALSE (Solo — default)
EMAIL 4B: Agency Workflow    EMAIL 4A: Solo Schema
     ↓  [Delay: 1 day]            ↓  [Delay: 1 day]
EMAIL 5: Full Audit + PDF   EMAIL 5: Full Audit + PDF
     ↓  [Delay: 1 day]            ↓  [Delay: 1 day]
EMAIL 6: 3 Days Left        EMAIL 6: 3 Days Left
     ↓  [Delay: 1 day]            ↓  [Delay: 1 day]
EMAIL 7: Last Day           EMAIL 7: Last Day
     ↓                            ↓
END                         END
```

### Step 3: Build the Win-Back Automation (Days 8–14)

1. Automations → Create automation → Name: RankFrame — Win-Back
2. Trigger: Subscriber joins group → Trial Expired — No Upgrade → Save.
3. Email WB-1: Did RankFrame miss the mark? (Immediate on trigger)
4. Delay: 3 days
5. Email WB-2: The one thing most Framer sites are missing
6. Delay: 3 days
7. Email WB-3: Closing your trial account
8. End.
9. Exit condition: Subscriber added to Converted — Personal or Converted — Agency.

**How to trigger the Win-Back (two options):**

Option A — Manual trigger (recommended to start):
- In MailerLite → Subscribers, filter for subscribers in Free Trial Users group who joined more than 8 days ago.
- Cross-check: remove anyone already in Converted — Personal or Converted — Agency.
- Select remaining subscribers and add them to group: Trial Expired — No Upgrade.
- The Win-Back automation fires automatically when they join that group.
- Do this check once per week. Takes under 5 minutes.

Option B — Automated via API or Zapier:
- In RankFrame's backend, on Day 8 after trial start, check if user has converted. If not, call the MailerLite API to add them to 'Trial Expired — No Upgrade.'
- Alternatively, use Zapier: Trigger = a webhook from RankFrame on trial expiry, Action = MailerLite: Add to group 'Trial Expired — No Upgrade.'

### Step 4: Build the Personal Plan Onboarding Automation

1. Automations → Create automation → Name: RankFrame — Personal Onboarding
2. Trigger: Subscriber joins group → Converted — Personal → Save.
3. Delay: 2 days
4. Email P-1: Welcome to Personal + Image SEO
5. Delay: 5 days (total 7 days post-upgrade)
6. Email P-2: Are you actually ranking for anything yet?
7. Delay: 14 days (total 21 days post-upgrade)
8. Email P-3: $15/month or $108/year — the 40% question
9. End.

> **HOW USERS GET ADDED TO 'CONVERTED — PERSONAL'** When a user upgrades via the billing portal, configure a webhook to notify RankFrame's backend. The backend then calls the MailerLite API to add the subscriber to 'Converted — Personal.' If using Zapier: Trigger = New Order (Personal Plan) → Action = MailerLite Add to Group 'Converted — Personal.'

### Step 5: Build the Agency Plan Onboarding Automation

1. Automations → Create automation → Name: RankFrame — Agency Onboarding
2. Trigger: Subscriber joins group → Converted — Agency → Save.
3. Delay: 2 days
4. Email A-1: Your first client site setup
5. Delay: 5 days (total 7 days post-upgrade)
6. Email A-2: Turn your audit PDF into a client deliverable
7. Delay: 14 days (total 21 days post-upgrade)
8. Email A-3: $40/month or $288/year — the agency math
9. End.

### Step 6: Connect RankFrame Signups to MailerLite

The final step: every new trial signup in RankFrame must automatically appear in the 'Free Trial Users' group in MailerLite. You have three options:

**Option A: MailerLite API (Best — use this if possible)**

1. In MailerLite, go to Integrations → API (in the sidebar or Account Settings).
2. Copy your API key.
3. In RankFrame's backend, add this API call on every new trial signup:

```
POST https://connect.mailerlite.com/api/subscribers

Headers:
  Authorization: Bearer YOUR_API_KEY
  Content-Type: application/json

Body:
  {
    "email": "user@example.com",
    "fields": { "name": "User Name" },
    "groups": ["GROUP_ID_FOR_FREE_TRIAL_USERS"]
  }
```

Find the Group ID:
- MailerLite → Subscribers → Groups → click 'Free Trial Users'
- The ID is the number in the URL: /groups/123456/subscribers

Test with a real signup to confirm the subscriber appears in MailerLite and the trial automation fires.

**Option B: Zapier or Make.com (No-code alternative)**
1. Create a Zapier account at zapier.com (free tier works for basic flows).
2. Create a new Zap:
   - Trigger: your signup source — Webhooks by Zapier (if RankFrame backend sends a webhook), or another trigger that fires on trial signup.
   - Action: MailerLite — Create or Update Subscriber.
3. Map the email field from your trigger to the MailerLite email field.
4. In the Groups field, select: Free Trial Users.
5. Turn the Zap on and test with a test signup.

**Option C: Embedded MailerLite Signup Form (Last resort)**
1. In MailerLite → Forms, create a new embedded form.
2. Set it to add subscribers to: Free Trial Users.
3. Embed it on your post-signup page or trial confirmation screen.

Note: This requires users to submit a second form after signing up. Use only as a temporary measure while setting up Option A or B.

---

## Quick Reference: All 16 Emails at a Glance

Use this as your build checklist. Check off each email as you create it in MailerLite.

| # | Sequence | Send Timing | Subject Line | ✓ |
|---|---|---|---|---|
| E1 | Free Trial | Day 0 — Immediate | Your RankFrame trial is live — do this first | ☐ |
| E2 | Free Trial | Day 1 | Tell Google your site exists (takes 30 seconds) | ☐ |
| E3 | Free Trial | Day 2 | Your Framer site's first impression in Google | ☐ |
| E4A | Free Trial — Solo | Day 3 (Solo path only) | The real reason your portfolio isn't getting organic traffic | ☐ |
| E4B | Free Trial — Agency | Day 3 (Agency path only) | How long does an SEO setup take per client site? | ☐ |
| E5 | Free Trial | Day 4 — both paths | Your site's SEO score (the full picture) | ☐ |
| E6 | Free Trial | Day 5 | 3 days left in your trial | ☐ |
| E7 | Free Trial | Day 6 — last day | Last day — your RankFrame trial ends tomorrow | ☐ |
| WB1 | Win-Back | Day 8 after trial ends | Did RankFrame miss the mark? | ☐ |
| WB2 | Win-Back | Day 11 | The one thing most Framer sites are missing in 2026 | ☐ |
| WB3 | Win-Back | Day 14 | Closing your trial account | ☐ |
| P1 | Personal Onboarding | Day 2 post-upgrade | Welcome to RankFrame Personal — the one feature you've probably skipped | ☐ |
| P2 | Personal Onboarding | Day 7 post-upgrade | Are you actually ranking for anything yet? | ☐ |
| P3 | Personal Onboarding | Day 21 post-upgrade | $15/month or $108/year — the 40% question | ☐ |
| A1 | Agency Onboarding | Day 2 post-upgrade | Your first client site setup — step by step | ☐ |
| A2 | Agency Onboarding | Day 7 post-upgrade | Turn your audit PDF into a client deliverable | ☐ |
| A3 | Agency Onboarding | Day 21 post-upgrade | $40/month or $288/year — the agency math | ☐ |

---

## What to Measure Weekly

Check these in MailerLite → Automations → click any automation → click any email → Reports tab.

| Metric | Good Benchmark | Warning Level | What to Do |
|---|---|---|---|
| Open Rate (trial emails) | 40–55% | Below 30% | A/B test a different subject line — try more direct or more curiosity-driven |
| Click Rate (trial emails) | 8–15% | Below 5% | CTA is unclear — rewrite the button text and the sentence immediately above it |
| Segmentation click (Email 3) | 25–40% of openers | Below 15% | Move the segmentation prompt higher in the email body — it may be getting cut off |
| Trial to paid conversion rate | 15–25% | Below 8% | Revisit Email 6 (urgency) and Email 7 (final push) — these two drive most conversions |
| Win-back conversion rate | 5–10% of expired users | Below 2% | Test WB-1 subject line first — try: 'Can I ask you something?' as an alternative |

---

*RankFrame Email Automation Master Plan · 7 Seers · May 2026*

*Support: hello@7seersmedia.com · dashboard.rankframe.com · rankframe.com*

---

## Corrections Log

Changes made from original DOCX (for reference):

| Location | Original | Corrected | Reason |
|---|---|---|---|
| Email 3 body | "60–70 characters" | "50–60 characters" | Google truncates at ~600px ≈ 60 chars; 70 gets cut off |
| Email 3 survey hook | "so we can send you more relevant emails" | "so your next email is actually useful" | Stronger motivation to click |
| Email 5 preview | "29 checks. Downloadable. Shareable." | "Full breakdown. Downloadable. Shareable." | Specific check count not in any RankFrame documentation |
| Email 5 body — check counts | "Basic SEO: 10 checks / Advanced: 12 / Performance: 5 / Security: 2" | Category names only, no counts | Numbers not documented; potentially wrong |
| Email 5 body + CTAs | "SEO Analyzer" | "SEO Audit" | Correct feature name per RankFrame docs |
| Email A-1 CTA | "SEO Analyzer" | "SEO Audit" | Same |
| Email A-2 CTA | "SEO Analyzer section" | "SEO Audit section" | Same |
| Email 4B workflow step 2 | "Run Recrawl — gives RankFrame a full picture of their site" | Removed (steps renumbered 1–5) | "Recrawl" not in any RankFrame documentation |
| Email A-1 workflow step 3 | "Run Recrawl" | Removed (steps renumbered 1–8) | Same |
| Email A-1 client deliverable note | "at step 4" | "at step 3" | Renumbered after Recrawl removal |
| Email P-1 body | "Cost: 1 credit per image. A 100-image site uses 100 credits." | Removed | No credit system in any RankFrame documentation |
| Email 2 body | "click 'Check Live' next to your homepage" | "check the status of your homepage" | Button label not in documentation |
| Email 4A path | "Global Settings → Advanced tab" | "Global Settings → Schema" | Specific tab name unverified; kept concept, removed unverified sub-path |
| Email P-2 | "Submit Indexing → Keyword Tracker tab" | "Keyword Tracker" direct navigation | Location under Submit Indexing unconfirmed |
| Email P-3 + A-3 | "Polar.sh portal" | "billing portal" | Billing provider name may change; generic reference is safer in email copy |
