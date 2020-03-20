var hand01Page28 = delayMove("#hand01Page28", 500, 40);
var hand02Page28 = delayMove("#hand02Page28", 1300, 40);
var hand03Page28 = delayMove("#hand03Page28", 2500, 40);
var hand04Page28 = delayMove("#hand04Page28", 2900, 40);
var peopleGroupPage28 = fadeAppear("#peopleGroupPage28", 1000);
var smallObjPage28 = fadeUpAppear(".smallObjPage28", 2000, -30);
var ipLessionPage28 = fadeUpAppear(["#ipLessionPage28", "#lessionsTitlePage28"], 1000, -30)
var lession01ContentPage28 = appearWithDelay("#lession01ContentPage28", 1000, 800);
var lession02ContentPage28 = appearWithDelay("#lession02ContentPage28", 1000, 1600);
var lession03ContentPage28 = appearWithDelay("#lession03ContentPage28", 1000, 2700);
var lession04ContentPage28 = appearWithDelay("#lession04ContentPage28", 1000, 3000);
$('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('value');
    if (pageIndex == 27) {
        peopleGroupPage28.restart();
        smallObjPage28.restart();
        ipLessionPage28.restart();
        // scaleInOut(".smallObjPage28");
        hand01Page28.restart();
        lession01ContentPage28.restart()
        hand02Page28.restart();
        lession02ContentPage28.restart()
        hand03Page28.restart();
        lession03ContentPage28.restart()
        hand04Page28.restart();
        lession04ContentPage28.restart()
    } else {
        hand01Page28.pause();
        hand02Page28.pause();
        hand03Page28.pause();
        hand04Page28.pause();
        peopleGroupPage28.pause();
        smallObjPage28.pause();
        ipLessionPage28.pause();
        lession01ContentPage28.pause();
        lession02ContentPage28.pause();
        lession03ContentPage28.pause();
        lession04ContentPage28.pause();
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

function fadeAppear(obj, time) {
    return objects = anime({
        targets: obj,
        opacity: [{ value: 1, duration: time }],
        easing: 'easeInOutQuad',
    });
}

function fadeUpAppear(obj, time, value) {
    return objects = anime({
        targets: obj,
        translateY: [{ value: value, duration: time }],
        opacity: [{ value: 1, duration: time }],
        easing: 'easeInOutQuad',
    });

}

function appearWithDelay(obj, duration, delay) {
    return objects = anime({
        targets: obj,
        opacity: [{ value: 1, duration: duration }],
        easing: 'easeInOutQuad',
        delay: delay
    });
}