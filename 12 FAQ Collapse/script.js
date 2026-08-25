const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        // const currentActive = document.querySelector('.faq.active')
        // console.log(currentActive)
        e.target.parentNode.classList.toggle('active')
    })
})