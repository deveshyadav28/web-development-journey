//functional arguments 

// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function doOperation(a, b, op) {
//   return op(a, b)
// }

// console.log(sum(1, 2))


// //
// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function doOperation(a, b, op) {
//   return op(a, b)
// }

// console.log(doOperation(1, 2, sum))


//async

const fs = require("fs");

fs.readFile("c.txt" , "utf-8" , function (err , contents){
  console.log(contents);
});
fs.readFile("d.txt", "utf-8", function (err , contents){
  console.log(contents);
})
fs.readFile("e.txt", "utf-8", function(err , contents){
  console.log(contents);
})

