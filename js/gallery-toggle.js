var toggle = document.querySelector('select')

function toggleGallery (e) {
	var previousGallery = document.querySelector('.active-gallery')
	console.log(previousGallery.id)
	previousGallery.style.display = 'none';
	previousGallery.className = 'inactive-gallery'

	var year = this.value
	var gallery = document.querySelector('#aura-' + year + '-gallery')
	gallery.className = 'active-gallery'
	gallery.style.display = 'flex'
	/*Styling will be done by css*/
}

toggle.addEventListener('change', toggleGallery)