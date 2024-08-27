const verifDisp = (sku, estoque) => {
  const produto = estoque.find((item) => item.sku === sku);
  return produto && produto.quantidade > 0;
};

const produtos = [
  { sku: 1001, nome: "Camiseta", quantidade: 5 },
  { sku: 1002, nome: "Calça", quantidade: 10 },
  { sku: 1003, nome: "Vestido", quantidade: 3 },
];

console.log(verifDisp(1001, produtos));
console.log(verifDisp(1004, produtos));
