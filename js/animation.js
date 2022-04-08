jQuery(window).on('scroll', function () {
    var reveals = $(".reveal");
    reveals.each(function (i, e) {
        var reveal = $(this);
        var windowHeight = jQuery(window).height();
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.addClass("active " + reveal.data('anim'));
        } else {
            reveal.removeClass("active " + reveal.data('anim'));
        }
    });
});