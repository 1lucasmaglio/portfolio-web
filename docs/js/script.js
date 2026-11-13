
// Mensagem de boas-vindas
alert("Bem-vindo(a) ao meu portfólio!");

// Mensagem de apresentação
function apresentacao() {
    alert("Olá! Meu nome é Lucas Maglio Chiabai e sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Carapicuíba.");
}

// Alterar o título principal
function alterarTitulo() {
    let nome = prompt("Digite seu nome:");

    if (nome !== null && nome !== "") {
        document.getElementById("titulo-principal").textContent = nome;
    }
}

// Contador de cliques
let clique = 0;

function contarClique() {
    clique = clique + 1;
    document.getElementById("contador").textContent = clique;
}

// Alternar entre tema escuro e tema cinza
function alternarTema() {
    document.body.classList.toggle("tema-claro");
}

// Formulário de contato
document.querySelector(".formulario").addEventListener("submit", function(e) {
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
