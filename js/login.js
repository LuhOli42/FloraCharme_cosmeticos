const btnLogin = document.querySelector(".login__btn-login");
const paragrafoErro = document.querySelector(".paragrafo__erro");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

if (currentUser) {
  window.location.href = "./perfil.html";
}

btnLogin.addEventListener("click", () => {
  let usuariosExiste = false;
  let currentUser = null;
  console.log(inputEmail.value);
  usuarios.forEach((usuario) => {
    if (usuario.email === inputEmail.value) {
      if (usuario.senha === inputSenha.value) {
        usuariosExiste = true;
        currentUser = usuario;
      }
    }
  });

  if (usuariosExiste) {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "./perfil.html";
  } else {
    paragrafoErro.classList.remove("disable");
  }
});
