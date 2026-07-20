/*    Start */
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

console.log("End");

/*    One
    Three */
console.log("One");

setTimeout(() => {
  console.log("Two");
}, 0);

console.log("Three");

/*
    A
    C
    D
    B
*/
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
console.log("D");

/*
    Start
    Async Task
    Working...
    End
*/

console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 0);

function work() {
  console.log("Working...");
}

work();

console.log("End");
