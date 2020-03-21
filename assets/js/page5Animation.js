$(document).ready(function() {
    class AnimationPage05 {
        flagAnimationP5 = anime({
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

        flagAnimationP5_Reverse = anime({
            targets: ["#page5 #aseanCountryFlagsP5"],
            opacity: 0,
            autoplay: false,
        });

        asianFlagAppearP5 = anime({
            targets: ['#page5 #flagStaffP5'],
            opacity: 1,
            scale: [
                { value: 0, duration: 0, easing: 'easeInCubic' },
                { value: 1.1, duration: 1000, delay: 500, easing: 'easeOutCubic' },
                { value: 1, duration: 1000, easing: 'easeInCubic' }
            ],
            autoplay: false,
        });

        asianFlagAppearP5_Reverse = anime({
            targets: ['#page5 #flagStaffP5'],
            opacity: 0,
            autoplay: false,
        });

        leftWrapperP5 = anime({
            targets: ['#page5 #left-wrapper'],
            opacity: [
                { value: 0, duration: 0 },
                { value: 1, duration: 500, delay: 2500, easing: 'easeInQuint' }
            ],
            translateX: [
                { value: -500, duration: 0, easing: 'easeInCubic' },
                { value: 0, duration: 1000, delay: 2000, easing: 'easeInCubic' },
            ],
            autoplay: false,
        });

        leftWrapperP5_Reverse = anime({
            targets: ['#page5 #left-wrapper'],
            opacity: 0,
            autoplay: false,
        });

        rightWrapperP5 = anime({
            targets: ['#page5 #right-wrapper'],
            opacity: [
                { value: 0, duration: 0 },
                { value: 1, duration: 500, delay: 3500, easing: 'easeInQuint' }
            ],
            translateX: [
                { value: 500, duration: 0, easing: 'easeInCubic' },
                { value: 0, duration: 1000, delay: 3000, easing: 'easeInCubic' },
            ],
            autoplay: false,
        });

        rightWrapperP5_Reverse = anime({
            targets: ['#page5 #right-wrapper'],
            opacity: 0,
            autoplay: false,
        });

        bottomWrapperP5 = anime({
            targets: ['#page5 #bottom-wrapper'],
            opacity: [
                { value: 0, duration: 0 },
                { value: 1, duration: 500, delay: 4500, easing: 'easeInQuint' }
            ],
            translateY: [
                { value: 500, duration: 0, easing: 'easeInCubic' },
                { value: 0, duration: 1000, delay: 4000, easing: 'easeInCubic' },
            ],
            autoplay: false,
        });

        bottomWrapperP5_Reverse = anime({
            targets: ['#page5 #bottom-wrapper'],
            opacity: 0,
            autoplay: false,
        });
    }
    var animationP5 = new AnimationPage05();
    $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 4) {
            animationP5.flagAnimationP5.restart();
            animationP5.asianFlagAppearP5.restart();
            animationP5.leftWrapperP5.restart();
            animationP5.rightWrapperP5.restart();
            animationP5.bottomWrapperP5.restart();
        } else if (pageIndex == 3 || pageIndex == 5) {
            animationP5.flagAnimationP5.pause();
            animationP5.asianFlagAppearP5.pause();
            animationP5.leftWrapperP5.pause();
            animationP5.rightWrapperP5.pause();
            animationP5.bottomWrapperP5.pause();
            animationP5.flagAnimationP5_Reverse.play();
            animationP5.asianFlagAppearP5_Reverse.play();
            animationP5.leftWrapperP5_Reverse.play();
            animationP5.rightWrapperP5_Reverse.play();
            animationP5.bottomWrapperP5_Reverse.play();
        }
    });
})