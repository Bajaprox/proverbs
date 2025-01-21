// JavaScript for slider animation (example)
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
