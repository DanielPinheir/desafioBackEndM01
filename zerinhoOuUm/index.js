const players = [
  {
    nome: "Herman",
    jogada: 1,
  },
  {
    nome: "Rhodes",
    jogada: 0,
  },
  {
    nome: "Beach",
    jogada: 0,
  },
  {
    nome: "Laurel",
    jogada: 0,
  },
  {
    nome: "Beatrice",
    jogada: 0,
  },
  {
    nome: "Alison",
    jogada: 0,
  },
  {
    nome: "Saundra",
    jogada: 0,
  },
  {
    nome: "Klein",
    jogada: 0,
  },
];

const vencedor = (listaJogadores) => {
  const jogadasZero = [];
  const jogadasUm = [];
  for (let jogador of listaJogadores) {
    if (jogador.jogada === 0) {
      jogadasZero.push(jogador);
    }

    if (jogador.jogada === 1) {
      jogadasUm.push(jogador);
    }
  }

  if (jogadasZero.length !== 1 && jogadasUm.length !== 1) {
    console.log(`NINGUEM`);
  } else if (jogadasZero.length === 1) {
    console.log(jogadasZero[0].nome);
  } else {
    console.log(jogadasUm[0].nome);
  }
};

vencedor(players);
