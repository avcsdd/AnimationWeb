var ani = new MyAnimation();

class Page13Animation {
    textBubleInCardP13 = ani.appear("#girlOnDeskP13", 1000)
    girlOnDeskP13 = ani.appearDelay("#textBubleInCardP13", 500, 1000, 20)
    cardP13Above = ani.appearDelay(".cardP13:nth-child(1)", 1000, 200)
    dot1P13 = ani.appearDelay("#dot1P13", 1000, 1500)
    dot2P13 = ani.appearDelay("#dot2P13", 1000, 2000)
    dot3P13 = ani.appearDelay("#dot3P13", 1000, 2500)
    threeDotsP13 = ani.appearDelay("#threeDotsP13", 1000, 1000, 20)
        // checkedP13 = ani.appearDelay("#checkedP13", 1500, 2000, 50)
    checkedP13Rotate = anime({
        targets: document.querySelectorAll("#checkedP13"),
        opacity: [{ value: 1, duration: 1000, delay: 2000 }],
        easing: 'easeInOutSine',
        rotate: {
            value: '3turn',
            easing: 'easeInOutSine',
            delay: 2000
        }
    })
    twoPeople = ani.moveVerticalDelay("#twoPeople", 2000, 1000, 120)
    bubbleP13 = ani.moveVerticalDelay(["#textBubleP13", "#bubbleP13"], 2000, 1000, 20)
    cardP13Bellow = ani.appearDelay(".cardP13:nth-child(2)", 1000, 2000)
    cardP13AboveUD = ani.moveEasingUD(["#cardP13Bellow *", "#cardP13Above *"], 2000, 10)
    run() {
        this.girlOnDeskP13.restart();
        this.cardP13Above.restart();
        this.textBubleInCardP13.restart();
        this.threeDotsP13.restart();
        // this.checkedP13.restart();
        this.twoPeople.restart();
        this.bubbleP13.restart();
        this.cardP13Bellow.restart();
        this.dot1P13.restart();
        this.dot2P13.restart();
        this.dot3P13.restart();
        this.cardP13AboveUD.restart();
        this.checkedP13Rotate.restart();
    }
    reverse() {

    }
}

var page13Animation = new Page13Animation()

export default page13Animation