const progress = document.getElementById('progress')
const btnNext = document.getElementById('next')
const btnPrev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;
let steps = circles.length;

btnNext.addEventListener('click', () => {
    currentActive++;
    if (currentActive >= steps) {
        currentActive = steps;
        btnNext.disabled = true;
    }
    circles[currentActive - 1].classList.add('active');
    progress.style.width = `${(currentActive - 1) * 33.333333}%`;
    console.log(progress.width);
    btnPrev.disabled = false;
});

btnPrev.addEventListener('click', () => {
    circles[currentActive - 1].classList.remove('active');
    progress.style.width = `${100 - (steps - currentActive + 1) * 33.333333}%`;
    currentActive--;
    if (currentActive <= 1) {
        currentActive = 1;
        btnPrev.disabled = true;
    }
    btnNext.disabled = false;
});