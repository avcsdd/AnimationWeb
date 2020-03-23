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
        ///////////////////////////////////////////toleft delay///////////////////////////////////////
    toXDelay(obj, time, value) {
        return anime({
            targets: obj,
            delay: time,
            opacity: [{ value: 1, duration: time }],
            translateX: value,
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
        objects = anime({
            targets: obj,
            opacity: [{ value: 1, duration: duration }],
            easing: 'easeInOutQuad',
            delay: delay
        });
        objects.play();
    }
}


//////////////////////////////////////FOR PAGE 07/////////////////////////////////////////
// $("#objectLeftPage7-whenclick").fadeOut();
// var ani = new MyAnimation();
// const selectedMapImage = new Map([
//     ["Small12CirclePage7", ["Artboard 65 copy 9@6x.png", "selectedCircle12Page7.png"]],
//     ["Small03CirclePage7", ["Artboard 65 copy 7@6x.png", "selectedCircle03Page7.png"]],
//     ["Small05CirclePage7", ["Artboard 65 copy 11@6x.png", "selectedCircle05Page7.png"]],
//     ["Small07CirclePage7", ["Artboard 65 copy 12@6x.png", "selectedCircle07Page7.png"]],
//     ["Small09CirclePage7", ["Artboard 65 copy 13@6x.png", "selectedCircle09Page7.png"]]
// ]);
// const selectedMapContent = new Map([
//     ["Circle12Page7", ["bigCircle12SelectedPage7.png", "If you have applied<br/> for a trade mark but<br/> it is not yet registered,<br/> or even if you have not<br/> applied but are using the<br/> trade mark, the TM<br/> abbreviation can be used to<br/> assert your rightsover<br/> the trade mark."]],
//     ["Circle03Page7", ["bigCircle03SelectedPage7.png", "This can be<br/> combined with the<br/> year of creation or<br/> publication to assert<br/> copyright ownership over<br/> works such as brochures,<br/> websites, software,<br/> pictures, music,<br/> etc."]],
//     ["Circle05Page7", ["bigCircle05SelectedPage7.png", "If the patent<br/> application has<br/> been made but<br/> has not yet been<br/> granted, this phrase<br/> can be used."]],
//     ["Circle07Page7", ["bigCircle07SelectedPage7.png", "Once the patent<br/> is granted,<br/> usually the patent<br/> number and<br/> jurisdiction are used to<br/> show where the patent<br/> was issued."]],
//     ["Circle09Page7", ["bigCircle09SelectedPage7.png", "This symbol can<br/> only be used for<br/> registered trade marks.<br/> It can be a criminal<br/> offence to use this symbol<br/> if the trade mark is not<br/> registered (prosecutions are,<br/> however, very rare)."]]
// ]);
// var messageArrow = ani.toXDelay(["#arrowPage7", "#messageArrowPage7"], 200, 70);
// // var selectedContent = ani.fadeShowUp("#selectedContent");
// $(".CirclePage7").click(async function() {
//     // var firstClickCirclePage7 = false;
//     let selected = $(this).find("img")[0];
//     for (let [key, value] of selectedMapImage.entries()) {
//         $("#" + key).attr("src", "../assets/images/07/" + value[0])
//     }
//     $("#selectedContent #content").empty()
//     $("#selectedContent #content").append(selectedMapContent.get($(this).attr("id"))[1])
//     $("#selectedContent").css("background-image", "url(../assets/images/07/" + selectedMapContent.get($(this).attr("id"))[0] + ")")
//     $("#messageCirclePage7").fadeOut("slow");
//     // $("#selectedContent").attr("hidden", false);
//     $("#" + $(selected).attr("id")).attr("src", "../assets/images/07/" + selectedMapImage.get($(selected).attr('id'))[1])
//     $("#selectedContent").fadeOut("slow");
//     // if (firstClickCirclePage7 == false) {
//     $("#objectLeftPage7").fadeOut("slow");
//     // await new Promise(r => setTimeout(r, 500));
//     $("#objectLeftPage7-whenclick").show("slow");
//     // await new Promise(r => setTimeout(r, 100));
//     messageArrow.restart();
//     firstClickCirclePage7 = true;
//     // }
// });