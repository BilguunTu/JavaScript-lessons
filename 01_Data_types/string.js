//ASCII
let space = " "; // an empty space string
let firstName = "Bilguun";
let lastName = "Tumurbaatar";
let country = "Mongolia";
let city = "Ulaanbaatar";
let language = "JavaScript";
let job = "teacher";
let age = 29;

//string concatenation

let fullName = lastName + space + firstName;
// console.log(fullName);
// console.log(lastName + space + firstName);

let personInfoOne = fullName + ". I am " + age + ". I live in " + country;

// console.log(personInfoOne);
// \n  : new line
// \t  : Tab,
// \\  : Back slash
// \'  : Single quote (')
// \"  : Double quote (")

// //string methods
let js = "  JavaScript";
console.log(js.length);

let pro = `this, is ${js.toUpperCase()}`;

// // upperCase
console.log(js.toUpperCase());

// //lowerCase
console.log(js.toLowerCase());

// //substr
// console.log(js.substring(4));

// //split
console.log(pro.split("i"));

// //trim (none space)
console.log(js.trim(" "));

// //includes
console.log(js.includes("Java"));
console.log(js.includes("java"));

// //replace
let string = "The first programming language is Javascript. ";
console.log(string.replace("Javascript", "Phyton"));

// //charAt  (Takes index and it returns the value at that index)
console.log(string.charAt(0));
let lastString = string.length - 1;
console.log(string.charAt(lastString));

// //concat
let str = "The";
console.log(str.concat("First", "Programming"));

// //repeat
console.log(string.repeat(5));
