(() => {
'use strict';
const D=window.DEMOS;
const root=document.getElementById('root');
const keys=Object.keys(D);
const q=new URLSearchParams(location.search);
const key=Object.prototype.hasOwnProperty.call(D,q.get('demo'))?q.get('demo'):null;
const img=(id,w=1400)=>'https://images.unsplash.com/'+encodeURIComponent(id)+'?auto=format&fit=crop&w='+w+'&q=82';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=k=>'?demo='+encodeURIComponent(k);
const el=s=>document.querySelector(s);
function galleryIndex(){
  document.title='STUDIO — Five Digital Experiences';
  document.body.className='index';
  root.innerHTML=`
  <header class="agency-nav"><a href="./" class="agency-logo">STUDIO<span>.</span><small>WEBSITES THAT MOVE PEOPLE</small></a><span class="agency-counter">FIVE INDUSTRIES / ONE ENGINE</span><a href="#collection" class="agency-navlink">EXPLORE COLLECTION ↗</a></header>
  <main>
    <section class="agency-hero"><div class="agency-noise"></div><div class="agency-tag"><i></i> A NEW STANDARD FOR LOCAL BUSINESSES</div><h1>Not just a<br><em>website.</em> An <span>experience.</span></h1><div class="agency-hero-row"><p>Five art-directed digital spaces.<br>Beautiful enough to remember. Smart enough to turn visits into appointments.</p><a href="#collection" class="circle-next" aria-label="Explore collection">↘</a></div><span class="agency-small">DESIGNED FOR MOBILE. BUILT TO CONVERT. / 001—005</span></section>
    <section id="collection" class="agency-collection"><div class="mini-head"><span>01 / THE COLLECTION</span><span>SELECT AN EXPERIENCE ↓</span></div><div class="agency-grid">
    `+keys.map((k,i)=>{
      const d=D[k];
      return `<a class="agency-tile tile-`+escape(k)+`" href="`+link(k)+`" aria-label="Open `+escape(d.brand)+` demo"><img loading="lazy" src="`+img(d.hero,1100)+`" alt="`+escape(d.sector)+`"/><span class="tile-shade"></span><div class="tile-meta"><span>0`+(i+1)+` / `+escape(d.sector)+`</span><strong>`+escape(d.brand)+`</strong><span>`+escape(d.sub)+`</span></div><b>↗</b></a>`;
    }).join('')+`</div></section>
    <section class="agency-end"><span>BEAUTY MEETS CONVERSION</span><h2>Different stories.<br><em>One flexible system.</em></h2><p>Personal branding, service menus, cinematic motion, photo slides and a reusable appointment-request flow. Rebrand once. Launch faster.</p><div class="end-features"><span>01 / ART DIRECTION</span><span>02 / RESPONSIVE</span><span>03 / BOOKING REQUESTS</span><span>04 / QUICK SETUP</span></div></section>
  </main><footer class="agency-footer"><b>STUDIO.</b><span>DEMO COLLECTION © 2026</span><span>CRAFTED FOR LOCAL BUSINESSES</span></footer>`;
}
if(!key){galleryIndex();return;}
const d=D[key];
const demoLinks=keys.map(k=>`<a href="`+link(k)+`" `+(k===key?'aria-current="page"':'')+`>`+escape(D[k].sector)+` ↗</a>`).join('');
const serv=d.items.map((s,i)=>`<button class="service-item reveal" data-service="`+i+`"><small>0`+(i+1)+`</small><span class="service-text"><b>`+escape(s[0])+`</b><em>`+escape(s[1])+`</em></span><span class="service-time">`+escape(s[2])+`</span><strong>`+escape(s[3])+`</strong><span class="service-next">↗</span></button>`).join('');
const pictures=d.images.map((id,i)=>`<figure class="slide `+(i===0?'active':'')+`" data-slide="`+i+`" aria-hidden="`+(i!==0)+`"><img loading="lazy" src="`+img(id,1900)+`" alt="`+escape(d.sector)+` gallery `+(i+1)+`"/><figcaption>`+escape(d.brand)+` / VISUAL JOURNAL — 0`+(i+1)+`</figcaption></figure>`).join('');
document.body.className='demo '+key;
document.documentElement.style.setProperty('--accent',d.accent);
document.title=d.brand+' — '+d.sub;
root.innerHTML=`
<div class="demo-bar"><a href="./">← STUDIO COLLECTION</a><span>AN ORIGINAL DEMO / 0`+(keys.indexOf(key)+1)+`—05</span><button id="switch">MORE DEMOS ⌄</button><div id="switch-menu" hidden>`+demoLinks+`</div></div>
<div class="scroll-line" id="scroll-line"></div>
<header class="nav" id="nav"><a class="brand" href="#top">`+escape(d.brand)+`<small>`+escape(d.sub)+`</small></a><nav id="nav-links"><a href="#story">STORY</a><a href="#services">SERVICES</a><a href="#gallery">GALLERY</a><a href="#contact">CONTACT</a></nav><button class="nav-cta" data-book>`+escape(d.book)+` ↗</button><button class="hamburger" id="hamburger" aria-controls="nav-links" aria-expanded="false" aria-label="Άνοιγμα μενού">☰</button></header>
<main id="top">
<section class="hero"><div class="hero-image"><img src="`+img(d.hero,2200)+`" alt="`+escape(d.sector)+`" fetchpriority="high"/><span class="hero-scrim"></span></div><div class="hero-orbit" aria-hidden="true">✳</div><div class="hero-content"><span class="overline"><i></i> `+escape(d.tag)+`</span><h1>`+escape(d.title)+`<br><em>`+escape(d.italic)+`</em></h1><p>`+escape(d.intro)+`</p><div class="hero-buttons"><button data-book class="action-main">`+escape(d.book)+` <b>↗</b></button><a href="#services" class="action-link">DISCOVER SERVICES ↓</a></div></div><div class="hero-foot"><span>01 / `+escape(d.sector)+`</span><span>`+escape(d.city)+` · GR</span><a href="#story">SCROLL TO EXPLORE ↓</a></div></section>
<div class="marquee" aria-label="`+escape(d.statement)+`"><div>`+Array.from({length:6},()=>`<span>`+escape(d.statement)+` <b>✳</b></span>`).join('')+`</div></div>
<section id="story" class="story section"><div class="mini-head reveal"><span>01 / OUR STORY</span><span>`+escape(d.city)+`, GREECE</span></div><div class="story-grid"><h2 class="reveal">`+escape(d.quote)+`</h2><div class="story-description reveal"><span class="small-label">THE EXPERIENCE</span><p>`+escape(d.intro)+`</p><a href="#gallery">STEP INSIDE OUR WORLD ↗</a></div></div></section>
<section id="services" class="services section"><div class="mini-head reveal"><span>02 / WHAT WE DO</span><span>ALL THE LITTLE DETAILS</span></div><div class="service-head reveal"><div><small class="small-label">CRAFTED FOR YOU</small><h2>The finer<br><em>details.</em></h2></div><p>`+escape(d.statement)+`</p></div><div class="service-list">`+serv+`</div><div class="service-bottom reveal"><span>PERSONAL SERVICE / EXCEPTIONAL EXPERIENCE</span><button class="outline" data-book>BOOK YOUR EXPERIENCE ↗</button></div></section>
<section id="gallery" class="gallery"><div class="section gallery-head"><div class="mini-head reveal"><span>03 / VISUAL JOURNAL</span><span>SELECTED MOMENTS</span></div><div class="gallery-title reveal"><h2>Made to be<br><em>remembered.</em></h2><p>`+escape(d.statement)+`</p></div></div><div class="slider" id="slider"><div class="slides">`+pictures+`</div><div class="slider-controls"><span id="count">01 / 03</span><div class="progress"><i id="progress"></i></div><button id="prev" aria-label="Προηγούμενη φωτογραφία">←</button><button id="next" aria-label="Επόμενη φωτογραφία">→</button></div></div></section>
<section class="manifesto section"><div class="mini-head reveal"><span>04 / THE PHILOSOPHY</span><span>ALWAYS IN THE DETAILS</span></div><blockquote class="reveal">“`+escape(d.statement)+`”</blockquote><span class="manifesto-tag">— `+escape(d.brand)+`</span></section>
<section id="contact" class="contact section"><div class="mini-head reveal"><span>05 / YOUR NEXT VISIT</span><span>LET'S MAKE IT HAPPEN</span></div><div class="contact-grid"><div class="reveal"><span class="small-label">WE'D LOVE TO SEE YOU</span><h2>Your moment<br><em>starts here.</em></h2><button class="contact-button" data-book>`+escape(d.book)+` ↗</button></div><div class="contact-info reveal"><span>FIND US <b>`+escape(d.city)+`, GREECE</b></span><span>OPENING HOURS <b>`+escape(d.hours)+`</b></span><span>BOOKING <b>BY REQUEST — CONFIRMATION REQUIRED</b></span></div></div></section>
</main>
<footer class="footer"><a class="brand" href="#top">`+escape(d.brand)+`<small>`+escape(d.sub)+`</small></a><span>DEMO CONCEPT — FICTIONAL BUSINESS</span><a href="./">VIEW ALL DEMOS ↗</a></footer>
<div class="backdrop" id="backdrop" hidden></div><aside class="booking" id="booking" role="dialog" aria-modal="true" aria-labelledby="book-title" aria-hidden="true" tabindex="-1"><div class="book-nav"><span>YOUR NEXT VISIT / `+escape(d.brand)+`</span><button id="close" aria-label="Κλείσιμο">✕</button></div><div class="book-content"><span class="small-label">RESERVE YOUR MOMENT</span><h2 id="book-title">Let's make<br><em>a date.</em></h2><p>Συμπλήρωσε τα στοιχεία για να ζητήσεις ραντεβού.</p><form id="form"><label>ΥΠΗΡΕΣΙΑ<select id="service" name="service" required>`+d.items.map((s,i)=>`<option value="`+i+`">`+escape(s[0])+`</option>`).join('')+`</select></label><div class="form-row"><label>ΗΜΕΡΟΜΗΝΙΑ<input type="date" name="date" id="date" required/></label><label>ΩΡΑ<select name="time" required><option value="">Επίλεξε</option><option>09:00</option><option>10:00</option><option>11:00</option><option>12:00</option><option>14:00</option><option>15:00</option><option>16:00</option><option>17:00</option><option>18:00</option></select></label></div><label>ΟΝΟΜΑ<input name="name" autocomplete="name" maxlength="80" placeholder="Το όνομά σου" required/></label><label>ΤΗΛΕΦΩΝΟ<input type="tel" name="phone" autocomplete="tel" maxlength="25" minlength="7" placeholder="69XXXXXXXX" required/></label><button type="submit" class="submit">ΔΗΜΙΟΥΡΓΙΑ ΑΙΤΗΜΑΤΟΣ ↗</button><small class="book-disclaimer">DEMO MODE · Δεν αποστέλλεται πραγματική κράτηση.</small></form><div id="result" role="status" aria-live="polite" hidden></div></div></aside>`;
const booking=el('#booking'),backdrop=el('#backdrop');let lastFocus=null;
const external=d.booking.externalUrl||'';
function openBook(index){if(external){window.open(external,'_blank','noopener,noreferrer');return;}lastFocus=document.activeElement;if(index!==undefined)el('#service').value=String(index);el('#result').hidden=true;el('#form').hidden=false;backdrop.hidden=false;booking.classList.add('open');booking.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll');booking.focus();}
function closeBook(){booking.classList.remove('open');booking.setAttribute('aria-hidden','true');backdrop.hidden=true;document.body.classList.remove('no-scroll');if(lastFocus)lastFocus.focus();}
document.querySelectorAll('[data-book]').forEach(x=>x.addEventListener('click',()=>openBook()));
document.querySelectorAll('[data-service]').forEach(x=>x.addEventListener('click',()=>openBook(Number(x.dataset.service))));
el('#close').addEventListener('click',closeBook);backdrop.addEventListener('click',closeBook);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&booking.classList.contains('open'))closeBook();if(e.key==='Tab'&&booking.classList.contains('open')){const f=[...booking.querySelectorAll('button,input,select')].filter(x=>x.offsetParent!==null);if(f.length){if(e.shiftKey&&document.activeElement===f[0]){e.preventDefault();f[f.length-1].focus();}else if(!e.shiftKey&&document.activeElement===f[f.length-1]){e.preventDefault();f[0].focus();}}}});
const today=new Date();el('#date').min=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
el('#form').addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;const v=new FormData(f);const s=d.items[Number(v.get('service'))];const textMsg='Καλησπέρα! Θα ήθελα να ζητήσω ραντεβού στο '+d.brand+'.\nΥπηρεσία: '+s[0]+'\nΗμερομηνία: '+v.get('date')+'\nΏρα: '+v.get('time')+'\nΌνομα: '+v.get('name')+'\nΤηλέφωνο: '+v.get('phone')+'\nΠαρακαλώ επιβεβαιώστε τη διαθεσιμότητα.';
const n=el('#result');f.hidden=true;n.hidden=false;
if(/^\d{9,15}$/.test(d.booking.whatsapp||'')){n.innerHTML='<h3>Το αίτημά σου είναι έτοιμο.</h3><p>Η κράτηση ισχύει μόνο μετά από επιβεβαίωση της επιχείρησης.</p><button id="wa" class="submit">ΣΥΝΕΧΕΙΑ ΣΤΟ WHATSAPP ↗</button>';el('#wa').addEventListener('click',()=>window.open('https://wa.me/'+d.booking.whatsapp+'?text='+encodeURIComponent(textMsg),'_blank','noopener,noreferrer'));}
else{n.innerHTML='<h3>Προεπισκόπηση αιτήματος ✓</h3><p>Αυτό είναι demo. Κανένα αίτημα δεν στάλθηκε. Ο ιδιοκτήτης μπορεί να συνδέσει WhatsApp ή σύστημα κρατήσεων.</p><pre>'+escape(textMsg)+'</pre><button id="redo" class="submit">ΝΕΟ ΑΙΤΗΜΑ ↗</button>';el('#redo').addEventListener('click',()=>{n.hidden=true;f.hidden=false;});}});
el('#hamburger').addEventListener('click',()=>{const t=el('#nav-links');const on=t.classList.toggle('visible');el('#hamburger').setAttribute('aria-expanded',String(on));});
document.querySelectorAll('#nav-links a').forEach(a=>a.addEventListener('click',()=>{el('#nav-links').classList.remove('visible');el('#hamburger').setAttribute('aria-expanded','false');}));
el('#switch').addEventListener('click',()=>{el('#switch-menu').hidden=!el('#switch-menu').hidden;});
document.addEventListener('click',e=>{if(!e.target.closest('#switch,#switch-menu'))el('#switch-menu').hidden=true;});
let raf=false;addEventListener('scroll',()=>{if(raf)return;raf=true;requestAnimationFrame(()=>{const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);el('#scroll-line').style.transform='scaleX('+(scrollY/max)+')';el('#nav').classList.toggle('scrolled',scrollY>90);raf=false;});},{passive:true});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver' in window&&!reduced){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('shown');io.unobserve(entry.target);}}),{threshold:.07});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));}else document.querySelectorAll('.reveal').forEach(x=>x.classList.add('shown'));
let slide=0,timer;const slides=[...document.querySelectorAll('.slide')];
function show(n){slide=(n+slides.length)%slides.length;slides.forEach((s,i)=>{s.classList.toggle('active',i===slide);s.setAttribute('aria-hidden',String(i!==slide));});el('#count').textContent=String(slide+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');el('#progress').style.width=((slide+1)/slides.length*100)+'%';}
function restart(){clearInterval(timer);if(!reduced&&!document.hidden)timer=setInterval(()=>show(slide+1),6000);}
el('#next').addEventListener('click',()=>{show(slide+1);restart();});el('#prev').addEventListener('click',()=>{show(slide-1);restart();});
document.addEventListener('visibilitychange',restart);el('#slider').addEventListener('mouseenter',()=>clearInterval(timer));el('#slider').addEventListener('mouseleave',restart);
let startX=0;el('#slider').addEventListener('touchstart',e=>startX=e.changedTouches[0].clientX,{passive:true});el('#slider').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45){show(slide+(dx<0?1:-1));restart();}},{passive:true});
show(0);restart();
})();