var ani = new MyAnimation();
class AnimationPage16 {
    // policeP16 = ani.moveVerticalDelay("#policeP16", 500, 1500, 80)
    policeP16 = ani.moveVerticalDelay("#policeP16_shaking", 500, 1000, 40);

    // policeP16Shaking = anime({
    //     targets: ['#page16 #policeP16_shaking'],
    //     opacity: [
    //         { value: 0 },
    //         { value: 1, delay: 500 }
    //     ],
    //     loop: true,
    //     autoplay: false,
    // });

    // rightTextBoxP16 = ani.moveHorizontalDelay("#rightTextBoxP16", 1500, 1000, -70)
    // leftTextBoxP16 = ani.moveHorizontalDelay("#leftTextBoxP16", 2000, 1000, 70)
    // bottomTextBoxP16 = ani.moveVerticalDelay("#bottomTextBoxP16", 2500, 1000, -50)
    rightTextBoxP16 = ani.appearDelay("#rightTextBoxP16", 1000, 1500)
    leftTextBoxP16 = ani.appearDelay("#leftTextBoxP16", 1000, 2000)
    bottomTextBoxP16 = ani.appearDelay("#bottomTextBoxP16", 1000, 2500)
        // rightTextBoxP16UD0 = ani.moveHorizontalDelay("#rightTextBoxP16", 3000, 0, 70)
    rightTextBoxP16UD = ani.moveEasingUD(["#rightTextBoxP16", "#leftTextBoxP16", "#bottomTextBoxP16"], 5000, 10)
    run() {
        this.policeP16.restart();
        // this.policeP16Shaking.restart();
        this.leftTextBoxP16.restart();
        this.rightTextBoxP16.restart();
        this.bottomTextBoxP16.restart();
        // this.rightTextBoxP16UD0.restart()
        this.rightTextBoxP16UD.restart();

    }
    reverse() {}
}
var animationPage16 = new AnimationPage16();
export default animationPage16;