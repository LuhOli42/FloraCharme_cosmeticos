const lancamentoInfo = document.querySelector(".lancamentos__container");
const lancamentoImgUrl = document.querySelector(
  ".lancamentos__container-imagem"
);

const btnCarrinhoLancamentos = document.querySelector(
  ".lancamento__btn-carrinho"
);
const btnFavoritosLancamentos = document.querySelector(".lancamentos__btn-fav");

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

btnCarrinhoLancamentos.addEventListener("click", () => {
  const objProduto = {
    id: lancamentoInfo.children[0].innerHTML,
    nome: lancamentoInfo.children[1].innerHTML,
    preco: lancamentoInfo.children[4].innerHTML,
    quantidade: 1,
  };

  carrinho.push(objProduto);
  localStorage.removeItem("carrinho");
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
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

  favoritos.push(objProduto);
  localStorage.removeItem("favoritos");
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
});
