import page15Animation from "./AnimationFiles/page15Animation.js"
import page02Animation from "./AnimationFiles/page2Animation.js"
import page04Animation from "./AnimationFiles/page4Animation.js"
import page07Animation from "./AnimationFiles/page07Animation.js"
import page16Animation from "./AnimationFiles/page16Animation.js"
import page17Animation from "./AnimationFiles/page17Animation.js"
import page25Animation from "./AnimationFiles/page25Animation.js"
import page26Animation from "./AnimationFiles/page26Animation.js"
import page27Animation from "./AnimationFiles/page27Animation.js"
import page28Animation from "./AnimationFiles/page28Animation.js"


function PreloadPageSelected(pageIndex) {
    return new Promise(resolve => {
        console.log(pageIndex)

        if (pageIndex == 1) {
            page02Animation.reverse();
        }
        if (pageIndex == 3) {
            page04Animation.reverse();
        }
        if (pageIndex == 6) {
            page07Animation.reverse();
        }
        if (pageIndex == 9) {
            page15Animation.reverse();
        }
        if (pageIndex == 10) {
            page16Animation.reverse();
        }
        if (pageIndex == 11) {
            page17Animation.reverse();
        }
        if (pageIndex == 13) {
            page25Animation.reverse();
        }
        if (pageIndex == 14) {
            page26Animation.reverse();
        }
        if (pageIndex == 15) {
            page27Animation.reverse();
        }
        if (pageIndex == 16) {
            page28Animation.reverse();
        }
        resolve(pageIndex)
    })
}

function LoadPageSelected(pageIndex) {
    return new Promise(resolve => {
        if (pageIndex == 1) {
            page02Animation.run();
        }
        if (pageIndex == 3) {
            page04Animation.run();
        }
        if (pageIndex == 6) {
            page07Animation.run();
        }
        if (pageIndex == 9) {
            page15Animation.run();
        }
        if (pageIndex == 10) {
            page16Animation.run();
        }
        if (pageIndex == 11) {
            page17Animation.run();
        }
        if (pageIndex == 13) {
            page25Animation.run();
        }
        if (pageIndex == 14) {
            page26Animation.run();
        }
        if (pageIndex == 15) {
            page27Animation.run();
        }
        if (pageIndex == 16) {
            page28Animation.run();
        }
        resolve(pageIndex)
    })
}

export function prepareLoading(indicator) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('pageindex') + indicator;
    if (pageIndex < 0) {
        pageIndex = 19;
    } else if (pageIndex > 19) {
        pageIndex = 0;
    }
    return carouselJumpTo(pageIndex)
}

export function carouselJumpTo(pageIndex) {
    return PreloadPageSelected(pageIndex)
          .then(()=>{
            $(".carousel").carousel(pageIndex);
          }).then(LoadPageSelected(pageIndex))
}
