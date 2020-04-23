var ani = new MyAnimation();
class AnimationPage18 {
    buttonP18 = ani.moveEasingUD('.bottom-card', 0, 5);
    speakerP18 = anime({
        targets: '#speakerP18',
        scale : 1.2,
        autoplay: false,
        loop: true
    })

    stopP18 = anime({
        targets: '#stopP18',
        translateX: [0,30,0],
        scale:[1,1.5,1],
        autoplay: false,
        duration: 1000,
        loop: true
    })

    hammerP18 = anime({
        targets: '#hammerP18',
        rotateZ: [15,0],
        autoplay: false,
        duration: 500,
        loop: true
    })

    run() {
        this.buttonP18.restart();
        this.speakerP18.play()
        this.stopP18.play()
        this.hammerP18.play()
    }
    reverse() {

    }
}
var animationPage18 = new AnimationPage18();
export default animationPage18;