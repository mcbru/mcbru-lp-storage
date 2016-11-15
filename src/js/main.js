/*
 * Requires jQuery
 */

$(function(){

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

  window.odometerOptions = {
    duration: 5 * 1000
  };

  var gross_opp_pipeline = $('.odometer').attr('data-gross-op-pipeline');
  var container5 = $('.odometer');
  var inview5 = new Waypoint.Inview({
    element: container5,
    enter: function(direction) {
      container5.html(gross_opp_pipeline);
    }
  })

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


  // var container1 = $('.c-band--image__2');
  // var container1_elements = $('.c-band--image__2 h2, .c-band--image__2 p');
  // var inview1 = new Waypoint.Inview({
  //   element: container1,
  //   enter: function(direction) {
  //     container1_elements.addClass('animated').addClass('fadeIn').css({'animation-delay': '1s'});
  //     // console.log(container1);
  //     // console.log(container1_elements);
  //     // console.log('Enter triggered with direction ' + direction);
  //   }//,
  //   // entered: function(direction) {
  //   //   console.log('Entered triggered with direction ' + direction)
  //   // },
  //   // exit: function(direction) {
  //   //   console.log('Exit triggered with direction ' + direction)
  //   // },
  //   // exited: function(direction) {
  //   //   console.log('Exited triggered with direction ' + direction)
  //   // }
  // })

  // var container2 = $('.c-band--image__3');
  // var inview2 = new Waypoint.Inview({
  //   element: container2,
  //   enter: function(direction) {
  //     container2.find('*').addClass('animated').addClass('fadeIn').css({'animation-delay': '1s'});
  //     // console.log(container2);
  //     // console.log(container1_elements);
  //     // console.log('Enter triggered with direction ' + direction);
  //   }
  // })

  var container3 = $('.bar-group--1');
  var container3_element = $('.bar-group--1 .bar');
  var inview3 = new Waypoint.Inview({
    element: container3,
    enter: function(direction) {
      container3_element.addClass('bar-animated').css({'animation-delay': '1s'});
      $('.c-callout--1').addClass('fadeIn').addClass('animated').css({'animation-delay': '1s'});
    }
  })

  var container4 = $('.bar-group--2');
  var container4_element = $('.bar-group--2 .bar');
  var inview4 = new Waypoint.Inview({
    element: container4,
    enter: function(direction) {
      container4_element.addClass('bar-animated').css({'animation-delay': '1s'});
      $('.c-callout--2').addClass('fadeIn').addClass('animated').css({'animation-delay': '1s'});
    }
  })
});
