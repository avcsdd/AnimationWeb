$("#textAboveNav").hide();
const mapPage = new Map([
    [0, 'page01'],
    [1, 'page01'],
    [2, 'page01'],
    [3, 'page02'],
    [4, 'page02'],
    [5, 'page02'],
    [6, 'page02'],
    [7, 'page02'],
    [8, 'page02'],
    [9, 'page02'],
    [10, 'page02'],
    [11, 'page02'],
    [12, 'page02'],
    [13, 'page02'],
    [14, 'page03'],
    [15, 'page04'],
    [16, 'page04'],
    [17, 'page04'],
    [18, 'page04'],
    [19, 'page04'],
    [20, 'page04'],
    [21, 'page04'],
    [22, 'page04'],
    [23, 'page04'],
    [24, 'page05'],
    [25, 'page05'],
    [26, 'page05'],
    [27, 'page06'],
    [28, 'page06'],
    [29, 'page07'],
    [30, 'page08'],
]);

$(document).ready(function() {
    $('#carouselExampleControls').on('slid.bs.carousel', function(e) {
        var ele = $('#carouselExampleControls .carousel-indicators li.active');
        var pageIndex = ele.data('value');
        //
        let id = mapPage.get(pageIndex);
        $(".nav-item").removeClass("active");
        $("#" + id).addClass("active");
        if (pageIndex == 0) {
            $("#textAboveNav").hide();
        } else {
            $("#textAboveNav").show();
        }
        //
    })
})