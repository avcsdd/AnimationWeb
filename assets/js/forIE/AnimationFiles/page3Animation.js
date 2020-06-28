class AnimationPage03 {
    leftRedBall = anime({
        targets: ['#leftBalance #redBall'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 500, delay: 500, easing: 'easeOutCubic' },
            { value: 1, duration: 500, easing: 'easeInCubic' }
        ],
        translateY: [
            { value: 65, duration: 500, delay: 1500, easing: 'easeOutSine' },
            { value: -30, duration: 500, delay: 500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
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
            { value: 1.1, duration: 500, delay: 1000, easing: 'easeOutCubic' },
            { value: 1, duration: 500, easing: 'easeInCubic' }
        ],
        translateY: [
            { value: 35, duration: 500, delay: 1500, easing: 'easeOutSine' },
            { value: -18, duration: 500, delay: 500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
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
            { value: 1.1, duration: 500, delay: 1500, easing: 'easeOutCubic' },
            { value: 1, duration: 500, easing: 'easeInCubic' }
        ],
        translateY: [
            { value: 55, duration: 500, delay: 1500, easing: 'easeOutSine' },
            { value: -19, duration: 500, delay: 500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
        ],
        translateX: [
            { value: -27, duration: 500, delay: 1500, easing: 'easeOutSine' },
            { value: 9, duration: 500, delay: 500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
        ],
        rotate: [
            { value: -5, duration: 500, delay: 1500, easing: 'easeOutSine' },
            { value: 2, duration: 500, delay: 500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
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
        translateY: [
            { value: -35, duration: 0, delay: 0, easing: 'easeOutSine' },
            { value: 15, duration: 500, delay: 2500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
        ],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 500, delay: 1500, easing: 'easeOutCubic' },
            { value: 1, duration: 500, easing: 'easeInCubic' }
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
        translateY: [
            { value: -65, duration: 0, delay: 0, easing: 'easeOutSine' },
            { value: 28, duration: 500, delay: 2500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
        ],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 500, delay: 2000, easing: 'easeOutCubic' },
            { value: 1, duration: 500, easing: 'easeInCubic' }
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
            { value: 1.1, duration: 500, delay: 2500, easing: 'easeOutCubic' },
            { value: 1, duration: 500, easing: 'easeInCubic' },
        ],
        translateY: [
            { value: -45, duration: 0, delay: 0, easing: 'easeOutSine' },
            { value: 25, duration: 500, delay: 2500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
        ],
        translateX: [
            { value: -27, duration: 0, delay: 0, easing: 'easeOutSine' },
            { value: 10, duration: 500, delay: 2500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
        ],
        rotate: [
            { value: -5, duration: 0, delay: 0, easing: 'easeOutSine' },
            { value: 2, duration: 500, delay: 2500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
        ],
        autoplay: false,
    });

    rightYellowBall_Reverse = anime({
        targets: ['#rightBalance #yellowBall'],
        scale: 0,
        autoplay: false,
    });

    topBalance = anime({
        targets: ['#topBalance'],
        translateY: [
            { value: 500, duration: 0, easing: 'easeOutQuint' },
            { value: 0, duration: 500, easing: 'easeOutSine' },
        ],
        rotate: [
            { value: -9, duration: 500, delay: 1500, easing: 'easeOutSine' },
            { value: 4.5, duration: 500, delay: 500, easing: 'easeOutSine' },
            { value: 0, duration: 1000, easing: 'easeOutSine' },
        ],
        autoplay: false,
    });

    bottomBalance = anime({
        targets: ['#bottomBalance'],
        translateY: [
            { value: 500, duration: 0, easing: 'easeOutQuint' },
            { value: 0, duration: 500, easing: 'easeOutSine' },
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
            { value: 0, duration: 500, easing: 'easeOutSine' },
        ],
        autoplay: false,
    });

    upperTextWrapper_Reverse = anime({
        targets: '#upperTextWrapperP3',
        translateY: -500,
        autoplay: false,
    });

    run() {
        this.leftRedBall.restart()
        this.leftBlueBall.restart()
        this.leftYellowBall.restart()
        this.rightRedBall.restart()
        this.rightBlueBall.restart()
        this.rightYellowBall.restart()
        this.topBalance.restart()
        this.bottomBalance.restart()
        this.upperTextWrapper.restart()
    }
    reverse() {
    }
}

var page03Animation = new AnimationPage03();

export default page03Animation