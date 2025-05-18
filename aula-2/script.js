function verificacaoIdade() {
    const idade = parseInt(document.getElementById("input").value);
    
    if(isNaN(idade)) {
        document.getElementById("resultado").innerText = "Digite uma idade válida";
        return;
    }

    
    if (idade < 18) {
      document.getElementById("resultado").innerHTML =
        "Você não tem idade suficiente para jogar. <br>Idade mínima 18 anos";
    } else {
      document.getElementById("resultado").innerText = "Idade verificada. Boa Sorte!";
      document.getElementById("area-game").style.display = "block"
    }
}

function play(escolhaJogador) {
    const opcoes = [
        "disfarçe", "enfrentar", "fugir"
    ];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    let mensagem = ' O capanga escolheu ' + `${escolhaComputador}`;
    let resultado = "";

    if(escolhaJogador == escolhaComputador){
        resultado = "Empate!";
    } else if (
        (escolhaJogador == "disfarçe" && escolhaComputador == "enfrentar")||
        (escolhaJogador == "enfrentar" && escolhaComputador == "fugir")||
        (escolhaJogador == "fugir" && escolhaComputador == "disfarçe")
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "Você perdeu!"
    }

    document.getElementById("ganhador").innerText = resultado + "" + mensagem + ".";
}
