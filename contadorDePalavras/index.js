const text =
  "  Cuidado, pois usuarios as     vezes deixam espacos vazios no fim do texto sem querer   ";

const wordCount = (text) => {
  const textList = text.trim().split(" ");
  const textListTransform = textList.filter((word) => word.length > 0);
  return textListTransform.length;
};

console.log(wordCount(text));
