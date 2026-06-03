/* ============================================================
   SCHEMA + LLM SEO  ·  screen definitions (v3)
   Authored on the shared shell + component layer forked from
   the multi-user prototype, so every table, button, pill,
   card, radius and color is identical by construction.
   ============================================================ */

/* extra icons this flow needs (merged into the shared ICONS) */
Object.assign(ICONS, {
  schema:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg>`,
  code:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>`,
  edit:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6M18 2l4 4-11 11H7v-4z"/></svg>`,
  eye:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  spark:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2"/><circle cx="12" cy="12" r="3"/></svg>`,
  copy:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>`,
  arrowRight:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  chevL:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg>`,
  pages:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="14" height="18" rx="2"/><path d="M8 7h6M8 11h6M8 15h4"/></svg>`,
  image:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M21 16l-5-5-9 9"/></svg>`,
  store:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l1.5-5h15L21 9M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M4 9h16"/></svg>`,
  person:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></svg>`,
  faq:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3"/></svg>`,
  layers:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5M3 17l9 5 9-5"/></svg>`,
  history:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/><path d="M12 7v5l3 2"/></svg>`,
  robot:`<svg class="ico-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M9 14h.01M15 14h.01M2 13v2M22 13v2"/></svg>`,
});

/* ---- schema-flow helpers ---- */
function schStatus(kind){
  const map = {
    live:['published','Live'], draft:['draft','Draft'], none:['idea','No schema'],
    error:['failed','Error'], review:['review','In review'], approved:['approved','Approved'],
  };
  const [c,l] = map[kind] || map.none;
  return statusPill(c, l);
}
function jsonLd(title, inner){
  return `
    <div class="json-ld-head">
      <span class="ttl">${title||'JSON-LD · generated'}</span>
      <span class="copy">${ICONS.copy}<span>Copy</span></span>
    </div>
    <div class="json-ld">${inner}</div>`;
}
function schField(label, value, opts={}){
  const cls = value ? 'filled' : 'ph';
  return `
    <div class="sch-field">
      <label>${label}${opts.req?'<span class="req">*</span>':''}${opts.auto?'<span class="auto">AUTO-FILLED</span>':''}</label>
      <div class="sch-input ${cls}">${value || opts.placeholder || ''}</div>
      ${opts.hint?`<div class="sch-hint">${opts.hint}</div>`:''}
    </div>`;
}
function typeCard(icon, title, desc, opts={}){
  return `
    <div class="type-card ${opts.selected?'selected':''}">
      <div class="tc-check">${ICONS.check}</div>
      <div class="tc-ico">${icon}</div>
      <div class="tc-title">${title}</div>
      <div class="tc-desc">${desc}</div>
      ${opts.badge?`<span class="tc-badge">${opts.badge}</span>`:''}
    </div>`;
}
function flowArrow(){ return `<div class="flow-arrow">${ICONS.arrowRight}</div>`; }

/* shared page sample (crawl + sitemap derived) */
const SCH_PAGES = [
  {url:'/',            label:'Home',           types:['Organization','WebSite'], status:'live'},
  {url:'/about',       label:'About',          types:['Organization','Person'],  status:'live'},
  {url:'/services',    label:'Services',       types:['Service'],                status:'draft'},
  {url:'/work',        label:'Work',           types:[],                         status:'none'},
  {url:'/contact',     label:'Contact',        types:['LocalBusiness'],          status:'error'},
  {url:'/blog',        label:'Blog index',     types:['Blog'],                   status:'live'},
];

/* screens[] is already declared by the shared helper layer. */

/* 00 · Overview */
screens.push({
  id:'s0', tag:'Overview', title:'00 · All screens at a glance',
  desc:'Every state in the Schema + LLM SEO prototype. The flow is built for Framer designers and agencies: pick a page, choose a template, fill a structured form (never raw JSON), validate, then inject. Multi-user roles gate who can edit versus who can push live. Click any tile to jump to the full screen with developer notes.',
  fullWidth:true, body:'__CONTACT_SHEET__'
});

/* ================== A · ENTRY & NAV ================== */
screens.push({
  id:'s1', tag:'A · Entry & Nav', newScreen:true,
  title:'01 · Plugin nav, Schema lives under Optimize',
  desc:'Schema is not a new top-level section. It sits inside the Optimize group of the canonical accordion nav, next to Pages, Image SEO and LLM SEO. The accordion keeps the short Framer plugin window usable: only the active group is expanded. The bottom rail reflects who is signed in (here, the agency admin).',
  body:pluginShell('schema', `
    ${pageHead('Schema', 'Add structured data to your pages so Google and AI assistants understand them. No code required.')}
    <div class="sch-note info" style="margin-bottom:16px;">
      <span class="sn-ico">${ICONS.info}</span>
      <div>RankFrame writes one managed snippet into your site head and serves the right schema per page from it. You design here, we handle the injection. <b>Setup is a one-time step.</b></div>
    </div>
    <button class="btn-primary">${ICONS.spark}<span>Set up Schema</span></button>
  `, '', 'admin'),
  anno:[
    ['Where it lives','<span class="change-tag plugin">PLUGIN UI</span> <code>Optimize ▸ Schema</code> in the accordion nav. Same group as Pages, Image SEO, LLM SEO.'],
    ['Why accordion','Framer plugin window is short (~720px). Flat lists overflow. Only the active group expands, so the nav scales as features grow.'],
    ['Rail','Bottom account block is role-aware via <code>pluginSubNav(activeKey, role)</code>. Admin shows 7seers media; member shows Lingfei. Nav items are identical for both.'],
    ['Entry','First open routes to setup (screens 04 to 07). After setup, Schema opens to the Pages list (screen 09).'],
  ]
});

screens.push({
  id:'s2', tag:'A · Entry & Nav', newScreen:true,
  title:'02 · Dashboard, where Schema lives on the web',
  desc:'Most schema work happens inside the plugin, on the canvas, next to the page being designed. The web dashboard hosts the wider Schema Manager (bulk apply, health report, activity) under the existing Content area. No new top-level dashboard item is added.',
  body:dashShell('content', `
    <h1 style="font-size:24px; margin:0 0 4px;">Content</h1>
    <p style="font-size:13px; color:var(--rf-text-muted); margin:0 0 18px;">Articles, schema, and structured data for 7seersmedia.com.</p>
    <div class="tabs" style="margin-bottom:20px;">
      <div class="tab">Calendar</div>
      <div class="tab">Drafts</div>
      <div class="tab">Approval Queue</div>
      <div class="tab active">Schema Manager</div>
    </div>
    <div class="sch-stats" style="margin-bottom:16px;">
      <div class="sch-stat"><div class="v">6</div><div class="l">Pages crawled</div></div>
      <div class="sch-stat"><div class="v green">4</div><div class="l">Schema live</div></div>
      <div class="sch-stat"><div class="v amber">1</div><div class="l">Draft</div></div>
      <div class="sch-stat"><div class="v red">1</div><div class="l">Needs fix</div></div>
    </div>
    <div class="sch-note info"><span class="sn-ico">${ICONS.info}</span><div>The full editor and bulk tools live here, on the wider dashboard. Quick per-page edits happen in the plugin while you design.</div></div>
  `, '', 'admin'),
  anno:[
    ['Where it lives','<span class="change-tag dash">DASHBOARD UI</span> New <code>Schema Manager</code> tab inside the existing Content area. No new sidebar item.'],
    ['Plugin vs dashboard','Plugin = per-page, in-context, on the canvas. Dashboard = overview, bulk apply, health, activity. Same data, two surfaces.'],
    ['Multi-site','Agencies switch site at the top of Content. Schema state is scoped per site.'],
    ['Roles','Members see the tab read-only plus their own drafts. Admin sees bulk + approval tools.'],
  ]
});

screens.push({
  id:'s3', tag:'A · Entry & Nav', newScreen:true,
  title:'03 · Schema landing, first open',
  desc:'For a designer who has never touched structured data, the landing leads with the outcome (rich results, AI answers) not the jargon. Three short value points, then a single primary action. The plain-language explanation of how injection works sits one tap away, not in the user’s face.',
  body:pluginShell('schema', `
    ${pageHead('Schema', 'Help Google and AI assistants understand every page. No code, no copy-paste.')}
    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin-bottom:18px;">
      <div class="flow-node"><div class="fn-ico">${ICONS.search}</div><div class="fn-t">Rich results</div><div class="fn-d">Stars, FAQs, breadcrumbs and more in Google search.</div></div>
      <div class="flow-node"><div class="fn-ico">${ICONS.robot}</div><div class="fn-t">AI answers</div><div class="fn-d">ChatGPT, Gemini and AI Overviews cite structured pages.</div></div>
      <div class="flow-node"><div class="fn-ico">${ICONS.bolt}</div><div class="fn-t">Auto-detected</div><div class="fn-d">We read each page and suggest the right schema type.</div></div>
    </div>
    <div style="display:flex; gap:10px; align-items:center;">
      <button class="btn-primary">${ICONS.spark}<span>Set up Schema</span></button>
      <button class="ghost-btn">${ICONS.info}<span>How does it work?</span></button>
    </div>
  `, '', 'admin'),
  anno:[
    ['Goal','Designers and agency staff are not SEO engineers. Lead with the outcome, hide the plumbing until asked.'],
    ['Primary action','<code>Set up Schema</code> begins the one-time custom-code setup (screen 04). Everything else is secondary.'],
    ['Auto-detect','On setup we crawl the published site and pre-classify pages, so the first real screen already has suggestions.'],
    ['Copy rule','No "JSON-LD", "schema.org" or "head injection" in the hero. Those appear only in the optional explainer.'],
  ]
});

/* ================== B · ONE-TIME SETUP ================== */
screens.push({
  id:'s4', tag:'B · One-time Setup', newScreen:true,
  title:'04 · How injection actually works',
  desc:'The honest model, shown plainly. The Framer Plugin API only allows site-wide custom code (headStart, headEnd, bodyStart, bodyEnd). There is no per-page head API. So RankFrame writes ONE managed block into headEnd containing a tiny router that reads the current path and prints the matching schema. The UI is per-page; the implementation is one snippet.',
  body:pluginShell('schema', `
    ${pageHead('How Schema gets onto your site', 'One managed snippet. You never touch code.')}
    <div class="flow-diagram" style="margin-bottom:14px;">
      <div class="flow-node"><div class="fn-ico">${ICONS.edit}</div><div class="fn-t">You design here</div><div class="fn-d">Pick a page, choose a template, fill a form.</div></div>
      ${flowArrow()}
      <div class="flow-node accent"><div class="fn-ico">${ICONS.code}</div><div class="fn-t">One snippet in head</div><div class="fn-d">RankFrame writes a single block to your site’s head custom code.</div></div>
      ${flowArrow()}
      <div class="flow-node"><div class="fn-ico">${ICONS.globe}</div><div class="fn-t">Right schema per page</div><div class="fn-d">The snippet detects the path and prints the matching JSON-LD.</div></div>
    </div>
    <div class="sch-note warn" style="margin-bottom:14px;">
      <span class="sn-ico">${ICONS.warn}</span>
      <div>Framer only allows <b>site-wide</b> custom code, not per-page head edits. That is why RankFrame uses one router snippet instead of editing each page. It keeps your head clean: one block, not dozens.</div>
    </div>
    <button class="btn-primary">${ICONS.arrowRight}<span>Continue to setup</span></button>
  `, '', 'admin'),
  anno:[
    ['Framer API truth','<span class="change-tag api">FRAMER API</span> <code>setCustomCode({location})</code> supports only <code>headStart / headEnd / bodyStart / bodyEnd</code>, site-wide. No per-page head injection exists.'],
    ['The router','One <code>headEnd</code> block holds a small script: it reads <code>location.pathname</code> and writes the JSON-LD mapped to that route. Adding a page-schema updates the block’s data, not the site structure.'],
    ['Why one block','Keeps the user’s head readable and avoids hitting code limits. The UI presents per-page views for good UX; the artifact is a single managed snippet.'],
    ['Idempotent','Writes are upserts on the RankFrame block by a marker comment, so re-running never duplicates code.'],
  ]
});

screens.push({
  id:'s5', tag:'B · One-time Setup', newScreen:true,
  title:'05 · Enable custom code, guided',
  desc:'Framer requires the site owner to allow custom code once, in Site Settings. The plugin cannot toggle this for the user (the API has no enable method). So we guide it: clear steps, a deep link to the right Framer settings panel, and a live status chip that flips to Detected the moment it is on.',
  body:pluginShell('schema', `
    ${pageHead('Enable custom code', 'A one-time switch in your Framer site settings. Takes about 20 seconds.')}
    <div style="background:var(--rf-bg-card); border:1px solid var(--rf-border); border-radius:12px; padding:6px 4px; margin-bottom:14px;">
      <div class="rr-row"><div class="rr-ico" style="color:var(--rf-purple); font-family:'JetBrains Mono',monospace; font-weight:700;">1</div><div><div class="rr-t">Open Site Settings ▸ General in Framer</div><div class="rr-m">Top-left menu of your Framer project.</div></div></div>
      <div class="rr-row"><div class="rr-ico" style="color:var(--rf-purple); font-family:'JetBrains Mono',monospace; font-weight:700;">2</div><div><div class="rr-t">Scroll to Custom Code</div><div class="rr-m">Find the End of &lt;head&gt; tag section.</div></div></div>
      <div class="rr-row"><div class="rr-ico" style="color:var(--rf-purple); font-family:'JetBrains Mono',monospace; font-weight:700;">3</div><div><div class="rr-t">Make sure custom code is allowed</div><div class="rr-m">Free Framer sites cannot use custom code. A paid site plan is required.</div></div></div>
    </div>
    <div style="display:flex; align-items:center; gap:10px; padding:12px 14px; background:var(--rf-bg-card); border:1px solid var(--rf-border); border-radius:10px;">
      <span style="font-size:12.5px; color:var(--rf-text-2);">Custom code status</span>
      ${schStatus('error').replace('Error','Not detected yet')}
      <button class="ghost-btn sm" style="margin-left:auto;">${ICONS.refresh}<span>Check again</span></button>
    </div>
  `, '', 'admin'),
  anno:[
    ['Plugin limit','<span class="change-tag api">FRAMER API</span> The plugin can read custom-code state but <b>cannot enable</b> it. There is no API to flip the toggle. The user must do it once in Site Settings.'],
    ['Live detection','<code>subscribeToCustomCode()</code> fires when the head block becomes writable. The status chip flips to Detected without a manual refresh.'],
    ['Paid plan note','Custom code requires a paid Framer site plan. We surface this up front so free-plan users are not stuck later.'],
    ['Deep link','We open Framer settings where possible; otherwise the steps are explicit so support load stays low.'],
  ]
});

screens.push({
  id:'s6', tag:'B · One-time Setup',
  title:'06 · Setup verifying',
  desc:'After the user enables custom code, RankFrame writes its managed head block and confirms it is present and writable. Short, honest loading state. No fake progress.',
  body:pluginShell('schema', `
    ${pageHead('Setting up Schema', 'Writing the managed snippet to your site head.')}
    ${loadingBlock('Verifying custom code access', 'Confirming RankFrame can write to the end of your &lt;head&gt; tag, then installing the schema router. This runs once.')}
  `, '', 'admin'),
  anno:[
    ['What runs','<span class="change-tag api">FRAMER API</span> <code>getCustomCode()</code> to confirm <code>headEnd</code> is enabled, then <code>setCustomCode()</code> to install the RankFrame router block.'],
    ['Marker','The block is wrapped in <code>&lt;!-- rankframe:schema --&gt;</code> markers so future writes upsert in place.'],
    ['Failure path','If the write fails (code disabled mid-flow), we route to the disabled guard (screen 08).'],
    ['Duration','Typically under 2 seconds. We do not animate fake progress bars.'],
  ]
});

screens.push({
  id:'s7', tag:'B · One-time Setup',
  title:'07 · Setup verified, schema is live-ready',
  desc:'Confirmation that the managed snippet is installed. From here the user lands on the Pages list. We restate the model in one line so there is no confusion about why there is no per-page code.',
  body:pluginShell('schema', `
    ${pageHead('Schema is ready', 'The managed snippet is installed in your site head.')}
    <div class="sch-note ok" style="margin-bottom:16px;">
      <span class="sn-ico">${ICONS.check}</span>
      <div><b>You are set up.</b> RankFrame now controls one snippet in your head. Every schema you add from here updates that snippet automatically. Publish your Framer site to push changes live.</div>
    </div>
    <div class="rr-row" style="border:1px solid var(--rf-border); border-radius:10px; margin-bottom:16px;">
      <div class="rr-ico ok">${ICONS.check}</div>
      <div><div class="rr-t">Managed head snippet installed</div><div class="rr-m">rankframe:schema router · headEnd · site-wide</div></div>
      ${schStatus('live')}
    </div>
    <button class="btn-primary">${ICONS.pages}<span>Go to Pages</span></button>
  `, '', 'admin'),
  anno:[
    ['State stored','Setup completion stored server-side per site. The setup flow is skipped on subsequent opens.'],
    ['Publish reminder','Custom code changes only go live when the Framer site is published. We remind the user at confirm and inject steps.'],
    ['Next','Primary action goes to the Pages list (screen 09), which is the home of the feature after setup.'],
    ['Revert','If the user later disables custom code, the next open shows the disabled guard (screen 08).'],
  ]
});

screens.push({
  id:'s8', tag:'B · One-time Setup', newScreen:true,
  title:'08 · Custom code disabled, schemas are paused',
  desc:'If the user later turns custom code off in Framer (or downgrades to a free plan), the managed snippet stops loading and every schema goes dark. The plugin cannot re-enable it. This guard explains the state honestly, shows exactly what is affected, and watches for re-enable so it self-clears.',
  body:pluginShell('schema', `
    ${pageHead('Schemas are paused', 'Custom code is turned off for this site, so your schema is not loading.')}
    <div class="sch-note danger" style="margin-bottom:16px;">
      <span class="sn-ico">${ICONS.warn}</span>
      <div><b>Custom code is disabled in Framer.</b> Your 4 live schemas are not being served right now. RankFrame cannot turn this back on for you, it is a Framer site setting. Re-enable custom code and this clears automatically.</div>
    </div>
    <div style="background:var(--rf-bg-card); border:1px solid var(--rf-border); border-radius:10px; margin-bottom:16px;">
      <div class="rr-row"><div class="rr-ico err">${ICONS.warn}</div><div><div class="rr-t">4 schemas paused</div><div class="rr-m">Home, About, Blog index, Services</div></div><div class="rr-right">Not loading</div></div>
    </div>
    <div style="display:flex; gap:10px; align-items:center;">
      <button class="btn-primary">${ICONS.ext}<span>Open Framer settings</span></button>
      <button class="ghost-btn">${ICONS.refresh}<span>Re-check</span></button>
    </div>
  `, '', 'admin'),
  anno:[
    ['Detection','<span class="change-tag api">FRAMER API</span> <code>getCustomCode().headEnd.disabled === true</code>. We also subscribe via <code>subscribeToCustomCode()</code> so the guard clears the instant code is re-enabled.'],
    ['Plugin cannot fix','There is no API to re-enable custom code. The only honest action is to guide the user to Framer settings.'],
    ['No data loss','Schema definitions are stored by RankFrame. Nothing is lost, it is only paused. Re-enabling restores everything.'],
    ['Free-plan cause','Downgrading to a free Framer plan also disables custom code. Same guard, same fix path.'],
  ]
});

/* ================== C · PAGES & STATUS ================== */
function pagesTable(){
  return `
    <table class="rf-table">
      <thead><tr><th>Page</th><th>Schema types</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${SCH_PAGES.map(p=>`
          <tr class="sch-pagerow">
            <td><div><b style="font-size:12.5px;">${p.label}</b><div class="pg-url" style="color:var(--rf-text-dim); margin-top:1px;">7seersmedia.com${p.url}</div></div></td>
            <td><div class="pg-types">${p.types.length?p.types.map(t=>`<span class="sch-type-chip">${t}</span>`).join(''):'<span style="color:var(--rf-text-faint); font-size:11.5px;">none</span>'}</div></td>
            <td>${schStatus(p.status)}</td>
            <td style="text-align:right;"><span style="color:var(--rf-text-dim);">${ICONS.chevR}</span></td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;
}
screens.push({
  id:'s9', tag:'C · Pages & Status',
  title:'09 · Pages with schema status',
  desc:'The home of the feature after setup. Pages come from the published-site crawl plus sitemap.xml (the Framer API does not enumerate pages). Each row shows what schema types are attached and whether they are live, draft, missing, or erroring. This is the same row + table surface used across the other prototypes.',
  body:pluginShell('schema', `
    ${pageHead('Schema', 'Structured data for each page on 7seersmedia.com.')}
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
      <button class="ghost-btn sm">${ICONS.filter}<span>All statuses</span>${ICONS.chevD}</button>
      <div class="last-analyzed" style="margin:0;"><span class="dot"></span>Crawled 6 pages · 4 min ago</div>
      <button class="btn-primary sm" style="margin-left:auto;">${ICONS.refresh}<span>Recrawl</span></button>
    </div>
    ${pagesTable()}
  `, '', 'admin'),
  anno:[
    ['Page source','<span class="change-tag api">FRAMER API</span> <code>getProjectInfo()</code> returns only project name + a hashed id, no page list. Pages are discovered by crawling the published site and reading <code>sitemap.xml</code>, the same source used for Recrawl Website.'],
    ['Status meaning','Live = served by the snippet. Draft = saved, not pushed. No schema = nothing attached. Error = validation failed on last check.'],
    ['Table','Reuses the shared <code>.rf-table</code> surface (connected divided rows, hover) so it matches the multi-user roster and content tables exactly.'],
    ['Row click','Opens the page detail (screen 11), where schema is added or edited.'],
  ]
});

screens.push({
  id:'s10', tag:'C · Pages & Status',
  title:'10 · Filter by status',
  desc:'Agencies managing dozens of pages need to find the gaps fast. The status filter narrows the list. Here, filtered to pages that need attention (no schema or erroring).',
  body:pluginShell('schema', `
    ${pageHead('Schema', 'Structured data for each page on 7seersmedia.com.')}
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
      <button class="ghost-btn sm" style="border-color:var(--rf-purple-line); background:var(--rf-purple-soft); color:var(--rf-purple);">${ICONS.filter}<span>Needs attention</span>${ICONS.chevD}</button>
      <span style="font-size:11.5px; color:var(--rf-text-dim);">2 of 6 pages</span>
    </div>
    <table class="rf-table">
      <thead><tr><th>Page</th><th>Schema types</th><th>Status</th><th></th></tr></thead>
      <tbody>
        <tr class="sch-pagerow"><td><div><b style="font-size:12.5px;">Work</b><div class="pg-url" style="color:var(--rf-text-dim); margin-top:1px;">7seersmedia.com/work</div></div></td><td><span style="color:var(--rf-text-faint); font-size:11.5px;">none</span></td><td>${schStatus('none')}</td><td style="text-align:right;"><button class="btn-primary sm">${ICONS.plus}<span>Add</span></button></td></tr>
        <tr class="sch-pagerow"><td><div><b style="font-size:12.5px;">Contact</b><div class="pg-url" style="color:var(--rf-text-dim); margin-top:1px;">7seersmedia.com/contact</div></div></td><td><div class="pg-types"><span class="sch-type-chip">LocalBusiness</span></div></td><td>${schStatus('error')}</td><td style="text-align:right;"><button class="ghost-btn sm">${ICONS.edit}<span>Fix</span></button></td></tr>
      </tbody>
    </table>
  `, '', 'admin'),
  anno:[
    ['Filter options','All statuses, Live, Draft, No schema, Error. Default All. State held in component, not persisted.'],
    ['Inline actions','No-schema rows get a one-tap Add. Error rows get Fix, which deep-links to the failing field (screen 21).'],
    ['Scale','For large sites the list paginates; counts come from the crawl index.'],
    ['Consistency','Same filter chip pattern as the content calendar filters.'],
  ]
});

screens.push({
  id:'s11', tag:'C · Pages & Status',
  title:'11 · Page detail, no schema yet',
  desc:'Opening a page with no schema. We show what RankFrame read from the live page (title, description, detected entity) and the single recommended action. The page preview gives designers confidence we are looking at the right page.',
  body:pluginShell('schema', `
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
      <span style="color:var(--rf-text-dim); cursor:pointer;">${ICONS.chevL}</span>
      <span style="font-size:11.5px; color:var(--rf-text-dim);">Schema</span>
      <span style="color:var(--rf-text-faint);">/</span>
      <span style="font-size:11.5px; color:var(--rf-text-2);">Services</span>
    </div>
    ${pageHead('Services', '7seersmedia.com/services')}
    <div class="sch-note info" style="margin-bottom:14px;">
      <span class="sn-ico">${ICONS.bolt}</span>
      <div>We read this page and think it is a <b>Service</b> listing. Start from that template, or pick another. You can change everything before it goes live.</div>
    </div>
    <div style="background:var(--rf-bg-card); border:1px solid var(--rf-border); border-radius:11px; padding:14px 16px; margin-bottom:16px;">
      <div style="font-size:10.5px; letter-spacing:0.08em; text-transform:uppercase; color:var(--rf-text-dim); font-weight:700; margin-bottom:9px;">Read from the live page</div>
      <div style="font-size:12.5px; color:var(--rf-text-2); line-height:1.7;"><span style="color:var(--rf-text-dim);">Title</span> &nbsp; SEO &amp; Growth Services · 7 Seers Media<br><span style="color:var(--rf-text-dim);">Description</span> &nbsp; Full-funnel SEO, content, and design for Framer sites.<br><span style="color:var(--rf-text-dim);">Detected</span> &nbsp; Service offering, 5 service items</div>
    </div>
    <button class="btn-primary">${ICONS.spark}<span>Add schema to this page</span></button>
  `, '', 'admin'),
  anno:[
    ['Auto-read','Page metadata + visible content scraped from the published URL at crawl time. Drives the template suggestion.'],
    ['No raw data dump','We translate detection into a plain sentence, not a JSON blob. Designers should never see internals here.'],
    ['Single action','One primary button. The template picker (screen 12) opens with the suggested template pre-selected.'],
    ['Breadcrumb','Lightweight back nav inside the plugin window so the user never feels lost.'],
  ]
});

/* ================== D · ADD SCHEMA (DESIGNER FLOW) ================== */
screens.push({
  id:'s12', tag:'D · Add Schema', newScreen:true,
  title:'12 · Auto-detect + template picker',
  desc:'The heart of the designer flow. We pre-select the detected template, but show the full set as friendly cards (icon, name, plain description) not schema.org type names. Recommended cards carry a badge. One tap moves to the structured editor.',
  body:pluginShell('schema', `
    ${pageHead('Choose a template', 'For Services · 7seersmedia.com/services')}
    <div class="type-grid" style="margin-bottom:16px;">
      ${typeCard(ICONS.bolt, 'Service', 'A service you offer. Best for service and offer pages.', {selected:true, badge:'RECOMMENDED'})}
      ${typeCard(ICONS.store, 'Local business', 'Name, address, hours and contact for a physical or local business.')}
      ${typeCard(ICONS.person, 'About / Organization', 'Your company or personal brand identity and social links.')}
      ${typeCard(ICONS.doc, 'Article / Blog', 'A blog post or article with author and date.')}
      ${typeCard(ICONS.faq, 'FAQ', 'Question and answer pairs eligible for rich results.')}
      ${typeCard(ICONS.image, 'Product', 'A product with price, availability and reviews.')}
    </div>
    <div style="display:flex; align-items:center; gap:10px;">
      <button class="btn-primary">${ICONS.arrowRight}<span>Use Service template</span></button>
      <button class="ghost-btn">${ICONS.code}<span>Start from blank</span></button>
    </div>
  `, '', 'admin'),
  anno:[
    ['Templates','Service, LocalBusiness, Organization, Article/BlogPosting, FAQPage, Product. Each maps to a schema.org type but the label is human.'],
    ['Recommended','Driven by auto-detection. Pre-selected so the fast path is one tap, but fully overridable.'],
    ['Cards','Reuse the selectable-card pattern (purple-line selected border, check badge) consistent with other pickers.'],
    ['Blank start','Power users can start from an empty template; advanced raw-JSON editing is gated behind LLM SEO / advanced mode, not shown to first-timers.'],
  ]
});

screens.push({
  id:'s13', tag:'D · Add Schema',
  title:'13 · Structured editor, never raw JSON',
  desc:'Designers fill a form, not JSON. Fields are labeled in plain language, required fields marked, and anything we could read from the page is pre-filled and tagged AUTO-FILLED. The live JSON-LD is one tab away for the curious, but never the default surface.',
  body:pluginShell('schema', `
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
      <span style="color:var(--rf-text-dim); cursor:pointer;">${ICONS.chevL}</span>
      <span style="font-size:11.5px; color:var(--rf-text-2);">Service schema · /services</span>
      <span class="sch-type-chip" style="margin-left:auto;">Service</span>
    </div>
    <div class="tabs" style="margin-bottom:16px;">
      <div class="tab active">Form</div>
      <div class="tab">JSON-LD</div>
      <div class="tab">Validate</div>
    </div>
    ${schField('Service name', 'SEO &amp; Growth Services', {req:true, auto:true})}
    ${schField('Provider', '7 Seers Media', {req:true, auto:true})}
    ${schField('Description', 'Full-funnel SEO, content, and design for Framer sites.', {auto:true})}
    ${schField('Area served', '', {placeholder:'e.g. Worldwide, United States', hint:'Optional. Where you deliver this service.'})}
    ${schField('Price range', '', {placeholder:'e.g. $$ or from $1,500', hint:'Optional. Shown in some rich results.'})}
    <div style="display:flex; align-items:center; gap:10px; margin-top:6px;">
      <button class="btn-primary">${ICONS.eye}<span>Preview JSON-LD</span></button>
      <button class="ghost-btn">Save as draft</button>
    </div>
  `, '', 'admin'),
  anno:[
    ['Form first','The structured form is the default and primary surface. Field labels are plain English, mapped to schema.org properties under the hood.'],
    ['Auto-fill','Fields populated from the page crawl are tagged AUTO-FILLED so users trust them but can override.'],
    ['Required','Required-by-schema.org properties are marked with a red asterisk. Validation (screen 15) enforces them before inject.'],
    ['Escape hatch','The JSON-LD tab shows the generated code read-only (editable in advanced mode). Most users never open it.'],
  ]
});

screens.push({
  id:'s14', tag:'D · Add Schema',
  title:'14 · JSON-LD preview',
  desc:'The optional code view. Generated from the form, syntax-highlighted, copyable. Read-only by default so the form stays the source of truth. This is what RankFrame stores against the page and serves from the router snippet.',
  body:pluginShell('schema', `
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
      <span style="color:var(--rf-text-dim); cursor:pointer;">${ICONS.chevL}</span>
      <span style="font-size:11.5px; color:var(--rf-text-2);">Service schema · /services</span>
    </div>
    <div class="tabs" style="margin-bottom:16px;">
      <div class="tab">Form</div>
      <div class="tab active">JSON-LD</div>
      <div class="tab">Validate</div>
    </div>
    ${jsonLd('Generated from your form · read-only', `<span class="p">{</span>
  <span class="k">"@context"</span><span class="p">:</span> <span class="s">"https://schema.org"</span><span class="p">,</span>
  <span class="k">"@type"</span><span class="p">:</span> <span class="s">"Service"</span><span class="p">,</span>
  <span class="k">"name"</span><span class="p">:</span> <span class="s">"SEO &amp; Growth Services"</span><span class="p">,</span>
  <span class="k">"description"</span><span class="p">:</span> <span class="s">"Full-funnel SEO, content, and design for Framer sites."</span><span class="p">,</span>
  <span class="k">"provider"</span><span class="p">:</span> <span class="p">{</span>
    <span class="k">"@type"</span><span class="p">:</span> <span class="s">"Organization"</span><span class="p">,</span>
    <span class="k">"name"</span><span class="p">:</span> <span class="s">"7 Seers Media"</span><span class="p">,</span>
    <span class="k">"url"</span><span class="p">:</span> <span class="s">"https://7seersmedia.com"</span>
  <span class="p">}</span><span class="p">,</span>
  <span class="k">"url"</span><span class="p">:</span> <span class="s">"https://7seersmedia.com/services"</span>
<span class="p">}</span>`)}
    <div style="display:flex; align-items:center; gap:10px; margin-top:14px;">
      <button class="btn-primary">${ICONS.check}<span>Validate</span></button>
      <button class="ghost-btn">${ICONS.edit}<span>Back to form</span></button>
    </div>
  `, '', 'admin'),
  anno:[
    ['Source of truth','The form generates this. Editing the form regenerates the JSON. Direct JSON edits are allowed only in advanced mode and round-trip back to the form where possible.'],
    ['Stored shape','This object is stored against the route and embedded into the router snippet keyed by path.'],
    ['Copy','Copy button lets developers lift the JSON for their own use or review.'],
    ['Highlighting','Mono font + token colors match the editor code blocks in the content prototype.'],
  ]
});

screens.push({
  id:'s15', tag:'D · Add Schema',
  title:'15 · Validate against Rich Results',
  desc:'Before anything goes live we validate: required properties present, types correct, URLs resolvable, and whether the result is eligible for a Google rich result. Errors block inject; warnings do not. Honest, actionable rows.',
  body:pluginShell('schema', `
    <div class="tabs" style="margin-bottom:16px;">
      <div class="tab">Form</div>
      <div class="tab">JSON-LD</div>
      <div class="tab active">Validate</div>
    </div>
    <div style="background:var(--rf-bg-card); border:1px solid var(--rf-border); border-radius:11px; margin-bottom:14px;">
      <div class="rr-row"><div class="rr-ico ok">${ICONS.check}</div><div><div class="rr-t">Valid Service schema</div><div class="rr-m">All required properties present</div></div></div>
      <div class="rr-row"><div class="rr-ico ok">${ICONS.check}</div><div><div class="rr-t">Provider resolves to Organization</div><div class="rr-m">Linked to your site Organization schema</div></div></div>
      <div class="rr-row"><div class="rr-ico warn">${ICONS.warn}</div><div><div class="rr-t">No areaServed set</div><div class="rr-m">Optional. Adding it can improve local relevance.</div></div><div class="rr-right">Warning</div></div>
    </div>
    <div class="sch-note ok" style="margin-bottom:16px;"><span class="sn-ico">${ICONS.check}</span><div><b>Ready to go live.</b> 2 checks passed, 1 optional suggestion. No blocking errors.</div></div>
    <button class="btn-primary">${ICONS.arrowRight}<span>Inject to site</span></button>
  `, '', 'admin'),
  anno:[
    ['Validator','Server-side schema.org validation plus Google Rich Results eligibility check where feasible.'],
    ['Errors vs warnings','Errors (missing required, wrong type) block inject. Warnings (optional gaps) do not. Clear visual split.'],
    ['Inject gate','The Inject button is enabled only when there are zero blocking errors.'],
    ['Re-run','Validation re-runs automatically on every form change and again server-side at inject time.'],
  ]
});

screens.push({
  id:'s16', tag:'D · Add Schema',
  title:'16 · Inject confirm',
  desc:'The single confirm before we touch the head snippet. We restate plainly what happens: the route is added to the managed router, and the user must publish their Framer site for it to go live. No surprises.',
  body:pluginShell('schema', `
    ${pageHead('Add this schema to your site?', 'Service schema for /services')}
    <div class="flow-diagram" style="margin-bottom:14px;">
      <div class="flow-node accent"><div class="fn-ico">${ICONS.code}</div><div class="fn-t">Router snippet updated</div><div class="fn-d">/services is added to your one managed head block.</div></div>
      ${flowArrow()}
      <div class="flow-node"><div class="fn-ico">${ICONS.globe}</div><div class="fn-t">Publish to go live</div><div class="fn-d">Changes serve once you publish your Framer site.</div></div>
    </div>
    <div class="sch-note info" style="margin-bottom:16px;"><span class="sn-ico">${ICONS.info}</span><div>No other pages are affected. Your head stays a single RankFrame block, we just add this route to it.</div></div>
    <div style="display:flex; align-items:center; gap:10px;">
      <button class="btn-primary">${ICONS.check}<span>Inject and save</span></button>
      <button class="ghost-btn">Cancel</button>
    </div>
  `, '', 'admin'),
  anno:[
    ['What happens','<span class="change-tag api">FRAMER API</span> <code>setCustomCode()</code> upserts the RankFrame <code>headEnd</code> block with the new route added to the router data. Idempotent by marker.'],
    ['Publish requirement','Framer serves custom code only after publish. We state this every time so expectations are correct.'],
    ['Scope clarity','We explicitly reassure that other pages and the head structure are untouched.'],
    ['Role gate','For members with inject locked, this button is replaced by Submit for approval (screen 25).'],
  ]
});

screens.push({
  id:'s17', tag:'D · Add Schema',
  title:'17 · Injected, live',
  desc:'Success. The schema is in the router and the page status flips to Live (after publish). We offer the natural next steps: validate in Google, add schema to the next gap page, or view all.',
  body:pluginShell('schema', `
    <div class="sch-note ok" style="margin-bottom:16px;"><span class="sn-ico">${ICONS.check}</span><div><b>Service schema added.</b> /services is now in your managed snippet. Publish your Framer site to serve it, then validate in Google.</div></div>
    <div class="rr-row" style="border:1px solid var(--rf-border); border-radius:10px; margin-bottom:16px;">
      <div class="rr-ico ok">${ICONS.check}</div><div><div class="rr-t">Services</div><div class="rr-m">Service · 7seersmedia.com/services</div></div>${schStatus('live')}
    </div>
    <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
      <button class="btn-primary">${ICONS.pages}<span>Add schema to Work</span></button>
      <button class="ghost-btn">${ICONS.ext}<span>Test in Google</span></button>
      <button class="ghost-btn">All pages</button>
    </div>
  `, '', 'admin'),
  anno:[
    ['Status flip','Page moves to Live in the list. Until the site is published it shows Live (pending publish) in the detail view.'],
    ['Next gap','We nudge the user to the next no-schema page to build momentum across the site.'],
    ['External test','Deep link to Google Rich Results Test with the page URL prefilled.'],
    ['Undo','Removing the schema upserts the route out of the router block; no orphaned code remains.'],
  ]
});

/* ================== E · MANAGE EXISTING ================== */
screens.push({
  id:'s18', tag:'E · Manage Existing',
  title:'18 · Schema Manager overview (dashboard)',
  desc:'The wider view on the web dashboard. Health at a glance, every page and its types, and bulk entry points. This is where an agency runs schema across a whole site rather than page by page.',
  body:dashShell('content', `
    <h1 style="font-size:24px; margin:0 0 4px;">Schema Manager</h1>
    <p style="font-size:13px; color:var(--rf-text-muted); margin:0 0 18px;">All structured data for 7seersmedia.com.</p>
    <div class="sch-stats" style="margin-bottom:18px;">
      <div class="sch-stat"><div class="v green">4</div><div class="l">Live</div></div>
      <div class="sch-stat"><div class="v amber">1</div><div class="l">Draft</div></div>
      <div class="sch-stat"><div class="v">1</div><div class="l">No schema</div></div>
      <div class="sch-stat"><div class="v red">1</div><div class="l">Error</div></div>
    </div>
    <div style="display:flex; gap:10px; margin-bottom:16px;">
      <button class="btn-primary">${ICONS.layers}<span>Bulk apply</span></button>
      <button class="ghost-btn">${ICONS.shield}<span>Run health check</span></button>
      <button class="ghost-btn">${ICONS.history}<span>Activity</span></button>
    </div>
    ${pagesTable()}
  `, '', 'admin'),
  anno:[
    ['Where','<span class="change-tag dash">DASHBOARD UI</span> Content ▸ Schema Manager. Wider canvas for the full table and bulk tools.'],
    ['Same data','Reads the same per-site schema store as the plugin. Edits sync both ways.'],
    ['Bulk + health','Entry points for bulk apply (screen 20) and the health report (screen 21).'],
    ['Table parity','Identical <code>.rf-table</code> surface as the plugin and the other prototypes.'],
  ]
});

screens.push({
  id:'s19', tag:'E · Manage Existing',
  title:'19 · Edit existing schema',
  desc:'Editing an already-live schema. Same structured form, pre-filled with current values, plus a small header showing it is live and when it last changed. Saving re-validates and re-injects.',
  body:pluginShell('schema', `
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
      <span style="color:var(--rf-text-dim); cursor:pointer;">${ICONS.chevL}</span>
      <span style="font-size:11.5px; color:var(--rf-text-2);">About · /about</span>
      ${schStatus('live')}
      <span style="font-size:10.5px; color:var(--rf-text-dim); margin-left:auto;">Edited 2 days ago</span>
    </div>
    <div class="tabs" style="margin-bottom:16px;">
      <div class="tab active">Form</div>
      <div class="tab">JSON-LD</div>
      <div class="tab">Validate</div>
    </div>
    ${schField('Organization name', '7 Seers Media', {req:true})}
    ${schField('Logo URL', 'https://7seersmedia.com/logo.png', {req:true, auto:true})}
    ${schField('Founder', 'Harsh', {})}
    ${schField('Same-as (social)', 'x.com/7seersmedia, linkedin.com/company/7seersmedia', {hint:'Comma-separated profile URLs. Strengthens entity recognition.'})}
    <div style="display:flex; align-items:center; gap:10px; margin-top:6px;">
      <button class="btn-primary">${ICONS.check}<span>Save and re-inject</span></button>
      <button class="ghost-btn" style="color:var(--rf-red); border-color:rgba(221,82,76,0.35);">${ICONS.trash}<span>Remove schema</span></button>
    </div>
  `, '', 'admin'),
  anno:[
    ['Edit = re-inject','Saving re-validates then upserts the route in the router block. Same idempotent write.'],
    ['Remove','Removing pulls the route out of the router and flips the page to No schema. No orphaned code.'],
    ['Version','Each save is recorded in the activity log (screen 28) with before/after.'],
    ['Same form','Identical editor to the add flow, just pre-filled. One component, two entry points.'],
  ]
});

screens.push({
  id:'s20', tag:'E · Manage Existing',
  title:'20 · Bulk apply (agency flow)',
  desc:'Agencies do not want to add Organization schema to 40 sites one page at a time. Bulk apply pushes a base schema (Organization, WebSite) across selected pages in one move, with a preview of what changes. This is an admin-only capability.',
  body:dashShell('content', `
    <h1 style="font-size:24px; margin:0 0 4px;">Bulk apply schema</h1>
    <p style="font-size:13px; color:var(--rf-text-muted); margin:0 0 18px;">Apply a base schema across multiple pages at once.</p>
    <div class="sch-field" style="max-width:420px;"><label>Schema to apply</label><div class="sch-input filled">Organization + WebSite (site-wide base)</div></div>
    <div style="background:var(--rf-bg-card); border:1px solid var(--rf-border); border-radius:11px; margin:8px 0 16px;">
      <div class="rr-row"><input type="checkbox" checked style="accent-color:var(--rf-purple);"><div><div class="rr-t">Apply to all 6 pages</div><div class="rr-m">Organization added where missing; existing page schemas kept</div></div><div class="rr-right">6 pages</div></div>
    </div>
    <div class="sch-note info" style="margin-bottom:16px;"><span class="sn-ico">${ICONS.info}</span><div>Bulk apply never overwrites a page’s specific schema. It only adds the base where it is missing, then re-injects the router once.</div></div>
    <button class="btn-primary">${ICONS.layers}<span>Preview and apply to 6 pages</span></button>
  `, '', 'admin'),
  anno:[
    ['Admin only','<span class="change-tag dash">DASHBOARD UI</span> Bulk apply is gated to Admin / Publisher. Writers and Viewers do not see it.'],
    ['Non-destructive','Adds base schema only where absent. Page-specific schemas (Service, FAQ) are preserved.'],
    ['One write','All changes batch into a single router-block upsert, not N writes.'],
    ['Preview','Shows a diff of which pages gain what before committing.'],
  ]
});

screens.push({
  id:'s21', tag:'E · Manage Existing',
  title:'21 · Schema health, errors',
  desc:'The health report surfaces what is broken across the site and routes straight to the fix. Here, the Contact page LocalBusiness schema is missing a required property. One click opens the failing field.',
  body:dashShell('content', `
    <h1 style="font-size:24px; margin:0 0 4px;">Schema health</h1>
    <p style="font-size:13px; color:var(--rf-text-muted); margin:0 0 18px;">Last checked 6 min ago across 6 pages.</p>
    <div class="sch-note danger" style="margin-bottom:16px;"><span class="sn-ico">${ICONS.warn}</span><div><b>1 page has a blocking error.</b> Invalid schema is ignored by Google and AI assistants, so the page loses its rich-result eligibility until fixed.</div></div>
    <table class="rf-table">
      <thead><tr><th>Page</th><th>Issue</th><th>Status</th><th></th></tr></thead>
      <tbody>
        <tr><td><div><b style="font-size:12.5px;">Contact</b><div class="pg-url" style="color:var(--rf-text-dim); margin-top:1px;">/contact · LocalBusiness</div></div></td><td style="font-size:12px; color:var(--rf-text-2);">Missing required property <code style="font-family:'JetBrains Mono',monospace; font-size:11px; background:#15171B; padding:1px 5px; border-radius:4px;">address</code></td><td>${schStatus('error')}</td><td style="text-align:right;"><button class="btn-primary sm">${ICONS.edit}<span>Fix</span></button></td></tr>
        <tr><td><div><b style="font-size:12.5px;">Services</b><div class="pg-url" style="color:var(--rf-text-dim); margin-top:1px;">/services · Service</div></div></td><td style="font-size:12px; color:var(--rf-text-muted);">Optional: areaServed not set</td><td>${schStatus('live')}</td><td style="text-align:right;"><button class="ghost-btn sm">Review</button></td></tr>
      </tbody>
    </table>
  `, '', 'admin'),
  anno:[
    ['Why it matters','Invalid structured data is silently dropped by Google and LLMs. Surfacing it prevents quiet visibility loss.'],
    ['Direct fix','Fix deep-links to the exact failing field in the editor (screen 13 pattern) with the error highlighted.'],
    ['Severity','Blocking errors first, optional suggestions below. Same error/warning split as inline validation.'],
    ['Schedule','Health re-checks on every inject and on a periodic crawl.'],
  ]
});

/* ================== F · LLM SEO ================== */
screens.push({
  id:'s22', tag:'F · LLM SEO', newScreen:true,
  title:'22 · LLM SEO overview',
  desc:'Schema is the foundation; LLM SEO is the payoff. This screen connects the two: structured data is how ChatGPT, Gemini, Perplexity and Google AI Overviews understand and cite a page. It sits next to Schema in the Optimize group and reuses the same data.',
  body:pluginShell('llmseo', `
    ${pageHead('LLM SEO', 'Get cited by AI assistants. Built on the schema you already added.')}
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
      <div class="flow-node"><div class="fn-ico">${ICONS.schema}</div><div class="fn-t">Schema feeds AI</div><div class="fn-d">Your structured data tells assistants what each page is and who is behind it.</div></div>
      <div class="flow-node"><div class="fn-ico">${ICONS.robot}</div><div class="fn-t">Answerable content</div><div class="fn-d">Clear entities + FAQ schema make pages easy to quote in AI answers.</div></div>
    </div>
    <div class="sch-note info" style="margin-bottom:16px;"><span class="sn-ico">${ICONS.info}</span><div>You already have <b>4 pages with schema</b>. LLM SEO builds on that: it scores how answerable each page is and suggests the structured data assistants look for.</div></div>
    <button class="btn-primary">${ICONS.spark}<span>Check AI visibility</span></button>
  `, '', 'admin'),
  anno:[
    ['Relationship','<span class="change-tag plugin">PLUGIN UI</span> LLM SEO sits beside Schema in Optimize and reads the same schema store. Schema is the input, AI visibility is the output.'],
    ['No magic claims','We do not promise rankings in AI. We improve the structured signals assistants actually use.'],
    ['Shared data','Pages, types and health come from the schema layer, no separate crawl.'],
    ['Scope','This prototype shows the tie-in; the full LLM SEO flow is its own spec.'],
  ]
});

screens.push({
  id:'s23', tag:'F · LLM SEO', newScreen:true,
  title:'23 · AI visibility check',
  desc:'A per-page answerability score driven by schema completeness and content clarity. Honest signals, concrete suggestions, each linking back to a schema action. This is the bridge that makes the schema work pay off.',
  body:pluginShell('llmseo', `
    ${pageHead('AI visibility', 'How answerable your pages are to AI assistants.')}
    <div class="sub-nav-score-card" style="margin:0 0 16px; max-width:none; padding:14px 16px;">
      <div class="sub-nav-score-ring" style="width:48px; height:48px;"><span style="font-size:14px;">78</span></div>
      <div class="sub-nav-score-meta"><span class="label">Site AI visibility</span><span class="val" style="font-size:13px;">Good · 4 of 6 pages structured</span></div>
    </div>
    <div style="background:var(--rf-bg-card); border:1px solid var(--rf-border); border-radius:11px;">
      <div class="rr-row"><div class="rr-ico ok">${ICONS.check}</div><div><div class="rr-t">Organization + author entities present</div><div class="rr-m">Assistants can attribute your content to 7 Seers Media</div></div></div>
      <div class="rr-row"><div class="rr-ico warn">${ICONS.warn}</div><div><div class="rr-t">No FAQ schema on Services</div><div class="rr-m">FAQ pairs are highly quotable in AI answers</div></div><div class="rr-right"><button class="ghost-btn sm">Add FAQ</button></div></div>
      <div class="rr-row"><div class="rr-ico err">${ICONS.warn}</div><div><div class="rr-t">Work page has no schema</div><div class="rr-m">Invisible to entity-based AI retrieval</div></div><div class="rr-right"><button class="btn-primary sm">Add schema</button></div></div>
    </div>
  `, '', 'admin'),
  anno:[
    ['Score','Weighted by schema coverage, entity completeness, and content answerability. Not a Google or OpenAI metric, a RankFrame heuristic, labeled as such.'],
    ['Actionable','Every row links to a schema action (add FAQ, add schema), closing the loop back to the editor.'],
    ['Reuses ring','Same score-ring component as the plugin sub-nav, kept visually consistent.'],
    ['Honest framing','We describe what assistants use, not guaranteed placement.'],
  ]
});

/* ================== G · MULTI-USER ================== */
screens.push({
  id:'s24', tag:'G · Multi-User', newScreen:true,
  title:'24 · Schema permissions, Admin',
  desc:'For agencies, schema touches live code, so who can push matters. The permissions matrix (admin only) controls per role: edit drafts, validate, inject live, bulk apply, and edit raw JSON. Defaults are safe: writers draft, admins and publishers push.',
  body:dashShell('team', `
    <h1 style="font-size:24px; margin:0 0 4px;">Schema permissions</h1>
    <p style="font-size:13px; color:var(--rf-text-muted); margin:0 0 18px;">Control who can change structured data on 7seersmedia.com.</p>
    <table class="rf-table">
      <thead><tr><th>Capability</th><th style="text-align:center;">Admin</th><th style="text-align:center;">Publisher</th><th style="text-align:center;">Writer</th><th style="text-align:center;">Viewer</th></tr></thead>
      <tbody>
        ${[
          ['Edit schema drafts', true,true,true,false],
          ['Validate', true,true,true,true],
          ['Inject live', true,true,false,false],
          ['Bulk apply', true,false,false,false],
          ['Edit raw JSON-LD', true,false,false,false],
        ].map(([cap,a,p,w,v])=>{
          const dot = on => on
            ? `<span style="color:var(--rf-green);">${ICONS.check}</span>`
            : `<span style="display:inline-block; width:11px; height:2px; border-radius:1px; background:var(--rf-text-faint); vertical-align:middle;"></span>`;
          return `<tr><td style="font-size:12.5px;">${cap}</td><td style="text-align:center;">${dot(a)}</td><td style="text-align:center;">${dot(p)}</td><td style="text-align:center;">${dot(w)}</td><td style="text-align:center;">${dot(v)}</td></tr>`;
        }).join('')}
      </tbody>
    </table>
    <div class="sch-note info" style="margin-top:16px;"><span class="sn-ico">${ICONS.lock}</span><div>Writers can prepare schema but cannot push it live. Their changes go to the approval queue (screen 26). Raw JSON editing is admin-only to protect the head snippet.</div></div>
  `, '', 'admin'),
  anno:[
    ['Roles','<span class="change-tag dash">DASHBOARD UI</span> Reuses the existing Admin / Publisher / Writer / Viewer model from the multi-user prototype. No new role system.'],
    ['Why gate inject','Inject writes to live site code. Restricting it to Admin / Publisher prevents accidental or unreviewed head changes.'],
    ['Raw JSON','Editing raw JSON-LD can break validity, so it is admin-only. Everyone else uses the structured form.'],
    ['Matrix','Same <code>.rf-table</code> matrix style as the roles &amp; permissions screen in the multi-user spec.'],
  ]
});

screens.push({
  id:'s25', tag:'G · Multi-User', newScreen:true,
  title:'25 · Member view, inject locked',
  desc:'The same editor seen by Lingfei, a Writer on the agency. The rail shows her identity. She can fill the form and validate, but Inject is replaced by Submit for approval. Nothing about the UI feels punitive: she gets the full design experience, just not the publish button.',
  body:pluginShell('schema', `
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
      <span style="color:var(--rf-text-dim); cursor:pointer;">${ICONS.chevL}</span>
      <span style="font-size:11.5px; color:var(--rf-text-2);">FAQ schema · /services</span>
      ${roleBadge('writer')}
    </div>
    <div class="tabs" style="margin-bottom:16px;">
      <div class="tab active">Form</div>
      <div class="tab">JSON-LD</div>
      <div class="tab">Validate</div>
    </div>
    ${schField('Question 1', 'How long does SEO take to show results?', {req:true})}
    ${schField('Answer 1', 'Most Framer sites see movement in 8 to 12 weeks with consistent content.', {req:true})}
    ${schField('Question 2', 'Do you work with existing Framer sites?', {req:true})}
    <div class="sch-note info" style="margin:6px 0 14px;"><span class="sn-ico">${ICONS.lock}</span><div>As a Writer you can prepare and validate schema. An admin reviews and pushes it live.</div></div>
    <div style="display:flex; align-items:center; gap:10px;">
      <button class="btn-primary">${ICONS.arrowRight}<span>Submit for approval</span></button>
      <button class="ghost-btn">Save draft</button>
    </div>
  `, '', 'member'),
  anno:[
    ['Role-aware rail','<code>pluginShell(..., \'member\')</code> renders Lingfei in the bottom rail. Identical nav, different identity.'],
    ['Locked action','Inject is swapped for Submit for approval when <code>canInject === false</code> for the role.'],
    ['Full experience','Writers get the entire editor and validation, so the work is real, only the publish gate differs.'],
    ['Submission','Submit sends the draft to the admin approval queue (screen 26) with a diff.'],
  ]
});

screens.push({
  id:'s26', tag:'G · Multi-User', newScreen:true,
  title:'26 · Admin approval queue',
  desc:'Schema changes submitted by writers land here for an admin. Each item shows the page, type, who submitted it, and a validation status. Approve injects it; reject returns it with a note. This mirrors the content approval queue exactly.',
  body:dashShell('content', `
    <h1 style="font-size:24px; margin:0 0 4px;">Schema approvals</h1>
    <p style="font-size:13px; color:var(--rf-text-muted); margin:0 0 18px;">Changes waiting for review before they go live.</p>
    <table class="rf-table">
      <thead><tr><th>Change</th><th>Submitted by</th><th>Validation</th><th>Status</th><th></th></tr></thead>
      <tbody>
        <tr>
          <td><div><b style="font-size:12.5px;">Add FAQ schema</b><div class="pg-url" style="color:var(--rf-text-dim); margin-top:1px;">/services · FAQPage</div></div></td>
          <td>${memberCell('LF','Lingfei','lingfei@anytimeai.ai')}</td>
          <td><span style="color:var(--rf-green); display:inline-flex; align-items:center; gap:5px; font-size:12px;">${ICONS.check} Valid</span></td>
          <td>${schStatus('review')}</td>
          <td style="text-align:right;"><div style="display:flex; gap:6px; justify-content:flex-end;"><button class="ghost-btn sm">View</button><button class="btn-primary sm">Approve</button></div></td>
        </tr>
        <tr>
          <td><div><b style="font-size:12.5px;">Edit Organization</b><div class="pg-url" style="color:var(--rf-text-dim); margin-top:1px;">/about · Organization</div></div></td>
          <td>${memberCell('LF','Lingfei','lingfei@anytimeai.ai')}</td>
          <td><span style="color:var(--rf-amber); display:inline-flex; align-items:center; gap:5px; font-size:12px;">${ICONS.warn} 1 warning</span></td>
          <td>${schStatus('review')}</td>
          <td style="text-align:right;"><div style="display:flex; gap:6px; justify-content:flex-end;"><button class="ghost-btn sm">View</button><button class="btn-primary sm">Approve</button></div></td>
        </tr>
      </tbody>
    </table>
  `, '', 'admin'),
  anno:[
    ['Mirrors content','<span class="change-tag dash">DASHBOARD UI</span> Same queue pattern and table as the content Approval Queue. One mental model for the whole product.'],
    ['Approve = inject','Approving runs final server-side validation then upserts the router block. Reject returns the draft with a comment.'],
    ['Validation shown','Each item carries its validation state so admins triage fast.'],
    ['Audit','Approve/reject is logged in the schema activity log (screen 28).'],
  ]
});

screens.push({
  id:'s27', tag:'G · Multi-User', newScreen:true,
  title:'27 · Member waiting, then approved',
  desc:'Lingfei’s view after submitting. Her change shows as In review, then flips to Approved and Live once an admin pushes it. She is never left guessing where her work went.',
  body:pluginShell('schema', `
    ${pageHead('Your schema changes', 'Status of what you submitted.')}
    <table class="rf-table">
      <thead><tr><th>Change</th><th>Status</th><th></th></tr></thead>
      <tbody>
        <tr><td><div><b style="font-size:12.5px;">Add FAQ schema</b><div class="pg-url" style="color:var(--rf-text-dim); margin-top:1px;">/services · FAQPage</div></div></td><td>${schStatus('approved')}</td><td style="text-align:right; font-size:11px; color:var(--rf-text-dim);">Live now</td></tr>
        <tr><td><div><b style="font-size:12.5px;">Edit Organization</b><div class="pg-url" style="color:var(--rf-text-dim); margin-top:1px;">/about · Organization</div></div></td><td>${schStatus('review')}</td><td style="text-align:right; font-size:11px; color:var(--rf-text-dim);">Awaiting admin</td></tr>
      </tbody>
    </table>
    <div class="sch-note ok" style="margin-top:16px;"><span class="sn-ico">${ICONS.check}</span><div>Your FAQ schema was approved and is live on /services. Nice work.</div></div>
  `, '', 'member'),
  anno:[
    ['Member clarity','Writers see exactly where each submission stands: In review, Approved, or Returned with a note.'],
    ['Rail','Member rail (Lingfei) via the role-aware shell.'],
    ['Notifications','Approval / return triggers an in-app and email notification, reusing the multi-user notification layer.'],
    ['Returned state','A rejected item returns with the admin’s comment and reopens in the editor (not shown, same as content returns).'],
  ]
});

screens.push({
  id:'s28', tag:'G · Multi-User', newScreen:true,
  title:'28 · Schema activity log',
  desc:'Every schema change is recorded: who added, edited, approved, or removed what, and when. For agencies this is accountability and a rollback trail. Reuses the activity-log row component from the multi-user spec.',
  body:dashShell('content', `
    <h1 style="font-size:24px; margin:0 0 4px;">Schema activity</h1>
    <p style="font-size:13px; color:var(--rf-text-muted); margin:0 0 18px;">A record of every structured-data change on this site.</p>
    <div style="background:var(--rf-bg-card); border:1px solid var(--rf-border); border-radius:12px; padding:6px 4px;">
      ${logRow('ok', ICONS.check, '<b>7seers media</b> approved and injected <b>FAQ schema</b> on /services', 'Today · 10:42')}
      ${logRow('purple', ICONS.edit, '<b>Lingfei</b> submitted <b>Organization edit</b> on /about for review', 'Today · 10:31')}
      ${logRow('ok', ICONS.plus, '<b>7seers media</b> added <b>Service schema</b> to /services', 'Yesterday · 16:05')}
      ${logRow('warn', ICONS.warn, '<b>System</b> flagged <b>LocalBusiness</b> on /contact: missing address', 'Yesterday · 09:12')}
      ${logRow('red', ICONS.trash, '<b>7seers media</b> removed <b>Product schema</b> from /work', '2 days ago · 14:20')}
    </div>
  `, '', 'admin'),
  anno:[
    ['Component','<span class="change-tag dash">DASHBOARD UI</span> Same <code>logRow()</code> helper and styling as the multi-user Activity Log. Consistent across features.'],
    ['What is logged','Add, edit, submit, approve, reject, remove, and system validation flags. Each with actor + timestamp.'],
    ['Rollback','Stored before/after snapshots enable reverting a schema to a prior version (admin only).'],
    ['Member scope','Writers see only their own entries; admins see everything, matching the content activity rules.'],
  ]
});

/* ================== H · CROSS-CUTTING ================== */
screens.push({
  id:'s29', tag:'H · Cross-cutting', newScreen:true,
  title:'29 · Permission denied',
  desc:'A Writer opens a page and taps an admin-only action (bulk apply or raw JSON). Instead of a dead end, we explain the limit and offer the path that is open to them: submit for approval.',
  body:pluginShell('schema', `
    ${pageHead('Schema', 'Structured data for 7seersmedia.com.')}
    <div class="empty-state">
      <div class="ico">${ICONS.lock}</div>
      <h3>Admins push schema live</h3>
      <p>As a Writer you can create and validate schema, but injecting to the live site is limited to Admins and Publishers. Submit your change and an admin will review it.</p>
      <button class="btn-primary">${ICONS.arrowRight}<span>Submit for approval</span></button>
    </div>
  `, '', 'member'),
  anno:[
    ['Not a dead end','Denied states always offer the action that IS available to the role. Here, submit for approval.'],
    ['Source','Gated by the schema permission matrix (screen 24).'],
    ['Tone','Explains the why in one sentence, no jargon, no blame.'],
    ['Reuses empty-state','Same <code>.empty-state</code> component used across the product.'],
  ]
});

screens.push({
  id:'s30', tag:'H · Cross-cutting', newScreen:true,
  title:'30 · Validation error blocks inject',
  desc:'The honest failure case. The user tried to inject but a required property is missing. We block, explain precisely what is wrong, and jump them to the exact field. No vague errors.',
  body:pluginShell('schema', `
    <div class="tabs" style="margin-bottom:16px;">
      <div class="tab">Form</div>
      <div class="tab">JSON-LD</div>
      <div class="tab active">Validate</div>
    </div>
    <div class="sch-note danger" style="margin-bottom:14px;"><span class="sn-ico">${ICONS.warn}</span><div><b>Cannot inject yet.</b> 1 required property is missing. Google and AI assistants would ignore this schema as invalid.</div></div>
    <div style="background:var(--rf-bg-card); border:1px solid var(--rf-border); border-radius:11px; margin-bottom:16px;">
      <div class="rr-row"><div class="rr-ico err">${ICONS.warn}</div><div><div class="rr-t">Missing required property: address</div><div class="rr-m">LocalBusiness requires a postal address</div></div><div class="rr-right"><button class="btn-primary sm">${ICONS.edit}<span>Fix field</span></button></div></div>
      <div class="rr-row"><div class="rr-ico ok">${ICONS.check}</div><div><div class="rr-t">name, telephone present</div></div></div>
    </div>
    <button class="ghost-btn" style="opacity:0.5; cursor:not-allowed;">${ICONS.arrowRight}<span>Inject to site</span></button>
  `, '', 'admin'),
  anno:[
    ['Hard block','Inject is disabled while any required property is missing. The button is visibly inert.'],
    ['Precise','We name the exact property and type rule, not a generic "invalid schema" message.'],
    ['Jump to fix','Fix field deep-links to that input in the form tab with focus and a red outline.'],
    ['Server re-check','Even if the client passes, the server re-validates at inject; the same error shape is returned.'],
  ]
});

screens.push({
  id:'s31', tag:'H · Cross-cutting', newScreen:true,
  title:'31 · Existing custom JSON-LD conflict',
  desc:'Some users already hand-wrote JSON-LD in Framer’s custom code before installing RankFrame. We detect it, do not silently clobber it, and let the user choose: keep theirs, let RankFrame take over, or merge. Respecting existing work builds trust.',
  body:pluginShell('schema', `
    ${pageHead('We found existing schema', 'There is already structured data in your site’s custom code.')}
    <div class="sch-note warn" style="margin-bottom:14px;"><span class="sn-ico">${ICONS.warn}</span><div>Your head already contains hand-written JSON-LD (Organization). RankFrame will not overwrite it without your say-so.</div></div>
    <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:16px;">
      <div class="type-card" style="cursor:pointer;"><div class="tc-title">Let RankFrame manage it</div><div class="tc-desc">Import your existing Organization schema into RankFrame and manage it here going forward.</div></div>
      <div class="type-card" style="cursor:pointer;"><div class="tc-title">Keep yours, add alongside</div><div class="tc-desc">Leave your code untouched. RankFrame manages only the pages you add here.</div></div>
      <div class="type-card" style="cursor:pointer;"><div class="tc-title">Review the conflict</div><div class="tc-desc">See both versions side by side before deciding.</div></div>
    </div>
  `, '', 'admin'),
  anno:[
    ['Detection','<span class="change-tag api">FRAMER API</span> <code>getCustomCode()</code> is parsed for existing JSON-LD outside RankFrame’s marked block before any write.'],
    ['Never clobber','We never overwrite user code silently. The user explicitly chooses import, coexist, or review.'],
    ['Coexist','RankFrame’s block and the user’s code can live side by side; the router only owns routes the user adds here.'],
    ['Trust','Respecting existing work is critical for adoption among technical users and agencies.'],
  ]
});

screens.push({
  id:'s32', tag:'H · Cross-cutting', newScreen:true,
  title:'32 · No pages crawled yet',
  desc:'The genuine empty state: setup is done but the site has not been crawled, or the site is unpublished so there is nothing to read. We explain why the list is empty and give the one action that fixes it.',
  body:pluginShell('schema', `
    ${pageHead('Schema', 'Structured data for your pages.')}
    <div class="empty-state">
      <div class="ico">${ICONS.globe}</div>
      <h3>No pages to show yet</h3>
      <p>RankFrame reads your published site to find pages. Publish your Framer site, then recrawl, and your pages will appear here ready for schema.</p>
      <button class="btn-primary">${ICONS.refresh}<span>Recrawl website</span></button>
    </div>
  `, '', 'admin'),
  anno:[
    ['Cause','Pages come from the published-site crawl + sitemap. An unpublished or never-crawled site has nothing to list.'],
    ['One action','Recrawl is the single fix. We also remind the user the site must be published.'],
    ['Honest','We do not show fake placeholder pages. Empty means empty, with a clear reason.'],
    ['Reuses empty-state','Same component as the rest of the product.'],
  ]
});
