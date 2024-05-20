// Primitive

let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";

console.log(js == py); //false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // false

// Non-Primitive Data Types

let num = [1, 2, 3];
num[0] = 8;

console.log("numbers: ", num);

//non-primitive dotor ijil shinj chanar utag tai ch ijil bish gj uzdeg

let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers); // false

let userOne = {
  name: "Bilguun",
  role: "teaching",
  country: "Mongolia",
};

let userTwo = {
  name: "Bilguun",
  role: "teaching",
  country: "Mongolia",
};

console.log(userOne == userTwo); // false

//non-primitive 2 object ijil suuri object hamaarah tohioldold l hatuu tentsuu bna

// let nums = [1, 2, 3]
// let numbers = nums

// console.log(nums == numbers)  // true

// let userOne = {
// name:'Bilguun',
// role:'teaching',
// country:'Mongolia'
// }

// let userTwo = userOne

// console.log(userOne == userTwo)  // true
