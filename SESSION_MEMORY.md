# RankFrame Session Memory
*Last updated: 2026-06-03. Pick up any new session from here.*

---

## Git State
- **Repo:** nitin4455002/claudecode
- **Branch:** `rankframe-main` (renamed from `claude/review-chat-error-mz8i8`)
- **Remote:** origin/rankframe-main (up to date, clean working tree)
- **Key commits:** db47c00 (accordion nav unified), a446c98 (figma plugin script + session memory)

---

## Figma Design System

### File
- **Name:** RankFrame Design System
- **File key:** MlvOoXk04ToPFwHXfkefFM
- **URL:** https://www.figma.com/design/MlvOoXk04ToPFwHXfkefFM/RankFrame-Design-System
- **Team:** 7 Seers Media (team::1437777503145820666, student plan, Full seat)
- **Owner:** Nitin (nitinhazeldine@gmail.com)

### Figma MCP Status
- Figma MCP connects via Claude Code Connectors toggle (not claude mcp add CLI)
- `whoami` and `create_new_file` work fine
- `use_figma` / `get_metadata` / all canvas tools fail: "This figma file could not be accessed"
- Root cause: Claude Code runs in a remote sandbox. `use_figma` needs the Figma desktop plugin bridge (local MCP server on 127.0.0.1). Remote sandbox cannot reach localhost on user's machine.
- Connector toggle in Claude Code UI (Figma = blue) handles auth/reads only, not canvas writes.
- **Resolution path:** Run `rankframe-figma-plugin.js` in Figma console (Plugins > Development > Open Console, paste script, Enter). Builds everything in ~15 seconds.

### What the design system needs (not yet built in Figma)
All of this is coded in `rankframe-figma-plugin.js` ready to run:

**7 Pages:**
- Cover
- Color Tokens
- Typography
- Spacing + Radius
- Components - Base
- Components - Plugin UI
- Screens

**Color Variables (30+ tokens):**
- brand/purple: #BA24D5 (primary)
- brand/purple-dark: #8B1AAA
- brand/purple-light: #D966E8
- brand/purple-subtle: #1A0A1E
- bg/base: #000000
- bg/card: #0C0E11
- bg/surface: #161B22
- bg/elevated: #1C2128
- bg/overlay: #21262D
- border/default: #21262D
- border/subtle: #30363D
- border/strong: #484F58
- border/focus: #BA24D5
- text/primary: #E6EDF3
- text/secondary: #8B949E
- text/muted: #484F58
- text/inverse: #FFFFFF
- text/purple: #BA24D5
- text/link: #388BFD
- semantic/success: #2EA043, subtle: #0C2414, text: #56D364
- semantic/warning: #D29922, subtle: #241B00, text: #E3B341
- semantic/error: #F85149, subtle: #2D0C0A, text: #FF7B72
- semantic/info: #388BFD, subtle: #051D38, text: #79C0FF
- accent/teal: #39C5CF
- accent/pink: #E040FB
- accent/orange: #FB8C00

**Spacing Variables:** 0/2/4/6/8/10/12/16/20/24/32/40/48/64px

**Radius Variables:** 0/4/6/8/12/16/9999px

**Opacity Variables:** 0/10/20/40/60/80/100%

**24 Text Styles (Inter + JetBrains Mono):**
- Display: 2XL(48B), XL(36B), LG(30B)
- Heading: H1(24B), H2(20SB), H3(18SB), H4(16SB), H5(14M)
- Body: LG/MD/SM/XS in Regular + Medium
- Label: LG/MD/SM/XS in Medium
- Code: MD/SM in Regular + Medium (JetBrains Mono 400/500)

**30 Color Styles + 4 Effect Styles:**
- Shadow SM/MD/LG + Purple Glow

**Base Components (Components - Base page):**
- Buttons: Primary/Secondary/Ghost/Danger/Success/Disabled
- Badges: New/Beta/Active/Warning/Error/Muted (pill shape)
- Inputs: Default/Focused/Error/Disabled
- Toggles: Off/On
- Score rings: Excellent(green)/Good(amber)/Poor(red)/NA
- Toasts: success/warning/error/info
- Tabs: 4-tab bar with active state

**Plugin UI Components (Components - Plugin UI page):**
- Plugin chrome: 880x720 frame with header (42px) + sidebar (240px) + main area (640px)
- Sidebar accordion nav (5 groups): Setup, Optimize, Index, Monitor, Content Engine
- Active nav item: Schema (purple dot, purple bg, Inter Medium)
- User card Admin: purple avatar "7M", role label purple
- User card Member: teal avatar "L", role label teal
- Stat cards: SEO Score / Pages Scanned / Issues Found / Coverage
- Modal: Confirm Action with Cancel + Continue buttons

---

## Prototype Files (all complete, on rankframe-main)

| File | Status | Screens |
|------|--------|---------|
| rankframe-schema-llmseo-prototype-v1.html | Complete | 49 screens |
| rankframe-multiuser-prototype-v2.html | Complete | source of truth for accordion nav |
| rankframe-prototypes.html | Complete | 3-card chooser |
| rankframe-content-engine-prototype-v2.html | Complete | Content Engine |

### Accordion Nav (all 3 prototypes unified)
Groups: Setup > Optimize (Pages, Images, Schema NEW, LLM SEO NEW) > Index > Monitor > Content Engine NEW

CSS classes: `.plg-acc-group` `.plg-acc-head` `.plg-acc-children` `.plg-acc-item` `.plg-acc-dot` `.plg-acc-chev`

JS: `PLUGIN_NAV_GROUPS` array with `pluginSubNav(activeKey, role)` function

---

## Design Token CSS Variables (from prototypes)
```css
--rf-purple: #BA24D5
--rf-bg: #000000
--rf-bg-card: #0C0E11
--rf-bg-surface: #161B22
--rf-bg-elevated: #1C2128
--rf-border: #21262D (also --rf-border-2: #262A33)
--rf-border-strong: #373C46
--rf-text: #FFFFFF
--rf-text-2: #D5D8DE
--rf-text-muted: #9BA1AE
--rf-text-dim: #8A91A0
--rf-green: #4ADE80 / #22C55E
--rf-amber: #F5B919
--rf-red: #DD524C
--rf-blue: #3B82F6
--rf-teal: #14B8A6
--plugin-w: 880px
--plugin-h: 720px
--sub-nav-w: 240px
--rf-radius-sm: 6px / --rf-radius-md: 8px / --rf-radius-lg: 12px
```

---

## RankFrame Product Context
- **Product:** Framer SEO plugin by 7 Seers Media
- **Admin:** 7seersmedia@gmail.com (avatar: "7M", purple)
- **Member:** Lingfei (lingfei@anytimeai.ai, avatar: "L", teal)
- **AI model:** claude-sonnet-4-6
- **Framer API:** `setCustomCode({location:"headEnd"})` for schema injection (site-wide only)
- **Shared marker system:** `<!-- RankFrame:<TYPE>:<start|end> source=<auto|llmseo> -->`
- **Schema + LLM SEO ownership:** Single-owner FAQPage contract, banners/locks when conflict

---

## Pending / Next Steps
1. **Figma design system:** Run `rankframe-figma-plugin.js` in Figma console to build all pages/variables/styles/components
2. **After Figma built:** Consider adding screen-level frames for each of the 49 prototype screens in the Screens page
3. **No other pending tasks** from this session

---

## CLAUDE.md Rules (permanent, no exceptions)
- NEVER use em dashes (—) in any output
- NEVER guess or assume facts, verify first
