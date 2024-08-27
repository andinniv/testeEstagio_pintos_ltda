const gerarRelatorioVendas = (vendas, dataInicial, dataFinal) => {
  const relatorio = vendas
    .filter((venda) => venda.data >= dataInicial && venda.data <= dataFinal)
    .reduce((acc, venda) => {
      if (!acc[venda.sku]) {
        acc[venda.sku] = { totalVendido: 0, valorTotal: 0 };
      }
      acc[venda.sku].totalVendido += venda.quantidade;
      acc[venda.sku].valorTotal += venda.valorTotal;
      return acc;
    }, {});

  const totalGeral = Object.values(relatorio).reduce(
    (total, item) => total + item.valorTotal,
    0
  );

  return { relatorio, totalGeral };
};

const vendas = [
  { sku: 1001, quantidade: 2, valorTotal: 50.0, data: "2021-01-01" },
  { sku: 1002, quantidade: 1, valorTotal: 20.0, data: "2021-01-01" },
  { sku: 1003, quantidade: 5, valorTotal: 100.0, data: "2021-01-02" },
  { sku: 1001, quantidade: 1, valorTotal: 25.0, data: "2021-01-02" },
];

const { relatorio, totalGeral } = gerarRelatorioVendas(
  vendas,
  "2021-01-01",
  "2021-01-02"
);
console.log(relatorio);
console.log("Total Geral:", totalGeral);
