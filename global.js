// Устанавливаем фокус на первой вкладке при загрузке страницы
window.onload = function() {
  const firstItem = document.querySelector('.nav-item');
  firstItem.classList.add('active');
};

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
    items.forEach(otherItem => {
      otherItem.classList.remove('active');
    });
    item.classList.add('active');
  });
});

