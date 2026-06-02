#!/usr/bin/env node
/* ============================================================
   build-schema.js
   Assembles rankframe-schema-prototype-v3.html from:
     - the shared CSS + JS shell layer of the multi-user
       prototype (forked byte-for-byte, so zero design drift)
     - schema-src/nav.html      (left doc nav)
     - schema-src/extra.css     (schema-only components)
     - schema-src/screens.js    (the 32 schema screens)
   Run:  node build-schema.js
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const BASE = path.join(ROOT, 'rankframe-multiuser-prototype-v2.html');
const OUT  = path.join(ROOT, 'rankframe-schema-prototype-v3.html');

let src = fs.readFileSync(BASE, 'utf8');
const nav     = fs.readFileSync(path.join(ROOT, 'schema-src/nav.html'), 'utf8');
const extra   = fs.readFileSync(path.join(ROOT, 'schema-src/extra.css'), 'utf8');
const screens = fs.readFileSync(path.join(ROOT, 'schema-src/screens.js'), 'utf8');

function must(idx, label){ if (idx < 0) throw new Error('Anchor not found: ' + label); return idx; }

/* 1 · HEAD: everything up to the left-nav sub-title line ----- */
const aMark = '<div class="proto-side-sub">Multi-User Prototype</div>';
const idxA = must(src.indexOf(aMark), aMark);
let head = src.slice(0, idxA);

/* retitle the document for this prototype */
head = head.replace(
  '<title>RankFrame · Multi-User / Team · Feature Prototype v2</title>',
  '<title>RankFrame · Schema + LLM SEO · Feature Prototype v3</title>'
);

/* inject schema-only CSS just before </style> in the head */
head = head.replace('</style>', extra + '\n</style>');

/* 2 · JS HELPER LAYER: <script> ... const screens = []; --------
   This includes the role-aware pluginSubNav / pluginShell /
   dashShell, ICONS, PLUGIN_NAV_GROUPS, roleBadge, memberCell,
   logRow, etc. We keep it verbatim and supply our own screens. */
const scriptStart = must(src.indexOf('<script>'), '<script>');
const screensAnchor = 'const screens = [];';
const helperEnd = must(src.indexOf(screensAnchor), screensAnchor) + screensAnchor.length;
const helpers = src.slice(scriptStart, helperEnd);

/* 3 · TAIL: from buildContactSheet to EOF, groups swapped ------ */
const tailStart = must(src.indexOf('function buildContactSheet(){'), 'buildContactSheet');
let tail = src.slice(tailStart);

const groups = `const groups = [
    { title:'A · Entry & Nav', screenIds:['s1','s2','s3'] },
    { title:'B · One-time Setup', screenIds:['s4','s5','s6','s7','s8'] },
    { title:'C · Pages & Status', screenIds:['s9','s10','s11'] },
    { title:'D · Add Schema (Designer flow)', screenIds:['s12','s13','s14','s15','s16','s17'] },
    { title:'E · Manage Existing', screenIds:['s18','s19','s20','s21'] },
    { title:'F · LLM SEO', screenIds:['s22','s23'] },
    { title:'G · Multi-User', screenIds:['s24','s25','s26','s27','s28'] },
    { title:'H · Cross-cutting', screenIds:['s29','s30','s31','s32'] },
  ];`;
tail = tail.replace(/const groups = \[[\s\S]*?\];/, groups);

/* 4 · ASSEMBLE ------------------------------------------------- */
const out =
  head +
  nav +
  '\n' +
  helpers +
  '\n\n' +
  screens +
  '\n\n' +
  tail;

fs.writeFileSync(OUT, out, 'utf8');
console.log('Built ' + path.basename(OUT) + '  (' + out.split('\n').length + ' lines)');
