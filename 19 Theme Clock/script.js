const btnDark = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

btnDark.addEventListener('click', (e) => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark'))
        e.target.innerHTML = 'Light Mode';
    else
        e.target.innerHTML = 'Dark Mode';
})

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const setTime = () => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours() + time.getMinutes() / 60 + time.getSeconds() / 3600;
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes() + time.getSeconds() / 60;
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursForClock * 30}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`;

    timeEl.innerHTML =  `${Math.floor(hoursForClock)}:${minutes < 10 ? '0' : ''}${Math.floor(minutes)} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${day}</span>`;
}

setTime();
setInterval(setTime, 1000);