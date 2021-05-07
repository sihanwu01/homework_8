(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using anime.js
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
      if (
          location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
      ) {
          var target = $(this.hash);
          target = target.length ?
              target :
              $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
              anime({
                  targets: 'html, body',
                  scrollTop: target.offset().top - 72,
                  duration: 1000,
                  easing: 'easeInOutExpo'
              });
              return false;
          }
      }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
  });

  // Collapse Navbar
  var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
      } else {
          $("#mainNav").removeClass("navbar-shrink");
      }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery);

// Text Animation
var animation = {};
animation.opacityIn = [0,1];
animation.scaleIn = [0.2, 1];
animation.scaleOut = 3;
animation.durationIn = 800;
animation.durationOut = 600;
animation.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.animation .letters-1',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.animation .letters-1',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  }).add({
    targets: '.animation .letters-2',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.animation .letters-2',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  }).add({
    targets: '.animation .letters-3',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.animation .letters-3',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  }).add({
    targets: '.animation',
    opacity: 0,
    duration: 500,
    delay: 500
  });