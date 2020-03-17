$(document).ready(function () {

    leftBalls = anime({
        targets: ['#leftBalance #yellowBall', '#leftBalance #redBall', '#leftBalance #blueBall'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
    });

    rightBalls = anime({
        targets: ['#rightBalance #redBall', '#rightBalance #blueBall'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, delay: 2000, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
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

    balance = anime({
        targets: ['#topBalance', '#bottomBalance'],
        translateY: [
            { value: 500, duration: 0, easing: 'easeOutQuint' },
            { value: 0, duration: 1000, delay: 4000, easing: 'easeOutSine' },
        ],
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
})