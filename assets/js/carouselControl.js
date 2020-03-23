import page15Animation from "./AnimationFiles/page15Animation.js"
import page02Animation from "./AnimationFiles/page2Animation.js"
import page04Animation from "./AnimationFiles/page4Animation.js"
import page07Animation from "./AnimationFiles/page07Animation.js"

function PreloadPageSelected(pageIndex) {
    return new Promise(resolve => {
        console.log(pageIndex)
        if (pageIndex == 9) {
            page15Animation.boxTextP15Back.play()
            console.log("preload")
        }
        if (pageIndex == 1) {
            page02Animation.reverseBackground.restart();
            page02Animation.reverseGirl.restart();
            page02Animation.reverseTable.restart();
            page02Animation.reverseStuffOnTable.restart();
            page02Animation.reverseUpperText.restart();
            page02Animation.reverseLeftPros.restart();
            page02Animation.reverseRightCons.restart();
        }
        if (pageIndex == 3) {
            page04Animation.girlP4.pause();
            page04Animation.laptopP4.pause();
            page04Animation.tableP4.pause();
            page04Animation.textBubbleP4.pause();
            page04Animation.asianFlagAppear.pause();
            page04Animation.hourglass.pause();
            page04Animation.scaleAseanFlagTo0.restart();
            page04Animation.scaleFlagsTo0.restart();
            page04Animation.scaleHourGlassTo0.restart();
            page04Animation.zoomOutFlags.pause();
            page04Animation.stopFlags();
            page04Animation.off(["#girlP4", "#laptopP4", "#tableP4", "#textBubbleP4"]);
        }
        if (pageIndex == 6) {
            page07Animation.reversePage07();
        }
        resolve(pageIndex)
    })
}

function LoadPageSelected(pageIndex) {
    return new Promise(resolve => {
        if (pageIndex == 9) {
            page15Animation.boxTextP15.play()
            console.log("loading")
        }
        if (pageIndex == 1) {
            page02Animation.girlCenterAnimation.restart();
            page02Animation.backgroundBehindGirlAnimation.restart();
            page02Animation.tableAnimation.restart();
            page02Animation.stuffOnTableAnimation.restart();
            page02Animation.upperTextWrapperAnimation.restart();
            page02Animation.leftProsAnimation.restart();
            page02Animation.rightProsAnimation.restart();
        }
        if (pageIndex == 3) {
            page04Animation.hourglass.restart();
            page04Animation.asianFlagAppear.restart();
            page04Animation.girlP4.restart();
            page04Animation.laptopP4.restart();
            page04Animation.tableP4.restart();
            page04Animation.textBubbleP4.restart();
            page04Animation.zoomOutFlags.restart();
            page04Animation.startFlags();
        }
        if (pageIndex == 6) {

            page07Animation.backgroundGirlPage7.restart();
            page07Animation.girlPage7.restart();
            page07Animation.messageCirclePage7.restart();
            page07Animation.tablePage7.restart();
            page07Animation.laptopPage7.restart();
            page07Animation.balloonsPage7.restart();
            page07Animation.messagePage7.restart();
            page07Animation.bigCirclePage7.restart();
            page07Animation.zoomInCicles.restart();
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
    console.log(pageIndex)
    return carouselJumpTo(pageIndex)
}

export function carouselJumpTo(pageIndex) {
    return PreloadPageSelected(pageIndex)
        .then(LoadPageSelected(pageIndex))
        .then(() => {
            $(".carousel").carousel(pageIndex);
        })
}