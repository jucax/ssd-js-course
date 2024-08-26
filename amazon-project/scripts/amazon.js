// 1 step: Save the data
// The data comes form products.js
let productsHTML = '';

// import call a variable from other file
// when we import we can save the varaible with other name to avoid naming conflictions, just use 'name' as 'new name'
import {cart} from '../data/cart.js';

// 2 step: Create the HTML
products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
        <div class="product-image-container">
            <img class="product-image"
                src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
        </div>

        <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
        </button>
    </div>
    `;
});

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;

// Step 3: Make it interactive
// Add to cart button 

// querySelectorAll returns a list with all the objects with that class, so we need to loop through them 
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        // Data attribute allows us to attach information to any element, it is an attribute like class="", the syntax is data-[name]=""
        // .dataset gives all the data attributes in that element
        const productId = button.dataset.productId;
        let matchingItem;

        // We check if the product is already in the cart, so we save it in a matchingItem variable
        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });

        // Get the quantity from the selector
        const quantitySelector = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

        // If there is a matchingElement, then we just increase the quantity
        if (matchingItem) {
            matchingItem.quantity += quantitySelector;
        } else {
            cart.push({
                productId: productId,
                quantity: quantitySelector
            });
        }

        // Loop in the quantity of each product in the cart to get the total quantity of products
        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });

        // Show cartQuantity in the page
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

        // To show the added message
        const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
        addedMessage.classList.add('added-to-cart-visible');

        //To make the message disappear with a specific interval
        setTimeout(() => {
            addedMessage.classList.remove('added-to-cart-visible');
        }, 2000);
    });
});

/* 14-Modules
To avoid naming issues with variables with the same name
The modules contain a variable inside a faile so it doesnt conflict with the rest of the variables
To create a module:
1. Create files 2. Dont load the file in HTML with <script>
To connect a module:
1. Add type="module" 2. Export 3. Import

type="module": allows a script to use variables from other files 

Modules just work when we work with live server, it avoid naming issues and also we dont have to worry abour the order we load the files
*/
