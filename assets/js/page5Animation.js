$(document).ready(function () {
    flagAnimation = anime({
        targets: ["#aseanCountryFlagsP5"],
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

    asianFlagAppear = anime({
        targets: ['#flagStaffP5'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, delay: 500, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
    });

    leftWrapper = anime({
        targets: ['#left-wrapper'],
        // rotate: { value: '1turn', easing: 'linear', duration: 2000 },
        translateX: [
            { value: -500, duration: 0, easing: 'easeInCubic' },
            { value: 0, duration: 1000, delay: 2000, easing: 'easeInCubic' },
        ],
        autoplay: false,
    });

    rightWrapper = anime({
        targets: ['#right-wrapper'],
        // rotate: { value: '1turn', easing: 'linear', duration: 1000, delay: 3000 },
        translateX: [
            { value: 500, duration: 0, easing: 'easeInCubic' },
            { value: 0, duration: 1000, delay: 3000, easing: 'easeInCubic' },
        ],
        autoplay: false,
    });

    bottomWrapper = anime({
        targets: ['#bottom-wrapper'],
        // rotate: { value: '1turn', easing: 'linear', duration: 1000, delay: 4000 },
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
            flagAnimation.restart();
            asianFlagAppear.restart();
            leftWrapper.restart();
            rightWrapper.restart();
            bottomWrapper.restart();
        }
    });
})