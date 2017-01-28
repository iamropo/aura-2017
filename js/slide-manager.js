var slider = document.querySelector('#slider-container')
var slides = document.querySelectorAll('#slider li')
var imageFrames = document.querySelectorAll('#gallery div div')
var closeButton = document.querySelector('#control span')

function returnYear () {
	return document.querySelector('#gallery-year').value
}

function returnImagesByYear (year) {
	var images = document.querySelectorAll('#aura-' + year + '-gallery img')
	return images
}

function makeSlide (container, image) {
	container.style.backgroundImage = 'url(' + image.src +')'
}

function modifyImageIndex (images, index) {
	var index = Number(index)
	return images.slice(index, images.length).concat(images.slice(0, index))
}

function appendSlides (year, selectedImageIndex) {
	Array.prototype.forEach.call(slides, function (slide, index) {
		var images = Array.prototype.slice.call(returnImagesByYear(year), null)
		var alteredIndexedImages = modifyImageIndex(images, selectedImageIndex)
		makeSlide(slide, alteredIndexedImages[index])
		originalIndexedImages = images
	})
}

appendSlides(2016, 0) // default

Array.prototype.forEach.call(imageFrames, function (frame, index) {
	frame.addEventListener('click', function () {
		var year = returnYear()
		appendSlides(year, index)
    slider.style.display = 'flex'
	})
})

function resetSlider (event) {
	Array.prototype.forEach.call(slides, function (slide) {
		slide.style.backgroundImage = ''
	})
	slider.style.display = 'none'
	event.stopPropagation()
}

closeButton.addEventListener('click', resetSlider)
