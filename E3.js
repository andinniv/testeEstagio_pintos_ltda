const calcFrete = (peso, distancia, tabelaPrecos) => {
  const chave = `${peso <= 1 ? "0-1" : "1-5"},${
    distancia <= 5 ? "0-5" : "6-10"
  }`;
  return tabelaPrecos[chave] || 0;
};

const tabelaPrecos = {
  "0-1,0-5": 10.0,
  "0-1,6-10": 15.0,
  "1-5,0-5": 20.0,
  "1-5,6-10": 25.0,
  "5-10,0-5": 30.0,
  "5-10,6-10": 35.0,
};

console.log(calcFrete(2, 7, tabelaPrecos));
