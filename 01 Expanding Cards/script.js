const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
        const currentPanel = e.target;
        const panelActive = document.querySelector('.active');
        if (currentPanel.classList.value.includes('active')) return;
        panelActive.classList.remove('active');
        currentPanel.classList.add('active');
    })
})