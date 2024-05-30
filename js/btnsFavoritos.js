import acharProdutoLocalStorage from "./acharProdutoLocalStorage.js";

const descricaoProdutos = document.querySelectorAll(".app__produto-descricao");
const urlImageProdutos = document.querySelectorAll(".app__produto-img");
const btnsFavoritosProduto = document.querySelectorAll(
  ".app__produto-favorito"
);
const popFavorito = document.querySelector(".popup__favorito");

const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

for (let i = 0; i < btnsFavoritosProduto.length; i++) {
  btnsFavoritosProduto[i].addEventListener("click", () => {
    const objProduto = {
      id: descricaoProdutos[i].children[0].innerHTML,
      nome: descricaoProdutos[i].children[1].innerHTML,
      descricao: descricaoProdutos[i].children[2].innerHTML,
      preco: descricaoProdutos[i].children[3].innerHTML,
      categoria: descricaoProdutos[i].children[4].innerHTML,
      imagem: urlImageProdutos[i].src,
    };
    if (acharProdutoLocalStorage(objProduto, favoritos, "favoritos")) {
      popFavorito.children[0].innerHTML =
        "Produto ja foi adicionado no favorito";
      popFavorito.classList.remove("disable");
    }
    if (!acharProdutoLocalStorage(objProduto, favoritos, "favoritos")) {
      popFavorito.classList.remove("disable");
      favoritos.push(objProduto);
      localStorage.removeItem("favoritos");
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
  });
}
