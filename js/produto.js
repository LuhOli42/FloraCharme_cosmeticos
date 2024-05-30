const produtoTitulo = document.querySelectorAll(".produto__titulo");
const produtoDescricao = document.querySelectorAll(".produto__descricao");
const produtoPreco = document.querySelectorAll(".produto__preco");
const produtoCategoria = document.querySelectorAll(".produto__categoria");
const produtoImagem = document.querySelector(".produto__imagem");

const produtoEscolhido = JSON.parse(localStorage.getItem("produtoEscolhido"));

console.log(produtoEscolhido);

produtoTitulo.forEach((produto) => {
  produto.innerHTML = produtoEscolhido.nome;
});

produtoDescricao.forEach((produto) => {
  produto.innerHTML = produtoEscolhido.descricao;
});

produtoPreco.forEach((produto) => {
  produto.innerHTML = produtoEscolhido.preco;
});

produtoCategoria.forEach((produto) => {
  produto.innerHTML = produtoEscolhido.categoria;
});

produtoImagem.src = `../assets${produtoEscolhido.imagem.split("assets")[1]}`;
