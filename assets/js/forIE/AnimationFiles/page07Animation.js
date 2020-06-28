"use strict";

////////////////////////////////////FOR PAGE 07/////////////////////////////////////////
var temp;
const selectedMapImage = new Map([["Small12CirclePage7", ["Artboard 65 copy 9@6x.png", "selectedCircle12Page7.png"]], ["Small03CirclePage7", ["Artboard 65 copy 7@6x.png", "selectedCircle03Page7.png"]], ["Small05CirclePage7", ["Artboard 65 copy 11@6x.png", "selectedCircle05Page7.png"]], ["Small07CirclePage7", ["Artboard 65 copy 12@6x.png", "selectedCircle07Page7.png"]], ["Small09CirclePage7", ["Artboard 65 copy 13@6x.png", "selectedCircle09Page7.png"]]]);
const selectedMapContent = new Map([["Circle12Page7", ["bigCircle12SelectedPage7.png", "If you have applied<br/> for a trade mark but<br/> it is not yet registered,<br/> or even if you have not<br/> applied but are using the<br/> trade mark, the TM<br/> abbreviation can be used to<br/> assert your rightsover<br/> the trade mark."]], ["Circle03Page7", ["bigCircle03SelectedPage7.png", "This can be<br/> combined with the<br/> year of creation or<br/> publication to assert<br/> copyright ownership over<br/> works such as brochures,<br/> websites, software,<br/> pictures, music,<br/> etc."]], ["Circle05Page7", ["bigCircle05SelectedPage7.png", "If the patent<br/> application has<br/> been made but<br/> has not yet been<br/> granted, this phrase<br/> can be used."]], ["Circle07Page7", ["bigCircle07SelectedPage7.png", "Once the patent<br/> is granted,<br/> usually the patent<br/> number and<br/> jurisdiction are used to<br/> show where the patent<br/> was issued."]], ["Circle09Page7", ["bigCircle09SelectedPage7.png", "This symbol can<br/> only be used for<br/> registered trade marks.<br/> It can be a criminal<br/> offence to use this symbol<br/> if the trade mark is not<br/> registered (prosecutions are,<br/> however, very rare)."]]]);
var firstClickCirclePage7 = false;
$(".CirclePage7").click(function () {
  if ($(this).hasClass('Circle12Page7') == true) {
    carouselJumpTo(7);
  } else if ($(this).hasClass('Circle03Page7') == true) {
    carouselJumpTo(8);
  } else if ($(this).hasClass('Circle05Page7') == true) {
    carouselJumpTo(9);
  } else if ($(this).hasClass('Circle07Page7') == true) {
    carouselJumpTo(10);
  } else if ($(this).hasClass('Circle09Page7') == true) {
    carouselJumpTo(11);
  }
});
$(".CirclePage7").children().hover(function () {
 var selected = $(this).parent();
  if ($(selected).hasClass('selected-circle') == false) {
    var select = $(selected).children()[0];
    $(select).attr("src", "../assets/images/07/" + selectedMapImage.get($(select).attr('c-number'))[1]);
  }
});
$(".CirclePage7").children().mouseout(function () {
  var selected = $(this).parent();
  if ($(selected).hasClass('selected-circle') == false) {
    var select = $(selected).children()[0];
    $(select).attr("src", "../assets/images/07/" + selectedMapImage.get($(select).attr('c-number'))[0]);
  }
});