import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/products.js';
// ./ represents the current folder
import {formatCurrency} from './utils/money.js';

// Identify the selected product and take the details from the products array
let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    updateCheckoutQuantity();

    let matchingProduct;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    cartSummaryHTML += `
    <div class="cart-item-container 
    js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchingProduct.name}
            </div>
            <div class="product-price">
                $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            <div class="delivery-option">
                <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                    FREE Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Monday, June 13
                </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    `;
});

// Insert the new HTML in the container
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

// Select delete links in the checkout
document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        // Identify which product are we deleting
        const container = document.querySelector(`.js-cart-item-container-${productId}`);

        // remove() method remove the DOM element
        container.remove();
        updateCheckoutQuantity();
    });
});

function updateCheckoutQuantity() {
    // Loop in the quantity of each product in the cart to get the total quantity of products for the checkout
    let checkoutQuantity = 0;

    cart.forEach((cartItem) => {
        checkoutQuantity += cartItem.quantity;
    });

    // Show checkoutQuantity in the page
    document.querySelector('.js-checkout-quantity').innerHTML = checkoutQuantity;
}
