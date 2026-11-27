/* In Order Words · inicio de sesión del alumnado y registro de actividad
   Envía cada actividad a una hoja de Google (Apps Script). */
(function(){
'use strict';
var API='https://script.google.com/macros/s/AKfycbzvZadVZ33Gwi-t5HOF_D_uG5NZu3bZYAwqySkeyE_Db_CYiBwicDrjSTySpfcIRhMh/exec';
var LS=window.localStorage,UK='iowu-user',PK='iowu-pending';
function jget(k,d){try{var v=LS.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}}
function jset(k,v){try{LS.setItem(k,JSON.stringify(v))}catch(e){}}
var user=jget(UK,null);
var sid=Date.now().toString(36)+Math.random().toString(36).slice(2,6);
var t0=Date.now(),queue=[],inf={},quiet=false;

/* ---------- envío ---------- */
function row(tipo,act,nota,det,min){
 if(!user)return;
 queue.push([new Date().toISOString(),user.n,user.g,sid,tipo,act||'',nota==null?'':nota,det==null?'':String(det),min==null?'':min]);
}
function flush(beacon){
 var rows=jget(PK,[]).concat(queue);queue=[];
 if(!rows.length||API.indexOf('http')!==0){if(rows.length)jset(PK,rows.slice(-500));return}
 jset(PK,[]);
 var body=JSON.stringify({rows:rows});
 if(beacon&&navigator.sendBeacon){if(navigator.sendBeacon(API,new Blob([body],{type:'text/plain'})))return}
 fetch(API,{method:'POST',mode:'no-cors',keepalive:body.length<60000,headers:{'Content-Type':'text/plain'},body:body})
  .catch(function(){jset(PK,jget(PK,[]).concat(rows).slice(-500))});
}
function flushInf(){
 for(var u in inf){var c=inf[u];row('Práctica ilimitada',c.w,nota(c.ok,c.n),c.ok+' / '+c.n+' correctas')}
 inf={};
}
function nota(x,max){return Math.round(x/max*100)/10}  // nota sobre 10 con un decimal
function txt(el){return el?String(el.innerText||el.textContent||'').split('\n')[0].replace(/\s+/g,' ').trim():''}
function scoreText(){var s=document.querySelector('#app .score');if(!s)return '';return String(s.innerText).split(/\s*(?:\n|·)\s*/).filter(function(x){return /\d/.test(x)}).join(' · ')}

/* ---------- dónde está el alumno (sección › tema › apartado) ---------- */
var SEC={inicio:'Inicio',gramatica:'Gramática',test:'Gramática',vocabulario:'Vocabulario',writing:'Writing',juegos:'Juegos',juego:'Juegos',pau:'Exámenes PAU'};
var GEN=/^(Grammar|Vocabulary|Writing|Games|PAU exams|Your route)/i;
function where(){
 var h=(location.hash||'#inicio').slice(1)||'inicio',parts=[SEC[h.split('-')[0]]||h];
 var app=document.getElementById('app');if(!app)return parts[0];
 if(h==='test-mixto')parts.push('Test mixto');
 var t=txt(app.querySelector('h1'));if(t&&h!=='inicio'&&!GEN.test(t))parts.push(t);
 var on=app.querySelectorAll('.chips .chip.on, .tplrow .on, .tabs button.on, #mtabs button.on, .wsb.on b');
 for(var i=0;i<on.length;i++){var x=txt(on[i]).replace(/^[^\wÀ-ÿ∞]+/,'');if(x&&!/^(All|Todos)$/i.test(x)&&parts.indexOf(x)<0)parts.push(x)}
 return parts.join(' › ');
}
var cur=null;
function visit(){
 var w=where();if(cur&&cur.w===w)return;
 closeVisit();flushInf();cur={w:w,t:Date.now()};
}
function closeVisit(){
 if(!cur)return;var m=Math.round((Date.now()-cur.t)/6000)/10;
 if(Date.now()-cur.t>3000)row('Visita',cur.w,null,'',m);
 cur=null;
}

/* ---------- ganchos llamados desde app.js ---------- */
var GAME10={error:10,idioms:10,expr:10,timeline:10,falsefriends:10,upgrade:8,bingo:100};
var GUNIT={contrarreloj:'puntos',parejas:'movimientos',palabra:'racha',ordena:'racha',prep:'puntos',colloc:'puntos',chain:'cadena',wordform:'bloques',sniper:'puntos',puzzle:'puntos',linksprint:'puntos',redpen:'puntos',duel:'puntos'};
window.iowLog=function(kind,id,v){
 if(!user)return;
 var w=where(),sc=scoreText();
 switch(kind){
  case 'grammar':case 'vocab':case 'mixed':case 'practice':case 'lab':
   row(kind==='grammar'||kind==='mixed'?'Gramática · nota':'Vocabulario · nota',w,nota(v,100),sc||v+'%');break;
  case 'game':
   if(id==='escape'){var mm=Math.floor(v/60),ss=v%60;row('Juego',w,null,'Tiempo: '+mm+':'+(ss<10?'0':'')+ss);break}
   if(GAME10[id])row('Juego',w,nota(v,GAME10[id]),v+' / '+GAME10[id]);
   else row('Juego',w,null,v+' '+(GUNIT[id]||'puntos'));
   break;
  case 'exam':{var tt=document.querySelector('#app .total');
   row('Examen PAU',w,Math.round(v*10)/10,tt?String(tt.innerText).replace(/\s*\n\s*/g,' ').replace(/^Mark/,'Nota').replace(/Question (\d)/g,'· P$1'):v+' / 10');break}
  case 'writing':row('Writing Lab',w+' › '+id,nota(v,3),v+' / 3');break;
  case 'inf':{var k=w+'|'+id,c=inf[k]=inf[k]||{w:w,n:0,ok:0};c.n++;if(v)c.ok++;return}
  default:row(kind,w,null,v);
 }
 flush();
};

/* ---------- navegación ---------- */
function later(){setTimeout(visit,350)}
window.addEventListener('hashchange',later);
document.addEventListener('click',later,true);
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden'){flushInf();flush(true)}});
window.addEventListener('pagehide',function(){
 if(!user||quiet)return;closeVisit();flushInf();
 row('Salida','',null,'',Math.round((Date.now()-t0)/6000)/10);flush(true);
});
setInterval(function(){if(queue.length)flush()},20000);

/* ---------- progreso separado por alumno (ordenadores compartidos) ---------- */
function ukey(u){return 'iowu-data-'+(u.n+'|'+u.g).toLowerCase()}
function progKeys(){var k=[];for(var i=0;i<LS.length;i++){var x=LS.key(i);if(x&&x.indexOf('iow-')===0)k.push(x)}return k}
function saveProgress(u){var d={};progKeys().forEach(function(k){d[k]=LS.getItem(k)});try{LS.setItem(ukey(u),JSON.stringify(d))}catch(e){}}
function clearProgress(){progKeys().forEach(function(k){LS.removeItem(k)})}
function restoreProgress(u){var d=jget(ukey(u),null);if(!d)return false;clearProgress();for(var k in d)try{LS.setItem(k,d[k])}catch(e){}return true}

/* ---------- interfaz ---------- */
var css='.iowl{position:fixed;inset:0;z-index:200;background:rgba(45,50,80,.55);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:16px}'+
'.iowl form{background:var(--card,#fff);color:var(--ink,#2d3250);border-radius:24px;padding:28px;width:min(440px,100%);box-shadow:0 30px 60px -20px rgba(0,0,0,.4);display:flex;flex-direction:column;gap:12px}'+
'.iowl img{height:80px;align-self:center;background:#fbf8f6;border-radius:14px;padding:6px 12px}'+
'.iowl h2{text-align:center;margin:4px 0 0}.iowl p{margin:0;text-align:center;color:var(--mut,#6f7289);font-size:15px}'+
'.iowl label{display:flex;flex-direction:column;gap:4px;font-weight:700;font-size:14px}'+
'.iowl input{font:inherit;font-weight:400;font-size:17px;padding:10px 12px;border-radius:12px;border:1.5px solid var(--line,#ece4e4);background:var(--bg,#fbf8f6);color:inherit;min-height:46px}'+
'.iowl input:focus{outline:none;border-color:var(--blue,#5f6fc2)}.iowl .err{color:var(--bad,#c45a4d);font-size:14px;min-height:1em;text-align:center}'+
'.iowl button{margin-top:4px;min-height:48px;border:0;border-radius:14px;font:inherit;font-weight:800;font-size:17px;cursor:pointer;background:var(--lav,#e4e3fa);color:var(--ink,#2d3250)}'+
'.iowu{display:inline-flex;align-items:center;gap:6px;background:var(--card2,#f4eff1);border-radius:999px;padding:3px 3px 3px 12px;font-size:13px;font-weight:700;white-space:nowrap}'+
'.iowu button{border:0;background:var(--card,#fff);border-radius:999px;padding:6px 10px;font:inherit;font-size:12px;font-weight:700;cursor:pointer;color:inherit;min-height:30px}'+
'@media(max-width:640px){.iowu{order:4}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function cap(s){return s.trim().replace(/\s+/g,' ').toLowerCase().replace(/(^|[\s-])(\p{L})/gu,function(m,a,b){return a+b.toUpperCase()})}

function chip(){
 var old=document.getElementById('iowu');if(old)old.remove();
 if(!user)return;
 var hd=document.querySelector('header .hd');if(!hd)return;
 var d=document.createElement('div');d.className='iowu';d.id='iowu';
 d.innerHTML='👤 '+esc(user.n.split(' ')[0])+' <button type="button" title="Cerrar sesión">Log out</button>';
 d.querySelector('button').onclick=logout;
 hd.appendChild(d);
}
function logout(){
 if(!confirm('Log out / Cerrar sesión, '+user.n+'?'))return;
 closeVisit();flushInf();row('Salida','',null,'Cierre de sesión',Math.round((Date.now()-t0)/6000)/10);flush(true);
 saveProgress(user);clearProgress();LS.removeItem(UK);user=null;
 location.hash='';location.reload();
}
function login(){
 var w=document.createElement('div');w.className='iowl';
 w.innerHTML='<form autocomplete="on"><img src="logo.png" alt="In Order Words"><h2>Sign in · Inicia sesión</h2>'+
 '<p>Write your real name so your teacher can see your progress.<br><i>Escribe tu nombre real para que tu profesor/a vea tu progreso.</i></p>'+
 '<label>First name · Nombre<input name="n" required maxlength="40" autocomplete="given-name"></label>'+
 '<label>Surnames · Apellidos<input name="a" required maxlength="60" autocomplete="family-name"></label>'+
 '<label>Group · Grupo<input name="g" required maxlength="12" placeholder="2º A"></label>'+
 '<div class="err"></div><button type="submit">Start · Empezar →</button></form>';
 document.body.appendChild(w);
 var f=w.querySelector('form');setTimeout(function(){f.n.focus()},50);
 f.onsubmit=function(e){
  e.preventDefault();
  var n=cap(f.n.value),a=cap(f.a.value),g=f.g.value.trim().replace(/\s+/g,' ').toUpperCase();
  if(n.length<2||a.length<2||!g){f.querySelector('.err').textContent='Fill in all the fields · Rellena todos los campos';return}
  user={n:n+' '+a,g:g};jset(UK,user);
  if(restoreProgress(user)){quiet=true;location.reload();return}
  row('Entrada','Inicio de sesión',null,navigator.userAgent.indexOf('Mobi')>-1?'Móvil':'Ordenador');flush();
  w.remove();chip();later();
 };
}

function start(){
 if(!user){login();return}
 chip();row('Entrada','',null,navigator.userAgent.indexOf('Mobi')>-1?'Móvil':'Ordenador');flush();later();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
