$(document).ready(function() {

    class AnimationPage02 {
        leftRedBall = anime({
            targets: ['#leftBalance #redBall'],
            scale: [
                { value: 0, duration: 0, easing: 'easeInCubic' },
                { value: 1.1, duration: 1000, easing: 'easeOutCubic' },
                { value: 1, duration: 1000, easing: 'easeInCubic' }
            ],
            translateY: [
                { value: 65, duration: 1000, delay: 7000, easing: 'easeOutSine' },
            ],
            autoplay: false,
        });

        leftRedBall_Reverse = anime({
            targets: ['#leftBalance #redBall'],
            scale: 0,
            autoplay: false,
        });

        leftBlueBall = anime({
            targets: ['#leftBalance #blueBall'],
            scale: [
                { value: 0, duration: 0, easing: 'easeInCubic' },
                { value: 1.1, duration: 1000, easing: 'easeOutCubic' },
                { value: 1, duration: 1000, easing: 'easeInCubic' }
            ],
            translateY: [
                { value: 35, duration: 1000, delay: 7000, easing: 'easeOutSine' },
            ],
            autoplay: false,
        });

        leftBlueBall_Reverse = anime({
            targets: ['#leftBalance #blueBall'],
            scale: 0,
            autoplay: false,
        });

        leftYellowBall = anime({
            targets: ['#leftBalance #yellowBall'],
            scale: [
                { value: 0, duration: 0, easing: 'easeInCubic' },
                { value: 1.1, duration: 1000, easing: 'easeOutCubic' },
                { value: 1, duration: 1000, easing: 'easeInCubic' }
            ],
            translateY: [
                { value: 55, duration: 1000, delay: 7000, easing: 'easeOutSine' },
            ],
            translateX: [
                { value: -27, duration: 1000, delay: 7000, easing: 'easeOutSine' },
            ],
            rotate: [
                { value: -5, duration: 1000, delay: 7000, easing: 'easeOutSine' },
            ],
            autoplay: false,
        });

        leftYellowBall_Reverse = anime({
            targets: ['#leftBalance #yellowBall'],
            scale: 0,
            autoplay: false,
        });

        rightRedBall = anime({
            targets: ['#rightBalance #redBall'],
            scale: [
                { value: 0, duration: 0, easing: 'easeInCubic' },
                { value: 1.1, duration: 1000, delay: 2000, easing: 'easeOutCubic' },
                { value: 1, duration: 1000, easing: 'easeInCubic' }
            ],
            translateY: [
                { value: -35, duration: 1000, delay: 7000, easing: 'easeOutSine' },
            ],
            autoplay: false,
        });

        rightRedBall_Reverse = anime({
            targets: ['#rightBalance #redBall'],
            scale: 0,
            autoplay: false,
        });

        rightBlueBall = anime({
            targets: ['#rightBalance #blueBall'],
            scale: [
                { value: 0, duration: 0, easing: 'easeInCubic' },
                { value: 1.1, duration: 1000, delay: 2000, easing: 'easeOutCubic' },
                { value: 1, duration: 1000, easing: 'easeInCubic' }
            ],
            translateY: [
                { value: -65, duration: 1000, delay: 7000, easing: 'easeOutSine' },
            ],
            autoplay: false,
        });

        rightBlueBall_Reverse = anime({
            targets: ['#rightBalance #blueBall'],
            scale: 0,
            autoplay: false,
        });

        rightYellowBall = anime({
            targets: ['#rightBalance #yellowBall'],
            scale: [
                { value: 0, duration: 0, easing: 'easeInCubic' },
                { value: 1.1, duration: 1000, delay: 2000, easing: 'easeOutCubic' },
                { value: 1, duration: 1000, easing: 'easeInCubic' },
                { value: 1.1, duration: 500, delay: 1000, easing: 'easeOutCubic' },
                { value: 0, duration: 1000, easing: 'easeInCubic' }
            ],
            autoplay: false,
        });

        rightYellowBall_Reverse = anime({
            targets: ['#rightBalance #yellowBall'],
            scale: 0,
            autoplay: false,
        });

        balance = anime({
            targets: ['#topBalance', '#bottomBalance'],
            translateY: [
                { value: 500, duration: 0, easing: 'easeOutQuint' },
                { value: 0, duration: 1000, delay: 4000, easing: 'easeOutSine' },
            ],
            rotate: [
                { value: -9, duration: 1000, delay: 7000, easing: 'easeOutSine' }
            ],
            autoplay: false,
        });

        balance_Reverse = anime({
            targets: ['#topBalance', '#bottomBalance'],
            translateY: 500,
            autoplay: false,
        });

        upperTextWrapper = anime({
            targets: '#upperTextWrapperP3',
            translateY: [
                { value: -500, duration: 0, easing: 'easeOutQuint' },
                { value: 0, duration: 1000, delay: 4000, easing: 'easeOutSine' },
            ],
            autoplay: false,
        });

        upperTextWrapper_Reverse = anime({
            targets: '#upperTextWrapperP3',
            translateY: -500,
            autoplay: false,
        });

    }
    var animationP3 = new AnimationPage02();
    $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 2) {
            animationP3.leftRedBall.restart()
            animationP3.leftBlueBall.restart()
            animationP3.leftYellowBall.restart()
            animationP3.rightRedBall.restart()
            animationP3.rightBlueBall.restart()
            animationP3.rightYellowBall.restart()
            animationP3.balance.restart()
            animationP3.upperTextWrapper.restart()
        } else if (pageIndex == 1 || pageIndex == 3) {
            animationP3.leftRedBall.pause()
            animationP3.leftBlueBall.pause()
            animationP3.leftYellowBall.pause()
            animationP3.rightRedBall.pause()
            animationP3.rightBlueBall.pause()
            animationP3.rightYellowBall.pause()
            animationP3.balance.pause()
            animationP3.upperTextWrapper.pause()
            animationP3.leftRedBall_Reverse.play()
            animationP3.leftBlueBall_Reverse.play()
            animationP3.leftYellowBall_Reverse.play()
            animationP3.rightRedBall_Reverse.play()
            animationP3.rightBlueBall_Reverse.play()
            animationP3.rightYellowBall_Reverse.play()
            animationP3.balance_Reverse.play()
            animationP3.upperTextWrapper_Reverse.play()
        }
    });
})