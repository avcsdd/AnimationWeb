var ani = new MyAnimation();
class Page15nimation {
    // boxTextP15 = ani.moveHorizontalDelay("#boxTextP15", 500, 1000, 20)
    line1P15 = ani.appearDelay("#first-line", 250, 500)
    line2P15 = ani.appearDelay("#second-line", 250, 750)
    line3P15 = ani.appearDelay("#third-line", 250, 1000)
    line4P15 = ani.appearDelay("#forth-line", 250, 1250)
    line5P15 = ani.appearDelay("#fifth-line", 250, 1500)
    note1P15 = ani.appearDelay("#note1P15", 250, 1750)
    note2P15 = ani.appearDelay("#note2P15", 250, 2000)
    note3P15 = ani.appearDelay("#note3P15", 250, 2250)
    note4P15 = ani.appearDelay("#note4P15", 250, 2500)
    note5P15 = ani.appearDelay("#note5P15", 250, 2750)
    note6P15 = ani.appearDelay("#note6P15", 250, 3000)
        // boxtexP15Shaking = anime({
        //     targets: "#boxTextP15",
        //     // translateX: { value: 5, delay: 0 },
        //     rotateX: '0.02turn',
        //     direction: 'alternate',
        //     loop: true,
        //     // delay: 0,
        //     autoplay: false,
        //     easing: 'easeInOutQuad'
        // })
    run() {
        // this.boxTextP15.restart();
        this.line1P15.restart();
        this.line2P15.restart();
        this.line3P15.restart();
        this.line4P15.restart();
        this.line5P15.restart();
        this.note1P15.restart();
        this.note2P15.restart();
        this.note3P15.restart();
        this.note4P15.restart();
        this.note5P15.restart();
        this.note6P15.restart();
        // this.boxtexP15Shaking.restart()
    }
    reverse() {

    }
}

var p15Animation = new Page15nimation()

export default p15Animation