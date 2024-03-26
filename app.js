
let cartItems = {};
let cartCount = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = button.getAttribute('data-product-id');
        addToCart(productId);
    });
});

function addToCart(productId) {
    if (cartItems[productId]) {
        return;
    }
    
    cartItems[productId] = true;
    cartCount++;

    let cartCountElement = document.querySelector('.icons-count');

    if (cartCount > 0) {
        cartCountElement.textContent = cartCount;
    }

    showSuccessMessage();
}

function showSuccessMessage() {
    alert("Ürün Sepete Eklendi.");
}
