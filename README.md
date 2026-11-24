[index.html](https://github.com/user-attachments/files/35332367/index.html)
# inorderwords.2bach<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>In Order Words · 2º Bach</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@500;700;800&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<style>
/* VOICE everyday learning: clear, confident, a little playful in the games
   IDEA a transit network map: every grammar unit is a station on the route to the PAU terminus
   PICTURE the live line map on the home page, stations fill in as students complete units
   COLOUR white ground, deep line blue for the header band, signal red accent, one colour per line
   TYPE Hanken Grotesk display + Source Sans 3 text
   LAYOUT laptop: title and stats across the top, full-width map beneath; phone: title, vertical line map, cards */
:root{color-scheme:light dark;--bg:light-dark(#ffffff,#0f1116);--ink:light-dark(#14161d,#eceef4);--mut:light-dark(#5b606e,#a3a8b6);--card:light-dark(#f3f4f8,#191c24);--card2:light-dark(#e8eaf1,#222631);--line:light-dark(#d9dce5,#2c303c);--blue:light-dark(#1b2a9e,#16206f);--red:#e1251b;--ok:light-dark(#0b7a3b,#41c47c);--okbg:light-dark(#e4f5ea,#12301f);--bad:light-dark(#c4161c,#ff6b6b);--badbg:light-dark(#fde8e7,#3a1517)}
:root[data-theme=light]{color-scheme:light}
:root[data-theme=dark]{color-scheme:dark}
*{box-sizing:border-box;min-width:0}
html{scroll-padding-top:80px}
body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.55 "Source Sans 3",system-ui,sans-serif;overflow-x:clip}
h1,h2,h3,h4{font-family:"Hanken Grotesk",system-ui,sans-serif;letter-spacing:-.02em;line-height:1.1;margin:0}
h1{font-size:clamp(34px,5vw,52px);font-weight:800;text-wrap:balance}
h2{font-size:clamp(24px,3vw,32px);font-weight:800}
h3{font-size:20px;font-weight:700}
h4{font-size:17px;font-weight:700;margin:18px 0 6px}
a{color:inherit}
p{margin:0 0 10px}
button,input,textarea,select{font:inherit;color:inherit}
.wrap{max-width:1240px;margin:0 auto}
.band{padding:clamp(24px,4vw,56px) max(5vw,16px)}
.lead{font-size:19px;color:var(--mut);max-width:62ch;margin-top:12px}
.small{font-size:14px;color:var(--mut)}
/* header */
header{background:var(--blue);color:#fff;position:sticky;top:0;z-index:20}
.hd{display:flex;align-items:center;gap:20px;padding:10px max(5vw,16px);max-width:1340px;margin:0 auto;flex-wrap:wrap}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none;font-family:"Hanken Grotesk";font-weight:800;font-size:19px;white-space:nowrap}
.brand small{font-weight:500;opacity:.8;font-size:14px}
nav{display:flex;gap:4px;margin-left:auto;overflow-x:auto;scrollbar-width:none}
nav a{flex:none;text-decoration:none;padding:10px 14px;border-radius:999px;font-weight:600;font-size:16px;min-height:44px;display:flex;align-items:center}
nav a:hover{background:rgba(255,255,255,.12)}
nav a.on{background:#fff;color:#1b2a9e}
@media(max-width:640px){header{position:static}.score,.exhd{top:0!important}.hd{gap:6px}nav{margin-left:0;width:100%;flex-wrap:wrap}nav a{padding:6px 12px;min-height:40px}}
/* buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:10px 20px;border-radius:999px;border:2px solid var(--ink);background:var(--ink);color:var(--bg);font-weight:700;cursor:pointer;text-decoration:none;white-space:nowrap}
.btn:hover{filter:brightness(1.15)}
.btn.ghost{background:transparent;color:var(--ink)}
.btn.red{background:var(--red);border-color:var(--red);color:#fff}
.btn:disabled{opacity:.45;cursor:default}
:focus-visible{outline:3px solid #ffb000;outline-offset:2px}
.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:16px}
/* hero + map */
.hero-top{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:32px;align-items:end}
.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.stats div{background:var(--card);border-radius:14px;padding:14px}
.stats b{display:block;font:800 clamp(26px,3vw,34px)/1 "Hanken Grotesk";white-space:nowrap}
.stats span{font-size:14px;color:var(--mut)}
@media(max-width:820px){.hero-top{grid-template-columns:minmax(0,1fr);gap:18px}}
.map{position:relative;margin-top:28px;min-height:300px}
.map svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.map text{fill:var(--ink);font-family:"Hanken Grotesk";font-size:15px;font-weight:700;paint-order:stroke;stroke:var(--bg);stroke-width:5px}
.map text.s{font-family:"Source Sans 3";font-weight:400;font-size:13px;fill:var(--mut)}
.map a circle.st{transition:r .2s}
.map a:hover circle.st,.map a:focus circle.st{r:16}
.map a:focus{outline:none}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:14px}
.card{background:var(--card);border-radius:18px;padding:22px;text-decoration:none;display:flex;flex-direction:column;gap:8px;border:2px solid transparent}
a.card:hover{border-color:var(--ink)}
.card .dot{width:34px;height:34px;border-radius:50%;border:7px solid var(--c);background:var(--bg)}
.card p{color:var(--mut);margin:0;font-size:16px}
.card .go{margin-top:auto;font-weight:700;padding-top:8px}
/* unit page */
.uband{background:var(--c);color:var(--on)}
.uband .lead{color:inherit;opacity:.85}
.meters{display:flex;gap:18px;flex-wrap:wrap;margin-top:18px}
.meter{min-width:150px;flex:1;max-width:240px}
.meter span{font-size:14px;display:flex;justify-content:space-between}
.meter i{display:block;height:8px;border-radius:9px;background:color-mix(in srgb,var(--on) 25%,transparent);margin-top:4px;overflow:hidden}
.meter i b{display:block;height:100%;background:var(--on);border-radius:9px}
.gram{display:grid;grid-template-columns:270px minmax(0,1fr);gap:32px;align-items:start}
.units{display:flex;flex-direction:column;gap:2px;position:sticky;top:84px}
.units a{display:flex;align-items:center;gap:12px;padding:8px 10px;border-radius:12px;text-decoration:none;min-height:48px}
.units a:hover{background:var(--card)}
.units a.on{background:var(--card2)}
.units i{flex:none;width:18px;height:18px;border-radius:50%;border:5px solid var(--c);background:var(--bg)}
.units a.full i{background:var(--c)}
.units span{flex:1;font-weight:600;line-height:1.2}
.units small{display:block;font-weight:400;color:var(--mut);font-size:13px}
.units em{font-style:normal;font-size:13px;color:var(--mut);white-space:nowrap}
.units a.mix{margin-top:8px;border:2px dashed var(--line);justify-content:center;font-weight:700}
@media(max-width:900px){.gram{grid-template-columns:minmax(0,1fr)}.units{position:static;flex-direction:row;overflow-x:auto;padding-bottom:6px}.units a{flex:none}.units small,.units em{display:none}}
.tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:22px;border-bottom:2px solid var(--line);padding-bottom:10px}
.tabs button{border:0;background:transparent;padding:10px 16px;border-radius:999px;font-weight:700;cursor:pointer;min-height:44px;color:var(--mut)}
.tabs button:hover{background:var(--card)}
.tabs button.on{background:var(--ink);color:var(--bg)}
.theory{max-width:820px}
.theory table{border-collapse:collapse;width:100%;margin:8px 0 14px;font-size:16px}
.theory td{border-bottom:1px solid var(--line);padding:8px 10px 8px 0;vertical-align:top}
.theory ul{padding-left:20px;margin:6px 0 12px}
.theory li{margin-bottom:6px}
.ex{background:var(--card);padding:10px 14px;border-radius:10px}
.tip{border-left:4px solid var(--red);padding:8px 14px;background:var(--card);border-radius:0 10px 10px 0}
.tw{overflow-x:auto}
/* questions */
.q{padding:16px 0;border-bottom:1px solid var(--line)}
.q>p{font-size:18px;margin-bottom:10px}
.n{display:inline-grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--card2);font-weight:700;font-size:14px;margin-right:10px;vertical-align:1px}
.blank{display:inline-block;min-width:70px;border-bottom:2px solid var(--ink);margin:0 4px}
.opts{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr));gap:8px}
.opt{min-height:48px;padding:10px 14px;border-radius:12px;border:2px solid var(--line);background:var(--bg);text-align:left;cursor:pointer;font-size:17px}
.opt:hover{border-color:var(--ink)}
.opt.ok{border-color:var(--ok);background:var(--okbg)}
.opt.bad{border-color:var(--bad);background:var(--badbg)}
.fb{margin:10px 0 0;padding:10px 14px;border-radius:10px;font-size:16px}
.fb.ok{background:var(--okbg)}
.fb.bad{background:var(--badbg)}
input.t,textarea{font-size:17px;padding:9px 12px;border-radius:10px;border:2px solid var(--line);background:var(--bg);min-height:44px}
input.t:focus,textarea:focus{border-color:var(--ink);outline:none}
input.gap{width:11em;max-width:100%;margin:2px 4px}
input.long{width:100%}
input.ok,textarea.ok{border-color:var(--ok);background:var(--okbg)}
input.bad,textarea.bad{border-color:var(--bad);background:var(--badbg)}
.sol{display:block;font-size:15px;color:var(--bad);margin-top:6px}
.orig{font-weight:600}
.ins{font-size:15px;color:var(--mut);margin-bottom:8px}
.score{position:sticky;top:64px;z-index:5;background:var(--bg);display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:10px 0;border-bottom:2px solid var(--ink);font-weight:700}
/* vocab */
.chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}
.chip{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:8px 16px;border-radius:999px;border:2px solid var(--line);background:var(--bg);cursor:pointer;font-weight:600}
.chip i{width:12px;height:12px;border-radius:50%;background:var(--c)}
.chip.on{border-color:var(--ink);background:var(--ink);color:var(--bg)}
table.vt{border-collapse:collapse;width:100%;font-size:16px}
.vt th{text-align:left;font-size:14px;color:var(--mut);font-weight:600;border-bottom:2px solid var(--ink);padding:8px 10px 8px 0}
.vt td{border-bottom:1px solid var(--line);padding:10px 10px 10px 0;vertical-align:top}
.vt td:first-child{font-weight:700;white-space:nowrap}
.vt td:last-child{font-style:italic;color:var(--mut)}
@media(max-width:700px){.vt thead{display:none}.vt tr{display:grid;padding:10px 0;border-bottom:1px solid var(--line)}.vt td{border:0;padding:2px 0;white-space:normal!important}}
.flash{perspective:1200px;max-width:640px;margin:0 auto}
.fc{position:relative;height:300px;cursor:pointer;transform-style:preserve-3d;transition:transform .5s}
.fc.flip{transform:rotateY(180deg)}
.fc>div{position:absolute;inset:0;backface-visibility:hidden;border-radius:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px;text-align:center}
.fc .front{background:var(--c);color:var(--on)}
.fc .front b{font:800 clamp(30px,6vw,46px)/1.1 "Hanken Grotesk"}
.fc .back{background:var(--card);transform:rotateY(180deg);gap:10px}
.fc .back .es{font-weight:700;font-size:20px}
/* games */
.gwrap{max-width:820px;margin:0 auto}
.gbar{height:10px;background:var(--card2);border-radius:9px;overflow:hidden;margin:12px 0 20px}
.gbar b{display:block;height:100%;background:var(--red);transition:width 1s linear}
.gq{font:700 clamp(22px,3.4vw,30px)/1.25 "Hanken Grotesk";margin:10px 0 22px;text-wrap:balance}
.tag{display:inline-block;font-size:14px;font-weight:700;padding:4px 12px;border-radius:999px;background:var(--c);color:var(--on)}
.big{font:800 clamp(44px,9vw,80px)/1 "Hanken Grotesk"}
.mem{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
@media(max-width:560px){.mem{grid-template-columns:repeat(3,minmax(0,1fr))}}
.mc{aspect-ratio:4/3;border-radius:14px;border:0;cursor:pointer;font-weight:700;font-size:16px;padding:8px;background:var(--blue);color:#fff;background-image:repeating-linear-gradient(45deg,transparent 0 10px,rgba(255,255,255,.07) 10px 20px)}
.mc.up{background:var(--card);color:var(--ink);background-image:none;outline:2px solid var(--ink)}
.mc.es.up{font-weight:400;font-style:italic}
.mc.done{background:var(--okbg);color:var(--ok);outline:0;cursor:default;background-image:none}
.word{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin:24px 0}
.word span{width:clamp(28px,6vw,44px);height:clamp(40px,8vw,56px);border-bottom:4px solid var(--ink);display:grid;place-items:center;font:800 clamp(22px,4vw,32px) "Hanken Grotesk";text-transform:uppercase}
.word span.sp{border:0;width:16px}
.keys{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.keys button{width:44px;height:48px;border-radius:10px;border:2px solid var(--line);background:var(--bg);font-weight:700;font-size:18px;cursor:pointer;text-transform:uppercase}
.keys button.hit{background:var(--okbg);border-color:var(--ok)}
.keys button.miss{background:var(--badbg);border-color:var(--bad);opacity:.6}
.lives{display:flex;align-items:center;gap:0;margin:8px 0}
.lives i{width:20px;height:20px;border-radius:50%;border:5px solid var(--red);background:var(--bg)}
.lives i.lost{border-color:var(--line)}
.lives u{width:28px;height:6px;background:var(--red)}
.lives u.lost{background:var(--line)}
.pool,.built{display:flex;flex-wrap:wrap;gap:8px;min-height:62px;padding:10px;border-radius:14px}
.built{border:2px dashed var(--line);margin-bottom:12px}
.pool button,.built button{min-height:44px;padding:8px 14px;border-radius:10px;border:2px solid var(--line);background:var(--card);font-weight:600;cursor:pointer;font-size:17px}
.built button{background:var(--bg);border-color:var(--ink)}
/* PAU */
.struct{display:flex;border-radius:14px;overflow:hidden;margin-top:24px;min-height:110px}
.struct div{padding:14px;color:#fff;display:flex;flex-direction:column;justify-content:space-between;gap:6px}
.struct b{font:800 22px "Hanken Grotesk"}
.struct span{font-size:14px;line-height:1.25}
@media(max-width:640px){.struct{flex-direction:column}.struct div{width:auto!important;flex-direction:row;align-items:center}}
details{border-bottom:1px solid var(--line);padding:4px 0}
summary{cursor:pointer;font-weight:700;padding:12px 0;min-height:44px;font-size:18px}
details ul{margin:0 0 14px;padding-left:22px}
.exhd{position:sticky;top:64px;z-index:10;background:var(--bg);border-bottom:2px solid var(--ink)}
.exhd .in{display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:10px max(5vw,16px);max-width:1340px;margin:0 auto}
.exhd h3{flex:1;min-width:200px}
.clock{font:800 24px "Hanken Grotesk";font-variant-numeric:tabular-nums;white-space:nowrap}
.clock.low{color:var(--red)}
.exam{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:40px;align-items:start}
.text{position:sticky;top:140px;max-height:calc(100vh - 160px);overflow:auto;background:var(--card);border-radius:18px;padding:24px 26px}
.text h2{margin-bottom:6px}
.text p{position:relative;padding-left:32px;font-size:17px}
.text p .pn{position:absolute;left:0;top:1px;font-weight:700;font-size:13px;color:var(--mut)}
@media(max-width:1000px){.exam{grid-template-columns:minmax(0,1fr)}.text{position:static;max-height:none}}
.qb{border-top:2px solid var(--ink);padding-top:16px;margin-bottom:34px}
.qb h3{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}
.qb h3 small{font:600 15px "Source Sans 3";color:var(--mut)}
.ins2{background:var(--card);padding:10px 14px;border-radius:10px;font-size:15px;margin:10px 0}
.seg{display:inline-flex;border:2px solid var(--line);border-radius:999px;overflow:hidden;margin:6px 0 8px}
.seg button{border:0;background:transparent;min-width:56px;min-height:42px;font-weight:700;cursor:pointer}
.seg button.on{background:var(--ink);color:var(--bg)}
textarea{width:100%;resize:vertical;line-height:1.5}
.model{background:var(--card);border-radius:10px;padding:12px 14px;margin-top:8px;font-size:16px;white-space:pre-line}
.model b{display:block;font-size:14px;color:var(--mut)}
select{min-height:44px;border-radius:10px;border:2px solid var(--line);background:var(--bg);padding:6px 10px;font-size:16px}
.rub{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px 14px;align-items:center;margin-top:12px}
.total{background:var(--ink);color:var(--bg);border-radius:18px;padding:22px;display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:12px;align-items:end}
.total div{font-size:14px}
.total b{display:block;font:800 26px "Hanken Grotesk"}
.total .t b{font-size:48px}
.wc{font-size:14px;color:var(--mut);margin-top:4px}
.wc.bad{color:var(--bad)}
.vhead{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
.uband .btn{background:var(--on);color:var(--c);border-color:var(--on)}
.uband .btn.ghost{background:transparent;color:var(--on)}
.wfg{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,330px),1fr));gap:4px 28px}
.wfr{display:grid;grid-template-columns:minmax(0,9em) auto minmax(0,1fr);gap:10px;align-items:center;padding:8px 0;border-bottom:1px solid var(--line)}
.wfr em{font-style:normal;font-size:13px;color:var(--mut);white-space:nowrap}
.wfr .sol{grid-column:1/-1;margin:0}
.wfr:has(em) input{min-width:0}
.wfr:not(:has(em)){grid-template-columns:minmax(0,11em) minmax(0,1fr)}
.syn{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,15em);gap:10px;align-items:center}
.syn select{width:100%}
select.ok{border-color:var(--ok);background:var(--okbg)}
select.bad{border-color:var(--bad);background:var(--badbg)}
u.uw{text-decoration-thickness:2px;text-underline-offset:3px;font-weight:600}
u.uw sup{font-size:11px;margin-left:1px;color:var(--mut);font-weight:700}
.mcl{display:grid;gap:6px}
.mco{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border:2px solid var(--line);border-radius:12px;cursor:pointer}
.mco:hover{border-color:var(--ink)}
.mco input{margin-top:5px;flex:none}
.mco.ok{border-color:var(--ok);background:var(--okbg)}
.mco.bad{border-color:var(--bad);background:var(--badbg)}
.rev summary{font-size:15px;padding:6px 0;min-height:0}
@media(max-width:560px){.wfr,.wfr:not(:has(em)){grid-template-columns:minmax(0,1fr) auto}.wfr input{grid-column:1/-1}.syn{grid-template-columns:minmax(0,1fr)}}
.topics-img{display:block;width:min(100%,520px);border-radius:14px;margin:18px 0 0;cursor:zoom-in}
.gloss{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr));gap:0 28px}
.gl{display:flex;justify-content:space-between;gap:14px;padding:9px 0;border-bottom:1px solid var(--line)}
.gl b{font-weight:700}.gl span{color:var(--mut);text-align:right}
.spk{font-size:18px;padding-left:22px}.spk li{margin-bottom:8px}
.rq{font-weight:700;font-size:18px}
.grp{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:12px}
.grp div{background:var(--card);border-radius:12px;padding:12px 14px}.grp p{margin:4px 0 0;color:var(--mut)}
.gfig{margin:20px 0 0}.gfig img,.wgal img{width:100%;border-radius:14px;cursor:zoom-in;display:block;border:1px solid var(--line)}
figcaption{font-size:14px;color:var(--mut);margin-top:6px}
.wgal{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:14px;margin-top:22px;align-items:start}
.tplrow{display:grid;grid-template-columns:190px minmax(0,1fr);gap:12px;align-items:center;margin-bottom:10px}
.tplrow>b{border-left:5px solid var(--c);padding-left:10px}
@media(max-width:700px){.tplrow{grid-template-columns:minmax(0,1fr)}}
.tpl{background:var(--card);border-radius:18px;padding:clamp(18px,3vw,30px);margin-top:18px}
.tplh h3{font-size:24px;margin:10px 0 6px}.tq{font-size:18px;font-style:italic}
.tplb{background:var(--bg);border-radius:12px;padding:18px 20px;margin:14px 0;line-height:2.1;font-size:17px}
.tplb p{margin:0 0 14px}
.blank-in{display:inline;min-width:6em;padding:2px 8px;border-bottom:2px solid var(--red);background:color-mix(in srgb,var(--red) 8%,transparent);border-radius:4px;outline:none}
.blank-in:empty::before{content:"…";color:var(--mut)}
.blank-in:focus{background:color-mix(in srgb,var(--red) 16%,transparent)}
.conn td:first-child{white-space:nowrap}.conn td:last-child{font-style:normal;color:inherit}
.cklist{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:10px 30px}
.cklist h4{margin:14px 0 6px}.cklist label{display:flex;gap:10px;align-items:flex-start;padding:6px 0;cursor:pointer}
.cklist input{width:20px;height:20px;flex:none;margin-top:2px}
.lb{position:fixed;inset:0;z-index:100;background:rgba(10,12,18,.88);display:flex;align-items:center;justify-content:center;padding:16px;overflow:auto}
.lb img{max-width:100%;max-height:100%;border-radius:10px;background:#fff}
.lbx{position:fixed;top:12px;right:16px;width:48px;height:48px;border-radius:50%;border:0;background:#fff;color:#14161d;font-size:30px;cursor:pointer}
b.bw{font-weight:800;text-decoration:none;background:color-mix(in srgb,var(--red) 12%,transparent);padding:0 3px;border-radius:3px}
footer{border-top:1px solid var(--line);margin-top:40px}
footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:14px;color:var(--mut)}

/* ===== v2 look: brighter, softer, more depth ===== */
:root{--bg:light-dark(#f6f5fb,#0d0f17);--card:light-dark(#ffffff,#171a26);--card2:light-dark(#eef0f8,#21263a);--line:light-dark(#e3e4ee,#2a2f44);--ink:light-dark(#151733,#eceef8);--mut:light-dark(#5d6180,#a4a9c4);--blue:#2433c7;--indigo:#1a1f6e;--red:#ff3b30;--sun:#ffb21e;--sh:0 1px 2px rgba(21,23,51,.06),0 8px 24px -8px rgba(21,23,51,.14);--sh2:0 2px 4px rgba(21,23,51,.06),0 22px 44px -14px rgba(36,51,199,.32)}
body{background:var(--bg);background-image:radial-gradient(light-dark(rgba(36,51,199,.07),rgba(255,255,255,.04)) 1px,transparent 1.2px);background-size:22px 22px}
h1,h2,h3,.big,.clock,.stats b,.total b,.struct b,.fc .front b,.gq{font-family:"Bricolage Grotesque","Hanken Grotesk",system-ui,sans-serif}
h1{letter-spacing:-.035em}
header{background:linear-gradient(100deg,var(--indigo),var(--blue) 55%,#4b3fe0);box-shadow:0 6px 24px -10px rgba(26,31,110,.6)}
.brand{font-family:"Bricolage Grotesque","Hanken Grotesk";font-size:21px}
nav a{font-size:15.5px;transition:background .2s}
nav a.on{background:#fff;color:var(--blue);box-shadow:0 4px 14px -4px rgba(0,0,0,.35)}
/* hero */
.hero{position:relative;overflow:hidden;background:linear-gradient(135deg,var(--indigo) 0%,var(--blue) 48%,#6a3fe0 100%);color:#fff;border-radius:0 0 36px 36px;padding-bottom:clamp(30px,4vw,54px)}
.hero::before,.hero::after{content:"";position:absolute;border-radius:50%;filter:blur(2px);pointer-events:none}
.hero::before{width:420px;height:420px;right:-120px;top:-160px;background:radial-gradient(circle,rgba(255,178,30,.55),transparent 65%)}
.hero::after{width:520px;height:520px;left:-200px;bottom:-300px;background:radial-gradient(circle,rgba(255,59,48,.45),transparent 65%)}
.hero .wrap{position:relative;z-index:1}
.hero h1 em{font-style:normal;background:linear-gradient(90deg,var(--sun),#ff7a45);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero .lead{color:rgba(255,255,255,.82)}
.hero .stats div{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);backdrop-filter:blur(8px);border-radius:18px}
.hero .stats span{color:rgba(255,255,255,.78)}
.hero .map{background:var(--card);border-radius:26px;padding:10px;box-shadow:0 30px 60px -24px rgba(0,0,0,.45);color:var(--ink)}
.hero .map text{stroke:var(--card)}
.kick{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);padding:6px 14px;border-radius:999px;font-weight:700;font-size:14px;margin-bottom:16px}
.kick i{width:8px;height:8px;border-radius:50%;background:var(--sun);box-shadow:0 0 0 4px rgba(255,178,30,.3)}
/* cards */
.card{background:var(--card);border:1px solid var(--line);box-shadow:var(--sh);border-radius:22px;position:relative;overflow:hidden;transition:transform .25s,box-shadow .25s}
.card::before{content:"";position:absolute;inset:0 0 auto 0;height:5px;background:var(--c)}
a.card:hover{transform:translateY(-4px);box-shadow:var(--sh2);border-color:color-mix(in srgb,var(--c) 45%,var(--line))}
.card .dot{width:44px;height:44px;border:0;border-radius:14px;background:color-mix(in srgb,var(--c) 16%,transparent);position:relative}
.card .dot::after{content:"";position:absolute;inset:13px;border-radius:50%;border:5px solid var(--c)}
.card .go{display:inline-flex;align-self:flex-start;padding:6px 14px;border-radius:999px;background:color-mix(in srgb,var(--c) 12%,transparent);font-size:15px}
/* buttons & chips */
.btn{border-radius:14px;box-shadow:var(--sh);transition:transform .15s,box-shadow .2s,filter .2s}
.btn:hover{transform:translateY(-1px);filter:none;box-shadow:var(--sh2)}
.btn.red{background:linear-gradient(135deg,#ff3b30,#ff7a45);border-color:transparent}
.btn.ghost{box-shadow:none;border-color:var(--line);background:var(--card)}
.chip{border:1px solid var(--line);background:var(--card);box-shadow:var(--sh);transition:transform .15s}
.chip:hover{transform:translateY(-1px)}
.chip.on{background:linear-gradient(135deg,var(--blue),#6a3fe0);border-color:transparent;color:#fff}
.tabs{border-bottom:0;background:var(--card);padding:6px;border-radius:18px;box-shadow:var(--sh);display:inline-flex;border:1px solid var(--line)}
.tabs button.on{background:linear-gradient(135deg,var(--blue),#6a3fe0);color:#fff;box-shadow:0 6px 16px -6px rgba(36,51,199,.6)}
.n{background:linear-gradient(135deg,var(--blue),#6a3fe0);color:#fff}
/* surfaces */
.stats div,.ex,.tip,.ins2,.model,.grp div,.tpl,.text{box-shadow:var(--sh)}
#app>section.band:first-child:not(.hero):not(.uband){background:linear-gradient(180deg,color-mix(in srgb,var(--blue) 9%,transparent),transparent);}
.stats div{background:var(--card);border:1px solid var(--line)}
.text{background:var(--card);border:1px solid var(--line);border-radius:24px}
.tip{border-left-color:var(--sun);background:var(--card)}
.ins2{background:color-mix(in srgb,var(--blue) 7%,var(--card));border:1px solid color-mix(in srgb,var(--blue) 18%,transparent)}
.qb{border-top:0;background:var(--card);border:1px solid var(--line);border-radius:22px;padding:20px 22px;box-shadow:var(--sh)}
.qb h3{padding-bottom:6px}
.opt,.mco,input.t,textarea,select,.keys button,.pool button{border-width:1.5px;border-radius:14px;background:var(--card)}
.opt:hover,.mco:hover{border-color:var(--blue);background:color-mix(in srgb,var(--blue) 5%,var(--card))}
input.t:focus,textarea:focus,select:focus{border-color:var(--blue);box-shadow:0 0 0 4px color-mix(in srgb,var(--blue) 18%,transparent)}
.struct{border-radius:22px;box-shadow:var(--sh2)}
.struct div{background-image:linear-gradient(160deg,rgba(255,255,255,.18),transparent 60%)}
.exhd,.score{background:color-mix(in srgb,var(--bg) 85%,transparent);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.total{background:linear-gradient(135deg,var(--indigo),var(--blue) 60%,#6a3fe0);color:#fff;border-radius:24px;box-shadow:var(--sh2)}
.uband{background:linear-gradient(135deg,var(--c),color-mix(in srgb,var(--c) 70%,#1a1f6e));border-radius:0 0 32px 32px}
.units a.on{background:var(--card);box-shadow:var(--sh)}
.gbar b{background:linear-gradient(90deg,var(--sun),var(--red))}
.mc{background:linear-gradient(135deg,var(--blue),#6a3fe0);border-radius:16px;box-shadow:var(--sh)}
.fc>div{box-shadow:var(--sh2)}
.fc .front{background:linear-gradient(135deg,var(--c),color-mix(in srgb,var(--c) 65%,#1a1f6e))}
details{border-bottom:1px solid var(--line)}
b.bw{background:color-mix(in srgb,var(--sun) 30%,transparent)}
footer{background:var(--card);border-top:1px solid var(--line)}
@keyframes rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
#app>section{animation:rise .45s ease both}
#app>section:nth-child(2){animation-delay:.06s}#app>section:nth-child(3){animation-delay:.12s}

/* ===== logo header + language switch ===== */
header{background:color-mix(in srgb,var(--card) 88%,transparent);backdrop-filter:blur(14px);color:var(--ink);box-shadow:0 1px 0 var(--line),0 8px 24px -14px rgba(21,23,51,.25)}
.hd{padding:8px max(4vw,16px);gap:16px}
.brand{gap:12px}
.brand img{height:54px;width:auto;background:#fbf8f6;border-radius:12px;padding:3px 8px;display:block}
.brand .bt{display:flex;flex-direction:column;font:700 15px/1.15 "Bricolage Grotesque","Hanken Grotesk";white-space:normal}
.brand .bt small{font:400 12px/1.3 "Source Sans 3";color:var(--mut);opacity:1;max-width:190px}
nav a:hover{background:var(--card2)}
nav a.on{background:linear-gradient(135deg,var(--blue),#6a3fe0);color:#fff}
.langsw{display:inline-flex;align-items:center;gap:2px;background:var(--card2);border-radius:999px;padding:3px;font-size:13px}
.langsw span{padding:0 8px 0 10px;color:var(--mut);font-weight:600}
.langsw button{border:0;background:transparent;border-radius:999px;padding:6px 10px;font-weight:700;cursor:pointer;min-height:34px;font-size:13px}
.langsw button.on{background:var(--card);color:var(--blue);box-shadow:var(--sh)}
@media(max-width:1180px){.brand .bt{display:none}}
@media(max-width:640px){.brand img{height:44px}.langsw{order:3}}
.es2{display:block;font-size:.92em;color:var(--mut);font-style:italic;margin-top:3px}
.lead .es2{color:inherit;opacity:.75}
.hero .es2{color:rgba(255,255,255,.75)}
.ltag{display:inline-block;margin:14px 0 6px;padding:3px 10px;border-radius:999px;background:var(--card2);font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--mut)}
.by{margin-top:14px;font-weight:600;color:rgba(255,255,255,.9);font-size:15px}
.fwrap{display:flex;align-items:center;gap:24px;flex-wrap:wrap;font-size:15px;color:var(--ink)}
.flogo{height:96px;width:auto;background:#fbf8f6;border-radius:16px;padding:8px 14px}

/* ===== infinite practice ===== */
.icard{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:clamp(18px,3vw,28px);box-shadow:var(--sh)}
.ihead{display:flex;gap:8px;align-items:center;margin-bottom:10px}
.kind{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--blue);background:color-mix(in srgb,var(--blue) 10%,transparent);padding:4px 10px;border-radius:999px}
.ctx{font-style:italic;color:var(--mut);margin:0 0 4px}
.iq{font:600 clamp(19px,2.4vw,23px)/1.4 "Source Sans 3";margin:4px 0 14px}
.iq.wrong{text-decoration:underline wavy color-mix(in srgb,var(--red) 55%,transparent);text-underline-offset:6px}
.exp{margin:6px 0 0;font-size:15px}
.cks{list-style:none;padding:0;margin:8px 0}.cks li{padding:2px 0}.cks .cky{color:var(--ok)}.cks .ckn{color:var(--bad)}
.frame .sol{display:inline;margin:0 0 0 6px;font-size:14px}
.frame{border-radius:18px;padding:18px 20px;margin:4px 0 12px;border:1px solid var(--line);background:var(--bg);line-height:1.9}
.frame select{min-height:36px;padding:2px 6px;font-size:15px;margin:0 2px}
.frh{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:8px;padding-bottom:8px;border-bottom:1px dashed var(--line)}
.frk{font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:3px 9px;border-radius:999px;background:var(--ink);color:var(--bg)}
.fri{color:var(--mut);font-style:italic;margin:0 0 6px}
.frs{margin:0 0 6px}
.fr-chat .frs{background:color-mix(in srgb,#25d366 14%,var(--card));border-radius:16px 16px 16px 4px;padding:6px 12px;width:fit-content;max-width:100%}
.fr-chat .frs:nth-of-type(even){margin-left:auto;background:color-mix(in srgb,var(--blue) 12%,var(--card));border-radius:16px 16px 4px 16px}
.fr-news{font-family:Georgia,"Times New Roman",serif}.fr-news .frh b{font-size:20px;letter-spacing:.02em}
.fr-notes,.fr-diary{background:light-dark(#fff9e6,#2a2616);background-image:repeating-linear-gradient(transparent 0 33px,light-dark(#e9dfbf,#3d3720) 33px 34px)}
.fr-email .frh{border-bottom-style:solid}
.fr-essay{border-left:5px solid var(--blue)}
.fr-blog{border-top:5px solid var(--sun)}
.fr-forum .frs{border-left:3px solid var(--line);padding-left:10px}
header .hd{min-height:70px}
.score,.exhd{top:78px}.units{top:96px}.text{top:156px}
@media(max-width:640px){.score,.exhd{top:0}}

/* ===== Writing Lab ===== */
.wlab{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:28px;align-items:start}
@media(max-width:980px){.wlab{grid-template-columns:minmax(0,1fr)}}
.wside{position:sticky;top:96px}
.wlab textarea{font-size:17px;line-height:1.6}
#wcount{font:600 15px "Source Sans 3";color:var(--mut)}#wcount.bad{color:var(--bad)}
.crit{display:grid;grid-template-columns:1fr auto;gap:0 10px;padding:8px 0;border-bottom:1px solid var(--line)}.crit .small{grid-column:1}.crit em{grid-row:1/3;grid-column:2;font:800 20px "Bricolage Grotesque","Hanken Grotesk";font-style:normal;align-self:center}.crit.tot{border:0}
.hist{padding-left:20px;margin:0}.hist li{margin-bottom:6px}
.wscore{display:grid;grid-template-columns:200px minmax(0,1fr);gap:20px;align-items:center;background:linear-gradient(135deg,var(--indigo),var(--blue) 60%,#6a3fe0);color:#fff;border-radius:20px;padding:20px}
@media(max-width:640px){.wscore{grid-template-columns:1fr}}
.big3{display:flex;flex-direction:column}.big3 .small{color:rgba(255,255,255,.8)}.big3 b{font:800 56px/1 "Bricolage Grotesque","Hanken Grotesk"}.big3 b small{font-size:22px;opacity:.8}
.wbar{margin:6px 0}.wbar span{display:flex;justify-content:space-between;font-size:14px}.wbar i{display:block;height:8px;border-radius:9px;background:rgba(255,255,255,.22);overflow:hidden;margin-top:3px}.wbar i b{display:block;height:100%;border-radius:9px}
.wcm{padding:8px 0;border-bottom:1px solid var(--line)}.wcm ul{margin:4px 0 0;padding-left:20px}.wcm p{margin:4px 0 0}.wcm.ok{color:var(--ok)}
.wtext{background:var(--bg);border:1px solid var(--line);border-radius:14px;padding:14px 16px;line-height:1.9}
.wtext p{margin:0 0 10px}
mark.wm{background:color-mix(in srgb,var(--red) 18%,transparent);color:inherit;border-bottom:2px solid var(--red);border-radius:3px;padding:0 2px;cursor:help}
mark.wm.vocabulary{background:color-mix(in srgb,var(--sun) 30%,transparent);border-color:#d99100}
mark.wm.strategic,mark.wm.punctuation,mark.wm.spelling{background:color-mix(in srgb,var(--blue) 14%,transparent);border-color:var(--blue)}
mark.wm sup{font-size:10px;font-weight:800;margin-left:1px}
.werr{padding-left:22px}.werr li{margin-bottom:8px}
.wtag{display:inline-block;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;padding:2px 8px;border-radius:999px;background:color-mix(in srgb,var(--red) 15%,transparent)}
.wtag.vocabulary{background:color-mix(in srgb,var(--sun) 30%,transparent)}.wtag.strategic,.wtag.punctuation,.wtag.spelling{background:color-mix(in srgb,var(--blue) 15%,transparent)}
.wgood li{color:var(--ok)}.wimp li{margin-bottom:6px}
.labcta{display:flex;gap:18px;align-items:center;text-decoration:none;background:linear-gradient(135deg,#6950a1,#2433c7);color:#fff;border-radius:22px;padding:20px 24px;box-shadow:var(--sh2);transition:transform .2s}
.labcta:hover{transform:translateY(-3px)}.labcta>span{font-size:40px}.labcta b{font:800 22px "Bricolage Grotesque","Hanken Grotesk"}.labcta p{margin:4px 0 0;opacity:.88}.labcta em{margin-left:auto;font-style:normal;font-weight:800;background:#fff;color:#2433c7;padding:10px 18px;border-radius:999px;white-space:nowrap}
@media(max-width:640px){.labcta{flex-wrap:wrap}.labcta em{margin-left:0}}

/* ===== PASTEL THEME ===== */
:root{--bg:light-dark(#fbf8f6,#17181f);--card:light-dark(#ffffff,#20222c);--card2:light-dark(#f4eff1,#2a2c38);--line:light-dark(#ece4e4,#353847);--ink:light-dark(#2d3250,#eceaf2);--mut:light-dark(#6f7289,#aeb0c2);
 --blue:light-dark(#5f6fc2,#a9b4f0);--indigo:#8e9be0;--red:light-dark(#d9776a,#f2a497);--sun:#f4c56f;--sage:#a9c4b2;--lav:light-dark(#e4e3fa,#353a5c);--rose:light-dark(#f9dfe2,#4a3040);--peach:light-dark(#fdeedd,#4a3d2c);
 --ok:light-dark(#3f8a60,#8fd3a9);--okbg:light-dark(#e6f3eb,#1f3328);--bad:light-dark(#c45a4d,#f2a497);--badbg:light-dark(#fbe8e5,#3d2523);
 --sh:0 1px 2px rgba(45,50,80,.05),0 8px 24px -10px rgba(45,50,80,.14);--sh2:0 2px 4px rgba(45,50,80,.05),0 20px 40px -16px rgba(95,111,194,.32)}
body{background-image:radial-gradient(light-dark(rgba(95,111,194,.08),rgba(255,255,255,.04)) 1px,transparent 1.2px)}
header{background:light-dark(rgba(255,255,255,.86),rgba(32,34,44,.88))}
nav a.on{background:var(--lav);color:var(--ink);box-shadow:none}
.langsw button.on{color:var(--ink)}
.hero{background:linear-gradient(135deg,#e6e4fb 0%,#f8e0e6 52%,#fdecd8 100%);color:#2d3250}
.hero::before{background:radial-gradient(circle,rgba(169,196,178,.55),transparent 65%)}
.hero::after{background:radial-gradient(circle,rgba(200,190,245,.6),transparent 65%)}
.hero h1 em{background:linear-gradient(90deg,#df7b6e,#e7a052);-webkit-background-clip:text;background-clip:text}
.hero .lead,.hero .es2{color:#555a75}.hero .by{color:#2d3250}
.kick{background:rgba(255,255,255,.65);border-color:rgba(45,50,80,.12);color:#2d3250}.kick i{background:#e7a052;box-shadow:0 0 0 4px rgba(231,160,82,.25)}
.hero .stats div{background:rgba(255,255,255,.6);border-color:rgba(255,255,255,.9);color:#2d3250}.hero .stats span{color:#6f7289}
.hero .map{box-shadow:0 24px 50px -26px rgba(95,111,194,.45)}
.btn{background:var(--lav);border-color:transparent;color:var(--ink)}
.btn:hover{background:color-mix(in srgb,var(--lav) 80%,var(--blue))}
.btn.red{background:linear-gradient(135deg,#f6b4a8,#f9d2a3);border-color:transparent;color:#3b2c2a}
.btn.ghost{background:var(--card);color:var(--ink);border:1.5px solid var(--line)}
.uband .btn{background:rgba(255,255,255,.7);color:#2d3250}
.chip.on,.tabs button.on,.n{background:linear-gradient(135deg,#d9dcfa,#f5dbe6);color:#2d3250;box-shadow:none}
.kind{color:var(--ink);background:var(--lav)}
.mc{background:var(--lav);color:var(--ink);background-image:none}
.total,.wscore{background:linear-gradient(135deg,#e1e3fb,#f8dfe5 60%,#fdecd8);color:#2d3250}
.big3 .small,.total .small{color:#6f7289}.wbar i{background:rgba(45,50,80,.12)}
.labcta{background:linear-gradient(135deg,#e4dcf8,#f9dfe3 60%,#fdebd6);color:#2d3250}.labcta em{background:#2d3250;color:#fff}
.struct div{color:#2d3250}
.uband{background:linear-gradient(135deg,var(--c),color-mix(in srgb,var(--c) 55%,#ffffff))}
.fc .front{background:linear-gradient(135deg,var(--c),color-mix(in srgb,var(--c) 55%,#ffffff));color:#2d3250}
#app>section.band:first-child:not(.hero):not(.uband){background:linear-gradient(180deg,#eeedfb,transparent)}
.ins2{background:var(--lav);border-color:transparent}
.tip{border-left-color:#f4c56f}
b.bw{background:#fbe6b6;color:#2d3250}
.frk{background:var(--lav);color:var(--ink)}
.opt.ok,.mco.ok{background:var(--okbg);border-color:var(--ok)}.opt.bad,.mco.bad{background:var(--badbg);border-color:var(--bad)}
.gbar b{background:linear-gradient(90deg,#f4c56f,#f2a497)}
footer{background:light-dark(#f6f0ee,#1c1d25)}
.brand,nav a,a.card,.units a{color:var(--ink)}

/* ===== downloads & worksheets ===== */
.dlbar{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 18px}
figcaption a.dl{font-weight:700;color:var(--blue);text-decoration:none;white-space:nowrap}
.wslv{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
@media(max-width:700px){.wslv{grid-template-columns:1fr}}
.wsb{text-align:left;border:1.5px solid var(--line);background:var(--card);border-radius:18px;padding:14px 16px;cursor:pointer;display:flex;flex-direction:column;gap:4px;font:inherit;color:var(--ink);box-shadow:var(--sh)}
.wsb b{font:800 18px "Bricolage Grotesque","Hanken Grotesk"}.wsb span{font-size:14px;color:var(--mut)}
.wsb.on{border-color:transparent;box-shadow:var(--sh2)}
.wsb.lvl-basic.on{background:#e3f1e8}.wsb.lvl-consolidate.on{background:#fdebd3}.wsb.lvl-challenge.on{background:#fbe0dc}
.wsb.on,.wsb.on span{color:#2d3250}
.paper{background:#fff;color:#2d3250;border-radius:8px;padding:34px 40px;box-shadow:0 2px 6px rgba(45,50,80,.08),0 20px 40px -20px rgba(45,50,80,.3);font-family:"Source Sans 3",Arial,sans-serif;max-width:800px}
.ph{display:flex;gap:18px;align-items:center;background:#f6f2fb;border-radius:10px;padding:10px 14px}.ph img{height:62px}.ph small{color:#8a8da3;font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:11px}.ph h2{margin:2px 0 4px;font-size:26px}
.lvl{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;padding:2px 9px;border-radius:4px}.lvl-basic.lvl{background:#7eb991}.lvl-consolidate.lvl{background:#f4b46f}.lvl-challenge.lvl{background:#e2867a}
.paper .nm{color:#55596f;margin:14px 0}
.paper h3{display:flex;gap:10px;align-items:center;font-size:17px;margin:22px 0 8px}.paper h3 span{display:inline-grid;place-items:center;width:24px;height:24px;border-radius:5px;background:#dfe2fb;font-size:13px;flex:none}
.paper ol{padding-left:24px;margin:0}.paper li{margin-bottom:10px;line-height:1.5}
.popts{color:#55596f;font-size:14px}
.pline{border-bottom:1px solid #b8bccb;height:24px;margin-top:2px}
.plines{height:190px;background:repeating-linear-gradient(transparent 0 27px,#b8bccb 27px 28px)}
.ptext{background:#faf8f5;border-left:4px solid #dfe2fb;padding:10px 14px;border-radius:6px}.ptext p{margin:6px 0}
.pkey{color:#3f8a60;font-weight:700;font-size:14px;margin-top:2px}
.pfoot{margin:26px 0 0;font-size:12px;color:#8a8da3;text-align:center}

/* ===== lexis games ===== */
.bubbles{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin:22px 0 8px}
.bub{min-width:88px;min-height:56px;padding:10px 18px;border-radius:999px;border:0;font:800 19px "Bricolage Grotesque","Hanken Grotesk";cursor:pointer;color:#2d3250;background:var(--lav);box-shadow:var(--sh);transition:transform .12s}
.bub:nth-child(3n+2){background:#f9dfe2}.bub:nth-child(3n){background:#dcefe3}
.bub:hover{transform:translateY(-3px) scale(1.04)}.bub.ok{background:var(--okbg);outline:3px solid var(--ok)}.bub.bad{background:var(--badbg);outline:3px solid var(--bad)}
.gctx{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:18px 20px;margin-top:18px;font-size:19px;line-height:1.55;box-shadow:var(--sh)}
.gctx p{margin:0}.bub1,.bub2{padding:8px 14px;border-radius:16px 16px 16px 4px;background:var(--lav);width:fit-content;max-width:100%}.bub2{margin:8px 0 0 auto!important;border-radius:16px 16px 4px 16px;background:#f9dfe2;color:#2d3250}.bub1{color:#2d3250}
b.idm{background:#fbe6b6;padding:0 4px;border-radius:4px;color:#2d3250}

/* ===== extra games ===== */
.opts.col{grid-template-columns:1fr}
.duelhd{display:flex;justify-content:space-between;align-items:center;gap:10px}.duelhd span{padding:8px 14px;border-radius:12px;font-weight:700;color:#2d3250}.duelhd .vs{background:none;color:var(--mut)}
.turn{margin:16px 0 8px;padding:10px 16px;border-radius:14px;font-weight:800;color:#2d3250;text-align:center}
.esc{background:linear-gradient(160deg,#2d3250,#4a4f78);color:#f4f1ff;border-radius:22px;padding:22px}.esc .gq,.esc .ctx{color:#f4f1ff}.esc .opt{color:#2d3250}
.eschd{display:flex;justify-content:space-between;font-weight:800;gap:10px;flex-wrap:wrap}.eschd span:last-child{font-family:monospace;font-size:20px;letter-spacing:.15em;color:#f4c56f}
.lock{display:flex;gap:8px;margin:14px 0}.lock i{width:34px;height:10px;border-radius:9px;background:rgba(255,255,255,.2)}.lock i.on{background:#a9e0bd}
.esc .fb{color:#2d3250}.esc input{color:#2d3250}
.tline{position:relative;height:150px;margin:26px 0 10px;overflow-x:auto}.tbar{position:absolute;left:3%;right:3%;top:30px;height:6px;border-radius:6px;background:linear-gradient(90deg,#c5c0ec,#f9dfe2,#fdecd8)}
.tst{position:absolute;top:18px;transform:translateX(-50%);width:13%;min-width:80px;border:0;background:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;font:inherit;color:var(--ink)}
.tst i{width:30px;height:30px;border-radius:50%;background:var(--card);border:4px solid #8e9be0;box-shadow:var(--sh)}.tst span{font-size:12.5px;line-height:1.2;text-align:center}
.tst:hover i{transform:scale(1.15)}.tst.ok i{background:var(--ok);border-color:var(--ok)}.tst.bad i{background:var(--bad);border-color:var(--bad)}
.nowmark{position:absolute;top:0;transform:translateX(-50%);font-size:11px;font-weight:800;color:var(--red);font-style:normal}
.chain p{margin:6px 0;padding:8px 12px;background:var(--okbg);border-radius:12px}
.wfwrap{display:grid;grid-template-columns:1fr 120px;gap:20px;align-items:end}.wfgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.wfgrid label{display:flex;flex-direction:column;gap:4px;font-weight:700;font-size:14px}.wfgrid .sol{color:var(--ok);font-weight:700}
.tower{display:flex;flex-direction:column-reverse;gap:3px;min-height:260px;justify-content:flex-start;align-items:center;border-bottom:4px solid var(--line)}.tower i{width:90px;height:16px;border-radius:4px;background:linear-gradient(90deg,#f6c8c3,#fbd7a8);animation:rise .3s}
.tower i:nth-child(3n){background:linear-gradient(90deg,#c5c0ec,#cfe3f6)}.tower i:nth-child(3n+1){background:linear-gradient(90deg,#c8e6cf,#d4ecdc)}
@media(max-width:640px){.wfwrap{grid-template-columns:1fr}.wfgrid{grid-template-columns:1fr}.tower{min-height:80px;flex-direction:row;flex-wrap:wrap}.tower i{width:30px}}
.snf{position:relative;height:340px;border-radius:20px;background:linear-gradient(180deg,#eef0fb,#fbf3ee);overflow:hidden;border:1px solid var(--line)}
.snc{position:absolute;left:-30%;padding:10px 18px;border-radius:999px;border:0;background:#fff;color:#2d3250;font:800 17px "Bricolage Grotesque","Hanken Grotesk";box-shadow:var(--sh);cursor:crosshair;animation:fly linear infinite;white-space:nowrap}
.snc.hit{background:var(--okbg);outline:3px solid var(--ok);animation-play-state:paused}.snc.miss{background:var(--badbg);outline:3px solid var(--bad)}
@keyframes fly{from{left:-30%}to{left:105%}}
.bclue{margin:16px 0;padding:16px 20px;border-radius:18px;background:var(--lav);font-size:20px;font-weight:700;text-align:center;color:#2d3250}
.bmsg{text-align:center;font:800 22px "Bricolage Grotesque","Hanken Grotesk";color:var(--red);margin:6px 0}
.bcard{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:14px 0}.bcell{min-height:70px;border-radius:14px;border:1.5px solid var(--line);background:var(--card);font:700 15px "Source Sans 3";color:var(--ink);cursor:pointer;padding:6px}
.bcell.miss{background:#fbe0dc;border-color:#e2867a;color:#2d3250;text-decoration:line-through}.bcell.on{background:#c8e6cf;border-color:#7eb991;color:#2d3250;text-decoration:line-through}.shake{animation:shake .35s}
@keyframes shake{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
.pzdone,.pzpool{display:flex;flex-direction:column;gap:8px;margin:12px 0}.pzpool{padding-top:12px;border-top:2px dashed var(--line)}
.pz{text-align:left;padding:12px 14px;border-radius:14px;border:1.5px solid var(--line);background:var(--card);font:inherit;color:var(--ink);cursor:pointer;line-height:1.45}.pz b{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--blue)}
.pzdone .pz{background:var(--lav);border-color:transparent}.pz.ok{background:var(--okbg)!important}.pz.bad{background:var(--badbg)!important}
.rpaper{background:#fff;color:#2d3250;border-radius:10px;padding:22px 26px;line-height:2;font-size:17px;box-shadow:var(--sh)}
.rp{cursor:pointer;border-radius:4px;padding:1px 1px}.rp:hover{background:#fdecd8}.rp.no{background:#eee;color:#999;text-decoration:line-through}
.rp.e.found s,.rp.e.missed s{color:#c45a4d}.rp.e.found b{color:#3f8a60}.rp.e.missed{background:#fbe0dc}.rp.e.found{background:#e3f1e8}
@media(prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
</style>
</head>
<body>
<header><div class="hd">
 <a class="brand" href="#inicio" aria-label="In Order Words · home"><img src="img/logo-sm.png" alt="In Order Words · Teach, create, inspire" width="120" height="67"><span class="bt">2nd Bachillerato<small>by Yaiza Tormo Coronado &amp; Alberto López Calatayud</small></span></a>
 <nav id="nav">
  <a href="#inicio" data-r="inicio">Home</a>
  <a href="#gramatica" data-r="gramatica">Grammar</a>
  <a href="#vocabulario" data-r="vocabulario">Vocabulary</a>
  <a href="#writing" data-r="writing">Writing</a>
  <a href="#juegos" data-r="juegos">Games</a>
  <a href="#pau" data-r="pau">PAU exams</a>
 </nav>
 <div class="langsw" id="langsw" role="group" aria-label="Language of the explanations"><span>Help in</span><button data-l="en">EN</button><button data-l="es">ES</button><button data-l="both">EN + ES</button></div>
</div></header>
<main id="app"></main>
<footer><div class="wrap band fwrap">
 <img src="img/logo.png" alt="In Order Words" width="200" height="112" class="flogo">
 <div><b>In Order Words · English for 2nd Bachillerato</b><br>by Yaiza Tormo Coronado &amp; Alberto López Calatayud<br><span class="small">Your progress is saved only in this browser.</span></div>
</div></footer>
<script src="data/grammar.js"></script>
<script src="data/grammar-en.js"></script>
<script src="data/gen.js"></script>
<script src="data/pdfmini.js"></script>
<script src="data/vocab.js"></script>
<script src="data/exams.js"></script>
<script src="data/exams-class.js"></script>
<script src="data/exams-pau.js"></script>
<script src="data/writing.js"></script>
<script src="data/lex.js"></script>
<script src="data/games2.js"></script>
<script src="data/wlab.js"></script>
<script src="app.js"></script>
</body>
</html>
