var ani = new MyAnimation();
class AnimationPage27 {
    diagonalMove(obj, delay, duration, x, y) {
        return anime({
            targets: obj,
            delay: delay,
            opacity: [{ value: 1, duration: duration }],
            translateX: x,
            translateY: y,
            duration: duration
        })
    }

    speakerMove = ani.appear("#speakerPage27", 1000)
    cardPage27 = ani.toXDelay("#cardPage27", 200, -600, -600)
    cardTitlePage27 = ani.appear("#cardTitlePage27", 2000)
    cardContentPage27 = ani.appearDelay("#cardContentPage27", 1000, 1000)
    speakerMoveUD = ani.moveEasingUD("#speakerPage27", 2000, 15)
    speakerPage27FadeOut = ani.off("#speakerPage27");
    cardPage27Reverse = ani.returnX("#cardPage27", 200, 600, 600)
    disapperAll = ani.off(["#speakerPage27", "#cardTitlePage27", "#cardContentPage27"]);

    run() {
        this.speakerMove.restart();
        this.cardPage27.restart();
        this.cardTitlePage27.restart();
        this.cardContentPage27.restart();
        this.speakerMoveUD.play();
    }
    reverse() {
        // this.speakerPage27.restart();
        // this.cardPage27Reverse.restart();
        // this.speakerPage27FadeOut.restart();
        // this.disapperAll.restart();
        // this.speakerMove.pause();
        // this.cardPage27.pause();
        // this.cardTitlePage27.pause();
        // this.cardContentPage27.pause();
    }
}
var animationPage27 = new AnimationPage27();
export default animationPage27

///////////////////////////////////////////toleft delay///////////////////////////////////////