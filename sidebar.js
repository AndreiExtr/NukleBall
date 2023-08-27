// Получаем все элементы списка в боковой панели
const sidebarItems = document.querySelectorAll('.sidebar li');

// Добавляем обработчик события клика к каждому элементу списка
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});





