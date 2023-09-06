const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');
const cardsContainer = document.querySelector('.slider');

scrollLeftButton.addEventListener('click', () => {
  cardsContainer.scrollBy({
    left: -300, // Скроллируем влево на ширину карточки
    behavior: 'smooth', // Плавный скроллинг
  });
});

scrollRightButton.addEventListener('click', () => {
  cardsContainer.scrollBy({
    left: 300, // Скроллируем вправо на ширину карточки
    behavior: 'smooth', // Плавный скроллинг
  });
});