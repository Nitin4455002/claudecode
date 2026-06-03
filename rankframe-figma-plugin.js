// RankFrame Design System — Figma Plugin Script
// Run this in Figma desktop: Plugins > Development > Open Console > paste & run
// Or save as a plugin: Plugins > Development > New Plugin, replace code.js content

(async function buildRankFrameDesignSystem() {

  // ─── HELPERS ───────────────────────────────────────────────────────────────

  function hex(h) {
    const r = parseInt(h.slice(1,3),16)/255;
    const g = parseInt(h.slice(3,5),16)/255;
    const b = parseInt(h.slice(5,7),16)/255;
    return {r,g,b};
  }

  function solid(h, a=1) {
    return [{type:'SOLID', color: hex(h), opacity: a}];
  }

  async function loadFont(family, style) {
    try { await figma.loadFontAsync({family, style}); } catch(e) {}
  }

  async function loadFonts() {
    const weights = ['Regular','Medium','Semi Bold','Bold'];
    const monoWeights = ['Regular','Medium'];
    for (const w of weights) await loadFont('Inter', w);
    for (const w of monoWeights) await loadFont('JetBrains Mono', w);
  }

  function getPage(name) {
    return figma.root.children.find(p => p.name === name);
  }

  function setPage(name) {
    const p = getPage(name);
    if (p) figma.currentPage = p;
    return p;
  }

  // ─── PAGES ─────────────────────────────────────────────────────────────────

  function setupPages() {
    const names = [
      'Cover',
      'Color Tokens',
      'Typography',
      'Spacing + Radius',
      'Components - Base',
      'Components - Plugin UI',
      'Screens',
    ];
    const existing = figma.root.children.map(p => p.name);

    // Rename page 1 if default
    if (figma.root.children[0].name === 'Page 1') {
      figma.root.children[0].name = names[0];
    }

    for (const name of names) {
      if (!existing.includes(name)) {
        const p = figma.createPage();
        p.name = name;
      }
    }

    // Set dark background on all pages
    for (const p of figma.root.children) {
      p.backgrounds = [{type:'SOLID', color: hex('#0C0E11')}];
    }
    figma.root.children[0].backgrounds = [{type:'SOLID', color: hex('#000000')}];
  }

  // ─── DESIGN TOKENS ─────────────────────────────────────────────────────────

  const COLORS = {
    // Brand
    'brand/purple':        '#BA24D5',
    'brand/purple-dark':   '#8B1AAA',
    'brand/purple-light':  '#D966E8',
    'brand/purple-subtle': '#1A0A1E',

    // Backgrounds
    'bg/base':       '#000000',
    'bg/card':       '#0C0E11',
    'bg/surface':    '#161B22',
    'bg/elevated':   '#1C2128',
    'bg/overlay':    '#21262D',

    // Borders
    'border/default':  '#21262D',
    'border/subtle':   '#30363D',
    'border/strong':   '#484F58',
    'border/focus':    '#BA24D5',

    // Text
    'text/primary':    '#E6EDF3',
    'text/secondary':  '#8B949E',
    'text/muted':      '#484F58',
    'text/inverse':    '#FFFFFF',
    'text/purple':     '#BA24D5',
    'text/link':       '#388BFD',

    // Semantic - Success
    'semantic/success':        '#2EA043',
    'semantic/success-subtle': '#0C2414',
    'semantic/success-text':   '#56D364',

    // Semantic - Warning
    'semantic/warning':        '#D29922',
    'semantic/warning-subtle': '#241B00',
    'semantic/warning-text':   '#E3B341',

    // Semantic - Error
    'semantic/error':          '#F85149',
    'semantic/error-subtle':   '#2D0C0A',
    'semantic/error-text':     '#FF7B72',

    // Semantic - Info
    'semantic/info':           '#388BFD',
    'semantic/info-subtle':    '#051D38',
    'semantic/info-text':      '#79C0FF',

    // Accent
    'accent/teal':   '#39C5CF',
    'accent/pink':   '#E040FB',
    'accent/orange': '#FB8C00',
  };

  function createColorVariables() {
    const col = figma.variables.createVariableCollection('RankFrame Colors');
    col.renameMode(col.defaultModeId, 'Default');

    for (const [name, value] of Object.entries(COLORS)) {
      const v = figma.variables.createVariable(name, col, 'COLOR');
      v.setValueForMode(col.defaultModeId, hex(value));
    }
    return col;
  }

  const SPACING = {
    'spacing/0':   0,
    'spacing/1':   2,
    'spacing/2':   4,
    'spacing/3':   6,
    'spacing/4':   8,
    'spacing/5':   10,
    'spacing/6':   12,
    'spacing/8':   16,
    'spacing/10':  20,
    'spacing/12':  24,
    'spacing/16':  32,
    'spacing/20':  40,
    'spacing/24':  48,
    'spacing/32':  64,
  };

  const RADIUS = {
    'radius/none':  0,
    'radius/sm':    4,
    'radius/md':    6,
    'radius/lg':    8,
    'radius/xl':    12,
    'radius/2xl':   16,
    'radius/full':  9999,
  };

  const OPACITY = {
    'opacity/0':   0,
    'opacity/10':  0.1,
    'opacity/20':  0.2,
    'opacity/40':  0.4,
    'opacity/60':  0.6,
    'opacity/80':  0.8,
    'opacity/100': 1,
  };

  function createSpacingVariables() {
    const col = figma.variables.createVariableCollection('RankFrame Spacing');
    col.renameMode(col.defaultModeId, 'Default');
    for (const [name, value] of Object.entries(SPACING)) {
      const v = figma.variables.createVariable(name, col, 'FLOAT');
      v.setValueForMode(col.defaultModeId, value);
    }
    for (const [name, value] of Object.entries(RADIUS)) {
      const v = figma.variables.createVariable(name, col, 'FLOAT');
      v.setValueForMode(col.defaultModeId, value);
    }
    for (const [name, value] of Object.entries(OPACITY)) {
      const v = figma.variables.createVariable(name, col, 'FLOAT');
      v.setValueForMode(col.defaultModeId, value);
    }
    return col;
  }

  // ─── TEXT STYLES ───────────────────────────────────────────────────────────

  const TEXT_STYLES = [
    // Display
    { name: 'Display/2XL',     family:'Inter', style:'Bold',      size:48, lh:56, ls:-0.5 },
    { name: 'Display/XL',      family:'Inter', style:'Bold',      size:36, lh:44, ls:-0.3 },
    { name: 'Display/LG',      family:'Inter', style:'Bold',      size:30, lh:38, ls:-0.2 },

    // Heading
    { name: 'Heading/H1',      family:'Inter', style:'Bold',      size:24, lh:32, ls: 0 },
    { name: 'Heading/H2',      family:'Inter', style:'Semi Bold', size:20, lh:28, ls: 0 },
    { name: 'Heading/H3',      family:'Inter', style:'Semi Bold', size:18, lh:26, ls: 0 },
    { name: 'Heading/H4',      family:'Inter', style:'Semi Bold', size:16, lh:24, ls: 0 },
    { name: 'Heading/H5',      family:'Inter', style:'Medium',    size:14, lh:20, ls: 0 },

    // Body
    { name: 'Body/LG Regular', family:'Inter', style:'Regular',   size:16, lh:24, ls: 0 },
    { name: 'Body/LG Medium',  family:'Inter', style:'Medium',    size:16, lh:24, ls: 0 },
    { name: 'Body/MD Regular', family:'Inter', style:'Regular',   size:14, lh:20, ls: 0 },
    { name: 'Body/MD Medium',  family:'Inter', style:'Medium',    size:14, lh:20, ls: 0 },
    { name: 'Body/SM Regular', family:'Inter', style:'Regular',   size:12, lh:18, ls: 0 },
    { name: 'Body/SM Medium',  family:'Inter', style:'Medium',    size:12, lh:18, ls: 0 },
    { name: 'Body/XS Regular', family:'Inter', style:'Regular',   size:11, lh:16, ls: 0.1 },
    { name: 'Body/XS Medium',  family:'Inter', style:'Medium',    size:11, lh:16, ls: 0.1 },

    // Label
    { name: 'Label/LG',        family:'Inter', style:'Medium',    size:14, lh:20, ls: 0 },
    { name: 'Label/MD',        family:'Inter', style:'Medium',    size:12, lh:16, ls: 0 },
    { name: 'Label/SM',        family:'Inter', style:'Medium',    size:11, lh:14, ls: 0.2 },
    { name: 'Label/XS',        family:'Inter', style:'Medium',    size:10, lh:12, ls: 0.4 },

    // Code (JetBrains Mono)
    { name: 'Code/MD Regular', family:'JetBrains Mono', style:'Regular', size:13, lh:20, ls: 0 },
    { name: 'Code/MD Medium',  family:'JetBrains Mono', style:'Medium',  size:13, lh:20, ls: 0 },
    { name: 'Code/SM Regular', family:'JetBrains Mono', style:'Regular', size:12, lh:18, ls: 0 },
    { name: 'Code/SM Medium',  family:'JetBrains Mono', style:'Medium',  size:12, lh:18, ls: 0 },
  ];

  async function createTextStyles() {
    for (const ts of TEXT_STYLES) {
      const style = figma.createTextStyle();
      style.name = ts.name;
      style.fontName = { family: ts.family, style: ts.style };
      style.fontSize = ts.size;
      style.lineHeight = { value: ts.lh, unit: 'PIXELS' };
      style.letterSpacing = { value: ts.ls, unit: 'PIXELS' };
    }
  }

  // ─── COLOR STYLES ──────────────────────────────────────────────────────────

  const COLOR_STYLES = [
    { name: 'Brand/Purple',       hex: '#BA24D5' },
    { name: 'Brand/Purple Dark',  hex: '#8B1AAA' },
    { name: 'Brand/Purple Light', hex: '#D966E8' },
    { name: 'BG/Base',            hex: '#000000' },
    { name: 'BG/Card',            hex: '#0C0E11' },
    { name: 'BG/Surface',         hex: '#161B22' },
    { name: 'BG/Elevated',        hex: '#1C2128' },
    { name: 'BG/Overlay',         hex: '#21262D' },
    { name: 'Border/Default',     hex: '#21262D' },
    { name: 'Border/Subtle',      hex: '#30363D' },
    { name: 'Border/Strong',      hex: '#484F58' },
    { name: 'Text/Primary',       hex: '#E6EDF3' },
    { name: 'Text/Secondary',     hex: '#8B949E' },
    { name: 'Text/Muted',         hex: '#484F58' },
    { name: 'Text/Purple',        hex: '#BA24D5' },
    { name: 'Text/Link',          hex: '#388BFD' },
    { name: 'Success/Default',    hex: '#2EA043' },
    { name: 'Success/Subtle',     hex: '#0C2414' },
    { name: 'Success/Text',       hex: '#56D364' },
    { name: 'Warning/Default',    hex: '#D29922' },
    { name: 'Warning/Subtle',     hex: '#241B00' },
    { name: 'Warning/Text',       hex: '#E3B341' },
    { name: 'Error/Default',      hex: '#F85149' },
    { name: 'Error/Subtle',       hex: '#2D0C0A' },
    { name: 'Error/Text',         hex: '#FF7B72' },
    { name: 'Info/Default',       hex: '#388BFD' },
    { name: 'Info/Subtle',        hex: '#051D38' },
    { name: 'Info/Text',          hex: '#79C0FF' },
    { name: 'Accent/Teal',        hex: '#39C5CF' },
    { name: 'Accent/Pink',        hex: '#E040FB' },
  ];

  function createColorStyles() {
    for (const cs of COLOR_STYLES) {
      const style = figma.createPaintStyle();
      style.name = cs.name;
      style.paints = solid(cs.hex);
    }
  }

  // ─── EFFECT STYLES ─────────────────────────────────────────────────────────

  function createEffectStyles() {
    const shadows = [
      {
        name: 'Shadow/SM',
        effects: [{
          type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.4},
          offset:{x:0,y:1}, radius:3, spread:0, visible:true, blendMode:'NORMAL'
        }]
      },
      {
        name: 'Shadow/MD',
        effects: [{
          type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.5},
          offset:{x:0,y:4}, radius:12, spread:0, visible:true, blendMode:'NORMAL'
        }]
      },
      {
        name: 'Shadow/LG',
        effects: [{
          type:'DROP_SHADOW', color:{r:0,g:0,b:0,a:0.6},
          offset:{x:0,y:8}, radius:24, spread:0, visible:true, blendMode:'NORMAL'
        }]
      },
      {
        name: 'Shadow/Purple Glow',
        effects: [{
          type:'DROP_SHADOW', color:{r:0.729,g:0.141,b:0.835,a:0.4},
          offset:{x:0,y:0}, radius:20, spread:0, visible:true, blendMode:'NORMAL'
        }]
      },
    ];

    for (const s of shadows) {
      const style = figma.createEffectStyle();
      style.name = s.name;
      style.effects = s.effects;
    }
  }

  // ─── COLOR TOKENS PAGE ─────────────────────────────────────────────────────

  async function buildColorTokensPage() {
    setPage('Color Tokens');
    const page = figma.currentPage;
    page.backgrounds = [{type:'SOLID', color: hex('#0C0E11')}];

    let x = 80, y = 80;

    // Title
    await loadFont('Inter', 'Bold');
    const title = figma.createText();
    title.x = x; title.y = y;
    title.fontName = {family:'Inter', style:'Bold'};
    title.fontSize = 32;
    title.fills = solid('#E6EDF3');
    title.characters = 'RankFrame — Color Tokens';
    y += 64;

    const groups = [
      { label: 'Brand',      tokens: ['brand/purple','brand/purple-dark','brand/purple-light','brand/purple-subtle'] },
      { label: 'Background', tokens: ['bg/base','bg/card','bg/surface','bg/elevated','bg/overlay'] },
      { label: 'Border',     tokens: ['border/default','border/subtle','border/strong','border/focus'] },
      { label: 'Text',       tokens: ['text/primary','text/secondary','text/muted','text/inverse','text/purple','text/link'] },
      { label: 'Success',    tokens: ['semantic/success','semantic/success-subtle','semantic/success-text'] },
      { label: 'Warning',    tokens: ['semantic/warning','semantic/warning-subtle','semantic/warning-text'] },
      { label: 'Error',      tokens: ['semantic/error','semantic/error-subtle','semantic/error-text'] },
      { label: 'Info',       tokens: ['semantic/info','semantic/info-subtle','semantic/info-text'] },
      { label: 'Accent',     tokens: ['accent/teal','accent/pink','accent/orange'] },
    ];

    for (const group of groups) {
      // Group label
      await loadFont('Inter', 'Semi Bold');
      const lbl = figma.createText();
      lbl.x = x; lbl.y = y;
      lbl.fontName = {family:'Inter', style:'Semi Bold'};
      lbl.fontSize = 14;
      lbl.fills = solid('#8B949E');
      lbl.characters = group.label.toUpperCase();
      y += 28;

      let cx = x;
      for (const tokenName of group.tokens) {
        const colorHex = COLORS[tokenName] || '#333';
        const swatch = figma.createFrame();
        swatch.x = cx; swatch.y = y;
        swatch.resize(120, 80);
        swatch.cornerRadius = 8;
        swatch.fills = solid(colorHex);
        // border for dark swatches
        swatch.strokes = [{type:'SOLID', color: hex('#30363D')}];
        swatch.strokeWeight = 1;

        await loadFont('Inter', 'Regular');
        const nameLabel = figma.createText();
        nameLabel.x = cx; nameLabel.y = y + 88;
        nameLabel.fontName = {family:'Inter', style:'Regular'};
        nameLabel.fontSize = 11;
        nameLabel.fills = solid('#8B949E');
        nameLabel.characters = tokenName.split('/')[1] || tokenName;

        const hexLabel = figma.createText();
        hexLabel.x = cx; hexLabel.y = y + 104;
        hexLabel.fontName = {family:'Inter', style:'Regular'};
        hexLabel.fontSize = 10;
        hexLabel.fills = solid('#484F58');
        hexLabel.characters = colorHex;

        cx += 140;
      }
      y += 140;
    }
  }

  // ─── TYPOGRAPHY PAGE ───────────────────────────────────────────────────────

  async function buildTypographyPage() {
    setPage('Typography');
    const page = figma.currentPage;
    page.backgrounds = [{type:'SOLID', color: hex('#0C0E11')}];

    let y = 80;
    const x = 80;

    await loadFont('Inter', 'Bold');
    const title = figma.createText();
    title.x = x; title.y = y;
    title.fontName = {family:'Inter', style:'Bold'};
    title.fontSize = 32;
    title.fills = solid('#E6EDF3');
    title.characters = 'RankFrame — Typography';
    y += 64;

    const specs = [
      {label:'Display 2XL',      f:'Inter',           s:'Bold',      size:48, preview:'Bold 48 / Heading'},
      {label:'Display XL',       f:'Inter',           s:'Bold',      size:36, preview:'Bold 36 / Section'},
      {label:'Heading H1',       f:'Inter',           s:'Bold',      size:24, preview:'Bold 24 / H1 Page Title'},
      {label:'Heading H2',       f:'Inter',           s:'Semi Bold', size:20, preview:'Semi Bold 20 / H2 Section'},
      {label:'Heading H3',       f:'Inter',           s:'Semi Bold', size:18, preview:'Semi Bold 18 / H3 Card Title'},
      {label:'Heading H4',       f:'Inter',           s:'Semi Bold', size:16, preview:'Semi Bold 16 / H4 Label'},
      {label:'Body LG',          f:'Inter',           s:'Regular',   size:16, preview:'Regular 16 / Body Large'},
      {label:'Body MD',          f:'Inter',           s:'Regular',   size:14, preview:'Regular 14 / Body Default'},
      {label:'Body SM',          f:'Inter',           s:'Regular',   size:12, preview:'Regular 12 / Body Small'},
      {label:'Label MD',         f:'Inter',           s:'Medium',    size:12, preview:'Medium 12 / Labels, Tags'},
      {label:'Label SM',         f:'Inter',           s:'Medium',    size:11, preview:'Medium 11 / Micro Labels'},
      {label:'Code MD',          f:'JetBrains Mono',  s:'Regular',   size:13, preview:'Mono 13 / Code Blocks, Schema'},
      {label:'Code SM',          f:'JetBrains Mono',  s:'Regular',   size:12, preview:'Mono 12 / Inline Code'},
    ];

    for (const spec of specs) {
      await loadFont(spec.f, spec.s);

      const labelText = figma.createText();
      labelText.x = x; labelText.y = y;
      labelText.fontName = {family:'Inter', style:'Regular'};
      labelText.fontSize = 11;
      labelText.fills = solid('#484F58');
      labelText.characters = spec.label;

      const preview = figma.createText();
      preview.x = x + 160; preview.y = y;
      preview.fontName = {family: spec.f, style: spec.s};
      preview.fontSize = spec.size;
      preview.fills = solid('#E6EDF3');
      preview.characters = spec.preview;

      y += Math.max(spec.size + 20, 40);
    }
  }

  // ─── SPACING PAGE ──────────────────────────────────────────────────────────

  async function buildSpacingPage() {
    setPage('Spacing + Radius');
    const page = figma.currentPage;
    page.backgrounds = [{type:'SOLID', color: hex('#0C0E11')}];
    await loadFont('Inter', 'Bold');
    await loadFont('Inter', 'Regular');
    await loadFont('Inter', 'Medium');

    let y = 80;
    const x = 80;

    const title = figma.createText();
    title.x = x; title.y = y;
    title.fontName = {family:'Inter', style:'Bold'};
    title.fontSize = 32;
    title.fills = solid('#E6EDF3');
    title.characters = 'RankFrame — Spacing + Radius';
    y += 64;

    // Spacing section
    const spLabel = figma.createText();
    spLabel.x = x; spLabel.y = y;
    spLabel.fontName = {family:'Inter', style:'Semi Bold'};
    spLabel.fontSize = 14;
    spLabel.fills = solid('#8B949E');
    spLabel.characters = 'SPACING SCALE';
    y += 32;

    await loadFont('Inter', 'Semi Bold');
    for (const [name, val] of Object.entries(SPACING)) {
      const token = name.split('/')[1];
      const bar = figma.createRectangle();
      bar.x = x + 80; bar.y = y + 4;
      bar.resize(Math.max(val, 2), 16);
      bar.cornerRadius = 3;
      bar.fills = solid('#BA24D5');

      const lbl = figma.createText();
      lbl.x = x; lbl.y = y;
      lbl.fontName = {family:'Inter', style:'Regular'};
      lbl.fontSize = 12;
      lbl.fills = solid('#8B949E');
      lbl.characters = `${token}`;

      const valLbl = figma.createText();
      valLbl.x = x + 80 + Math.max(val, 2) + 8; valLbl.y = y;
      valLbl.fontName = {family:'Inter', style:'Regular'};
      valLbl.fontSize = 12;
      valLbl.fills = solid('#484F58');
      valLbl.characters = `${val}px`;

      y += 28;
    }

    y += 40;

    // Radius section
    const radLabel = figma.createText();
    radLabel.x = x; radLabel.y = y;
    radLabel.fontName = {family:'Inter', style:'Semi Bold'};
    radLabel.fontSize = 14;
    radLabel.fills = solid('#8B949E');
    radLabel.characters = 'BORDER RADIUS';
    y += 32;

    const radiusEntries = Object.entries(RADIUS).filter(([,v]) => v < 9999);
    let rx = x;
    for (const [name, val] of radiusEntries) {
      const token = name.split('/')[1];
      const size = 48;
      const sq = figma.createRectangle();
      sq.x = rx; sq.y = y;
      sq.resize(size, size);
      sq.cornerRadius = val;
      sq.fills = solid('#161B22');
      sq.strokes = [{type:'SOLID', color: hex('#BA24D5')}];
      sq.strokeWeight = 1.5;

      const lbl = figma.createText();
      lbl.x = rx; lbl.y = y + 56;
      lbl.fontName = {family:'Inter', style:'Regular'};
      lbl.fontSize = 11;
      lbl.fills = solid('#8B949E');
      lbl.characters = token;

      const vl = figma.createText();
      vl.x = rx; vl.y = y + 70;
      vl.fontName = {family:'Inter', style:'Regular'};
      vl.fontSize = 10;
      vl.fills = solid('#484F58');
      vl.characters = `${val}px`;

      rx += 80;
    }

    // Full radius pill
    const pill = figma.createRectangle();
    pill.x = rx; pill.y = y + 12;
    pill.resize(80, 24);
    pill.cornerRadius = 9999;
    pill.fills = solid('#161B22');
    pill.strokes = [{type:'SOLID', color: hex('#BA24D5')}];
    pill.strokeWeight = 1.5;
    const plbl = figma.createText();
    plbl.x = rx; plbl.y = y + 56;
    plbl.fontName = {family:'Inter', style:'Regular'};
    plbl.fontSize = 11;
    plbl.fills = solid('#8B949E');
    plbl.characters = 'full';
    const pvl = figma.createText();
    pvl.x = rx; pvl.y = y + 70;
    pvl.fontName = {family:'Inter', style:'Regular'};
    pvl.fontSize = 10;
    pvl.fills = solid('#484F58');
    pvl.characters = '9999px';
  }

  // ─── BASE COMPONENTS ───────────────────────────────────────────────────────

  async function buildBaseComponents() {
    setPage('Components - Base');
    const page = figma.currentPage;
    page.backgrounds = [{type:'SOLID', color: hex('#0C0E11')}];
    await loadFonts();

    let x = 80, y = 80;

    // ── Title ──
    const title = figma.createText();
    title.x = x; title.y = y;
    title.fontName = {family:'Inter', style:'Bold'};
    title.fontSize = 32;
    title.fills = solid('#E6EDF3');
    title.characters = 'RankFrame — Base Components';
    y += 64;

    // ── BUTTONS ──────────────────────────────────────────────

    const btnSectionLabel = figma.createText();
    btnSectionLabel.x = x; btnSectionLabel.y = y;
    btnSectionLabel.fontName = {family:'Inter', style:'Semi Bold'};
    btnSectionLabel.fontSize = 14;
    btnSectionLabel.fills = solid('#8B949E');
    btnSectionLabel.characters = 'BUTTONS';
    y += 32;

    const buttons = [
      { label:'Primary',    bg:'#BA24D5', fg:'#FFFFFF', border: null },
      { label:'Secondary',  bg:'#161B22', fg:'#E6EDF3', border:'#21262D' },
      { label:'Ghost',      bg:'transparent', fg:'#8B949E', border:'#21262D' },
      { label:'Danger',     bg:'#2D0C0A', fg:'#FF7B72', border:'#F85149' },
      { label:'Success',    bg:'#0C2414', fg:'#56D364', border:'#2EA043' },
      { label:'Disabled',   bg:'#161B22', fg:'#484F58', border:'#21262D' },
    ];

    let bx = x;
    for (const btn of buttons) {
      const frame = figma.createFrame();
      frame.name = `Button / ${btn.label}`;
      frame.x = bx; frame.y = y;
      frame.resize(120, 36);
      frame.cornerRadius = 6;
      frame.layoutMode = 'HORIZONTAL';
      frame.primaryAxisAlignItems = 'CENTER';
      frame.counterAxisAlignItems = 'CENTER';
      frame.paddingLeft = 16; frame.paddingRight = 16;
      if (btn.bg === 'transparent') {
        frame.fills = [];
      } else {
        frame.fills = solid(btn.bg);
      }
      if (btn.border) {
        frame.strokes = [{type:'SOLID', color: hex(btn.border)}];
        frame.strokeWeight = 1;
      } else {
        frame.strokes = [];
      }

      const t = figma.createText();
      t.fontName = {family:'Inter', style:'Medium'};
      t.fontSize = 13;
      t.fills = solid(btn.fg);
      t.characters = btn.label;
      frame.appendChild(t);

      const lbl = figma.createText();
      lbl.x = bx; lbl.y = y + 44;
      lbl.fontName = {family:'Inter', style:'Regular'};
      lbl.fontSize = 11;
      lbl.fills = solid('#484F58');
      lbl.characters = btn.label;

      bx += 136;
    }
    y += 96;

    // Button sizes
    const btnSizeLabel = figma.createText();
    btnSizeLabel.x = x; btnSizeLabel.y = y;
    btnSizeLabel.fontName = {family:'Inter', style:'Regular'};
    btnSizeLabel.fontSize = 12;
    btnSizeLabel.fills = solid('#484F58');
    btnSizeLabel.characters = 'Sizes: XS (24px) · SM (28px) · MD (36px) · LG (44px)';
    y += 48;

    // ── BADGES / CHIPS ────────────────────────────────────────

    const badgeSectionLabel = figma.createText();
    badgeSectionLabel.x = x; badgeSectionLabel.y = y;
    badgeSectionLabel.fontName = {family:'Inter', style:'Semi Bold'};
    badgeSectionLabel.fontSize = 14;
    badgeSectionLabel.fills = solid('#8B949E');
    badgeSectionLabel.characters = 'BADGES';
    y += 32;

    const badges = [
      { label:'New',      bg:'#1A0A1E', fg:'#BA24D5', border:'#BA24D5' },
      { label:'Beta',     bg:'#051D38', fg:'#79C0FF', border:'#388BFD' },
      { label:'Active',   bg:'#0C2414', fg:'#56D364', border:'#2EA043' },
      { label:'Warning',  bg:'#241B00', fg:'#E3B341', border:'#D29922' },
      { label:'Error',    bg:'#2D0C0A', fg:'#FF7B72', border:'#F85149' },
      { label:'Muted',    bg:'#161B22', fg:'#8B949E', border:'#21262D' },
    ];

    let bdx = x;
    for (const badge of badges) {
      const frame = figma.createFrame();
      frame.name = `Badge / ${badge.label}`;
      frame.x = bdx; frame.y = y;
      frame.resize(64, 22);
      frame.cornerRadius = 9999;
      frame.layoutMode = 'HORIZONTAL';
      frame.primaryAxisAlignItems = 'CENTER';
      frame.counterAxisAlignItems = 'CENTER';
      frame.fills = solid(badge.bg);
      frame.strokes = [{type:'SOLID', color: hex(badge.border)}];
      frame.strokeWeight = 1;
      frame.paddingLeft = 8; frame.paddingRight = 8;

      const t = figma.createText();
      t.fontName = {family:'Inter', style:'Medium'};
      t.fontSize = 10;
      t.fills = solid(badge.fg);
      t.characters = badge.label;
      frame.appendChild(t);

      bdx += 80;
    }
    y += 48;

    // ── INPUT FIELDS ──────────────────────────────────────────

    const inputLabel = figma.createText();
    inputLabel.x = x; inputLabel.y = y;
    inputLabel.fontName = {family:'Inter', style:'Semi Bold'};
    inputLabel.fontSize = 14;
    inputLabel.fills = solid('#8B949E');
    inputLabel.characters = 'INPUTS';
    y += 32;

    const inputs = [
      { label:'Default',      placeholder:'Enter value...', border:'#21262D' },
      { label:'Focused',      placeholder:'Focused state',  border:'#BA24D5' },
      { label:'Error',        placeholder:'Invalid input',  border:'#F85149' },
      { label:'Disabled',     placeholder:'Disabled',       border:'#21262D', dim:true },
    ];

    let ix = x;
    for (const inp of inputs) {
      const frame = figma.createFrame();
      frame.name = `Input / ${inp.label}`;
      frame.x = ix; frame.y = y;
      frame.resize(200, 36);
      frame.cornerRadius = 6;
      frame.fills = solid('#161B22');
      frame.strokes = [{type:'SOLID', color: hex(inp.border)}];
      frame.strokeWeight = 1;
      frame.paddingLeft = 12; frame.paddingRight = 12;
      frame.layoutMode = 'HORIZONTAL';
      frame.counterAxisAlignItems = 'CENTER';

      const t = figma.createText();
      t.fontName = {family:'Inter', style:'Regular'};
      t.fontSize = 13;
      t.fills = solid(inp.dim ? '#484F58' : '#484F58');
      t.characters = inp.placeholder;
      frame.appendChild(t);

      const lbl = figma.createText();
      lbl.x = ix; lbl.y = y + 44;
      lbl.fontName = {family:'Inter', style:'Regular'};
      lbl.fontSize = 11;
      lbl.fills = solid('#484F58');
      lbl.characters = inp.label;

      ix += 220;
    }
    y += 96;

    // ── TOGGLES ──────────────────────────────────────────────

    const toggleLabel = figma.createText();
    toggleLabel.x = x; toggleLabel.y = y;
    toggleLabel.fontName = {family:'Inter', style:'Semi Bold'};
    toggleLabel.fontSize = 14;
    toggleLabel.fills = solid('#8B949E');
    toggleLabel.characters = 'TOGGLES';
    y += 32;

    const toggleStates = [
      { label:'Off',     trackColor:'#21262D', knobX: 2  },
      { label:'On',      trackColor:'#BA24D5', knobX: 18 },
    ];

    let tx = x;
    for (const tog of toggleStates) {
      const track = figma.createFrame();
      track.name = `Toggle / ${tog.label}`;
      track.x = tx; track.y = y;
      track.resize(36, 20);
      track.cornerRadius = 10;
      track.fills = solid(tog.trackColor);

      const knob = figma.createEllipse();
      knob.x = tog.knobX; knob.y = 2;
      knob.resize(16, 16);
      knob.fills = solid('#FFFFFF');
      track.appendChild(knob);

      const lbl = figma.createText();
      lbl.x = tx; lbl.y = y + 28;
      lbl.fontName = {family:'Inter', style:'Regular'};
      lbl.fontSize = 11;
      lbl.fills = solid('#484F58');
      lbl.characters = tog.label;

      tx += 60;
    }
    y += 64;

    // ── SCORE RINGS ──────────────────────────────────────────

    const scoreLabel = figma.createText();
    scoreLabel.x = x; scoreLabel.y = y;
    scoreLabel.fontName = {family:'Inter', style:'Semi Bold'};
    scoreLabel.fontSize = 14;
    scoreLabel.fills = solid('#8B949E');
    scoreLabel.characters = 'SCORE INDICATORS';
    y += 32;

    const scores = [
      { val:'92', label:'Excellent', color:'#2EA043' },
      { val:'67', label:'Good',      color:'#D29922' },
      { val:'34', label:'Poor',      color:'#F85149' },
      { val:'—',  label:'N/A',       color:'#484F58' },
    ];

    let scx = x;
    for (const sc of scores) {
      const ring = figma.createFrame();
      ring.name = `Score / ${sc.label}`;
      ring.x = scx; ring.y = y;
      ring.resize(64, 64);
      ring.cornerRadius = 32;
      ring.fills = solid('#161B22');
      ring.strokes = [{type:'SOLID', color: hex(sc.color)}];
      ring.strokeWeight = 3;
      ring.layoutMode = 'HORIZONTAL';
      ring.primaryAxisAlignItems = 'CENTER';
      ring.counterAxisAlignItems = 'CENTER';

      const t = figma.createText();
      t.fontName = {family:'Inter', style:'Bold'};
      t.fontSize = 18;
      t.fills = solid(sc.color);
      t.characters = sc.val;
      ring.appendChild(t);

      const lbl = figma.createText();
      lbl.x = scx + 4; lbl.y = y + 72;
      lbl.fontName = {family:'Inter', style:'Regular'};
      lbl.fontSize = 11;
      lbl.fills = solid('#484F58');
      lbl.characters = sc.label;

      scx += 96;
    }
    y += 120;

    // ── TOASTS ───────────────────────────────────────────────

    const toastLabel = figma.createText();
    toastLabel.x = x; toastLabel.y = y;
    toastLabel.fontName = {family:'Inter', style:'Semi Bold'};
    toastLabel.fontSize = 14;
    toastLabel.fills = solid('#8B949E');
    toastLabel.characters = 'TOASTS / NOTIFICATIONS';
    y += 32;

    const toasts = [
      { msg:'Schema saved successfully', type:'success', color:'#56D364', border:'#2EA043', bg:'#0C2414' },
      { msg:'GSC connection required',   type:'warning', color:'#E3B341', border:'#D29922', bg:'#241B00' },
      { msg:'Publish failed, retry',     type:'error',   color:'#FF7B72', border:'#F85149', bg:'#2D0C0A' },
      { msg:'Analyzing page content...',  type:'info',    color:'#79C0FF', border:'#388BFD', bg:'#051D38' },
    ];

    for (const toast of toasts) {
      const frame = figma.createFrame();
      frame.name = `Toast / ${toast.type}`;
      frame.x = x; frame.y = y;
      frame.resize(320, 44);
      frame.cornerRadius = 8;
      frame.fills = solid(toast.bg);
      frame.strokes = [{type:'SOLID', color: hex(toast.border)}];
      frame.strokeWeight = 1;
      frame.layoutMode = 'HORIZONTAL';
      frame.counterAxisAlignItems = 'CENTER';
      frame.paddingLeft = 14; frame.paddingRight = 14;
      frame.itemSpacing = 8;

      const dot = figma.createEllipse();
      dot.resize(8, 8);
      dot.fills = solid(toast.color);
      frame.appendChild(dot);

      const t = figma.createText();
      t.fontName = {family:'Inter', style:'Medium'};
      t.fontSize = 13;
      t.fills = solid(toast.color);
      t.characters = toast.msg;
      frame.appendChild(t);

      y += 56;
    }
    y += 24;

    // ── TABS ─────────────────────────────────────────────────

    const tabsLabel = figma.createText();
    tabsLabel.x = x; tabsLabel.y = y;
    tabsLabel.fontName = {family:'Inter', style:'Semi Bold'};
    tabsLabel.fontSize = 14;
    tabsLabel.fills = solid('#8B949E');
    tabsLabel.characters = 'TABS';
    y += 32;

    const tabBar = figma.createFrame();
    tabBar.name = 'Tabs / Example';
    tabBar.x = x; tabBar.y = y;
    tabBar.resize(400, 40);
    tabBar.fills = solid('#0C0E11');
    tabBar.strokes = [{type:'SOLID', color: hex('#21262D')}];
    tabBar.strokeWeight = 1;
    tabBar.cornerRadius = 8;
    tabBar.layoutMode = 'HORIZONTAL';
    tabBar.counterAxisAlignItems = 'CENTER';
    tabBar.paddingLeft = 4; tabBar.paddingRight = 4;
    tabBar.itemSpacing = 0;

    const tabItems = ['Overview', 'Schema', 'LLM SEO', 'Settings'];
    for (let i = 0; i < tabItems.length; i++) {
      const tab = figma.createFrame();
      tab.name = `Tab / ${tabItems[i]}`;
      tab.resize(96, 32);
      tab.cornerRadius = 6;
      tab.fills = i === 0 ? solid('#21262D') : [];
      tab.layoutMode = 'HORIZONTAL';
      tab.primaryAxisAlignItems = 'CENTER';
      tab.counterAxisAlignItems = 'CENTER';

      const t = figma.createText();
      t.fontName = {family:'Inter', style: i===0 ? 'Medium' : 'Regular'};
      t.fontSize = 13;
      t.fills = solid(i===0 ? '#E6EDF3' : '#8B949E');
      t.characters = tabItems[i];
      tab.appendChild(t);
      tabBar.appendChild(tab);
    }
  }

  // ─── PLUGIN UI COMPONENTS ──────────────────────────────────────────────────

  async function buildPluginUIComponents() {
    setPage('Components - Plugin UI');
    const page = figma.currentPage;
    page.backgrounds = [{type:'SOLID', color: hex('#0C0E11')}];
    await loadFonts();

    let x = 80, y = 80;

    const title = figma.createText();
    title.x = x; title.y = y;
    title.fontName = {family:'Inter', style:'Bold'};
    title.fontSize = 32;
    title.fills = solid('#E6EDF3');
    title.characters = 'RankFrame — Plugin UI Components';
    y += 64;

    // ── PLUGIN CHROME (880x720) ───────────────────────────────

    const chromeLabel = figma.createText();
    chromeLabel.x = x; chromeLabel.y = y;
    chromeLabel.fontName = {family:'Inter', style:'Semi Bold'};
    chromeLabel.fontSize = 14;
    chromeLabel.fills = solid('#8B949E');
    chromeLabel.characters = 'PLUGIN CHROME (880 × 720)';
    y += 32;

    // Outer plugin window
    const pluginChrome = figma.createFrame();
    pluginChrome.name = 'Plugin / Chrome';
    pluginChrome.x = x; pluginChrome.y = y;
    pluginChrome.resize(880, 720);
    pluginChrome.cornerRadius = 12;
    pluginChrome.fills = solid('#0C0E11');
    pluginChrome.strokes = [{type:'SOLID', color: hex('#21262D')}];
    pluginChrome.strokeWeight = 1;
    pluginChrome.clipsContent = true;

    // Top header bar
    const header = figma.createFrame();
    header.name = 'Header Bar';
    header.x = 0; header.y = 0;
    header.resize(880, 52);
    header.fills = solid('#0C0E11');
    header.strokes = [{type:'SOLID', color: hex('#21262D')}];
    header.strokeWeight = 1;
    header.layoutMode = 'HORIZONTAL';
    header.counterAxisAlignItems = 'CENTER';
    header.paddingLeft = 20; header.paddingRight = 20;
    header.itemSpacing = 12;

    const logo = figma.createText();
    logo.fontName = {family:'Inter', style:'Bold'};
    logo.fontSize = 16;
    logo.fills = solid('#BA24D5');
    logo.characters = 'RankFrame';
    header.appendChild(logo);

    const tagline = figma.createText();
    tagline.fontName = {family:'Inter', style:'Regular'};
    tagline.fontSize = 12;
    tagline.fills = solid('#484F58');
    tagline.characters = 'SEO for Framer';
    header.appendChild(tagline);
    pluginChrome.appendChild(header);

    // Left sidebar (240px)
    const sidebar = figma.createFrame();
    sidebar.name = 'Sidebar Nav';
    sidebar.x = 0; sidebar.y = 52;
    sidebar.resize(240, 668);
    sidebar.fills = solid('#0C0E11');
    sidebar.strokes = [{type:'SOLID', color: hex('#21262D')}];
    sidebar.strokeWeight = 1;

    // Nav groups in sidebar
    const navGroups = [
      { label:'Setup',           items:['Global Settings'] },
      { label:'Optimize',        items:['Pages', 'Images', 'Schema', 'LLM SEO'], open:true },
      { label:'Index',           items:['Submit URLs', 'Sitemap'] },
      { label:'Monitor',         items:['SEO Analyzer', 'Keywords', 'Speed', '404 Monitor'] },
      { label:'Content Engine',  items:['Calendar', 'Research Hub', 'Draft Queue', 'Internal Links', 'Sync'] },
    ];

    let navY = 12;
    for (const group of navGroups) {
      // Group header
      const ghdr = figma.createFrame();
      ghdr.x = 0; ghdr.y = navY;
      ghdr.resize(240, 36);
      ghdr.fills = [];
      ghdr.layoutMode = 'HORIZONTAL';
      ghdr.counterAxisAlignItems = 'CENTER';
      ghdr.paddingLeft = 16; ghdr.paddingRight = 16;
      ghdr.itemSpacing = 8;

      const gt = figma.createText();
      gt.fontName = {family:'Inter', style:'Medium'};
      gt.fontSize = 12;
      gt.fills = solid('#8B949E');
      gt.characters = group.label;
      ghdr.appendChild(gt);
      sidebar.appendChild(ghdr);
      navY += 36;

      if (group.open) {
        for (const item of group.items) {
          const ni = figma.createFrame();
          ni.x = 8; ni.y = navY;
          ni.resize(224, 32);
          ni.cornerRadius = 6;
          ni.fills = item === 'Schema' ? solid('#1A0A1E') : [];
          ni.layoutMode = 'HORIZONTAL';
          ni.counterAxisAlignItems = 'CENTER';
          ni.paddingLeft = 24; ni.paddingRight = 12;
          ni.itemSpacing = 8;

          const dot = figma.createEllipse();
          dot.resize(4, 4);
          dot.fills = solid(item === 'Schema' ? '#BA24D5' : '#484F58');
          ni.appendChild(dot);

          const nt = figma.createText();
          nt.fontName = {family:'Inter', style: item === 'Schema' ? 'Medium' : 'Regular'};
          nt.fontSize = 13;
          nt.fills = solid(item === 'Schema' ? '#E6EDF3' : '#8B949E');
          nt.characters = item;
          ni.appendChild(nt);
          sidebar.appendChild(ni);
          navY += 32;
        }
      }
    }
    pluginChrome.appendChild(sidebar);

    // Main content area
    const mainArea = figma.createFrame();
    mainArea.name = 'Main Content Area';
    mainArea.x = 240; mainArea.y = 52;
    mainArea.resize(640, 668);
    mainArea.fills = solid('#161B22');

    // Sample content placeholder
    const ph = figma.createText();
    ph.x = 24; ph.y = 24;
    ph.fontName = {family:'Inter', style:'Regular'};
    ph.fontSize = 13;
    ph.fills = solid('#484F58');
    ph.characters = 'Main content area — 640 × 668';
    mainArea.appendChild(ph);
    pluginChrome.appendChild(mainArea);

    y += 740;

    // ── SIDEBAR NAV ACCORDION ──────────────────────────────────

    const accLabel = figma.createText();
    accLabel.x = x; accLabel.y = y;
    accLabel.fontName = {family:'Inter', style:'Semi Bold'};
    accLabel.fontSize = 14;
    accLabel.fills = solid('#8B949E');
    accLabel.characters = 'SIDEBAR NAV — ACCORDION GROUPS';
    y += 32;

    // Expanded group detail
    const groupFrame = figma.createFrame();
    groupFrame.name = 'Nav / Group (Optimize, expanded)';
    groupFrame.x = x; groupFrame.y = y;
    groupFrame.resize(240, 220);
    groupFrame.fills = solid('#0C0E11');
    groupFrame.strokes = [{type:'SOLID', color: hex('#21262D')}];
    groupFrame.strokeWeight = 1;
    groupFrame.cornerRadius = 8;

    // Group header
    const ghd = figma.createFrame();
    ghd.name = 'Group Header';
    ghd.x = 0; ghd.y = 0;
    ghd.resize(240, 40);
    ghd.fills = [];
    ghd.layoutMode = 'HORIZONTAL';
    ghd.counterAxisAlignItems = 'CENTER';
    ghd.paddingLeft = 16; ghd.paddingRight = 16;
    ghd.itemSpacing = 8;

    const gico = figma.createEllipse();
    gico.resize(16, 16);
    gico.fills = solid('#BA24D5', 0.2);
    ghd.appendChild(gico);

    const gt2 = figma.createText();
    gt2.fontName = {family:'Inter', style:'Semi Bold'};
    gt2.fontSize = 13;
    gt2.fills = solid('#E6EDF3');
    gt2.characters = 'Optimize';
    ghd.appendChild(gt2);
    groupFrame.appendChild(ghd);

    const divLine = figma.createLine();
    divLine.x = 0; divLine.y = 40;
    divLine.resize(240, 0);
    divLine.strokes = [{type:'SOLID', color: hex('#21262D')}];
    divLine.strokeWeight = 1;
    groupFrame.appendChild(divLine);

    const navItems = [
      {label:'Pages',   active:false},
      {label:'Images',  active:false},
      {label:'Schema',  active:true},
      {label:'LLM SEO', active:false, isNew:true},
    ];

    let niY = 48;
    for (const ni of navItems) {
      const nif = figma.createFrame();
      nif.name = `Nav Item / ${ni.label}`;
      nif.x = 8; nif.y = niY;
      nif.resize(224, 32);
      nif.cornerRadius = 6;
      nif.fills = ni.active ? solid('#1A0A1E') : [];
      nif.layoutMode = 'HORIZONTAL';
      nif.counterAxisAlignItems = 'CENTER';
      nif.paddingLeft = 24; nif.paddingRight = 12;
      nif.itemSpacing = 8;

      const d = figma.createEllipse();
      d.resize(4, 4);
      d.fills = solid(ni.active ? '#BA24D5' : '#484F58');
      nif.appendChild(d);

      const nt = figma.createText();
      nt.fontName = {family:'Inter', style: ni.active ? 'Medium' : 'Regular'};
      nt.fontSize = 13;
      nt.fills = solid(ni.active ? '#E6EDF3' : '#8B949E');
      nt.characters = ni.label;
      nif.appendChild(nt);

      if (ni.isNew) {
        const newBadge = figma.createFrame();
        newBadge.resize(30, 16);
        newBadge.cornerRadius = 9999;
        newBadge.fills = solid('#1A0A1E');
        newBadge.strokes = [{type:'SOLID', color: hex('#BA24D5')}];
        newBadge.strokeWeight = 1;
        newBadge.layoutMode = 'HORIZONTAL';
        newBadge.primaryAxisAlignItems = 'CENTER';
        newBadge.counterAxisAlignItems = 'CENTER';
        const nb = figma.createText();
        nb.fontName = {family:'Inter', style:'Medium'};
        nb.fontSize = 9;
        nb.fills = solid('#BA24D5');
        nb.characters = 'NEW';
        newBadge.appendChild(nb);
        nif.appendChild(newBadge);
      }
      groupFrame.appendChild(nif);
      niY += 36;
    }

    y += 240;

    // ── USER CARD ─────────────────────────────────────────────

    const ucLabel = figma.createText();
    ucLabel.x = x; ucLabel.y = y;
    ucLabel.fontName = {family:'Inter', style:'Semi Bold'};
    ucLabel.fontSize = 14;
    ucLabel.fills = solid('#8B949E');
    ucLabel.characters = 'USER CARDS';
    y += 32;

    // Admin card
    const adminCard = figma.createFrame();
    adminCard.name = 'User Card / Admin';
    adminCard.x = x; adminCard.y = y;
    adminCard.resize(240, 72);
    adminCard.fills = solid('#0C0E11');
    adminCard.strokes = [{type:'SOLID', color: hex('#21262D')}];
    adminCard.strokeWeight = 1;
    adminCard.cornerRadius = 8;
    adminCard.layoutMode = 'HORIZONTAL';
    adminCard.counterAxisAlignItems = 'CENTER';
    adminCard.paddingLeft = 16; adminCard.paddingRight = 16;
    adminCard.itemSpacing = 12;

    const adminAvatar = figma.createFrame();
    adminAvatar.resize(36, 36);
    adminAvatar.cornerRadius = 18;
    adminAvatar.fills = solid('#BA24D5');
    adminAvatar.layoutMode = 'HORIZONTAL';
    adminAvatar.primaryAxisAlignItems = 'CENTER';
    adminAvatar.counterAxisAlignItems = 'CENTER';
    const at = figma.createText();
    at.fontName = {family:'Inter', style:'Bold'};
    at.fontSize = 14;
    at.fills = solid('#FFFFFF');
    at.characters = '7M';
    adminAvatar.appendChild(at);
    adminCard.appendChild(adminAvatar);

    const adminInfo = figma.createFrame();
    adminInfo.resize(140, 40);
    adminInfo.fills = [];
    adminInfo.layoutMode = 'VERTICAL';
    adminInfo.itemSpacing = 2;
    const an = figma.createText();
    an.fontName = {family:'Inter', style:'Medium'};
    an.fontSize = 13;
    an.fills = solid('#E6EDF3');
    an.characters = '7 Seers Media';
    adminInfo.appendChild(an);
    const ar = figma.createText();
    ar.fontName = {family:'Inter', style:'Regular'};
    ar.fontSize = 11;
    ar.fills = solid('#BA24D5');
    ar.characters = 'Admin';
    adminInfo.appendChild(ar);
    adminCard.appendChild(adminInfo);

    // Member card (teal)
    const memberCard = figma.createFrame();
    memberCard.name = 'User Card / Member';
    memberCard.x = x + 260; memberCard.y = y;
    memberCard.resize(240, 72);
    memberCard.fills = solid('#0C0E11');
    memberCard.strokes = [{type:'SOLID', color: hex('#21262D')}];
    memberCard.strokeWeight = 1;
    memberCard.cornerRadius = 8;
    memberCard.layoutMode = 'HORIZONTAL';
    memberCard.counterAxisAlignItems = 'CENTER';
    memberCard.paddingLeft = 16; memberCard.paddingRight = 16;
    memberCard.itemSpacing = 12;

    const memAvatar = figma.createFrame();
    memAvatar.resize(36, 36);
    memAvatar.cornerRadius = 18;
    memAvatar.fills = solid('#39C5CF');
    memAvatar.layoutMode = 'HORIZONTAL';
    memAvatar.primaryAxisAlignItems = 'CENTER';
    memAvatar.counterAxisAlignItems = 'CENTER';
    const mt = figma.createText();
    mt.fontName = {family:'Inter', style:'Bold'};
    mt.fontSize = 14;
    mt.fills = solid('#000000');
    mt.characters = 'L';
    memAvatar.appendChild(mt);
    memberCard.appendChild(memAvatar);

    const memInfo = figma.createFrame();
    memInfo.resize(140, 40);
    memInfo.fills = [];
    memInfo.layoutMode = 'VERTICAL';
    memInfo.itemSpacing = 2;
    const mn = figma.createText();
    mn.fontName = {family:'Inter', style:'Medium'};
    mn.fontSize = 13;
    mn.fills = solid('#E6EDF3');
    mn.characters = 'Lingfei';
    memInfo.appendChild(mn);
    const mr = figma.createText();
    mr.fontName = {family:'Inter', style:'Regular'};
    mr.fontSize = 11;
    mr.fills = solid('#39C5CF');
    mr.characters = 'Member';
    memInfo.appendChild(mr);
    memberCard.appendChild(memInfo);

    y += 100;

    // ── STAT CARDS ────────────────────────────────────────────

    const statLabel = figma.createText();
    statLabel.x = x; statLabel.y = y;
    statLabel.fontName = {family:'Inter', style:'Semi Bold'};
    statLabel.fontSize = 14;
    statLabel.fills = solid('#8B949E');
    statLabel.characters = 'STAT CARDS';
    y += 32;

    const stats = [
      { val:'92', label:'SEO Score',    sub:'↑ 4 pts this week', color:'#2EA043' },
      { val:'247', label:'Pages Scanned', sub:'Last: 2 hrs ago',   color:'#388BFD' },
      { val:'14', label:'Issues Found', sub:'3 critical',         color:'#F85149' },
      { val:'98%', label:'Coverage',    sub:'Sitemap sync OK',    color:'#BA24D5' },
    ];

    let sx = x;
    for (const stat of stats) {
      const card = figma.createFrame();
      card.name = `Stat Card / ${stat.label}`;
      card.x = sx; card.y = y;
      card.resize(140, 80);
      card.cornerRadius = 8;
      card.fills = solid('#161B22');
      card.strokes = [{type:'SOLID', color: hex('#21262D')}];
      card.strokeWeight = 1;
      card.paddingLeft = 16; card.paddingRight = 16;
      card.paddingTop = 14; card.paddingBottom = 14;
      card.layoutMode = 'VERTICAL';
      card.itemSpacing = 4;

      const sv = figma.createText();
      sv.fontName = {family:'Inter', style:'Bold'};
      sv.fontSize = 24;
      sv.fills = solid(stat.color);
      sv.characters = stat.val;
      card.appendChild(sv);

      const sl = figma.createText();
      sl.fontName = {family:'Inter', style:'Medium'};
      sl.fontSize = 12;
      sl.fills = solid('#E6EDF3');
      sl.characters = stat.label;
      card.appendChild(sl);

      const ss = figma.createText();
      ss.fontName = {family:'Inter', style:'Regular'};
      ss.fontSize = 11;
      ss.fills = solid('#8B949E');
      ss.characters = stat.sub;
      card.appendChild(ss);

      sx += 156;
    }
    y += 108;

    // ── MODALS ────────────────────────────────────────────────

    const modalLabel = figma.createText();
    modalLabel.x = x; modalLabel.y = y;
    modalLabel.fontName = {family:'Inter', style:'Semi Bold'};
    modalLabel.fontSize = 14;
    modalLabel.fills = solid('#8B949E');
    modalLabel.characters = 'MODAL CARDS';
    y += 32;

    const modal = figma.createFrame();
    modal.name = 'Modal / Confirm Action';
    modal.x = x; modal.y = y;
    modal.resize(400, 200);
    modal.cornerRadius = 12;
    modal.fills = solid('#161B22');
    modal.strokes = [{type:'SOLID', color: hex('#21262D')}];
    modal.strokeWeight = 1;
    modal.paddingLeft = 24; modal.paddingRight = 24;
    modal.paddingTop = 24; modal.paddingBottom = 24;
    modal.layoutMode = 'VERTICAL';
    modal.itemSpacing = 16;

    const mTitle = figma.createText();
    mTitle.fontName = {family:'Inter', style:'Semi Bold'};
    mTitle.fontSize = 16;
    mTitle.fills = solid('#E6EDF3');
    mTitle.characters = 'Confirm Action';
    modal.appendChild(mTitle);

    const mBody = figma.createText();
    mBody.fontName = {family:'Inter', style:'Regular'};
    mBody.fontSize = 13;
    mBody.fills = solid('#8B949E');
    mBody.characters = 'This will overwrite existing schema markup on this page. Are you sure you want to continue?';
    mBody.textAutoResize = 'HEIGHT';
    mBody.resize(352, mBody.height);
    modal.appendChild(mBody);

    const mActions = figma.createFrame();
    mActions.resize(352, 36);
    mActions.fills = [];
    mActions.layoutMode = 'HORIZONTAL';
    mActions.primaryAxisAlignItems = 'MAX';
    mActions.itemSpacing = 8;

    const mCancel = figma.createFrame();
    mCancel.resize(100, 36);
    mCancel.cornerRadius = 6;
    mCancel.fills = [];
    mCancel.strokes = [{type:'SOLID', color: hex('#21262D')}];
    mCancel.strokeWeight = 1;
    mCancel.layoutMode = 'HORIZONTAL';
    mCancel.primaryAxisAlignItems = 'CENTER';
    mCancel.counterAxisAlignItems = 'CENTER';
    const mcT = figma.createText();
    mcT.fontName = {family:'Inter', style:'Medium'};
    mcT.fontSize = 13;
    mcT.fills = solid('#8B949E');
    mcT.characters = 'Cancel';
    mCancel.appendChild(mcT);
    mActions.appendChild(mCancel);

    const mConfirm = figma.createFrame();
    mConfirm.resize(120, 36);
    mConfirm.cornerRadius = 6;
    mConfirm.fills = solid('#BA24D5');
    mConfirm.layoutMode = 'HORIZONTAL';
    mConfirm.primaryAxisAlignItems = 'CENTER';
    mConfirm.counterAxisAlignItems = 'CENTER';
    const mfT = figma.createText();
    mfT.fontName = {family:'Inter', style:'Medium'};
    mfT.fontSize = 13;
    mfT.fills = solid('#FFFFFF');
    mfT.characters = 'Continue';
    mConfirm.appendChild(mfT);
    mActions.appendChild(mConfirm);
    modal.appendChild(mActions);
  }

  // ─── COVER PAGE ────────────────────────────────────────────────────────────

  async function buildCoverPage() {
    setPage('Cover');
    const page = figma.currentPage;
    page.backgrounds = [{type:'SOLID', color: hex('#000000')}];
    await loadFonts();

    // Purple gradient bg rect
    const bg = figma.createRectangle();
    bg.x = 0; bg.y = 0;
    bg.resize(1440, 900);
    bg.fills = [{
      type:'GRADIENT_RADIAL',
      gradientTransform: [[1,0,0.5],[0,1,0.5]],
      gradientStops:[
        {position:0, color:{r:0.729,g:0.141,b:0.835,a:0.15}},
        {position:1, color:{r:0,g:0,b:0,a:0}},
      ]
    }];

    const t1 = figma.createText();
    t1.x = 80; t1.y = 320;
    t1.fontName = {family:'Inter', style:'Bold'};
    t1.fontSize = 64;
    t1.fills = solid('#FFFFFF');
    t1.characters = 'RankFrame';

    const t2 = figma.createText();
    t2.x = 80; t2.y = 400;
    t2.fontName = {family:'Inter', style:'Regular'};
    t2.fontSize = 24;
    t2.fills = solid('#8B949E');
    t2.characters = 'Design System';

    const t3 = figma.createText();
    t3.x = 80; t3.y = 452;
    t3.fontName = {family:'Inter', style:'Regular'};
    t3.fontSize = 16;
    t3.fills = solid('#484F58');
    t3.characters = 'Color Tokens · Typography · Spacing · Components · Plugin UI';

    const version = figma.createText();
    version.x = 80; version.y = 820;
    version.fontName = {family:'JetBrains Mono', style:'Regular'};
    version.fontSize = 12;
    version.fills = solid('#484F58');
    version.characters = 'v1.0 · 7 Seers Media · 2026';
  }

  // ─── MAIN ──────────────────────────────────────────────────────────────────

  console.log('Building RankFrame Design System...');

  setupPages();
  console.log('Pages created');

  createColorVariables();
  console.log('Color variables created');

  createSpacingVariables();
  console.log('Spacing variables created');

  createColorStyles();
  console.log('Color styles created');

  createEffectStyles();
  console.log('Effect styles created');

  await createTextStyles();
  console.log('Text styles created');

  await buildCoverPage();
  console.log('Cover page built');

  await buildColorTokensPage();
  console.log('Color tokens page built');

  await buildTypographyPage();
  console.log('Typography page built');

  await buildSpacingPage();
  console.log('Spacing + Radius page built');

  await buildBaseComponents();
  console.log('Base components built');

  await buildPluginUIComponents();
  console.log('Plugin UI components built');

  // Navigate to cover page
  setPage('Cover');
  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);

  console.log('RankFrame Design System — DONE');

})();
