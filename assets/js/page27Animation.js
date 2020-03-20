$('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('value');
    if (pageIndex == 26) {
        diagonalMove("#speakerPage27", 100, 200, 200)
        toXDelay("#cardPage27", 200, -600, -600)
        appear("#cardTitlePage27", 2000)
        appearDelay("#cardContentPage27", 1000, 1500)
    } else {
        diagonalMove("#speakerPage27", 0, -200, -200)
        returnX("#cardPage27", 200, 600, 600)
        off(["#speakerPage27", "#cardTitlePage27", "#cardContentPage27"]);
    }
});

///////////////////////////////////////////toleft delay///////////////////////////////////////
function diagonalMove(obj, time, x, y) {
    objects = anime({
        targets: obj,
        delay: time,
        opacity: [{ value: 1, duration: time }],
        translateX: x,
        translateY: y,
    })
    objects.play();
}