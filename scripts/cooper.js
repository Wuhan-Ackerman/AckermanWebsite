$(function() {
    $('.price').find('li').hover(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    $('#top').click(function(){
        $('html, body').animate({scrollTop:0}, 'fast');
    });
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        height > 300 ? $('#top').fadeIn() : $('#top').fadeOut();
    });
    $('.action').click(function(e) {
        var event = e || e.event;
        event.stopPropagation();
        $('.img-toggle').fadeOut();
        var flag = $(this).find('.img-toggle').is(':visible');
        if (flag) {
            $(this).find('.img-toggle').fadeOut();
        } else {
            $(this).find('.img-toggle').fadeIn();
        }
    });
    $('body').click(function(e) {
        $('.img-toggle').is(':visible') &&  $('.img-toggle').fadeOut();
    });
})