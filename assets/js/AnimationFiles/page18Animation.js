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

    letterP18 = anime({
        targets: '#imgLetterP18',
        translateY: [-50,0,0,0],
        opacity: [0,1,1,1],
        autoplay: false,
        duration: 3000,
        loop: true,
        easing: 'linear',
    })

    bubble11 = {
        targets: '#bubbleTextP181',
        opacity: [0,0.5,1,1,1],
        autoplay: false,
        duration: 300,
        easing: 'linear', 
    }

    bubble2 ={
        targets: '#bubbleTextP182',
        opacity: [0, 0.5, 1, 1, 1],
        autoplay: false,
        duration: 300,
        easing: 'linear',
    }

    bubble3 = {
        targets: '#bubbleTextP183',
        opacity: [0, 0.5, 1, 1, 1],
        autoplay: false,
        duration: 300,
        easing: 'linear',
    }

    bubble4 = {
        targets: '#bubbleTextP184',
        opacity: [0, 0.5, 1, 1, 1],
        autoplay: false,
        duration: 300,
        easing: 'linear',
    }

    bubble5 = {
        targets: '#bubbleTextP185',
        opacity: [0, 0.5, 1, 1, 1],
        autoplay: false,
        duration: 300,
        easing: 'linear',
    }

    bubblePolice = {
        targets:"#img3Bubble",
        translateX: [-20,0,0],
        translateY: [20,0,0],
        opacity: [0,1,1],
        duration: 900
    }

    dot1 = {
        targets: "#dotP181",
        opacity: [0, 1, 1],
        duration: 300
    }

    dot2 = {
        targets: "#dotP182",
        opacity: [0, 1, 1],
        duration: 300
    }

    dot3 = {
        targets: "#dotP183",
        opacity: [0, 1, 1],
        duration: 300
    }

    doNext(animation) {
        animation.play()
        return (animation.finished)
    }

    run() {
        this.buttonP18.restart();
        this.speakerP18.play()
        this.stopP18.play()
        this.hammerP18.play()
        this.letterP18.play()
        self = this
        // var promise = new Promise((resolve, reject) => {
        //     this.bubble11.play()
        //     resolve(this.bubble11.finished)
        // }).then(() => {
        //     console.log("hihi")
        //     return self.doNext(this.bubble2)
        // }).then(() => {
        //     return self.doNext(this.bubble3)
        // }).then(() => {
        //     return self.doNext(this.bubble4)
        // }).then(() => {
        //     return self.doNext(this.bubble5)
        // })
        // .catch(err => {
        //     console.log(err)
        // })

        // animation2 = anime.timeline({
        //     loop: true,
        //     easing: 'linear',
 
        // }).add(this.bubblePolice)
        // .add(this.dot1)
        // .add(this.dot2)
        // .add(this.dot3)

        animation =anime.timeline({
            loop:true,
            easing:'linear',
        })
        .add(this.bubble11)
        .add(this.bubble4)
        .add(this.bubble3)
        .add(this.bubble5)
        .add(this.bubble2)
        .add(this.bubblePolice)
        .add(this.dot1)
        .add(this.dot2)
        .add(this.dot3)
    }
    reverse() {

    }
}
var animationPage18 = new AnimationPage18();
export default animationPage18;