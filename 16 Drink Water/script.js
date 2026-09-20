const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

const updateBigCup = () => {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    const ratio = fullCups / totalCups;

    if (ratio === 1) {
        remained.style.visibility = 'hidden';
        remained.style.height = '0';
    }
    else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
    remained.querySelector('small').hidden = ratio === 1;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = `0px`;
    }
    else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${ratio * 100}%`;
        percentage.innerText = `${ratio * 100}%`;
    }
}

updateBigCup();

const highlightCups = (index) => {
    if (smallCups[index].classList.contains('full') && (index === smallCups.length || !smallCups[index].nextElementSibling.classList.contains('full')))
        index--;
    smallCups.forEach((cup, idx) => {
        if (idx <= index)
            cup.classList.add('full');
        else
            cup.classList.remove('full');
    });
    updateBigCup();
}

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
});



