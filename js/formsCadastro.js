const iniciarBtnCamera = document.querySelector(".cadastro__abrir-camera");
const btnTirarFoto = document.querySelector(".cadastro__tirar-foto");
const campoCamera = document.querySelector(".cadastro__foto");
const video = document.querySelector(".cadastro__camera");
const canvas = document.querySelector(".cadastro__canvas");
const formulario = document.querySelector("[data-formulario]");

let imagemUrl = "";
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

iniciarBtnCamera.addEventListener("click", async () => {
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  iniciarBtnCamera.classList.add("disable");
  btnTirarFoto.classList.remove("disable");

  video.srcObject = iniciarVideo;
});

btnTirarFoto.addEventListener("click", () => {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

  imagemUrl = canvas.toDataURL("image/jpeg");

  video.classList.add("disable");
  canvas.classList.remove("disable");
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const listaRepostas = {
    nome: evento.target.elements["nome"].value,
    email: evento.target.elements["email"].value,
    senha: evento.target.elements["senha"].value,
    telefone: evento.target.elements["telefone"].value,
    cep: evento.target.elements["cep"].value,
    endereco: evento.target.elements["endereco"].value,
    complemento: evento.target.elements["complemento"].value,
    imagem: imagemUrl,
  };

  usuarios.push(listaRepostas);

  localStorage.removeItem("usuarios");
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  window.location.href = "./login.html";
});
