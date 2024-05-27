// ==
// ===
// !=
// >
// <
// >=
// // <=

// console.log(3 > 2); // true, because 3 is greater than 2
// console.log(3 >= 2); // true, because 3 is greater than 2
// console.log(3 < 2); // false,  because 3 is greater than 2
// console.log(2 < 3); // true, because 2 is less than 3
// console.log(2 <= 3); // true, because 2 is less than 3
// console.log(3 == 2); // false, because 3 is not equal to 2
// console.log(3 != 2); // true, because 3 is not equal to 2
// console.log(3 == "3"); // true, compare only value
// console.log(3 === "3"); // false, compare both value and data type
// console.log(3 !== "3"); // true, compare both value and data type
// console.log(3 != 3); // false, compare only value
// console.log(3 !== 3); // false, compare both value and data type
// console.log(0 == false); // true, equivalent
// console.log(0 === false); // false, not exactly the same
// console.log(0 == ""); // true, equivalent
// console.log(0 == " "); // true, equivalent
// console.log(0 === ""); // false, not exactly the same
// console.log(1 == true); // true, equivalent
// console.log(1 === true); // false, not exactly the same
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(NaN == NaN); // false, not equal
// console.log(NaN === NaN); // false
// console.log(typeof NaN); // number

// console.log("mango".length == "avocado".length); // false
// console.log("mango".length != "avocado".length); // true
// console.log("mango".length < "avocado".length); // true
// console.log("milk".length == "meat".length); // true
// console.log("milk".length != "meat".length); // false
// console.log("tomato".length == "potato".length); // true
// console.log("python".length > "dragon".length); // false

// // && ampersand operator example

// const check1 = 4 > 3 && 10 > 5; // true && true -> true
// const check2 = 4 > 3 && 10 < 5; // true && false -> false
// const check3 = 4 < 3 && 10 < 5; // false && false -> false

// // || pipe or operator, example

// const check4 = 4 > 3 || 10 > 5; // true  || true -> true
// const check5 = 4 > 3 || 10 < 5; // true  || false -> true
// const check6 = 4 < 3 || 10 < 5; // false || false -> false

// //! Negation examples

// let check_1 = 4 > 3; // true
// let check_2 = !(4 > 3); //  false
// let isLightOn = true;
// let isLightOff = !isLightOn; // false
// let isMarried = !false; // true

// Date()

// const now = new Date();
// console.log("огноо", now.getTime());
// const year = now.getFullYear();
// const month = now.getMonth() + 1;
// const day = now.getDate();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const sec = now.getSeconds();

// console.log(year, month, day, hours, minutes, sec);

// ("Өнөөдөр 2024 оны 5 - р сарын 22 өдөр. Одоо 12 цаг 12 мин 5 секунд болж байна.");

// let x = 9;
// let y = 2;

// if (x < 10 && y > 1) {
//   console.log("let's go");
// }

// if (x == 10 || y == 2) {
//   console.log("good");
// }

// if (x !== y) {
//   console.log("ta dugaaraa zow oruulna uu?");
// }

// function creatClass(age, gender) {
//   if (x >= 6 && x <= 17 && y == "eregtei") {
//     return console.log(`${x - 5} - r angiin suragch eregtei`);
//   } else if (x >= 6 && x <= 17 && y == "emegtei") {
//     return console.log(`${x - 5} - r angiin suragch emegtei`);
//   } else if (x < 6) {
//     console.log(`surguulid orhod ${6 - x} jil uldsen bn`);
//   } else if (x > 17) {
//     console.log(`ta surguulia tugsood ${x - 17} jil bolj bn`);
//   }
// }

// const a = creatClass(32, "emegtei");
// const Boogi = creatClass(16, "eregtei");
// const Gerlee = creatClass(32, "emegtei");

// const x = 5;
// const y = "male";

// if (x < 10 && x > 1 && (y == "female" || y == "male" )) {
//   console.log(x + " class " + y + " " + "student " );
// } else {
//   console.log("you are not student");
// }

let count = 0;
let countr = ++count;

console.log(countr, count);

1 + count;
console.log(count);

x = x + 1;
x++;

x = 1 + x;
++x;

x--;
--x;
