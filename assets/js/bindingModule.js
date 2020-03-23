$(".nav-link").each(function() {
    $(this).not($(this).has("br")).css("padding-top", "15px")
})
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