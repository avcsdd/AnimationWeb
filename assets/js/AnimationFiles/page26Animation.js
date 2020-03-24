var ani = new MyAnimation();
class AnimationPage26 {
    bikeRightPage26 = ani.moveHorizontalDelay("#bikeRightPage26", 700, 1500, -430)
    bikeLeftPage26 = ani.moveHorizontalDelay("#bikeLeftPage26", 700, 1500, 480)
    leftBallonsPage26 = ani.appearDelay(["#leftBallonsPage26", "#leftBallonsTextPage26"], 1000, 2000)
    rightBallonsPage26 = ani.appearDelay(["#rightBallonsPage26", "#rightBallonsTextPage26"], 1000, 2000)
    vsPage26 = ani.toYDelay("#vsPage26", 2000, 700, 50)
    documenntPage26 = ani.toYDelay("#documenntPage26", 2500, 1000, -360)
    cardPage26 = ani.appearDelay("#cardPage26-container", 1000, 3000)
        //////////////////////////////////////////////////////////////////////////////////////////////////////
    bikeRightPage26Reverse = ani.moveHorizontalDelay("#bikeRightPage26", 0, 0, 430)
    bikeLeftPage26Reverse = ani.moveHorizontalDelay("#bikeLeftPage26", 0, 0, -550)
    leftBallonsPage26Reverse = ani.off(["#bikeRightPage26", "#bikeLeftPage26", "#leftBallonsPage26", "#cardPage26-container", "#leftBallonsTextPage26", "#rightBallonsPage26", "#rightBallonsTextPage26"])
        // rightBallonsPage26Reverse = ani.appearDelay(["#rightBallonsPage26", "#rightBallonsTextPage26"], 1000, 2000)
    vsPage26Reverse = ani.toYDelay("#vsPage26", 0, 0, 50)
    documenntPage26Reverse = ani.toYDelay("#documenntPage26", 0, 0, 360)
        // cardPage26Reverse = ani.appearDelay("#cardPage26-container", 1000, 3000)
    run() {
        this.bikeLeftPage26.restart();
        this.bikeRightPage26.restart();
        this.leftBallonsPage26.restart();
        this.rightBallonsPage26.restart();
        this.vsPage26.restart();
        this.documenntPage26.restart();
        this.cardPage26.restart();
    }
    reverse() {
        // this.bikeLeftPage26.pause();
        // this.bikeRightPage26.pause();
        // this.leftBallonsPage26.pause();
        // this.rightBallonsPage26.pause();
        // this.vsPage26.pause();
        // this.documenntPage26.pause();
        // this.cardPage26.pause();
        // this.bikeRightPage26Reverse.restart();
        // this.bikeLeftPage26Reverse.restart();
        // this.leftBallonsPage26Reverse.restart();
        // this.vsPage26Reverse.restart();
        // this.documenntPage26Reverse.restart();
    }
}
var animationPage26 = new AnimationPage26();
export default animationPage26