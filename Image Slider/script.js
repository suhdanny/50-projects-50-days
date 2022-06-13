const slides = document.querySelectorAll('.slide');
const rightArrow = document.getElementById('right');
const leftArrow = document.getElementById('left');
const radioButtons = document.querySelectorAll('.radio');

rightArrow.addEventListener('click', () => {
    let currentSlideIndex = getCurrentSlideIndex();
    moveNext(currentSlideIndex);
})

leftArrow.addEventListener('click', () => {
    let currentSlideIndex = getCurrentSlideIndex();
    moveBefore(currentSlideIndex);
})

function getCurrentSlideIndex() {
    let currentSlideIndex;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentSlideIndex = index;
        }
    });
    return currentSlideIndex;
}

function moveNext(currentSlideIndex) {
    removeActiveSlide();
    removeActiveRadio();
    if (currentSlideIndex < slides.length - 1) {
        slides[currentSlideIndex + 1].classList.add('active');
        radioButtons[currentSlideIndex + 1].classList.add('active');
    } else {
        slides[0].classList.add('active');
        radioButtons[0].classList.add('active');
    }
}

function moveBefore(currentSlideIndex) {
    removeActiveSlide();
    removeActiveRadio();
    if (currentSlideIndex != 0) {
        slides[currentSlideIndex - 1].classList.add('active');
        radioButtons[currentSlideIndex - 1].classList.add('active');
    } else {
        slides[slides.length - 1].classList.add('active');
        radioButtons[slides.length - 1].classList.add('active');
    }
}

function removeActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
}

function removeActiveRadio() {
    radioButtons.forEach(radio => {
        radio.classList.remove('active');
    })
}