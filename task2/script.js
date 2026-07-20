/*
    Hello
    World
*/
console.log("Hello");

setTimeout(() => {
  console.log("World");
}, 2000);

/*    1, 2, 3, 4, 5 */
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

/*    Loading... */

console.log("Loading...");

setTimeout(() => {
  console.log("Done");
}, 3000);

/*    Sending... */

function sendMessage(message) {
  console.log("Sending...");

  setTimeout(() => {
    console.log(message);
  }, 2000);
}

sendMessage("Message Sent Successfully!");
