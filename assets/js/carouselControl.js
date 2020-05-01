import page02Animation from "./AnimationFiles/page2Animation.js"
import page03Animation from "./AnimationFiles/page3Animation.js"
import page04Animation from "./AnimationFiles/page4Animation.js"
import page07Animation from "./AnimationFiles/page07Animation.js"
import page13Animation from "./AnimationFiles/page13Animation.js"
import page14Animation from "./AnimationFiles/page14Animation.js"
import page15Animation from "./AnimationFiles/page15Animation.js"
import page16Animation from "./AnimationFiles/page16Animation.js"
import page17Animation from "./AnimationFiles/page17Animation.js"
import page18Animation from "./AnimationFiles/page18Animation.js"
import page25Animation from "./AnimationFiles/page25Animation.js"
import page26Animation from "./AnimationFiles/page26Animation.js"
import page27Animation from "./AnimationFiles/page27Animation.js"
import page28Animation from "./AnimationFiles/page28Animation.js"
import page30Animation from "./AnimationFiles/page30Animation.js"
import page47Animation from "./AnimationFiles/page47Animation.js"

var isP15Running = false

function PreloadPageSelected(pageIndex) {
    return new Promise(resolve => {
        console.log(pageIndex)
        switch (pageIndex) {
            case 1:
                page02Animation.reverse();
                break;
            case 2:
                page03Animation.reverse();
                break;
            case 3:
                page04Animation.reverse();
                break;
            case 6:
                page07Animation.reverse();
                break;
            case 7:
                page13Animation.reverse();
                break;
            case 8:
                page14Animation.reverse();
                break;
            case 9:
                page15Animation.reverse();
                break;
            case 10:
                page16Animation.reverse();
                break;
            case 11:
                page17Animation.reverse();
                break;
            case 12:
                page18Animation.reverse();
                break;
            case 19:
                page25Animation.reverse();
                break;
            case 20:
                page26Animation.reverse();
                break;
            case 21:
                page27Animation.reverse();
                break;
            case 22:
                page28Animation.reverse();
                break;
            case 24:
                page30Animation.reverse();
                break;
        }

        resolve(pageIndex)
    })
}

function LoadPageSelected(pageIndex) {
    return new Promise(resolve => {
        console.log(pageIndex)
        switch (pageIndex) {
            case 1:
                page02Animation.run();
                break;
            case 2:
                page03Animation.run();
                break;
            case 3:
                page04Animation.run();
                break;
            case 6:
                page07Animation.run();
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
            case 11:
                break;
            case 12:
                page13Animation.run();
                break;
            case 13:
                page14Animation.run();
                break;
            case 14:
                page15Animation.run(isP15Running);
                isP15Running = true
                break;
            case 15:
                page16Animation.run();
                break;
            case 16:
                page17Animation.run();
                break;
            case 17:
                page18Animation.run();
                break;
            case 23:
                page18Animation.run();
                break;
            case 24:
                page25Animation.run();
                break;
            case 25:
                page26Animation.run();
                break;
            case 26:
                page27Animation.run();
                break;
            case 27:
                page28Animation.run();
                break;
            case 28:
                page30Animation.run();
                break;
            case 29:
                page47Animation.run();
                break;
        }

        if (pageIndex != 14) {

        }

        resolve(pageIndex)
    })
}

export function prepareLoading(indicator) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('pageindex') + indicator;
    if (pageIndex < 0) {
        pageIndex = 30;
    } else if (pageIndex > 30) {
        pageIndex = 0;
    }
    return carouselJumpTo(pageIndex)
}

export function carouselJumpTo(pageIndex) {
    return PreloadPageSelected(pageIndex)
        .then(() => {
            $(".carousel").carousel(pageIndex);
        }).then(LoadPageSelected(pageIndex))
}