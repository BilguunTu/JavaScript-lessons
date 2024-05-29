let person = {
  firstName: "Bilguun",
  lastName: "Tu",
  age: 29,
  head: {
    hairColor: "black",
    eyeColor: "blue",
  },
  skill: ["html", "css", "js", "cs"],
  isMarried: true,
};

const countOccurrence = (arr) => {
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (counts[num] !== undefined) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  return counts;
};

const a = [1, 1, 1, 3, 3, 2, 2, 22, 5, 77];

console.log(countOccurrence(a));
