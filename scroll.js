// const scrollLeftButton = document.getElementById('scroll-left');
// const scrollRightButton = document.getElementById('scroll-right');
// const cardsContainer = document.querySelector('.slider');

// scrollLeftButton.addEventListener('click', () => {
//   cardsContainer.scrollBy({
//     left: -300, // Скроллируем влево на ширину карточки
//     behavior: 'smooth', // Плавный скроллинг
//   });
// });

// scrollRightButton.addEventListener('click', () => {
//   cardsContainer.scrollBy({
//     left: 300, // Скроллируем вправо на ширину карточки
//     behavior: 'smooth', // Плавный скроллинг
//   });
// });

const slider = document.querySelector('.slider');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

let currentIndex = 0;

scrollLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

scrollRight.addEventListener('click', () => {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

function updateSlider() {
  const translateX = -currentIndex * (slider.offsetWidth + 20); // Учтите отступ между карточками
  slider.style.transform = `translateX(${translateX}px)`;
}