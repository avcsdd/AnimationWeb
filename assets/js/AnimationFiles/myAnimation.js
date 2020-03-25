class MyAnimation {
    ///////////////////////////////////////////FADE IN APPEAR////////////////////////////////////////////
    appear(obj, time) {
        return anime({
            targets: obj,
            opacity: [{ value: 1, duration: time }],
            easing: 'easeInOutQuad',
        });
    }

    disappear(obj) {
            return anime({
                targets: obj,
                opacity: 0,
                autoplay: false,
            });
        }
        ///////////////////////////////////////////FADE UP////////////////////////////////////////////////
    fadeup(obj, time, value) {
        return anime({
            targets: obj,
            translateY: [{ value: value, duration: time }],
            opacity: [{ value: 1, duration: time }],
            easing: 'easeInOutQuad',
        });
    }

    returnY(obj, value) {
            return anime({
                targets: obj,
                translateY: value,
                opacity: 0
            });
        }
        ///////////////////////////////////////////ROTATE APPEAR////////////////////////////////////////////////
    rotateAppear(obj, time) {
        objects = anime({
            targets: obj,
            opacity: [{ value: 1, duration: time }],
            easing: 'easeInOutQuad',
            rotate: '1turn'
        });
        objects.play();
    }
    toYDelay(obj, delay, duration, value) {
            return anime({
                targets: obj,
                delay: delay,
                opacity: [{ value: 1, duration: duration }],
                translateY: value,
                duration: duration
            })
        }
        ///////////////////////////////////////////toleft delay///////////////////////////////////////
    toXDelay(obj, time, value) {
        return anime({
            targets: obj,
            delay: time,
            opacity: [{ value: 1, duration: time }],
            translateX: value,
        })
    }

    moveHorizontalDelay(obj, delay, duration, value) {
        return anime({
            targets: obj,
            delay: delay,
            opacity: [{ value: 1, duration: duration }],
            translateX: value,
            easing: 'easeInOutExpo'
        })
    }

    moveVerticalDelay(obj, delay, duration, value) {
        return anime({
            targets: obj,
            delay: delay,
            opacity: [{ value: 1, duration: duration }],
            duration: duration,
            translateY: value,
            easing: 'easeInOutExpo'
        })
    }


    returnX(obj, value) {
        return anime({
            targets: obj,
            translateX: value,
            opacity: 0
        });
    }

    fadeShowUp(def) {
        return anime({
            targets: def,
            opacity: [{ value: 1, duration: 1000 }],
            easing: 'easeInOutQuad',
        });
    }

    off(def) {
        return anime({
            targets: def,
            opacity: 0,
        });
    }

    appearDelay(obj, duration, delay) {
        return anime({
            targets: obj,
            opacity: [{ value: 1, duration: duration }],
            easing: 'easeInOutQuad',
            delay: delay
        });
    }
    moveEasingLR(targets, delay, value) {
        return anime({
            targets: targets,
            translateX: { value: value, delay: 0 },
            direction: 'alternate',
            loop: true,
            delay: delay,
            easing: 'linear'
        });
    }
    moveEasingUD(targets, delay, value) {
        return anime({
            targets: targets,
            translateY: { value: value, delay: 0 },
            direction: 'alternate',
            loop: true,
            delay: delay,
            autoplay: false,
            easing: 'linear'
        });
    }

}