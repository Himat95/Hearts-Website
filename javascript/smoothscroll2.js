

var a = document.getElementById("how-tab");
var b = document.getElementById("about-tab");
var c = document.getElementById("feedback-tab");

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));
	if(target == a) {
	
    if (target = t)
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});