var leftCorrectAnswer = anime({
    targets: ['#page30 #left-result-wrapper .correct-answer'],
    opacity: [
        { value: 1, duration: 500, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var leftWrongAnswer = anime({
    targets: ['#page30 #left-result-wrapper .wrong-answer'],
    opacity: [
        { value: 1, duration: 500, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var centerCorrectAnswer = anime({
    targets: ['#page30 #center-result-wrapper .correct-answer'],
    opacity: [
        { value: 1, duration: 500, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var centerWrongAnswer = anime({
    targets: ['#page30 #center-result-wrapper .wrong-answer'],
    opacity: [
        { value: 1, duration: 500, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var rightCorrectAnswer = anime({
    targets: ['#page30 #right-result-wrapper .correct-answer'],
    opacity: [
        { value: 1, duration: 500, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var rightWrongAnswer = anime({
    targets: ['#page30 #right-result-wrapper .wrong-answer'],
    opacity: [
        { value: 1, duration: 500, easing: 'easeInCubic' }
    ],
    autoplay: false,
});

var correctAnswerBouncing = anime({
    targets: ['#page30 img.correct-answer'],
    translateY: [
        { value: 5, duration: 500, easing: 'easeOutQuad' },
        { value: 0, duration: 500, easing: 'easeInQuad' },
    ],
    loop: true,
    autoplay: false,
});

var wrongAnswerBouncing = anime({
    targets: ['#page30 img.wrong-answer'],
    translateX: [
        { value: 5, duration: 500, easing: 'easeOutQuad' },
        { value: 0, duration: 500, easing: 'easeInQuad' },
    ],
    loop: true,
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
    setTimeout(correctAnswerBouncing.play(), 500)
    setTimeout(wrongAnswerBouncing.play(), 500)
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

class AnimationPage30 {
    leftQuestionWrapper = anime({
        targets: '#left-question-wrapper',
        opacity: [
            { value: 0 },
            { value: 1, delay: 1, duration: 500, easing: 'easeInCubic' },
        ],
        autoplay: false,
    })
    
    centerQuestionWrapper = anime({
        targets: '#center-question-wrapper',
        opacity: [
            { value: 0 },
            { value: 1, duration: 500, delay: 500, easing: 'easeInCubic' },
        ],
        autoplay: false,
    })

    rightQuestionWrapper = anime({
        targets: '#right-question-wrapper',
        opacity: [
            { value: 0 },
            { value: 1, duration: 500, delay: 1000, easing: 'easeInCubic' },
        ],
        autoplay: false,
    })
    
    submitButton = anime({
        targets: '#submit-image',
        translateX: [
            { value: -10, duration: 500, easing: 'easeInCubic' },
            { value: 0, duration: 500, easing: 'easeInCubic' },
        ],
        loop: true,
        autoplay: false,
    })

    run() {
        this.leftQuestionWrapper.restart();
        this.centerQuestionWrapper.restart();
        this.rightQuestionWrapper.restart();
        this.submitButton.restart();
    }

    reverse() {

    }
}
var animationPage30 = new AnimationPage30();
export default animationPage30