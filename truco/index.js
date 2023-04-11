const cartaParaCima = "3";

const manilha = (carta) => {
  const cardList = ["Q", "J", "K", "A", "2", "3"];
  let manilhaCardIndex = cardList.indexOf(carta) + 1;
  manilhaCardIndex === 6 ? (manilhaCardIndex = 0) : null;
  return cardList[manilhaCardIndex];
};

console.log(manilha(cartaParaCima));
