import {addToCart, cart, loadFromStorage} from "../../data/cart.js";

describe('Test suite: addToCart', () => {
    //We try to maximize test coverage, which means how much of the code is being tested
    it('Adds an existing product to the cart', () => {
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            // We override the function with this instructions
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                delivetyOptionId: '1'
            }]);
        });
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);

        // It check how many times the method inside was called
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);

        // It checks if the product in the cart is the correct one
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        // It checks if we have the correct quantity of products
        expect(cart[0].quantity).toEqual(2);
    });

    // Flaky test, because if passes depending on what is saved in local storage
    it('Adds a new product to the cart', () => {
        // Create a mock, a fake version of a function to make whatever we need

        // Jasmine use spyOn to create a mock, the first parameter is the object, the second is the method that we want to mock, and the content inside is the new functionality
        spyOn(localStorage, 'setItem');
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            // We override the function with this instructions
            return JSON.stringify([]);
        });
        loadFromStorage();
        
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);

        // It check how many times the method inside was called
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);

        // It checks if the product in the cart is the correct one
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        // It checks if we have the correct quantity of products
        expect(cart[0].quantity).toEqual(1);
    });
});