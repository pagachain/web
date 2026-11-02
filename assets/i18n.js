(function(){
  var els;
  function set(l){
    document.documentElement.lang=l;
    els.forEach(function(el){ el.innerHTML = el.getAttribute('data-'+l); });
    document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===l);b.setAttribute('aria-pressed',b.dataset.l===l)});
    try{localStorage.setItem('paga-lang',l)}catch(e){}
  }
  document.addEventListener('DOMContentLoaded',function(){
    els=Array.prototype.slice.call(document.querySelectorAll('[data-en]'));
    els.forEach(function(el){ el.setAttribute('data-es', el.innerHTML); });
    document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.l)})});
    var l=null;
    try{l=new URLSearchParams(location.search).get('lang')||localStorage.getItem('paga-lang')}catch(e){}
    if(l!=='en') l='es';
    set(l);
  });
})();
