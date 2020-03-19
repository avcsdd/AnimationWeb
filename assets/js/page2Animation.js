$(document).ready(function() {
    $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 1) {
            appear($("#girl-center").find("img")[0], 1200);
            appear($("#background-behind-girl").find("img")[0], 1200);
            fadeup($("#table").find("img")[0], 1200, -20);
            fadeup($("#stuff-on-table").find("img")[0], 1200, -135);
            appear("#upper-text-wrapper", 1500)
            toXDelay("#LeftPros *", 500, -200)
            toXDelay("#RightCons *", 500, 200);
        } else {
            disappear($("#background-behind-girl").find("img")[0]);
            disappear($("#girl-center").find("img")[0]);
            returnY($("#table").find("img")[0], -20);
            returnY($("#stuff-on-table").find("img")[0], 135);
            off("#upper-text-wrapper");
            returnX("#LeftPros *", 200);
            returnX("#RightCons *", -200);
        }
    });

});

///////////////////////////////////////////FADE IN APPEAR////////////////////////////////////////////
function appear(obj, time) {
    objects = anime({
        targets: obj,
        opacity: [{ value: 1, duration: time }],
        easing: 'easeInOutQuad',
    });
    objects.play();
}

function disappear(obj) {
    objects = anime({
        targets: obj,
        opacity: 0,
        autoplay: false,
    });
    objects.play();
}
///////////////////////////////////////////FADE UP////////////////////////////////////////////////
function fadeup(obj, time, value) {
    objects = anime({
        targets: obj,
        translateY: [{ value: value, duration: time }],
        opacity: [{ value: 1, duration: time }],
        easing: 'easeInOutQuad',
    });
    objects.play();
}

function returnY(obj, value) {
    objects = anime({
        targets: obj,
        translateY: value,
        opacity: 0
    });
    objects.play();
}
///////////////////////////////////////////ROTATE APPEAR////////////////////////////////////////////////
function rotateAppear(obj, time) {
    objects = anime({
        targets: obj,
        opacity: [{ value: 1, duration: time }],
        easing: 'easeInOutQuad',
        rotate: '1turn'
    });
    objects.play();
}
///////////////////////////////////////////toleft delay///////////////////////////////////////
function toXDelay(obj, time, value) {
    objects = anime({
        targets: obj,
        delay: time,
        opacity: [{ value: 1, duration: time }],
        translateX: value,
    })
    objects.play();
}

function returnX(obj, value) {
    objects = anime({
        targets: obj,
        translateX: value,
        opacity: 0
    });
    objects.play();
}

function fadeShowUp(def) {
    return nh = anime({
        targets: def,
        opacity: [{ value: 1, duration: 1000 }],
        easing: 'easeInOutQuad',
    });
}

function off(def) {
    return nh = anime({
        targets: def,
        opacity: 0,
    });
}

function appearDelay(obj, duration, delay) {
    objects = anime({
        targets: obj,
        opacity: [{ value: 1, duration: duration }],
        easing: 'easeInOutQuad',
        delay: delay
    });
    objects.play();
}