import acharProdutoLocalStorage from "./acharProdutoLocalStorage.js";

const lancamentoInfo = document.querySelector(".lancamentos__container");
const lancamentoImgUrl = document.querySelector(
  ".lancamentos__container-imagem"
);

const btnCarrinhoLancamentos = document.querySelector(
  ".lancamento__btn-carrinho"
);
const btnFavoritosLancamentos = document.querySelector(".lancamentos__btn-fav");
const popFavorito = document.querySelector(".popup__favorito");
const popCarrinho = document.querySelector(".popup__carrinho");

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

btnCarrinhoLancamentos.addEventListener("click", () => {
  const objProduto = {
    id: lancamentoInfo.children[0].innerHTML,
    nome: lancamentoInfo.children[1].innerHTML,
    preco: lancamentoInfo.children[4].innerHTML,
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

btnFavoritosLancamentos.addEventListener("click", () => {
  const objProduto = {
    id: lancamentoInfo.children[0].innerHTML,
    nome: lancamentoInfo.children[1].innerHTML,
    descricao: lancamentoInfo.children[2].innerHTML,
    preco: lancamentoInfo.children[4].innerHTML,
    categoria: lancamentoInfo.children[6].innerHTML,
    imagem: lancamentoImgUrl.children[0].src,
  };

  if (acharProdutoLocalStorage(objProduto, favoritos, "favoritos")) {
    popFavorito.children[0].innerHTML = "Produto ja foi adicionado no favorito";
    popFavorito.classList.remove("disable");
  }
  if (!acharProdutoLocalStorage(objProduto, favoritos, "favoritos")) {
    popFavorito.classList.remove("disable");
    favoritos.push(objProduto);
    localStorage.removeItem("favoritos");
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
});
