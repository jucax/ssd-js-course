// This is a built in class
// This creates a HTTP message/request
const xhr = new XMLHttpRequest();

// We configure the messge with open() 
// First parameter is the type of message, GET = get info from backend
// Second parameter is where to send the message, we need a URL
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();