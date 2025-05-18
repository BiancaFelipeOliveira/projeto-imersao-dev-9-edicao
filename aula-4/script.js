const viloes = [
  "Hawk Moth",
  "Mayura",
  "Reflekta",
  "Lady Wifi",
  "Tormenta",
  "Volpina",
  "Glaciator",
  "Marionetista",
  "Silenciador",
  "Cat Blanc",
];

let heroisSelecionados = [];

function selecionarHeroi(nome, botao) {
  if (heroisSelecionados.includes(nome)) {
    heroisSelecionados = heroisSelecionados.filter((h) => h !== nome);
    botao.classList.remove("selecionado");
  } else if (heroisSelecionados.length < 3) {
    heroisSelecionados.push(nome);
    botao.classList.add("selecionado");
  } else {
    alert("Você só pode escolher 3 heróis!");
  }
}

function iniciarBatalha() {
  if (heroisSelecionados.length !== 3) {
    alert("Escolha exatamente 3 heróis para batalhar!");
    return;
  }

  let forcaHerois = 0;
  let forcaViloes = 0;
  let nomesViloes = [...viloes];
  let viloesSelecionados = [];

  for (let i = 0; i < 3; i++) {
    forcaHerois += Math.floor(Math.random() * 30) + 20;
    const indice = Math.floor(Math.random() * nomesViloes.length);
    const vilao = nomesViloes.splice(indice, 1)[0]; // remove o vilão da lista
    viloesSelecionados.push(vilao);
    forcaViloes += Math.floor(Math.random() * 30) + 20;
  }

  let resultadoHTML = `<h2> Resultado da Batalha </h2>

    <p  class="text-result">
      ${
        forcaHerois > forcaViloes
          ? '<div class="caixa-vencedor"><img src="../img/herois-venceram.gif"><span class="vencedor">&nbsp;Heróis Venceram!&nbsp;</span><img src="../img/herois-venceram.gif"></div>'
          : forcaHerois < forcaViloes
          ? '<div class="caixa-vencedor"><img src="../img/viloes-venceram.gif"><span class="vencedor">&nbsp;Vilões Venceram!&nbsp;</span><img src="../img/viloes-venceram.gif"></div>'
          : '<div class="caixa-vencedor"><img src="../img/empate.gif"><span class="vencedor">&nbsp;Empatou!&nbsp;</span><img src="../img/empate.gif"></div>'
      }
      </p>
      <p class="text-result">Heróis escolhidos: ${heroisSelecionados.join(
        ", "
      )} </p>
      <p class="text-result">Vilões escolhidos: ${viloesSelecionados.join(
        ", "
      )} </p>
      <p class="text-result">Força total dos Heróis: ${forcaHerois} </p>
      <p class="text-result">Força total dos Vilões: ${forcaViloes} </p>
      `;

  document.getElementById("resultado").innerHTML = resultadoHTML;
  document.getElementById("resultado").style.display = "block";

  // Só limpa depois de mostrar o resultado
  heroisSelecionados = [];
  document
    .querySelectorAll("button")
    .forEach((b) => b.classList.remove("selecionado"));
}
