$(document).ready(function() {
    class AnimationPage06 {
        hourglassP6 = anime({
            targets: ['#page6 #middle-wrapper img'],
            scale: [
                { value: 0, duration: 0, easing: 'easeInOutQuad' },
                { value: 1.1, duration: 500, delay: 500, easing: 'easeInOutQuad' },
                { value: 1, duration: 500, easing: 'easeInOutQuad' }
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
                { value: 1, duration: 500, delay: 1500, easing: 'easeInOutSine' }
            ],
            translateX: [
                { value: -500, duration: 0, easing: 'easeInOutSine' },
                { value: 0, duration: 500, delay: 1500, easing: 'easeInOutSine' },
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
                { value: 1, duration: 500, delay: 2000, easing: 'easeInOutSine' }
            ],
            translateX: [
                { value: 500, duration: 0, easing: 'easeInOutSine' },
                { value: 0, duration: 500, delay: 2000, easing: 'easeInOutSine' },
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
                { value: 1, duration: 500, delay: 2500, easing: 'easeInOutSine' }
            ],
            translateY: [
                { value: 500, duration: 0, easing: 'easeInOutSine' },
                { value: 0, duration: 500, delay: 2500, easing: 'easeInOutSine' },
            ],
            autoplay: false,
        });

        bottomWrapperP6_Reverse = anime({
            targets: ['#page6 #bottom-wrapper'],
            opacity: 0,
            autoplay: false,
        });

    }
    var animationP6 = new AnimationPage06();
    $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 5) {
            animationP6.hourglassP6.restart();
            animationP6.leftWrapperP6.restart();
            animationP6.rightWrapperP6.restart();
            animationP6.bottomWrapperP6.restart();
        } else if (pageIndex == 4 || pageIndex == 6) {
            animationP6.hourglassP6.pause();
            animationP6.leftWrapperP6.pause();
            animationP6.rightWrapperP6.pause();
            animationP6.bottomWrapperP6.pause();
            animationP6.hourglassP6_Reverse.play();
            animationP6.leftWrapperP6_Reverse.play();
            animationP6.rightWrapperP6_Reverse.play();
            animationP6.bottomWrapperP6_Reverse.play();
        }
    });
})