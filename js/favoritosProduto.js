const textoFavoritoVazio = document.querySelector(".favoritos__vazio");
const favoritoListaProduto = document.querySelector(".produtos__lista");
const favoritosListaDeProdutos = document.querySelector(
  ".produtos__favoritos-main"
);

const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

if (favoritos.length > 0) {
  textoFavoritoVazio.classList.add("disable");
  favoritosListaDeProdutos.classList.remove("disable");
  favoritos.forEach((element) => {
    favoritoListaProduto.append(criarElementoFavorito(element));
  });
}

function criarElementoFavorito(elemento) {
  const li = document.createElement("li");
  li.classList.add("produtos__card");

  li.innerHTML = `              <div class="produtos__card-container">
  <h3 class="produto__titulo">${elemento.nome}</h3>
  <p class="produto__descricao">
    ${elemento.descricao}
  </p>
  <p class="produto__preco">${elemento.preco}</p>
</div>
<div class="produtos__card-container">
  <div class="produtos__imagem-container">
    <img
      src="../assets${elemento.imagem.split("assets")[1]}"
      alt="Creme de mão limons hand's"
    />
  </div>
  <ul class="produtos__btns">
    <li>
      <button class="produtos__btn produtos__btn-secundario">
        <a href="saiba-mais"
          ><img
            src="../assets/images/icons/+.png"
            alt="Saiba mais"
        /></a>
      </button>
    </li>
    <li>
      <button class="produtos__btn produtos__btn-secundario favoritos__lista-delete-btn">

          <img
            src="../assets/images/icons/Lixeira.png"
            alt="Deletar"
   </a>
      </button>
    </li>
    <li>
      <button class="produtos__btn">
        <a href="carrinho"
          ><img
            src="../assets/images/icons/Carrinho.png"
            alt="Carrinho"
            class="produtos__btn-carrinho"
        /></a>
      </button>
    </li>
  </ul>
</div>`;

  return li;
}

const btnLixeira = document.querySelectorAll(".favoritos__lista-delete-btn");

for (let i = 0; i < btnLixeira.length; i++) {
  btnLixeira[i].addEventListener("click", () => {
    favoritos.splice(i, 1);
    localStorage.removeItem("favoritos");
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    window.location.reload();
  });
}
