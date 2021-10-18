let lessonBtns = document.querySelectorAll('.lesson');
let videoLessons = document.querySelectorAll('.video-lesson');
let signTest = document.querySelector('.sign-test');
let lessonTexts = document.querySelectorAll('.lesson-text');
let videoLessonInfoOne = document.querySelector('.video-lesson-info-one');
let textLessonInfoOne = document.querySelector('.text-lesson-info-one');
let testProcess = document.querySelector('.test-process')
let btnResult = document.querySelector('.btn-result');
let result = document.querySelector('.your-result');


lessonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('lessonMaxHeight')
    })
})


videoLessons.forEach(video => {
    video.addEventListener('click', () => {
        textLessonInfoOne.style.display = 'none'
        testProcess.style.display = 'none'
        videoLessonInfoOne.style.display = 'block'
    });
});



lessonTexts.forEach(text => {
    text.addEventListener('click', () => {
        videoLessonInfoOne.style.display = 'none';
        testProcess.style.display = 'none'
        textLessonInfoOne.style.display = 'block';
    });
});

signTest.addEventListener('click', () => {
    textLessonInfoOne.style.display = 'none';
        videoLessonInfoOne.style.display = 'none';
        testProcess.style.display = 'block'
    });

btnResult.addEventListener('click', () => {
    result.style.display = 'block'
})