
function toggleButton(className) {
    const buttonElement = document.querySelector(className);
    if (!buttonElement.classList.contains('is-toggled')) {
        turnOff();
        buttonElement.classList.add('is-toggled');
    } else {
        buttonElement.classList.remove('is-toggled');
    }
}

function turnOff() {
    const previousOn = document.querySelector('.is-toggled');
    if (previousOn) {
        previousOn.classList.remove('is-toggled');
    }
}
