var ani = new MyAnimation();
class AnimationPage18 {
    buttonP18 = ani.moveEasingUD('.bottom-card', 0, 5);
    run() {
        this.buttonP18.restart();
    }
    reverse() {

    }
}
var animationPage18 = new AnimationPage18();
export default animationPage18;