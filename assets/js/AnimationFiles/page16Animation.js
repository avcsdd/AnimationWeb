var ani = new MyAnimation();
class AnimationPage16 {
    policeP16 = ani.moveVerticalDelay("#policeP16", 500, 1500, 80)
    leftTextBoxP16 = ani.moveHorizontalDelay("#leftTextBoxP16", 1500, 1000, 70)
    rightTextBoxP16 = ani.moveHorizontalDelay("#rightTextBoxP16", 1500, 1000, -70)
    bottomTextBoxP16 = ani.moveVerticalDelay("#bottomTextBoxP16", 1500, 1000, -50)
    run() {
        this.policeP16.restart();
        this.leftTextBoxP16.restart();
        this.rightTextBoxP16.restart();
        this.bottomTextBoxP16.restart();
    }
    reverse() {

    }
}
var animationPage16 = new AnimationPage16();
export default animationPage16;