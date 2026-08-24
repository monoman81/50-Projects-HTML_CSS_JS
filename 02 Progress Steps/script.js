const progress = document.getElementById('progress')
const btnNext = document.getElementById('next')
const btnPrev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;
let steps = circles.length;
let stepPctRate = 100 / (steps - 1);

btnNext.addEventListener('click', () => {
    currentActive++;
    if (currentActive >= steps) {
        currentActive = steps;
        btnNext.disabled = true;
    }
    circles[currentActive - 1].classList.add('active');
    progress.style.width = `${(currentActive - 1) * stepPctRate}%`;
    btnPrev.disabled = false;
});

btnPrev.addEventListener('click', () => {
    circles[currentActive - 1].classList.remove('active');
    progress.style.width = `${100 - (steps - currentActive + 1) * stepPctRate}%`;
    currentActive--;
    if (currentActive <= 1) {
        currentActive = 1;
        btnPrev.disabled = true;
    }
    btnNext.disabled = false;
});