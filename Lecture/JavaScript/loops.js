let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Bronze
for (i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i]);
}

// Silver
// Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.

for (i = 0; i < alphabet.length; i++) {
  //   console.log(alphabet[i])
  if (i % 2 == 0) {
    console.log(alphabet[i]);
  } else {
    console.log("odd");
  }
}

// GOLD
// Declare a variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation - console.log 'the index ___ is an odd number'. Use Google to search for an array method that allows you to add one or more elements to an array
let arr = [];
for (i = 0; i < alphabet.length; i++) {
  if (i % 2 == 0) {
    arr.push(alphabet[i]);
  } else {
    console.log(`the index of ${alphabet[i]} is and odd number`);
  }
}
console.log(arr);

// PLAT
// Turn conditional to ternary
for (i = 0; i < alphabet.length; i++) {
  i % 2 === 0
    ? arr.push(alphabet[i])
    : console.log(`the index of ${alphabet[i]} is an odd number`);
}
console.log(arr);

// FOR OF LOOPS
// will cycle through an iterable (can be iterated on, repeat for every element) collection

let food = ["chicken", "turkey", "duck"];

for (bird of food) {
  console.log(`${bird} is a bird`);
}

let pies = [
  "apple",
  "blueberry",
  "peach",
  "chocolate peanut butter",
  "cherry",
  "oreo",
  "chicken pot",
  "shepherd",
];

/* BRONZE
    - Using a for of loop, console.log the name of each pie from the pies array using string interpolation.
    ex: "apple pie"
*/

for (pie of pies) {
  console.log(`${pie} is a pie`);
}

/* SILVER
    - Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
    - Use google to search for an array method that checks if an array includes a certain value
*/

for (pie of pies) {
  if (pie.includes("apple") || pie.includes("blueberry")) {
    console.log(`${pie} is a fruit pie`);
  } else {
    console.log(`${pie} is not a fruit pie`);
  }
}

// or
let fruitPies = ["apple", "blueberry", "peach"];
for (flavor of pies) {
  if (fruitPies.includes(flavor)) {
    console.log(`${flavor} is a fruit pie`);
  } else {
    console.log("not a fruit pie");
  }
}

// FOR IN LOOPS (loops will looop over enumerable properties in an object)

let characters = ["fry", "bender", "dr farnsworth"];
for (let something in characters) {
  console.log(something);
}

let fellowship = {
  members: [
    {
      name: "Gandalf",
      weapon: "Staff",
    },
    {
      name: "Frodo",
      weapon: "Sting",
    },
    {
      name: "Sam",
      weapon: "Lembas Bread",
    },
    {
      name: "Aragorn",
      weapon: "andruil",
    },
    {
      name: "legolas",
      weapon: "bow of galadhrim",
    },
    {
      name: "boromir",
      weapon: "horn of gondor",
    },
  ],
  created: "25 october 2020",
  dissolved: "26 october 2020",
};
console.log(fellowship.created);
console.log(fellowship.members[5].weapon);

for (let character of fellowship.members) {
  console.log(`${character.name} is weilding ${character.weapon}`);
}
