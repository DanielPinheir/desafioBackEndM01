const processData = (input) => {
  const inputTratado = input.trim().split("\n");
  const coordenadas = [];
  for (let i = 1; i < inputTratado.length; i++) {
    const coordenada = inputTratado[i].split(" ");
    coordenadas.push({
      x: parseFloat(coordenada[0]),
      y: parseFloat(coordenada[1]),
    });
  }

  let maxDist = 0;

  for (let i = 0; i < coordenadas.length; i++) {
    for (let j = i + 1; j < coordenadas.length; j++) {
      const dist = Math.sqrt(
        (coordenadas[j].x - coordenadas[i].x) ** 2 +
          (coordenadas[j].y - coordenadas[i].y) ** 2
      );
      if (dist > maxDist) {
        maxDist = dist;
      }
    }
  }
  console.log(maxDist);
};

const input1 = "3\n0 0\n0 3\n4 0";
const input2 = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7";

processData(input1);
processData(input2);
