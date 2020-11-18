// hello function
function hello() {
  console.log("hello");
}
hello();

// bottleCapper function
function bottleCapper(bottle, cap) {
  return bottle + cap;
}
bottleCapper("green bottle", "white cap");

// one parameter function
function numberEntered(num) {
  console.log("the number you enter was: ", num);
}
numberEntered(5);

// two parameter function
function addAnyTwoNumbers(x, y) {
  console.log(x + y);
}
addAnyTwoNumbers(4, 5);

// batting average function
function battingAverage(atBats, numberOfHits) {
  let myAverage = numberOfHits / atBats;
  return myAverage;
}
console.log(battingAverage(250, 91));

// function to return sum of two numbers
function sum(a, b) {
  let finalSum = a + b;
  return finalSum;
}
console.log(sum(2, 2));

// fuction to return full name
function name(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}
console.log(name("Hustin", "Jeffers"));

// tax function
function calculatePriceAfterTax(quantity, price) {
  let totalPrice = 1.07 * quantity * price;
  return totalPrice;
}
console.log(calculatePriceAfterTax(17, 5));
