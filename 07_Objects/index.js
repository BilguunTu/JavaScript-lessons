// let person = {
//   firstName: "Bilguun",
//   lastName: "Tu",
//   age: 29,
//   head: {
//     hairColor: "black",
//     eyeColor: "blue",
//   },
//   skill: ["html", "css", "js", "cs"],
//   isMarried: true,
// };

// const countOccurrence = (arr) => {
//   const counts = {};

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];

//     if (counts[num] !== undefined) {
//       counts[num]++;
//     } else {
//       counts[num] = 1;
//     }
//   }

//   return counts;
// };

// const a = [1, 1, 1, 3, 3, 2, 2, 22, 5, 77];

// console.log(countOccurrence(a));

// const reverseArray = (arr) => {
//   const reversedArray = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }

//   return reversedArray;
// };

// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

// const countTops = (arr) => {
//   let tops = [];

//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       tops.push(arr[i]);
//     }
//   }

//   if (arr[0] > arr[1]) {
//     tops.push(arr[0]);
//   }

//   if (arr[arr.length - 1] > arr[arr.length - 2]) {
//     tops.push(arr[arr.length - 1]);
//   }

//   return tops;
// };

// console.log(countTops([5, 2, 6, 1, 7, 9]));

const printPairs = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(`${arr[i]} + ${arr[j]} = ${target}`);
      }
    }
  }
};

printPairs([5, 2, 6, 7, 1], 8);
