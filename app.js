
// Create a JavaScript function called "multiplicationTable" that takes a single argument "num" (an integer) as input.
function multiplicationTable(num) {
    console.log(num);
}
multiplicationTable(10)

 // Inside the function, create a for loop that iterates from 1 to 10.
function myFunction(num) {
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }
}
myFunction(10)

// Inside the loop, multiply the current iteration number by the input "num" to generate the product.
function multiply(num) {
    for (let i = 1; i <= 10; i++) {
      let product = i * num;
      console.log(product);
    }
}
multiply(10)

// Log the product to the console in the format "num x iteration = product"

function myProduct(num) {
    for (let i = 1; i <= 10; i++) {
      let product = i * num;
      console.log(num + " x " + i + " = " + product);
    }
}
myProduct(2)
//Test the function with different input numbers to generate multiplication tables.
function multi(num1, num2) {
    let product = num1 * num2;
    return product;
}
let result = multi(10, 20);
console.log(result);