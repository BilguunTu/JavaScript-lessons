function firstFunction(n) {
  for (let i = 0; i < array.length; i++) {
    console.log("first function");
  }
}

let a = [1, 4, 4, 5, 3, 4, 5, 35, 43];

const max = (arr) => {
  let maxNum = arr[1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }

  return maxNum;
};

const result = max(a);

console.log(result);
