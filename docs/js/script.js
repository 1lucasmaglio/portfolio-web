// Popup simples
const popup = document.getElementById("popup");
const popupMensagem = document.getElementById("popup-mensagem");
const popupInput = document.getElementById("popup-input");
const popupConfirmar = document.getElementById("popup-confirmar");

function fecharPopup() {
  popup.classList.remove("ativo");
}

function abrirPopup(mensagem, mostrarInput = false) {
  popupMensagem.textContent = mensagem;
  popupInput.hidden = !mostrarInput;
  popupInput.value = "";

  // Define o botão para apenas fechar o popup
  popupConfirmar.onclick = fecharPopup;

  popup.classList.add("ativo");
}

// Mensagem de boas-vindas
abrirPopup("Bem-vindo(a) ao meu portfólio!");

// Mensagem de apresentação
function apresentacao() {
  abrirPopup(
    "Gosto de pensar que estou aqui para experienciar. Conhecer, sentir, aprender, errar e viver. Isso já é o suficiente pra mim."
  );
}

// Alterar o título principal
function alterarTitulo() {
  abrirPopup("Digite seu nome:", true);

  popupConfirmar.onclick = function () {
    let nome = popupInput.value.trim();

    if (nome !== "") {
      document.getElementById("titulo-principal").textContent = nome;
      fecharPopup();
    }
  };
}

/* Alternar entre os temas dos planetas */

let planetaAtual = 0;

const planetas = ["neptune", "uranus", "mercury", "venus"];

function alternarTema() {
  planetaAtual++;

  if (planetaAtual >= planetas.length) {
    planetaAtual = 0;
  }

  document.body.classList.remove("tema-uranus", "tema-venus", "tema-mercury");

  if (planetas[planetaAtual] !== "neptune") {
    document.body.classList.add("tema-" + planetas[planetaAtual]);
  }
}

// Formulário de contato
document.querySelector(".formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;
  let feedback = document.getElementById("feedback");

  // Limpa a mensagem anterior
  feedback.textContent = "";
  feedback.className = "";

  // Validação do nome
  if (nome.trim().length < 3) {
    feedback.textContent = "Nome deve ter pelo menos 3 caracteres.";
    feedback.className = "erro";
    return;
  }

  // Validação do e-mail
  if (!email.includes("@") || !email.includes(".")) {
    feedback.textContent = "E-mail inválido. Digite um e-mail válido.";
    feedback.className = "erro";
    return;
  }

  // Validação da mensagem
  if (mensagem.trim().length < 10) {
    feedback.textContent = "Mensagem deve ter pelo menos 10 caracteres.";
    feedback.className = "erro";
    return;
  }

  // Formulário preenchido corretamente
  feedback.textContent = "Formulário preenchido com sucesso!";
  feedback.className = "sucesso";

  // Limpa o formulário
  this.reset();
});

const alien = document.getElementById("alien");

alien.addEventListener("click", function () {
  alien.classList.add("tremendo");
});


