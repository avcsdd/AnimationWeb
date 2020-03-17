$(document).ready(function() {
    hourglass = anime({
        targets: ['#section3P4 #sandClockP4'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, delay: 500, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
    });
    flagAnimation = anime({
        targets: [document.querySelectorAll("#aseanCountryFlagsP4")],
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
        targets: ['#flagStaffP4'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, delay: 500, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
    });

    // animation showup of desk 2
    // flagAnimationBack = anime({
    //     targets: document.querySelectorAll("#desk-2"),
    //     translateY: [{value:-280,duration:1500}],
    //     opacity: [{value: 1,duration: 1500}],
    //     easing: 'easeInOutQuad',
    // });
    var first = false;
    $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 3 && first != true) {
            first = true;
            flagAnimation.play();
            hourglass.play();
            asianFlagAppear.play();
            fadeShowUp("#girlP4").play()
            fadeShowUp("#laptopP4").play()
            fadeShowUp("#tableP4").play()
            fadeShowUp("#textBubbleP4").play()
        } else {

        }
    });


})