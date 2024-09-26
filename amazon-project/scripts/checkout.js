import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";

renderCheckoutHeader();
// Initial rendering of the checking list
renderOrderSummary();
renderPaymentSummary();