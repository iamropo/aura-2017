var navigationBar = document.querySelector('nav')

window.addEventListener('scroll', function () {
	var mainHeight = document.querySelector('#main').offsetHeight
	if (window.scrollY >= mainHeight) {
		navigationBar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
	} else {
		navigationBar.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
	}

})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - navigationBar.offsetHeight
        }, 1000);
        return false;
      }
    }
  });
});	
