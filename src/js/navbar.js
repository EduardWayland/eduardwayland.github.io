var nav = $('nav');
var scrollPosition, navOpacity;

jQuery(function() {
        scrollPosition = jQuery(window).scrollTop();
        navOpacity = (scrollPosition / jQuery(window).height()) + 0.2;

        nav.css('background-color', 'rgba(var(--color-primary), ' + navOpacity + ')');
        jQuery(window).on('scroll', function() {
            if(document.getElementById('menu-btn').checked) {
                document.getElementById('menu-btn').checked = false;
            }
            var offset = jQuery(window).scrollTop();
            var height = nav.height();
            var heightOffset = 25;

            if(offset >= (height + heightOffset)) {
                scrollPosition = jQuery(window).scrollTop();
                navOpacity = (scrollPosition / jQuery(window).height()) + 0.2;

                nav.addClass('sticky');
                nav.css('background-color', "rgba(var(--color-primary), " + navOpacity + ")");
            } else if(offset < (height + heightOffset) && nav.hasClass('sticky')) {
                nav.removeClass('sticky');
            }
        });

        jQuery('nav .menu > li').on('click', function(e) {
            $('nav .menu > li').children('a').removeClass('selected');
            if($(this).index() == 0) {
                return;
            }
            $(this).children('a').addClass('selected');
            e.preventDefault();
        });
});