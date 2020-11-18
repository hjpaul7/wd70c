// SILVER
// Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer.
// Example Result: My name is longer than Adam's.

// ​
// GOLD
// In the console log include how many letters difference there are between the names.
// Example Result: Adam's name is shorter than mine by 4 letters.
// There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!

// Bronze
let myName = "Hustin";
let friendName = "Hustin";

let myNameLength = myName.length;
let friendNameLength = friendName.length;

if (myName.length > friendName.length) {
  console.log(
    `My name ${myName} is longer than ${friendName} by ${myNameLength}`
  );
} else if (myName.length === friendName.length) {
  console.log("No ones name is longer");
} else {
  console.log(
    `${friendName}'s name is longer than my name ${myName} by ${friendNameLength}`
  );
}



// CHALLENGE 2
// Types Challenge
​
// BRONZE
// Create an Object that contains a string, number, boolean, and object.
// Console.log the type of one of the values in the object.

// ​
// SILVER
// Write a conditional that checks the type of one of the values stored in the object 
// and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'

let x = {
  Name: "Hustin",
  Num: 7,
  Bool: true,
  obj: {
    name: "Adam"
  },
  arr: ["Test", "Testing"]
}
console.log(x.obj.name);

if (typeof x.Name == Boolean || Object || String) {
  console.log(typeof x.Name)
} else {
  console.log("What are you")
};