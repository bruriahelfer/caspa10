(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.owl = {
    attach: function (context, settings) {
      $(document).ready(function() {




      if ($('.field--name-field-gallery > .field__item').length > 1) {
        $('.field--name-field-gallery').owlCarousel({
          rtl: true,
          autoplay:false,
          loop:false,
          margin:40,
          nav: true,
          dots: false,
          navRewind: false,
          navText:["<button class='nav-btn prev-slide' aria-label='נווט אחורה'></button>","<button class='nav-btn next-slide' aria-label='נווט קדימה'></button>"],
          responsive: {
            0: {
              margin:10,
              items: 1,
              slideBy: 1,
            },
            481:{
              items: 2,
              slideBy: 2,
            },
            769: {
              margin:40,
              items: 3,
              slideBy: 3,
            },
            1025: {
              margin:40,
              items: 4,
              slideBy: 4,
            },
          }
        });
      }

      if ($('.field--name-field-banner > .field__item').length > 1) {
        $('.field--name-field-banner').owlCarousel({
          rtl: true,
          items:1,
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:3000,
          nav: false,
          dots: false,
          singleItem: true,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut'
        });
      }

      if ($('.field--name-field-banner-mobile > .field__item').length > 1) {
        $('.field--name-field-banner-mobile').owlCarousel({
          rtl: true,
          items:1,
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:3000,
          nav: false,
          dots: false,
          singleItem: true,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut'
        });
      }
      
      $('.banner .play-owl').on('click',function(){
        $('.banner .play-owl').addClass('hide');
        $('.banner .pause-owl').removeClass('hide');
        $(".banner .field--name-field-banner").trigger('play.owl.autoplay',[1000])
        $(".banner .field--name-field-banner-mobile").trigger('play.owl.autoplay',[1000])
      })
      $('.banner .pause-owl').on('click',function(){
        $('.banner .play-owl').removeClass('hide');
        $('.banner .pause-owl').addClass('hide');
        console.log('stopped');
        setTimeout(function() {
          $(".banner .field--name-field-banner").trigger('stop.owl.autoplay');
          $(".banner .field--name-field-banner-mobile").trigger('stop.owl.autoplay');
        }, 300);
      })

      // dgamim

      if ($(window).width()<1381){
          $(".view-dgamim.view-display-id-block_2 .view-content").owlCarousel({
            rtl: true,
            autoplay:false,
            loop:false,
            margin:25,
            nav: true,
            dots: false,
            navRewind: false,
            singleItem: true,
            navText:["<button class='nav-btn prev-slide' aria-label='נווט אחורה'></button>","<button class='nav-btn next-slide' aria-label='נווט קדימה'></button>"],
            responsive: {
              0: {
                items: 1,
              },
              481:{
                items: 2,
                slideBy: 2,
              },
              770:{
                items: 3,
                slideBy: 3,        
              },
              1025:{
                items: 4,
                slideBy: 4,        
              },
              1201:{
                items: 5,
                slideBy: 5,        
              }
            }
          });
        }
        $(window).resize(function() {
            if ($(window).width()>1380){
              $(".view-dgamim.view-display-id-block_2 .view-content").trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
              $(".view-dgamim.view-display-id-block_2 .view-content").find('.owl-stage-outer').children().unwrap();
            } else {
              $(".view-dgamim.view-display-id-block_2 .view-content").owlCarousel({
                rtl: true,
                autoplay:false,
                loop:false,
                margin:25,
                nav: true,
                dots: false,
                navRewind: false,
                singleItem: true,
                navText:["<button class='nav-btn prev-slide' aria-label='נווט אחורה'></button>","<button class='nav-btn next-slide' aria-label='נווט קדימה'></button>"],
                responsive: {
                  0: {
                    items: 1,
                  },
                  481:{
                    items: 2,
                    slideBy: 2,
                  },
                  770:{
                    items: 3,
                    slideBy: 3,        
                  },
                  1025:{
                    items: 4,
                    slideBy: 4,        
                  },
                  1201:{
                    items: 5,
                    slideBy: 5,        
                  }
                }
              });
            }
        });




      });
     }
  };

})(jQuery, Drupal);

