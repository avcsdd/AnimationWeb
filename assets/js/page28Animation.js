var hand01Page28 = delayMove("#hand01Page28", 500, 40);
var hand02Page28 = delayMove("#hand02Page28", 1300, 40);
var hand03Page28 = delayMove("#hand03Page28", 2500, 40);
var hand04Page28 = delayMove("#hand04Page28", 2900, 40);
$('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('value');
    if (pageIndex == 27) {
        appear("#peopleGroupPage28", 1000);
        fadeup(".smallObjPage28", 2000, -30);
        fadeup(["#ipLessionPage28", "#lessionsTitlePage28"], 1000, -30)
            // scaleInOut(".smallObjPage28");

        hand01Page28.restart();
        appearDelay("#lession01ContentPage28", 1000, 800);

        hand02Page28.restart();
        appearDelay("#lession02ContentPage28", 1000, 1600);

        hand03Page28.restart();
        appearDelay("#lession03ContentPage28", 1000, 2700);

        hand04Page28.restart();
        appearDelay("#lession04ContentPage28", 1000, 3000);
    } else {
        hand01Page28.pause();
        hand02Page28.pause();
        hand03Page28.pause();
        hand04Page28.pause();
        off(["#peopleGroupPage28", "#lession01ContentPage28", "#lession02ContentPage28", "#lession03ContentPage28", "#lession04ContentPage28"])
        returnY(["#ipLessionPage28", "#lessionsTitlePage28", ".smallObjPage28"], 30)
        returnX(["#hand01Page28", "#hand02Page28", "#hand03Page28", "#hand04Page28"], -40)
    }
});

///////////////////////////////////////////toleft delay///////////////////////////////////////
function scaleInOut(obj) {
    objects = anime({
        targets: obj,
        scale: [
            { value: 1.1, duration: 1000, easing: 'easeOutCubic' },
            { value: 1, duration: 1000, easing: 'easeInCubic' }
        ],
        loop: true
    })
    objects.play();
}

function delayMove(obj, time, value) {
    return objects = anime({
        targets: obj,
        delay: time,
        opacity: [{ value: 1, duration: time }],
        translateX: value,
    })
}