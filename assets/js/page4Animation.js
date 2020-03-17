$(document).ready(function(){
    flagAnimation = anime({
        targets: document.querySelectorAll("#aseanCountryFlagsP4"),
        rotate:{value: '1turn',easing: 'linear',duration:10000},
        loop:true,
        endDelay: 0
    });
    // animation showup of desk 2
    // flagAnimationBack = anime({
    //     targets: document.querySelectorAll("#desk-2"),
    //     translateY: [{value:-280,duration:1500}],
    //     opacity: [{value: 1,duration: 1500}],
    //     easing: 'easeInOutQuad',
    // });
    $('#carouselExampleControls').bind('slid.bs.carousel', function (e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        if (pageIndex == 3 ){
           flagAnimation.play()
        } else {
        }
    });
})