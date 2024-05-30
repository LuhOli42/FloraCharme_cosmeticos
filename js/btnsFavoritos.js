const descricaoProdutos = document.querySelectorAll(".app__produto-descricao");
const urlImageProdutos = document.querySelectorAll(".app__produto-img");

const btnsFavoritosProduto = document.querySelectorAll(
  ".app__produto-favorito"
);

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

    favoritos.push(objProduto);
    localStorage.removeItem("favoritos");
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  });
}
