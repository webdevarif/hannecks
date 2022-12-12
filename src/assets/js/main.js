  (function ($) {
    "use strict";
    
  
    /*=========== Preloader JS
  =============================================================================*/
    $(window).on("load", function () {
      $(".preeloader").fadeOut();
    });
  
    // Nice Select
    $('[nice-select]').niceSelect();  


	/*=============================================
		=    		 Swiper Slider			      =
	=============================================*/
	var avs_slider = $('[avs-slider]');
    if (avs_slider.length) {
		avs_slider.each(function () {
			var SwiperCarousel = $(this),
            // Slides SpaceBetween
			slidesSpaceBetween = SwiperCarousel.data('spaceBetween'),
			slidesSpaceBetweenXl = SwiperCarousel.data('xl-spaceBetween'),
			slidesSpaceBetweenLg = SwiperCarousel.data('lg-spaceBetween'),
			slidesSpaceBetweenMd = SwiperCarousel.data('md-spaceBetween'),
			slidesSpaceBetweenSm = SwiperCarousel.data('sm-spaceBetween'),

            // Slides Autoplay
			slidesAutoplay = SwiperCarousel.data('autoplay'),
			slidesAutoplayXl = SwiperCarousel.data('xl-autoplay'),
			slidesAutoplayLg = SwiperCarousel.data('lg-autoplay'),
			slidesAutoplayMd = SwiperCarousel.data('md-autoplay'),
			slidesAutoplaySm = SwiperCarousel.data('sm-autoplay'),

            // Slides Loop
			slidesLoop = SwiperCarousel.data('loop'),
			slidesLoopXl = SwiperCarousel.data('xl-loop'),
			slidesLoopLg = SwiperCarousel.data('lg-loop'),
			slidesLoopMd = SwiperCarousel.data('md-loop'),
			slidesLoopSm = SwiperCarousel.data('sm-loop'),

            // Slides per View
			slidesPerView = SwiperCarousel.data('items'),
			slidesPerViewXl = SwiperCarousel.data('xl-items'),
			slidesPerViewLg = SwiperCarousel.data('lg-items'),
			slidesPerViewMd = SwiperCarousel.data('md-items'),
			slidesPerViewSm = SwiperCarousel.data('sm-items'),

			slidesSpeed = SwiperCarousel.data('speed'),
			slidesScrollbar = SwiperCarousel.data('scrollbar'),
			slidesLazy = SwiperCarousel.data('lazy'),
			slidesNextEl = SwiperCarousel.data('next'),
			slidesPrevEl = SwiperCarousel.data('prev');
			
			var swiper = new Swiper(SwiperCarousel[0], {
				slidesPerView: (slidesPerView ? slidesPerView : 1),
				loop: (slidesLoop ? slidesLoop : true),
				speed: (slidesSpeed ? slidesSpeed : 600),
				lazy: (slidesLazy ? slidesLazy : true),
                spaceBetween: (slidesSpaceBetween ? slidesSpaceBetween : 30),
				navigation: {
					nextEl: slidesNextEl,
					prevEl: slidesPrevEl,
				},
        scrollbar: {
          el: slidesScrollbar,
          // hide: true,
          hide: false,
        },
				fadeEffect: {
					crossFade: true,
				},
				autoplay: (slidesAutoplay ? slidesAutoplay : false),
                breakpoints: {
                    // when window width is >= 480px
                    480: {
                        slidesPerView: (slidesPerViewSm ? slidesPerViewSm : 1),
                        loop: (slidesLoopSm ? slidesLoopSm : true),
                        autoplay: (slidesAutoplaySm ? slidesAutoplaySm : false),
                        spaceBetween: (slidesSpaceBetweenSm ? slidesSpaceBetweenSm : 30),
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: (slidesPerViewMd ? slidesPerViewMd : 1),
                        loop: (slidesLoopMd ? slidesLoopMd : true),
                        autoplay: (slidesAutoplayMd ? slidesAutoplayMd : false),
                        spaceBetween: (slidesSpaceBetweenMd ? slidesSpaceBetweenMd : 30),
                    },
                    // when window width is >= 991px
                    991: {
                        slidesPerView: (slidesPerViewLg ? slidesPerViewLg : 1),
                        loop: (slidesLoopLg ? slidesLoopLg : true),
                        autoplay: (slidesAutoplayLg ? slidesAutoplayLg : false),
                        spaceBetween: (slidesSpaceBetweenLg ? slidesSpaceBetweenLg : 30),
                    },
                    // when window width is >= 1199px
                    1199: {
                        slidesPerView: (slidesPerViewXl ? slidesPerViewXl : 1),
                        loop: (slidesLoopXl ? slidesLoopXl : true),
                        autoplay: (slidesAutoplayXl ? slidesAutoplayXl : false),
                        spaceBetween: (slidesSpaceBetweenXl ? slidesSpaceBetweenXl : 30),
                    },
                },
			});		
		});		
	}
      
    /*=============================================
    =    		 ViewPassword On Click      	  =
    =============================================*/
    $("[avs-hsp-id]").avsPassType();

  })(jQuery);
  