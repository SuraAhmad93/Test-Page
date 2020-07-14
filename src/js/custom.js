jQuery(function ($) {
    
    $('footer .has-sub-menu').on('click', function (e) {
        e.preventDefault();
        $(this).parent().siblings().slideToggle();
        $(this).siblings('.sub-menu').slideToggle()
    });

    AOS.init();

    $('.numbers').countUp({
        'time': 800,
        'delay': 10
    });

    $( '#dl-menu' ).dlmenu({
        animationClasses : { classin : 'dl-animate-in-5', classout : 'dl-animate-out-5' }
    });
    
    // function speakerBG() {
    //     var winWidth = screen.width;
    //     if (winWidth > 1024) {
    //         var contWidth = $('.speakers .container').width();
    //         var leftSpace = (winWidth - contWidth) / 2;
    //         var columnWidth = contWidth / 12;
    //         var bgWidth = leftSpace + (columnWidth * 3.5);
    //         bgWidth = bgWidth.toString() + 'px' + ' 100%';
    //         console.log('window width = ' + winWidth);
    //         console.log('container width = ' + contWidth);
    //         console.log('left space width = ' + leftSpace);
    //         console.log('one column width = ' + columnWidth);
    //         console.log('bg width = ' + bgWidth);
    //         $('.speakers').css('background-size', bgWidth);
    //     }
        
    // }
    // speakerBG()
})
