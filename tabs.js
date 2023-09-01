// Получаем все элементы списка TABS1
const tabs1Items = document.querySelectorAll('.tabs1 a');

// Добавляем обработчик события клика к каждому элементу списка
tabs1Items.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        tabs1Items.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});


// Получаем все элементы списка TABS2
const tabs2Items = document.querySelectorAll('.tabs2 a');

// Добавляем обработчик события клика к каждому элементу списка
tabs2Items.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        tabs2Items.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});


// Получаем все элементы списка TABS3
const tabs3Items = document.querySelectorAll('.tabs3 a');

// Добавляем обработчик события клика к каждому элементу списка
tabs3Items.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        tabs3Items.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});