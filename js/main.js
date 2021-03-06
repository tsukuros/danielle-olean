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

  // bind events
  $form.submit(onSubmit);
  $emailInput.on('input', updateBtn);
  $('.navbar-brand').on('click', onLogoClick);

  function onSubmit(event) {
    event.preventDefault();
    var emailValue = $emailInput.val();
    if( isEmail(emailValue) ) { // valid email
      $emailErrorMessage.addClass('d-none');
      console.log('email:', emailValue);
    } else {
      $emailErrorMessage.removeClass('d-none');
    }
  }
  function updateBtn() {
    var emailValue = $emailInput.val();
    if( isEmail(emailValue) ) { // valid email
      $ctaBtn.removeClass('disabled');
    } else { // invalid email
      $ctaBtn.addClass('disabled');
    }
    if( emailValue.length ) {
      $emailErrorMessage.addClass('d-none');
    }
  }
  function onLogoClick(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 400);
  }
  $ctaBtn.click(function() {
    $form.submit();
  })
});

$(function() {
	var $window = $(window);

	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object

		$(window).scroll(function() {

			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% '+ yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });

		}); // end window scroll
	});

});
