const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorBtn = document.getElementById('color');
const clearBtn = document.getElementById('clear');


let isPressed = false;
let size = 10;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', e => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    console.log(isPressed, x, y);
});

canvas.addEventListener('mouseup', e => {
    isPressed = false;
    x = undefined;
    y = undefined;

});

canvas.addEventListener('mousemove', e => {
    if (!isPressed) return;
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
});

increaseBtn.addEventListener('click', e => {
    size += 1;
    if (size >= 50)
        size = 50;
    else
        size += 1;
    sizeEl.innerText = size;
});
decreaseBtn.addEventListener('click', e => {
    if (size > 1)
        size -= 1;
    else
        size = 1;
    sizeEl.innerText = size;
})
colorBtn.addEventListener('change', e => color = e.target.value);
clearBtn.addEventListener('click', e => ctx.clearRect(0, 0, canvas.width, canvas.height));

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

// drawCircle(100, 200);
// drawLine(300, 300, 400, 400);
