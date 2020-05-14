var ani = new MyAnimation();
class Page15nimation {
    boxTextP15 = ani.moveHorizontalDelay("#boxTextP15", 500, 1000, 20)
    // line1P15 = ani.appearDelay("#first-line", 500, 800)
    // line2P15 = ani.appearDelay("#second-line", 500, 1600)
    // line3P15 = ani.appearDelay("#third-line", 500, 2400)
    // line4P15 = ani.appearDelay("#forth-line", 500, 3200)
    // line5P15 = ani.appearDelay("#fifth-line", 500, 4000)
    // note1P15 = ani.appearDelay("#note1P15", 500, 4500)
    // note2P15 = ani.appearDelay("#note2P15", 500, 5000)
    // note3P15 = ani.appearDelay("#note3P15", 500, 5500)
    // note4P15 = ani.appearDelay("#note4P15", 500, 6000)
    // note5P15 = ani.appearDelay("#note5P15", 500, 6500)
    // note6P15 = ani.appearDelay("#note6P15", 500, 7000)
    line1P15 = ani.appearDelay("#first-line", 500, 1000,false)
    line2P15 = ani.appearDelay("#second-line", 500, 300,false)
    line3P15 = ani.appearDelay("#third-line", 500, 300,false)
    line4P15 = ani.appearDelay("#forth-line", 500, 300,false)
    line5P15 = ani.appearDelay("#fifth-line", 500, 300,false)
    note1P15 = ani.appearDelay("#note1P15", 500, 300,false)
    note2P15 = ani.appearDelay("#note2P15", 500, 300,false)
    note3P15 = ani.appearDelay("#note3P15", 500, 300,false)
    note4P15 = ani.appearDelay("#note4P15", 500, 300,false)
    note5P15 = ani.appearDelay("#note5P15", 500, 300,false)
    note6P15 = ani.appearDelay("#note6P15", 500, 300,false)
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
    
    isRotated = false
    
    getRotation = () => {
        if (!this.isRotated) {
            return {
                value: '0turn',
                duration: 3000
            }
        } else {
            return {
                value: '1turn',
                duration: 3000
            }
        }
    }

    loopComplete() {
        this.isRotated = true
    }

    update(){
        this.isRotated = true
    }
    
    note1P15PicShowUp = anime({
        targets: '#noteImgP15Pic',
        rotate: this.getRotation,
        easing: 'linear',
        duration:3000,
        autoplay:false,
        loopComplete: this.loopComplete(),
        update :this.update()
    })

    note1P15PicRotate = anime({
        targets: '#noteImgP15Pic',
        rotate: '1turn',
        easing: 'linear',
        loop:true,
        duration:3000,
        autoplay: false,
        loopComplete: this.loopComplete(),
        update: this.update()
    })

    note1P15PicReverse = anime({
        targets: '#noteImgP15Pic',
        autoplay: false
    })


    doNext(animation){
        animation.play()
        return (animation.finished)
    }

    run(isRunning) {
        if (!isRunning) {
            var start = anime({
                targets: ['#first-line', '#second-line', '#third-line', "#forth-line", "#fifth-line", "#note1P15", "#note2P15", "#note3P15", "#note4P15", "#note5P15", "#note6P15",],
                opacity: 0,
                duration: 0
            })

            this.boxTextP15.restart();
            // this.line1P15.restart();
            // this.line2P15.restart();
            // this.line3P15.restart();
            // this.line4P15.restart();
            // this.line5P15.restart();
            // this.note1P15.restart();
            // this.note2P15.restart();
            // this.note3P15.restart();
            // this.note4P15.restart();
            // this.note5P15.restart();
            // this.note6P15.restart();
            self = this
            // this.line1P15.finished.then(this.doNext(this.line2P15))
            console.log(isRunning)
            var promise = new Promise((resolve, reject, onCancel) => {
                start.play()
                this.note1P15PicRotate.pause()
                resolve(start.finished)
            }).then(()=>{
                return self.doNext(this.line1P15) 
            }).then(() =>{
            return self.doNext(this.line2P15) 
            }).then(()=>{
                return self.doNext(self.line3P15)
            }).then(()=>{
                return self.doNext(self.line4P15)
            }).then(() => {
                return self.doNext(self.line5P15)
            }).then(() => {
                return self.doNext(self.note1P15)
            }).then(() => {
                console.log("OK HERE")
                return self.doNext(self.note2P15)
            }).then(() => {
                return self.doNext(self.note3P15)
            }).then(() => {
                return self.doNext(self.note4P15)
            }).then(() => {
                return self.doNext(self.note5P15)
            }).then(() => {
                return self.doNext(self.note6P15)
            }).then(() => {
                self.note1P15PicRotate.restart()
            }).then(() => {
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    reverse() {
    }
}

var p15Animation = new Page15nimation()

export default p15Animation
