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
  const jogadaZero = [];
  const jogadaUm = [];
  for (let jogador of listaJogadores) {
    if (jogador.jogada === 0) {
      jogadaZero.push(jogador);
    }

    if (jogador.jogada === 1) {
      jogadaUm.push(jogador);
    }
  }

  if (jogadaZero.length !== 1 && jogadaUm.length !== 1) {
    console.log(`NINGUEM`);
  } else if (jogadaZero.length === 1) {
    console.log(jogadaZero[0].nome);
  } else {
    console.log(jogadaUm[0].nome);
  }
};

vencedor(players);
