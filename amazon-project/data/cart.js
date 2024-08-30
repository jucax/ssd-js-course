// export allows the variable to be use outsite the file
export const cart = [
    
];

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