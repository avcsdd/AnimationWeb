var leftCorrectAnswer = anime({
    targets: ['#page30 #left-result-wrapper .correct-answer'],
    opacity: [
        { value: 1, duration: 1000, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var leftWrongAnswer = anime({
    targets: ['#page30 #left-result-wrapper .wrong-answer'],
    opacity: [
        { value: 1, duration: 1000, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var centerCorrectAnswer = anime({
    targets: ['#page30 #center-result-wrapper .correct-answer'],
    opacity: [
        { value: 1, duration: 1000, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var centerWrongAnswer = anime({
    targets: ['#page30 #center-result-wrapper .wrong-answer'],
    opacity: [
        { value: 1, duration: 1000, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var rightCorrectAnswer = anime({
    targets: ['#page30 #right-result-wrapper .correct-answer'],
    opacity: [
        { value: 1, duration: 1000, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var rightWrongAnswer = anime({
    targets: ['#page30 #right-result-wrapper .wrong-answer'],
    opacity: [
        { value: 1, duration: 1000, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

$('#page30 .check').click(function (event) {
    event.stopPropagation();
    var table = $(this).closest('table')
    $(table).find('.checked').attr('hidden', true);
    $(table).find('.check').removeAttr('hidden');
    $(this).attr('hidden', true);
    $(this).next().removeAttr('hidden')
})

$('#page30 .checked').click(function (event) {
    event.stopPropagation();
    $(this).attr('hidden', true);
    $(this).prev().removeAttr('hidden')
})

$('#page30 #submit-image').click(function () {
    $('#page30 .correct-answer').attr('hidden', true)
    $('#page30 .wrong-answer').attr('hidden', true)
    var ans1 = $('#page30 #left-question-wrapper').find('.checked:not(:hidden)').attr('value')
    var ans2 = $('#page30 #center-question-wrapper').find('.checked:not(:hidden)').attr('value')
    var ans3 = $('#page30 #right-question-wrapper').find('.checked:not(:hidden)').attr('value')
    if (ans1 == 'r'){
        $('#page30 #left-result-wrapper .correct-answer').removeAttr('hidden')
        leftCorrectAnswer.play();
    }
    if (ans1 != 'r'){
        $('#page30 #left-result-wrapper .wrong-answer').removeAttr('hidden')
        leftWrongAnswer.play();
    }
    if (ans2 == '2'){
        $('#page30 #center-result-wrapper .correct-answer').removeAttr('hidden')
        centerCorrectAnswer.play();
    }
    if (ans2 != '2'){
        $('#page30 #center-result-wrapper .wrong-answer').removeAttr('hidden')
        centerWrongAnswer.play();
    }
    if (ans3 == 'true'){
        $('#page30 #right-result-wrapper .correct-answer').removeAttr('hidden')
        rightCorrectAnswer.play();
    }
    if (ans3 != 'true'){
        $('#page30 #right-result-wrapper .wrong-answer').removeAttr('hidden')
        rightWrongAnswer.play();
    }
})