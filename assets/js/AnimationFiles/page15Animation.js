var ani = new MyAnimation();
class Page15nimation {
    boxTextP15 = ani.moveHorizontalDelay("#boxTextP15", 500, 1000, 20)
    note1P15 = ani.appearDelay("#note1P15", 1000, 1500)
    note2P15 = ani.appearDelay("#note2P15", 1000, 2000)
    note3P15 = ani.appearDelay("#note3P15", 1000, 2500)
    note4P15 = ani.appearDelay("#note4P15", 1000, 3000)
    note5P15 = ani.appearDelay("#note5P15", 1000, 3500)
    note6P15 = ani.appearDelay("#note6P15", 1000, 4000)
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
        this.boxTextP15.restart();
        this.note1P15.restart();
        this.note2P15.restart();
        this.note3P15.restart();
        this.note4P15.restart();
        this.note5P15.restart();
        this.note6P15.restart();
        this.boxtexP15Shaking.restart()
    }
    reverse() {

    }
}

var p15Animation = new Page15nimation()

export default p15Animation