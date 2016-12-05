/*
 * Requires jQuery
 */

$(function(){

  $('.c-magnific-popup').magnificPopup({
    delegate: 'a',
    type:'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    image: {
      verticalFit: true,
    },
    mainClass: 'mfp-with-zoom',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
    }
  });

  // $.fn.scrollView = function () {
  //   return this.each(function () {
  //     $('html, body').animate({
  //       scrollTop: $(this).offset().top
  //     }, 1000);
  //   });
  // }
  //
  // $('.c-page-head__btn').click(function (event) {
  //   event.preventDefault();
  //   $('#section-contact').scrollView();
  // });


  // var container6 = $('.c-band--image__1');
  // var container6_elements = $('.c-band--image__1 h1, .c-band--image__1 svg');
  // var inview6 = new Waypoint.Inview({
  //   element: container6,
  //   enter: function(direction) {
  //     container6_elements.addClass('animated').addClass('fadeIn').css({'animation-delay': '1s'});
  //   }
  // })

  // var container7 = $('.o-wrapper--animate');
  // // var container6_elements = $('.c-band--image__1 h1, .c-band--image__1 svg');
  // var inview7 = new Waypoint.Inview({
  //   element: container7,
  //   enter: function(direction) {
  //     container7.addClass('animated').addClass('fadeIn').css({'animation-delay': '1s'});
  //   }
  // })

  function onScrollInit(items, trigger) {
    items.each(function() {
      var osElement = $(this);
        // osAnimationClass = osElement.attr('data-os-animation'),
        // osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          'animation-delay': '0.2s'
        });

      var osTrigger = (trigger) ? trigger : osElement;
      osTrigger.waypoint(function(){
        osElement.addClass('animated').addClass('fadeIn');
        // console.log(osElement);
      }, {
        // triggerOnce: true,
        // context:"document.body",
        offset: '80%;'
      });
    });
  }

  onScrollInit($('.o-wrapper--animate'));

});
