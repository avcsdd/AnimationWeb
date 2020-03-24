$(".nav-link").each(function() {
    $(this).not($(this).has("br")).css("padding-top", "15px")
})

$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
        $('.carousel-control-prev').click();
        break;

        case 39:
        $('.carousel-control-next').click();
        break;

        default: return;
    }
    e.preventDefault();
});
// binding from outside module into module class , function
function prepareLoading(indicator){
    import('./carouselControl.js').then((Module)=>{
        Module.prepareLoading(indicator)
    })
}

function carouselJumpTo(page){
    import('./carouselControl.js').then((Module)=>{
        Module.carouselJumpTo(page)
    })
}