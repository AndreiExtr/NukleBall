// Объединенный файл

// БОКОВОЕ МЕНЮ
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


// ПЕРЕХОД НА СТРАНИЦУ ИГРОКА ПО КЛИКЕ НА КАРТОЧКУ
const cards = document.querySelectorAll('.card_gamer'); // Выбираем все элементы с классом 'card'
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Перейти на второй сайт
        window.location.href = 'gamer.html'; // Замените на URL второго сайта
    });
});


// ПЕРЕХОД НА СТРАНИЦУ СКАУТА ПО КЛИКЕ НА КАРТОЧКУ
const cardSs = document.querySelectorAll('.card_scout'); // Выбираем все элементы с классом 'card'
cardSs.forEach(cardS => {
    cardS.addEventListener('click', function() {
        // Перейти на второй сайт
        window.location.href = 'scout.html'; // Замените на URL второго сайта
    });
});


// ПАГИНАЦИЯ
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



