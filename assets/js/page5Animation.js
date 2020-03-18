$(document).ready(function () {
    flagAnimationP5 = anime({
        targets: ["#page5 #aseanCountryFlagsP5"],
        rotate: { value: '99999turn', easing: 'linear', duration: 999990000 },
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, delay: 500, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
        loop: true,
        endDelay: 0,
    });

    asianFlagAppearP5 = anime({
        targets: ['#page5 #flagStaffP5'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, delay: 500, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
    });

    leftWrapperP5 = anime({
        targets: ['#page5 #left-wrapper'],
        opacity: [
            { value: 0, duration: 0 },
            { value: 1, duration: 500, delay: 2500, easing: 'easeInQuint'}
        ],
        translateX: [
            { value: -500, duration: 0, easing: 'easeInCubic' },
            { value: 0, duration: 1000, delay: 2000, easing: 'easeInCubic' },
        ],
        autoplay: false,
    });

    rightWrapperP5 = anime({
        targets: ['#page5 #right-wrapper'],
        opacity: [
            { value: 0, duration: 0 },
            { value: 1, duration: 500, delay: 3500, easing: 'easeInQuint'}
        ],
        translateX: [
            { value: 500, duration: 0, easing: 'easeInCubic' },
            { value: 0, duration: 1000, delay: 3000, easing: 'easeInCubic' },
        ],
        autoplay: false,
    });

    bottomWrapperP5 = anime({
        targets: ['#page5 #bottom-wrapper'],
        opacity: [
            { value: 0, duration: 0 },
            { value: 1, duration: 500, delay: 4500, easing: 'easeInQuint'}
        ],
        translateY: [
            { value: 500, duration: 0, easing: 'easeInCubic' },
            { value: 0, duration: 1000, delay: 4000, easing: 'easeInCubic' },
        ],
        autoplay: false,
    });

    $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 4) {
            flagAnimationP5.restart();
            asianFlagAppearP5.restart();
            leftWrapperP5.restart();
            rightWrapperP5.restart();
            bottomWrapperP5.restart();
        }
    });
})