$("#textAboveNav").hide();
const mapPage = new Map([
    [0, 'page01'],
    [1, 'page01'],
    [2, 'page01'],
    [3, 'page02'],
    [4, 'page02'],
    [5, 'page02'],
    //.......etc them sau
]);
$('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('value');
    let id = mapPage.get(pageIndex);
    $(".nav-item").removeClass("active");
    $("#" + id).addClass("active");
    if (pageIndex == 0) {
        $("#textAboveNav").hide();
    } else {
        $("#textAboveNav").show();
    }
});