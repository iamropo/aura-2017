var navigationBar = document.querySelector('nav')
var links = document.querySelectorAll('#menu a')

function applyChanges (collection, color, scroll) {
	Array.prototype.forEach.call(collection, function (element, index) {
		if (color) {
			element.style.color = color;
		} else if (scroll && index !== 0) {
			element.addEventListener('click', function () {
				window.scrollBy({
					top: navigationBar.offsetHeight,
					left: 0,
					behavior: 'smooth'
				})
			})
		}
	})
}

function styleOverMain () {
	navigationBar.style.backgroundColor = '#bfd8d2'
	navigationBar.style.borderBottom = '1px solid #abc2b2'
	applyChanges(links, '#df744a')	
}

function styleUnderMain () {
	navigationBar.style.backgroundColor = '#a4bf69'
	navigationBar.style.borderBottom = 'none'
	applyChanges(links, '#1a2601')
}

function handleNavigationBar (e) {

	var mainHeight = document.querySelector('#main').offsetHeight

	if (window.scrollY >= mainHeight) {
		styleOverMain()
	} else if (window.scrollY <= mainHeight) {
		styleUnderMain()
	}

}

window.addEventListener('scroll', handleNavigationBar)
// scrolling so that the section headings are visible

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
