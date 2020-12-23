$(function() {
    $('.section-2').find('.btn').hover(function(){
        $(this).parent('li').toggleClass('hover');
    });
    jQuery(".slideBox").slide({
        mainCell:".bd ul",
        autoPlay: true,
        trigger: 'click',
        prevCell: '.prev',
        effect: 'left'
    });
    jQuery(".slideMsg").slide({
        mainCell:".bd ul",
        autoPlay: false
    });
    $('#top').click(function(){
        $('html, body').animate({scrollTop:0}, 'fast');
    });
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if ( height > 300 ) {
            $('#top').css({
                visibility: 'visible'
            })
        } else {
             $('#top').css({
                visibility: 'hidden'
            })
        }
    });
})