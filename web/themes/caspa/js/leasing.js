(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.caspaleasingjs = {
    attach: function (context, settings) {
      $(document).ready(function() {


        $('.paragraph--type--leasing .model [role="button"]').on('keydown', function(event) {
            if (event.keyCode === 13) {
                $(this).click();
                $(".km button").focus();
            }
        });
        $('.paragraph--type--leasing .km [role="button"]').on('keydown', function(event) {
            if (event.keyCode === 13) {
                $(this).click();
                $(".service input").focus();
            }
        });

        $('.paragraph--type--leasing .motag [role="button"]').on('keydown', function(event) {
            if (event.keyCode === 13) {
                $(this).click();
                $(".motag button").focus();
            }
        });

        $('.paragraph--type--leasing button').click(function() {
            if ($(this).parent().hasClass("km")){
                $(".model button").attr("aria-expanded","false");
                $(".motag button").attr("aria-expanded","false");
            } else if ($(this).parent().hasClass("motag")){
                $(".model button").attr("aria-expanded","false");
                $(".km button").attr("aria-expanded","false");
            } else {
                $(".km button").attr("aria-expanded","false");
                $(".motag button").attr("aria-expanded","false");
            }
            if ($(this).parent().children(".open-content").hasClass("open")){
                $(this).parent().children(".open-content").removeClass("open");
                $(this).attr("aria-expanded","false");
            } else {
                $('.paragraph--type--leasing .open-content.open').removeClass("open");
                $(this).parent().children(".open-content").addClass("open");
                $(this).attr("aria-expanded","true");
            }
        });

        $('.paragraph--type--leasing .motag .open-content .field-content div').click(function() {
            if ($('.paragraph--type--leasing .model button').hasClass("full") && $(this).attr("tid")!=$('.paragraph--type--leasing .model .views-field-title .field-content > div.active').attr("tid")){
                $('.paragraph--type--leasing .model .views-field-title div.active').removeClass("active");
                var model = Drupal.t('Model');
                $('.paragraph--type--leasing .model button').html(model).removeClass("full");
                $('.paragraph--type--leasing .submit-wrapper a.submit').addClass("unactive");
            }
            $(".paragraph--type--leasing .model .views-row.hide").removeClass("hide");
            $(".paragraph--type--leasing .model .views-row:not(."+$(this).attr("tid")+")").addClass("hide");
            $('.paragraph--type--leasing .motag button').html($(this).html()).addClass("full");
            $(this).closest(".motag").find("button").attr("aria-expanded","false");
            $(this).closest(".open-content").removeClass("open");
        });

        $('.paragraph--type--leasing .model .views-field-title .field-content > div').click(function() {
            $(this).closest(".model").find(".open-content").removeClass("open");
            $(this).closest(".paragraph--type--leasing").find(".km").removeClass("disable");
            $(this).closest(".paragraph--type--leasing").find(".km button").attr("tabindex", "1");
            $('.paragraph--type--leasing .km .hide').removeClass("hide");
            if (!$(this).attr("service").includes("upto15000")) {
                $('.paragraph--type--leasing .km [service="15000"]' ).addClass("hide");
            }
            if (!$(this).attr("service").includes("upto20000")) {
                $('.paragraph--type--leasing .km [service="20000"]' ).addClass("hide");
            }
            if (!$(this).attr("service").includes("upto25000")) {
                $('.paragraph--type--leasing .km [service="25000"]' ).addClass("hide");
            }
            $(this).closest(".model").find("button").attr("aria-expanded","false");
            $('.paragraph--type--leasing .model .views-field-title div.active').removeClass("active");
            $(this).addClass("active");
            $('.paragraph--type--leasing .model button').html($(this).html()).addClass("full");
            $('.paragraph--type--leasing .model button').addClass("active");
            if ($('.paragraph--type--leasing .km button').hasClass("full")){
                if ($('.paragraph--type--leasing .km .active').hasClass("hide")){
                    $('paragraph--type--leasing .km .active').removeClass("active");
                    var Required_km = Drupal.t('Required km');
                    $('.paragraph--type--leasing .km button').html(Required_km).removeClass("full");
                    $('.paragraph--type--leasing .submit-wrapper a.submit').addClass("unactive");
                } else {
                    if( $('.service input').is(':checked') ){
                        var include = "service";
                    }
                    else{
                        var include = "basic";
                    }
                    $(".paragraph--type--leasing a.submit").attr("href","/node/"+$(this).attr("nid")+"/"+include +$('.paragraph--type--leasing .km .open-content div.active').attr("service"));
                    $(".paragraph--type--leasing a.submit").removeClass("unactive");
                }
            }
        });

        $('.paragraph--type--leasing .km .open-content div').click(function() {
            $(this).closest(".km").find(".open-content").removeClass("open");
            $(this).closest(".km").find("button").attr("aria-expanded","false");
            $('.paragraph--type--leasing .km .open-content div.active').removeClass("active");
            $(this).addClass("active");
            $('.paragraph--type--leasing .km button').html($(this).html()).addClass("full");
            $('.paragraph--type--leasing .km button').addClass("active");
            if ($('.paragraph--type--leasing .model button').hasClass("full")){
                if( $('.service input').is(':checked') ){
                    var include = "service";
                }
                else{
                    var include = "basic";
                }
                $(".paragraph--type--leasing a.submit").attr("href","/node/"+$('.paragraph--type--leasing .model .views-field-title div.active').attr("nid")+"/"+include +$(this).attr("service"));
                $(".paragraph--type--leasing a.submit").removeClass("unactive");
            }
        });

        $('.paragraph--type--leasing .service input').change(function() {
            if ($('.paragraph--type--leasing .model button').hasClass("full") && $('.paragraph--type--leasing .km button').hasClass("full")){
                if( $('.service input').is(':checked') ){
                    var include = "service";
                }
                else{
                    var include = "basic";
                }
                $(".paragraph--type--leasing a.submit").attr("href","/node/"+$('.paragraph--type--leasing .model .views-field-title div.active').attr("nid")+"/"+include +$('.paragraph--type--leasing .km .open-content div.active').attr("service"));
                $(".paragraph--type--leasing a.submit").removeClass("unactive");
            }
        });

        $(".paragraph--type--leasing .submit-error").click(function() {
            $(this).find("span").show();
        });

        $("body.page-node-65").unbind('click').bind('click', function (e) {
            if((!$(e.target).closest($(".open-content")).length)) {
              if((!($(e.target).closest($(".model button")).length || $(e.target).closest($(".km button")).length || $(e.target).closest($(".motag button")).length ))) {      
                $(".open-content").removeClass("open");
                $(".paragraph--type--leasing").find("button").attr("aria-expanded","false");
                $("body").removeClass("private-content-open");
              }
            }
          });

      });
     }
  };

})(jQuery, Drupal);

