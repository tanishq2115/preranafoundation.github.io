const menuBtn=document.getElementById('menuBtn');
const mobileNav=document.getElementById('mobileNav');
menuBtn?.addEventListener('click',()=>mobileNav.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));
let english=false;
const langBtn=document.getElementById('langBtn');
function setLanguage(){document.documentElement.lang=english?'en':'mr';document.querySelectorAll('[data-mr]').forEach(el=>el.textContent=english?el.dataset.en:el.dataset.mr);if(langBtn)langBtn.textContent=english?'मराठी':'EN'}
langBtn?.addEventListener('click',()=>{english=!english;setLanguage()});setLanguage();
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lbImg.src=item.dataset.full;lb.classList.add('open');lb.setAttribute('aria-hidden','false')}));
function closeLb(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');lbImg.src=''}
document.getElementById('closeLightbox')?.addEventListener('click',closeLb);lb?.addEventListener('click',e=>{if(e.target===lb)closeLb()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});
