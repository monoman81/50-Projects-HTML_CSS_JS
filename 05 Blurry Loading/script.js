const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let load = 0
let interval = setInterval(blurring, 30)

function blurring() {
    load++;
    if (load > 99)
        clearInterval(interval);
    loadingText.innerText = `${load}%`
    loadingText.style.opacity = `${1 - load / 100}`

    bg.style.filter = `blur(${Math.round(30 * (1 - load / 100))}px)`
}