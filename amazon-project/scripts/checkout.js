import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
// Another sintax that runs all the code inside the file, without importing anything
import '../data/cart-oop.js';

renderCheckoutHeader();
// Initial rendering of the checking list
renderOrderSummary();
renderPaymentSummary();