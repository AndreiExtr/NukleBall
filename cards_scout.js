// Для первого сайта (index.html)
const cardSs = document.querySelectorAll('.card_scout'); // Выбираем все элементы с классом 'card'

cardSs.forEach(cardS => {
    cardS.addEventListener('click', function() {
        // Перейти на второй сайт
        window.location.href = 'scout.html'; // Замените на URL второго сайта
    });
});
