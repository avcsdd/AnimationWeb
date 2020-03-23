class Page15nimation {
    boxTextP15 = anime({
            targets: document.querySelectorAll("#boxTextP15"),
            // translateY: [{ value: 410, duration: 1500 }],
            opacity: [{ value: 1, duration: 3000 }],
            // translateX: [{value:250,duration:2000},{value:0,duration:1000}],
            easing: 'easeInOutQuad',
            autoplay: false
        })
        //
    boxTextP15Back = anime({
        targets: document.querySelectorAll("#boxTextP15"),
        // translateY: [{ value: 410, duration: 1500 }],
        opacity: [{ value: 0, duration: 0 }],
        // translateX: [{value:250,duration:2000},{value:0,duration:1000}],
        easing: 'easeInOutQuad',
        autoplay: false
    })
}

var p15Animation = new Page15nimation()

export default p15Animation