document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылки и страницы
    const page1Link = document.getElementById("page1-link");
    const page2Link = document.getElementById("page2-link");
    const page3Link = document.getElementById("page3-link");
    const page4Link = document.getElementById("page4-link");
    const page5Link = document.getElementById("page5-link");
    const page6Link = document.getElementById("page6-link");
    const page7Link = document.getElementById("page7-link");

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4");
    const page5 = document.getElementById("page5");
    const page6 = document.getElementById("page6");
    const page7 = document.getElementById("page7");

    // Функция для скрытия всех страниц
    function hideAllPages() {
        page1.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";

    }

    // Начнем с отображения первой страницы
    hideAllPages();
    page3.style.display = "block";

    // Добавляем обработчики событий для переключения между страницами
    page1Link.addEventListener("click", function() {
        hideAllPages();
        page1.style.display = "block";
    });

    page2Link.addEventListener("click", function() {
        hideAllPages();
        page2.style.display = "block";
    });


    page3Link.addEventListener("click", function() {
        hideAllPages();
        page3.style.display = "block";
    });

    page4Link.addEventListener("click", function() {
        hideAllPages();
        page4.style.display = "block";
    });

    page5Link.addEventListener("click", function() {
        hideAllPages();
        page5.style.display = "block";
    });

    page6Link.addEventListener("click", function() {
        hideAllPages();
        page6.style.display = "block";
    });

    page7Link.addEventListener("click", function() {
        hideAllPages();
        page7.style.display = "block";
    });
});
