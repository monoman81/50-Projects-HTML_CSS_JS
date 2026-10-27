const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    }
    else if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});