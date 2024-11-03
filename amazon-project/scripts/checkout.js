import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {loadProducts} from "../data/products.js";
// import '../data/backend-practice.js';
// Another sintax that runs all the code inside the file, without importing anything
// import '../data/cart-class.js';

// We dont need to use a function as parameter every time, we can create one anonymous function inside
loadProducts(() => {
    renderCheckoutHeader();
    // Initial rendering of the checking list
    renderOrderSummary();
    renderPaymentSummary();
});

