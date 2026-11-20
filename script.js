(function(){
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(toggle&&nav){
    toggle.addEventListener('click',()=> {
      const open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
    });
  }

  const track=document.querySelector('.carousel-track');
  if(!track)return;
  const slides=Array.from(track.querySelectorAll('img'));
  const dots=Array.from(document.querySelectorAll('.dot'));
  if(slides.length<2)return;
  let index=0;
  let timer;
  function show(n){
    index=(n+slides.length)%slides.length;
    track.style.transform=`translateX(-${index*100}%)`;
    dots.forEach((dot,i)=>dot.classList.toggle('active',i===index));
  }
  function restart(){
    clearInterval(timer);
    timer=setInterval(()=>show(index+1),4000);
  }
  document.querySelector('.carousel-control.prev')?.addEventListener('click',()=>{show(index-1);restart();});
  document.querySelector('.carousel-control.next')?.addEventListener('click',()=>{show(index+1);restart();});
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>{show(i);restart();}));
  const carousel=document.querySelector('.carousel');
  carousel?.addEventListener('mouseenter',()=>clearInterval(timer));
  carousel?.addEventListener('mouseleave',restart);
  show(0);restart();
})();
