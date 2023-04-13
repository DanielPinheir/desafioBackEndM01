const processData = (input) => {
  const listaSenhas = input.trim().split("\n");
  const senha = listaSenhas[0];
  const senhaDigitada = listaSenhas[1];
  let i = 0,
    j = 0;
  while (i < senha.length && j < senhaDigitada.length) {
    if (senha[i] === senhaDigitada[j]) {
      i++;
    }
    j++;
  }
  i === senha.length ? console.log(`SIM`) : console.log(`NAO`);
};

const input = "cubos\ncuggbyos";
const input1 = "cubos\nusdfcierbpo";
const input2 = "cubos\ncccuggbyos";
const input3 = "cubos\ncfugdfdgdfggbyops";
const input4 = "cubos\nsobuc";

processData(input);
processData(input1);
processData(input2);
processData(input3);
processData(input4);
