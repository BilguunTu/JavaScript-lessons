const a = [-1, -689, -45, -23, -689, -2, -45];

function max(arr) {
  let maxValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}

const result = max(a);

console.log("maxNumber", result); // 67689

//Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.
let plusNum = [2, -4, -5, 2, -6];

const countNumber = (arr) => {
  let sumNum = 0;
  for (let i = 0; i < arr.length; i++) {
    sumNum = sumNum + arr[i];
  }
  return sumNum;
};

console.log(countNumber(plusNum));

// Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.

const maxNumber = (arr) => {
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      maxNum = arr[i];
    }
  }
  return maxNum;
};

console.log(maxNumber(plusNum));

// Өгөгдсөн массивын хамгийн бага элементийг ол.
const minNumber = (arr) => {
  let minNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      minNum = arr[i];
    }
  }

  return minNum;
};

console.log(minNumber(plusNum));
