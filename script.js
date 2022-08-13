const all = document.querySelector('*');
const body = document.querySelector('body');

body.addEventListener('dblclick', (e) => {
    e.preventDefault();
    all.classList.toggle('dark-mode');
});