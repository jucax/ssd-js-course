// This is a built in class
// This creates a HTTP message/request
const xhr = new XMLHttpRequest();

// load means to wait for the response
xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

// We configure the messge with open() 
// First parameter is the type of message, GET = get info from backend
// Second parameter is where to send the message, we need a URL
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

// This messages works with the request-response cycle

// We can do something with the response with .response, it is asynchronous code, so it doesn't wait for the last lines to execute
