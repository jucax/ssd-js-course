function toggleButton(className) {
    const buttonElement = document.querySelector(className);
    if (!buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.add('is-toggled');
    } else {
        buttonElement.classList.remove('is-toggled');
    }
}