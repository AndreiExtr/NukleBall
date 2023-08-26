// Получаем все элементы списка табов
const paginationItems = document.querySelectorAll('.pagination a');

// Добавляем обработчик события клика к каждому элементу списка
paginationItems.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        paginationItems.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});
