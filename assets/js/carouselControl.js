import page15Animation from "./AnimationFiles/page15Animation.js"

function PreloadPageSelected(pageIndex){
    return new Promise(resolve => {
        console.log(pageIndex)
        if (pageIndex==9){
            page15Animation.boxTextP15Back.play()
            console.log("preload")
        }
        resolve(pageIndex)
    })
}

function LoadPageSelected(pageIndex){
    return new Promise(resolve => {
        if (pageIndex==9){
            page15Animation.boxTextP15.play()
            console.log("loading")
        }
        resolve(pageIndex)
    })
}

export function prepareLoading(indicator){
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('pageindex') + indicator;
    if (pageIndex < 0){
        pageIndex = 19;
    } else if (pageIndex > 19) {
        pageIndex = 0;
    }
    console.log(pageIndex)
    return carouselJumpTo(pageIndex)
}

export function carouselJumpTo(pageIndex) {
    return PreloadPageSelected(pageIndex)
          .then(LoadPageSelected(pageIndex))
          .then(()=>{
            $(".carousel").carousel(pageIndex);
          })
}
