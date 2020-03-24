var ani = new MyAnimation();
class AnimationPage25 {
    boothPage25 = ani.moveVerticalDelay("#boothPage25", 500, 2000, 100)
    cardPage25 = ani.appearDelay("#cardPage25", 1000, 700)
    attendanceListPage25 = ani.appearDelay(["#attendanceListPage25", "#iconXPage25"], 1000, 1500)
    attendanceListHighlight = ani.appearDelay(["#attendanceListHighlight", "#iconXPage25"], 1000, 2000)
    peoplegroup1Page25 = ani.moveHorizontalDelay("#peoplegroup1Page25", 1500, 1500, -320)
    balloonPage25 = ani.appearDelay(["#balloonPage25", "#balloonContentPage25"], 1000, 2500)
        //////////////////////////////////////////////////////////////////////////////////////////////////
    boothPage25Reverse = ani.moveVerticalDelay("#boothPage25", 0, 0, -100)
    cardPage25Reverse = ani.off(["#cardPage25", "#attendanceListPage25", "#iconXPage25", "#attendanceListHighlight", "#iconXPage25", "#balloonPage25", "#balloonContentPage25"])
        // attendanceListPage25Reverse = ani.appearDelay(["#attendanceListPage25", "#iconXPage25"], 1000, 1500)
        // attendanceListHighlightReverse = ani.appearDelay(["#attendanceListHighlight", "#iconXPage25"], 1000, 2000)
    peoplegroup1Page25Reverse = ani.moveHorizontalDelay("#peoplegroup1Page25", 0, 0, 320)
        // balloonPage25Reverse = ani.appearDelay(["#balloonPage25", "#balloonContentPage25"], 1000, 2500)
    run() {
        this.boothPage25.restart();
        this.cardPage25.restart();
        this.attendanceListPage25.restart();
        this.attendanceListHighlight.restart();
        this.peoplegroup1Page25.restart();
        this.balloonPage25.restart();

    }
    reverse() {
        // this.boothPage25.pause();
        // this.cardPage25.pause();
        // this.attendanceListPage25.pause();
        // this.attendanceListHighlight.pause();
        // this.peoplegroup1Page25.pause();
        // this.balloonPage25.pause();
        // this.boothPage25Reverse.restart();
        // this.cardPage25Reverse.restart();
        // this.peoplegroup1Page25Reverse.restart();
    }
}
var animationPage25 = new AnimationPage25();
export default animationPage25