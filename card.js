// Для первого сайта (index.html)
const cards = document.querySelectorAll('.card_gamer'); // Выбираем все элементы с классом 'card'

cards.forEach(card => {
    cards.addEventListener('click', function() {
        // Перейти на второй сайт
        window.location.href = 'page8.html'; // Замените на URL второго сайта
    });
});


// const card = document.getElementById('card');
// const pageDiv = document.getElementById('page8');

// card.addEventListener('click', function() {
//     // Загрузка контента другой страницы
//     loadContent('second_page.html');
// });

// function loadContent(url) {
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text();
//         })
//         .then(data => {
//             pageDiv.innerHTML = data;
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

// function goToPage(page8) {
//     window.location.href = page8;
// }