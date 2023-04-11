const listValues = [0, 5, 6, 10, 11];
const min = 2;
const max = 10;
const validateValues = (min, max, values) => {
  return values.filter((value) => (value >= min) & (value <= max));
};

console.log(validateValues(min, max, listValues));
