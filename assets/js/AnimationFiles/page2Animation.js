// $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
//     var ele = $('#carouselExampleControls .carousel-indicators li.active');
//     var pageIndex = ele.data('value');
//     if (pageIndex == 1) {
//         appear($("#girl-center").find("img")[0], 1200);
//         appear($("#background-behind-girl").find("img")[0], 1200);
//         fadeup($("#table").find("img")[0], 1200, -20);
//         fadeup($("#stuff-on-table").find("img")[0], 1200, -135);
//         appear("#upper-text-wrapper", 1500)
//         toXDelay("#LeftPros *", 500, -200)
//         toXDelay("#RightCons *", 500, 200);
//     } else {
//         disappear($("#background-behind-girl").find("img")[0]);
//         disappear($("#girl-center").find("img")[0]);
//         returnY($("#table").find("img")[0], -20);
//         returnY($("#stuff-on-table").find("img")[0], 135);
//         off("#upper-text-wrapper");
//         returnX("#LeftPros *", 200);
//         returnX("#RightCons *", -200);
//     }
// });
var ani = new MyAnimation();
class AnimationPage02 {
    girlCenterAnimation = ani.appear("#girl-center *", 1200);
    backgroundBehindGirlAnimation = ani.appear("#background-behind-girl *", 1200);
    tableAnimation = ani.fadeup("#table", 1200, -20);
    stuffOnTableAnimation = ani.fadeup("#stuff-on-table", 1200, -135);
    upperTextWrapperAnimation = ani.appear("#upper-text-wrapper", 1500);
    leftProsAnimation = ani.toXDelay("#LeftPros *", 500, -200);
    rightProsAnimation = ani.toXDelay("#RightCons *", 500, 200);
    //////////////////////////
    reverseBackground = ani.disappear("#background-behind-girl *");
    reverseGirl = ani.disappear("#girl-center *");
    reverseTable = ani.returnY("#table", -20);
    reverseStuffOnTable = ani.returnY("#stuff-on-table", 135);
    reverseUpperText = ani.disappear("#upper-text-wrapper");
    reverseLeftPros = ani.returnX("#LeftPros *", 200);
    reverseRightCons = ani.returnX("#RightCons *", -200);
}

var p02Animation = new AnimationPage02()

export default p02Animation