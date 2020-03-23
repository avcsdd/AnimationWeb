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
    asianFlagAppear = anime({
        targets: ['#flagStaffP4'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, delay: 500, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
    });

    //////////////////////////////////////////////////
    x = 160 // x of asean flag
    y = 200 // y of asean flag
    r = 120 // radius
    m = [0]
    arrAnime = [];
    for (let i = 0; i < 9; i++) {
        m[i + 1] = m[i] + 0.628;
    }

    function rotate(a, ele) {
        var px = x + r * Math.cos(a);
        var py = y + r * Math.sin(a);
        document.querySelector(ele).style.left = px + "px";
        document.querySelector(ele).style.top = py + "px";
    }

    function startFlags() {
        for (let i = 0; i < m.length; i++) {
            var intervalID = null;
            myvar = setInterval(function() {
                m[i] = (m[i] + Math.PI / 360) % (Math.PI * 2);
                rotate(m[i], "#flag" + i);
            }, 10);
            arrAnime.push(myvar)
        }
    }

    function stopFlags() {
        for (var i = 0; i < arrAnime.length; i++) { clearInterval(arrAnime[i]) }
        arrAnime = []
    }

    function scaleTo0(def) {
        return anime({
            targets: [def],
            scale: [
                { value: 0, duration: 0, easing: 'easeInCubic' },
            ],
            autoplay: false,
        });
    }
    var scaleFlagsTo0 = scaleTo0('#flags *');
    var scaleAseanFlagTo0 = scaleTo0('#flagStaffP4');
    var scaleHourGlassTo0 = scaleTo0('#section3P4 #sandClockP4');

    var zoomOutFlags = anime({
        targets: ['#flags *'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
    });

    /////////////////////////////////////////////////////
    var girlP4 = fadeShowUp("#girlP4");
    var laptopP4 = fadeShowUp("#laptopP4");
    var tableP4 = fadeShowUp("#tableP4");
    var textBubbleP4 = fadeShowUp("#textBubbleP4");


    $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 3) {
            // first = true;
            // flagAnimation.play();
            hourglass.restart();
            asianFlagAppear.restart();
            girlP4.restart();
            laptopP4.restart();
            tableP4.restart();
            textBubbleP4.restart();
            zoomOutFlags.restart();
            startFlags();
        } else {
            girlP4.pause();
            laptopP4.pause();
            tableP4.pause();
            textBubbleP4.pause();
            asianFlagAppear.pause();
            hourglass.pause();
            scaleAseanFlagTo0.restart();
            scaleFlagsTo0.restart();
            scaleHourGlassTo0.restart();
            zoomOutFlags.pause();
            stopFlags();
            off(["#girlP4", "#laptopP4", "#tableP4", "#textBubbleP4"]);
        }
    });
})