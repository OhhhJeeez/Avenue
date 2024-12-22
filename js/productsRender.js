const products = [
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" },
    { img: "../static/images/products/Chees-1.png", text: "Сыр радость вкуса Большой куш 20% 1 кг", price: "549.99" }
];

const productsContainer = document.querySelector('.category-products');
products.forEach(product => {
const productHTML = `
    <div class="product">
        <div class="product-image">
            <img src="${product.img}" alt="">
        </div>
        <div class="product-text">
            <span class="product-price">${product.price}₽</span>
            <span class="product-description">${product.text}</span>
        </div>
</div>`;

productsContainer.insertAdjacentHTML('beforeend', productHTML);
});

