$(document).ready(function () {
    var flagAnimationP5 = anime({
        targets: ["#page5 #aseanCountryFlagsP5"],
        rotate: { value: '99999turn', easing: 'linear', duration: 999990000 },
        opacity: 1,
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, delay: 500, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
        loop: true,
        endDelay: 0,
    });

    var flagAnimationP5_Reverse = anime({
        targets: ["#page5 #aseanCountryFlagsP5"],
        opacity: 0,
        autoplay: false,
    });

    var asianFlagAppearP5 = anime({
        targets: ['#page5 #flagStaffP5'],
        opacity: 1,
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, delay: 500, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
    });

    var asianFlagAppearP5_Reverse = anime({
        targets: ['#page5 #flagStaffP5'],
        opacity: 0,
        autoplay: false,
    });

    var leftWrapperP5 = anime({
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

    var leftWrapperP5_Reverse = anime({
        targets: ['#page5 #left-wrapper'],
        opacity: 0,
        autoplay: false,
    });

    var rightWrapperP5 = anime({
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

    var rightWrapperP5_Reverse = anime({
        targets: ['#page5 #right-wrapper'],
        opacity: 0,
        autoplay: false,
    });

    var bottomWrapperP5 = anime({
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

    var bottomWrapperP5_Reverse = anime({
        targets: ['#page5 #bottom-wrapper'],
        opacity: 0,
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
        } else if (pageIndex == 3 || pageIndex == 5) {
            flagAnimationP5.pause();
            asianFlagAppearP5.pause();
            leftWrapperP5.pause();
            rightWrapperP5.pause();
            bottomWrapperP5.pause();
            flagAnimationP5_Reverse.play();
            asianFlagAppearP5_Reverse.play();
            leftWrapperP5_Reverse.play();
            rightWrapperP5_Reverse.play();
            bottomWrapperP5_Reverse.play();
        }
    });
})