/////////////////////// ready
$(document).ready(function() {
  /*----------------------------------------------------*/
  // Superfish menu.
  /*----------------------------------------------------*/
  $('.sf-menu').superfish();

  /*----------------------------------------------------*/
  // Superslides
  /*----------------------------------------------------*/
  var height = $(window).height();
  $('#home').height(height);

  var o = $('#slides');
  if (o.length > 0) {
    o.superslides({
      play: 7000,
      animation: 'fade', // slide
      pagination: true,
      inherit_height_from: '#home',
    });
  };

  /*----------------------------------------------------*/
  // Fancybox
  /*----------------------------------------------------*/
  var o = $('a.fancybox');
  if (o.length > 0) {
    o.fancybox();
  };


  /*----------------------------------------------------*/
  // Scroll
  /*----------------------------------------------------*/
  $(".scroll-to").bind('click',function(event){

      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
      }, {
          duration: 1200,
          easing: "easeInOutExpo"
      });

      event.preventDefault();
  });

  /*----------------------------------------------------*/
  // Audio
  /*----------------------------------------------------*/
  var o = $('.audio1:not(.audio2) audio');
  if (o.length > 0) {
    o.mediaelementplayer({
      features: ['prevtrack', 'playpause', 'nexttrack', 'progress', 'current', 'volume', 'playlistfeature']
    });
    $('.mejs-prevtrack-button').addClass('mejs-cust1-button');
    $('.mejs-nexttrack-button').addClass('mejs-cust2-button');
  };

  var o = $('.audio2 audio');
  if (o.length > 0) {
    o.mediaelementplayer({
      features: ['prevtrack', 'playpause', 'nexttrack', 'progress', 'current', 'volume', 'playlistfeature']
    });
    $('.mejs-prevtrack-button').addClass('mejs-cust1-button');
    $('.mejs-nexttrack-button').addClass('mejs-cust2-button');
  };

  /*----------------------------------------------------*/
  // Countdown
  /*----------------------------------------------------*/
  $(".deal-countdown-timer").each(function() {
    var g = $(this).children(".deal-time-diff").text(),
        h = $(this).children(".deal-countdown"),
        daysTxt = $(this).find(".deal-countdown-days"),
        hoursTxt = $(this).find(".deal-countdown-hours"),
        minutesTxt = $(this).find(".deal-countdown-minutes"),
        secondsTxt = $(this).find(".deal-countdown-seconds"),
        i = (new Date).getTime() + 1e3 * g;
    setInterval(function() {
        var a = (new Date).getTime(),
            g = (i - a) / 1e3;
        days = parseInt(g / 86400),
        g %= 86400,
        hours = parseInt(g / 3600),
        g %= 3600,
        minutes = parseInt(g / 60),
        seconds = parseInt(g % 60);

        daysTxt.html(days);
        hoursTxt.html(hours);
        minutesTxt.html(minutes);
        secondsTxt.html(seconds);
    }, 1e3);
  });

  /*----------------------------------------------------*/
  // owlCarousel
  /*----------------------------------------------------*/
  var o = $('.owl-carousel-poster');
  if (o.length > 0) {
    o.owlCarousel({
      center: false,
      items: 1,
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 7000,
      nav: true,
      dots: false,
      responsive: {
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    });
  };

  // Animate number
  $('.animated-number').appear(function() {
    var elem = $(this);
    var b = elem.text();
    var d = elem.data('duration');
    var animationDelay = elem.data('animation-delay');
    if ( !animationDelay ) { animationDelay = 0; }
    elem.text("0");

    setTimeout(function(){
      elem.animate({ num: b }, {
        duration: d,
        step: function (num){
          this.innerHTML = (num).toFixed(0)
        }
      });
    }, animationDelay);
  });



  /*----------------------------------------------------*/
  // select2
  /*----------------------------------------------------*/
  var o = $('.select2');
  if (o.length > 0) {
    o.select2({
      minimumResultsForSearch: Infinity,
    });
  };

  /*----------------------------------------------------*/
  // Quantity.
  /*----------------------------------------------------*/
  $(".quantity-button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
     // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }

    $button.parent().find("input").val(newVal);

  });

  /*----------------------------------------------------*/
  // Slider range.
  /*----------------------------------------------------*/
  var o = $( "#slider-range" );
  if (o.length > 0) {
    o.slider({
      range: true,
      min: 0,
      max: 550,
      values: [ 50, 450 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ]);
        $( "#amount2" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
  };

  /*----------------------------------------------------*/
  // Tabs.
  /*----------------------------------------------------*/
  $('.tabs a').click(function(e){
    e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings(),
        target = $this.attr('href');

    others.removeClass('active');
    $this.closest('li').addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  });
  $('.tabs .active a').click();

  /*----------------------------------------------------*/
  // Tooltip
  /*----------------------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();













});

/////////////////////// load
$(window).on('load', function () {
  /*----------------------------------------------------*/
  // flexslider
  /*----------------------------------------------------*/
  var o = $('#carousel2');
  if (o.length > 0) {
    o.flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 129,
      itemMargin: 18,
      prevText: '<i class="fa fa-angle-left"></i>',
      nextText: '<i class="fa fa-angle-right"></i>',
      asNavFor: '#gslider2'
    });
  };
  var o = $('#gslider2');
  if (o.length > 0) {
    o.flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      prevText: '<i class="fa fa-angle-left"></i>',
      nextText: '<i class="fa fa-angle-right"></i>',
      sync: "#carousel2",
      start: function(slider){
        // $('body').removeClass('loading');
      }
    });
  };






});