const textoCarrinhoVazio = document.querySelector(".carrinho__vazio");
const tabelaCarrinho = document.querySelector(".append__list");
const tabelaAparecer = document.querySelector(".carrinho__formulario");
const valorTotalTexto = document.querySelector(".valor-total");

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let valorTotal = 0;

if (carrinho.length > 0) {
  textoCarrinhoVazio.classList.add("disable");
  tabelaAparecer.classList.remove("disable");
  carrinho.forEach((element) => {
    tabelaCarrinho.append(criarElementoCarrinho(element));
  });
}

for (let produto of carrinho) {
  valorTotal += Number(produto.preco.split(" ")[1]);
}

valorTotalTexto.innerHTML = valorTotal.toFixed(2);

function criarElementoCarrinho(elemento) {
  const li = document.createElement("li");
  li.classList.add("carrinho__lista-produtos");

  li.innerHTML = `<h3 class="carrinho__lista-produto-nome">${elemento.nome}</h3>
    <div class="carrinho__lista-produto-quantidade">${elemento.quantidade}</div>
    <div class="carrinho__lista-container">
      <button class="carrinho__lista-delete-btn">
        <img
          src="../assets/images/icons/Lixeira.png"
          alt="Deletar item"
        />
      </button>
      <p class="carrinho__lista-produto-preço">R$ ${(
        Number(elemento.preco.split(" ")[1]) * Number(elemento.quantidade)
      ).toFixed(2)}</p>
    </div>`;

  return li;
}

const btnLixeira = document.querySelectorAll(".carrinho__lista-delete-btn");

for (let i = 0; i < btnLixeira.length; i++) {
  btnLixeira[i].addEventListener("click", () => {
    carrinho.splice(i, 1);
    localStorage.removeItem("carrinho");
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    window.location.reload();
  });
}
