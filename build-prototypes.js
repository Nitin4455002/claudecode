#!/usr/bin/env node
/* Build rankframe-prototypes.html: one self-contained file that embeds
   the three standalone prototype specs as inert <template> elements and
   mounts the chosen one into #stage. Re-run after editing any standalone
   prototype to re-sync the combined chooser.

   Usage: node build-prototypes.js
*/
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'rankframe-prototypes.html');

/* target key -> { file, template id, chooser + vwbar copy } */
const PROTOS = [
  {
    key: 'content',
    file: 'rankframe-content-engine-prototype-v2.html',
    tpl: 'tpl-content',
    label: 'Content Engine',
    title: 'Content Engine',
    isNew: true,
    blurb: 'AI blog writing into the Framer CMS: research, calendar, draft editor, approval workflow, sync, and schema.',
    chips: ['65 screens', 'A&ndash;K', 'dev notes'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
  },
  {
    key: 'multiuser',
    file: 'rankframe-multiuser-prototype-v2.html',
    tpl: 'tpl-multi',
    label: 'Multi-User',
    title: 'Multi-User / Team',
    isNew: true,
    blurb: 'Seat-based team access via Polar.sh: roster, roles, invites, per-member credits, billing, and activity log.',
    chips: ['35 screens', 'A&ndash;H', 'admin + member'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17" cy="8" r="2.5"/><path d="M21 21v-2a3 3 0 0 0-2-2.8"/></svg>',
  },
  {
    key: 'schema',
    file: 'rankframe-schema-prototype-v2.html',
    tpl: 'tpl-schema',
    label: 'Schema + LLM SEO',
    title: 'Advanced Schema + LLM SEO',
    isNew: true,
    blurb: 'Structured data and LLM SEO: auto-generate, scan-all, schema library, verification, and per-page injection.',
    chips: ['26 screens', 'Generate &middot; Verify', 'dev notes'],
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l4-4h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V11"/><polyline points="9 11 11 13 15 9"/><line x1="9" y1="16" x2="15" y2="16"/></svg>',
  },
];

/* Pull the head <style> blocks and the <body> inner HTML out of a
   standalone prototype so it can be embedded as a template. */
function extract(file) {
  const html = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const head = html.split(/<\/head>/i)[0] || '';
  const styles = [];
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(head)) !== null) styles.push(m[1]);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) throw new Error('No <body> found in ' + file);
  return { style: styles.join('\n'), body: bodyMatch[1].trim() };
}

const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13"><path d="M9 6l6 6-6 6"/></svg>';

const cards = PROTOS.map(p => `      <button class="ch-card" data-target="${p.key}">
        <div class="ch-card-ico">${p.icon}</div>
        <h3>${p.title} ${p.isNew ? '<span class="new">New</span>' : ''}</h3>
        <p>${p.blurb}</p>
        <div class="meta">${p.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
        <div class="go">Open ${p.label} ${arrow}</div>
      </button>`).join('\n');

const switchBtns = PROTOS.map(p => `<button data-target="${p.key}">${p.label}</button>`).join('');

const templates = PROTOS.map(p => {
  const { style, body } = extract(p.file);
  return `  <template id="${p.tpl}"><style>${style}</style>\n${body}\n</template>`;
}).join('\n');

const tplMapEntries = PROTOS.map(p => `${p.key}:"${p.tpl}"`).join(', ');
const validTargets = PROTOS.map(p => `"${p.key}"`).join('||initial===');

const out = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>RankFrame · Feature Prototypes</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style id="shell-style">
  .rf-shell-reset *,.rf-shell-reset *::before,.rf-shell-reset *::after{ box-sizing:border-box; }
  #chooser, #vwbar{ font-family:"Inter",-apple-system,system-ui,sans-serif; }
  html,body{ margin:0; padding:0; }
  body.rf-home{ background:#08090B; min-height:100vh; }
  :root{
    --rf-purple:#BA24D5; --rf-purple-btn:#AB33CE; --rf-purple-soft:rgba(186,36,213,0.10); --rf-purple-line:rgba(186,36,213,0.35);
    --rf-bg-card:#0C0E11; --rf-bg-card-2:#131519; --rf-border:#1A1D24; --rf-border-2:#262A33;
    --rf-text:#FFFFFF; --rf-text-2:#D5D8DE; --rf-text-muted:#9BA1AE; --rf-text-dim:#6B7280; --rf-text-faint:#4B5563;
  }
  #chooser{ position:fixed; inset:0; z-index:40; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:40px 24px; color:#fff; overflow-y:auto;
    background:radial-gradient(circle at 22% 12%, rgba(186,36,213,0.10) 0%, transparent 45%), radial-gradient(circle at 78% 92%, rgba(186,36,213,0.07) 0%, transparent 45%), #08090B; }
  #chooser.hidden{ display:none; }
  .ch-brand{ display:flex; align-items:center; gap:13px; margin-bottom:30px; }
  .ch-mark{ width:38px; height:38px; border-radius:9px; background:#3E3B3B; display:grid; grid-template-columns:1fr 1fr; gap:3.5px; padding:7px; box-shadow:0 6px 18px rgba(0,0,0,0.55); }
  .ch-mark span{ border-radius:50%; } .ch-mark span:nth-child(1){ background:#D9D9D9; } .ch-mark span:nth-child(2){ background:var(--rf-purple); }
  .ch-mark span:nth-child(3){ background:var(--rf-purple); } .ch-mark span:nth-child(4){ background:#D9D9D9; }
  .ch-brand b{ font-size:21px; font-weight:700; } .ch-brand b .a{ color:var(--rf-purple); }
  .ch-tag{ display:inline-flex; padding:4px 13px; border-radius:999px; margin-bottom:16px; font-size:11px; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; background:var(--rf-purple-soft); color:var(--rf-purple); border:1px solid var(--rf-purple-line); }
  .ch-title{ font-size:32px; font-weight:800; letter-spacing:-0.02em; margin:0 0 10px; text-align:center; }
  .ch-sub{ font-size:15px; color:var(--rf-text-muted); margin:0 0 40px; text-align:center; max-width:560px; line-height:1.6; }
  .ch-cards{ display:grid; grid-template-columns:repeat(3, minmax(0, 300px)); gap:20px; width:100%; max-width:960px; }
  @media (max-width:980px){ .ch-cards{ grid-template-columns:repeat(2, minmax(0, 320px)); max-width:660px; } }
  @media (max-width:680px){ .ch-cards{ grid-template-columns:1fr; max-width:380px; } }
  .ch-card{ text-align:left; cursor:pointer; background:linear-gradient(180deg, rgba(186,36,213,0.06), var(--rf-bg-card)); border:1px solid var(--rf-border-2); border-radius:18px; padding:26px 24px 24px; color:#fff; font:inherit; position:relative; overflow:hidden; transition:transform 0.16s, border-color 0.16s, box-shadow 0.16s; }
  .ch-card:hover{ transform:translateY(-4px); border-color:var(--rf-purple-line); box-shadow:0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px var(--rf-purple-line); }
  .ch-card-ico{ width:46px; height:46px; border-radius:12px; background:var(--rf-purple-soft); border:1px solid var(--rf-purple-line); display:flex; align-items:center; justify-content:center; color:var(--rf-purple); margin-bottom:18px; }
  .ch-card-ico svg{ width:24px; height:24px; }
  .ch-card h3{ margin:0 0 7px; font-size:18px; font-weight:700; display:flex; align-items:center; gap:10px; }
  .ch-card .new{ font-size:9px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; background:var(--rf-purple); color:#fff; border-radius:999px; padding:3px 8px; }
  .ch-card p{ margin:0 0 16px; font-size:13px; color:var(--rf-text-muted); line-height:1.6; }
  .ch-card .meta{ display:flex; gap:8px; flex-wrap:wrap; }
  .ch-card .chip{ font-size:10.5px; color:var(--rf-text-2); background:var(--rf-bg-card-2); border:1px solid var(--rf-border-2); border-radius:6px; padding:4px 9px; font-family:"JetBrains Mono", monospace; }
  .ch-card .go{ margin-top:18px; display:flex; align-items:center; gap:7px; font-size:13px; font-weight:600; color:var(--rf-purple); }
  .ch-foot{ margin-top:38px; font-size:12px; color:var(--rf-text-faint); }
  /* persistent top bar shown while a prototype is mounted */
  #vwbar{ position:fixed; top:0; left:0; right:0; height:50px; z-index:50; display:none; align-items:center; gap:16px; padding:0 18px;
    background:rgba(7,7,9,0.94); backdrop-filter:blur(18px); border-bottom:1px solid var(--rf-border); }
  body.rf-app #vwbar{ display:flex; }
  .vw-brand{ display:flex; align-items:center; gap:10px; }
  .vw-brand .mini{ width:24px; height:24px; border-radius:6px; background:#3E3B3B; display:grid; grid-template-columns:1fr 1fr; gap:2px; padding:4px; }
  .vw-brand .mini span{ border-radius:50%; } .vw-brand .mini span:nth-child(1){ background:#D9D9D9; } .vw-brand .mini span:nth-child(2){ background:var(--rf-purple); }
  .vw-brand .mini span:nth-child(3){ background:var(--rf-purple); } .vw-brand .mini span:nth-child(4){ background:#D9D9D9; }
  .vw-brand b{ font-size:14px; font-weight:600; color:#fff; } .vw-brand b .a{ color:var(--rf-purple); }
  .vw-switch{ display:flex; gap:3px; background:var(--rf-bg-card); border:1px solid var(--rf-border-2); border-radius:9px; padding:3px; }
  .vw-switch button{ border:none; background:transparent; cursor:pointer; font:inherit; font-size:12.5px; font-weight:500; color:var(--rf-text-muted); padding:6px 14px; border-radius:6px; }
  .vw-switch button:hover{ color:#fff; } .vw-switch button.active{ background:var(--rf-purple-btn); color:#fff; }
  .vw-home{ margin-left:auto; display:flex; align-items:center; gap:7px; border:1px solid var(--rf-border-2); background:var(--rf-bg-card); color:var(--rf-text-2); cursor:pointer; font:inherit; font-size:12.5px; padding:7px 13px; border-radius:8px; }
  .vw-home:hover{ border-color:var(--rf-purple-line); color:#fff; } .vw-home svg{ width:14px; height:14px; }
  /* push mounted prototype below the fixed bar */
  body.rf-app #stage{ padding-top:50px; }
</style>
</head>
<body class="rf-home rf-shell-reset">

  <div id="chooser">
    <div class="ch-brand"><div class="ch-mark"><span></span><span></span><span></span><span></span></div><b>Rank<span class="a">Frame</span></b></div>
    <span class="ch-tag">Feature Prototypes</span>
    <h1 class="ch-title">Which prototype do you want to see?</h1>
    <p class="ch-sub">Three dev-ready, fully-annotated walkthroughs in one file. Pick one to open it. Switch between them anytime from the top bar.</p>
    <div class="ch-cards">
${cards}
    </div>
    <div class="ch-foot">RankFrame · Feature Prototypes · single self-contained file</div>
  </div>

  <div id="vwbar">
    <div class="vw-brand"><div class="mini"><span></span><span></span><span></span><span></span></div><b>Rank<span class="a">Frame</span></b></div>
    <div class="vw-switch">${switchBtns}</div>
    <button class="vw-home" id="homeBtn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/></svg>Chooser</button>
  </div>

  <div id="stage"></div>

${templates}

<script id="shell-script">
  var stage=document.getElementById("stage");
  var chooser=document.getElementById("chooser");
  var switchBtns=Array.prototype.slice.call(document.querySelectorAll(".vw-switch button"));
  var TPL={${tplMapEntries}};
  var current=null;
  function mount(target){
    if(current===target){ return; }
    if(!TPL[target]){ return; }
    stage.innerHTML="";
    var tpl=document.getElementById(TPL[target]);
    var node=tpl.content.cloneNode(true);
    stage.appendChild(node);
    // re-execute scripts (cloned scripts do not run); wrap each in an IIFE to keep top-level consts local
    Array.prototype.slice.call(stage.querySelectorAll("script")).forEach(function(old){
      var s=document.createElement("script");
      s.textContent="(function(){\\n"+old.textContent+"\\n})();";
      old.parentNode.replaceChild(s, old);
    });
    current=target;
    switchBtns.forEach(function(b){ b.classList.toggle("active", b.dataset.target===target); });
    document.body.classList.remove("rf-home"); document.body.classList.add("rf-app");
    chooser.classList.add("hidden");
    location.hash=target;
    window.scrollTo(0,0);
  }
  function goHome(){
    stage.innerHTML=""; current=null;
    document.body.classList.remove("rf-app"); document.body.classList.add("rf-home");
    chooser.classList.remove("hidden");
    location.hash="";
  }
  Array.prototype.slice.call(document.querySelectorAll(".ch-card")).forEach(function(c){ c.addEventListener("click", function(){ mount(c.dataset.target); }); });
  switchBtns.forEach(function(b){ b.addEventListener("click", function(){ mount(b.dataset.target); }); });
  document.getElementById("homeBtn").addEventListener("click", goHome);
  var initial=(location.hash||"").replace("#","");
  if(TPL[initial]){ mount(initial); }
</script>
</body>
</html>
`;

fs.writeFileSync(OUT, out);
console.log('Wrote ' + OUT);
console.log('Embedded ' + PROTOS.length + ' prototypes: ' + PROTOS.map(p => p.key).join(', '));
