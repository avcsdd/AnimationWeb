modalOpen = (object) => {
    modalAttribute = {}
        //
    index = parseInt($(object).data("id"))
    var card = $('#cardWrapperP18 div:nth-child(' + index + ')')
    var cardBox = $(card).children(".cardBoxP18")
    modalAttribute["title"] = cardBox.children('span').html().replace("<br>", "")
    modalAttribute["imagePath"] = cardBox.children('img').attr("src")
    switch (index) {
        case 1:
            modalAttribute["content"] = "This letter simply provides the infringer with <b>notice of your IP rights</b>. You may wish to also include a statement stating that you would be willing to discuss the issue or offer to license the IP to them. This is considered to be a softer approach and is often used when there is no strong evidence of infringement. It may be possible to send such a letter on the letterhead of the IP owner (i.e. without instructing lawyers).";
            modalAttribute["imageWidth"] = 70
            modalAttribute["imageHeight"] = 70
            modalAttribute["imageMarginTop"] = 12
            modalAttribute["textPaddingRight"] = 7.5;
            modalAttribute["textPaddingTop"] = 3;
            modalAttribute["textPaddingLeft"] = 2;
            break;
        case 2:
            modalAttribute["imagePath"] = "../assets/images/20/Artboard 65 copy@6x.png"
            modalAttribute["imageWidth"] = 84
            modalAttribute["imageHeight"] = 72
            modalAttribute["imageMarginTop"] = 8
            modalAttribute["textPaddingRight"] = 6;
            modalAttribute["textPaddingTop"] = 3;
            modalAttribute["textPaddingLeft"] = 2;
            modalAttribute["content"] = "This letter will usually threaten legal proceedings and demand that the infringer ceases and desists from infringing the IP in question. It is possible to ask for damages and legal costs in such letters. The letter may be accompanied by a form of settlement agreement known as ‘undertakings’ to contractually bind the infringer by the settlement terms. Usually lawyers are instructed to send these letters.";
            break;
        case 4:
            modalAttribute["imageWidth"] = 90
            modalAttribute["imageHeight"] = 55
            modalAttribute["imageMarginTop"] = 16
            modalAttribute["textPaddingRight"] = 8.45;
            modalAttribute["textPaddingTop"] = 5;
            modalAttribute["textPaddingLeft"] = 4;
            modalAttribute["content"] = "It may be that the infringer is sourcing infringing materials from a larger supplier in another country. An investigation might help to provide you with information about their customers and network. Your local lawyer or business partner may be able to assist with an investigation. There are many investigation companies specialising in IP across South-East Asia.";
            break;
        case 5:
            modalAttribute["imageWidth"] = 100
            modalAttribute["imageHeight"] = 50
            modalAttribute["imageMarginTop"] = 24
            modalAttribute["textPaddingRight"] = 8.45;
            modalAttribute["textPaddingTop"] = 3;
            modalAttribute["textPaddingLeft"] = 4;
            modalAttribute["textMarginLeft"] = 2;
            modalAttribute["imagePath"] = "../assets/images/23/Artboard 66 copy 6@6x.png";
            modalAttribute["content"] = "This is often a last resort. Legal actions are not as costly in South-East Asia as in Europe, but they are still a significant drain on resources, particularly for an SME. Both criminal and civil actions may be available to the IP owner for injunctions and damages. Awards from the court to recover legal costs are generally very rare in South-East Asia. Local legal advice is essential.";
            break;
        case 6:
            modalAttribute["imageWidth"] = 100
            modalAttribute["imageHeight"] = 70
            modalAttribute["imageMarginTop"] = 12
            modalAttribute["textPaddingRight"] = 7.5;
            modalAttribute["textPaddingTop"] = 3;
            modalAttribute["textPaddingLeft"] = 5;
            modalAttribute["content"] = "Some countries in South-East Asia will offer mediation or arbitration services, which can be an efficient way of resolving certain IP disputes. The arbitration services offered by the Singapore International Arbitration Centre (SIAC) are considered to be the most viable and most commonly used option by the lawyers based in the South-East Asia region.";
            break;
        default:
            break;
    }
    updateModal(modalAttribute)
}

$(".buttonClickHere18").click(function() {
    $(".cardP18").fadeOut("slow");
})
$(".close").click(function() {
    $(".cardP18").fadeIn("slow");
})
updateModal = data => {
    var modalContent = $("#modal-contentP18")
        // add title for modal
    var modalHeader = $(modalContent).children("#modal-headerP18").children("h5")
    $(modalHeader).html(data["title"])
    var modalBody = $(modalContent).children("#modal-bodyP18")
        // add source image to modal
    var imageModal = $(modalBody).children("#imageCardModelContainerP18").children("img")
    $(imageModal).attr("src", modalAttribute["imagePath"])
        //
    var bodyTextModal = $(modalBody).children("#textCardModelP18")
    console.log(bodyTextModal.html())
    bodyTextModal.html(data["content"])
    $("#textCardModelP18").css("padding-right", data["textPaddingRight"] + "%")
    $("#textCardModelP18").css("padding-top", data["textPaddingTop"] + "%")
    $("#textCardModelP18").css("padding-left", data["textPaddingLeft"] + "%")
    $("#imageCardModelP18").css("height", data["imageHeight"] + "%")
    $("#imageCardModelP18").css("width", data["imageWidth"] + "%")
    $("#imageCardModelP18").css("margin-top", data["imageMarginTop"] + "%")
    console.log(data["textMarginLeft"])
    if (data["textMarginLeft"] != undefined) {
        $("#textCardModelP18").css("margin-left", data["textMarginLeft"] + "%")
    }
}