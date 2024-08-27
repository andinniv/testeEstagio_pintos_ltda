const attEstoque = (itensVendidos, estoque) => {
  return estoque.map((item) => {
    const vendido = itensVendidos.find((v) => v.sku === item.sku);
    if (vendido) {
      return { ...item, quantidade: item.quantidade - vendido.quantidade };
    }
    return item;
  });
};

const itensVendidos = [
  { sku: 1001, quantidade: 2 },
  { sku: 1002, quantidade: 1 },
  { sku: 1003, quantidade: 5 },
];

const estoque = [
  { sku: 1001, quantidade: 5 },
  { sku: 1002, quantidade: 2 },
  { sku: 1003, quantidade: 5 },
];

console.log(attEstoque(itensVendidos, estoque));
