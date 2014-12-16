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
                var $blocks = $('.luggage_ux_block_collapse'),
                    touched = false;

                $blocks.find('> h3, > h2, .block-title').each(function() {
                    $(this).prepend('<span class="caret"></span>');
                }).bind('click touchend', function(e) {
                    if(touched) {e.preventDefault();touched=false;return;}
                    $(this).parent().find('.content').toggle();
                    touched = (e.type == 'touchend');
                });

                if($(window).width() < 980) {
                    $blocks.find('.content').toggle();
                }
            });
        }
    };
})(jQuery);
