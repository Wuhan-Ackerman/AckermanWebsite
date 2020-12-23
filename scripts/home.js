$(function() {
    $('#drop').click(function(e){
        var event = e || e.event;
        event.stopPropagation();
        $('.drop-down').slideToggle('fast');
    });
    $('body').click(function(e) {
        $('.drop-down').slideUp('fast');
    })
    jQuery(".slideBox").slide({
        mainCell:".bd ul",
        trigger: 'click',
        prevCell: '.prev',
        effect: 'left'
    });
    $('#top').click(function(){
        $('html, body').animate({scrollTop:0}, 'fast');
    });
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        height > 300 ? $('#top').fadeIn() : $('#top').fadeOut();
    });
})