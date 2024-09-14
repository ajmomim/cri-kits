 
        function searchProducts() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let products = document.querySelectorAll('.product');
            
            products.forEach(product => {
                let productName = product.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(input)) {
                    product.classList.remove('hidden');
                } else {
                    product.classList.add('hidden');
                }
            });
        }
       
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        price: parseFloat(params.get('price'))
    };
}



let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

function goToCart() {
    window.location.href = 'cart.html';
}
