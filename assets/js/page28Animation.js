$('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('value');
    if (pageIndex == 27) {
        appear("#peopleGroupPage28", 1000);
        fadeup(".smallObjPage28", 2000, -30);
        fadeup(["#ipLessionPage28", "#lessionsTitlePage28"], 1000, -30)
            // scaleInOut(".smallObjPage28");
        toXDelay("#hand01Page28", 500, 40);
        appearDelay("#lession01ContentPage28", 1000, 1000);
        toXDelay("#hand02Page28", 1600, 40);
        appearDelay("#lession02ContentPage28", 1000, 2100);
        toXDelay("#hand03Page28", 2700, 40);
        appearDelay("#lession03ContentPage28", 1000, 3200);
        toXDelay("#hand04Page28", 3800, 40);
        appearDelay("#lession04ContentPage28", 1000, 4300);
    } else {
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