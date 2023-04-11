const lista = [1, 2, 3, 4];

function solucao(lista) {
  const elementsSum = lista.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual
  );
  return elementsSum;
}

console.log(solucao(lista));
