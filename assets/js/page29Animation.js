var centerArrow = anime({
    targets: ['#page29 #arrows'],
    translateX: [
        { value: -525, duration: 0 },
        { value: 0, duration: 1000, easing: 'easeInCubic' }
    ],
    scaleX: [
        { value: 0, duration: 0 },
        { value: 1, duration: 1000, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var centerArrow_Reverse = anime({
    targets: ['#page29 #arrows'],
    scaleX: [
        { value: 0, duration: 0 }
    ],
    autoplay: false,
});

var yellowWrapper = anime({
    targets: ['#page29 #yellow-wrapper'],
    scaleX: [
        { value: 0, duration: 0 },
        { value: 1, duration: 500, delay: 1000, easing: 'easeInCubic' }
    ],
    autoplay: false,
})

var yellowWrapper_Reverse = anime({
    targets: ['#page29 #yellow-wrapper'],
    scaleX: [
        { value: 0, duration: 0 },
    ],
    autoplay: false,
})

var greenWrapper = anime({
    targets: ['#page29 #green-wrapper'],
    scaleX: [
        { value: 0, duration: 0 },
        { value: 1, duration: 500, delay: 1500, easing: 'easeInCubic' }
    ],
    autoplay: false,
})

var greenWrapper_Reverse = anime({
    targets: ['#page29 #green-wrapper'],
    scaleX: [
        { value: 0, duration: 0 },
    ],
    autoplay: false,
})

var blueWrapper = anime({
    targets: ['#page29 #blue-wrapper'],
    scaleX: [
        { value: 0, duration: 0 },
        { value: 1, duration: 500, delay: 2000, easing: 'easeInCubic' }
    ],
    autoplay: false,
})

var blueWrapper_Reverse = anime({
    targets: ['#page29 #blue-wrapper'],
    scaleX: [
        { value: 0, duration: 0 },
    ],
    autoplay: false,
})

var purpleWrapper = anime({
    targets: ['#page29 #purple-wrapper'],
    scaleX: [
        { value: 0, duration: 0 },
        { value: 1, duration: 500, delay: 2500, easing: 'easeInCubic' }
    ],
    autoplay: false,
})

var purpleWrapper_Reverse = anime({
    targets: ['#page29 #purple-wrapper'],
    scaleX: [
        { value: 0, duration: 0 },
    ],
    autoplay: false,
})

var redWrapper = anime({
    targets: ['#page29 #red-wrapper'],
    scaleX: [
        { value: 0, duration: 0 },
        { value: 1, duration: 500, delay: 3000, easing: 'easeInCubic' }
    ],
    autoplay: false,
})

var redWrapper_Reverse = anime({
    targets: ['#page29 #red-wrapper'],
    scaleX: [
        { value: 0, duration: 0 },
    ],
    autoplay: false,
})

$('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('value');
    if (pageIndex == 28) {
        centerArrow.restart();
        yellowWrapper.restart();
        greenWrapper.restart();
        blueWrapper.restart();
        purpleWrapper.restart();
        redWrapper.restart();
    } else if (pageIndex == 27 || pageIndex == 29) {
        centerArrow.pause();
        yellowWrapper.pause();
        greenWrapper.pause();
        blueWrapper.pause();
        purpleWrapper.pause();
        redWrapper.pause();
        centerArrow_Reverse.play();
        yellowWrapper_Reverse.play();
        greenWrapper_Reverse.play();
        blueWrapper_Reverse.play();
        purpleWrapper_Reverse.play();
        redWrapper_Reverse.play();
    }
});