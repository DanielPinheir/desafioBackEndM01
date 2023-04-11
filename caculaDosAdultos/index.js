const ageList = [12, 10, 13];

const adultMinAge = (array) => {
  const adults = array.filter((person) => person >= 18);
  adults.length > 0
    ? console.log(Math.min(...adults))
    : console.log(`CRESCA E APARECA`);
};
adultMinAge(ageList);
