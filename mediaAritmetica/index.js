const list = [2, 3, 4];

const averageEconomy = (list) => {
  const totalEconomy = list.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return totalEconomy / list.length;
};

console.log(averageEconomy(list));
