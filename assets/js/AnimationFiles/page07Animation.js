$("#objectLeftPage7-whenclick").fadeOut("slow");
const selectedMapImage = new Map([
    ["Small12CirclePage7", ["Artboard 65 copy 9@6x.png", "selectedCircle12Page7.png"]],
    ["Small03CirclePage7", ["Artboard 65 copy 7@6x.png", "selectedCircle03Page7.png"]],
    ["Small05CirclePage7", ["Artboard 65 copy 11@6x.png", "selectedCircle05Page7.png"]],
    ["Small07CirclePage7", ["Artboard 65 copy 12@6x.png", "selectedCircle07Page7.png"]],
    ["Small09CirclePage7", ["Artboard 65 copy 13@6x.png", "selectedCircle09Page7.png"]]
]);
const selectedMapContent = new Map([
    ["Circle12Page7", ["bigCircle12SelectedPage7.png", "If you have applied<br/> for a trade mark but<br/> it is not yet registered,<br/> or even if you have not<br/> applied but are using the<br/> trade mark, the TM<br/> abbreviation can be used to<br/> assert your rightsover<br/> the trade mark."]],
    ["Circle03Page7", ["bigCircle03SelectedPage7.png", "This can be<br/> combined with the<br/> year of creation or<br/> publication to assert<br/> copyright ownership over<br/> works such as brochures,<br/> websites, software,<br/> pictures, music,<br/> etc."]],
    ["Circle05Page7", ["bigCircle05SelectedPage7.png", "If the patent<br/> application has<br/> been made but<br/> has not yet been<br/> granted, this phrase<br/> can be used."]],
    ["Circle07Page7", ["bigCircle07SelectedPage7.png", "Once the patent<br/> is granted,<br/> usually the patent<br/> number and<br/> jurisdiction are used to<br/> show where the patent<br/> was issued."]],
    ["Circle09Page7", ["bigCircle09SelectedPage7.png", "This symbol can<br/> only be used for<br/> registered trade marks.<br/> It can be a criminal<br/> offence to use this symbol<br/> if the trade mark is not<br/> registered (prosecutions are,<br/> however, very rare)."]]
]);
var firstClickCirclePage7 = false;
$(".CirclePage7").click(async function() {
    let selected = $(this).find("img")[0];
    for ([key, value] of selectedMapImage.entries()) {
        $("#" + key).attr("src", "../assets/images/07/" + value[0])
    }
    $("#selectedContent #content").empty()
    $("#selectedContent #content").append(selectedMapContent.get($(this).attr("id"))[1])
    $("#selectedContent").css("background-image", "url(../assets/images/07/" + selectedMapContent.get($(this).attr("id"))[0] + ")")
    $("#messageCirclePage7").fadeOut("slow");
    $("#selectedContent").attr("hidden", false);
    $("#" + $(selected).attr("id")).attr("src", "../assets/images/07/" + selectedMapImage.get($(selected).attr('id'))[1])
    fadeShowUp("#selectedContent");
    if (firstClickCirclePage7 == false) {
        $("#objectLeftPage7").fadeOut("slow");
        await new Promise(r => setTimeout(r, 500));
        $("#objectLeftPage7-whenclick").show("slow");
        // await new Promise(r => setTimeout(r, 100));
        toXDelay(["#arrowPage7", "#messageArrowPage7"], 200, 70);
        firstClickCirclePage7 = true;
    }
});
//////////////////////////////////////////////////////////////////////////

$('#carouselExampleControls').bind('slid.bs.carousel', function(e) {
    var ele = $('#carouselExampleControls .carousel-indicators li.active');
    var pageIndex = ele.data('value');
    if (pageIndex == 6) {
        // typewriter.type();
        fadeShowUp("#backgroundGirlPage7")
        appear("#girlPage7", 1200)
        appear("#messageCirclePage7", 1000)
        fadeup("#tablePage7", 1000, -20)
        fadeup("#laptopPage7", 1300, -193)
        appear("#balloonsPage7", 1500)
        appear("#messagePage7", 1500)
        appear("#bigCirclePage7", 1000)
        zoomInAppear(["#Circle12Page7 *", "#Circle03Page7 *", "#Circle05Page7 *", "#Circle07Page7 *", "#Circle09Page7 *"], 1, 500, false, false)
    } else {
        firstClickCirclePage7 = false;
        returnX("#arrowPage7", -70);
        returnX("#messageArrowPage7", -70);
        off("#messagePage7")
        off("#girlPage7")
        off("#bigCirclePage7")
        off("#messageCirclePage7")
        off("#backgroundGirlPage7")
        returnY("#tablePage7", 20)
        returnY("#laptopPage7", 193)
        off("#balloonsPage7")
        $("#objectLeftPage7-whenclick").fadeOut("slow")
        $("#objectLeftPage7").fadeIn("slow");
        $("#messageCirclePage7").fadeIn("slow");
        $("#selectedContent").attr("hidden", true);
        backZoom(["#Circle12Page7 *", "#Circle03Page7 *", "#Circle05Page7 *", "#Circle07Page7 *", "#Circle09Page7 *"])
        for ([key, value] of selectedMapImage.entries()) {
            $("#" + key).attr("src", "../assets/images/07/" + value[0])
        }
    }
});

function zoomInAppear(targets, turn, duration, loop, autoplay) {
    objects = anime({
        targets: targets,
        rotate: { value: turn + 'turn', easing: 'linear', duration: duration },
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
            { value: 1.1, duration: 500, delay: 250, easing: 'easeOutCubic' },
            { value: 1, duration: 500, easing: 'easeInCubic' }
        ],
        autoplay: autoplay,
        loop: loop,
        endDelay: 0,
    });
    objects.play();
}

function backZoom(targets) {
    objects = anime({
        targets: targets,
        scale: [
            { value: 0, duration: 0, easing: 'easeInCubic' },
        ],
    });
    objects.play();
}