jQuery(function() {
    jQuery('main section .resume .categories button').on('click', function(e) {
        e.preventDefault();

        $('main section .resume .categories button').removeClass('selected');
        $(this).addClass('selected');

        $('main section .resume .categories_frames').find('.visible').removeClass('visible');
        var target = $(this).data('target');
        jQuery('main section .resume .categories_frames #' + target).addClass('visible');
    });
});