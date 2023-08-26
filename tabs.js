// Получаем все элементы списка табов
const tabsItems = document.querySelectorAll('.tabs a');

// Добавляем обработчик события клика к каждому элементу списка
tabsItems.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        tabsItems.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});
