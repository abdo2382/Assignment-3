/*
    Hello Abdelrahman
    Greeting Finished
*/
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Greeting Finished");
}

greet("Abdelrahman", done);

/*
    10 + 5 = 15
    10 - 5 = 5
    10 * 5 = 50
*/

function calculator(a, b, operation) {
  console.log(operation(a, b));
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

calculator(10, 5, add);
calculator(10, 5, subtract);
calculator(10, 5, multiply);

/*
    Loading Data...
    Data Loaded
    Displaying Data
*/

function loadData(callback) {
  console.log("Loading Data...");

  setTimeout(() => {
    console.log("Data Loaded");
    callback();
  }, 2000);
}

function displayData() {
  console.log("Displaying Data");
}

loadData(displayData);

/*
    Logging in...
    Welcome Abdelrahman
*/

function login(username, callback) {
  console.log("Logging in...");

  setTimeout(() => {
    console.log("Welcome " + username);
    callback();
  }, 2000);
}

function showDashboard() {
  console.log("Dashboard Opened");
}

login("Abdelrahman", showDashboard);
