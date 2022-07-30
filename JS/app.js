$(function() {
    let navbar = $('.navbar')
    let navbarTopSpace = navbar.offset().top

    // preloader section

    let preloader = $('.preloader')
    $(window).load(function() {
        preloader.delay(250).fadeOut()
    })


    // Navbar fixed position

    $(window).scroll(function() {
        let scrTop = $(window).scrollTop()

        if (scrTop > navbarTopSpace) {
            navbar.addClass('nav_fixed');
            backToTopBtn.fadeIn();
        } else {
            navbar.removeClass('nav_fixed');
            backToTopBtn.fadeOut()
        }


        // back to top button appear



    })



    // Back to top Button

    let backToTopBtn = $('.backToTop')
    backToTopBtn.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

})