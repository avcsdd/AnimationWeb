var ani = new MyAnimation();

class Page13Animation {
    girlOnDeskP13 = ani.appear("#girlOnDeskP13", 1000)
    cardP13Above = ani.appearDelay(".cardP13:nth-child(1)", 1000, 200)
    textBubleInCardP13 = ani.moveHorizontalDelay("#textBubleInCardP13", 500, 1000, 20)
    threeDotsP13 = ani.moveHorizontalDelay("#threeDotsP13", 1000, 1000, 20)
    checkedP13 = ani.moveHorizontalDelay("#checkedP13", 1500, 1000, 50)
    twoPeople = ani.moveVerticalDelay("#twoPeople", 2000, 1000, 120)
    bubbleP13 = ani.moveVerticalDelay(["#textBubleP13", "#bubbleP13"], 2000, 1000, 20)
    cardP13Bellow = ani.appearDelay(".cardP13:nth-child(2)", 2000, 2000)
    run() {
        this.girlOnDeskP13.restart();
        this.cardP13Above.restart();
        this.textBubleInCardP13.restart();
        this.threeDotsP13.restart();
        this.checkedP13.restart();
        this.twoPeople.restart();
        this.bubbleP13.restart();
        this.cardP13Bellow.restart();
    }
    reverse() {

    }
}

var page13Animation = new Page13Animation()

export default page13Animation