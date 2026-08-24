const boxes = document.querySelectorAll('.box');

const show = () => {
    const triggerBottom = window.innerHeight * 4 / 5
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom)
            box.classList.add('show')
        else
            box.classList.remove('show')
    })
}

window.addEventListener('scroll', show)

show()

