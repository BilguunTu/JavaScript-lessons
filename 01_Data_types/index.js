// Primitive

// let numOne = 3;
// let numTwo = 3;

// console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "javascript";

console.log(js == py); //false

// let lightOn = true;
// let lightOff = false;

// console.log(lightOn == lightOff); // false

// Non-Primitive Data Types

// let num = [1, 2, 3, 4, 6];
// num[4] = 5;

// console.log("numbers: ", num);

//non-primitive dotor ijil shinj chanar utag tai ch ijil bish gj uzdeg

// let nums = [1, 2, 3];
// let numbers = [1, 2, 3];

// console.log("number", nums == numbers); //true

// let userOne = {
//   name: "Bilguun",
//   role: "teaching",
//   country: "Mongolia",
// };

// let userTwo = {
//   name: "Bilguun",
//   role: "teaching",
//   country: "Mongolia",
// };

// console.log("string", userOne == userTwo); //true

//non-primitive 2 object ijil suuri object hamaarah tohioldold l hatuu tentsuu bna

let nums = [1, 2, 3];
let numbers = nums;

console.log(nums == numbers); // true
console.log("numbers 0", numbers[0]);

let userOne = {
  name: "Bilguun",
  role: "teaching",
  country: "Mongolia",
};

let userTwo = userOne;

console.log(userOne == userTwo); // true
