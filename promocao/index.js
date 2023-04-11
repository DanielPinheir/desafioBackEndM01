const productValueList = [200, 150, 50, 100];

const promocao = (list) => {
  const productValueSum = list.reduce((acum, atual) => acum + atual);
  list.length < 3
    ? console.log(productValueSum)
    : console.log(productValueSum - Math.min(...list) * 0.5);
};

promocao(productValueList);
