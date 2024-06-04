function reverse(numbers) {
  const reverseNum = numbers.map((n) => {
    if (n === "1") {
      return "0";
    } else {
      return "1";
    }
  });
  return reverseNum;
}

function processData(input) {
  //Enter your code here
  let prev = ["1"];
  let next = ["1"];

  for (let i = 2; i <= input; i++) {
    next = [...prev, "1", ...reverse([...next.reverse()])];
    prev = next;
  }
  console.log(prev.join(""));
}
