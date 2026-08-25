const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        document.querySelectorAll(`audio:not([id="${sound}"])`).forEach(s => {
            s.pause()
            s.currentTime = 0
        })
        document.getElementById(sound).play()
    })

    document.getElementById("buttons").appendChild(btn)
})