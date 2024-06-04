// function print(val) {
//   console.log(val);
// }

// function useCallback(callback) {
//   callback("hello");
// }
// useCallback(print);

// let names = ["Baagii", "Boogii", "Eegii"];

// names.forEach((name) => console.log(name));

// const useForEach = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     callback(element);
//   }
// };
// useForEach(arr, console.log);

// // const g = names.forEach((g) => {
// //   console.log(g);
// // });

// useForEach(names, (name) => {
//   const a = name + ", Hello";
//   console.log(a);
// });

// const findIndexOfMax = (arr) => {
//   let max = 0;

//   arr.forEach((el, index) => {
//     if (el > arr[max]) {
//       max = index;
//     }
//   });

//   return max;
// };

// console.log(findIndexOfMax([34, 23, 11, 5643, 789]));

// let array = [2, 4, 5, 6, 8];

// let element = array.map((el) => {
//   return el * 2;
// });

// console.log(element);

// const grades = [82, 28, 65, 79];

// const roundedGrades = grades
//   .map((grade) => {
//     if (grade < 38) {
//       return grade;
//     } else if (grade % 5 >= 3) {
//       return grade + 5 - (grade % 5);
//     } else {
//       return grade;
//     }
//   })
//   .map((item) => {
//     return item * 2;
//   });

// console.log(roundedGrades);

// const useMap = (arr) => {
//   let a = [];
//   arr.forEach((el) => {
//     a.push(el * 2);
//   });
//   return a;
// };

// console.log(useMap(array));

const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((acc, current) => {
  acc[current] = true;
  return acc;
}, {});

console.log(sum);

console.log(arr.reverse());
