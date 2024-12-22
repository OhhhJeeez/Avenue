const categories = [
        { img: "christmas.png", text: "Всё для Нового Года!" },
        { img: "promotions.png", text: "Акции и скидки" },
        { img: "alco.png", text: "Алкоголь" },
        { img: "pasta.png", text: "Бакалея" },
        { img: "food.png", text: "Готовая еда" },
        { img: "seafood.png", text: "Рыба и морепродукты" },
        { img: "sweets.png", text: "Сладости" },
        { img: "snacks.png", text: "Снеки" },
        { img: "cheese.png", text: "Сыры" },
        { img: "sausage.png", text: "Колбасы, сосики" },
        { img: "oil.png", text: "Масло, специи" },
        { img: "milk.png", text: "Молочная продукция" },
        { img: "meat.png", text: "Мясо и птица" },
        { img: "drinks.png", text: "Напитки" },
        { img: "vegetables.png", text: "Овощи" },
        { img: "fruits.png", text: "Фрукты и овощи" },
        { img: "freezing.png", text: "Замороженные продукты" },
        { img: "bread.png", text: "Хлеб, выпечка" },
        { img: "tea.png", text: "Чай и кофе" },
];

const categoriesContainer = document.querySelector('.aside');
categories.forEach(category => {
    const categoryHTML = `
        <div class="category">
            <div class="category-img-txt">
                <div class="category-img"><img src="../static/images/catalog/${category.img}" alt=""></div>
                <span>${category.text}</span>
            </div>
            <svg width="1.375em" height="1.375em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="black" />
            </svg>
        </div>
    `;
    categoriesContainer.insertAdjacentHTML('beforeend', categoryHTML);
});
