/**
 * @todo
 */

(function($) {
    /**
     * @todo
     */
    Drupal.behaviors.luggageUxBlockCollapse = {
        attach: function (context) {
            $('body', context).once('luggageUxBlockCollapse', function() {
                $('aside section.block').addClass('luggage_ux-block-facet');
                var touched = false;

                $('.luggage_ux-block-facet .block-title').each(function() {
                    $(this).append('<span class="caret"></span>');
                }).bind('click touchend', function(e) {
                    if(touched) {e.preventDefault();touched=false;return;}
                    $(this).parent().find('.content').toggle();
                    touched = (e.type == 'touchend');
                });

                if($(window).width() < 980) {
                    $('.luggage_ux-block-facet .content').toggle();
                }
            });
        }
    };
})(jQuery);
