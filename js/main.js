 //    -------------------------------------sticky-button----------------
 var btn = $("#button");
 $(window).scroll(function () {
     if ($(window).scrollTop() > 300) {
         btn.addClass("show");
     } else {
         btn.removeClass("show");
     }
 });

 btn.on("click", function (e) {
     e.preventDefault();
     $("html, body").animate({
         scrollTop: 0
     }, "300");
 });
 // ------------------------------------regular-slider-slick-------------------
 $(".regular").slick({
     dots: false,
     infinite: true,
     slidesToShow: 1,
     autoplay: true,
     autoplaySpeed: 1000,
     slidesToScroll: 1
 });
 $(".regular2").slick({
     dots: false,
     infinite: true,
     slidesToShow: 4,
     autoplay: true,
     autoplaySpeed: 1000,
     slidesToScroll: 1,
     responsive: [
         {
             breakpoint: 1200,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,

             }
         },
         {
             breakpoint: 768,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2
             }
         },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }
     ]
 });
 // -----------------------featured-catagories--owl----------------
 $(document).ready(function () {
     var owl = $(".owl-carousel");
     owl.owlCarousel({
         margin: 10,
         nav: true,
         loop: true,
         responsive: {
             0: {
                 items: 2,
                 // dotsEach: 3,
             },
             600: {
                 items: 4,
                 // dotsEach: 3,
             },
             1000: {
                 items: 10,
             },
         },
     });
 });
 // ----------------WOW-animation---------------------------
 new WOW().init();
 // -----------------Deals-of-the-add-timer  ----------------------
 function getTimeRemaining(endtime) {
     const total = Date.parse(endtime) - Date.parse(new Date());
     const seconds = Math.floor((total / 1000) % 60);
     const minutes = Math.floor((total / 1000 / 60) % 60);
     const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
     const days = Math.floor(total / (1000 * 60 * 60 * 24));
     return {
         total,
         days,
         hours,
         minutes,
         seconds
     };
 }
 function initializeClock(id, endtime) {
     const clock = document.getElementsByClassName(id);
     Array.from(clock).forEach((element) => {
         const daysSpan = element.querySelector(".days");
         const hoursSpan = element.querySelector(".hours");
         const minutesSpan = element.querySelector(".minutes");
         const secondsSpan = element.querySelector(".seconds");
         function updateClock() {
             const t = getTimeRemaining(endtime);
             daysSpan.innerHTML = t.days;
             hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
             minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
             secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
             if (t.total <= 0) {
                 clearInterval(timeinterval);
             }
         }
         updateClock();
         const timeinterval = setInterval(updateClock, 1000);
     });
 }
 const deadline = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);
 initializeClock("clockdiv", deadline);
 // ------------------sicky-header--------------------------
 $(window).scroll(function () {
     if ($(window).scrollTop() >= 200) {
         $("nav").addClass("fixed-header");
         $("nav div").addClass("visible-title");
     } else {
         $("nav").removeClass("fixed-header");
         $("nav div").removeClass("visible-title");
     }
 });
 //  ------------------pre-loading-start------------------
 $(window).on('load', function () { // makes sure the whole site is loaded 
     $('#status').fadeOut(); // will first fade out the loading animation 
     $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website. 
     $('body').delay(550).css({ 'overflow': 'visible' });
      });
    //   $("#onloadModal").modal("show");

 // ---------------------header-bottom-dropdown------------------------------
 var searchToggle = $(".categories-button-active");
searchToggle.on("click", function (e) {
 e.preventDefault();
 if ($(this).hasClass("open")) {
     $(this).removeClass("open");
     $(this).siblings(".categories-dropdown-active-large").removeClass("open");
 } else {
     $(this).addClass("open");
     $(this).siblings(".categories-dropdown-active-large").addClass("open");
 }
});
 /*-----------------------starting----modal---------------*/
 $(document).ready(function(){
    $("button").click(function(){
      $("div").removeClass("show");
    });
  });
//  $(".modal").on("shown.bs.modal", function (e) {
//     $(".product-image-slider").slick("setPosition");
//     $(".slider-nav-thumbnails").slick("setPosition");

//     $(".product-image-slider .slick-active img").elevateZoom({
//         zoomType: "inner",
//         cursor: "crosshair",
//         zoomWindowFadeIn: 500,
//         zoomWindowFadeOut: 750
//     });
// });
