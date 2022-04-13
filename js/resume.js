jQuery(function() {
    jQuery('main section .resume .categories button').on('click', function(e) {
        e.preventDefault();

        $('main section .resume .categories button').removeClass('selected');
        $(this).addClass('selected');

        $('main section .resume .categories_frames *').each(function () {
            $(this).removeClass('active-anim ' + $(this).data('anim'));
        });
    
        var target = $(this).data('target');
        var element = $('main section .resume .categories_frames #' + target);
        element.addClass('active-anim ' + element.data('anim'));
    });
});