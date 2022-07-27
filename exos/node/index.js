console.log("Formation JavaScript Node.js");

var a = Math.floor(Math.random() * 101), b = Math.floor(Math.random() * 101);

var operation = require('./Math');

console.log("addition " + a + " + " + b + " = " + operation.addition(a, b));
console.log("soustraction " + a + " - " + b + " = " + operation.soustraction(a, b));
console.log("multiplication " + a + " * " + b + " = " + operation.multiplication(a, b));
console.log("division " + a + " / " + b + " = " + operation.division(a, b));

//Set-ExecutionPolicy Unrestricted  installation de mocha !!