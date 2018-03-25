;(function(window){
  var headerEl = document.querySelector('.site-header');

  window.addEventListener('scroll', function(e){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0;
    if (scrollTop > 10) {
      headerEl.classList.add("scrolling");
    } else {
      headerEl.classList.remove("scrolling");
    }
  });
})(window);
