var products = [
    {
        slug: "classic-beige",
        name: "Туфли-лодочки Classic Beige",
        price: "129 AZN",
        category: "Классическая обувь",
        categoryKey: "classic",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Элегантные бежевые лодочки для офиса, деловых встреч и вечернего выхода. Универсальный оттенок легко сочетается с базовым гардеробом.",
        specs: ["Материал: эко-кожа premium", "Каблук: 7 см", "Подкладка: мягкая микрофибра", "Размеры: 36-40"],
        review: "Очень удобная посадка, устойчивый каблук и аккуратный внешний вид. Отличный выбор для работы."
    },
    {
        slug: "summer-light",
        name: "Босоножки Summer Light",
        price: "98 AZN",
        category: "Вечерняя обувь",
        categoryKey: "evening",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Легкие босоножки на каблуке для летних вечеров, праздников и романтичных образов.",
        specs: ["Материал: искусственная замша", "Каблук: 8 см", "Застежка: ремешок", "Размеры: 35-40"],
        review: "Смотрятся изящно, нога визуально вытягивается, а ремешок надежно фиксирует стопу."
    },
    {
        slug: "urban-rose",
        name: "Ботильоны Urban Rose",
        price: "165 AZN",
        category: "Сезонная обувь",
        categoryKey: "season",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1494955464529-790512c65305?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Современные ботильоны для прохладного сезона с выразительным силуэтом и устойчивой колодкой.",
        specs: ["Материал: эко-кожа", "Каблук: 6 см", "Сезон: осень-весна", "Размеры: 36-41"],
        review: "Стильная модель для города: хорошо смотрится с пальто, джинсами и платьями."
    },
    {
        slug: "daily-comfort",
        name: "Кеды Daily Comfort",
        price: "89 AZN",
        category: "Повседневная обувь",
        categoryKey: "casual",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Универсальные кеды для прогулок и повседневной активности. Мягкая посадка и лаконичный дизайн.",
        specs: ["Материал: текстиль", "Подошва: гибкая резина", "Высота: низкая", "Размеры: 35-41"],
        review: "Комфортная модель на каждый день, которая не перегружает образ."
    },
    {
        slug: "winter-grace",
        name: "Сапоги Winter Grace",
        price: "210 AZN",
        category: "Сезонная обувь",
        categoryKey: "season",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Высокие сапоги для холодного сезона с мягкой внутренней отделкой и элегантной формой.",
        specs: ["Материал: эко-кожа", "Утепление: байка", "Подошва: противоскользящая", "Размеры: 36-41"],
        review: "Теплые, устойчивые и визуально аккуратные сапоги для зимнего гардероба."
    },
    {
        slug: "soft-step",
        name: "Балетки Soft Step",
        price: "74 AZN",
        category: "Классическая обувь",
        categoryKey: "classic",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Легкие балетки для офиса и прогулок, когда нужен аккуратный внешний вид без каблука.",
        specs: ["Материал: искусственная кожа", "Каблук: 1 см", "Носок: округлый", "Размеры: 35-40"],
        review: "Мягкие и легкие, подходят для длинного дня на ногах."
    },
    {
        slug: "active-move",
        name: "Кроссовки Active Move",
        price: "118 AZN",
        category: "Спортивная обувь",
        categoryKey: "sport",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Яркие спортивные кроссовки с амортизацией для активного дня, прогулок и легких тренировок.",
        specs: ["Материал: сетка и экокожа", "Подошва: амортизирующая", "Вес: легкие", "Размеры: 36-42"],
        review: "Хорошая поддержка стопы и динамичный внешний вид для активного ритма."
    },
    {
        slug: "city-walk",
        name: "Лоферы City Walk",
        price: "105 AZN",
        category: "Повседневная обувь",
        categoryKey: "casual",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Лоферы для городского гардероба: строгие, удобные и легко сочетаются с брюками или юбкой.",
        specs: ["Материал: эко-кожа", "Подошва: мягкая", "Стиль: smart casual", "Размеры: 35-41"],
        review: "Универсальная пара, которая выглядит собранно и не устает в течение дня."
    },
    {
        slug: "white-pulse",
        name: "Кроссовки White Pulse",
        price: "132 AZN",
        category: "Спортивная обувь",
        categoryKey: "sport",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Белые кроссовки с чистым силуэтом для спорта, прогулок и современного casual-образа.",
        specs: ["Материал: комбинированный", "Подошва: EVA", "Цвет: белый", "Размеры: 36-42"],
        review: "Свежий базовый вариант, который делает образ легче и современнее."
    },
    {
        slug: "night-velvet",
        name: "Туфли Night Velvet",
        price: "149 AZN",
        category: "Вечерняя обувь",
        categoryKey: "evening",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Вечерние туфли с глубоким оттенком и выразительным силуэтом для особых случаев.",
        specs: ["Материал: бархатистая замша", "Каблук: 8 см", "Посадка: узкая", "Размеры: 35-40"],
        review: "Эффектная пара, которая добавляет образу торжественности без лишних деталей."
    },
    {
        slug: "easy-day",
        name: "Слипоны Easy Day",
        price: "82 AZN",
        category: "Повседневная обувь",
        categoryKey: "casual",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1494955464529-790512c65305?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1494955464529-790512c65305?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Минималистичные слипоны для быстрых городских маршрутов, учебы, работы и путешествий.",
        specs: ["Материал: текстиль", "Застежка: без шнурков", "Подошва: резина", "Размеры: 35-41"],
        review: "Легко надеваются, не натирают и подходят к базовому гардеробу."
    },
    {
        slug: "office-charm",
        name: "Туфли Office Charm",
        price: "136 AZN",
        category: "Классическая обувь",
        categoryKey: "classic",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Туфли на устойчивом каблуке для офиса и ежедневных деловых образов.",
        specs: ["Материал: эко-кожа", "Каблук: 5 см", "Стелька: мягкая", "Размеры: 36-41"],
        review: "Оптимальный баланс строгости и комфорта для рабочего дня."
    }
];

document.addEventListener("DOMContentLoaded", function () {
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

    function getProduct(slug) {
        return products.find(function (product) {
            return product.slug === slug;
        });
    }

    function productUrl(slug) {
        return (window.location.pathname.indexOf("/products/") !== -1 ? "" : "products/") + slug + ".html";
    }

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

        sessionStorage.setItem("catalogCategory", category);
    }

    function footerMarkup() {
        var prefix = window.location.pathname.indexOf("/products/") !== -1 ? "../" : "";

        return '<footer class="footer">' +
            '<div class="container footer__top">' +
            '<div class="footer__brand"><a class="logo logo--footer" href="' + prefix + 'index.html" aria-label="Elegance Shoes"><span class="logo__icon">ES</span><span class="logo__text">Elegance Shoes</span></a><p>Интернет-магазин женской обуви с удобной справочной системой, каталогом и консультацией по подбору моделей.</p><div class="socials" aria-label="Социальные сети"><a href="#" aria-label="Instagram">IG</a><a href="#" aria-label="Facebook">FB</a><a href="#" aria-label="TikTok">TT</a><a href="#" aria-label="WhatsApp">WA</a></div></div>' +
            '<div class="footer__column"><h3>Быстрые ссылки</h3><a href="' + prefix + 'index.html">Главная</a><a href="' + prefix + 'catalog.html">Каталог</a><a href="' + prefix + 'about.html">О магазине</a><a href="' + prefix + 'contact.html">Контакты</a></div>' +
            '<div class="footer__column"><h3>Контакты</h3><p>+994 12 555 45 45</p><p>info@eleganceshoes.az</p><p>г. Баку, ул. Низами, 24</p><p>Пн-Сб, 10:00-20:00</p></div>' +
            '<div class="footer__newsletter"><h3>Подписка на новости</h3><p>Получайте информацию о новых моделях, сезонных скидках и специальных предложениях.</p><form class="newsletter-form"><input type="email" placeholder="Ваш email" aria-label="Email для подписки" required><button type="submit">Подписаться</button></form></div>' +
            '</div><div class="container footer__bottom"><p>&copy; 2026 Elegance Shoes. Все права защищены.</p><p>Разработка онлайновой информационно-справочной системы для интернет-магазина женской обуви.</p></div></footer>';
    }

    function renderRelated(product) {
        return products
            .filter(function (item) {
                return item.slug !== product.slug && item.categoryKey === product.categoryKey;
            })
            .slice(0, 3)
            .map(function (item) {
                return '<article class="product-card related-card" data-product-slug="' + item.slug + '">' +
                    '<img src="' + item.image + '" alt="' + item.name + '">' +
                    '<div class="product-card__body"><span class="product-badge">' + item.category + '</span><h3>' + item.name + '</h3><p class="product-card__price">' + item.price + '</p><a class="button button--outline" href="' + productUrl(item.slug) + '">Смотреть товар</a></div>' +
                    '</article>';
            })
            .join("");
    }

    function renderProductPage() {
        var root = document.getElementById("productPage");
        var slug = document.body.dataset.product;

        if (!root || !slug) {
            return;
        }

        var product = getProduct(slug);
        var prefix = window.location.pathname.indexOf("/products/") !== -1 ? "../" : "";

        if (!product) {
            root.innerHTML = '<section class="section"><div class="container"><h1>Товар не найден</h1><a class="button button--primary" href="' + prefix + 'catalog.html">Вернуться в каталог</a></div></section>';
            return;
        }

        document.title = "Elegance Shoes | " + product.name;
        localStorage.setItem("lastViewedProduct", product.slug);

        root.innerHTML = '<section class="product-hero">' +
            '<div class="container product-detail">' +
            '<div class="product-gallery">' +
            '<div class="product-gallery__main"><button class="gallery-arrow gallery-arrow--prev" type="button" aria-label="Предыдущее изображение">‹</button><img id="mainProductImage" src="' + product.gallery[0] + '" alt="' + product.name + '"><button class="gallery-arrow gallery-arrow--next" type="button" aria-label="Следующее изображение">›</button></div>' +
            '<div class="product-gallery__thumbs">' + product.gallery.map(function (image, index) {
                return '<button class="gallery-thumb' + (index === 0 ? " gallery-thumb--active" : "") + '" type="button" data-image="' + image + '" data-index="' + index + '"><img src="' + image + '" alt="' + product.name + ' фото ' + (index + 1) + '"></button>';
            }).join("") + '</div></div>' +
            '<div class="product-info"><a class="back-link" href="' + prefix + 'catalog.html">← Вернуться в каталог</a><p class="section-label">' + product.category + '</p><h1>' + product.name + '</h1><div class="product-rating"><span>★★★★★</span><strong>' + product.rating + '</strong><small>на основе отзывов покупателей</small></div><p class="product-detail__price">' + product.price + '</p><p class="product-description">' + product.description + '</p><div class="product-actions"><button class="button button--primary buy-button" type="button">Купить сейчас</button><button class="button button--outline favorite-button" type="button">Добавить в избранное</button></div></div>' +
            '</div></section>' +
            '<section class="section"><div class="container product-extra-grid"><article class="detail-panel"><p class="section-label">Характеристики</p><h2>Детали модели</h2><ul class="spec-list">' + product.specs.map(function (spec) { return '<li>' + spec + '</li>'; }).join("") + '</ul></article><article class="detail-panel review-panel"><p class="section-label">Mini review</p><h2>Отзыв покупателя</h2><p>' + product.review + '</p><div class="review-author"><strong>Айдан</strong><span>проверенный покупатель</span></div></article></div></section>' +
            '<section class="section section--soft"><div class="container"><div class="section-heading"><p class="section-label">Gallery</p><h2>Больше деталей</h2><p class="lead">Нажимайте на миниатюры или стрелки, чтобы рассмотреть товар с разных ракурсов.</p></div><div class="gallery-strip">' + product.gallery.map(function (image) { return '<img src="' + image + '" alt="' + product.name + '">'; }).join("") + '</div></div></section>' +
            '<section class="section"><div class="container"><div class="section-heading"><p class="section-label">Похожие товары</p><h2>В той же категории</h2></div><div class="product-grid product-grid--three">' + renderRelated(product) + '</div></div></section>';

        document.body.insertAdjacentHTML("beforeend", footerMarkup());
        initProductInteractions(product);
        bindNewsletterForms();
    }

    function initProductInteractions(product) {
        var mainImage = document.getElementById("mainProductImage");
        var thumbs = document.querySelectorAll(".gallery-thumb");
        var activeIndex = 0;

        function setImage(index) {
            activeIndex = (index + product.gallery.length) % product.gallery.length;
            mainImage.src = product.gallery[activeIndex];
            thumbs.forEach(function (thumb) {
                thumb.classList.toggle("gallery-thumb--active", Number(thumb.dataset.index) === activeIndex);
            });
        }

        thumbs.forEach(function (thumb) {
            thumb.addEventListener("click", function () {
                setImage(Number(thumb.dataset.index));
            });
        });

        var prev = document.querySelector(".gallery-arrow--prev");
        var next = document.querySelector(".gallery-arrow--next");

        if (prev) {
            prev.addEventListener("click", function () {
                setImage(activeIndex - 1);
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                setImage(activeIndex + 1);
            });
        }

        var buyButton = document.querySelector(".buy-button");
        var favoriteButton = document.querySelector(".favorite-button");

        if (buyButton) {
            buyButton.addEventListener("click", function () {
                sessionStorage.setItem("selectedProduct", product.slug);
                alert("Товар \"" + product.name + "\" добавлен к оформлению. Менеджер уточнит заказ.");
            });
        }

        if (favoriteButton) {
            favoriteButton.addEventListener("click", function () {
                localStorage.setItem("favoriteProduct", product.slug);
                favoriteButton.textContent = "В избранном";
            });
        }
    }

    function bindNewsletterForms() {
        document.querySelectorAll(".newsletter-form").forEach(function (form) {
            if (form.dataset.bound === "true") {
                return;
            }

            form.dataset.bound = "true";
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                alert("Спасибо за подписку! Мы будем отправлять вам новости магазина.");
                form.reset();
            });
        });
    }

    document.querySelectorAll("[data-product-slug]").forEach(function (card) {
        card.addEventListener("click", function (event) {
            if (event.target.closest("button") || event.target.closest("a")) {
                return;
            }

            window.location.href = productUrl(card.dataset.productSlug);
        });
    });

    document.querySelectorAll(".product-details").forEach(function (button) {
        button.addEventListener("click", function () {
            var card = button.closest("[data-product-slug]");
            if (card) {
                window.location.href = productUrl(card.dataset.productSlug);
            }
        });
    });

    catalogButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterCatalog(button.dataset.category);
        });
    });

    if (catalogCards.length > 0) {
        filterCatalog(sessionStorage.getItem("catalogCategory") || "all");
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.");
            contactForm.reset();
        });
    }

    bindNewsletterForms();
    renderProductPage();
});
