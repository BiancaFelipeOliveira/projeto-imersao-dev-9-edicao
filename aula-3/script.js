const totalNiveis = 3;
const caminhosCertos = Array.from(
  { length: totalNiveis },
  () => Math.floor(Math.random() * 2) + 1
);
let nivelAtual = 0;
const jogo = document.getElementById("game");
const mensagem = document.getElementById("mensagem");

function criarNivel(nivel) {
    jogo.innerHTML = "";
    mensagem.innerText = `Nível ${nivel + 1}`;
    
    const container = document.createElement("div");
    container.className = "vidros-container";


    for (let i = 1; i <= 2; i++) {
        const botao = document.createElement("div");
        botao.className = "opcao";
        botao.innerText = i == 1 ? "Esquerda" : "Direita";
        botao.onclick = () => verificarEscolha(i);
        container.appendChild(botao);
    }

    jogo.appendChild(container);

}

function verificarEscolha(escolha) {
    const certo = caminhosCertos[nivelAtual];
    const opcoes = document.querySelectorAll(".opcao");

    if (escolha == certo){
        opcoes[escolha - 1].classList.add("acertou");
        nivelAtual++;

        if (nivelAtual < caminhosCertos.length){
            setTimeout(() => criarNivel(nivelAtual), 1000);
        } else {
            mensagem.innerText = "Parabéns! Você venceu o desafio dos vidros! 🏆"
        jogo.innerHTML = "";
        }
    } else {
        opcoes[escolha - 1].classList.add("perdeu");
        mensagem.innerHTML = "Você caiu! Tente novamente. ";
        jogo.innerHTML = "";
        const botaoRecomecar = document.createElement("button");
        botaoRecomecar.innerText = "Recomeçar";
        botaoRecomecar.classList.add("botao-recomecar");
        botaoRecomecar.onclick = () => {
            nivelAtual = 0;
            criarNivel(nivelAtual);
            mensagem.innerText = "";
        };
        mensagem.appendChild(botaoRecomecar);
       }
}
criarNivel(nivelAtual);