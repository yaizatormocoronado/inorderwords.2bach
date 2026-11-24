{
const G=(window.GRAMMAR||[]).map(u=>{const g=(window.GRAMMAR_EN||{})[u.id];if(g)u.mc.forEach((m,i)=>{m.een=g.e[i]});return u}),V=window.VOCAB||[],X=window.EXAMS||[],GM=window.GAMES||{order:[],judge:[]};
const app=document.getElementById('app');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const store={get(k,d){try{const v=localStorage.getItem('iow-'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('iow-'+k,JSON.stringify(v))}catch(e){}}};
let LANG=store.get('lang','en');
const GE=window.GRAMMAR_EN||{};
const tx=(en,es)=>LANG==='es'?es:LANG==='both'?`${en}<span class="es2">${es}</span>`:en;
const tp=(en,es)=>LANG==='es'?es:LANG==='both'?`${en} · ${es}`:en;
const uSub=u=>{const en=(GE[u.id]||{}).sub||u.name;return LANG==='en'?en:LANG==='es'?u.es:en+' · '+u.es};
const uTheory=u=>{const en=(GE[u.id]||{}).theory||u.theory;return LANG==='en'?en:LANG==='es'?u.theory:`<div class="ltag">English</div>${en}<div class="ltag">Español</div>${u.theory}`};
const expl=m=>m.een?(LANG==='en'?esc(m.een):LANG==='es'?esc(m.e):esc(m.een)+'<span class="es2">'+esc(m.e)+'</span>'):esc(m.e||'');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(a,n)=>shuffle(a).slice(0,n);
const onColor=h=>{if(!/^#/.test(h))return'#fff';const n=parseInt(h.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;return(r*299+g*587+b*114)/1000>150?'#2d3250':'#ffffff'};
let timers=[],ro=null;
const clearAll=()=>{timers.forEach(t=>clearInterval(t));timers=[];if(ro){ro.disconnect();ro=null}document.onkeydown=null};

/* ---------- answer matching ---------- */
const PR=/\b(it|that|he|she|there|what|who|here|this)'s\b/g,PT=/\b(it|that|he|she|there|what|who|here|this)'s\b/;
function base(s){
 return String(s).toLowerCase().replace(/[’‘`´]/g,"'").replace(/[“”]/g,'"')
 .replace(/\bwon't\b/g,'will not').replace(/\bcan't\b/g,'cannot').replace(/\bshan't\b/g,'shall not').replace(/n't\b/g,' not').replace(/\bcan not\b/g,'cannot')
 .replace(/'m\b/g,' am').replace(/'re\b/g,' are').replace(/'ve\b/g,' have').replace(/'ll\b/g,' will');
}
function variants(s){
 let out=[base(s)];
 if(out.some(x=>/'d\b/.test(x)))out=out.flatMap(x=>[x.replace(/'d\b/g,' would'),x.replace(/'d\b/g,' had')]);
 if(out.some(x=>PT.test(x)))out=out.flatMap(x=>[x.replace(PR,'$1 is'),x.replace(PR,'$1 has')]);
 return out.map(x=>x.replace(/["“”.,!?;:()¡¿\-]/g,' ').replace(/\s+/g,' ').trim());
}
function match(user,answers){
 if(!String(user).trim())return false;
 const u=variants(user);
 return answers.some(a=>variants(a).some(v=>u.includes(v)));
}
const nf=v=>(+v).toLocaleString('en-GB',{maximumFractionDigits:2});
const words=s=>String(s||'').trim().split(/\s+/).filter(Boolean).length;
const hl=q=>esc(q).replace(/___/g,'<span class="blank"></span>');

/* ---------- progress ---------- */
const prog=()=>store.get('prog',{});
function setBest(id,mode,pct){const p=prog();p[id]=p[id]||{};p[id][mode]=Math.max(p[id][mode]||0,pct);store.set('prog',p)}
function unitPct(id){const p=prog()[id]||{};return Math.round(((p.mc||0)+(p.gap||0)+(p.tr||0))/3)}
const examBest=()=>store.get('exams',{});

/* ---------- router ---------- */
function route(keep){
 clearAll();const sy=window.scrollY;
 const h=(location.hash||'#inicio').slice(1)||'inicio';
 const top=h.startsWith('juego')?'juegos':h.startsWith('test')?'gramatica':h.split('-')[0];
 document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('on',a.dataset.r===top));
 if(h==='gramatica')grammar(G[0].id);
 else if(h.startsWith('gramatica-'))grammar(h.slice(10));
 else if(h==='test-mixto')mixed();
 else if(h==='vocabulario')vocab();
 else if(h==='juegos')games();
 else if(h.startsWith('juego-'))game(h.slice(6));
 else if(h==='writing')writing();
 else if(h==='writing-lab')writingLab();
 else if(h==='pau')pau();
 else if(h.startsWith('pau-'))exam(h.slice(4));
 else home();
 window.scrollTo(0,keep?sy:0);
}

/* ---------- home ---------- */
function home(){
 const eb=store.get('examsCV',{}),vals=Object.values(eb);
 const avg=G.length?Math.round(G.reduce((s,u)=>s+unitPct(u.id),0)/G.length):0;
 app.innerHTML=`<section class="band hero"><div class="wrap">
 <div class="hero-top"><div><span class="kick"><i></i>English · 2nd Bachillerato · PAU 2026</span><h1>Your route to the <em>PAU</em></h1>
 <p class="lead">${tx('Grammar, vocabulary, games and exams in the format of the PAU English exam. Each station is a unit: practise and it will fill in on the map.','Gramática, vocabulario, juegos y exámenes con el formato de la PAU de Inglés. Cada estación es una unidad: practica y se irá completando en el mapa.')}</p><p class="by">by Yaiza Tormo Coronado &amp; Alberto López Calatayud</p></div>
 <div class="stats"><div><b>${avg}%</b><span>of the grammar</span></div><div><b>${vals.length}/${X.length+(window.EXAMS_PAU||[]).length}</b><span>PAU exams done</span></div><div><b>${vals.length?nf(Math.max(...vals)):'–'}</b><span>best PAU mark</span></div></div></div>
 <div class="map" id="map" role="navigation" aria-label="Unit map"></div>
 </div></section>
 <section class="band" style="padding-top:0"><div class="wrap cards">
  <a class="card" href="#pau" style="--c:#9096e0"><span class="dot"></span><h3>PAU exams</h3><p>${tx(`${X.length} mock exams and ${(window.EXAMS_PAU||[]).length} real Valencian PAU exams adapted to 2026, with a timer and marking.`,`${X.length} modelos y ${(window.EXAMS_PAU||[]).length} exámenes reales de la PAU valenciana adaptados a 2026, con cronómetro y corrección.`)}</p><span class="go">Take an exam →</span></a>
  <a class="card" href="#juegos" style="--c:#ef908a"><span class="dot"></span><h3>Games</h3><p>${tx('Beat the clock, pairs, guess the word, sentence builder and spot the mistake.','Contrarreloj, parejas, adivina la palabra, ordena la frase y caza el error.')}</p><span class="go">Play →</span></a>
  <a class="card" href="#vocabulario" style="--c:#7eb991"><span class="dot"></span><h3>Vocabulary</h3><p>${tx(`${V.length-1} class glossaries with practice, Vocabulary Lab, flashcards, tests, speaking and PDFs.`,`${V.length-1} glosarios de clase con práctica, Vocabulary Lab, tarjetas, test, speaking y PDF.`)}</p><span class="go">Revise →</span></a>
  <a class="card" href="#writing" style="--c:#b3a5cc"><span class="dot"></span><h3>Writing</h3><p>${tx('Writing Lab with an approximate PAU mark and feedback, infographics, 15 fill-in templates, linkers and a checklist.','Writing Lab con nota PAU aproximada y feedback, infografías, 15 plantillas, conectores y checklist.')}</p><span class="go">Write →</span></a>
 </div></section>`;
 const s=document.getElementById('map');
 ro=new ResizeObserver(()=>drawMap(s));ro.observe(s);
}
function split2(t){if(t.length<15)return[t];const m=t.length/2;let best=-1;for(let i=0;i<t.length;i++)if(t[i]===' '&&(best<0||Math.abs(i-m)<Math.abs(best-m)))best=i;return best<0?[t]:[t.slice(0,best),t.slice(best+1)]}
function drawMap(s){
 const W=s.clientWidth;if(!W)return;
 const st=[...G.map(u=>({name:u.name,sub:uSub(u),c:u.color,p:unitPct(u.id),h:'#gramatica-'+u.id})),{name:'PAU',sub:'Exams',c:'var(--ink)',p:-1,h:'#pau',end:1}];
 let pts,H,seg='',lab='';
 if(W<640){
  const step=64;H=st.length*step;
  pts=st.map((p,i)=>({x:20,y:24+i*step}));
  for(let i=0;i<st.length-1;i++)seg+=`<path d="M20 ${pts[i].y} V${pts[i+1].y}" stroke="${st[i].c}" stroke-width="9" fill="none"/>`;
  st.forEach((p,i)=>{lab+=`<text x="48" y="${pts[i].y+2}">${esc(p.name)}</text><text class="s" x="48" y="${pts[i].y+20}">${esc(p.sub)}${p.p>=0?` · ${p.p}%`:''}</text>`});
 }else{
  const cols=W>=1080?6:4,mx=84,rh=158,rows=Math.ceil(st.length/cols),cw=(W-2*mx)/(cols-1);H=rows*rh;
  pts=st.map((p,i)=>{const r=Math.floor(i/cols),c=i%cols;return{x:mx+(r%2?cols-1-c:c)*cw,y:34+r*rh,r}});
  for(let i=0;i<st.length-1;i++){const a=pts[i],b=pts[i+1];seg+=a.r===b.r?`<path d="M${a.x} ${a.y} H${b.x}" stroke="${st[i].c}" stroke-width="9" fill="none" stroke-linecap="round"/>`:`<path d="M${a.x} ${a.y} A${rh/2} ${rh/2} 0 0 ${a.r%2?0:1} ${b.x} ${b.y}" stroke="${st[i].c}" stroke-width="9" fill="none"/>`}
  st.forEach((p,i)=>{const L=split2(p.name);let y=pts[i].y+42;L.forEach(t=>{lab+=`<text x="${pts[i].x}" y="${y}" text-anchor="middle">${esc(t)}</text>`;y+=18});lab+=`<text class="s" x="${pts[i].x}" y="${y}" text-anchor="middle">${p.p>=0?(p.p?p.p+'% done':'Start'):esc(p.sub)}</text>`});
 }
 s.style.height=H+'px';
 const dots=st.map((p,i)=>{const{x,y}=pts[i];const full=p.p>=80;return`<a href="${p.h}" aria-label="${esc(p.name)}">${p.end?`<circle class="st" cx="${x}" cy="${y}" r="15" fill="var(--ink)"/><circle cx="${x}" cy="${y}" r="6" fill="var(--bg)"/>`:`<circle class="st" cx="${x}" cy="${y}" r="12" fill="${full?p.c:'var(--bg)'}" stroke="${p.c}" stroke-width="6"/>${full?`<path d="M${x-5} ${y} l4 4 l7 -8" stroke="${onColor(p.c)}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`:''}`}</a>`}).join('');
 s.innerHTML=`<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">${seg}${lab}${dots}</svg>`;
}

/* ---------- grammar ---------- */
let gTab='teoria';
const GIMG={tenses:[['g-tenses','Perfect tenses']],modals:[['g-modals','Modal verbs']],'modal-perfects':[['g-modals','Modal verbs']],passive:[['g-passive','Passive & causative']],causative:[['g-passive','Passive & causative']],reported:[['g-reported','Reported speech']],conditionals:[['g-conditionals','Conditionals, if only & I wish']],wishes:[['g-conditionals','Conditionals, if only & I wish'],['g-rather','Would rather & prefer']],relatives:[['g-relatives','Relative clauses']],gerunds:[['g-gerunds','Gerunds & infinitives']],linkers:[['g-linkers','Although & despite']]};
function grammar(id){
 const u=G.find(x=>x.id===id)||G[0];
 const p=prog()[u.id]||{};
 const m=(l,v)=>`<div class="meter"><span>${l}<b>${v||0}%</b></span><i><b style="width:${v||0}%"></b></i></div>`;
 app.innerHTML=`<section class="band uband" style="--c:${u.color};--on:${onColor(u.color)}"><div class="wrap"><h1>${esc(u.name)}</h1><p class="lead">${esc(uSub(u))}</p>
 <div class="meters">${m('Choose',p.mc)}${m('Complete',p.gap)}${m('Transform',p.tr)}<div class="meter"><span>∞ ${tp('solved','resueltos')}<b>${infCount()[u.id]||0}</b></span></div></div></div></section>
 <div class="band"><div class="wrap gram">
 <aside class="units">${G.map(x=>`<a href="#gramatica-${x.id}" class="${x.id===u.id?'on':''} ${unitPct(x.id)>=80?'full':''}" style="--c:${x.color}"><i></i><span>${esc(x.name)}<small>${esc(uSub(x))}</small></span><em>${unitPct(x.id)}%</em></a>`).join('')}<a class="mix" href="#test-mixto">∞ Mixed practice</a></aside>
 <div><div class="tabs" id="tabs">${[['teoria','Theory'],['inf','∞ Practice'],['ws','📝 Worksheets'],['mc','Choose'],['gap','Complete'],['tr','Transform']].map(([k,l])=>`<button data-t="${k}" class="${gTab===k?'on':''}">${l}</button>`).join('')}</div><div id="pane"></div></div>
 </div></div>`;
 const pane=document.getElementById('pane');
 const show=()=>{document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.t===gTab));
  if(gTab==='teoria'){pane.innerHTML=`<div class="dlbar"><a class="btn dl" href="grammar-${u.id}.pdf" target="_blank" rel="noopener" data-dl="grammar-${u.id}.pdf"><span>📄 ${tp('Theory PDF (English + Spanish)','PDF de teoría (inglés + español)')}</span></a><a class="btn ghost dl" href="grammar-all.pdf" target="_blank" rel="noopener" data-dl="grammar-all.pdf"><span>📚 ${tp('All units','Todas las unidades')}</span></a><a class="btn ghost dl" href="grammar-infographics-all.pdf" target="_blank" rel="noopener" data-dl="grammar-infographics-all.pdf"><span>🖼 ${tp('All grammar infographics','Todas las infografías')}</span></a><button class="btn ghost" id="goWs">📝 Worksheets</button></div><div class="theory"><div class="tw">${uTheory(u)}</div>${(GIMG[u.id]||[]).map(f=>`<figure class="gfig"><img src="${f[0]}.jpg" alt="Class infographic: ${esc(f[1])}" data-zoom loading="lazy"><figcaption>Class infographic · ${esc(f[1])} · ${tp('tap to enlarge','toca para ampliar')} · <a class="dl" href="infographic-${f[0].replace(/^g-/,'')}.pdf" target="_blank" rel="noopener" data-dl="infographic-${f[0].replace(/^g-/,'')}.pdf"><span>⬇ ${tp('Download infographic (PDF)','Descargar infografía (PDF)')}</span></a></figcaption></figure>`).join('')}<div class="row"><button class="btn" id="goPr">Practise →</button></div></div>`;document.getElementById('goPr').onclick=()=>{gTab='inf';show()};document.getElementById('goWs').onclick=()=>{gTab='ws';show()};bindDownloads(pane)}
  else if(gTab==='ws')paneWS(pane,u);
  else if(gTab==='inf')paneInf(pane,[u.id]);
  else if(gTab==='mc')paneMC(pane,u.mc,r=>{setBest(u.id,'mc',r)});
  else if(gTab==='gap')paneGap(pane,u.gap,r=>setBest(u.id,'gap',r));
  else paneTr(pane,u.tr,r=>setBest(u.id,'tr',r));};
 document.getElementById('tabs').onclick=e=>{const b=e.target.closest('button');if(b){gTab=b.dataset.t;show()}};
 show();
}

/* ---------- worksheet generator (3 levels, printable PDF) ---------- */
let wsLevel='basic';
const WSL={basic:['Basic','Básico','Recognise the structure: choose the correct form.','Reconocer la estructura: elegir la forma correcta.'],consolidate:['Consolidate','Afianzar','Use it accurately: choose, correct mistakes and rewrite.','Usarla con precisión: elegir, corregir errores y transformar.'],challenge:['Challenge','Challenge','PAU level: transformations, error correction, a real-life text and a writing task.','Nivel PAU: transformaciones, corrección de errores, un texto real y una tarea de escritura.']};
function wsItems(uid,type,n,f){const out=[],seen=new Set();let t=0;while(out.length<n&&t<n*30){t++;let it=window.GEN.make(uid,type);if(f)it=f(it);const k=it.q||it.title,k2=it.a&&it.a.join?it.a[0]:'';if(!seen.has(k)&&!(k2&&seen.has(k2))){seen.add(k);if(k2)seen.add(k2);out.push(it)}}return out}
function buildWS(u,level){
 const two=it=>{const bad=it.o.filter((_,j)=>j!==it.a);const o=Math.random()<.5?[it.o[it.a],bad[0]]:[bad[0],it.o[it.a]];return{...it,o,a:o.indexOf(it.o[it.a])}};
 const S=[];
 if(level==='basic'){S.push({k:'two',t:'Circle the correct option.',items:wsItems(u.id,'mc',8,two)});S.push({k:'mc',t:'Choose the correct answer: a, b, c or d.',items:wsItems(u.id,'mc',6)});S.push({k:'err',t:'Each sentence has one mistake. Write the correct sentence.',items:wsItems(u.id,'err',3)})}
 else if(level==='consolidate'){S.push({k:'mc',t:'Choose the correct answer: a, b, c or d.',items:wsItems(u.id,'mc',6)});S.push({k:'err',t:'Each sentence has one mistake. Write the correct sentence.',items:wsItems(u.id,'err',6)});S.push({k:'tr',t:'Rewrite the sentences so that they mean the same as the first one.',items:wsItems(u.id,'tr',5)})}
 else{S.push({k:'tr',t:'PAU-style transformations: rewrite the sentences without changing the meaning.',items:wsItems(u.id,'tr',7)});S.push({k:'err',t:'Find and correct the mistake in each sentence.',items:wsItems(u.id,'err',5)});S.push({k:'text',t:'Real-life text: complete the gaps with the correct option.',items:wsItems(u.id,'text',1)});S.push({k:'prod',t:'Writing task.',items:wsItems(u.id,'prod',1)})}
 return S;
}
const wsQ=q=>q.replace('___','__________');
function wsHTML(u,level,S,key){
 const L=WSL[level];let h=`<div class="paper"><div class="ph"><img src="logo-sm.png" alt=""><div><small>In Order Words · Grammar worksheet</small><h2>${esc(u.name)}</h2><span class="lvl lvl-${level}">${L[0]}</span></div></div><p class="nm">Name: ____________________ &nbsp; Class: ______ &nbsp; Date: __________</p>`;
 S.forEach((sec,si)=>{h+=`<h3><span>${si+1}</span>${esc(sec.t)}</h3>`;
  if(sec.k==='text'){const it=sec.items[0];h+=`<div class="ptext"><b>${esc(it.title)}</b><p><i>${esc(it.intro)}</i></p>${it.items.map((x,i)=>`<p>${esc(wsQ(x.q)).replace('__________',`<b>(${i+1})</b> __________`)} <span class="popts">(${x.o.map(esc).join(' / ')})</span></p>`).join('')}${it.outro?`<p><i>${esc(it.outro)}</i></p>`:''}</div>`;if(key)h+=`<p class="pkey">${it.items.map((x,i)=>`(${i+1}) ${esc(x.o[x.a])}`).join(' · ')}</p>`;return}
  if(sec.k==='prod'){const it=sec.items[0];h+=`<p>${esc(it.task)}</p><div class="plines"></div>`;if(key)h+=`<p class="pkey">Model: ${esc(it.model)}</p>`;return}
  h+='<ol>'+sec.items.map(it=>{let x='';
   if(sec.k==='two')x=`${esc(wsQ(it.q)).replace('__________',`<b>( ${esc(it.o[0])} / ${esc(it.o[1])} )</b>`)}`;
   else if(sec.k==='mc')x=`${esc(wsQ(it.q))}<br><span class="popts">${it.o.map((o,j)=>`${'abcd'[j]}) ${esc(o)}`).join('&nbsp;&nbsp;&nbsp; ')}</span>`;
   else if(sec.k==='err')x=`${esc(it.q)}<div class="pline"></div>`;
   else if(sec.k==='tr')x=`${esc(it.q)}<br><span class="popts">${it.s?esc(it.s)+' …':'('+esc(it.k.toUpperCase())+')'}</span><div class="pline"></div>`;
   if(key)x+=`<div class="pkey">${sec.k==='two'||sec.k==='mc'?esc(it.o[it.a]):esc(it.a[0])}</div>`;
   return`<li>${x}</li>`}).join('')+'</ol>'});
 return h+`<p class="pfoot">In Order Words · by Yaiza Tormo Coronado &amp; Alberto López Calatayud</p></div>`;
}
function wsPDF(u,level,S){
 const D=window.MiniPDF.Doc(),L=WSL[level],M=D.M,PW=D.PW;let pn=0;
 D.onPage=n=>{pn=n;D.text('In Order Words · by Yaiza Tormo Coronado & Alberto López Calatayud',M,26,8,'F1','#8a8da3');D.text('Page '+n,PW-M-30,26,8,'F1','#8a8da3')};
 D.page();
 D.rect(M,D.y-70,PW-2*M,76,'#f6f2fb');const lh=D.logo(M+10,D.y-64,112);
 D.text('IN ORDER WORDS · GRAMMAR WORKSHEET',M+140,D.y-18,8.5,'F2','#8a8da3');D.text(u.name,M+140,D.y-42,22,'F2','#2d3250');
 const lc={basic:'#7eb991',consolidate:'#f4b46f',challenge:'#e2867a'}[level];D.rect(M+140,D.y-64,width(L[0])+16,15,lc);D.text(L[0].toUpperCase(),M+148,D.y-60,8.5,'F2','#ffffff');
 D.y-=92;D.text('Name: ______________________________   Class: ________   Date: ______________',M,D.y,10,'F1','#55596f');D.y-=10;
 const sec=(i,t)=>{D.need(70);D.y-=26;D.rect(M,D.y-5,18,18,'#dfe2fb');D.text(String(i),M+5.5,D.y,11,'F2','#2d3250');const ls=D.wrap(t,11.5,true,PW-2*M-26);ls.forEach((l,k)=>{if(k)D.y-=15;D.text(l,M+26,D.y,11.5,'F2','#2d3250')});D.space(6)};
 S.forEach((s,si)=>{sec(si+1,s.t);
  if(s.k==='text'){const it=s.items[0];D.space(4);D.para(it.title,{bold:true,size:11});D.para(it.intro,{italic:true,size:10.5,color:'#55596f'});it.items.forEach((x,i)=>{D.para(wsQ(x.q).replace('__________',`(${i+1}) __________`)+'   ('+x.o.join(' / ')+')',{size:10.5,after:2})});if(it.outro)D.para(it.outro,{italic:true,size:10.5,color:'#55596f'});return}
  if(s.k==='prod'){const it=s.items[0];D.para(it.task,{size:10.5});D.answerLine(M,8);return}
  s.items.forEach((it,i)=>{const n=(i+1)+'.';
   if(s.k==='two'){D.numbered(n,wsQ(it.q).replace('__________','( '+it.o[0]+' / '+it.o[1]+' )'))}
   else if(s.k==='mc'){D.numbered(n,wsQ(it.q));D.para(it.o.map((o,j)=>'abcd'[j]+') '+o).join('      '),{x:M+18,size:10,color:'#55596f'});D.space(3)}
   else if(s.k==='err'){D.numbered(n,it.q);D.answerLine(M+18,1);D.space(2)}
   else{D.numbered(n,it.q);D.para(it.s?it.s+' ...':'Use the word: '+it.k.toUpperCase(),{x:M+18,size:10,italic:true,color:'#5f6fc2'});D.answerLine(M+18,1);D.space(2)}})});
 D.page();D.text('Answer key',M,D.y-14,18,'F2','#2d3250');D.text(u.name+' · '+L[0],M,D.y-32,10,'F1','#8a8da3');D.y-=46;
 S.forEach((s,si)=>{D.para((si+1)+'. '+s.t,{bold:true,size:10.5,after:2});
  if(s.k==='text'){D.para(s.items[0].items.map((x,i)=>`(${i+1}) ${x.o[x.a]}`).join('   '),{size:10,x:M+12});return}
  if(s.k==='prod'){D.para('Model answer: '+s.items[0].model,{size:10,x:M+12,italic:true});return}
  s.items.forEach((it,i)=>D.para(`${i+1}. ${s.k==='two'||s.k==='mc'?it.o[it.a]:it.a[0]}`,{size:10,x:M+12}));D.space(6)});
 return D.build();
 function width(t){return window.MiniPDF.width(t.toUpperCase(),8.5,true)}
}
function paneWS(pane,u){
 let S=buildWS(u,wsLevel),key=false;pane.onclick=null;pane.onkeydown=null;
 const draw=()=>{pane.innerHTML=`<div class="wslv">${Object.entries(WSL).map(([k,L])=>`<button class="wsb ${k===wsLevel?'on':''} lvl-${k}" data-l="${k}"><b>${L[0]}</b><span>${tx(L[2],L[3])}</span></button>`).join('')}</div>
  <div class="row" style="margin:14px 0"><button class="btn" id="wsnew">🔄 ${tp('New worksheet','Nueva ficha')}</button><button class="btn red" id="wspdf">⬇ ${tp('Download PDF','Descargar PDF')}</button><label class="small" style="display:flex;gap:6px;align-items:center"><input type="checkbox" id="wskey" ${key?'checked':''}> ${tp('Show answers on screen','Ver soluciones en pantalla')}</label><span class="small" id="wsmsg"></span></div>
  <p class="small">${tx('Every worksheet is different. The PDF includes the answer key on the last page, so you can print a new one as many times as you need.','Cada ficha es diferente. El PDF incluye las soluciones en la última página, así que puedes imprimir una nueva tantas veces como necesites.')}</p>
  ${wsHTML(u,wsLevel,S,key)}`;
  pane.querySelectorAll('.wsb').forEach(b=>b.onclick=()=>{wsLevel=b.dataset.l;S=buildWS(u,wsLevel);draw()});
  document.getElementById('wsnew').onclick=()=>{S=buildWS(u,wsLevel);draw()};
  document.getElementById('wskey').onchange=e=>{key=e.target.checked;draw()};
  document.getElementById('wspdf').onclick=async()=>{const msg=document.getElementById('wsmsg');msg.textContent='Preparing…';
   const name=`worksheet-${u.id}-${wsLevel}.pdf`;
   try{const bytes=wsPDF(u,wsLevel,S),blob=new Blob([bytes],{type:'application/pdf'});
    if(!DL){try{DL=await window.claude.use('downloads')}catch(e){DL=null}}
    if(DL){await DL.save({filename:name,data:blob})}else{const url=URL.createObjectURL(blob),l=document.createElement('a');l.href=url;l.download=name;document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(url),4000)}
    msg.textContent='Downloaded ✔'}
   catch(e){msg.textContent=e&&e.code==='declined'?'':e&&e.code==='rate_limited'?'Wait a moment and try again':'Download failed'}
   setTimeout(()=>{msg.textContent=''},3000)};
 };
 draw();
}

function paneMC(pane,items,done){
 let ans=0,ok=0;pane.onkeydown=null;
 const draw=()=>{ans=0;ok=0;
 pane.innerHTML=`<div class="score"><span>Choose the correct option</span><span id="sc">0 / ${items.length}</span></div>`+items.map((m,i)=>`<div class="q" data-i="${i}">${m.u?`<span class="tag" style="--c:${m.u.color};--on:${onColor(m.u.color)}">${esc(m.u.name)}</span>`:''}<p><span class="n">${i+1}</span>${hl(m.q)}</p><div class="opts">${m.o.map((o,j)=>`<button class="opt" data-j="${j}">${esc(o)}</button>`).join('')}</div><p class="fb" hidden></p></div>`).join('')+`<div class="row"><button class="btn ghost" id="again">Try again</button></div>`;
 document.getElementById('again').onclick=draw;};
 pane.onclick=e=>{const b=e.target.closest('.opt');if(!b)return;const q=b.closest('.q');if(q.dataset.done)return;q.dataset.done=1;
  const m=items[+q.dataset.i],j=+b.dataset.j,good=j===m.a;ans++;if(good)ok++;
  b.classList.add(good?'ok':'bad');if(!good)q.querySelectorAll('.opt')[m.a].classList.add('ok');
  const f=q.querySelector('.fb');f.hidden=false;f.className='fb '+(good?'ok':'bad');f.innerHTML=(good?'<b>Correct.</b> ':`<b>Answer: ${esc(m.o[m.a])}.</b> `)+expl(m);
  document.getElementById('sc').textContent=`${ok} / ${items.length}`+(ans===items.length?` · ${Math.round(ok/items.length*100)}%`:'');
  if(ans===items.length)done(Math.round(ok/items.length*100));};
 draw();
}
function paneGap(pane,items,done){
 pane.onclick=null;
 pane.innerHTML=`<div class="score"><span>Fill in the gaps</span><span id="sc">${items.length} sentences</span></div>`+items.map((g,i)=>{const[a,b]=g.q.split('___');return`<div class="q"><p><span class="n">${i+1}</span>${esc(a)}<input class="t gap" id="g${i}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Gap ${i+1}">${esc(b||'')}<span class="sol" id="gs${i}" hidden></span></p></div>`}).join('')+`<div class="row"><button class="btn" id="chk">Check</button><button class="btn ghost" id="rst">Clear</button></div>`;
 document.getElementById('chk').onclick=()=>{let ok=0;items.forEach((g,i)=>{const el=document.getElementById('g'+i),s=document.getElementById('gs'+i),good=match(el.value,g.a);if(good)ok++;el.className='t gap '+(good?'ok':'bad');s.hidden=good;s.textContent='Answer: '+g.a.join(' / ')});const pct=Math.round(ok/items.length*100);document.getElementById('sc').textContent=`${ok} / ${items.length} · ${pct}%`;done(pct)};
 document.getElementById('rst').onclick=()=>paneGap(pane,items,done);
 pane.onkeydown=e=>{if(e.key==='Enter'&&e.target.matches('input')){const n=document.getElementById('g'+(+e.target.id.slice(1)+1));if(n)n.focus();else document.getElementById('chk').click()}};
}
function paneTr(pane,items,done){
 pane.onclick=null;pane.onkeydown=null;
 pane.innerHTML=`<div class="score"><span>Rewrite without changing the meaning</span><span id="sc">${items.length} sentences</span></div>`+items.map((t,i)=>`<div class="q"><p class="orig"><span class="n">${i+1}</span>${esc(t.o)}</p><p class="ins">${t.s?`Begin with: <b>${esc(t.s)}</b>`:`Use the word: <b>${esc(t.k)}</b>`}</p><input class="t long" id="t${i}" value="${esc(t.s?t.s+' ':'')}" autocomplete="off" spellcheck="false" aria-label="Sentence ${i+1}"><span class="sol" id="ts${i}" hidden></span></div>`).join('')+`<div class="row"><button class="btn" id="chk">Check</button><button class="btn ghost" id="rst">Clear</button></div><p class="small" style="margin-top:14px">${tx('The most common forms are accepted, with or without contractions. If your sentence is different and you think it is correct, ask your teacher.','Se aceptan las formas más habituales, con o sin contracciones. Si tu frase es distinta y crees que es correcta, consúltalo con tu profesor/a.')}</p>`;
 document.getElementById('chk').onclick=()=>{let ok=0;items.forEach((t,i)=>{const el=document.getElementById('t'+i),s=document.getElementById('ts'+i),good=match(el.value,t.a);if(good)ok++;el.className='t long '+(good?'ok':'bad');s.hidden=false;s.style.color=good?'var(--ok)':'';const alt=t.a.find(x=>!match(x,[el.value]));s.textContent=good?(alt?'Correct. Another option: '+alt:'Correct.'):'Model answer: '+t.a[0]});const pct=Math.round(ok/items.length*100);document.getElementById('sc').textContent=`${ok} / ${items.length} · ${pct}%`;done(pct)};
 document.getElementById('rst').onclick=()=>paneTr(pane,items,done);
}

/* ---------- infinite competency practice ---------- */
let infType='all';
const INFT=[['all','Mix'],['mc','In context'],['tr','Rewrite'],['err','Fix the mistake'],['text','Real-life texts'],['prod','Your turn']];
const FRAMEN={email:'Email',chat:'Chat',news:'News',notes:'Notes',forum:'Forum',diary:'Diary',blog:'Blog',essay:'Essay'};
function infCount(){return store.get('inf',{})}
function paneInf(pane,units){
 const GN=window.GEN;if(!GN){pane.innerHTML='<p>Practice generator not available.</p>';return}
 units=units.filter(u=>GN.has(u));let it=null,uid=null,done=false,n=0,ok=0,streak=0;
 const tagU=id=>{const u=G.find(x=>x.id===id);return units.length>1&&u?`<span class="tag" style="--c:${u.color};--on:${onColor(u.color)}">${esc(u.name)}</span> `:''};
 const ex=e=>e?`<p class="exp">${tx(esc(e[0]),esc(e[1]))}</p>`:'';
 const hlq=q=>esc(q).replace('___','<span class="blank"></span>');
 const solved=good=>{n++;if(good){ok++;streak++;const c=infCount();c[uid]=(c[uid]||0)+1;store.set('inf',c)}else streak=0;
  const st=document.getElementById('infst');if(st)st.innerHTML=`<span>✔ ${ok} / ${n}</span><span>🔥 ${streak}</span>`};
 const next=()=>{uid=R0(units);it=GN.make(uid,infType);done=false;draw()};
 function draw(){
  let body='';
  if(it.t==='mc')body=`${it.ctx?`<p class="ctx">${esc(it.ctx)}</p>`:''}<p class="iq">${hlq(it.q)}</p><div class="opts" id="io">${it.o.map((o,j)=>`<button class="opt" data-j="${j}">${esc(o)}</button>`).join('')}</div><div id="ifb"></div>`;
  else if(it.t==='tr')body=`<p class="ins">${tx('Rewrite the sentence so that it means the same.','Reescribe la frase sin cambiar el significado.')}</p><p class="iq">${esc(it.q)}</p><p class="ins">${it.s?`Begin with: <b>${esc(it.s)}</b>`:`Use the word: <b>${esc(it.k)}</b>`}</p><input class="t long" id="ii" autocomplete="off" spellcheck="false" value="${esc(it.s?it.s+' ':'')}" aria-label="Your answer"><div id="ifb"></div>`;
  else if(it.t==='err')body=`${it.ctx?`<p class="ctx">${esc(it.ctx)}</p>`:''}<p class="ins">${tx('There is one grammar mistake in this sentence. Write the corrected sentence.','Hay un error gramatical en esta frase. Escribe la frase corregida.')}</p><p class="iq wrong">${esc(it.q)}</p><input class="t long" id="ii" autocomplete="off" spellcheck="false" value="${esc(it.q)}" aria-label="Corrected sentence"><div id="ifb"></div>`;
  else if(it.t==='text')body=`<div class="frame fr-${it.frame}"><div class="frh"><span class="frk">${FRAMEN[it.frame]||''}</span><b>${esc(it.title)}</b></div><p class="fri">${esc(it.intro)}</p>${it.items.map((x,i)=>`<p class="frs">${x.ctx&&!/^(Breaking news|Coming soon|Right now|Official notice|Contrast|Cause|Purpose|Result|Combine the ideas|A warning|A bad day|Non-defining clause|Comment on a whole sentence|Contrast between two ideas|Verbs that change meaning)$/.test(x.ctx)?esc(x.ctx)+' ':''}${esc(x.q).replace('___',`<select data-ti="${i}" aria-label="Gap ${i+1}"><option value="">…</option>${x.o.map((o,j)=>`<option value="${j}">${esc(o)}</option>`).join('')}</select>`)}</p>`).join('')}${it.outro?`<p class="fri">${esc(it.outro)}</p>`:''}</div><div id="ifb"></div>`;
  else body=`<p class="iq">${esc(it.task)}</p><textarea rows="5" id="ii" aria-label="Your text"></textarea><p class="wc" id="iwc">0 words</p><div id="ifb"></div>`;
  const kind={mc:'In context',tr:'Rewrite',err:'Fix the mistake',text:'Real-life text',prod:'Your turn'}[it.t];
  pane.querySelector('#icard').innerHTML=`<div class="ihead">${tagU(uid)}<span class="kind">${kind}</span></div>${body}<div class="row">${it.t==='mc'?'':'<button class="btn" id="ick">Check</button>'}<button class="btn ghost" id="inx">${it.t==='mc'?'Skip →':'Next →'}</button></div>`;
  const nx=document.getElementById('inx');nx.onclick=next;
  const ii=document.getElementById('ii');if(ii&&it.t!=='prod'){ii.focus();ii.setSelectionRange(ii.value.length,ii.value.length)}
  if(it.t==='prod'){ii.oninput=()=>{document.getElementById('iwc').textContent=words(ii.value)+' words'}}
  if(it.t==='mc')document.getElementById('io').onclick=e=>{const b=e.target.closest('.opt');if(!b||done)return;done=true;const good=+b.dataset.j===it.a;b.classList.add(good?'ok':'bad');if(!good)document.querySelectorAll('#io .opt')[it.a].classList.add('ok');
   document.getElementById('ifb').innerHTML=`<div class="fb ${good?'ok':'bad'}"><b>${good?'Correct!':'Answer: '+esc(it.o[it.a])}</b>${ex(it.e)}</div>`;nx.textContent='Next →';nx.classList.remove('ghost');nx.classList.add('red');nx.focus();solved(good)};
  const ck=document.getElementById('ick');if(ck)ck.onclick=()=>{if(done){next();return}done=true;let good,html;
   if(it.t==='tr'||it.t==='err'){good=match(ii.value,it.a);ii.className='t long '+(good?'ok':'bad');const alt=it.a.find(x=>!match(x,[ii.value]));html=`<b>${good?'Correct!':'Model answer:'}</b> ${good?(alt&&alt!==it.a[0]?'Another option: '+esc(alt):''):esc(it.a[0])}${ex(it.e)}`}
   else if(it.t==='text'){let c=0;it.items.forEach((x,i)=>{const s=pane.querySelector(`[data-ti="${i}"]`),g=+s.value===x.a&&s.value!=='';if(g)c++;s.className=g?'ok':'bad';if(!g){const sp=document.createElement('span');sp.className='sol';sp.textContent=' → '+x.o[x.a];s.after(sp)}});good=c===it.items.length;
    html=`<b>${c} / ${it.items.length} correct</b>${it.items.filter((x,i)=>+pane.querySelector(`[data-ti="${i}"]`).value!==x.a).map(x=>ex(x.e)).join('')}`}
   else{const v=ii.value,res=it.checks.map(([re,l])=>[re.test(v),l]),nw=words(v);good=res.every(r=>r[0])&&nw>=12;
    html=`<b>${good?'Well done!':'Check your text:'}</b><ul class="cks">${res.map(([g,l])=>`<li class="${g?'cky':'ckn'}">${g?'✔':'✘'} ${esc(l)}</li>`).join('')}<li class="${nw>=12?'cky':'ckn'}">${nw>=12?'✔':'✘'} ${tp('at least 12 words','mínimo 12 palabras')} (${nw})</li></ul><div class="model"><b>Model answer</b>${esc(it.model)}</div>${ex(it.e)}<p class="small">${tx('The checker looks for the target structures; ask your teacher to check the rest of your grammar.','El corrector busca las estructuras objetivo; pide a tu profesor/a que revise el resto de la gramática.')}</p>`}
   document.getElementById('ifb').innerHTML=`<div class="fb ${good?'ok':'bad'}">${html}</div>`;ck.textContent='Next →';ck.classList.add('red');nx.style.display='none';ck.focus();solved(good)};
  pane.querySelector('#icard').onkeydown=e=>{if(e.key==='Enter'&&e.target.tagName==='INPUT'){e.preventDefault();(document.getElementById('ick')||nx).click()}};
 }
 pane.onclick=null;pane.onkeydown=null;
 pane.innerHTML=`<div class="score"><span>∞ ${tp('Unlimited practice','Práctica ilimitada')}</span><span id="infst"><span>✔ 0 / 0</span><span>🔥 0</span></span></div>
 <p class="small" style="margin:12px 0 0">${tx('Every exercise is new: real-life situations, PAU-style rewriting, error correction, texts and free writing. Practise as much as you need.','Cada ejercicio es nuevo: situaciones reales, transformaciones tipo PAU, corrección de errores, textos y producción libre. Practica todo lo que necesites.')}</p>
 <div class="chips" id="ity" style="margin:12px 0 16px">${INFT.map(([k,l])=>`<button class="chip ${infType===k?'on':''}" data-k="${k}">${l}</button>`).join('')}</div>
 <div class="icard" id="icard"></div>`;
 document.getElementById('ity').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;infType=b.dataset.k;document.querySelectorAll('#ity .chip').forEach(x=>x.classList.toggle('on',x===b));next()};
 next();
}
const R0=a=>a[Math.floor(Math.random()*a.length)];
function mixed(){
 const pool=G.flatMap(u=>u.mc.map(m=>({...m,u})));
 app.innerHTML=`<section class="band uband" style="--c:#9096e0;--on:#fff"><div class="wrap"><h1>Mixed practice</h1><p class="lead">${tx('All the grammar units together: unlimited practice with real-life tasks, or a quick 10-question test.','Todas las unidades de gramática juntas: práctica ilimitada con tareas reales o un test rápido de 10 preguntas.')}</p></div></section><div class="band"><div class="wrap" style="max-width:900px"><div class="tabs" id="mtabs"><button data-m="inf" class="on">∞ Unlimited practice</button><button data-m="t10">10-question test</button></div><div id="pane"></div></div></div>`;
 const pane=document.getElementById('pane');
 const go=m=>{document.querySelectorAll('#mtabs button').forEach(b=>b.classList.toggle('on',b.dataset.m===m));
  if(m==='inf')paneInf(pane,G.map(u=>u.id));
  else{paneMC(pane,pick(pool,10),r=>{const b=store.get('mixed',0);store.set('mixed',Math.max(b,r))});document.getElementById('again').onclick=()=>go('t10')}};
 document.getElementById('mtabs').onclick=e=>{const b=e.target.closest('button');if(b)go(b.dataset.m)};
 go('inf');
}

/* ---------- vocabulary ---------- */
let vT=V[0]&&V[0].id,vM='glosario',DL=null;
try{const u=window.claude&&window.claude.use&&window.claude.use('downloads');if(u&&u.then)u.then(d=>{DL=d}).catch(()=>{})}catch(e){}
function bindDownloads(root){
 root.querySelectorAll('a[data-dl]').forEach(a=>a.onclick=async ev=>{
  ev.preventDefault();const t=a.querySelector('span'),old=t.textContent,url=a.getAttribute('href'),name=a.dataset.dl;
  t.textContent='Preparing…';
  try{
   if(!DL){try{DL=await window.claude.use('downloads')}catch(e){DL=null}}
   const blob=await (await fetch(url)).blob();
   if(DL){await DL.save({filename:name,data:blob});t.textContent='Downloaded ✔'}
   else{const u=URL.createObjectURL(blob),l=document.createElement('a');l.href=u;l.download=name;document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);t.textContent='Downloaded ✔'}
  }catch(e){
   if(e&&e.code==='declined')t.textContent=old;
   else if(e&&e.code==='rate_limited')t.textContent='Wait a moment and try again';
   else{try{window.open(url,'_blank','noopener')}catch(_){}t.textContent='Opening the PDF…'}
  }
  setTimeout(()=>{t.textContent=old},2600)});
}
const stripTo=s=>String(s).trim().toLowerCase().replace(/^to\s+/,'');
const matchLoose=(u,arr)=>{const x=stripTo(u);return!!x&&arr.some(a=>stripTo(a)===x||match(u,[a]))};
const enMain=s=>String(s).split('/')[0].trim();
function vocab(){
 const t=V.find(x=>x.id===vT)||V[0];
 const tabs=[['glosario','Glossary'],['practica','Practice'],...(t.lab?[['lab','Vocabulary Lab']]:[]),['tarjetas','Flashcards'],['test','Test'],['speaking','Speaking & Writing']];
 if(!tabs.some(x=>x[0]===vM))vM='glosario';
 app.innerHTML=`<section class="band"><div class="wrap"><h1>Vocabulary</h1><p class="lead">${tx(`The ${V.length-1} class glossaries (${V.reduce((s,x)=>s+x.g.length,0)} words) with practice, Vocabulary Lab, flashcards, tests, speaking questions and PDF worksheets.`,`Los ${V.length-1} glosarios de clase (${V.reduce((s,x)=>s+x.g.length,0)} palabras) con práctica, Vocabulary Lab, tarjetas, test, preguntas de speaking y fichas en PDF.`)}</p>
 <img class="topics-img" src="v-topics.jpg" alt="Vocabulary topics: Education, Jobs & Work, Environment and Nature, Entertainment, New Technologies and Social Media, Mental Health, Feminism & LGTBIQ+, Racism, Social Issues, Travelling and Tourism, War, Immigration and Refugees" data-zoom>
 <div class="chips" id="topics">${V.map(x=>`<button class="chip ${x.id===t.id?'on':''}" data-id="${x.id}" style="--c:${x.color}"><i></i>${esc(x.name)}</button>`).join('')}</div></div></section>
 <section class="band uband" style="--c:${t.color};--on:${onColor(t.color)};padding-block:24px"><div class="wrap vhead"><div><h2>${esc(t.name)}</h2><p style="margin:4px 0 0;opacity:.85">${LANG==='en'?'':esc(t.es)+' · '}${t.g.length} words</p></div>
 <div class="row" style="margin:0"><a class="btn dl" href="vocabulary-${t.id}.pdf" target="_blank" rel="noopener" data-dl="vocabulary-${t.id}.pdf"><span>Download topic PDF</span></a><a class="btn ghost dl" href="vocabulary-all.pdf" target="_blank" rel="noopener" data-dl="vocabulary-all.pdf"><span>All topics</span></a></div></div></section>
 <div class="band" style="padding-top:20px"><div class="wrap"><div class="tabs" id="vtabs">${tabs.map(([k,l])=>`<button data-t="${k}" class="${vM===k?'on':''}">${l}</button>`).join('')}</div><div id="vp"></div>
 <p class="small" style="margin-top:22px">${tx('Each PDF includes the glossary, printable practice worksheets and the answer key.','Cada PDF incluye el glosario, las fichas de práctica para imprimir y las soluciones.')}</p></div></div>`;
 bindDownloads(app);
 document.getElementById('topics').onclick=e=>{const b=e.target.closest('.chip');if(b){vT=b.dataset.id;vocab()}};
 document.getElementById('vtabs').onclick=e=>{const b=e.target.closest('button');if(b){vM=b.dataset.t;vocab()}};
 const vp=document.getElementById('vp');vp.onclick=null;vp.onkeydown=null;
 if(vM==='glosario'){
  vp.innerHTML=`<input class="t" id="vs" placeholder="Search in English or Spanish" style="width:min(100%,380px);margin-bottom:14px" aria-label="Search word">
  <div class="gloss" id="vb"></div>
  ${t.key?`<details style="margin-top:18px"><summary>Key words with definition and example (${t.key.length})</summary><div class="tw"><table class="vt"><thead><tr><th>Word</th><th>Meaning</th><th>Spanish</th><th>Example</th></tr></thead><tbody>${t.key.map(w=>`<tr><td>${esc(w.w)}</td><td>${esc(w.d)}</td><td>${esc(w.es)}</td><td>${esc(w.ex)}</td></tr>`).join('')}</tbody></table></div></details>`:''}`;
  const fill=q=>{q=q.toLowerCase();const r=t.g.filter(([en,es])=>!q||(en+' '+es).toLowerCase().includes(q));document.getElementById('vb').innerHTML=r.map(([en,es])=>`<div class="gl"><b>${esc(en)}</b><span>${esc(es)}</span></div>`).join('')||'<p>No results.</p>'};
  fill('');document.getElementById('vs').oninput=e=>fill(e.target.value);
 }else if(vM==='practica')practice(vp,t);
 else if(vM==='lab')lab(vp,t);
 else if(vM==='tarjetas'){
  let deck=t.g.slice(),i=0,rev=false;
  const draw=()=>{const[en,es]=deck[i];const f=rev?es:en,b=rev?en:es;vp.innerHTML=`<div class="flash"><div class="fc" id="fc" tabindex="0" role="button" aria-label="Flip card" style="--c:${t.color};--on:${onColor(t.color)}"><div class="front"><b>${esc(f)}</b><p style="margin-top:14px;opacity:.85">Tap to see the translation</p></div><div class="back"><p class="es" style="font-size:26px">${esc(b)}</p></div></div>
  <div class="row" style="justify-content:center"><button class="btn ghost" id="pv">← Previous</button><span style="font-weight:700">${i+1} / ${deck.length}</span><button class="btn ghost" id="nx">Next →</button><button class="btn ghost" id="sh">Shuffle</button><button class="btn ghost" id="rv">${rev?'English → Spanish':'Spanish → English'}</button></div></div>`;
  const fc=document.getElementById('fc');fc.onclick=()=>fc.classList.toggle('flip');fc.onkeydown=e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();fc.classList.toggle('flip')}};
  document.getElementById('pv').onclick=()=>{i=(i-1+deck.length)%deck.length;draw()};document.getElementById('nx').onclick=()=>{i=(i+1)%deck.length;draw()};document.getElementById('sh').onclick=()=>{deck=shuffle(deck);i=0;draw()};document.getElementById('rv').onclick=()=>{rev=!rev;draw()}};
  draw();
 }else if(vM==='test'){
  const qs=pick(t.g,Math.min(10,t.g.length)).map(([en,es])=>{const o=shuffle([es,...pick(t.g.filter(x=>x[0]!==en&&x[1]!==es),3).map(x=>x[1])]);return{q:`What does “${en}” mean?`,o,a:o.indexOf(es),e:`${en} = ${es}`}});
  paneMC(vp,qs,r=>{const b=store.get('vocab',{});b[t.id]=Math.max(b[t.id]||0,r);store.set('vocab',b)});
  document.getElementById('again').onclick=()=>vocab();
 }else{
  const Q=t.quest;
  vp.innerHTML=Q?`<section class="qb"><h3>Speaking questions</h3><p class="ins2">${tx('Prepare your answers: give your opinion, a reason and an example, and use at least three words from the glossary.','Prepara tus respuestas: da tu opinión, una razón y un ejemplo, y usa al menos tres palabras del glosario.')}</p><ol class="spk">${Q.speaking.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>
  <div class="row"><button class="btn ghost" id="rnd">Random question</button><span id="rq" class="rq"></span></div></section>
  <section class="qb"><h3>Writing task</h3><p style="font-size:19px">${esc(Q.writing)}</p><p class="small">${tx('Practise with the templates and the checklist in the <a href="#writing">Writing</a> section.','Practica con las plantillas y el checklist de la sección <a href="#writing">Writing</a>.')}</p>
  <textarea rows="10" id="vw" aria-label="Your composition">${esc(store.get('vw-'+t.id,''))}</textarea><p class="wc" id="vwc"></p></section>
  <section class="qb"><h3>Word groups</h3><div class="grp">${Q.groups.map(([g,w])=>`<div><b>${esc(g)}</b><p>${esc(w)}</p></div>`).join('')}</div></section>`
  :`<p>This topic has no speaking questions.</p>`;
  if(Q){document.getElementById('rnd').onclick=()=>{document.getElementById('rq').textContent=Q.speaking[Math.floor(Math.random()*Q.speaking.length)]};
   const ta=document.getElementById('vw'),wc=document.getElementById('vwc'),up=()=>{const n=words(ta.value);wc.textContent=`${n} words · target 130–150`;wc.className='wc'+(n&&(n<120||n>160)?' bad':'')};up();ta.oninput=()=>{store.set('vw-'+t.id,ta.value);up()}}
 }
}
function practice(vp,t){
 const Q=t.quest;if(!Q){vp.innerHTML='<p>This topic is practised in Vocabulary Lab.</p>';return}
 const defs=shuffle(Q.match.map(m=>m[1]));
 vp.innerHTML=`<div class="score"><span>Practice · ${esc(t.name)}</span><span id="psc">Match · Gaps</span></div>
 <section class="qb" style="margin-top:20px"><h3>1. Match the words with their meanings</h3>
 ${Q.match.map(([w],i)=>`<div class="q syn"><span><span class="n">${i+1}</span><b>${esc(w)}</b></span><span><select id="pm${i}" aria-label="Meaning of ${esc(w)}"><option value="">Choose…</option>${defs.map(d=>`<option>${esc(d)}</option>`).join('')}</select></span></div>`).join('')}</section>
 <section class="qb"><h3>2. Complete the sentences</h3><div class="chips" id="pbank" style="margin:4px 0 8px">${shuffle(Q.gaps.map(g=>g[1])).map(b=>`<button class="chip" data-b="${esc(b)}">${esc(b)}</button>`).join('')}</div>
 ${Q.gaps.map(([s],i)=>{const[x,y]=s.split('___');return`<div class="q"><p><span class="n">${i+1}</span>${esc(x)}<input class="t gap" id="pg${i}" autocomplete="off" spellcheck="false" aria-label="Gap ${i+1}">${esc(y||'')}<span class="sol" id="pgs${i}" hidden></span></p></div>`}).join('')}</section>
 <div class="row"><button class="btn" id="pchk">Check</button><button class="btn ghost" id="prst">Again</button></div>`;
 let last=null;vp.addEventListener('focusin',e=>{if(e.target.matches('input.gap'))last=e.target});
 document.getElementById('pbank').onclick=e=>{const b=e.target.closest('[data-b]');if(!b)return;const el=last||[...vp.querySelectorAll('input.gap')].find(x=>!x.value);if(el){el.value=b.dataset.b;const n=[...vp.querySelectorAll('input.gap')];last=n[n.indexOf(el)+1]||null;if(last)last.focus()}};
 document.getElementById('prst').onclick=()=>practice(vp,t);
 document.getElementById('pchk').onclick=()=>{let ok=0;
  Q.match.forEach(([w,d],i)=>{const s=document.getElementById('pm'+i),g=s.value===d;if(g)ok++;s.className=g?'ok':'bad'});
  Q.gaps.forEach(([s,a],i)=>{const el=document.getElementById('pg'+i),sol=document.getElementById('pgs'+i),g=match(el.value,[a]);if(g)ok++;el.className='t gap '+(g?'ok':'bad');sol.hidden=g;sol.textContent='Answer: '+a});
  const tot=Q.match.length+Q.gaps.length,pct=Math.round(ok/tot*100);document.getElementById('psc').textContent=`${ok} / ${tot} · ${pct}%`;
  const b=store.get('practice',{});b[t.id]=Math.max(b[t.id]||0,pct);store.set('practice',b);document.querySelector('.score').scrollIntoView({behavior:'smooth'})};
}
function lab(vp,t){
 const L=t.lab;vp.onclick=null;vp.onkeydown=null;
 vp.innerHTML=`<div class="score"><span>Vocabulary Lab · ${esc(t.labName||t.name)}</span><span id="lsc">Fill in · Word formation · Synonyms</span></div>
 <section class="qb" style="margin-top:20px"><h3>1. Fill in the gaps</h3><p class="ins2">${tx('Complete each sentence with an expression from the box. Tap an expression to write it in the active gap.','Completa cada frase con una expresión del recuadro. Puedes tocar una expresión para escribirla en el hueco activo.')}</p>
 <div class="chips" id="bank" style="margin-top:6px">${L.bank.map(b=>`<button class="chip" data-b="${esc(b.toLowerCase())}">${esc(b)}</button>`).join('')}</div>
 ${L.gaps.map(([s,a],i)=>{const[x,y]=s.split('___');return`<div class="q"><p><span class="n">${i+1}</span>${esc(x)}<input class="t gap" id="lg${i}" autocomplete="off" spellcheck="false" aria-label="Gap ${i+1}">${esc(y||'')}<span class="sol" id="lgs${i}" hidden></span></p></div>`}).join('')}</section>
 <section class="qb"><h3>2. Word formation</h3><p class="ins2">${tx('Change the word into the word class shown.','Transforma la palabra en la categoría gramatical indicada.')}</p>
 <div class="wfg">${L.wf.map(([b,k],i)=>`<label class="wfr"><b>${esc(b)}</b><em>${esc(k)}</em><input class="t" id="lw${i}" autocomplete="off" spellcheck="false"><span class="sol" id="lws${i}" hidden></span></label>`).join('')}</div></section>
 <section class="qb"><h3>3. Translate (ES → EN)</h3><p class="ins2">${tx('Translate the sentence into English and compare it with the model answer.','Traduce la frase al inglés y compárala con la respuesta modelo.')}</p>
 ${L.tr.map(([e,en],i)=>`<div class="q"><p><span class="n">${i+1}</span>“${esc(e)}”</p><textarea rows="2" id="lt${i}" aria-label="Translation ${i+1}"></textarea><details class="rev"><summary>See model answer</summary><div class="model">${esc(en)}</div></details></div>`).join('')}</section>
 <section class="qb"><h3>4. Provide synonyms</h3><p class="ins2">${tx('Write a synonym for each word.','Escribe un sinónimo de cada palabra.')}</p>
 <div class="wfg">${L.syn.map(([w],i)=>`<label class="wfr"><b>${esc(w)}</b><input class="t" id="ls${i}" autocomplete="off" spellcheck="false"><span class="sol" id="lss${i}" hidden></span></label>`).join('')}</div></section>
 <section class="qb"><h3>5. Use in a sentence</h3><p class="ins2">${tx('Write your own sentence with each expression (at least six words).','Escribe tu propia frase con cada expresión (mínimo seis palabras).')}</p>
 ${L.use.map(([w,s],i)=>`<div class="q"><p><span class="n">${i+1}</span><b>${esc(w.toUpperCase())}</b></p><textarea rows="2" id="lu${i}" aria-label="Sentence with ${esc(w)}"></textarea><div class="fb" id="lus${i}" hidden></div></div>`).join('')}</section>
 <div class="tip" style="margin-bottom:18px"><b>Exam tip.</b> ${esc(L.tip)}</div>
 <div class="row"><button class="btn" id="lchk">Check</button><button class="btn ghost" id="lrst">Clear</button></div>`;
 let last=null;
 vp.addEventListener('focusin',e=>{if(e.target.matches('input.gap'))last=e.target});
 document.getElementById('bank').onclick=e=>{const b=e.target.closest('[data-b]');if(!b)return;const el=last||[...vp.querySelectorAll('input.gap')].find(x=>!x.value);if(el){el.value=b.dataset.b;const n=vp.querySelectorAll('input.gap');const i=[...n].indexOf(el);last=n[i+1]||null;if(last)last.focus()}};
 document.getElementById('lrst').onclick=()=>lab(vp,t);
 document.getElementById('lchk').onclick=()=>{
  let ok=0,tot=0;const mark=(el,sol,good,txt)=>{tot++;if(good)ok++;el.className=el.className.replace(/ ?(ok|bad)/g,'')+' '+(good?'ok':'bad');sol.hidden=good;sol.textContent=txt};
  L.gaps.forEach(([s,a],i)=>{const el=document.getElementById('lg'+i);mark(el,document.getElementById('lgs'+i),match(el.value,[a]),'Answer: '+a.toUpperCase())});
  L.wf.forEach(([b,k,a],i)=>{const el=document.getElementById('lw'+i);mark(el,document.getElementById('lws'+i),matchLoose(el.value,a),'Answer: '+a.join(' / '))});
  L.syn.forEach(([w,a],i)=>{const el=document.getElementById('ls'+i);mark(el,document.getElementById('lss'+i),matchLoose(el.value,a),'Possible: '+a.slice(0,3).join(' / '))});
  L.use.forEach(([w,s],i)=>{const el=document.getElementById('lu'+i),fb=document.getElementById('lus'+i),v=el.value.toLowerCase(),key=w.toLowerCase().split(' ')[0],has=v.includes(key),n=words(v);fb.hidden=false;
   fb.className='fb '+(has&&n>=6?'ok':'bad');fb.innerHTML=(!v.trim()?tx('Write your sentence. ','Escribe tu frase. '):!has?tx(`Your sentence doesn't include “${esc(w)}”. `,`Tu frase no incluye «${esc(w)}». `):n<6?tx('Your sentence is too short. ','Tu frase es demasiado corta. '):'<b>Good.</b> '+tx('Check the grammar with your teacher. ','Revisa la gramática con tu profesor/a. '))+'<br>Example: <i>'+esc(s)+'</i>'});
  vp.querySelectorAll('details.rev').forEach(d=>d.open=true);
  const pct=Math.round(ok/tot*100);document.getElementById('lsc').textContent=`${ok} / ${tot} correct · ${pct}%`;
  const b=store.get('lab',{});b[t.id]=Math.max(b[t.id]||0,pct);store.set('lab',b);
  document.querySelector('.score').scrollIntoView({behavior:'smooth'});
 };
}

/* ---------- games ---------- */
const GL=[
 {id:'contrarreloj',cat:'g',n:'Beat the clock',d:['60 seconds to answer as many grammar questions as you can. Streaks earn extra points.','60 segundos para acertar todas las preguntas de gramática que puedas. Las rachas suman puntos extra.'],c:'#ef908a'},
 {id:'parejas',cat:'v',n:'Pairs',d:['Match each phrasal verb with its meaning in as few moves as possible.','Encuentra cada phrasal verb con su significado en el menor número de intentos.'],c:'#7ec9e6'},
 {id:'palabra',cat:'v',n:'Guess the word',d:['Translate the glossary words into English before you lose all six stations.','Traduce al inglés las palabras de los glosarios antes de perder las seis estaciones.'],c:'#7eb991'},
 {id:'ordena',cat:'g',n:'Sentence builder',d:['Build correct sentences with the key PAU structures.','Construye frases correctas con las estructuras clave de la PAU.'],c:'#f6bb83'},
 {id:'prep',cat:'v',n:'Preposition rush',d:['45 seconds: pop the right preposition (interested in, rely on, on purpose…). Streaks earn extra points.','45 segundos: elige la preposición correcta (interested in, rely on, on purpose…). Las rachas suman puntos.'],c:'#9fd3c7'},
 {id:'idioms',cat:'v',n:'Idiom detective',d:['Read the idiom in context and work out what it means. Learn the Spanish equivalent too.','Lee el idiom en contexto y descubre qué significa. Aprende también su equivalente en español.'],c:'#f4b6c2'},
 {id:'colloc',cat:'v',n:'Collocation snap',d:['make or do? take or have? Choose the word that goes with each phrase before time runs out.','¿make o do? ¿take o have? Elige la palabra que combina con cada expresión antes de que se acabe el tiempo.'],c:'#c5c0ec'},
 {id:'expr',cat:'v',n:'Expression quest',d:['Complete real conversations with everyday expressions: no wonder, it\'s up to you, fair enough…','Completa conversaciones reales con expresiones del día a día: no wonder, it\'s up to you, fair enough…'],c:'#fcd5a5'},
 {id:'error',cat:'g',n:'Spot the mistake',d:['Is the sentence correct or does it have a mistake? Ten typical exam sentences.','¿Es correcta la frase o tiene un error? Diez frases típicas de examen.'],c:'#b3a5cc'}
,
{id:'duel',cat:'g',n:'Transformation duel',d:['Two players, one screen: PAU-style sentence transformations against the clock. Perfect for the class whiteboard.','Dos jugadores, una pantalla: transformaciones tipo PAU contra reloj. Perfecto para la pizarra digital.'],c:'#f6c8c3'},
 {id:'escape',cat:'g',n:'Grammar escape room',d:['Five locked rooms, five grammar units. Unlock each one to get the exit code. How fast can you escape?','Cinco salas cerradas, cinco unidades de gramática. Ábrelas para conseguir el código de salida. ¿Cuánto tardas en escapar?'],c:'#b9c3df'},
 {id:'timeline',cat:'g',n:'Tense timeline',d:['Place each action on the timeline: before the past, finished past, connected to now, future…','Coloca cada acción en la línea temporal: antes del pasado, pasado terminado, conectado con el presente, futuro…'],c:'#a9d6e5'},
 {id:'chain',cat:'g',n:'Conditional chain',d:['If I won the lottery, I would buy a boat… Build the longest chain without breaking it.','If I won the lottery, I would buy a boat… Construye la cadena más larga sin romperla.'],c:'#d6c6e8'},
 {id:'wordform',cat:'v',n:'Word formation tower',d:['decide → decision, decisive, decisively, indecisive. Build word families and make your tower grow.','decide → decision, decisive, decisively, indecisive. Construye familias de palabras y haz crecer tu torre.'],c:'#fbd7a8'},
 {id:'sniper',cat:'v',n:'Synonym sniper',d:['Real synonyms from PAU exams fly across the screen. Shoot the right one before it escapes!','Sinónimos reales de exámenes PAU cruzan la pantalla. ¡Dispara al correcto antes de que se escape!'],c:'#c8e6cf'},
 {id:'bingo',cat:'v',n:'Topic bingo',d:['Choose a vocabulary topic, read the clues and complete your card. Line… and BINGO!','Elige un tema de vocabulario, lee las pistas y completa tu cartón. Línea… ¡y BINGO!'],c:'#f9dfe2'},
 {id:'falsefriends',cat:'v',n:'False friends trap',d:['actually, embarrassed, sensible, carpet… Don\'t fall into the trap!','actually, embarrassed, sensible, carpet… ¡No caigas en la trampa!'],c:'#fde3b6'},
 {id:'puzzle',cat:'w',n:'Paragraph puzzle',d:['Rebuild a model PAU composition: order the paragraphs and then the sentences.','Reconstruye una redacción modelo de la PAU: ordena los párrafos y luego las frases.'],c:'#cfe3f6'},
 {id:'upgrade',cat:'w',n:'Upgrade it!',d:['Choose the version of a sentence that would get the highest mark, then upgrade one yourself.','Elige la versión de una frase que tendría más nota y luego mejora tú una.'],c:'#e4dcf8'},
 {id:'linksprint',cat:'w',n:'Linker sprint',d:['However? Therefore? Moreover? Join two ideas with the right linker in 60 seconds.','¿However? ¿Therefore? ¿Moreover? Une dos ideas con el conector correcto en 60 segundos.'],c:'#d4ecdc'},
 {id:'redpen',cat:'w',n:'Examiner\'s red pen',d:['You are the examiner: find the hidden mistakes in a student\'s composition before time runs out.','Eres el corrector: encuentra los errores escondidos en la redacción de un alumno antes de que acabe el tiempo.'],c:'#f6c1bb'}
];
function games(){
 const best=store.get('games',{});
 const lbl={contrarreloj:v=>`Record: ${v} points`,parejas:v=>`Record: ${v} moves`,palabra:v=>`Best streak: ${v}`,ordena:v=>`Best streak: ${v}`,error:v=>`Record: ${v}/10`,prep:v=>`Record: ${v} points`,colloc:v=>`Record: ${v} points`,idioms:v=>`Record: ${v}/10`,expr:v=>`Record: ${v}/10`,escape:v=>`Best time: ${mmss(v)}`,timeline:v=>`Record: ${v}/10`,chain:v=>`Longest chain: ${v}`,wordform:v=>`Record: ${v} blocks`,sniper:v=>`Record: ${v} points`,bingo:v=>`Best accuracy: ${v}%`,falsefriends:v=>`Record: ${v}/10`,puzzle:v=>`Record: ${v} points`,upgrade:v=>`Record: ${v}/8`,linksprint:v=>`Record: ${v} points`,redpen:v=>`Record: ${v} points`};
 app.innerHTML=`<section class="band"><div class="wrap"><h1>Games</h1><p class="lead">${tx('Revise grammar and vocabulary while you play. Your records are saved in this browser.','Repasa gramática y vocabulario jugando. Tus récords se guardan en este navegador.')}</p></div></section>
 ${[['g','Grammar','Gramática'],['v','Vocabulary','Vocabulario'],['w','Writing','Writing']].map(([k,en,es])=>`<section class="band" style="padding-top:0"><div class="wrap"><h2 style="margin-bottom:14px">${en} <span class="small">· ${GL.filter(g=>g.cat===k).length} games</span></h2><div class="cards">${GL.filter(g=>g.cat===k).map(g=>`<a class="card" href="#juego-${g.id}" style="--c:${g.c}"><span class="dot"></span><h3>${g.n}</h3><p>${tx(g.d[0],g.d[1])}</p><span class="go">${best[g.id]!=null&&lbl[g.id]?lbl[g.id](best[g.id])+' · ':''}Play →</span></a>`).join('')}</div></div></section>`).join('')}`;
}
function saveGame(id,v,lower){const b=store.get('games',{});if(b[id]==null||(lower?v<b[id]:v>b[id])){b[id]=v;store.set('games',b);return true}return false}
function game(id){
 const g=GL.find(x=>x.id===id);if(!g){games();return}
 app.innerHTML=`<section class="band uband" style="--c:${g.c};--on:${onColor(g.c)};padding-block:28px"><div class="wrap"><a href="#juegos" style="font-weight:700;text-decoration:none">← Games</a><h1 style="margin-top:8px">${g.n}</h1></div></section><div class="band"><div class="gwrap" id="gb"></div></div>`;
 const gb=document.getElementById('gb');
 ({contrarreloj:gRace,parejas:gMemory,palabra:gWord,ordena:gOrder,error:gJudge,prep:gPrep,colloc:gColloc,idioms:gIdioms,expr:gExpr,duel:gDuel,escape:gEscape,timeline:gTimeline,chain:gChain,wordform:gWordform,sniper:gSniper,bingo:gBingo,falsefriends:gFalse,puzzle:gPuzzle,upgrade:gUpgrade,linksprint:gLinks,redpen:gRedPen})[id](gb);
}
function gRace(gb){
 const pool=G.flatMap(u=>u.mc.map(m=>({...m,u})));
 const intro=()=>{gb.innerHTML=`<p class="lead" style="margin-top:0">${tx('You have 60 seconds. Each correct answer is worth 10 points and every answer in a row adds 2 more.','Tienes 60 segundos. Cada acierto vale 10 puntos y cada acierto seguido suma 2 más.')}</p><div class="row"><button class="btn red" id="go">Start</button></div>`;document.getElementById('go').onclick=start};
 const start=()=>{let t=60,sc=0,streak=0,q,deck=shuffle(pool),k=0,lock=false;
  gb.innerHTML=`<div class="score"><span>Points: <b id="pts">0</b></span><span>Streak: <b id="stk">0</b></span><span id="tm">60 s</span></div><div class="gbar"><b id="bar" style="width:100%"></b></div><div id="qa"></div>`;
  const next=()=>{lock=false;q=deck[k++%deck.length];document.getElementById('qa').innerHTML=`<span class="tag" style="--c:${q.u.color};--on:${onColor(q.u.color)}">${esc(q.u.name)}</span><p class="gq">${hl(q.q)}</p><div class="opts">${q.o.map((o,j)=>`<button class="opt" data-j="${j}">${esc(o)}</button>`).join('')}</div>`};
  document.getElementById('qa').onclick=e=>{const b=e.target.closest('.opt');if(!b||lock)return;lock=true;const ok=+b.dataset.j===q.a;
   if(ok){sc+=10+streak*2;streak++;b.classList.add('ok');setTimeout(next,350)}else{streak=0;b.classList.add('bad');document.querySelectorAll('#qa .opt')[q.a].classList.add('ok');setTimeout(next,1100)}
   document.getElementById('pts').textContent=sc;document.getElementById('stk').textContent=streak};
  next();
  const iv=setInterval(()=>{t--;const tm=document.getElementById('tm');if(!tm){clearInterval(iv);return}tm.textContent=t+' s';document.getElementById('bar').style.width=(t/60*100)+'%';
   if(t<=0){clearInterval(iv);const rec=saveGame('contrarreloj',sc);gb.innerHTML=`<p class="small">Time's up</p><p class="big">${sc} points</p><p>${rec?'New record!':'Record: '+store.get('games',{}).contrarreloj+' points'}</p><div class="row"><button class="btn red" id="go">Play again</button><a class="btn ghost" href="#juegos">More games</a></div>`;document.getElementById('go').onclick=start}},1000);
  timers.push(iv)};
 intro();
}
function gMemory(gb){
 const pv=(V.find(t=>t.id==='phrasal')||V[0]).words;
 const start=()=>{const sel=pick(pv,6);const cards=shuffle(sel.flatMap((w,i)=>[{i,t:w.w,es:0},{i,t:w.es,es:1}]));let open=[],moves=0,found=0,lock=false;
  gb.innerHTML=`<div class="score"><span>Moves: <b id="mv">0</b></span><span>Pairs: <b id="fd">0</b> / 6</span></div><div class="mem" id="mem" style="margin-top:18px">${cards.map((c,k)=>`<button class="mc ${c.es?'es':''}" data-k="${k}" aria-label="Card ${k+1}"></button>`).join('')}</div>`;
  document.getElementById('mem').onclick=e=>{const b=e.target.closest('.mc');if(!b||lock||b.classList.contains('up')||b.classList.contains('done'))return;const c=cards[+b.dataset.k];b.classList.add('up');b.textContent=c.t;open.push([b,c]);
   if(open.length===2){moves++;document.getElementById('mv').textContent=moves;const[[b1,c1],[b2,c2]]=open;open=[];
    if(c1.i===c2.i){b1.classList.add('done');b2.classList.add('done');found++;document.getElementById('fd').textContent=found;
     if(found===6){const rec=saveGame('parejas',moves,true);setTimeout(()=>{gb.innerHTML=`<p class="big">${moves} moves</p><p>${rec?'New record!':'Record: '+store.get('games',{}).parejas+' moves'}</p><div class="tw"><table class="vt" style="margin-top:12px"><tbody>${sel.map(w=>`<tr><td>${esc(w.w)}</td><td>${esc(w.es)}</td><td>${esc(w.ex)}</td></tr>`).join('')}</tbody></table></div><div class="row"><button class="btn red" id="go">New game</button><a class="btn ghost" href="#juegos">More games</a></div>`;document.getElementById('go').onclick=start},600)}}
    else{lock=true;setTimeout(()=>{[b1,b2].forEach(x=>{x.classList.remove('up');x.textContent=''});lock=false},1000)}}};};
 start();
}
function gWord(gb){
 const pool=V.flatMap(t=>t.g.map(([en,es])=>({w:enMain(en).replace(/^to\s+/i,''),es,t}))).filter(x=>/^[a-z' -]+$/i.test(x.w)&&x.w.replace(/[^a-z]/gi,'').length>=4);let streak=0;
 const start=()=>{const w=pool[Math.floor(Math.random()*pool.length)],ans=w.w.toLowerCase();let lives=6,used=new Set(),over=false,hint=false;
  const letters=[...new Set(ans.replace(/[^a-z]/g,''))];
  const draw=()=>{const win=letters.every(l=>used.has(l));
   gb.innerHTML=`<div class="score"><span><span class="tag" style="--c:${w.t.color};--on:${onColor(w.t.color)}">${esc(w.t.name)}</span></span><span>Streak: <b>${streak}</b></span></div>
   <p class="small" style="margin:14px 0 0">How do you say it in English?</p><p class="gq" style="margin-top:4px">${esc(w.es)}</p>
   <div class="lives" aria-label="${lives} lives">${Array.from({length:6},(_,k)=>`${k?`<u class="${k>=lives?'lost':''}"></u>`:''}<i class="${k>=lives?'lost':''}"></i>`).join('')}</div>
   <div class="word">${[...ans].map(ch=>/[a-z]/.test(ch)?`<span>${used.has(ch)||over?ch:''}</span>`:`<span class="sp">${ch===' '?'':esc(ch)}</span>`).join('')}</div>
   ${hint?`<p style="text-align:center">Hint: it begins with <b>${esc(w.w[0].toUpperCase())}</b> and has ${w.w.replace(/[^a-z]/gi,'').length} letters</p>`:''}
   ${over||win?`<div class="fb ${win?'ok':'bad'}" style="text-align:center"><b>${win?'Well done!':'It was: '+esc(w.w)}</b> · ${esc(w.w)} = ${esc(w.es)}</div><div class="row" style="justify-content:center"><button class="btn red" id="go">Next word</button></div>`:
   `<div class="keys" id="keys">${'abcdefghijklmnopqrstuvwxyz'.split('').map(l=>`<button data-l="${l}" class="${used.has(l)?(ans.includes(l)?'hit':'miss'):''}" ${used.has(l)?'disabled':''}>${l}</button>`).join('')}</div><div class="row" style="justify-content:center">${hint?'':'<button class="btn ghost" id="hn">Hint (−1 life)</button>'}</div>`}`;
   if(over||win){document.getElementById('go').onclick=start;document.onkeydown=e=>{if(e.key==='Enter')start()};return}
   document.getElementById('keys').onclick=e=>{const b=e.target.closest('button');if(b)guess(b.dataset.l)};
   const hn=document.getElementById('hn');if(hn)hn.onclick=()=>{if(lives>1){hint=true;lives--;draw()}};};
  const guess=l=>{if(over||used.has(l))return;used.add(l);if(!ans.includes(l))lives--;
   if(letters.every(x=>used.has(x))){streak++;saveGame('palabra',streak)}else if(lives<=0){over=true;streak=0}draw()};
  document.onkeydown=e=>{if(/^[a-z]$/i.test(e.key)&&!over)guess(e.key.toLowerCase())};
  draw();};
 start();
}
function gOrder(gb){
 let streak=0,deck=shuffle(GM.order),k=0;
 const start=()=>{const s=deck[k++%deck.length],toks=s.split(' ');let pool=shuffle(toks.map((t,i)=>({t,i})));if(pool.every((p,i)=>p.i===i))pool=pool.reverse();let built=[];
  const draw=(res)=>{gb.innerHTML=`<div class="score"><span>Put the words in order</span><span>Streak: <b>${streak}</b></span></div><p class="small" style="margin-top:14px">${tx('Tap the words in order. Tap a word in your sentence to send it back.','Toca las palabras en orden. Toca una palabra de tu frase para devolverla.')}</p>
   <div class="built" id="bt">${built.map((p,i)=>`<button data-i="${i}">${esc(p.t)}</button>`).join('')}</div><div class="pool" id="pl">${pool.map((p,i)=>`<button data-i="${i}">${esc(p.t)}</button>`).join('')}</div>
   ${res?`<div class="fb ${res==='ok'?'ok':'bad'}">${res==='ok'?'<b>Correct!</b>':'<b>Not quite.</b> Answer: '+esc(s)}</div><div class="row"><button class="btn red" id="go">Next sentence</button></div>`:`<div class="row"><button class="btn" id="ck" ${pool.length?'disabled':''}>Check</button><button class="btn ghost" id="cl">Start again</button></div>`}`;
   if(res){document.getElementById('go').onclick=start;return}
   document.getElementById('pl').onclick=e=>{const b=e.target.closest('button');if(b){built.push(pool.splice(+b.dataset.i,1)[0]);draw()}};
   document.getElementById('bt').onclick=e=>{const b=e.target.closest('button');if(b){pool.push(built.splice(+b.dataset.i,1)[0]);draw()}};
   document.getElementById('cl').onclick=()=>{pool=pool.concat(built);built=[];draw()};
   document.getElementById('ck').onclick=()=>{const ok=built.map(p=>p.t).join(' ')===s;if(ok){streak++;saveGame('ordena',streak)}else streak=0;draw(ok?'ok':'bad')};};
  draw();};
 start();
}
function gJudge(gb){
 const start=()=>{const qs=pick(GM.judge,10);let i=0,sc=0;
  const draw=(res)=>{if(i>=qs.length){const rec=saveGame('error',sc);gb.innerHTML=`<p class="big">${sc} / 10</p><p>${rec?'New record!':'Record: '+store.get('games',{}).error+' / 10'}</p><div class="row"><button class="btn red" id="go">Another round</button><a class="btn ghost" href="#juegos">More games</a></div>`;document.getElementById('go').onclick=start;return}
   const q=qs[i];
   gb.innerHTML=`<div class="score"><span>Sentence ${i+1} / 10</span><span>Correct: <b>${sc}</b></span></div><p class="gq" style="margin-top:26px">“${esc(q.s)}”</p>
   ${res?`<div class="fb ${res==='ok'?'ok':'bad'}"><b>${res==='ok'?'Well done!':'Oops!'}</b> ${q.ok?'The sentence is correct.':'Correction: '+esc(q.f)}</div><div class="row"><button class="btn red" id="nx">Next</button></div>`:
   `<div class="opts" id="jo"><button class="opt" data-v="1">It's correct</button><button class="opt" data-v="0">It has a mistake</button></div>`}`;
   if(res){document.getElementById('nx').onclick=()=>{i++;draw()};return}
   document.getElementById('jo').onclick=e=>{const b=e.target.closest('.opt');if(!b)return;const ok=(b.dataset.v==='1')===q.ok;if(ok)sc++;draw(ok?'ok':'bad')};};
  draw();};
 start();
}


/* ---------- lexis games: prepositions, collocations, idioms, expressions ---------- */
const LX=window.LEX||{prep:[],idioms:[],colloc:[],expr:[],prepOpts:[]};
function gRush(gb,id,secs,mk,intro){
 let t,left=secs,sc=0,stk=0,q=null,done=0,miss=[];
 const start=()=>{left=secs;sc=0;stk=0;done=0;miss=[];next();t=setInterval(()=>{left--;const c=document.getElementById('clk');if(c)c.textContent=left;if(left<=0){clearInterval(t);end()}},1000);timers.push(t)};
 const next=()=>{q=mk();gb.innerHTML=`<div class="score"><span>⏱ <b id="clk">${left}</b>s</span><span>Points: <b>${sc}</b></span><span>🔥 ${stk}</span></div><p class="gq" style="margin-top:22px">${q.html}</p><div class="bubbles" id="bb">${q.o.map(o=>`<button class="bub" data-v="${esc(o)}">${esc(o)}</button>`).join('')}</div><p class="small" id="gfb" style="min-height:24px;text-align:center"></p>`;
  document.getElementById('bb').onclick=e=>{const b=e.target.closest('.bub');if(!b||left<=0)return;done++;const ok=q.ok.includes(b.dataset.v);
   if(ok){stk++;sc+=10+(stk>1?2*(stk-1):0);b.classList.add('ok')}else{stk=0;b.classList.add('bad');miss.push(q.learn)}
   const f=document.getElementById('gfb');f.innerHTML=ok?'✔ '+esc(q.learn):'✘ '+esc(q.learn);setTimeout(()=>{if(left>0)next()},ok?450:1100)}};
 const end=()=>{const rec=saveGame(id,sc);const um=[...new Set(miss)].slice(0,8);gb.innerHTML=`<p class="small">Time's up</p><p class="big">${sc} points</p><p>${rec?'New record!':'Record: '+store.get('games',{})[id]+' points'} · ${done} answers</p>${um.length?`<div class="model" style="text-align:left"><b>${tp('Review these','Repasa estas')}</b>${um.map(x=>'<br>• '+esc(x)).join('')}</div>`:''}<div class="row"><button class="btn red" id="go">Play again</button><a class="btn ghost" href="#juegos">More games</a></div>`;document.getElementById('go').onclick=start};
 gb.innerHTML=`<p class="lead" style="margin-top:0">${intro}</p><div class="row"><button class="btn red" id="go">Start</button></div>`;document.getElementById('go').onclick=start;
}
function gPrep(gb){gRush(gb,'prep',45,()=>{const[s,a,l]=R0(LX.prep),ok=a.split('|'),opts=shuffle([ok[0],...shuffle(LX.prepOpts.filter(x=>!ok.includes(x))).slice(0,5)]);
 const cap=/^___/.test(s);return{html:esc(s).replace('___','<span class="blank"></span>'),o:cap?opts.map(o=>o.charAt(0).toUpperCase()+o.slice(1)):opts,ok:cap?ok.map(o=>o.charAt(0).toUpperCase()+o.slice(1)):ok,learn:l}},tx('You have 45 seconds. Choose the right preposition for each sentence. Every correct answer in a row adds extra points. At the end you will see the chunks to review.','Tienes 45 segundos. Elige la preposición correcta en cada frase. Cada acierto seguido suma puntos extra. Al final verás qué combinaciones repasar.'))}
function gColloc(gb){gRush(gb,'colloc',60,()=>{const[s,a,...b]=R0(LX.colloc);return{html:esc(s).replace('___','<span class="blank"></span>'),o:shuffle([a,...b]),ok:[a],learn:s.replace('___',a.toUpperCase())}},tx('You have 60 seconds. Choose the word that collocates (goes naturally) with each phrase: make a decision, do homework, heavy traffic…','Tienes 60 segundos. Elige la palabra que combina de forma natural con cada expresión: make a decision, do homework, heavy traffic…'))}
function gQuiz10(gb,id,mk,intro){
 const start=()=>{const qs=Array.from({length:10},mk);let i=0,sc=0;
  const draw=res=>{if(i>=10){const rec=saveGame(id,sc);gb.innerHTML=`<p class="big">${sc} / 10</p><p>${rec?'New record!':'Record: '+store.get('games',{})[id]+' / 10'}</p><div class="row"><button class="btn red" id="go">Another round</button><a class="btn ghost" href="#juegos">More games</a></div>`;document.getElementById('go').onclick=start;return}
   const q=qs[i];
   gb.innerHTML=`<div class="score"><span>${i+1} / 10</span><span>Correct: <b>${sc}</b></span></div><div class="gctx">${q.html}</div><p class="small" style="margin:14px 0 6px">${q.ask}</p><div class="opts" id="qo">${q.o.map((o,j)=>`<button class="opt" data-j="${j}">${esc(o)}</button>`).join('')}</div>${res?`<div class="fb ${res==='ok'?'ok':'bad'}"><b>${res==='ok'?'Well done!':'Answer: '+esc(q.o[q.a])}</b><br>${q.after}</div><div class="row"><button class="btn red" id="nx">Next</button></div>`:''}`;
   if(res){document.querySelectorAll('#qo .opt')[q.a].classList.add('ok');if(q.pick!=null&&q.pick!==q.a)document.querySelectorAll('#qo .opt')[q.pick].classList.add('bad');document.getElementById('nx').onclick=()=>{i++;draw()};document.getElementById('nx').focus();return}
   document.getElementById('qo').onclick=e=>{const b=e.target.closest('.opt');if(!b)return;q.pick=+b.dataset.j;const ok=q.pick===q.a;if(ok)sc++;draw(ok?'ok':'bad')}};
  draw()};
 gb.innerHTML=`<p class="lead" style="margin-top:0">${intro}</p><div class="row"><button class="btn red" id="go">Start</button></div>`;document.getElementById('go').onclick=start;
}
function gIdioms(gb){let used=[];gQuiz10(gb,'idioms',()=>{let x;do{x=R0(LX.idioms)}while(used.includes(x[0])&&used.length<LX.idioms.length-1);used.push(x[0]);
 const[id,ex,m,es]=x,o=shuffle([m,...shuffle(LX.idioms.filter(y=>y[2]!==m).map(y=>y[2])).slice(0,3)]);
 const RE=w=>w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),FW={get:'g[eo]t',give:'g[ia]v',be:"(?:be|am|is|are|was|were|'m|'s|'re)",bite:'bit',break:'br[eo]a?k',make:'ma[dk]',see:'s[ae][ew]'};
 const rx=new RegExp(id.split(' ').map((w,k)=>/^(you|your|someone|someone's|can)$/.test(w)?"[\\w']+":k===0?(FW[w]||RE(w.slice(0,Math.max(2,w.length-2))))+"\\w*":RE(w)).join('\\s+'),'i');
 return{html:esc(ex).replace(rx,mm=>'<b class="idm">'+mm+'</b>'),ask:`What does <b>“${esc(id)}”</b> mean?`,o,a:o.indexOf(m),after:`<b>${esc(id)}</b> = ${esc(m)}${LANG!=='en'?'':''}<br>🇪🇸 ${esc(es)}`}},tx('Ten idioms in context. Read the sentence, guess the meaning and learn the Spanish equivalent.','Diez idioms en contexto. Lee la frase, deduce el significado y aprende el equivalente en español.'))}
function gExpr(gb){let used=[];gQuiz10(gb,'expr',()=>{let x;do{x=R0(LX.expr)}while(used.includes(x[2])&&used.length<LX.expr.length-1);used.push(x[2]);
 const[a,b,ans,es]=x,o=shuffle([ans,...shuffle(LX.expr.filter(y=>y[2]!==ans).map(y=>y[2])).slice(0,3)]);
 const fit=s=>/^“?___/.test(s)||/[.!?]\s___/.test(s)?(o.map(z=>z)):o;
 const line=s=>esc(s).replace('___','<span class="blank"></span>');
 return{html:b?`<p class="bub1">${line(a)}</p><p class="bub2">${line(b)}</p>`:`<p class="bub1">${line(a)}</p>`,ask:tp('Choose the expression that fits best.','Elige la expresión que encaja mejor.'),o,a:o.indexOf(ans),after:`<b>${esc(ans)}</b> · 🇪🇸 ${esc(es)}`}},tx('Ten short conversations. Choose the everyday expression that fits each one (capital letters don\'t matter).','Diez conversaciones cortas. Elige la expresión cotidiana que encaja en cada una (las mayúsculas no importan).'))}


/* ---------- extra games (grammar · vocabulary · writing) ---------- */
const G2=window.G2||{};
const mmss=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
const endBox=(big,line,id)=>`<p class="big">${big}</p><p>${line}</p><div class="row"><button class="btn red" id="go">Play again</button><a class="btn ghost" href="#juegos">More games</a></div>`;
function introBox(gb,text,start,extra){gb.innerHTML=`<p class="lead" style="margin-top:0">${text}</p>${extra||''}<div class="row"><button class="btn red" id="go">Start</button></div>`;document.getElementById('go').onclick=start}

/* 1 · Transformation duel (2 players) */
function gDuel(gb){
 introBox(gb,tx('Two players, one screen. Take turns rewriting PAU-style sentences. You have 45 seconds per turn. The player with more correct answers wins.','Dos jugadores, una pantalla. Por turnos, reescribid frases tipo PAU. Tenéis 45 segundos por turno. Gana quien acierte más.'),()=>{
  const n1=document.getElementById('p1').value.trim()||'Player 1',n2=document.getElementById('p2').value.trim()||'Player 2',R=+document.getElementById('dr').value;
  const P=[{n:n1,s:0,c:'#c5c0ec'},{n:n2,s:0,c:'#f9dfe2'}];let turn=0,t;
  const play=()=>{if(turn>=R*2){const w=P[0].s===P[1].s?tp('It\'s a draw!','¡Empate!'):(P[0].s>P[1].s?P[0].n:P[1].n)+' wins! 🏆';gb.innerHTML=`<p class="big">${esc(w)}</p><p>${esc(P[0].n)} ${P[0].s} · ${esc(P[1].n)} ${P[1].s}</p><div class="row"><button class="btn red" id="go">Rematch</button><a class="btn ghost" href="#juegos">More games</a></div>`;document.getElementById('go').onclick=()=>gDuel(gb);return}
   const p=P[turn%2],it=window.GEN.make(R0(window.GEN.units),'tr');let left=45,done=false;
   gb.innerHTML=`<div class="duelhd"><span style="background:${P[0].c}">${esc(P[0].n)} <b>${P[0].s}</b></span><span class="vs">Round ${Math.floor(turn/2)+1}/${R}</span><span style="background:${P[1].c}">${esc(P[1].n)} <b>${P[1].s}</b></span></div>
   <div class="turn" style="background:${p.c}">${esc(p.n)}'s turn · ⏱ <b id="clk">45</b>s</div><p class="gq" style="font-size:21px">${esc(it.q)}</p><p class="ins">${it.s?'Begin with: <b>'+esc(it.s)+'</b>':'Use the word: <b>'+esc(it.k)+'</b>'}</p><input class="t long" id="da" value="${esc(it.s?it.s+' ':'')}" autocomplete="off" spellcheck="false" aria-label="Answer"><div id="dfb"></div><div class="row"><button class="btn red" id="dck">Check</button></div>`;
   const inp=document.getElementById('da');inp.focus();
   const fin=()=>{if(done)return;done=true;clearInterval(t);const ok=match(inp.value,it.a);if(ok)p.s++;document.getElementById('dfb').innerHTML=`<div class="fb ${ok?'ok':'bad'}"><b>${ok?'Point for '+esc(p.n)+'!':'No point.'}</b> Answer: ${esc(it.a[0])}</div>`;const b=document.getElementById('dck');b.textContent='Next turn →';b.onclick=()=>{turn++;play()};b.focus()};
   document.getElementById('dck').onclick=fin;inp.onkeydown=e=>{if(e.key==='Enter')fin()};
   t=setInterval(()=>{left--;const c=document.getElementById('clk');if(c)c.textContent=left;if(left<=0)fin()},1000);timers.push(t)};
  play()},`<div class="row"><input class="t" id="p1" placeholder="Player 1" aria-label="Player 1 name"><input class="t" id="p2" placeholder="Player 2" aria-label="Player 2 name"><select id="dr" aria-label="Rounds"><option value="5">5 rounds</option><option value="8">8 rounds</option><option value="3">3 rounds</option></select></div>`);
}

/* 2 · Grammar escape room */
function gEscape(gb){
 introBox(gb,tx('You are locked in the school after hours! Five rooms, five grammar units. Answer 3 questions correctly in each room to get a digit of the exit code. Be quick: your time is recorded.','¡Te has quedado encerrado en el instituto! Cinco salas, cinco unidades de gramática. Acierta 3 preguntas en cada sala para conseguir un dígito del código de salida. Rápido: se guarda tu tiempo.'),()=>{
  const rooms=shuffle(window.GEN.units).slice(0,5),code=Array.from({length:5},()=>Math.floor(Math.random()*10)),t0=Date.now();let r=0,ok=0,it=null,res=null;
  const NAMES=['🔬 The science lab','📚 The library','🎭 The theatre','🏀 The gym','🍽 The canteen','💻 The computer room','🎨 The art room'];const rn=shuffle(NAMES);
  const draw=()=>{const u=G.find(x=>x.id===rooms[r]);
   if(!it)it=window.GEN.make(rooms[r],'mc');
   gb.innerHTML=`<div class="esc"><div class="eschd"><span>${rn[r]} · ${esc(u.name)}</span><span>🔑 ${code.slice(0,r).join(' ')}${' _'.repeat(5-r)}</span></div><div class="lock">${[0,1,2].map(i=>`<i class="${i<ok?'on':''}"></i>`).join('')}</div>
   ${it.ctx?`<p class="ctx">${esc(it.ctx)}</p>`:''}<p class="gq" style="font-size:21px">${esc(it.q).replace('___','<span class="blank"></span>')}</p><div class="opts" id="eo">${it.o.map((o,j)=>`<button class="opt" data-j="${j}">${esc(o)}</button>`).join('')}</div>${res||''}</div>`;
   document.getElementById('eo').onclick=e=>{const b=e.target.closest('.opt');if(!b||res)return;const good=+b.dataset.j===it.a;
    if(good){ok++;b.classList.add('ok');if(ok>=3){res=`<div class="fb ok"><b>🔓 ${tp('Room unlocked! Code digit','¡Sala abierta! Dígito del código')}: ${code[r]}</b></div><div class="row"><button class="btn red" id="enx">${r<4?'Next room →':'Go to the exit door →'}</button></div>`}else{res=null;it=null;setTimeout(draw,350);return}}
    else{b.classList.add('bad');document.querySelectorAll('#eo .opt')[it.a].classList.add('ok');res=`<div class="fb bad"><b>${tp('Wrong! The lock resets one step.','¡Fallo! El candado retrocede un paso.')}</b> ${tx(esc(it.e[0]),esc(it.e[1]))}</div><div class="row"><button class="btn" id="enx">Try another question</button></div>`;ok=Math.max(0,ok-1)}
    draw();const nx=document.getElementById('enx');if(nx)nx.onclick=()=>{if(ok>=3){r++;ok=0}res=null;it=null;r>=5?door():draw()}}};
  const door=()=>{gb.innerHTML=`<div class="esc"><p class="gq">🚪 ${tp('The exit door. Type the 5-digit code you collected, in order.','La puerta de salida. Escribe el código de 5 dígitos que has conseguido, en orden.')}</p><input class="t" id="ecd" inputmode="numeric" maxlength="5" style="font-size:28px;letter-spacing:.4em;width:220px;text-align:center" aria-label="Code"><div class="row"><button class="btn red" id="eok">Open</button></div><div id="efb"></div></div>`;
   const i=document.getElementById('ecd');i.focus();const go=()=>{if(i.value.replace(/\D/g,'')===code.join('')){const secs=Math.round((Date.now()-t0)/1000),rec=saveGame('escape',secs,true);gb.innerHTML=`<p class="big">🎉 ${tp('You escaped!','¡Has escapado!')}</p><p>Time: <b>${mmss(secs)}</b> ${rec?'· New record!':'· Record: '+mmss(store.get('games',{}).escape)}</p><div class="row"><button class="btn red" id="go">Play again</button><a class="btn ghost" href="#juegos">More games</a></div>`;document.getElementById('go').onclick=()=>gEscape(gb)}else document.getElementById('efb').innerHTML=`<div class="fb bad">${tp('Wrong code. Your digits were','Código incorrecto. Tus dígitos eran')}: ${code.join(' ')}</div>`};
   document.getElementById('eok').onclick=go;i.onkeydown=e=>{if(e.key==='Enter')go()}};
  draw()});
}

/* 3 · Tense timeline */
function gTimeline(gb){
 const ST=G2.stations;
 introBox(gb,tx('Where is the action in time? Read the sentence and tap the right point of the timeline for the highlighted verb.','¿Dónde está la acción en el tiempo? Lee la frase y toca el punto correcto de la línea temporal para el verbo resaltado.'),()=>{
  const qs=pick(G2.timeline,10);let i=0,sc=0,res=null,pk=null;
  const draw=()=>{if(i>=10){const rec=saveGame('timeline',sc);gb.innerHTML=endBox(sc+' / 10',rec?'New record!':'Record: '+store.get('games',{}).timeline+' / 10');document.getElementById('go').onclick=()=>gTimeline(gb);return}
   const[s,a]=qs[i];
   gb.innerHTML=`<div class="score"><span>${i+1} / 10</span><span>Correct: <b>${sc}</b></span></div><p class="gq" style="font-size:22px;margin-top:20px">${esc(s).replace(/\*([^*]+)\*/,'<b class="idm">$1</b>')}</p>
   <div class="tline" id="tl"><div class="tbar"></div>${ST.map(([k,l],j)=>`<button class="tst ${res?(k===a?'ok':k===pk?'bad':''):''}" data-k="${k}" style="left:${6+j*14.6}%"><i></i><span>${esc(l)}</span></button>`).join('')}<em class="nowmark" style="left:${6+4*14.6}%">NOW</em></div>
   ${res?`<div class="fb ${res}"><b>${res==='ok'?'Correct!':'Not quite.'}</b> ${esc(ST.find(x=>x[0]===a)[1])} → <i>${esc(ST.find(x=>x[0]===a)[2])}</i></div><div class="row"><button class="btn red" id="nx">Next</button></div>`:''}`;
   if(res){document.getElementById('nx').onclick=()=>{i++;res=null;pk=null;draw()};return}
   document.getElementById('tl').onclick=e=>{const b=e.target.closest('.tst');if(!b)return;pk=b.dataset.k;res=pk===a?'ok':'bad';if(res==='ok')sc++;draw()}};
  draw()});
}

/* 4 · Conditional chain */
function gChain(gb){
 introBox(gb,tx('Build the longest conditional chain: the result of each sentence becomes the condition of the next one. Choose the correct sentence. One mistake and the chain breaks!','Construye la cadena condicional más larga: el resultado de cada frase se convierte en la condición de la siguiente. Elige la frase correcta. ¡Un fallo y la cadena se rompe!'),()=>{
  const[type,L]=R0(G2.chains);let i=0,built=[];
  const w2=(b)=>b.startsWith('never ')?'would never '+b.slice(6):b.startsWith('not ')?"wouldn't "+b.slice(4):'would '+b;
  const w3=(pp)=>pp.startsWith('never ')?'would never have '+pp.slice(6):pp.startsWith('not ')?"wouldn't have "+pp.slice(4):'would have '+pp;
  const had=(pp)=>pp.startsWith('not ')?"hadn't "+pp.slice(4):pp.startsWith('never ')?'had never '+pp.slice(6):'had '+pp;
  const link=k=>{const[b1,p1,pp1,o1]=L[k],[b2,p2,pp2,o2]=L[k+1];
   if(type==='2'){const ok=`If I ${p1} ${o1}, I ${w2(b2)} ${o2}.`;return{ok,o:shuffle([ok,`If I would ${b1} ${o1}, I ${w2(b2)} ${o2}.`,`If I ${p1} ${o1}, I will ${b2.replace(/^never /,'never ').replace(/^not /,'not ')} ${o2}.`,`If I ${b1} ${o1}, I ${w3(pp2)} ${o2}.`].slice(0,4)).filter((x,j,a)=>a.indexOf(x)===j)}}
   const ok=`If I ${had(pp1)} ${o1}, I ${w3(pp2)} ${o2}.`;return{ok,o:shuffle([ok,`If I would have ${pp1.replace(/^not /,'not ')} ${o1}, I ${w3(pp2)} ${o2}.`,`If I ${had(pp1)} ${o1}, I ${w2(b2)} ${o2}.`,`If I ${p1} ${o1}, I ${w3(pp2)} ${o2}.`])}};
  const draw=(res)=>{if(i>=L.length-1){const rec=saveGame('chain',i);gb.innerHTML=`<div class="chain">${built.map(x=>`<p>🔗 ${esc(x)}</p>`).join('')}</div>`+endBox('🏆 '+i+' links','Perfect chain! '+(rec?'New record!':''));document.getElementById('go').onclick=()=>gChain(gb);return}
   const lk=link(i);
   gb.innerHTML=`<div class="score"><span>${type==='2'?'Second conditional':'Third conditional'}</span><span>Links: <b>${i}</b> / ${L.length-1}</span></div><div class="chain">${built.map(x=>`<p>🔗 ${esc(x)}</p>`).join('')}</div><p class="small" style="margin-top:14px">${tp('Choose the next correct link:','Elige el siguiente eslabón correcto:')}</p><div class="opts col" id="co">${lk.o.map(o=>`<button class="opt" data-v="${esc(o)}">${esc(o)}</button>`).join('')}</div>`;
   document.getElementById('co').onclick=e=>{const b=e.target.closest('.opt');if(!b)return;if(b.dataset.v===lk.ok){built.push(lk.ok);i++;draw()}else{b.classList.add('bad');[...document.querySelectorAll('#co .opt')].find(x=>x.dataset.v===lk.ok).classList.add('ok');const rec=saveGame('chain',i);
    gb.insertAdjacentHTML('beforeend',`<div class="fb bad"><b>💥 ${tp('The chain broke!','¡La cadena se ha roto!')}</b> ${type==='2'?tx('Second conditional: If + past simple, would + infinitive.','Segunda condicional: If + past simple, would + infinitivo.'):tx('Third conditional: If + past perfect, would have + past participle.','Tercera condicional: If + past perfect, would have + participio.')}<br>Links: ${i} ${rec?'· New record!':''}</div><div class="row"><button class="btn red" id="go">Play again</button><a class="btn ghost" href="#juegos">More games</a></div>`);document.getElementById('go').onclick=()=>gChain(gb);document.getElementById('co').onclick=null}}};
  draw()});
}

/* 5 · Word formation tower */
function gWordform(gb){
 introBox(gb,tx('Build the word family: write the noun, the adjective, the adverb and the opposite. Every correct word adds a block to your tower. Very useful for question 3 of the PAU!','Construye la familia de palabras: escribe el sustantivo, el adjetivo, el adverbio y el contrario. Cada acierto añade un bloque a tu torre. ¡Muy útil para la pregunta 3 de la PAU!'),()=>{
  const fams=pick(G2.families,6);let f=0,blocks=0,tot=0;const LB=['Noun','Adjective','Adverb','Opposite'];
  const draw=()=>{if(f>=fams.length){const rec=saveGame('wordform',blocks);gb.innerHTML=`<div class="tower">${'<i></i>'.repeat(blocks)}</div>`+endBox(`${blocks} / ${tot} blocks`,rec?'New record!':'Record: '+store.get('games',{}).wordform+' blocks');document.getElementById('go').onclick=()=>gWordform(gb);return}
   const fm=fams[f],slots=[1,2,3,4].filter(k=>fm[k]);
   gb.innerHTML=`<div class="wfwrap"><div><div class="score"><span>Family ${f+1} / ${fams.length}</span><span>🧱 ${blocks}</span></div><p class="gq" style="font-size:28px;margin:18px 0 6px">${esc(fm[0].toUpperCase())}</p>
   <div class="wfgrid">${slots.map(k=>`<label><span>${LB[k-1]}</span><input class="t" data-k="${k}" autocomplete="off" spellcheck="false"></label>`).join('')}</div><div id="wfb"></div><div class="row"><button class="btn red" id="wck">Check</button></div></div><div class="tower">${'<i></i>'.repeat(blocks)}</div></div>`;
   const ins=[...gb.querySelectorAll('.wfgrid input')];ins[0].focus();
   const ck=()=>{let got=0;ins.forEach(i=>{const k=+i.dataset.k,ans=fm[k].split(' / ').map(x=>x.trim());const g=ans.some(a=>a.toLowerCase()===i.value.trim().toLowerCase());i.classList.add(g?'ok':'bad');if(g)got++;else i.insertAdjacentHTML('afterend',`<small class="sol">→ ${esc(fm[k])}</small>`);i.disabled=true});
    blocks+=got;tot+=slots.length;const b=document.getElementById('wck');b.textContent='Next family →';b.onclick=()=>{f++;draw()};b.focus();document.querySelector('.tower').innerHTML='<i></i>'.repeat(blocks)};
   document.getElementById('wck').onclick=ck;ins.forEach(i=>i.onkeydown=e=>{if(e.key==='Enter'){const n=ins[ins.indexOf(i)+1];n?n.focus():ck()}})};
  draw()});
}

/* 6 · Synonym sniper */
function synPairs(){const P=[],seen=new Set();[...X,...(window.EXAMS_PAU||[])].forEach(e=>{const q=e.q3;if(!q)return;const add=(w,s)=>{w=String(w).trim();s=String(s).trim();if(!w||!s||w.split(' ').length>3||s.split(' ').length>3||seen.has(w.toLowerCase()))return;seen.add(w.toLowerCase());P.push([w,s])};
 if(q.mode==='find')(q.items||[]).forEach(([d,w])=>add(w,d));else(q.w||[]).forEach(([w,s])=>add(w,s))});return P}
function gSniper(gb){
 const P=synPairs();
 introBox(gb,tx(`Real synonyms from the PAU exams (${P.length} pairs). A word appears at the top: shoot its synonym before it flies away. 60 seconds. Wrong shots cost 3 seconds!`,`Sinónimos reales de los exámenes de la PAU (${P.length} parejas). Aparece una palabra arriba: dispara a su sinónimo antes de que se escape. 60 segundos. ¡Cada fallo te quita 3 segundos!`),()=>{
  let left=60,sc=0,stk=0,t,cur;const miss=[];
  const field=()=>{cur=R0(P);const opts=shuffle([cur[1],...shuffle(P.filter(p=>p[1]!==cur[1]).map(p=>p[1])).slice(0,4)]);
   gb.innerHTML=`<div class="score"><span>⏱ <b id="clk">${left}</b>s</span><span>Points: <b>${sc}</b></span><span>🔥 ${stk}</span></div><p class="gq" style="text-align:center;margin:16px 0 6px">🎯 ${esc(cur[0])}</p><div class="snf" id="snf">${opts.map((o,j)=>`<button class="snc" data-v="${esc(o)}" style="top:${8+j*18}%;animation-duration:${5+Math.random()*4}s;animation-delay:-${Math.random()*5}s">${esc(o)}</button>`).join('')}</div>`;
   document.getElementById('snf').onclick=e=>{const b=e.target.closest('.snc');if(!b)return;if(b.dataset.v===cur[1]){stk++;sc+=10+(stk>1?2*(stk-1):0);b.classList.add('hit');setTimeout(field,250)}else{stk=0;left=Math.max(0,left-3);b.classList.add('miss');miss.push(cur[0]+' = '+cur[1])}}};
  field();t=setInterval(()=>{left--;const c=document.getElementById('clk');if(c)c.textContent=left;if(left<=0){clearInterval(t);const rec=saveGame('sniper',sc);const um=[...new Set(miss)].slice(0,8);gb.innerHTML=endBox(sc+' points',(rec?'New record!':'Record: '+store.get('games',{}).sniper+' points')+(um.length?`<div class="model" style="text-align:left"><b>Review</b>${um.map(x=>'<br>• '+esc(x)).join('')}</div>`:''));document.getElementById('go').onclick=()=>gSniper(gb)}},1000);timers.push(t)});
}

/* 7 · Topic bingo */
function gBingo(gb){
 const T=V.filter(t=>t.g&&t.g.length>=20);
 introBox(gb,tx('Choose a topic. You get a card with 16 words. Clues appear one by one (a definition or a Spanish translation): tap the word if it is on your card, or press “Not on my card”. Get a line and then BINGO! Great for playing as a class.','Elige un tema. Recibes un cartón con 16 palabras. Aparecen pistas una a una (una definición o la traducción): toca la palabra si está en tu cartón o pulsa «Not on my card». ¡Haz línea y luego BINGO! Ideal para jugar con toda la clase.'),()=>{
  const t=T.find(x=>x.id===document.getElementById('bt').value)||T[0];const words=shuffle(t.g.slice()),card=words.slice(0,16),decoy=words.slice(16,24);
  const clue=w=>{const k=(t.key||[]).find(x=>x.w.toLowerCase()===String(w[0]).toLowerCase());return k&&Math.random()<.6?k.d:'🇪🇸 '+w[1]};
  const calls=shuffle([...card,...decoy]);let c=0,marked=new Set(),missed=new Set(),errs=0,lines=0,msg='';
  const lineCount=()=>{let n=0;for(let r=0;r<4;r++)if([0,1,2,3].every(k=>marked.has(r*4+k)))n++;for(let k=0;k<4;k++)if([0,1,2,3].every(r=>marked.has(r*4+k)))n++;return n};
  const draw=()=>{const w=calls[c];if(!w||marked.size===16){const acc=Math.max(0,Math.round(100-errs*100/Math.max(1,c)));const rec=saveGame('bingo',acc);gb.innerHTML=endBox(marked.size===16&&!missed.size?'🎉 BINGO!':marked.size===16?tp('Card complete','Cartón completo'):tp('Game over','Fin de la partida'),`${marked.size}/16 · ${errs} mistakes · accuracy ${acc}% ${rec?'· New record!':''}`);document.getElementById('go').onclick=()=>gBingo(gb);return}
   gb.innerHTML=`<div class="score"><span>${esc(t.name)}</span><span>Clue ${c+1} / ${calls.length}</span><span>✘ ${errs}</span></div><div class="bclue">${esc(clue(w))}</div>${msg?`<p class="bmsg">${msg}</p>`:''}
   <div class="bcard" id="bc">${card.map((x,j)=>`<button class="bcell ${missed.has(j)?'miss':marked.has(j)?'on':''}" data-j="${j}">${esc(x[0])}</button>`).join('')}</div><div class="row" style="justify-content:center"><button class="btn" id="bno">Not on my card</button></div>`;
   const nextCall=()=>{c++;const l=lineCount();if(l>lines){msg=l===1?'🎉 LINE!':'🎉 '+l+' lines!';lines=l}else msg='';draw()};
   document.getElementById('bc').onclick=e=>{const b=e.target.closest('.bcell');if(!b||b.classList.contains('on'))return;const j=+b.dataset.j;if(card[j]===w){marked.add(j);nextCall()}else{errs++;b.classList.add('shake');setTimeout(()=>b.classList.remove('shake'),400)}};
   document.getElementById('bno').onclick=()=>{const j=card.indexOf(w);if(j>=0){errs++;marked.add(j);missed.add(j);msg=tp('It was on your card: ','Estaba en tu cartón: ')+esc(w[0]);c++;draw()}else nextCall()}};
  draw()},`<div class="row"><label class="small" for="bt">Topic</label><select id="bt">${T.map(t=>`<option value="${t.id}">${esc(t.name)}</option>`).join('')}</select></div>`);
}

/* 8 · False friends trap */
function gFalse(gb){
 introBox(gb,tx('Words that look Spanish but mean something different! Decide if each sentence is correct or falls into the false-friend trap.','¡Palabras que parecen españolas pero significan otra cosa! Decide si cada frase es correcta o cae en la trampa del falso amigo.'),()=>{
  const qs=pick(G2.falsefriends,10);let i=0,sc=0,res=null;
  const draw=()=>{if(i>=10){const rec=saveGame('falsefriends',sc);gb.innerHTML=endBox(sc+' / 10',rec?'New record!':'Record: '+store.get('games',{}).falsefriends+' / 10');document.getElementById('go').onclick=()=>gFalse(gb);return}
   const[s,ok,fix,es]=qs[i];
   gb.innerHTML=`<div class="score"><span>${i+1} / 10</span><span>Correct: <b>${sc}</b></span></div><p class="gq" style="margin-top:24px">“${esc(s)}”</p>${res?`<div class="fb ${res}"><b>${res==='ok'?'Well done!':'Trap!'}</b> ${ok?'The sentence is correct.':'Correct version: <b>'+esc(fix)+'</b>'}<br>🇪🇸 ${esc(es)}${ok?'<br>'+esc(fix):''}</div><div class="row"><button class="btn red" id="nx">Next</button></div>`:`<div class="opts" id="fo"><button class="opt" data-v="1">✔ Correct</button><button class="opt" data-v="0">🪤 False friend!</button></div>`}`;
   if(res){document.getElementById('nx').onclick=()=>{i++;res=null;draw()};return}
   document.getElementById('fo').onclick=e=>{const b=e.target.closest('.opt');if(!b)return;const g=(b.dataset.v==='1')===ok;if(g)sc++;res=g?'ok':'bad';draw()}};
  draw()});
}

/* 9 · Paragraph puzzle */
function gPuzzle(gb){
 const M=X.filter(e=>e.q5&&e.q5.model&&e.q5.model.split(/\n\s*\n/).length>=3);
 introBox(gb,tx('Rebuild a model PAU composition. Step 1: put the paragraphs in order. Step 2: put the sentences of one paragraph in order. Look at linkers and topic sentences!','Reconstruye una redacción modelo de la PAU. Paso 1: ordena los párrafos. Paso 2: ordena las frases de un párrafo. ¡Fíjate en los conectores y en las frases temáticas!'),()=>{
  const e=R0(M),paras=e.q5.model.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);let score=0;
  const order=(items,title,label,done)=>{const pool=shuffle(items.map((x,i)=>({x,i})));const chosen=[];
   const draw=(checked)=>{gb.innerHTML=`<div class="score"><span>${title}</span><span>Points: <b>${score}</b></span></div><p class="small" style="margin:10px 0"><b>Task:</b> ${esc(e.q5.A)}</p>
    <div class="pzdone">${chosen.map((c,k)=>`<button class="pz ${checked?(c.i===k?'ok':'bad'):''}" data-c="${k}"><b>${label(k)}</b>${esc(c.x)}</button>`).join('')||`<p class="small">${tp('Tap the pieces below in the correct order.','Toca las piezas de abajo en el orden correcto.')}</p>`}</div>
    <div class="pzpool">${pool.filter(p=>!chosen.includes(p)).map(p=>`<button class="pz" data-p="${p.i}">${esc(p.x)}</button>`).join('')}</div>
    ${checked?`<div class="fb ${checked.all?'ok':'bad'}"><b>${checked.n} / ${items.length} ${tp('in the right place','en su sitio')}</b>${checked.all?'':'<br>'+tp('Correct order:','Orden correcto:')+'<ol>'+items.map(x=>'<li>'+esc(x.slice(0,90))+(x.length>90?'…':'')+'</li>').join('')+'</ol>'}</div><div class="row"><button class="btn red" id="pzn">Continue →</button></div>`:(chosen.length===items.length?`<div class="row"><button class="btn red" id="pzc">Check</button><button class="btn ghost" id="pzr">Start again</button></div>`:'')}`;
    if(checked){document.getElementById('pzn').onclick=done;return}
    gb.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{chosen.push(pool.find(p=>p.i===+b.dataset.p));draw()});
    gb.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{chosen.splice(+b.dataset.c,1);draw()});
    const c=document.getElementById('pzc');if(c)c.onclick=()=>{const n=chosen.filter((x,k)=>x.i===k).length;score+=n*10;draw({n,all:n===items.length})};
    const r=document.getElementById('pzr');if(r)r.onclick=()=>{chosen.length=0;draw()}};
   draw()};
  const lab=k=>k===0?'Introduction':k===paras.length-1?'Conclusion':'Body '+k;
  order(paras,'Step 1 · Paragraphs',k=>lab(k)+' · ',()=>{const body=paras.slice(1,-1).map(p=>p.split(/(?<=[.!?])\s+/)).filter(s=>s.length>=3);const sents=(body.length?R0(body):paras[0].split(/(?<=[.!?])\s+/));
   order(sents,'Step 2 · Sentences',k=>(k+1)+'. ',()=>{const rec=saveGame('puzzle',score);gb.innerHTML=endBox(score+' points',rec?'New record!':'Record: '+store.get('games',{}).puzzle+' points');document.getElementById('go').onclick=()=>gPuzzle(gb)})});
 });
}

/* 10 · Upgrade it! */
function gUpgrade(gb){
 introBox(gb,tx('Raise the level of your writing! Choose the version that would get the highest mark in the PAU. At the end, upgrade a sentence yourself.','¡Sube el nivel de tu writing! Elige la versión que tendría más nota en la PAU. Al final, mejora tú una frase.'),()=>{
  const qs=pick(G2.upgrade,8);let i=0,sc=0,res=null,pk=null;
  const draw=()=>{if(i>=qs.length){const rec=saveGame('upgrade',sc);const b=R0(G2.upgrade)[0];
    gb.innerHTML=`<p class="big">${sc} / ${qs.length}</p><p>${rec?'New record!':'Record: '+store.get('games',{}).upgrade}</p><div class="qb"><h3>✍️ ${tp('Your turn: upgrade this sentence','Tu turno: mejora esta frase')}</h3><p class="gq" style="font-size:20px">“${esc(b)}”</p><textarea id="upt" rows="3" aria-label="Your upgraded sentence"></textarea><div class="row"><button class="btn red" id="upc">Check my upgrade</button></div><div id="upf"></div></div><div class="row"><button class="btn" id="go">Play again</button><a class="btn ghost" href="#juegos">More games</a></div>`;
    document.getElementById('go').onclick=()=>gUpgrade(gb);
    document.getElementById('upc').onclick=()=>{const v=document.getElementById('upt').value,r=window.WLAB?window.WLAB.mark(v):{adv:[],errs:[],n:words(v)};const nw=words(v),nb=words(b);
     document.getElementById('upf').innerHTML=`<div class="fb ${r.adv.length&&nw>nb&&!r.errs.length?'ok':'bad'}"><ul class="cks"><li class="${nw>nb?'cky':'ckn'}">${nw>nb?'✔':'✘'} ${tp('Longer and more developed','Más larga y desarrollada')} (${nw} vs ${nb} words)</li><li class="${r.adv.length?'cky':'ckn'}">${r.adv.length?'✔':'✘'} ${tp('Advanced structures','Estructuras avanzadas')}: ${esc(r.adv.join(', ')||'—')}</li><li class="${r.errs.length?'ckn':'cky'}">${r.errs.length?'✘ '+r.errs.map(x=>esc(x.txt)).join(', '):'✔ '+tp('No typical mistakes detected','Sin errores típicos detectados')}</li></ul></div>`}
    return}
   const[b,o,a,en,es]=qs[i];
   gb.innerHTML=`<div class="score"><span>${i+1} / ${qs.length}</span><span>Correct: <b>${sc}</b></span></div><p class="small" style="margin-top:18px">${tp('Basic sentence:','Frase básica:')}</p><p class="gq" style="font-size:20px">“${esc(b)}”</p><p class="small">${tp('Which version would get the highest mark?','¿Qué versión tendría más nota?')}</p><div class="opts col" id="uo">${o.map((x,j)=>`<button class="opt ${res?(j===a?'ok':j===pk?'bad':''):''}" data-j="${j}">${esc(x)}</button>`).join('')}</div>${res?`<div class="fb ${res}"><b>${res==='ok'?'Great choice!':'Not the best one.'}</b> ${tx(esc(en),esc(es))}</div><div class="row"><button class="btn red" id="nx">Next</button></div>`:''}`;
   if(res){document.getElementById('nx').onclick=()=>{i++;res=null;pk=null;draw()};return}
   document.getElementById('uo').onclick=e=>{const bt=e.target.closest('.opt');if(!bt)return;pk=+bt.dataset.j;res=pk===a?'ok':'bad';if(res==='ok')sc++;draw()}};
  draw()});
}

/* 11 · Linker sprint */
function gLinks(gb){
 const C=G2.linkCats;
 gRush(gb,'linksprint',60,()=>{const[a,b,rel]=R0(G2.links),ok=R0(C[rel]),others=Object.keys(C).filter(k=>k!==rel).map(k=>R0(C[k]));const bb=b.charAt(0).toLowerCase()+b.slice(1);
  return{html:`${esc(a)} <span class="blank"></span> ${esc(bb)}`,o:shuffle([ok,...others]),ok:C[rel],learn:`${a} ${ok} ${bb} (${rel})`}},tx('60 seconds! Join the two ideas with the right linker: contrast (however), result (therefore), addition (moreover) or example (for instance).','¡60 segundos! Une las dos ideas con el conector correcto: contraste (however), consecuencia (therefore), adición (moreover) o ejemplo (for instance).'));
}

/* 12 · Examiner's red pen */
function gRedPen(gb){
 introBox(gb,tx('You are the PAU examiner! This composition has 8 or 9 hidden mistakes. Tap the words that are wrong. Careful: tapping a correct word costs you points. You have 3 minutes.','¡Eres el corrector de la PAU! Esta redacción tiene 8 o 9 errores escondidos. Toca las palabras incorrectas. Cuidado: tocar una palabra correcta resta puntos. Tienes 3 minutos.'),()=>{
  const E=R0(G2.redpen);const segs=[];let last=0;E.x.replace(/\{([^|}]*)\|([^|}]*)\|([^}]*)\}/g,(m,w,r,ex,off)=>{segs.push({t:E.x.slice(last,off)});segs.push(w===r?{t:w}:{w,r,ex});last=off+m.length;return m});segs.push({t:E.x.slice(last)});
  const errs=segs.filter(s=>s.w);let found=0,wrongTaps=0,left=180,t,over=false;
  const html=()=>segs.map((s,k)=>s.w?`<span class="rp e ${s.f?'found':''} ${over&&!s.f?'missed':''}" data-k="${k}">${s.f||over?`<s>${esc(s.w)}</s> <b>${esc(s.r)}</b>`:esc(s.w)}</span>`:s.t.split(/(\n\n)/).map(p=>p==='\n\n'?'<br><br>':p.split(/(\s+)/).map(w=>/\S/.test(w)?`<span class="rp">${esc(w)}</span>`:w).join('')).join('')).join('');
  const draw=()=>{gb.innerHTML=`<div class="score"><span>⏱ <b id="clk">${mmss(left)}</b></span><span>Found: <b>${found}</b> / ${errs.length}</span><span>✘ ${wrongTaps}</span></div><p class="small" style="margin:12px 0 6px"><b>Task:</b> ${esc(E.t)}</p><div class="rpaper" id="rpp">${html()}</div>
   ${over?`<div class="fb ${found===errs.length?'ok':'bad'}"><b>${found} / ${errs.length} ${tp('mistakes found','errores encontrados')}</b>${errs.map(s=>`<br>• <s>${esc(s.w)}</s> → <b>${esc(s.r)}</b>: ${esc(s.ex)}`).join('')}<br><br>${tp('With these mistakes, the grammar mark of this text would be about','Con estos errores, la nota de gramática de este texto sería de unos')} <b>${nf(Math.max(0,Math.round((1-errs.length*.1)*4)/4))} / 1</b>.</div><div class="row"><button class="btn red" id="go">Another text</button><a class="btn ghost" href="#juegos">More games</a></div>`:`<div class="row"><button class="btn ghost" id="rpd">I've finished</button></div>`}`;
   if(over){document.getElementById('go').onclick=()=>gRedPen(gb);return}
   document.getElementById('rpd').onclick=finish;
   document.getElementById('rpp').onclick=e=>{const sp=e.target.closest('.rp');if(!sp)return;if(sp.classList.contains('e')){const s=segs[+sp.dataset.k];if(!s.f){s.f=1;found++;if(found===errs.length)return finish();draw()}}else if(!sp.classList.contains('no')){wrongTaps++;sp.classList.add('no');document.querySelector('.score span:last-child').textContent='✘ '+wrongTaps}}};
  const finish=()=>{if(over)return;over=true;clearInterval(t);const pts=Math.max(0,found*10-wrongTaps*3);saveGame('redpen',pts);draw()};
  draw();t=setInterval(()=>{left--;const c=document.getElementById('clk');if(c)c.textContent=mmss(left);if(left<=0)finish()},1000);timers.push(t)});
}

/* ---------- PAU (Comunitat Valenciana) ---------- */
const PARTS=[['1','True / False with evidence','2 points','#7ec9e6',2],['2','Two open questions','2.5 points','#7eb991',2.5],['3','Synonyms','1 point','#f6bb83',1],['4','Multiple choice','1.5 points','#cc7da7',1.5],['5','Composition 130–150 words','3 points','#ef908a',3]];
const EKEY='examsCV',examBestCV=()=>store.get(EKEY,{});
let pCat='All',pSet='modelos',pYear='All';
const PX=window.EXAMS_PAU||[],PEXT=window.PAU_EXT||[];
function seeded(str){let h=7;for(const c of str)h=(h*31+c.charCodeAt(0))%2147483647;return()=>{h=(h*16807)%2147483647;return h/2147483647}}
function pau(){
 const eb=examBestCV(),SRC=pSet==='reales'?PX:X,cats=['All',...new Set(SRC.map(e=>e.cat))];if(!cats.includes(pCat))pCat='All';
 const years=['All',...new Set(PX.map(e=>e.year))];
 const list=SRC.filter(e=>(pCat==='All'||e.cat===pCat)&&(pSet!=='reales'||pYear==='All'||e.year==pYear));
 app.innerHTML=`<section class="band"><div class="wrap"><h1>PAU exams · Comunitat Valenciana</h1><p class="lead">${tx(`${X.length} mock exams and ${PX.length} real Valencian PAU exams (2007–2024) adapted to the 2026 structure: five questions, 10 points and 90 minutes. Questions 1, 3 and 4 are marked automatically; you self-assess questions 2 and 5 with a guide answer and the official criteria.`,`${X.length} modelos de práctica y ${PX.length} exámenes reales de la PAU valenciana (2007–2024) adaptados a la estructura de 2026: cinco preguntas, 10 puntos y 90 minutos. Las preguntas 1, 3 y 4 se corrigen solas; la 2 y la 5 se autoevalúan con respuesta orientativa y los criterios oficiales.`)}</p>
 <div class="struct">${PARTS.map(p=>`<div style="background:${p[3]};width:${p[4]*10}%"><b>${p[0]}</b><span>${p[1]}<br><strong>${p[2]}</strong></span></div>`).join('')}</div></div></section>
 <section class="band" style="padding-top:0"><div class="wrap"><div class="row" style="justify-content:space-between;margin:0 0 16px"><h2>Choose an exam</h2><span class="small">${Object.keys(eb).length} of ${X.length+PX.length} done</span></div>
 <div class="tabs" id="psets"><button data-s="modelos" class="${pSet==='modelos'?'on':''}">2026 mock exams (${X.length})</button><button data-s="reales" class="${pSet==='reales'?'on':''}">Real exams 2007–2024 (${PX.length})</button></div>
 ${pSet==='reales'?`<div class="row" style="margin:0 0 12px"><label for="pyear" class="small">Year</label><select id="pyear">${years.map(y=>`<option ${y==pYear?'selected':''}>${y}</option>`).join('')}</select><span class="small">${list.length} exams</span></div>`:''}
 <div class="chips" id="cats" style="margin:0 0 18px">${cats.map(c=>`<button class="chip ${c===pCat?'on':''}" data-c="${esc(c)}">${esc(c)}</button>`).join('')}</div>
 <div class="cards">${list.map(e=>{const n=SRC.indexOf(e)+1;return`<a class="card" href="#pau-${e.id}" style="--c:${e.color}"><span class="dot"></span><span class="small">${e.official?esc(e.conv)+' · Text '+e.opt:'Mock '+n} · ${esc(e.cat)} · ${esc(e.topic)}</span><h3>${esc(e.title)}</h3><span class="go">${eb[e.id]!=null?'Best mark: '+nf(eb[e.id])+' · Retake →':'Start →'}</span></a>`}).join('')}</div>
 ${pSet==='reales'?`<p class="small" style="margin-top:14px">${tx("Texts from the official exams of the Comissió Gestora de les Proves d'Accés a la Universitat. Questions adapted to the 2026 format: a fourth True/False statement, a fourth option in question 4 and a second composition topic where the original had only one have been added. The answers and guide answers are not official.","Textos de los exámenes oficiales de la Comissió Gestora de les Proves d'Accés a la Universitat. Preguntas adaptadas al formato 2026: se ha añadido una cuarta afirmación True/False, una cuarta opción en la pregunta 4 y un segundo tema de redacción cuando el original solo tenía uno. Las soluciones y respuestas orientativas no son oficiales.")}</p>
 <details style="margin-top:18px"><summary>Other Comunitat Valenciana exams (${PEXT.length}) · link to the original</summary><p class="small">${tx('These exams were not included in the dossier, so they have no interactive version. They open on the original website.','Estos exámenes no estaban incluidos en el dossier, así que no tienen versión interactiva. Se abren en la web de origen.')}</p><div class="tw"><table class="vt"><thead><tr><th>Year</th><th>Title</th><th></th></tr></thead><tbody>${PEXT.map(x=>`<tr><td>${x.year}</td><td>${esc(x.title)}</td><td><a href="${esc(x.url)}" target="_blank" rel="noopener">Open ↗</a></td></tr>`).join('')}</tbody></table></div></details>`:`<p class="small" style="margin-top:14px">${tx('The class mock exams are adapted by the teacher; the other mocks are original texts written to practise the official format.','Los simulacros de clase son adaptaciones de la profesora; los demás modelos son textos originales escritos para practicar con el formato oficial.')}</p>`}</div></section>
 <section class="band" style="padding-top:0"><div class="wrap" style="max-width:900px"><h2 style="margin-bottom:8px">Strategies, question by question</h2>
 ${STRAT.map(([h,items],i)=>`<details ${i?'':'open'}><summary>${h}</summary><ul>${items.map(([en,es])=>`<li>${tx(en,es)}</li>`).join('')}</ul></details>`).join('')}
 </div></section>`;
 document.getElementById('cats').onclick=e=>{const b=e.target.closest('.chip');if(b){pCat=b.dataset.c;pau()}};
 document.getElementById('psets').onclick=e=>{const b=e.target.closest('button');if(b){pSet=b.dataset.s;pCat='Todos';pau()}};
 const py=document.getElementById('pyear');if(py)py.onchange=()=>{pYear=py.value;pau()};
}
const STRAT=[
['1 · True or False (2 points)',[['Answer all <b>four</b> statements (0.5 each).','Responde a las <b>cuatro</b> afirmaciones (0,5 cada una).'],['Write True or False and copy the exact part of the text that proves it. No evidence, 0 points.','Escribe True o False y copia el fragmento exacto del texto que lo justifica. Sin justificación, 0 puntos.'],['Look for the key words in the statement or their synonyms: the statements usually follow the order of the text.','Busca las palabras clave del enunciado o sus sinónimos: las afirmaciones suelen seguir el orden del texto.'],['Be careful with words like <i>all, never, only, always</i>: they often mean the statement is false.','Cuidado con palabras como <i>all, never, only, always</i>: suelen indicar que la afirmación es falsa.']]],
['2 · Open questions (2.5 points)',[['Two questions worth 1.25 points: 0.75 for comprehension and 0.5 for accuracy and expression.','Dos preguntas de 1,25 puntos: 0,75 por la comprensión y 0,5 por la corrección y la expresión.'],["Don't copy sentences from the text: paraphrase with synonyms and other structures (active ↔ passive, noun ↔ verb).",'No copies frases del texto: reformula con sinónimos y otras estructuras (activa ↔ pasiva, nombre ↔ verbo).'],['Two or three complete, well-linked sentences are enough.','Dos o tres frases completas y bien conectadas son suficientes.']]],
['3 · Synonyms (1 point)',[['Four items and six options: two are extra. You may be asked for synonyms of underlined words or to find in the text (words in bold) the synonym of the words given.','Cuatro ítems y seis opciones: dos sobran. Puede pedirse el sinónimo de palabras subrayadas o encontrar en el texto (palabras en negrita) el sinónimo de las palabras dadas.'],['Read the whole sentence: the synonym must fit the context and be the same word class.','Lee la frase completa: el sinónimo tiene que encajar en ese contexto y en la misma categoría gramatical.'],["Start with the ones you're sure about and rule out the rest.",'Empieza por las que tengas claras y descarta.']]],
['4 · Multiple choice (1.5 points)',[['Three questions worth 0.5 with four options; wrong answers are not penalised.','Tres preguntas de 0,5 con cuatro opciones; no se resta por error.'],['Find the paragraph and check each option against the text: wrong options often mix words from the text with false information.','Localiza el párrafo y comprueba cada opción con el texto: las incorrectas suelen mezclar palabras del texto con información falsa.']]],
['5 · Composition (3 points)',[['Choose one of the two topics: opinion, advantages and disadvantages, or narrative.','Elige uno de los dos temas: opinión, ventajas e inconvenientes o narración.'],['Length: about 130 to 150 words. Count your words.','Extensión de 130 a 150 palabras aproximadamente: cuenta las palabras.'],['Criteria: strategic aspects (0.25), grammatical accuracy (1), clarity and organisation (0.75), lexical range and richness (1).','Criterios: aspectos estratégicos (0,25), corrección gramatical (1), claridad y organización (0,75), variedad y riqueza léxica (1).'],['Structure: introduction with your position, two paragraphs with reasons and examples, conclusion. Use a variety of linkers.','Estructura: introducción con tu postura, dos párrafos con razones y ejemplos, conclusión. Usa conectores variados.']]]];
const RUB=[['Strategic aspects (presentation, spelling, paragraphs, punctuation)',[0,.25]],['Grammatical accuracy',[0,.25,.5,.75,1]],['Clarity of expression and organisation',[0,.25,.5,.75]],['Lexical range, richness and precision',[0,.25,.5,.75,1]]];
function overlap(j,ev){const w=s=>base(s).replace(/[^a-z' ]/g,' ').split(/\s+/).filter(x=>x.length>3);const E=w(ev),J=new Set(w(j));return E.length?E.filter(x=>J.has(x)).length/E.length:0}
function markBold(paras,ws){const used=ws.map(()=>false);return paras.map((p,pi)=>{let h=esc(p);ws.forEach((w,i)=>{if(used[i])return;const re=new RegExp('\\b('+esc(w).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')\\b','i');if(re.test(h)){h=h.replace(re,'<b class="bw">$1</b>');used[i]=true}});return`<p><span class="pn">¶${pi+1}</span>${h}</p>`}).join('')}
function markText(paras,ws){const used=ws.map(()=>false);return paras.map((p,pi)=>{let h=esc(p);ws.forEach((w,i)=>{if(used[i])return;const re=new RegExp('\\b('+esc(w).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')\\b');if(re.test(h)){h=h.replace(re,`<u class="uw">$1<sup>${i+1}</sup></u>`);used[i]=true}});return`<p><span class="pn">¶${pi+1}</span>${h}</p>`}).join('')}
function exam(id){
 const e=X.find(x=>x.id===id)||PX.find(x=>x.id===id);if(!e){pau();return}
 const LST=e.official?PX:X,K='cv-'+e.id,num=LST.indexOf(e)+1;
 const blank=()=>({q1:{},j:{},ok:{},q2:{},q3:{},q4:{},task:'A',w:{A:'',B:''},s2:{},rub:{},done:false,t:5400});
 let A=Object.assign(blank(),store.get(K,{}));
 const save=()=>store.set(K,A);
 const rnd=seeded(e.id),ord=e.q4.map(()=>[0,1,2,3]);
 e.q4.forEach((q,i)=>{const o=[0,1,2,3];if(q.fixed){ord[i]=o;return}for(let k=3;k>0;k--){const j=Math.floor(rnd()*(k+1));[o[k],o[j]]=[o[j],o[k]]}ord[i]=o});
 const F3=e.q3.mode==='find';
 const Q3=F3?e.q3.items.map(([l,a])=>({l,a})):e.q3.w.map(([w,a])=>({l:w,a,u:1}));
 const bank=F3?e.q3.opts.slice():[...e.q3.w.map(x=>x[1]),...e.q3.x].sort((a,b)=>a.localeCompare(b));
 let running=false,iv=null;
 const fmt=t=>`${String(Math.floor(t/60)).padStart(2,'0')}:${String(t%60).padStart(2,'0')}`;
 const L='abcd';
 function score(){
  const r1=e.q1.map((it,i)=>{const a=A.q1[i];if(!a)return{st:'skip',p:0,msg:'Not answered.'};
   if(a!==it.a)return{st:'bad',p:0,msg:`Incorrect. It is ${it.a==='T'?'True':'False'}.`};
   if(A.ok[i]||overlap(A.j[i],it.ev)>=.5)return{st:'ok',p:.5,msg:'Correct, with valid evidence.'};
   return{st:'bad',p:0,msg:tx('The answer is correct, but your evidence does not match the key part of the text.','La respuesta es correcta, pero la justificación no coincide con el fragmento clave del texto.'),chk:1}});
  const q1=r1.reduce((s,r)=>s+r.p,0);
  const q2=Object.values(A.s2).reduce((s,v)=>s+(+v||0),0);
  const r3=Q3.map((w,i)=>A.q3[i]===w.a);const q3=r3.filter(Boolean).length*.25;
  const r4=e.q4.map((q,i)=>A.q4[i]!=null?(+A.q4[i]===q.a):null);const q4=r4.filter(x=>x===true).length*.5;
  const q5=Object.values(A.rub).reduce((s,v)=>s+(+v||0),0);
  return{r1,q1,q2,r3,q3,r4,q4,q5,total:q1+q2+q3+q4+q5};
 }
 function render(){
  const S=A.done?score():null;
  const sel=(name,vals,cur)=>`<select data-s="${name}" aria-label="Mark"><option value="">Mark</option>${vals.map(v=>`<option value="${v}" ${cur!=null&&cur!==''&&+cur===v?'selected':''}>${nf(v)}</option>`).join('')}</select>`;
  const wc=words(A.w[A.task]);
  app.innerHTML=`<div class="exhd"><div class="in"><a href="#pau" style="font-weight:700;text-decoration:none">← Exams</a><h3>${e.official?esc(e.label):'Mock '+num} · ${esc(e.title)}</h3><span class="clock ${A.t<600?'low':''}" id="clk">${fmt(A.t)}</span><button class="btn ghost" id="tmr">${running?'Pause':'Start timer'}</button><button class="btn red" id="fix">${A.done?'Mark again':'Mark'}</button></div></div>
  <div class="band"><div class="wrap exam">
  <article class="text"><span class="small">${e.official?esc(e.label)+' · official exam':esc(e.cat)+' · '+esc(e.topic)+' · practice text'}</span><h2>${esc(e.title)}</h2>${F3?markBold(e.text,e.q3.opts):markText(e.text,e.q3.w.map(x=>x[0]))}${e.source?`<p class="small" style="padding-left:32px"><i>${esc(e.source)}</i></p>`:''}</article>
  <div class="qs">
  <section class="qb"><h3>1. True or False <small>2 points${S?` · ${nf(S.q1)}`:''}</small></h3><p class="ins2">Are the following statements true (T) or false (F)? Copy the evidence from the text.${tx(' Answer all four; no evidence, no marks (0.5 each).',' Responde a las cuatro; sin justificación no se puntúa (0,5 cada una).')}</p>
  ${e.q1.map((it,i)=>{const r=S&&S.r1[i];return`<div class="q"><p><span class="n">${L[i]}</span>${esc(it.s)}</p><div class="seg" data-q1="${i}">${['T','F'].map(v=>`<button data-v="${v}" class="${A.q1[i]===v?'on':''}">${v}</button>`).join('')}</div>
  <textarea rows="2" data-j="${i}" placeholder="Evidence from the text" class="${r&&r.st!=='skip'?r.st:''}">${esc(A.j[i]||'')}</textarea>
  ${r?`<div class="fb ${r.st==='ok'?'ok':'bad'}">${r.msg}${r.chk||A.ok[i]?`<label style="display:flex;gap:8px;align-items:center;margin-top:6px"><input type="checkbox" data-ok="${i}" ${A.ok[i]?'checked':''}> ${tp('My quote is another part of the text that also proves it','Mi cita es otro fragmento del texto que también lo demuestra')}</label>`:''}</div><div class="model"><b>Answer</b>${it.a==='T'?'True':'False'}: “${esc(it.ev)}”</div>`:''}</div>`}).join('')}</section>
  <section class="qb"><h3>2. Answer the questions <small>2.5 points${S?` · ${nf(S.q2)}`:''}</small></h3><p class="ins2">Answer the following questions using your own words but taking into account the information in the text.${tx(' (1.25 each: 0.75 comprehension and 0.5 expression.)',' (1,25 cada una: 0,75 comprensión y 0,5 expresión).')}</p>
  ${e.q2.map((it,i)=>`<div class="q"><p><span class="n">${L[i]}</span>${esc(it.q)}</p><textarea rows="4" data-q2="${i}">${esc(A.q2[i]||'')}</textarea>${S?`<div class="model"><b>Guide answer</b>${esc(it.m)}</div><div class="row" style="margin-top:8px"><span class="small">Your mark (max. 1.25):</span>${sel('s2-'+i,[0,.25,.5,.75,1,1.25],A.s2[i])}</div>`:''}</div>`).join('')}</section>
  <section class="qb"><h3>3. Synonyms <small>1 point${S?` · ${nf(S.q3)}`:''}</small></h3><p class="ins2">${F3?'Write a synonym for each of the four words below from these six options. All words are in bold in the text':'Find a synonym for the four words underlined in the text. Choose from these options'}${tx(' (two are extra; 0.25 each):',' (sobran dos; 0,25 cada una):')}</p>
  <div class="chips" style="margin:4px 0 8px">${bank.map(b=>`<span class="chip" style="cursor:default">${esc(b)}</span>`).join('')}</div>
  ${Q3.map(({l:w,a:s,u},i)=>`<div class="q syn"><span><span class="n">${F3?L[i]:i+1}</span>${u?`<u>${esc(w)}</u>`:`<b>${esc(w)}</b>`}</span><span><select data-q3="${i}" class="${S?(S.r3[i]?'ok':'bad'):''}" aria-label="Synonym of ${esc(w)}"><option value="">Choose…</option>${bank.map(b=>`<option ${A.q3[i]===b?'selected':''}>${esc(b)}</option>`).join('')}</select>${S&&!S.r3[i]?`<span class="sol">${esc(s)}</span>`:''}</span></div>`).join('')}</section>
  <section class="qb"><h3>4. Multiple choice <small>1.5 points${S?` · ${nf(S.q4)}`:''}</small></h3><p class="ins2">Choose a, b, c or d in each question below. Only one choice is correct.${tx(' (0.5 each; no negative marking.)',' (0,5 cada una; no se resta).')}</p>
  ${e.q4.map((q,i)=>{const r=S&&S.r4[i];return`<div class="q"><p><span class="n">${i+1}</span>${esc(q.q)}</p><div class="mcl">${ord[i].map((oi,k)=>`<label class="mco ${S&&oi===q.a?'ok':''} ${S&&r===false&&+A.q4[i]===oi?'bad':''}"><input type="radio" name="q4-${i}" data-q4="${i}" value="${oi}" ${A.q4[i]!=null&&+A.q4[i]===oi?'checked':''}><b>${L[k]})</b> ${esc(q.o[oi])}</label>`).join('')}</div></div>`}).join('')}</section>
  <section class="qb"><h3>5. Composition <small>3 points${S?` · ${nf(S.q5)}`:''}</small></h3><p class="ins2">Choose one of these two topics and write a composition about it (130 to 150 words approximately).</p>
  ${['A','B'].map(t=>`<label class="q" style="display:flex;gap:12px;cursor:pointer"><input type="radio" name="task" value="${t}" ${A.task===t?'checked':''} style="width:22px;height:22px;flex:none;margin-top:3px"><span><b>${t}.</b> ${esc(e.q5[t])}</span></label>`).join('')}
  <textarea rows="11" id="wr" style="margin-top:12px" aria-label="Composition">${esc(A.w[A.task])}</textarea><p class="wc ${wc&&(wc<120||wc>160)?'bad':''}" id="wc">${wc} words · target 130–150</p>
  <div class="row" style="margin-top:4px"><button class="btn ghost" id="cp">Copy my composition</button></div>
  ${S?`<div class="rub">${RUB.map(([c,vals],i)=>`<span>${c} <span class="small">(max. ${nf(vals[vals.length-1])})</span></span>${sel('rub-'+i,vals,A.rub[i])}`).join('')}</div><p class="small" style="margin-top:8px">${tx('Mark yourself honestly or ask your teacher to do it.','Puntúa con honestidad o pide a tu profesor/a que lo haga.')}</p>${A.task==='A'&&e.q5.model?`<details><summary>See model composition (topic A)</summary><div class="model">${esc(e.q5.model)}</div></details>`:''}`:''}
  </section>
  ${S?`<div class="total"><div class="t">Mark<b>${nf(S.total)}</b></div><div>Question 1<b>${nf(S.q1)}</b></div><div>Question 2<b>${nf(S.q2)}</b></div><div>Question 3<b>${nf(S.q3)}</b></div><div>Question 4<b>${nf(S.q4)}</b></div><div>Question 5<b>${nf(S.q5)}</b></div></div>
  <p class="small" style="margin-top:10px">${tx('Questions 2 and 5 count once you mark them. Your best mark is saved.','Las preguntas 2 y 5 cuentan cuando las puntúas. Se guarda tu mejor nota.')}</p>`:''}
  <div class="row">${num<LST.length?`<a class="btn ghost" href="#pau-${LST[num].id}">Next exam →</a>`:''}<button class="btn ghost" id="rs">Reset exam</button></div>
  </div></div></div>`;
  if(S){const eb=examBestCV();if(eb[e.id]==null||S.total>eb[e.id]){eb[e.id]=+S.total.toFixed(2);store.set(EKEY,eb)}}
  bind();
 }
 function bind(){
  const q=app.querySelector('.qs');
  q.onclick=ev=>{const b=ev.target.closest('.seg button');if(b){const i=b.parentNode.dataset.q1;if(A.q1[i]===b.dataset.v)delete A.q1[i];else A.q1[i]=b.dataset.v;save();b.parentNode.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x.dataset.v===A.q1[i]))}};
  q.oninput=ev=>{const t=ev.target,d=t.dataset;
   if(d.j!=null)A.j[d.j]=t.value;else if(d.q2!=null)A.q2[d.q2]=t.value;
   else if(t.id==='wr'){A.w[A.task]=t.value;const n=words(t.value),w=document.getElementById('wc');w.textContent=`${n} words · target 130–150`;w.className='wc'+(n&&(n<120||n>160)?' bad':'')}
   save()};
  q.onchange=ev=>{const t=ev.target,d=t.dataset;
   if(t.name==='task'){A.task=t.value;save();render()}
   else if(d.ok!=null){A.ok[d.ok]=t.checked;save();render()}
   else if(d.q3!=null){A.q3[d.q3]=t.value;save()}
   else if(d.q4!=null){A.q4[d.q4]=+t.value;save()}
   else if(d.s){const[k,i]=d.s.split('-');const o=k==='s2'?A.s2:A.rub;if(t.value==='')delete o[i];else o[i]=t.value;save();render()}};
  document.getElementById('fix').onclick=()=>{A.done=true;save();render();document.querySelector('.total')?.scrollIntoView({behavior:'smooth',block:'center'})};
  document.getElementById('cp').onclick=async ev=>{const b=ev.target;try{await navigator.clipboard.writeText(A.w[A.task]||'');b.textContent='Copied'}catch(err){b.textContent='Could not copy'}setTimeout(()=>{b.textContent='Copy my composition'},1800)};
  const rs=document.getElementById('rs');rs.onclick=()=>{if(rs.dataset.c){stop();A=blank();save();render()}else{rs.dataset.c=1;rs.textContent='Sure? Your answers will be deleted. Click again';rs.classList.add('red')}};
  document.getElementById('tmr').onclick=()=>{running?stop():go()};
 }
 function tick(){A.t=Math.max(0,A.t-1);const c=document.getElementById('clk');if(c){c.textContent=fmt(A.t);c.classList.toggle('low',A.t<600)}if(A.t%10===0)save();if(A.t<=0){stop();if(c)c.textContent="Time's up"}}
 function go(){if(A.t<=0)A.t=5400;running=true;iv=setInterval(tick,1000);timers.push(iv);document.getElementById('tmr').textContent='Pause'}
 function stop(){running=false;clearInterval(iv);save();const b=document.getElementById('tmr');if(b)b.textContent='Start timer'}
 render();
}


/* ---------- Writing Lab: write & get an approximate PAU mark ---------- */
let SAMPLE=null;
try{const u=window.claude&&window.claude.use&&window.claude.use('sample');if(u&&u.then)u.then(x=>{SAMPLE=x;const b=document.getElementById('wlai');if(b&&x)b.hidden=false}).catch(()=>{})}catch(e){}
const WCRIT=[['strat','Strategic aspects','Aspectos estratégicos','presentation, spelling, paragraphs, punctuation','presentación, ortografía, párrafos, puntuación',.25],['gram','Grammatical accuracy','Corrección gramatical','accuracy and range of structures','corrección y variedad de estructuras',1],['org','Clarity & organisation','Claridad y organización','structure, coherence, linkers, relevance','estructura, coherencia, conectores, adecuación',.75],['voc','Vocabulary','Riqueza léxica','range, richness and precision','variedad, riqueza y precisión',1]];
function labTopics(){const all=[];[...X,...(window.EXAMS_PAU||[])].forEach(e=>{if(e.q5){['A','B'].forEach(k=>{if(e.q5[k])all.push(e.q5[k])})}});return[...new Set(all)]}
const ttype=t=>/^Narrative|story|Write about a (day|time|moment)|Imagine/i.test(t)?'Narrative':/advantages|disadvantages|for and against|pros and cons/i.test(t)?'For and against essay':'Opinion essay';
function wlabFeedback(r){
 const S=r.scores,c={strat:[],gram:[],org:[],voc:[]},imp=[],good=[];
 if(r.paras<3)c.strat.push(['Organise your text in at least 3 paragraphs (introduction, body, conclusion), separated by a blank line.','Organiza el texto en al menos 3 párrafos (introducción, desarrollo, conclusión) separados por una línea en blanco.']);
 if(!r.lenOK)c.strat.push([`Length: ${r.n} words. The PAU asks for about 130–150 words.`,`Extensión: ${r.n} palabras. La PAU pide unas 130–150 palabras.`]);
 if(r.contr.length>2)c.strat.push([`Avoid contractions in an essay (${[...new Set(r.contr)].slice(0,4).join(', ')}…): write do not, it is…`,`Evita las contracciones en un essay (${[...new Set(r.contr)].slice(0,4).join(', ')}…): escribe do not, it is…`]);
 const sE=r.errs.filter(e=>e.cat==='Strategic');if(sE.length)c.strat.push([`${sE.length} presentation/punctuation issue(s) marked in your text.`,`${sE.length} problema(s) de presentación o puntuación marcados en el texto.`]);
 if(!c.strat.length)good.push(['Good presentation: paragraphs, length and punctuation are fine.','Buena presentación: párrafos, extensión y puntuación correctos.']);
 const gE=r.errs.filter(e=>e.cat==='Grammar');if(gE.length)c.gram.push([`${gE.length} grammar mistake(s) detected (see the list below).`,`${gE.length} error(es) gramatical(es) detectado(s) (mira la lista de abajo).`]);
 if(r.adv.length<3)c.gram.push([`Use more advanced structures. Found: ${r.adv.join(', ')||'none'}. Try a conditional, a passive, a relative clause, a modal perfect or wish.`,`Usa más estructuras avanzadas. Encontradas: ${r.adv.join(', ')||'ninguna'}. Prueba una condicional, una pasiva, una relativa, un modal perfecto o wish.`]);
 else good.push([`Good range of structures: ${r.adv.join(', ')}.`,`Buena variedad de estructuras: ${r.adv.join(', ')}.`]);
 if(r.sentences&&r.n/r.sentences>38)c.gram.push(['Your sentences are very long. Split them and control punctuation.','Tus frases son muy largas. Divídelas y controla la puntuación.']);
 const miss=['addition','contrast','result','conclusion'].filter(k=>!r.links.includes(k));
 if(miss.length)c.org.push([`Missing linkers of: ${miss.join(', ')}. E.g. moreover · however · therefore · to sum up.`,`Faltan conectores de: ${miss.join(', ')}. Ej.: moreover · however · therefore · to sum up.`]);
 else good.push(['Good use of linkers to organise your ideas.','Buen uso de conectores para organizar tus ideas.']);
 if(r.paras<3)c.org.push(['Each paragraph should develop one main idea.','Cada párrafo debe desarrollar una idea principal.']);
 if(r.rep.length)c.voc.push([`Repeated words: ${r.rep.map(([w,n])=>w+' ×'+n).join(', ')}. Use synonyms.`,`Palabras repetidas: ${r.rep.map(([w,n])=>w+' ×'+n).join(', ')}. Usa sinónimos.`]);
 if(r.basic.length>3)c.voc.push([`Too many basic words (${[...new Set(r.basic)].slice(0,6).join(', ')}). Try: beneficial, harmful, essential, crucial, a great deal of…`,`Demasiadas palabras básicas (${[...new Set(r.basic)].slice(0,6).join(', ')}). Prueba: beneficial, harmful, essential, crucial, a great deal of…`]);
 const vE=r.errs.filter(e=>e.cat==='Vocabulary');if(vE.length)c.voc.push([`${vE.length} vocabulary / collocation problem(s) marked.`,`${vE.length} problema(s) de vocabulario o colocaciones marcados.`]);
 if(r.ttr>=.65&&r.longw>=.09)good.push(['Varied vocabulary with some sophisticated words.','Vocabulario variado con algunas palabras de nivel alto.']);
 // improvements ordered by weight lost
 const lost=WCRIT.map(([k,en,es,,,mx])=>[k,mx-S[k],en,es]).sort((a,b)=>b[1]-a[1]);
 lost.filter(x=>x[1]>0).forEach(([k])=>c[k].forEach(x=>imp.push(x)));
 return{c,imp:imp.slice(0,6),good};
}
function writingLab(){
 const topics=labTopics();let st=store.get('wlab-draft',{topic:'',text:''});if(!st.topic)st.topic=R0(topics);
 const hist=store.get('wlab-hist',[]);
 app.innerHTML=`<section class="band uband" style="--c:#b3a5cc;--on:#fff"><div class="wrap"><a href="#writing" style="font-weight:700;text-decoration:none">← Writing</a><h1 style="margin-top:8px">Writing Lab</h1><p class="lead">${tx('Write your composition and get an approximate mark out of 3 based on the PAU Comunitat Valenciana criteria, with feedback on your mistakes and what to improve.','Escribe tu redacción y obtén una nota aproximada sobre 3 según los criterios de la PAU de la Comunitat Valenciana, con feedback sobre tus errores y qué mejorar.')}</p></div></section>
 <div class="band"><div class="wrap wlab">
 <div>
  <section class="qb"><h3>1. Choose a task</h3>
   <div class="row" style="margin-top:6px"><select id="wtp" style="flex:1;min-width:0;max-width:100%">${topics.map(t=>`<option ${t===st.topic?'selected':''}>${esc(t)}</option>`).join('')}<option value="__own" ${st.own?'selected':''}>✏️ My own topic…</option></select><button class="btn ghost" id="wrnd">🎲 Random</button></div>
   <input class="t long" id="wown" placeholder="Write your own topic" value="${esc(st.ownText||'')}" style="margin-top:10px" ${st.own?'':'hidden'}>
   <p class="small" style="margin:10px 0 0">Text type: <b id="wtt"></b> · 130–150 words · 3 points</p></section>
  <section class="qb"><h3>2. Write <small id="wcount">0 words</small></h3>
   <textarea id="wtx" rows="16" placeholder="Write your composition here. Leave a blank line between paragraphs." aria-label="Your composition">${esc(st.text||'')}</textarea>
   <div class="row"><button class="btn red" id="wgo">Mark my writing</button><button class="btn" id="wlai" hidden>✨ Detailed correction by Claude</button><button class="btn ghost" id="wclr">Clear</button></div>
   <p class="small" style="margin-top:10px">${tx('The automatic mark is approximate: it checks length, paragraphs, typical mistakes, structures, linkers and vocabulary. Your teacher\'s mark is the one that counts.','La nota automática es aproximada: revisa extensión, párrafos, errores típicos, estructuras, conectores y vocabulario. La nota que cuenta es la de tu profesor/a.')}</p></section>
  <div id="wres"></div>
 </div>
 <aside class="wside">
  <section class="qb"><h3>PAU criteria</h3>${WCRIT.map(([k,en,es,d1,d2,mx])=>`<div class="crit"><b>${en}</b><span class="small">${tp(d1,d2)}</span><em>${nf(mx)}</em></div>`).join('')}<div class="crit tot"><b>Total</b><em>3</em></div></section>
  <section class="qb"><h3>My attempts</h3>${hist.length?`<ol class="hist">${hist.slice(0,8).map(h=>`<li><b>${nf(h.m)}/3</b> <span class="small">${esc(h.d)} · ${esc(h.t.slice(0,60))}${h.t.length>60?'…':''}${h.ai?' · ✨':''}</span></li>`).join('')}</ol>`:`<p class="small">${tx('Your marks will appear here.','Aquí aparecerán tus notas.')}</p>`}</section>
 </aside></div></div>`;
 const tp_=document.getElementById('wtp'),own=document.getElementById('wown'),tx_=document.getElementById('wtx'),wc=document.getElementById('wcount'),tt=document.getElementById('wtt');
 if(SAMPLE)document.getElementById('wlai').hidden=false;
 const topic=()=>tp_.value==='__own'?own.value.trim():tp_.value;
 const save=()=>{store.set('wlab-draft',{topic:tp_.value==='__own'?st.topic:tp_.value,own:tp_.value==='__own',ownText:own.value,text:tx_.value})};
 const upd=()=>{const n=words(tx_.value),p=tx_.value.split(/\n\s*\n|\n/).filter(x=>x.trim().length>20).length;wc.textContent=`${n} words · ${p} paragraph${p===1?'':'s'}`;wc.className=n&&(n<120||n>160)?'bad':'';tt.textContent=ttype(topic())};
 upd();
 tp_.onchange=()=>{own.hidden=tp_.value!=='__own';save();upd()};own.oninput=()=>{save();upd()};tx_.oninput=()=>{save();upd()};
 document.getElementById('wrnd').onclick=()=>{tp_.value=R0(topics);own.hidden=true;save();upd()};
 document.getElementById('wclr').onclick=()=>{if(!tx_.value||confirmClr()){tx_.value='';save();upd();document.getElementById('wres').innerHTML=''}};
 const confirmClr=()=>{const b=document.getElementById('wclr');if(b.dataset.c)return true;b.dataset.c=1;b.textContent='Sure? Click again';setTimeout(()=>{b.textContent='Clear';delete b.dataset.c},2500);return false};
 const addHist=(m,ai)=>{const h=store.get('wlab-hist',[]);h.unshift({m,t:topic(),d:new Date().toLocaleDateString('en-GB'),ai:!!ai});store.set('wlab-hist',h.slice(0,20))};
 const markedText=(text,spans)=>{spans=spans.filter(s=>s.i>=0).sort((a,b)=>a.i-b.i);let out='',p=0,k=0;spans.forEach(s=>{if(s.i<p)return;out+=esc(text.slice(p,s.i))+`<mark class="wm ${s.cls||''}" title="${esc(s.tip)}">${esc(text.slice(s.i,s.i+s.len))}<sup>${s.n}</sup></mark>`;p=s.i+s.len});out+=esc(text.slice(p));return out.split(/\n\s*\n/).map(x=>`<p>${x.replace(/\n/g,'<br>')}</p>`).join('')};
 const scoreBox=(S,total,src)=>`<div class="wscore"><div class="big3"><span class="small">${src}</span><b>${nf(total)}<small> / 3</small></b><span>≈ ${nf(Math.round(total/3*100)/10)} / 10</span></div><div class="wbars">${WCRIT.map(([k,en,es,,,mx])=>`<div class="wbar"><span>${en}<b>${nf(S[k])} / ${nf(mx)}</b></span><i><b style="width:${S[k]/mx*100}%;background:${S[k]/mx>=.75?'var(--ok)':S[k]/mx>=.5?'var(--sun)':'var(--bad)'}"></b></i></div>`).join('')}</div></div>`;
 document.getElementById('wgo').onclick=()=>{const text=tx_.value;if(words(text)<20){document.getElementById('wres').innerHTML=`<div class="fb bad">${tx('Write at least 20 words before marking.','Escribe al menos 20 palabras antes de corregir.')}</div>`;return}
  const r=window.WLAB.mark(text),F=wlabFeedback(r);addHist(r.total);
  const spans=r.errs.map((e,i)=>({i:e.i,len:e.len,n:i+1,tip:LANG==='es'?e.es:e.en,cls:e.cat.toLowerCase()}));
  document.getElementById('wres').innerHTML=`<section class="qb wout">${scoreBox(r.scores,r.total,'Automatic mark (approximate)')}
   <h4>${tp('Criteria','Criterios')}</h4>${WCRIT.map(([k,en])=>F.c[k].length?`<div class="wcm"><b>${en}</b><ul>${F.c[k].map(([a,b])=>`<li>${tx(esc(a),esc(b))}</li>`).join('')}</ul></div>`:`<div class="wcm ok"><b>${en}</b> ✔ ${tp('No problems detected','Sin problemas detectados')}</div>`).join('')}
   <h4>${tp('Your text with the mistakes marked','Tu texto con los errores marcados')} (${r.errs.length})</h4><div class="wtext">${markedText(text,spans)}</div>
   ${r.errs.length?`<ol class="werr">${r.errs.map((e,i)=>`<li><span class="wtag ${e.cat.toLowerCase()}">${e.cat}</span> <b>“${esc(e.txt)}”</b> — ${tx(esc(e.en),esc(e.es))}</li>`).join('')}</ol>`:''}
   ${F.good.length?`<h4>✔ ${tp('Strengths','Puntos fuertes')}</h4><ul class="wgood">${F.good.map(([a,b])=>`<li>${tx(esc(a),esc(b))}</li>`).join('')}</ul>`:''}
   ${F.imp.length?`<h4>➜ ${tp('What to improve first','Qué mejorar primero')}</h4><ol class="wimp">${F.imp.map(([a,b])=>`<li>${tx(esc(a),esc(b))}</li>`).join('')}</ol>`:''}
   <div class="chips" style="margin-top:12px">${r.adv.map(a=>`<span class="chip" style="cursor:default">✔ ${esc(a)}</span>`).join('')}${r.links.map(a=>`<span class="chip" style="cursor:default">🔗 ${esc(a)}</span>`).join('')}</div>
   <p class="small" style="margin-top:12px">${tx('The automatic checker cannot detect every mistake. Use it as a guide and ask your teacher for the final mark.','El corrector automático no detecta todos los errores. Úsalo como guía y pide la nota final a tu profesor/a.')}${SAMPLE?' '+tx('For a full correction, use “Detailed correction by Claude”.','Para una corrección completa, usa “Detailed correction by Claude”.'):''}</p></section>`;
  document.getElementById('wres').scrollIntoView({behavior:'smooth',block:'start'})};
 document.getElementById('wlai').onclick=async ev=>{const text=tx_.value,b=ev.currentTarget,res=document.getElementById('wres');if(!SAMPLE)return;if(words(text)<20){res.innerHTML=`<div class="fb bad">${tx('Write at least 20 words before marking.','Escribe al menos 20 palabras antes de corregir.')}</div>`;return}
  b.disabled=true;const old=b.textContent;b.textContent='Claude is marking…';res.innerHTML=`<div class="qb"><p class="small">⏳ ${tx('Reading your text and applying the PAU criteria…','Leyendo tu texto y aplicando los criterios de la PAU…')}</p></div>`;
  const lang=LANG==='es'?'Spanish':LANG==='both'?'English, followed by the Spanish translation in brackets':'English';
  const prompt=`You are an experienced examiner of the PAU (university entrance exam) English test in the Comunitat Valenciana, Spain (2026 model). Mark QUESTION 5, a composition of about 130-150 words worth 3 points, written by a 2nd Bachillerato student (B1+/B2 level). Use the official criteria exactly:
1) strategic aspects (presentation, spelling, paragraphing, punctuation): 0 or 0.25;
2) grammatical accuracy and range: 0 to 1 in steps of 0.25;
3) clarity of expression and organisation (coherence, cohesion, linkers, structure suited to the text type, relevance to the task): 0 to 0.75 in steps of 0.25;
4) range, richness and precision of vocabulary: 0 to 1 in steps of 0.25.
Be fair but rigorous, like a real PAU examiner. Penalise texts that are off-topic, much too short (<100 words), much too long, or copied/memorised.
TASK: ${topic()}
TEXT TYPE: ${ttype(topic())}
STUDENT TEXT (between <<< >>>):
<<<
${text}
>>>
Write all comments, explanations, strengths and improvements in ${lang}. Quote "original" EXACTLY as it appears in the student's text (short fragment). List every important mistake (max 15).
Return ONLY valid JSON, no markdown, with this shape:
{"scores":{"strat":0.25,"gram":0.75,"org":0.5,"voc":0.75},"total":2.25,"comments":{"strat":"","gram":"","org":"","voc":""},"errors":[{"original":"","correction":"","type":"grammar|vocabulary|spelling|punctuation|organisation","explanation":""}],"strengths":[""],"improve":[""],"improved_version":"the student's text rewritten at a slightly higher level, keeping their ideas"}`;
  try{let out;
   if(typeof SAMPLE.json==='function'){try{out=await SAMPLE.json(prompt,{modelTier:'default'})}catch(e){if(e&&(e.code==='not_granted'||e.code==='rate_limited'))throw e;out=null}}
   if(!out||typeof out!=='object'){const r=await SAMPLE(prompt,{modelTier:'default'});const m=(r.text||'').match(/\{[\s\S]*\}/);out=JSON.parse(m?m[0]:r.text)}
   const MX={strat:.25,gram:1,org:.75,voc:1},S={};let total=0;for(const k in MX){S[k]=Math.max(0,Math.min(MX[k],Math.round((+((out.scores||{})[k])||0)*4)/4));total+=S[k]}
   addHist(total,1);
   const errs=(out.errors||[]).slice(0,20),low=text.toLowerCase();let from=0;
   const spans=errs.map((e,i)=>{const o=String(e.original||'');let j=low.indexOf(o.toLowerCase());return{i:o?j:-1,len:o.length,n:i+1,tip:String(e.correction||''),cls:String(e.type||'grammar').toLowerCase()}});
   const C=out.comments||{};
   res.innerHTML=`<section class="qb wout">${scoreBox(S,total,'✨ Detailed correction by Claude')}
    <h4>${tp('Criteria','Criterios')}</h4>${WCRIT.map(([k,en])=>`<div class="wcm"><b>${en} · ${nf(S[k])} / ${nf(MX[k])}</b><p>${esc(C[k]||'')}</p></div>`).join('')}
    <h4>${tp('Your text with the mistakes marked','Tu texto con los errores marcados')} (${errs.length})</h4><div class="wtext">${markedText(text,spans)}</div>
    ${errs.length?`<ol class="werr">${errs.map(e=>`<li><span class="wtag ${esc(String(e.type||'').toLowerCase())}">${esc(e.type||'')}</span> <s>${esc(e.original)}</s> → <b>${esc(e.correction)}</b><br><span class="small">${esc(e.explanation||'')}</span></li>`).join('')}</ol>`:''}
    ${(out.strengths||[]).length?`<h4>✔ ${tp('Strengths','Puntos fuertes')}</h4><ul class="wgood">${out.strengths.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
    ${(out.improve||[]).length?`<h4>➜ ${tp('What to improve','Qué mejorar')}</h4><ol class="wimp">${out.improve.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`:''}
    ${out.improved_version?`<details><summary>${tp('See an improved version of your text','Ver una versión mejorada de tu texto')}</summary><div class="model">${esc(out.improved_version)}</div></details>`:''}
    <p class="small" style="margin-top:12px">${tx('AI marking is a guide; your teacher\'s mark is the one that counts.','La corrección con IA es orientativa; la nota que cuenta es la de tu profesor/a.')}</p></section>`;
   res.scrollIntoView({behavior:'smooth',block:'start'});
  }catch(e){res.innerHTML=`<div class="fb bad">${e&&e.code==='rate_limited'?tx('Too many corrections in a short time. Wait a few minutes and try again.','Demasiadas correcciones seguidas. Espera unos minutos y vuelve a intentarlo.'):e&&e.code==='not_granted'?tx('Claude correction is not available here. Use “Mark my writing”.','La corrección con Claude no está disponible aquí. Usa “Mark my writing”.'):tx('The detailed correction could not be completed. Try again or use “Mark my writing”.','No se pudo completar la corrección detallada. Inténtalo de nuevo o usa “Mark my writing”.')}</div>`}
  b.disabled=false;b.textContent=old};
}

/* ---------- writing ---------- */
const TPL=window.TEMPLATES||[];
let wT=TPL[0]&&TPL[0].code;
const CHECK=[
 ['Grammar structures',['Although / even though / in spite of / despite','Conditional sentence (0, 1, 2, 3 or mixed)','Passive / impersonal passive (it is said that…)','Perfect tense (present / past perfect)','Perfect modal verb (must have, should have…)','Relative clause (who, which, whose…)','Reported speech','So / such + adjective / noun','Too / enough','Would rather / had better','Wish / if only','Causative form (have / get something done)','Gerund vs. infinitive (correct usage)','Advanced comparative (the more… the more)','Inversion (never have I / not only…)','Phrasal verb']],
 ['Connectors & cohesion',['Varied conjunctions (although, whereas, since…)','Contrast connectors (however, nevertheless)','Addition connectors (moreover, furthermore)','Consequence connectors (therefore, as a result)']],
 ['Vocabulary',['3 higher-level words (C1 / C2)','Synonyms: avoid repeating words','Varied adjectives: no “good” or “bad”','No direct translation from Spanish']],
 ['Content & structure',['Clear introduction that presents the topic','Clear opinion / thesis','Well-organised paragraphs: one idea per paragraph','Conclusion that wraps up the argument']],
 ['Final check',['Correct word count (130–150)','Spelling checked','Subject-verb agreement','Comma after every connector','Essays: no contractions or slang']]];
const CONN=[['Introduce','It is widely known that… · Nowadays,…','Some people think that…, while… · It is often argued that…','Some years ago,… · Last summer,…'],['Opinion','I strongly believe that… · In my view,… · As I see it,…','Only at the end: In my opinion,… · Taking everything into consideration,…','—'],['Add','Moreover,… · In addition,… · Also,…','Furthermore,… · What is more,… · Besides,…','Then,… · After that,… · Afterwards,…'],['Contrast','However,… · Nevertheless,…','On the other hand,… · Nonetheless,…','However,… · Although…'],['Cause / result','That is why… · Therefore,… · As a result,…','Consequently,… · For this reason,…','so… · because… · As a result,…'],['Conclude','To conclude,…, so… · All in all,…','To conclude,… · To sum up,…','In the end,… · Finally,… · From this story we can learn that…']];
function writing(){
 const t=TPL.find(x=>x.code===wT)||TPL[0];
 const types=[['O','Opinion essay','#ef908a'],['F','For and against essay','#7ec9e6'],['N','Narrative','#b3a5cc']];
 const saved=store.get('tpl-'+t.code,{});
 let bi=0;
 const body=t.paras.map(p=>'<p>'+p.split('___').map((seg,k)=>k===0?esc(seg):`<span class="blank-in" contenteditable="true" role="textbox" aria-label="Gap ${bi+1}" data-b="${bi}">${esc(saved[bi++]||'')}</span>${esc(seg)}`).join('')+'</p>').join('');
 const ck=store.get('wcheck',{});
 app.innerHTML=`<section class="band"><div class="wrap"><h1>Writing</h1><p class="lead">${tx('Question 5 is worth 3 of the 10 points: a composition of about 130–150 words on one of two topics (opinion essay, for and against essay or narrative). Here you have the class infographics, fill-in templates, linkers and the final checklist.','La pregunta 5 vale 3 de los 10 puntos: una composición de unas 130–150 palabras sobre uno de dos temas (opinion essay, for and against essay o narrative). Aquí tienes las infografías de clase, las plantillas para completar, los conectores y el checklist final.')}</p>
 <div class="wgal">${[['w-pau','Writing templates · PAU'],['w-opinion','Opinion essay'],['w-forandagainst','For & against essay'],['w-narrative','Narrative writing'],['w-evaluation','PAU marking criteria']].map(([f,l])=>`<figure><img src="${f}.jpg" alt="Infographic: ${l}" data-zoom loading="lazy"><figcaption>${l} · <a class="dl" href="writing-infographic-${f.slice(2)}.pdf" target="_blank" rel="noopener" data-dl="writing-infographic-${f.slice(2)}.pdf"><span>⬇ PDF</span></a></figcaption></figure>`).join('')}</div>
 <div class="dlbar" style="margin-top:14px"><a class="btn dl" href="writing-infographics-all.pdf" target="_blank" rel="noopener" data-dl="writing-infographics-all.pdf"><span>🖼 ${tp('All writing infographics (PDF)','Todas las infografías de writing (PDF)')}</span></a><a class="btn ghost dl" href="templates-all.pdf" target="_blank" rel="noopener" data-dl="templates-all.pdf"><span>📝 ${tp('All 15 templates + linkers & checklist (PDF)','Las 15 plantillas + conectores y checklist (PDF)')}</span></a><a class="btn ghost dl" href="writing-kit.pdf" target="_blank" rel="noopener" data-dl="writing-kit.pdf"><span>🧰 ${tp('Linkers & checklist (PDF)','Conectores y checklist (PDF)')}</span></a></div>
 <p class="small">${tx('Tap an infographic to see it full size.','Toca una infografía para verla a tamaño completo.')}</p></div></section>
 <section class="band" style="padding-top:0"><div class="wrap"><a class="labcta" href="#writing-lab"><span>✍️</span><div><b>Writing Lab · Write and get your PAU mark</b><p>${tx('Write a composition on a real PAU topic and get an approximate mark out of 3 with the official criteria, your mistakes marked and what to improve.','Escribe una redacción sobre un tema real de la PAU y obtén una nota aproximada sobre 3 con los criterios oficiales, tus errores marcados y qué mejorar.')}</p></div><em>Start →</em></a></div></section>
 <section class="band" style="padding-top:0"><div class="wrap"><h2>Fill-in templates</h2><p class="lead" style="margin-bottom:16px">${tx('Choose a template, fill in the gaps with your ideas and keep an eye on the word count. Your text is saved in this browser.','Elige una plantilla, completa los huecos con tus ideas y vigila el recuento de palabras. Tu texto se guarda en este navegador.')}</p>
 ${types.map(([k,n,c])=>`<div class="tplrow"><b style="--c:${c}">${n}</b><div class="chips" style="margin:0">${TPL.filter(x=>x.code[0]===k).map(x=>`<button class="chip ${x.code===t.code?'on':''}" data-tp="${x.code}">${x.code} · ${esc(x.title)}</button>`).join('')}</div></div>`).join('')}
 <div class="tpl"><div class="tplh"><span class="tag" style="--c:${types.find(x=>x[0]===t.code[0])[2]};--on:#fff">${esc(t.type)}</span><h3>${esc(t.title)}</h3><p class="tq">${esc(t.topic)}</p></div>
 <div class="tplb" id="tplb">${body}</div>
 <p class="small"><b>Ideas:</b> ${esc(t.ideas)}</p>
 <div class="row"><span class="wc" id="twc"></span><button class="btn" id="tcp">Copy full text</button><button class="btn ghost" id="trs">Clear gaps</button><a class="btn ghost dl" href="template-${t.code}.pdf" target="_blank" rel="noopener" data-dl="template-${t.code}.pdf"><span>⬇ ${tp('This template (PDF)','Esta plantilla (PDF)')}</span></a><a class="btn ghost dl" href="templates-all.pdf" target="_blank" rel="noopener" data-dl="templates-all.pdf"><span>⬇ ${tp('All templates','Todas las plantillas')}</span></a></div></div></div></section>
 <section class="band" style="padding-top:0"><div class="wrap"><h2 style="margin-bottom:12px">Linkers by text type</h2><div class="tw"><table class="vt conn"><thead><tr><th>Function</th><th>Opinion</th><th>For and against</th><th>Narrative</th></tr></thead><tbody>${CONN.map(r=>`<tr>${r.map((c,i)=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div></section>
 <section class="band" style="padding-top:0"><div class="wrap"><div class="row" style="justify-content:space-between;margin:0 0 6px"><h2>Writing checklist</h2><span class="small" id="ckn"></span></div><p class="lead" style="margin:0 0 14px">${tx('Tick each item you use. The more you tick, the richer your text and the better your mark.','Marca cada elemento que uses. Cuantos más marques, más rico y mejor puntuado será tu texto.')}</p>
 <div class="cklist">${CHECK.map(([h,items],gi)=>`<div><h4>${gi+1}. ${h}</h4>${items.map((it,ii)=>`<label><input type="checkbox" data-ck="${gi}-${ii}" ${ck[gi+'-'+ii]?'checked':''}> ${esc(it)}</label>`).join('')}</div>`).join('')}</div>
 <div class="row"><button class="btn ghost" id="ckr">Untick all</button></div></div></section>`;
 const tb=document.getElementById('tplb'),wc=document.getElementById('twc');
 const full=()=>[...tb.querySelectorAll('p')].map(p=>p.innerText.replace(/\s+/g,' ').trim()).join('\n\n');
 const upd=()=>{const n=words(full());const filled=[...tb.querySelectorAll('.blank-in')].filter(x=>x.textContent.trim()).length,tot=tb.querySelectorAll('.blank-in').length;wc.textContent=`${n} words · target 130–150 · gaps ${filled}/${tot}`;wc.className='wc'+(filled===tot&&(n<120||n>160)?' bad':'')};
 tb.oninput=e=>{const b=e.target.closest('.blank-in');if(!b)return;const s=store.get('tpl-'+t.code,{});s[b.dataset.b]=b.textContent;store.set('tpl-'+t.code,s);upd()};
 tb.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();const all=[...tb.querySelectorAll('.blank-in')],i=all.indexOf(e.target);if(all[i+1])all[i+1].focus()}};
 tb.addEventListener('paste',e=>{if(e.target.closest('.blank-in')){e.preventDefault();document.execCommand('insertText',false,(e.clipboardData||window.clipboardData).getData('text').replace(/\s+/g,' '))}});
 upd();bindDownloads(app);
 app.querySelectorAll('[data-tp]').forEach(b=>b.onclick=()=>{wT=b.dataset.tp;writing();document.querySelector('.tpl').scrollIntoView({behavior:'smooth',block:'start'})});
 document.getElementById('trs').onclick=()=>{store.set('tpl-'+t.code,{});writing()};
 document.getElementById('tcp').onclick=async ev=>{const b=ev.target;try{await navigator.clipboard.writeText(full());b.textContent='Copied'}catch(err){b.textContent='Could not copy'}setTimeout(()=>{b.textContent='Copy full text'},1800)};
 const cnt=()=>{const c=store.get('wcheck',{});document.getElementById('ckn').textContent=`${Object.values(c).filter(Boolean).length} of ${CHECK.reduce((s,x)=>s+x[1].length,0)} ticked`};cnt();
 app.querySelector('.cklist').onchange=e=>{const c=store.get('wcheck',{});c[e.target.dataset.ck]=e.target.checked;store.set('wcheck',c);cnt()};
 document.getElementById('ckr').onclick=()=>{store.set('wcheck',{});app.querySelectorAll('[data-ck]').forEach(x=>x.checked=false);cnt()};
}

/* ---------- lightbox ---------- */
document.addEventListener('click',e=>{const im=e.target.closest('img[data-zoom]');if(!im)return;
 const d=document.createElement('div');d.className='lb';d.innerHTML=`<button class="lbx" aria-label="Close">×</button><img src="${im.getAttribute('src')}" alt="${esc(im.alt)}">`;
 const close=()=>{d.remove();document.removeEventListener('keydown',k)};const k=ev=>{if(ev.key==='Escape')close()};
 d.onclick=ev=>{if(ev.target===d||ev.target.classList.contains('lbx'))close()};document.addEventListener('keydown',k);document.body.appendChild(d)});

window.addEventListener('hashchange',()=>route());
const LS=document.getElementById('langsw');
const syncLS=()=>LS&&LS.querySelectorAll('button').forEach(b=>{b.classList.toggle('on',b.dataset.l===LANG);b.setAttribute('aria-pressed',b.dataset.l===LANG)});
if(LS){syncLS();LS.onclick=e=>{const b=e.target.closest('button');if(!b)return;LANG=b.dataset.l;store.set('lang',LANG);syncLS();route(true)}}
route();
}
