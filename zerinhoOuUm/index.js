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
  const jogada0 = listaJogadores.filter((jogador) => jogador.jogada === 0);
  const jogada1 = listaJogadores.filter((jogador) => jogador.jogada === 1);
  if (jogada0.length !== 1 && jogada1.length !== 1) {
    console.log(`NINGUEM`);
  } else if (jogada0.length === 1) {
    console.log(jogada0[0].nome);
  } else {
    console.log(jogada1[0].nome);
  }
};

vencedor(players);
