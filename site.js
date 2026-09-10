/* WHITE CAT VAULT — site.js v2 | SW handled by pwa.js only */
function ensureBrandHeadAssets() {
  var h = document.head; if (!h) return;
  function add(sel, tag, attrs) {
    if (h.querySelector(sel)) return;
    var el = document.createElement(tag);
    Object.keys(attrs).forEach(function(k){ el.setAttribute(k,attrs[k]); });
    h.appendChild(el);
  }
  add('meta[name="theme-color"]',    'meta', {name:'theme-color',   content:'#080a0e'});
  add('link[rel="icon"]',            'link', {rel:'icon',           type:'image/png', href:'/assets/icons/favicon-32.png'});
  add('link[rel="apple-touch-icon"]','link', {rel:'apple-touch-icon', href:'/assets/icons/apple-touch-icon.png'});
  add('link[rel="manifest"]',        'link', {rel:'manifest',       href:'/site.webmanifest'});
}

function initNav() {
  var pg   = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var nav  = document.getElementById('site-nav');
  var cfgs = Array.isArray(window.SITE_NAV_LINKS) ? window.SITE_NAV_LINKS : [];
  if (nav && cfgs.length) {
    nav.innerHTML = cfgs.map(function(item){
      var lp  = item.href.replace(/^\//,'').split('/').pop().toLowerCase();
      var cur = lp === pg || (pg==='' && lp==='index.html');
      return '<a href="'+item.href+'"'+(cur?' aria-current="page"':'')+'>'+item.label+'</a>';
    }).join('');
  }
  document.querySelectorAll('.site-nav a').forEach(function(a){
    var lp  = (a.getAttribute('href')||'').replace(/^\//,'').split('/').pop().toLowerCase();
    var cur = lp === pg || (pg==='' && lp==='index.html');
    if (cur) { a.classList.add('active'); a.setAttribute('aria-current','page'); }
    a.addEventListener('click', function(){
      var n=document.getElementById('site-nav');
      var b=document.querySelector('.nav-toggle');
      if(n){n.classList.remove('open');}
      if(b){b.setAttribute('aria-expanded','false'); b.setAttribute('aria-label','Open navigation');}
    });
  });
  /* Initial tabindex — nav closed on mobile */
  if (window.innerWidth <= 768) {
    var n=document.getElementById('site-nav');
    if(n) n.querySelectorAll('a').forEach(function(a){a.setAttribute('tabindex','-1');});
  }
}

function toggleNav() {
  var nav=document.getElementById('site-nav');
  var btn=document.querySelector('.nav-toggle');
  if(!nav) return;
  var open=nav.classList.toggle('open');
  if(btn){
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  }
  nav.querySelectorAll('a').forEach(function(a){a.setAttribute('tabindex',open?'0':'-1');});
}

function initScrollReveal() {
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.card').forEach(function(c){c.classList.add('visible');});
    return;
  }
  var io=new IntersectionObserver(function(ent){
    ent.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
  },{threshold:0.08});
  document.querySelectorAll('.card').forEach(function(c){io.observe(c);});
}

document.addEventListener('DOMContentLoaded', function(){
  ensureBrandHeadAssets(); initNav(); initScrollReveal();
  document.addEventListener('click',function(e){
    var nav=document.getElementById('site-nav');
    var btn=document.querySelector('.nav-toggle');
    if(!nav||!nav.classList.contains('open')) return;
    if(!nav.contains(e.target)&&btn&&!btn.contains(e.target)){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      nav.querySelectorAll('a').forEach(function(a){a.setAttribute('tabindex','-1');});
    }
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      var nav=document.getElementById('site-nav');
      var btn=document.querySelector('.nav-toggle');
      if(nav&&nav.classList.contains('open')){
        nav.classList.remove('open');
        if(btn){btn.setAttribute('aria-expanded','false'); btn.focus();}
        nav.querySelectorAll('a').forEach(function(a){a.setAttribute('tabindex','-1');});
      }
    }
  });
});
