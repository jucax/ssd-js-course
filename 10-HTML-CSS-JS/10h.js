function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    // For input element
    // Number() - converts string to number
    // String() - converts number to string
    // If we - / or * in a string with a number, JS automatically convert string to number
    let cost = Number(inputElement.value);

    document.querySelector('.js-total-cost')
    .innerHTML = '';
    document.querySelector('.error-message')
    .innerHTML = '';

    if (cost < 0) {
        document.querySelector('.error-message'). innerHTML = 'Error: cost cannot be less than $0';
        return;
    }

    if (cost < 40) {
        cost += 10;
    } 

    document.querySelector('.js-total-cost'). innerHTML =
    `$${cost}`;
}

function handleCostKeydown(event) {
    // event is an object of JS that describe the key that we are pressing
    if (event.key === 'Enter') {
        calculateTotal();
    }
}