
const nav=document.querySelector('.nav');const toggle=document.querySelector('.nav-toggle');
toggle?.addEventListener('click',()=>{const open=nav?.classList.toggle('open');toggle.setAttribute('aria-expanded',String(Boolean(open)))});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
document.querySelectorAll('.filter').forEach(btn=>{btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
  const f=btn.dataset.filter;document.querySelectorAll('.library-card').forEach(card=>{card.hidden=f!=='all'&&card.dataset.category!==f});
});});
