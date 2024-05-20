let age = 35;
const gravity = 9.81; // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72; //Kilogram
// const PI = 3.14; // pi a geometrical constant

// More Examples
const boilingPoint = 100; // temperature
const bodyTemp = 37; //human body temperature,

console.log(age, gravity, mass, boilingPoint, bodyTemp);

//Math

const PI = Math.PI;

console.log("geometrical constant :", PI);
console.log("round down", Math.round(PI)); // hangiin oiriin buhel toog awna
console.log("round up", Math.round(9.76)); // hangiin oiriin buhel toog awna
console.log("floor", Math.floor(PI)); // down
console.log("ceil", Math.ceil(PI)); // up
console.log("min", Math.min(-5, 3, 20, 4, 5, 10));
console.log("max", Math.max(-5, 3, 20, 4, 5, 10));

const randNum = Math.random(10); //creates random number between 0 to 0.999999
console.log("random: ", randNum);

const numbs = Math.floor(Math.random() * 11);
console.log("random number", numbs);
