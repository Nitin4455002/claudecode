# RankFrame Session Memory

## Figma File
- Name: RankFrame Design System
- Key: MlvOoXk04ToPFwHXfkefFM
- URL: https://www.figma.com/design/MlvOoXk04ToPFwHXfkefFM
- Team: 7 Seers Media (team::1437777503145820666, student plan, Full seat)
- User: Nitin (nitinhazeldine@gmail.com)

## Figma MCP Status
- Remote MCP: https://mcp.figma.com/mcp (OAuth authenticated, whoami works)
- use_figma / get_metadata: fail with "file could not be accessed"
- Fix needed: Figma desktop, open file, Shift+D for Dev Mode, enable MCP in right panel
- Status: Pending user confirmation

## Design System To Build (once MCP connected)

### Pages
Cover, Color Tokens, Typography, Spacing + Radius, Components - Base, Components - Plugin UI, Screens

### Design Tokens
- --rf-purple: #BA24D5 (primary brand)
- --rf-bg: #000000
- --rf-bg-card: #0C0E11
- --rf-bg-surface: #161B22
- --rf-bg-elevated: #1C2128
- --rf-border: #21262D
- --rf-border-subtle: #30363D
- --rf-text: #E6EDF3
- --rf-text-muted: #8B949E
- --rf-text-dim: #484F58
- --rf-green: #2EA043
- --rf-yellow: #D29922
- --rf-red: #F85149
- --rf-blue: #388BFD
- --rf-teal: #39C5CF

### Variables to create
- Color variables (30+ tokens: brand, bg, border, text, semantic, accent)
- Spacing (0/2/4/6/8/10/12/16/20/24/32/40/48/64px)
- Radius (0/4/6/8/12/16/9999px)
- Opacity (0/10/20/40/60/80/100%)

### Text Styles (Inter + JetBrains Mono)
- Display: 2XL(48), XL(36), LG(30)
- Heading: H1(24B), H2(20SB), H3(18SB), H4(16SB), H5(14M)
- Body: LG/MD/SM/XS in Regular + Medium
- Label: LG/MD/SM/XS in Medium
- Code: MD/SM in Regular + Medium (JetBrains Mono)

### Components
Base: Buttons (Primary/Secondary/Ghost/Danger/Success/Disabled), Badges (6 types),
Inputs (Default/Focused/Error/Disabled), Toggles, Score rings, Toasts, Tabs

Plugin UI: 880x720 Chrome frame, Sidebar accordion nav (5 groups),
User cards (Admin=purple, Member=teal), Stat cards, Modals, Banners/Locks

## Fallback Script
/home/user/claudecode/rankframe-figma-plugin.js — full builder, paste in Figma console

## Git State
- Branch: claude/review-chat-error-mz8i8 (to be renamed to rankframe-main)
- Repo: nitin4455002/claudecode
- Latest commit: a446c98

## Prototype Files (all complete, committed)
- rankframe-schema-llmseo-prototype-v1.html (49 screens, accordion nav)
- rankframe-multiuser-prototype-v2.html (accordion nav source of truth)
- rankframe-prototypes.html (3-card chooser)
- rankframe-content-engine-prototype-v2.html

## Nav Accordion Groups (all prototypes)
Setup > Optimize (Pages, Images, Schema NEW, LLM SEO NEW) > Index > Monitor > Content Engine NEW
Classes: .plg-acc-group .plg-acc-head .plg-acc-children .plg-acc-item .plg-acc-dot .plg-acc-chev

## CLAUDE.md Rules
- NEVER use em dashes in any output
- NEVER guess facts, verify first
