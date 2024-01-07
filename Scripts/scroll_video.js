const sliderV = document.querySelector('.sliderV');
const scrollLeftV = document.querySelector('.scroll-leftV');
const scrollRightV = document.querySelector('.scroll-rightV');
const slidVs = document.querySelectorAll('.slidV');
const slidVWidth = slidVs[0].offsetWidth + 20; // Учтите отступ между карточками
const animationDurationV = 200; // Длительность анимации в миллисекундах

let currentIndexV = 0;
let isAnimatingV = false;

scrollLeftV.addEventListener('click', () => {
  if (currentIndexV > 0 && !isAnimatingV) {
    currentIndexV--;
    animateSliderV();
  } else if (currentIndexV === 0) {
    // Если первая карточка видима, остановите анимацию
    isAnimatingV = false;
  }
});

scrollRightV.addEventListener('click', () => {
  const containerWidth = sliderV.offsetWidth;
  const numVisibleSlidVs = Math.floor(containerWidth / slidVWidth);

  if (currentIndexV < slidVs.length - numVisibleSlidVs && !isAnimatingV) {
    currentIndexV++;
    animateSliderV();
  } else if (currentIndexV >= slidVs.length - numVisibleSlidVs) {
    // Если последняя карточка видима, остановите анимацию
    isAnimatingV = false;
  }
});

function animateSliderV() {
  const startTime = performance.now();
  const initialX = -currentIndexV * slidVWidth;

  function step(currentTime) {
    const progress = (currentTime - startTime) / animationDuration;

    if (progress < 1) {
      const newX = initialX - progress * slidVWidth;
      sliderV.style.transform = `translateX(${newX}px)`;
      requestAnimationFrame(step);
    } else {
      sliderV.style.transform = `translateX(${initialX}px)`;
      isAnimatingV = false;
    }
  }

  isAnimatingV = true;
  requestAnimationFrame(step);
}
