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
var t0=Date.now(),queue=[],inf={},lastPage='',quiet=false;

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
 for(var u in inf){var c=inf[u];row('Práctica ilimitada',u,Math.round(c.ok/c.n*100),c.ok+' / '+c.n+' correctas')}
 inf={};
}

/* ---------- ganchos llamados desde app.js ---------- */
var LBL={mc:'opción múltiple',gap:'huecos',tr:'transformaciones'};
window.iowLog=function(kind,id,v){
 if(!user)return;
 switch(kind){
  case 'grammar':{var p=String(id).split('|');row('Gramática',p[0]+' · '+(LBL[p[1]]||p[1]),v,v+'%');break}
  case 'game':row('Juego',id,null,'Puntuación: '+v);break;
  case 'vocab':row('Vocabulario · test',id,v,v+'%');break;
  case 'mixed':row('Gramática · test mixto','10 preguntas',v,v+'%');break;
  case 'practice':row('Vocabulario · práctica',id,v,v+'%');break;
  case 'lab':row('Vocabulario · lab',id,v,v+'%');break;
  case 'exam':row('Examen',id,Math.round(v*10),v+' / 10');break;
  case 'writing':row('Writing Lab',id,Math.round(v/3*100),v+' / 3');break;
  case 'inf':{var c=inf[id]=inf[id]||{n:0,ok:0};c.n++;if(v)c.ok++;return}
  default:row(kind,id,null,v);
 }
 flush();
};

/* ---------- navegación ---------- */
function page(){
 var h=(location.hash||'#inicio').slice(1)||'inicio';
 if(h===lastPage)return;lastPage=h;
 flushInf();row('Página',h);flush();
}
window.addEventListener('hashchange',page);
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden'){flushInf();flush(true)}});
window.addEventListener('pagehide',function(){
 if(!user||quiet)return;flushInf();
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
 flushInf();row('Salida','',null,'Cierre de sesión',Math.round((Date.now()-t0)/6000)/10);flush(true);
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
  w.remove();chip();lastPage='';page();
 };
}

function start(){
 if(!user){login();return}
 chip();row('Entrada','',null,navigator.userAgent.indexOf('Mobi')>-1?'Móvil':'Ordenador');page();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
