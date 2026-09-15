document.getElementById('year').textContent = new Date().getFullYear();
const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='72px';nav.style.right='20px';nav.style.background='var(--paper)';nav.style.padding='18px 22px';nav.style.border='1px solid var(--line)';});
