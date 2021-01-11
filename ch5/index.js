// Global “console” object to which you can output strings
console.log("Hello, I am Gaurav Parmar !!");

// Object creation
var a = {
    1: true, 
    2: false
};

console.log(a);

console.log(a[2]);

// Printing string, object as json, and integer
console.log('This is a number: %d, \n and this is a string: %s, and \nthis is an object outputted as JSON: %j', 42, 'Hello', a);

// To also write in stderr, for showing warning
console.warn("Warning !! ");

// To print stack trace
console.trace();

// Util Module 
var util = require('util'); // Import core modules : util ( Module meaning Library)
util.log('Hello in the util part !! '); // Prints along with the timestamp

console.log(util.inspect(a));

console.log(util.inspect(a[1]));


