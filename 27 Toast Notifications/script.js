const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
];

const types = [
    'success',
    'info',
    'error'
]

const Notificate = (message = null, type = null) => {
    const notification = document.createElement('DIV');
    notification.classList.add('toast');
    notification.classList.add(type ? type : types[Math.floor(Math.random() * types.length)]);
    notification.textContent = message ? message : messages[Math.floor(Math.random() * messages.length)];
    toasts.appendChild(notification); //appendChild(notification);
    setTimeout(() => {
        notification.classList.add('show');
    }, 0);

    setTimeout(() => {
        notification.classList.remove('show');
        notification.addEventListener('transitionend', () => notification.remove(), {once: true});
        setTimeout(() => notification.remove(), 600);
    }, 3000);
}

button.addEventListener('click', () => Notificate());