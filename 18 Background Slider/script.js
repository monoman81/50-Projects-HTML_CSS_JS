const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let activeSlide = 0;

const setBgToBody = () => {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

const setActiveSlide = () => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
    setBgToBody();
}

leftBtn.addEventListener('click', () => {
    if (activeSlide === 0)
        activeSlide = slides.length - 1;
    else
        activeSlide--;
    setActiveSlide();
})

rightBtn.addEventListener('click', () => {
    if (activeSlide === slides.length - 1)
        activeSlide = 0;
    else
        activeSlide++;
    setActiveSlide();
})

setActiveSlide();
//setBgToBody();