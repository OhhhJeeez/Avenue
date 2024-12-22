const slidesContainer = document.querySelector('.slider-slides');
const slides = document.querySelectorAll('.slider-slide');
const slide = document.querySelector('.slider-slide');
const nextSlide = document.querySelector('.next');
const prevSlide = document.querySelector('.prev');

let currentSlide = 0;

const totalSlides = slides.length;

let slideWidth;
let computedStyle = window.getComputedStyle(slidesContainer);
let sliderGap;
let visibleSlides;

function calculateSize() {
    slideWidth = slide.offsetWidth;
    sliderGap = Number(computedStyle.gap.match(/\d+/)[0]);
    slideWidth != 486 ? visibleSlides = 1 : visibleSlides = 2;
}

function updateSlidePosition() {
    calculateSize();
    slidesContainer.style.transform = `translateX(-${(currentSlide * (slideWidth + sliderGap)) }px)`;
}

prevSlide.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - visibleSlides;
    updateSlidePosition();
});

nextSlide.addEventListener('click', () => {
    currentSlide = (currentSlide < totalSlides - visibleSlides) ? currentSlide + 1 : 0;
    updateSlidePosition();
});

updateSlidePosition();