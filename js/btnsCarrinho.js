import acharProdutoLocalStorage from "./acharProdutoLocalStorage.js";

const descricaoProdutos = document.querySelectorAll(".app__produto-descricao");
const popCarrinho = document.querySelector(".popup__carrinho");

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

    if (acharProdutoLocalStorage(objProduto, carrinho, "carrinho")) {
      popCarrinho.children[0].innerHTML =
        "Foi adicionado mais um do mesmo produto no carrinho";
      popCarrinho.classList.remove("disable");
    }
    if (!acharProdutoLocalStorage(objProduto, carrinho, "carrinho")) {
      popCarrinho.classList.remove("disable");
      carrinho.push(objProduto);
      localStorage.removeItem("carrinho");
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  });
}
