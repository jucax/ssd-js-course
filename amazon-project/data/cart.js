// export allows the variable to be use outsite the file
export const cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
}, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];

// Export the finction so we can use it in other file
export function addToCart(productId) {
    let matchingItem;

    // We check if the product is already in the cart, so we save it in a matchingItem variable
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
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
}