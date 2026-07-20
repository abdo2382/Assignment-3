/*
    Start
    Middle
    End
*/
console.log("Start");
console.log("Middle");
console.log("End");

/*
    First Function
    Second Function
    Back to First Function
*/
function second() {
  console.log("Second Function");
}

function first() {
  console.log("First Function");
  second();
  console.log("Back to First Function");
}

first();

/*
    Addition: 15
    Subtraction: 5
    Multiplication: 50
    Division: 2
*/

let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

/*
    Double Number: 40
*/

function getNumber() {
  return 20;
}

function doubleNumber() {
  let number = getNumber();
  return number * 2;
}

console.log(doubleNumber());
