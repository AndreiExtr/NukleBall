
// ПЕРЕКЛЮЧЕНИЯ ПО ВКЛАДКАМ В SIDEBAR
function togglePage(pageId) {
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(page) {
    if (page.id === pageId) {
      page.removeAttribute('hidden');
    } else {
      page.setAttribute('hidden', true);
    }
  });
}

// СОСТОЯНИЯ ВКЛАДОК В SIDEBAR
const items = document.querySelectorAll('.nav-item');
items.forEach(item => {
  item.addEventListener('click', () => {
    // Удаляем класс 'active' у всех других элементов
    items.forEach(otherItem => {
      otherItem.classList.remove('active');
    });
    // Добавляем класс 'active' к текущему элементу
    item.classList.add('active');
  });
});


