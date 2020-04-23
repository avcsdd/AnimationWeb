$(".cardP18").click(function(){
    carouselJumpTo(parseInt(this.dataset.id) + 17)
})

$(".closeBtn").click(function(){
    carouselJumpTo(17)
})