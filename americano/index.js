const numberList = [1, 3, 2, 1];

const americanGame = (list) => {
  const sumNumbers = list.reduce((current, actual) => current + actual);
  sumNumbers % list.length === 0
    ? console.log(list.length)
    : console.log(sumNumbers % list.length);
};

americanGame(numberList);
