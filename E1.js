const calcValortotal = (valorParcela, quantidadeParcela, taxaJurosmensal) => {
  const i = taxaJurosmensal / 100;
  const n = quantidadeParcela;
  const A = valorParcela * (((1 + i) ** n - 1) / i);
  return A;
};

console.log(calcValortotal(100, 12, 2));
