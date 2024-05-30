const btnMaisInfos = document.querySelectorAll(".app__produto-saiba-mais");

const urlImageProdutos = document.querySelectorAll(".app__produto-img");
const descricaoProdutos = document.querySelectorAll(".app__produto-descricao");

for (let i = 0; i < btnMaisInfos.length; i++) {
  btnMaisInfos[i].addEventListener("click", () => {
    const objProduto = {
      id: descricaoProdutos[i].children[0].innerHTML,
      nome: descricaoProdutos[i].children[1].innerHTML,
      descricao: descricaoProdutos[i].children[2].innerHTML,
      preco: descricaoProdutos[i].children[3].innerHTML,
      categoria: descricaoProdutos[i].children[4].innerHTML,
      imagem: urlImageProdutos[i].src,
    };

    localStorage.removeItem("produtoEscolhido");
    localStorage.setItem("produtoEscolhido", JSON.stringify(objProduto));

    window.location.href = "../pages/produto.html";
  });
}
