$(document).ready(function() {
    // -------------- On Scroll Navbar Effect -------------- 
    var window_width = $(window).width();

    $(window).scroll(function(){  
      "use strict"; 
      var scroll = $(window).scrollTop();
      if( scroll > 60 ){
        $(".navbar").addClass("scroll-fixed-navbar");
      } else {
        $(".navbar").removeClass("scroll-fixed-navbar");
      }
    });

    $('.faq-item .link').click(function() {
      $(this).closest('.faq-item').toggleClass('no-lineclamp');
      $(this).toggleClass('show-less');
    });

    // -------------- Dropdown -------------- 

    $(".dropdown").hover(
      function() { $('.dropdown-menu', this).fadeIn("fast");
      },
      function() { $('.dropdown-menu', this).fadeOut("fast");
    });

    // ----------------------- Slick ------------------------

    $('.head-nav').slick({
      variableWidth: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      dots: false,
      arrows: true,
      prevArrow:'<a class="slick-prev"><span class="fa fa-caret-left"></span></a>',
      nextArrow:'<a class="slick-next"><span class="fa fa-caret-right"></span></a>'
    });

    // --------------------- Datepicker -----------------------

    $('.datepicker').datepicker({});


    // --------------------- Timepicker -----------------------

    $('.timepicker-modal').timepicker({
    });
});