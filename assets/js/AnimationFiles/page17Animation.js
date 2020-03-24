var ani = new MyAnimation();
class AnimationPage17 {
    peopleLeftP17 = ani.moveVerticalDelay(["#imagePeopleLeftP17", "#imageBackgroundLeftP17"], 500, 1500, 80)
    upperTextBoxP17 = ani.moveHorizontalDelay("#upperTextBoxP17", 1000, 1000, 110)
    lowerTextBoxP17 = ani.moveHorizontalDelay("#lowerTextBoxP17", 1000, 1000, -140)
    rightSectionP17 = ani.appearDelay("#rightSectionP17", 1000, 1200)
    rightSectionP17_01 = ani.appearDelay("#rightSectionP17 div:nth-child(1)", 1000, 1300)
    rightSectionP17_02 = ani.appearDelay("#rightSectionP17 div:nth-child(2)", 1000, 1800)
    rightSectionP17_03 = ani.appearDelay("#rightSectionP17 div:nth-child(3)", 1000, 2300)
    rightSectionP17_04 = ani.appearDelay("#rightSectionP17 div:nth-child(4)", 1000, 2800)
    rightSectionP17_05 = ani.appearDelay("#rightSectionP17 div:nth-child(5)", 1000, 3300)
    rightSectionP17_06 = ani.appearDelay("#rightSectionP17 div:nth-child(6)", 1000, 3800)
    rightSectionP17_07 = ani.appearDelay("#rightSectionP17 div:nth-child(7)", 1000, 4300)
    run() {
        this.peopleLeftP17.restart();
        this.upperTextBoxP17.restart();
        this.lowerTextBoxP17.restart();
        this.rightSectionP17.restart();
        this.rightSectionP17_01.restart();
        this.rightSectionP17_02.restart();
        this.rightSectionP17_03.restart();
        this.rightSectionP17_04.restart();
        this.rightSectionP17_05.restart();
        this.rightSectionP17_06.restart();
        this.rightSectionP17_07.restart();
    }
    reverse() {

    }
}
var animationPage17 = new AnimationPage17();
export default animationPage17;