(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.caspajs = {
    attach: function (context, settings) {
      $(document).ready(function() {


        if ($("body").hasClass("page-node-9")) {
          $(".contact-float input[name='media']").attr("value", '627');
        }

        $(".add-contact-info-small").unbind('click').bind('click', function (e) {
          $(".float-wrapper").addClass("show");
        });

        $(".float-wrapper .close").unbind('click').bind('click', function (e) {
          $(".float-wrapper").removeClass("show");
        });

        $(".float-wrapper").unbind('click').bind('click', function(e) {
          if (!$(e.target).closest(".region-float-wrapper").length) {
            $(".float-wrapper").removeClass("show");
          }
        });

      });
     }
  };

})(jQuery, Drupal);

