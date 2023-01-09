$(function () {

    $('.mainFull').fullpage({
        anchors: ['intro', 'l02', 'l03', 'l04', 'footer'],
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            //만약에 두번째 섹션에 오면 nav li class on을 붙이고 나머지 a는 뗀다.
            // $('nav li a').removeClass('on');
            if (idx == 2 || idx == 4) {
                // $('nav li').eq(1).find('a').addClass('on');
                $('nav').addClass('on')
            } else {
                $('nav').removeClass('on')
            }

            if (idx == 1) {
                $('.totop').fadeOut();
            } else {
                $('.totop').fadeIn();
            }
            // if (idx == 4) {
            //     // $('nav li').eq(1).find('a').addClass('on');
            //     $('nav').addClass('on')
            // } else {
            //     $('nav').removeClass('on')
            // }
        },
        onLeave: function (idx, nIdex, dir) {
            console.log(idx, nIdex, dir);
            $('nav li').eq(nIdex - 1).addClass('on').siblings().removeClass('on');
        }
        // navigation: true,
        // navigationPosition: 'left',
        // navigationTooltips: ['첫페이지', '두페이지']
    });


    $('.main_slide').slick({
        arrows: false,
        dots: true,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });














})