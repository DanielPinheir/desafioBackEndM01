const numberIncludes = (number, minNumber, maxNumber) => {
  number >= minNumber && number <= maxNumber
    ? console.log(`PERTENCE`)
    : console.log(`NAO PERTENCE`);
};

numberIncludes(10, 5, 20);
