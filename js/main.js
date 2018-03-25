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
// Email Validation
// -------------------------
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
jQuery(function($) {
  var $form = $('form.cta-form');
  var $emailInput = $form.find('input');
  var $emailErrorMessage = $form.find('.email-error-message');
  var $ctaBtn = $form.find('.btn-cta');

  $form.submit(function(event){
    event.preventDefault();
    var emailValue = $emailInput.val();

    if( isEmail(emailValue) ) { // valid email
      $emailErrorMessage.addClass('d-none');
      $ctaBtn.removeClass('disabled');
    } else { // invalid email
      $emailErrorMessage.removeClass('d-none');
      $ctaBtn.addClass('disabled');
    }
  });
});
