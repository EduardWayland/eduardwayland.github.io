var nav = $('nav');
var scrollPosition, navOpacity;

jQuery(function() {
        scrollPosition = jQuery(window).scrollTop();
        navOpacity = (scrollPosition / jQuery(window).height()) + 0.2;

        nav.css('background-color', 'rgba(var(--color-primary), ' + navOpacity + ')');
        jQuery(window).on('scroll', function() {
                var offset = jQuery(window).scrollTop();
                var height = nav.height();
                var heightOffset = 25;

                if(offset >= (height + heightOffset)) {
                    nav.addClass('sticky');
                } else if(offset < (height + heightOffset) && nav.hasClass('sticky')) {
                    nav.removeClass('sticky');
                }

                console.log(offset + "/" + height);

                scrollPosition = jQuery(window).scrollTop();
                navOpacity = (scrollPosition / jQuery(window).height()) + 0.2;

                nav.css('background-color', "rgba(var(--color-primary), " + navOpacity + ")");
            });

        jQuery('nav > ul > li').on('click', function(e) {
            $('nav > ul > li').removeClass('selected');
            if($(this).index() == 0) {
                return;
            }
            $(this).addClass('selected');
            e.preventDefault();
        });
});