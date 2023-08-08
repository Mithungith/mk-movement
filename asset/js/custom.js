

//scroll to top

(function ($) {

    $('body').append("<div class='go-top'><i class='fa-solid fa-circle-chevron-up'></i></div>");
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function() {
        $('html, body').animate({
            scrollTop: '0',
        }, 50);
    });

})(jQuery);

//Navbar fixed scroll

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('fixed-top');
    } else {
        $('.navbar').removeClass('fixed-top');
    }
});



$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
	autoplay:true,
	rewind:true,
    dots: true,
    nav: false,
    touchDrag: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            loop:true,
            nav:true,
        },
        1000:{
            items:2,
            nav:true,
            loop:true,
        }
    }
});


