const all = document.querySelector('*');
const body = document.querySelector('body');
const navDots = document.querySelectorAll('.dots');
const works = document.querySelectorAll('.work');
const worksContainer = document.querySelector('.work-experience');
let start;
let end;
let count = 0;

const moveIt = () => {
  if (start > end) count--;
  if (start < end) count++;
  works.forEach(work => work.style.transform = `translateX(${count}00%)`);
};

body.addEventListener('dblclick', (e) => {
    e.preventDefault();
    all.classList.toggle('dark-mode');
});

works.forEach(work => work.addEventListener('touchstart', (e) => start = e.touches[0].pageX));
works.forEach(work => work.addEventListener('touchmove', (e) => end = e.touches[0].pageX));
works.forEach(work => work.addEventListener('touchend', moveIt));