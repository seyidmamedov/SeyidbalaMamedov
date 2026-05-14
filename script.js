// Небольшая интерактивность для каталога и формы обратной связи.
document.addEventListener("DOMContentLoaded", function () {
    var detailButtons = document.querySelectorAll(".product-details");
    var contactForm = document.getElementById("contactForm");
    var newsletterForms = document.querySelectorAll(".newsletter-form");
    var catalogButtons = document.querySelectorAll("[data-category]");
    var catalogCards = document.querySelectorAll(".catalog-grid .product-card");
    var catalogTitle = document.getElementById("catalogTitle");
    var catalogCount = document.getElementById("catalogCount");
    var categoryNames = {
        all: "Все модели",
        casual: "Повседневная обувь",
        sport: "Спортивная обувь",
        classic: "Классическая обувь",
        evening: "Вечерняя обувь",
        season: "Сезонная обувь"
    };

    function filterCatalog(category) {
        var visibleCount = 0;
        catalogCards.forEach(function (card) {
            var isVisible = category === "all" || card.dataset.category === category;
            card.classList.toggle("is-hidden", !isVisible);
            if (isVisible) {
                visibleCount += 1;
            }
        });
        document.querySelectorAll(".catalog-filter").forEach(function (button) {
            button.classList.toggle("catalog-filter--active", button.dataset.category === category);
        });
        if (catalogTitle) {
            catalogTitle.textContent = categoryNames[category] || "Каталог";
        }
        if (catalogCount) {
            catalogCount.textContent = visibleCount;
        }
    }

    detailButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var card = button.closest(".product-card");
            var title = card.querySelector("h3").textContent;
            var price = card.querySelector(".product-card__price").textContent;

            alert("Товар: " + title + "\nЦена: " + price + "\nДля заказа свяжитесь с менеджером магазина.");
        });
    });

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.");
            contactForm.reset();
        });
    }

    newsletterForms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Спасибо за подписку! Мы будем отправлять вам новости магазина.");
            form.reset();
        });
    });

    catalogButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterCatalog(button.dataset.category);
        });
    });

    if (catalogCards.length > 0) {
        filterCatalog("all");
    }
});
