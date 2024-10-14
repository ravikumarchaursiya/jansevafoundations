

(function ($) {
    'use strict';
    /*  ======================================
            Mobile Menu
        ====================================== */
    var mobile_menu = $('ul.navigation');
    mobile_menu.slicknav({
        prependTo: '.responsive-menu-wrap'
    });
    /*  =========================
            Fixed Menu
        =========================*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 60) {
            $('.menu-area').addClass('fixed-menu');
        } else {
            $('.menu-area').removeClass('fixed-menu');
        }
    });
    /*  =========================
            sticky menu
        =========================*/
    $(".menu-area").sticky({
        topSpacing: 0
    });

    /*  =========================
            donate label
        =========================*/
    $('.label-show').on('click', function () {
        $('.from-hidden').addClass('from-show');
    });

    $('.label-hidden').on('click', function () {
        $('.from-hidden').removeClass('from-show');
    });

 
   

    $(window).on('load', function () {

        /*  ======================================
                Preloader
            ====================================== */
        var preloader = $('.preloader');
        preloader.fadeOut('500');

 
        // filter items on button click
        var isotope_nav = $('.iso-nav ul li');
        isotope_nav.on('click', function () {
            $('.iso-nav ul li').removeClass('gallery-active');
            $(this).addClass('gallery-active');
            var selector = $(this).attr('data-filter');
            $('.iso-content').isotope({
                filter: selector
            });
            return false;
        });
    });
}(jQuery));
