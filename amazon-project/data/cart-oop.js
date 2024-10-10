import {validDeliveryOption} from './deliveryOptions.js';

// Main object
const cart = {
    // We can't use export inside an object, so we convert it into a propery
    // This is how we get a variable into an object
    cartItems: undefined,

    // This is how we get a function into an object, and becomes a method
    loadFromStorage() {
        // We can use "this" instead of a variable name, it means the outer object
        this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));
    
        if (!this.cartItems) {
            this.cartItems = [{
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity: 1,
                deliveryOptionId: '2'
            }];
        }
    },

    saveToStorage() {
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
    },

    addToCart(productId) {
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });
    
        const quantitySelector = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    
        if (matchingItem) {
            matchingItem.quantity += quantitySelector;
        } else {
            this.cartItems.push({
                productId: productId,
                quantity: quantitySelector,
                deliveryOptionId: '1'
            });
        }

        // If we want to acces a function that is inside the object, we need to access the object first
        this.saveToStorage();
    },

    removeFromCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });
        this.cartItems = newCart;
        
        this.saveToStorage();
    }, 

    calculateCartQuantity() {
        let cartQuantity = 0;
    
        this.cartItems.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });
    
        if (cartQuantity != 0) {
            document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        }
    },

    updateQuantity(productId, newQuantity) {
        let matchingProduct;

        cart.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                matchingProduct = cartItem;
            }
        });
    
        matchingProduct.quantity = newQuantity;
        saveToStorage();
    }
};



loadFromStorage();




export function calculateCartQuantity() {
    // Loop in the quantity of each product in the cart to get the total quantity of products
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    // Show cartQuantity in the page
    if (cartQuantity != 0) {
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    }
}

// Function to update the quantity from the checkout page
export function updateQuantity(productId, newQuantity) {
    // Identify the product with that Id in the cart
    let matchingProduct;
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            matchingProduct = cartItem;
        }
    });

    // Get the actual quantity and save it to local storage
    matchingProduct.quantity = newQuantity;
    saveToStorage();
}

// Function to update id of the delivery option we are choosing
export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    // We check if the product is already in the cart, so we save it in a matchingItem variable
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    // If there is not matching element 
    if (!matchingItem) {
        return;
      }

    // We check if the delivery option is correct
    if (!validDeliveryOption(deliveryOptionId)) {
        return;
    }

    // Get the new delivery option and insert it to the varaible, also save it to local storage
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}

// Procedural Programming: a set of step-by-step instructions, functions
// Object-Oriented Programming (OOP): organize our code into object