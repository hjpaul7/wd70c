for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) console.log("Fiz Buzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

for (let i = 0; i <= 100; i++) {
  i % 15 === 0
    ? console.log("fizzbuzz")
    : i % 3 === 0
    ? console.log("fizz")
    : i % 5 === 0
    ? console.log("buzz")
    : console.log(i);
}

for (let x = 0; x <= 100; x++) {
  switch (true) {
    case x % 5 === 0 && x % 3 === 0:
      console.log("FizzBuzz");
      break;
    case x % 3 === 0:
      console.log("Fizz");
      break;
    case x % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(x);
      break;
  }
}

if (FB % 15 == 0) {
  console.log("Fizz Buzz");
} else if (F % 3 == 0) {
  console.log("Fizz");
} else if (FB % 5 == 0) {
  console.log("Buzz");
}

// SWITCH
let FB = 30;

switch (true) {
  case FB % 3 === 15:
    console.log("Fizz buzz");
    break;
  case FB % 3 === 0:
    console.log("Fizz");
    break;
  case FB % 5 === 0:
    console.log("Buzz");
    break;
}

// TERNARY
FB % 15 == 0
  ? console.log("fizz buzz")
  : FB % 3 == 0
  ? console.log("fizz")
  : FB % 5 === 0
  ? console.log("buzz")
  : console.log(FB);

let age = 21;
let msg = age >= 21 ? "Old enough" : "Not old enough";
console.log(msg);
