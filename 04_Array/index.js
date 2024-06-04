// // const a = [-1, -689, -45, -23, -689, -2, -45];

// // function max(arr) {
// //   let maxValue = arr[0];

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > maxValue) {
// //       maxValue = arr[i];
// //     }
// //   }

// //   return maxValue;
// // }

// // const result = max(a);

// // console.log("maxNumber", result); // 67689

// //Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.

// // let plusNum = [2, -4, -5, 2, -6, 10];

// // const countNumber = (arr) => {
// //   let sumNum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sumNum = sumNum + arr[i];
// //   }
// //   return sumNum;
// // };

// // console.log(countNumber(plusNum));

// // Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.

// // const maxNumber = (arr) => {
// //   let maxNum = 0;

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > 0) {
// //       maxNum = arr[i];
// //     }
// //   }
// //   return maxNum;
// // };

// // console.log(maxNumber(plusNum));

// // Өгөгдсөн массивын хамгийн бага элементийг ол.

// // const minNumber = (arr) => {
// //   let minNum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] < 0) {
// //       minNum = arr[i];
// //     }
// //   }

// //   return minNum;
// // };

// // console.log(minNumber(plusNum));

// // Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа

// // const reverseNumber = (arr) => {
// //   let revNum = [];
// //   for (let i = arr.length - 1; i >= 0; i--) {
// //     revNum.push(arr[i]);
// //   }

// //   return revNum;
// // };

// // console.log(reverseNumber(plusNum));

// // Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа

// // let array = [1, 3, 7, 1, 2, 6, 3, 2, 2, 5, 1];
// // const countGreaterThanNeighbors = (arr) => {
// //   let count = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
// //       count++;
// //     }
// //   }
// //   return count;
// // };

// // console.log(countGreaterThanNeighbors(array));

// // Өгөгдсөн массивийн бүх хосыг хэвлэ
// // let arrayPrintPairs = [1, 2, 3, 4, 5];
// // const printPairs = (arr) => {
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     for (let j = i; j < arr.length; j++) {
// //       console.log(`print ${arr[i]}, ${arr[j]}`);
// //     }
// //   }
// // };

// // printPairs(arrayPrintPairs);

// //Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол

// // let countSum = (arr, target) => {
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //       if (arr[i] + arr[j] == target) {
// //         console.log(`bla ${arr[i]} + ${arr[j]} = ${target}`);
// //       }
// //     }
// //   }
// // };

// //Өгөгдсөн 2 массивийн огтлолцлыг ол

// // const findIntersection = (arr, arr1) => {
// //   let intersection = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     let element = arr[i];
// //     if (arr1.indexOf(element) !== -1 && intersection.indexOf(element) === -1) {
// //       intersection.push(element);
// //     }
// //   }
// //   return intersection;
// // };

// // console.log("hello", findIntersection([1, 2, 3], [2, 3, 4]));

// // Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул

// const moveNegativesToLeft = (arr) => {
//   // let result = [];
//   // let index = 0;

//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] < 0) {
//   //     result[index++] = arr[i];
//   //   }
//   // }

//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] >= 0) {
//   //     result[index++] = arr[i];
//   //   }
//   // }

//   // return result;

//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       let temp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = temp;
//       j++;
//     }
//   }

//   return arr;
// };

// let arr = [2, 5, 1, -3, -1, 9, -9, -3, -2];
// console.log(moveNegativesToLeft(arr));

// // Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол

// // const missingNumber = (arr) => {
// //   let n = arr.length + 1;
// //   let Sum = (n * (n + 1)) / 2;

// //   let actualSum = 0;

// //   for (let i = 0; i < arr.length; i++) {
// //     actualSum += arr[i];
// //   }

// //   return Sum - actualSum;
// // };

// // let arr1 = [1, 2, 3, 5, 6, 7];

// // console.log(missingNumber(arr1));

// // Массив болон тоо өгөгдөв. Өгөгдсөн тоо массив байгаа бол дугаарыг нь, байхгүй бол -1 буцаа

// // const removeNumber = (arr, number) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === number) {
// //       return i;
// //     }
// //   }
// //   return -1;
// // };

// // let a = [1, 3, 5, 2];

// // console.log(removeNumber(a, 6));

// //Өгөгдсөн массивын элементүүдийг хойш нь нэг цикл шилжилт хий. Өөрөөр хэлбэл 1-рийг 2-рт, 2-рыг 3-рт, гэх мэт сүүлийн элементийг 1-рт тус тус шилжүүл.
// // Жич: 1 2 3 4 5 -> 5 1 2 3 4

// const stepReverse = (arr) => {
//   for (let i = arr.length - 2; i >= 0; i--) {
//     // arr[i + 1] = arr[i];
//     const temp = arr[i + 1];
//     arr[i + 1] = arr[i];
//     arr[i] = temp;
//   }
//   return arr;
// };

// let stepRe = [5, 4, 3, 2, 1];
// console.log(stepReverse(stepRe));

// // Өгөгдсөн массив өсөх эрэмбээр байвал true үгүй бол false буцаа

// const isGrowing = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// let up = [5, 4, 3, 2, 1];
// console.log(isGrowing(up));

// // HackerLand University has the following grading policy:
// //     - Every student receives a  in the inclusive range from  to .
// //     - Any  less than  is a failing grade.
// // Sam is a professor at the university and likes to round each student's  according to these rules:
// // If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// // If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// // Examples:
// // 84 - round to  (85 - 84 is less than 3)
// // 28 - do not round (result is less than 40)
// // 57 - do not round (60 - 57 is 3 or higher)
// // Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// const roundGrades = (grades) => {
//   function roundGrade(grade) {
//     if (grade < 38) {
//       return grade;
//     }
//     const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

//     if (nextMultipleOf5 - grade < 3) {
//       return nextMultipleOf5;
//     }
//     return grade;
//   }
//   return grades.map(roundGrade);
// };

// const studentGrades = [84, 29, 57, 38, 73];
// console.log(roundGrades(studentGrades));

// // callback;
const arr = [1, 2, 3, 4, 5, 6, 7]; // 1 Dimension
const arr2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

for (let i = 0; i < arr.length; i++) {
  console.log(arr.length - 1 - i);
}

const printDiagonal = (arr) => {
  for (const i in arr) {
    console.log(arr[i][arr.length - 1 - i]);
  }
};

printDiagonal(arr2);
