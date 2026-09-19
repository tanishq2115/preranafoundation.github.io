(function(){
  const langBtn = document.getElementById('langBtn');
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  let lang = localStorage.getItem('preranaLang') || 'mr';

  function applyLang(next){
    lang = next;
    document.documentElement.lang = lang === 'mr' ? 'mr' : 'en';
    document.querySelectorAll('[data-mr][data-en]').forEach(el => {
      el.textContent = el.getAttribute(lang === 'mr' ? 'data-mr' : 'data-en');
    });
    if(langBtn) langBtn.textContent = lang === 'mr' ? 'EN' : 'MR';
    localStorage.setItem('preranaLang', lang);
  }

  if(langBtn){
    langBtn.addEventListener('click', () => applyLang(lang === 'mr' ? 'en' : 'mr'));
  }

  if(menuBtn && mobileNav){
    menuBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeLightbox = document.getElementById('closeLightbox');
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      if(!lightbox || !lightboxImg) return;
      lightboxImg.src = item.getAttribute('data-full') || item.querySelector('img')?.src || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden','false');
    });
  });
  document.querySelectorAll('.article-gallery img').forEach(img => {
    img.addEventListener('click', () => {
      if(!lightbox || !lightboxImg) return;
      lightboxImg.src = img.src;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden','false');
    });
  });
  function close(){
    if(!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
    if(lightboxImg) lightboxImg.src = '';
  }
  if(closeLightbox) closeLightbox.addEventListener('click', close);
  if(lightbox) lightbox.addEventListener('click', e => { if(e.target === lightbox) close(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });

  applyLang(lang);
})();
