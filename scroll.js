

// const slider = document.querySelector('.slider');
// const scrollLeft = document.querySelector('.scroll-left');
// const scrollRight = document.querySelector('.scroll-right');

// let currentIndex = 0;

// scrollLeft.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateSlider();
//   }
// });

// scrollRight.addEventListener('click', () => {
//   if (currentIndex < slider.children.length - 1) {
//     currentIndex++;
//     updateSlider();
//   }
// });

// function updateSlider() {
//   const translateX = -currentIndex * (slider.offsetWidth + 5); // Учтите отступ между карточками
//   slider.style.transform = `translateX(${translateX}px)`;
// }


const slider = document.querySelector('.slider');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');
const slids = document.querySelectorAll('.slid');
const slidWidth = slids[0].offsetWidth + 20; // Учтите отступ между карточками
const animationDuration = 200; // Длительность анимации в миллисекундах

let currentIndex = 0;
let isAnimating = false;

scrollLeft.addEventListener('click', () => {
  if (currentIndex > 0 && !isAnimating) {
    currentIndex--;
    animateSlider();
  }
});

scrollRight.addEventListener('click', () => {
  if (currentIndex < slids.length - 1 && !isAnimating) {
    currentIndex++;
    animateSlider();
  }
});

function animateSlider() {
  const startTime = performance.now();
  const initialX = -currentIndex * slidWidth;

  function step(currentTime) {
    const progress = (currentTime - startTime) / animationDuration;

    if (progress < 1) {
      const newX = initialX - progress * slidWidth;
      slider.style.transform = `translateX(${newX}px)`;
      requestAnimationFrame(step);
    } else {
      slider.style.transform = `translateX(${initialX}px)`;
      isAnimating = false;
    }
  }

  isAnimating = true;
  requestAnimationFrame(step);
}