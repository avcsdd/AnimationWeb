$(".cardP18").click(function(){
    carouselJumpTo(parseInt(this.dataset.id) + 12)
})

$(".closeBtn").click(function(){
    carouselJumpTo(12)
})