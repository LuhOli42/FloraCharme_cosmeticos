function acharProdutoLocalStorage(produto, arrayProdutos, nomeArray) {
  let acheiProduto = false;

  for (let item of arrayProdutos) {
    if (produto.id === item.id) {
      acheiProduto = true;
      if (item.quantidade) {
        item.quantidade++;
        localStorage.removeItem(nomeArray);
        localStorage.setItem(nomeArray, JSON.stringify(arrayProdutos));
      }
    }
  }

  return acheiProduto;
}

export default acharProdutoLocalStorage;
