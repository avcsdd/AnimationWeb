var ani = new MyAnimation();
class Page15nimation {
    // boxTextP15 = ani.moveHorizontalDelay("#boxTextP15", 500, 1000, 20)
    line1P15 = ani.appearDelay("#first-line", 500, 500)
    line2P15 = ani.appearDelay("#second-line", 500, 1000)
    line3P15 = ani.appearDelay("#third-line", 500, 1500)
    line4P15 = ani.appearDelay("#forth-line", 500, 2000)
    line5P15 = ani.appearDelay("#fifth-line", 500, 2500)
    note1P15 = ani.appearDelay("#note1P15", 500, 3000)
    note2P15 = ani.appearDelay("#note2P15", 500, 3500)
    note3P15 = ani.appearDelay("#note3P15", 500, 4000)
    note4P15 = ani.appearDelay("#note4P15", 500, 4500)
    note5P15 = ani.appearDelay("#note5P15", 500, 5000)
    note6P15 = ani.appearDelay("#note6P15", 500, 5500)
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