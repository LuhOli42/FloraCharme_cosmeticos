const fotoUsuario = document.querySelector(".perfil__foto-background");
const perfilNome = document.querySelector(".perfil__nome");
const perfilEmail = document.querySelector(".perfil__email");
const perfilTelefone = document.querySelector(".perfil__telefone");
const perfilCep = document.querySelector(".perfil__cep");
const perfilEndereco = document.querySelector(".perfil__endereco");
const perfilComplemento = document.querySelector(".perfil__complemento");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const btnSair = document.querySelector(".perfil__btn-submit");

fotoUsuario.src = currentUser.imagem;
perfilNome.innerHTML = currentUser.nome;
perfilEmail.innerHTML = currentUser.email;
perfilTelefone.innerHTML = currentUser.telefone;
perfilCep.innerHTML = currentUser.cep;
perfilEndereco.innerHTML = currentUser.endereco;
perfilComplemento.innerHTML = currentUser.complemento;

btnSair.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "../index.html";
});
