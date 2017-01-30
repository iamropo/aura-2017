jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft(event) {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight(event) {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('button.control_prev').click(function (event) {
        event.stopPropagation()
        moveLeft();
    });

    $('button.control_next').click(function (event) {
        event.stopPropagation()
        moveRight();
    });

    window.addEventListener('keydown', function (event) {
        var key = event.which || event.keyCode
        if (document.querySelector('#slider-container').display !== 'none') {
            if (key === 39) {
                moveRight()
            } else if (key === 37) {
                moveLeft()
            }
        }
    })

});    
