(function(){
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
$('#yr').textContent=new Date().getFullYear();
/* header */
var hd=$('header'),bg=$('.burger'),nav=$('#nav');
function sc(){hd.classList.toggle('solid',scrollY>40)}sc();addEventListener('scroll',sc,{passive:true});
function tg(o){nav.classList.toggle('open',o);hd.classList.toggle('menu',o);bg.setAttribute('aria-expanded',o)}
bg.onclick=function(){tg(!nav.classList.contains('open'))};
$$('nav a').forEach(function(a){a.onclick=function(){tg(false)}});
addEventListener('keydown',function(e){if(e.key==='Escape')tg(false)});
/* hero */
var sl=$$('.slide'),dt=$('#dots'),i=0,t,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
sl.forEach(function(_,k){var b=document.createElement('button');b.setAttribute('aria-label','Slide '+(k+1));b.onclick=function(){go(k);auto()};dt.appendChild(b)});
function go(n){i=(n+sl.length)%sl.length;sl.forEach(function(s,k){s.classList.toggle('on',k===i)});$$('button',dt).forEach(function(b,k){b.setAttribute('aria-current',k===i)})}
function auto(){clearInterval(t);if(!rm)t=setInterval(function(){go(i+1)},6000)}
$('#hp').onclick=function(){go(i-1);auto()};$('#hn').onclick=function(){go(i+1);auto()};go(0);auto();
/* cardápio */
var M=[['Café','Cappuccino artesanal','Espresso duplo, leite vaporizado e fina camada de espuma.','R$ 14','#c9a47e','#6a4730'],
['Café','Latte de baunilha','Baunilha natural em calda caseira e leite sedoso.','R$ 16','#e0cdb0','#8a6a4a'],
['Café','Espresso da casa','Blend de grãos de altitude, notas de cacau e avelã.','R$ 9','#8a6a50','#3a2a20'],
['Doces','Croissant amanteigado','Folhado de manteiga, assado a cada manhã.','R$ 12','#dcae6c','#8b5a2b'],
['Doces','Bolo de chocolate artesanal','Chocolate meio amargo e calda de café.','R$ 17','#7a5442','#35221a'],
['Doces','Torta de maçã com canela','Maçãs assadas, canela e massa quebradiça.','R$ 19','#d4a373','#7d5230']];
var tr=$('#track');
M.forEach(function(m){var a=document.createElement('article');a.className='item rv';
a.innerHTML='<div class="ph" role="img" aria-label="'+m[1]+'" style="--c1:'+m[4]+';--c2:'+m[5]+'"><svg aria-hidden="true"><use href="#cup"/></svg></div><div class="b"><small>'+m[0]+'</small><h3>'+m[1]+'</h3><p>'+m[2]+'</p><b>'+m[3]+'</b></div>';tr.appendChild(a)});
function step(d){tr.scrollBy({left:d*(tr.firstChild.offsetWidth+24),behavior:rm?'auto':'smooth'})}
$('#pv').onclick=function(){step(-1)};$('#nx').onclick=function(){step(1)};
tr.addEventListener('keydown',function(e){if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});
/* reveal */
var els=$$('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});els.forEach(function(e){io.observe(e)})}
else els.forEach(function(e){e.classList.add('in')});
})();
