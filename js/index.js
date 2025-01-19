// Prevent us from attempting to use variables
// that are not declared
"use strict"
"use strict";

// Functions that return a value
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 3)); // Output: 8

// Function that takes arguments and returns a value
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10)); // Output: 50

// Function that takes arguments and doesn't return a value
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
greetUser("Salim"); // Output: Hello, Salim!

// Function with default parameters
function calculatePower(base, exponent = 2) {
    return base ** exponent;
}
console.log(calculatePower(5));       // Output: 25
console.log(calculatePower(5, 3));    // Output: 125

