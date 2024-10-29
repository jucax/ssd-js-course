import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import '../data/backend-practice.js';
// Another sintax that runs all the code inside the file, without importing anything
// import '../data/cart-class.js';

renderCheckoutHeader();
// Initial rendering of the checking list
renderOrderSummary();
renderPaymentSummary();