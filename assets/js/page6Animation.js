$(document).ready(function () {
    hourglassP6 = anime({
        targets: ['#page6 #middle-wrapper img'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, delay: 500, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
    });

    hourglassP6_Reverse = anime({
        targets: ['#page6 #middle-wrapper img'],
        scale: 0,
        autoplay: false,
    });

    leftWrapperP6 = anime({
        targets: ['#page6 #left-wrapper'],
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

    leftWrapperP6_Reverse = anime({
        targets: ['#page6 #left-wrapper'],
        opacity: 0,
        autoplay: false,
    });

    rightWrapperP6 = anime({
        targets: ['#page6 #right-wrapper'],
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

    rightWrapperP6_Reverse = anime({
        targets: ['#page6 #right-wrapper'],
        opacity: 0,
        autoplay: false,
    });

    bottomWrapperP6 = anime({
        targets: ['#page6 #bottom-wrapper'],
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

    bottomWrapperP6_Reverse = anime({
        targets: ['#page6 #bottom-wrapper'],
        opacity: 0,
        autoplay: false,
    });

    $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 5) {
            hourglassP6.restart();
            leftWrapperP6.restart();
            rightWrapperP6.restart();
            bottomWrapperP6.restart();
        } else if (pageIndex == 4 || pageIndex == 6) {
            hourglassP6.pause();
            leftWrapperP6.pause();
            rightWrapperP6.pause();
            bottomWrapperP6.pause();
            hourglassP6_Reverse.play();
            leftWrapperP6_Reverse.play();
            rightWrapperP6_Reverse.play();
            bottomWrapperP6_Reverse.play();
        }
    });
})