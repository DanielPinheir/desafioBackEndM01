const valorViagem = (tempoEmMin, kmPercorridos) => {
  const precoViagemAte20min = tempoEmMin * 50;
  const precoViagemAte10km = kmPercorridos * 70;
  const precoViagemAcimaDe20min = 20 * 50 + (tempoEmMin - 20) * 30;
  const precoViagemAcimaDe10km = 10 * 70 + (kmPercorridos - 10) * 50;
  if (kmPercorridos <= 10 && tempoEmMin <= 20) {
    console.log(Math.floor(precoViagemAte20min + precoViagemAte10km));
  } else if (kmPercorridos > 10 && tempoEmMin <= 20) {
    console.log(Math.floor(precoViagemAcimaDe10km + precoViagemAte20min));
  } else if (kmPercorridos <= 10 && tempoEmMin > 20) {
    console.log(Math.floor(precoViagemAte10km + precoViagemAcimaDe20min));
  } else {
    console.log(Math.floor(precoViagemAcimaDe10km + precoViagemAcimaDe20min));
  }
};

valorViagem(25, 11.5);
