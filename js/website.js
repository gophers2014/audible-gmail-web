/**
 * Created by xiaoxiao on 8/16/14.
 */

(function() {
    $(document).ready(function() {
        $('.bxslider').bxSlider({
            auto: true,
            autoHover: true
        });

        $('.section-box').mouseenter(function () {
           $(this).delay(300).animate({
               opacity: 0.75
           });
        });

        $('.section-box').mouseout(function () {
            $(this).delay(300).animate({
                opacity: 1.0
            });
        });
    });
})();