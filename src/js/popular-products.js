document.addEventListener('DOMContentLoaded', function () {
    const popularProductsContainer = document.getElementById('popular-products');

    // Симулюємо дані, отримані з сервера
    const popularProductsData = [
        { id: 1, image: 'product1.jpg', title: 'Ackee', category: 'Fresh Produce', size: '16 oz', popularity: 3 },
        { id: 2, image: 'product2.jpg', title: 'Chicken', category: 'Meat & Seafood', size: '1.5 kg', popularity: 2 },
        { id: 3, image: 'product2.jpg', title: 'Salmon', category: 'Meat & Seafood', size: '1 kg', popularity: 1 },
        { id: 4, image: 'product2.jpg', title: 'Allspice', category: 'Pantry Items', size: '1.5oz', popularity: 1 },
        { id: 5, image: 'product2.jpg', title: 'Beef', category: 'Meat & Seafood', size: '2 kg', popularity: 0 },
        
    ];

    popularProductsData.forEach(product => {
        const card = createProductCard(product);
        popularProductsContainer.appendChild(card);
    });

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-category">${product.category}</p>
            <p class="product-details">Size: ${product.size}</p>
            <p class="product-popularity">Popularity: ${product.popularity}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">&#128722;</button>
        `;

        // Логіка для зміни іконки на кнопці, якщо товар вже у кошику
        // Можна використовувати localStorage для збереження стану кошика
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        if (cart[product.id]) {
            const addToCartBtn = card.querySelector('.add-to-cart-btn');
            addToCartBtn.classList.remove('add-to-cart-btn');
            addToCartBtn.classList.add('added-to-cart-btn');
            addToCartBtn.innerHTML = '&#10003;';
            addToCartBtn.disabled = true;
        }

        // Додаємо обробник для відкриття модального вікна при кліку на картку
        card.addEventListener('click', () => openModal(product));

        return card;
    }

    function addToCart(productId) {
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        if (cart[productId]) {
            alert('This product is already in your cart!');
        } else {
            cart[productId] = true;
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Product added to cart!');
        }
    }

    function openModal(product) {
        // Логіка для відкриття модального вікна
        console.log(`Open modal for product with ID ${product.id}`);
    }
});