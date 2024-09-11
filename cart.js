function loadCart() {
    // Retrieve cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Display the cart items on the page
    updateCartDisplay(cart);
}

function updateCartDisplay(cart) {
    const cartItemsElement = document.getElementById('cart-items');
    const cartCountElement = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = ''; // Clear current list
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        
        // Add a "Remove" button next to each item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItemFromCart(index);
        li.appendChild(removeButton);
        
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    cartCountElement.textContent = cart.length;
    totalPriceElement.textContent = total.toFixed(2);

    // Disable Buy Now if the cart is empty
    document.querySelector('button[onclick="BUYNOW()"]').disabled = cart.length === 0;
}

function removeItemFromCart(index) {
    // Retrieve cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart'));
    
    // Remove the item from the cart array
    cart.splice(index, 1);
    
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Refresh the cart display
    loadCart();
}

function clearCart() {
    // Clear cart from localStorage
    localStorage.removeItem('cart');
    
    // Refresh the cart display
    loadCart();
}

function BUYNOW() {
    alert('Proceeding to checkout...');
    clearCart(); // Clear the cart after buying
}

// Load cart data when the page is loaded
window.onload = loadCart;
