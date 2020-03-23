export default class Page15nimation{
    boxTextP15 =  anime({
        targets: document.querySelectorAll("#boxTextP15"),
        // translateY: [{ value: 410, duration: 1500 }],
        opacity: [{ value: 1, duration: 1500 }],
        // translateX: [{value:250,duration:2000},{value:0,duration:1000}],
        easing: 'easeInOutQuad',
    })
}


// $(document).ready(function(){
//     $('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
//         var ele = $('#carouselExampleControls .carousel-indicators li.active');
//         var pageIndex = ele.data('value');
//         var p15 = new Page15nimation() 
//         if (pageIndex==14){
//             p15.boxTextP15.start()
//         }
//     })
// })