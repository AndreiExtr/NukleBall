// Для первого сайта (index.html)
const cards = document.querySelectorAll('.card_gamer'); // Выбираем все элементы с классом 'card'
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Перейти на второй сайт
        window.location.href = 'gamer.html'; // Замените на URL второго сайта
    });
});


// Добавляем обработчик события клика на иконку "назад"
const icon = document.getElementById('icon_left');
icon.addEventListener("click", function(e) {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    history.back(); // Возвращаемся на предыдущую страницу
});
