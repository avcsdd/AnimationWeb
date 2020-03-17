$(document).ready(function() {
    $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 1) {
            appear($("#girl-center").find("img")[0], 1200);
            appear($("#background-behind-girl").find("img")[0], 1200);
            fadeup($("#table").find("img")[0], 1200, -20);
            fadeup($("#stuff-on-table").find("img")[0], 1200, -135);
            $("#upper-text-wrapper").delay(2000)
                .queue(function(next) {
                    $(this).animate({ 'opacity': 1 }, 'slow');
                    next();
                });
            toXDelay($("#LeftPros").children()[0], 3000, -200);
            toXDelay($("#LeftPros").children()[1], 3000, -200);
            toXDelay($("#LeftPros").children()[2], 3000, -200);
            toXDelay($("#LeftPros").children()[3], 3000, -200);
            toXDelay($("#RightCons").children()[0], 3000, 200);
            toXDelay($("#RightCons").children()[1], 3000, 200);
            toXDelay($("#RightCons").children()[2], 3000, 200);
            toXDelay($("#RightCons").children()[3], 3000, 200);
        } else {
            disappear($("#background-behind-girl").find("img")[0]);
            disappear($("#girl-center").find("img")[0]);
            returnY($("#table").find("img")[0], -20);
            returnY($("#stuff-on-table").find("img")[0], 135);
            $("#upper-text-wrapper").css("opacity", 0)
            returnX($("#LeftPros").children()[0], 200);
            returnX($("#LeftPros").children()[1], 200);
            returnX($("#LeftPros").children()[2], 200);
            returnX($("#LeftPros").children()[3], 200);
            returnX($("#RightCons").children()[0], -200);
            returnX($("#RightCons").children()[1], -200);
            returnX($("#RightCons").children()[2], -200);
            returnX($("#RightCons").children()[3], -200);
        }
    });

});

///////////////////////////////////////////FADE IN APPEAR////////////////////////////////////////////
function appear(obj, time) {
    obj = anime({
        targets: obj,
        opacity: [{ value: 1, duration: time }],
        easing: 'easeInOutQuad',
    });
    obj.play();
}

function disappear(obj) {
    obj = anime({
        targets: obj,
        opacity: 0,
        autoplay: false,
    });
    obj.play();
}
///////////////////////////////////////////FADE UP////////////////////////////////////////////////
function fadeup(obj, time, value) {
    obj = anime({
        targets: obj,
        translateY: [{ value: value, duration: time }],
        opacity: [{ value: 1, duration: time }],
        easing: 'easeInOutQuad',
    });
    obj.play();
}

function returnY(obj, value) {
    obj = anime({
        targets: obj,
        translateY: value,
        opacity: 0
    });
    obj.play();
}
///////////////////////////////////////////ROTATE APPEAR////////////////////////////////////////////////
function rotateAppear(obj, time) {
    obj = anime({
        targets: obj,
        opacity: [{ value: 1, duration: time }],
        easing: 'easeInOutQuad',
        rotate: '1turn'
    });
    obj.play();
}
///////////////////////////////////////////toleft delay///////////////////////////////////////
function toXDelay(obj, time, value) {
    obj = anime({
        targets: obj,
        delay: time,
        opacity: [{ value: 1, duration: time }],
        translateX: value,
    })
    obj.play();
}

function returnX(obj, value) {
    obj = anime({
        targets: obj,
        translateX: value,
        opacity: 0
    });
    obj.play();
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
        easing: 'easeInOutQuad',
    });
}