$('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('value');
    if (pageIndex == 26) {
        speakerMove = diagonalMove("#speakerPage27", 200, 1000, 200, 200)
        speakerMove.play();
        toXDelay("#cardPage27", 200, -600, -600)
        appear("#cardTitlePage27", 2000)
        appearDelay("#cardContentPage27", 1000, 1000)
    } else {
        diagonalMove("#speakerPage27", 0, -200, -200)
        returnX("#cardPage27", 200, 600, 600)
        off(["#speakerPage27", "#cardTitlePage27", "#cardContentPage27"]);
    }
});

///////////////////////////////////////////toleft delay///////////////////////////////////////
function diagonalMove(obj, delay, duration, x, y) {
    return objects = anime({
        targets: obj,
        delay: delay,
        opacity: [{ value: 1, duration: duration }],
        translateX: x,
        translateY: y,
        duration: duration
    })
}