const lancamentoInfo = document.querySelector(".lancamentos__container");
const descricaoProdutos = document.querySelectorAll(".app__produto-descricao");

const btnsCarrinhosProduto = document.querySelectorAll(
  ".app__produto-carrinho"
);

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

for (let i = 0; i < btnsCarrinhosProduto.length; i++) {
  btnsCarrinhosProduto[i].addEventListener("click", () => {
    const objProduto = {
      id: descricaoProdutos[i].children[0].innerHTML,
      nome: descricaoProdutos[i].children[1].innerHTML,
      preco: descricaoProdutos[i].children[3].innerHTML,
      quantidade: 1,
    };

    carrinho.push(objProduto);
    localStorage.removeItem("carrinho");
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  });
}
