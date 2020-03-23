const page15Animation = require('./page15Animation')

$('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('value');
    var p15 = new page15Animation() 
    if (pageIndex==14){
        p15.boxTextP15.start()
    }
})