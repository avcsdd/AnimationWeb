class AnimationPage04 {
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
        // m = [0]
    arrAnime = [];
    // for (let i = 0; i < 9; i++) {
    //     m[i + 1] = m[i] + 0.628;
    // }

    rotate(a, ele) {
        var px = this.x + this.r * Math.cos(a);
        var py = this.y + this.r * Math.sin(a);
        document.querySelector(ele).style.left = px + "px";
        document.querySelector(ele).style.top = py + "px";
    }

    startFlags() {
        let m = [0, 0.628, 1.256, 1.884, 2.512, 3.14, 3.7680000000000002, 4.396, 5.024, 5.652];
        let ins = new AnimationPage04();
        for (let i = 0; i < m.length; i++) {
            var intervalID = null;
            let myvar = setInterval(function() {
                m[i] = (m[i] + Math.PI / 360) % (Math.PI * 2);
                ins.rotate(m[i], "#flag" + i);
            }, 10);
            this.arrAnime.push(myvar)
        }
    }

    stopFlags() {
        for (var i = 0; i < this.arrAnime.length; i++) { clearInterval(this.arrAnime[i]) }
        this.arrAnime.length = 0
    }

    scaleTo0(def) {
        return anime({
            targets: [def],
            scale: [
                { value: 0, duration: 0, easing: 'easeInCubic' },
            ],
            autoplay: false,
        });
    }
    scaleFlagsTo0 = this.scaleTo0('#flags *');
    scaleAseanFlagTo0 = this.scaleTo0('#flagStaffP4');
    scaleHourGlassTo0 = this.scaleTo0('#section3P4 #sandClockP4');

    zoomOutFlags = anime({
        targets: ['#flags *'],
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 1000, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        autoplay: false,
    });
    ani = new MyAnimation();
    /////////////////////////////////////////////////////
    girlP4 = this.ani.fadeShowUp("#girlP4");
    laptopP4 = this.ani.fadeShowUp("#laptopP4");
    tableP4 = this.ani.fadeShowUp("#tableP4");
    textBubbleP4 = this.ani.fadeShowUp("#textBubbleP4");
    ////////////////////////////////////////////////////////
    off(def) {
        return anime({
            targets: def,
            opacity: 0,
        });
    }
}
var p04Animation = new AnimationPage04()

export default p04Animation

// $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
//     var ele = $('#carouselExampleControls .carousel-indicators li.active');
//     var pageIndex = ele.data('value');
//     if (pageIndex == 3) {
//         // first = true;
//         // flagAnimation.play();
//         hourglass.restart();
//         asianFlagAppear.restart();
//         girlP4.restart();
//         laptopP4.restart();
//         tableP4.restart();
//         textBubbleP4.restart();
//         zoomOutFlags.restart();
//         startFlags();
//     } else {
//         girlP4.pause();
//         laptopP4.pause();
//         tableP4.pause();
//         textBubbleP4.pause();
//         asianFlagAppear.pause();
//         hourglass.pause();
//         scaleAseanFlagTo0.restart();
//         scaleFlagsTo0.restart();
//         scaleHourGlassTo0.restart();
//         zoomOutFlags.pause();
//         stopFlags();
//         off(["#girlP4", "#laptopP4", "#tableP4", "#textBubbleP4"]);
//     }
// });