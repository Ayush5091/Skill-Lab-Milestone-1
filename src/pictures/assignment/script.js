

let cart = [];


const cakeData = {
    1: { name: "Chocolate Cake", price: 550.00 },
    2: { name: "Vanilla Cake", price: 480.00 },
    3: { name: "Strawberry Cake", price: 500.00 },
    4: { name: "Butterscotch Cake", price: 600.00 },
    5: { name: "Red Velvet Cake", price: 580.00 },
    6: { name: "Pineapple Cake", price: 450.00 },
    7: { name: "Black Forest Cake", price: 650.00 },
    8: { name: "Blueberry Cake", price: 540.00 }
};


function addToCart(cakeId) {
    const cake = cakeData[cakeId];
    cart.push(cake);

    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach((cake, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${cake.name} - ₹${cake.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    const totalPrice = cart.reduce((total, cake) => total + cake.price, 0);
    document.getElementById('total-price').textContent = `₹${totalPrice.toFixed(2)}`;
}


function removeFromCart(index) {
  
    cart.splice(index, 1);
    updateCartUI();
}

document.getElementById('checkout').addEventListener('click', function() {
    const totalPrice = cart.reduce((total, cake) => total + cake.price, 0);
    alert(`Your total is ₹${totalPrice.toFixed(2)}. Thank you for your purchase!`);
});
