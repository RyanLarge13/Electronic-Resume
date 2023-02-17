const all = document.querySelector("*");
const body = document.querySelector("body");
const navDots = document.querySelectorAll(".dot");
const works = document.querySelectorAll(".work");
const worksContainer = document.querySelector(".work-experience");
let start;
let end;
let count = 0;

const color = () => {
  if (all.classList.contains("dark-mode"))
    navDots.forEach((dot) => (dot.style.backgroundColor = "#fff"));
  else
    navDots.forEach((dot) => (dot.style.backgroundColor = "rgba(0, 0, 0, .6)"));
};

const navIndicate = (count) => {
  color();
  navDots[count].style.backgroundColor = "rgba(100, 0, 0, .7";
};

const transWork = (index) => {
  start = 0;
  end = 0;
  count = index;
  moveWorkHistory();
};

const moveIt = () => {
  const gap = 75;
  if (start === undefined || end === undefined || start === 0 || end === 0)
    return;
  if (start - end > gap && count < 4) {
    count++;
    return moveWorkHistory();
  }
  if (end - start > gap && count > 0) {
    count--;
    return moveWorkHistory();
  }
};

const moveWorkHistory = () => {
  works.forEach((work) => (work.style.transition = "500ms ease-in-out"));
  works.forEach((work) => (work.style.transform = `translateX(-${count}00%)`));
  navIndicate(count);
  end = 0;
  start = 0;
};

body.addEventListener("dblclick", (e) => {
  e.preventDefault();
  all.classList.toggle("dark-mode");
  works.forEach((work) => (work.style.transition = "none"));
  navIndicate(count);
});
navDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    transWork(index);
  });
});
navDots[0].style.backgroundColor = "rgba(100, 0, 0, .7";
works.forEach((work) =>
  work.addEventListener("touchstart", (e) => (start = e.touches[0].pageX))
);
works.forEach((work) =>
  work.addEventListener("touchmove", (e) => (end = e.touches[0].pageX))
);
works.forEach((work) =>
  work.addEventListener("touchend", () => {
    moveIt();
  })
);
