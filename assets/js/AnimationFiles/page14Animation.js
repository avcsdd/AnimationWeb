var ani = new MyAnimation();

class Page14nimation {
    grassBackgroundP14 = ani.appearDelay("#grassBackgroundP14", 1000, 200);
    girlOndeskP14 = ani.moveVerticalDelay("#girlOndeskP14", 500, 1000, -305);
    bubbleTextP14 = ani.appearDelay("#bubbleTextP14", 1000, 1000);
    closeCabinetP14 = ani.moveVerticalDelay("#closeCabinetP14", 800, 1000, -305);
    certificateP14 = ani.moveHorizontalDelay("#certificateP14", 1000, 1000, -50);
    folderP14 = ani.appearDelay("#folderP14", 1000, 1500);
    magnifyingP14 = ani.appearDelay("#magnifyingP14", 1000, 2000);
    magnifyingP14Move = ani.moveEasingLR("#magnifyingP14", 2500, 20)
    gear2P14 = anime({
        targets: ["#gear2P14", "#gear1P14"],
        rotate: '1turn',
        duration: 5000,
        easing: 'linear',
        loop: true,
        autoplay: false
    })
    run() {
        this.grassBackgroundP14.restart();
        this.girlOndeskP14.restart();
        this.bubbleTextP14.restart();
        this.closeCabinetP14.restart();
        this.certificateP14.restart();
        this.folderP14.restart();
        this.magnifyingP14.restart();
        this.magnifyingP14Move.restart();
        this.gear2P14.restart();
    }
    reverse() {

    }
}

var p14Animation = new Page14nimation()

export default p14Animation