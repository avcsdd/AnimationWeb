var ani = new MyAnimation();
class AnimationPage47 {
    titlePage47 = ani.moveVerticalDelay("#titlePage47", 500, 700, 15)
    blueAreaPage47 = ani.appearDelay(" #blueBg", 1000, 1000)

    hand01Page47Appear = ani.appearDelay("#hand01Page47", 1000, 1200)
    hand01Page47 = ani.moveEasingLR("#hand01Page47", 1200, 20)
    infoLine01Pag47 = ani.appearDelay("#infoLine01Pag47", 700, 1500)

    hand02Page47Appear = ani.appearDelay("#hand02Page47", 1000, 2000)
    hand02Page47 = ani.moveEasingLR("#hand02Page47", 2000, 20)
    infoLine02Pag47 = ani.appearDelay("#infoLine02Pag47", 700, 2500)

    hand03Page47Appear = ani.appearDelay("#hand03Page47", 1000, 2800)
    hand03Page47 = ani.moveEasingLR("#hand03Page47", 2800, 20)
    infoLine03Pag47 = ani.appearDelay("#infoLine03Pag47", 700, 3200)

    socialIcon = ani.appearDelay([" .socialNetPage47", " .socialTextPage47"], 1000, 3500)
    informationPage47 = ani.appearDelay("#informationPage47", 1000, 3700)
    run() {
        this.titlePage47.restart();
        this.blueAreaPage47.restart();
        this.hand01Page47Appear.restart();
        this.hand01Page47.restart()
        this.infoLine01Pag47.restart()
        this.hand02Page47Appear.restart();
        this.hand02Page47.restart()
        this.infoLine02Pag47.restart()
        this.hand03Page47Appear.restart();
        this.hand03Page47.restart()
        this.infoLine03Pag47.restart()

        this.socialIcon.restart()
        this.informationPage47.restart()

    }

    reverse() {

    }
}
var animationPage47 = new AnimationPage47();
export default animationPage47