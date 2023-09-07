
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
  } else if (currentIndex === 0) {
    // Если первая карточка видима, остановите анимацию
    isAnimating = false;
  }
});

scrollRight.addEventListener('click', () => {
  const containerWidth = slider.offsetWidth;
  const numVisibleSlids = Math.floor(containerWidth / slidWidth);

  if (currentIndex < slids.length - numVisibleSlids && !isAnimating) {
    currentIndex++;
    animateSlider();
  } else if (currentIndex >= slids.length - numVisibleSlids) {
    // Если последняя карточка видима, остановите анимацию
    isAnimating = false;
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

