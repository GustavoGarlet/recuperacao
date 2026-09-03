// =========================================================
// ARQUIVO DE APOIO - NÃO HÁ UMA SOLUÇÃO PRONTA AQUI.
// Desenvolva a lógica JavaScript da tarefa.
// =========================================================

// Sugestão de organização:
// 1. Selecione os elementos necessários.
// 2. Crie as variáveis de estado, se necessário.
// 3. Adicione os eventos.
// 4. Implemente as funções.
// 5. Teste cada requisito individualmente.
// Pegando os elementos do HTML
const controle = document.getElementById("controle");
const equipamento = document.getElementById("equipamento");
const status = document.getElementById("status");
const botaoLigar = document.getElementById("botaoLigar");
const botaoResetar = document.getElementById("botaoResetar");
const cor = document.getElementById("cor");

// Variável para saber se está ligado
let ligado = false;

// Botão de ligar e desligar
botaoLigar.onclick = function () {
    ligado = !ligado;

    if (ligado) {
        equipamento.classList.remove("desligado");
        equipamento.classList.add("ligado");

        status.textContent = "LIGADO";
        botaoLigar.textContent = "LIGADO";
        botaoLigar.textContent = "Desligar Equipamento";

        // Aplica a cor atual ao fundo da seção
        controle.style.backgroundColor = cor.value;
    } else {
        equipamento.classList.remove("ligado");
        equipamento.classList.add("desligado");

        status.textContent = "DESLIGADO";
        botaoLigar.textContent = "DESLIGADO";
        botaoLigar.textContent = "Ligar Equipamento";
    }
};

// Escolher a cor somente quando estiver ligado
cor.oninput = function () {
    if (ligado) {
        controle.style.backgroundColor = cor.value;
    }
};

// Botão de resetar
botaoResetar.onclick = function () {
    ligado = false;

    equipamento.classList.remove("ligado");
    equipamento.classList.add("desligado");

    status.textContent = "DESLIGADO";
    botaoLigar.textContent = "Ligar Equipamento";

    // Reseta o seletor de cor
    cor.value = "#ffffff";

    // Reseta o fundo da seção #controle para branco
    controle.style.backgroundColor = "#ffffff";
};
