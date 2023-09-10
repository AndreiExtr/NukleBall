const sliderM = document.querySelector('.sliderM');
const scrollLeftM = document.querySelector('.scroll-leftM');
const scrollRightM = document.querySelector('.scroll-rightM');
const slidMs = document.querySelectorAll('.slidM');
const slidMWidth = slidMs[0].offsetWidth + 20; // Учтите отступ между карточками
const animationDurationM = 200; // Длительность анимации в миллисекундах

let currentIndexM = 0;
let isAnimatingM = false;

scrollLeftM.addEventListener('click', () => {
  if (currentIndexM > 0 && !isAnimatingM) {
    currentIndexM--;
    animateSliderM();
  } else if (currentIndexM === 0) {
    // Если первая карточка видима, остановите анимацию
    isAnimatingM = false;
  }
});

scrollRightM.addEventListener('click', () => {
  const containerWidth = sliderM.offsetWidth;
  const numVisibleSlidMs = Math.floor(containerWidth / slidMWidth);

  if (currentIndexM < slidMs.length - numVisibleSlidMs && !isAnimatingM) {
    currentIndexM++;
    animateSliderM();
  } else if (currentIndexM >= slidMs.length - numVisibleSlidMs) {
    // Если последняя карточка видима, остановите анимацию
    isAnimatingM = false;
  }
});

function animateSliderM() {
  const startTime = performance.now();
  const initialX = -currentIndexM * slidMWidth;

  function step(currentTime) {
    const progress = (currentTime - startTime) / animationDuration;

    if (progress < 1) {
      const newX = initialX - progress * slidMWidth;
      sliderM.style.transform = `translateX(${newX}px)`;
      requestAnimationFrame(step);
    } else {
      sliderM.style.transform = `translateX(${initialX}px)`;
      isAnimatingM = false;
    }
  }

  isAnimatingM = true;
  requestAnimationFrame(step);
}
