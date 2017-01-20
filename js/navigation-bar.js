function handleNavigationBar (e) {

	var navigationBar = document.querySelector('nav')
	var navigationBarHeight = navigationBar.offsetHeight

	if (window.scrollY >= navigationBarHeight ) {
		navigationBar.style.position = 'fixed'
		navigationBar.style.bottom = '0px'
		navigationBar.style.left = '0px'
		navigationBar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
		document.querySelector('#heels').style.height = navigationBarHeight + 'px'
	} else if (window.scrollY <= navigationBarHeight) {
		navigationBar.style.position = 'relative'
		navigationBar.style.bottom = '0px'
		navigationBar.style.left = '0px'
		navigationBar.style.backgroundColor = '#191919'
	}

}

window.addEventListener('scroll', handleNavigationBar)
