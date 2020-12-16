$(document).ready(function(){


    $('.top_menu_btn').click(function () {
        $('.top_header_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.top_header_menu .top_header_menu_close').click(function () {
            $('.top_header_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        if(!$(e.target).closest(".top_header_menu.open").length){
            $(".top_header_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    $('.main_menu .arrow').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('act');
    });


    $(".main_slider").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });




});





