// ready
$(document).ready(function() {

  $(".woocommerce-ordering select").niceSelect();

if ( document.getElementsByClassName( 'swiper-container' ) ) {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    // autoplay: {
    //     delay: 3000,
    // },
    initialSlide: 6,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 150,
        depth: 360,
        modifier: 1,
        slideShadows: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
}

  $("form").on("submit", function(e) {
    e.preventDefault();
    $(this).trigger("reset");
    close_popup();
    show_thanks_popup();

    setTimeout(function(){
      close_popup();
    }, 5000);
  });

  // iframe lazy loading

  // setTimeout(function(){
  //     let iframe = $("iframe"),
  //     iframeUrl = iframe.attr("data-src");
  //     iframe.attr("src", iframeUrl);
  // }, 2000);
  
  // lazy scroll to section

  // burger

  $(".open-menu-js").on("click", function() {
    $(".mobileMenu-overlay").addClass("open");
    $("body, html").css("overflow-x", "hidden");
  });
  
  // burger close

  $(".mobileMenu__close").on("click", function() {
    $(".mobileMenu-overlay").removeClass("open");
    $("body, html").css("overflow-x", "auto");
  });
    

});


document.addEventListener('touchmove', function (){
  var scrollTop = window.pageYOffset;
}, false);

// resize
var flag = true;
var initialSmallLampStartPos;

$(window).on("scroll", function() {

      // fixed header
  var header = $(".header");
  // console.log( $(this).scrollTop() );

  if ( $(this).scrollTop() > 80 ) {

    console.log( "fixed" );
    if ( ! header.hasClass( "fixed" ) ) {
      header.addClass( "fixed" );
    }
  } else {
    if ( header.hasClass( "fixed" ) ) {
      header.removeClass( "fixed" );
    }
  }

// parallax
  var banner = $(".banner");


  if ( 
      banner === null || banner === undefined || banner === '' ) {
          console.log( "if error" );
      return;
  }

  var bannerHeight = banner.outerHeight(true);

  var smallLampEl = $(".parallax-lamp-small");
  var smallLampScrollPos = $(this).scrollTop() - bannerHeight;
  var maxLampScrollPos = 337;
  var smallLampStartPos = smallLampEl.offset().top;
  // console.log( "flag: " + flag );

  if ( flag == true ) {
    initialSmallLampStartPos = smallLampStartPos;
    flag = false;
  }

  // console.log( $(this).scrollTop() - ( bannerHeight / 2 ) );

  if ( $(this).scrollTop() - ( bannerHeight / 2 )  > 0 ) {

    if ( smallLampScrollPos < maxLampScrollPos && smallLampScrollPos > initialSmallLampStartPos - bannerHeight ) {
      // console.log( 'lamp will be scrolling now' )
      // console.log( "bannerHeight : " + bannerHeight );
      // console.log( "smallLampScrollPos : " + smallLampScrollPos );
      smallLampEl.offset({ top: bannerHeight + smallLampScrollPos});

    }

    // console.log( bannerHeight );
    // console.log( $(this).scrollTop() - bannerHeight );
  }

});


$(window).on("load resize", function() {


    if ( $(window).width() <= 991 ) {

        $(".menu-item-has-children > a").on("click", function(e) {
            e.preventDefault();
        });

        $(".menu-item-has-children").on("click", function() {
            if ( ! $(this).find(".sub-menu").hasClass( "open" ) ) {
                $(this).find(".sub-menu").addClass( "open" );
            } else {
                $(this).find(".sub-menu").removeClass( "open" );
            }
        });

    }

});