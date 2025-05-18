// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Qual é o nome verdadeiro da Ladybug?",
    respostas: [
      { opcao: "Alya Césaire", correto: false },
      { opcao: "Chloé Bourgeois", correto: false },
      { opcao: "Marinette Dupain-Cheng", correto: true },
      { opcao: "Lila Rossi", correto: false },
      { opcao: "Kagami Tsurugi", correto: false }
    ],
  },
  {
    pergunta: "Quem é o portador original do miraculous do Gato?",
    respostas: [
      { opcao: "Adrien Agreste", correto: true },
      { opcao: "Luka Couffaine", correto: false },
      { opcao: "Nino Lahiffe", correto: false },
      { opcao: "Nathaniel Kurtzberg", correto: false },
      { opcao: "Max Kanté", correto: false }
    ],
  },
  {
    pergunta: "Qual é o nome do kwami da Ladybug?",
    respostas: [
      { opcao: "Plagg", correto: false },
      { opcao: "Trixx", correto: false },
      { opcao: "Wayzz", correto: false },
      { opcao: "Tikki", correto: true },
      { opcao: "Nooroo", correto: false }
    ],
  },
  {
    pergunta: "Quem é o vilão principal na série?",
    respostas: [
      { opcao: "Mayura", correto: false },
      { opcao: "Hawk Moth", correto: true },
      { opcao: "Chat Noir", correto: false },
      { opcao: "Gabriel Agreste", correto: true },
      { opcao: "Felix", correto: false }
    ],
  },
  {
    pergunta: "Qual miraculous permite viajar no tempo?",
    respostas: [
      { opcao: "O miraculous da raposa", correto: false },
      { opcao: "O miraculous do cavalo", correto: false },
      { opcao: "O miraculous do coelho", correto: true },
      { opcao: "O miraculous da borboleta", correto: false },
      { opcao: "O miraculous da tartaruga", correto: false }
    ]
    },
    {
      pergunta: "Quem é o portador original do Miraculous da Tartaruga?",
      respostas: [
        { opcao: "Nino Lahiffe", correto: true },
        { opcao: "Luka Couffaine", correto: false },
        { opcao: "Max Kanté", correto: false },
        { opcao: "Ivan Bruel", correto: false },
        { opcao: "Marc Anciel", correto: false }
      ],
    },
    {
      pergunta: "Qual personagem se transforma na Rena Rouge?",
      respostas: [
        { opcao: "Chloé Bourgeois", correto: false },
        { opcao: "Alya Césaire", correto: true },
        { opcao: "Zoé Lee", correto: false },
        { opcao: "Mylène Haprèle", correto: false },
        { opcao: "Lila Rossi", correto: false }
      ],
    },
    {
      pergunta: "Qual é o poder especial do Miraculous do Gato?",
      respostas: [
        { opcao: "Cataclismo", correto: true },
        { opcao: "Invisibilidade", correto: false },
        { opcao: "Talismã", correto: false },
        { opcao: "Pulo Alto", correto: false },
        { opcao: "Invisibilidade", correto: false }
      ],
    },
    {
      pergunta: "Quem foi a primeira portadora do Miraculous da Abelha?",
      respostas: [
        { opcao: "Zoé Lee", correto: false },
        { opcao: "Alya Césaire", correto: false },
        { opcao: "Lila Rossi", correto: false },
        { opcao: "Rose Lavillant", correto: false },
        { opcao: "Chloé Bourgeois", correto: true }
      ],
    },
    {
      pergunta: "Qual é o nome do kwami do Miraculous da Borboleta?",
      respostas: [
        { opcao: "Tikki", correto: false },
        { opcao: "Plagg", correto: false },
        { opcao: "Nooroo", correto: true },
        { opcao: "Daizzi", correto: false },
        { opcao: "Xuppu", correto: false }
      ],
    },
    {
      pergunta: "Qual personagem é a Vesperia?",
      respostas: [
        { opcao: "Chloé Bourgeois", correto: false },
        { opcao: "Marinette Dupain-Cheng", correto: false },
        { opcao: "Kagami Tsurugi", correto: false },
        { opcao: "Zoé Lee", correto: true },
        { opcao: "Alya Césaire", correto: false }
      ],
    },
    {
      pergunta: "Qual kwami representa o Miraculous do rato?",
      respostas: [
        { opcao: "Trixx", correto: false },
        { opcao: "Pollen", correto: false },
        { opcao: "Mullo", correto: true },
        { opcao: "Barkk", correto: false },
        { opcao: "Wayzz", correto: false }
      ],
    },
    {
      pergunta: "Quem é o portador do Miraculous do cavalo?",
      respostas: [
        { opcao: "Kim Ature", correto: false },
        { opcao: "Luka Couffaine", correto: false },
        { opcao: "Ivan Bruel", correto: false },
        { opcao: "Nathaniel Kurtzberg", correto: false },
        { opcao: "Max Kanté", correto: true }
      ],
    },
    {
      pergunta: "Qual é o poder do Miraculous do Pavão?",
      respostas: [
        { opcao: "Curar ferimentos", correto: false },
        { opcao: "Criar sentimonstros", correto: true },
        { opcao: "Teleportar", correto: false },
        { opcao: "Ficar invisível", correto: false },
        { opcao: "Controlar o tempo", correto: false }
      ],
    },
    {
      pergunta: "Qual herói usa o Miraculous do dragão?",
      respostas: [
        { opcao: "Luka Couffaine", correto: false },
        { opcao: "Chloé Bourgeois", correto: false },
        { opcao: "Alya Césaire", correto: false },
        { opcao: "Kagami Tsurugi", correto: true },
        { opcao: "Max Kanté", correto: false }
      ],
    }  
];
// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  let imagemFinal = "";
  let complemento = "";

  if (acertos < 5) {
    imagemFinal = '<br><img class="final-photo" src="../img/fig-perdeu.gif"/>';
  } else if (acertos > 10) {
    imagemFinal = '<br><img class="final-photo" src="../img/fig-ganhou.gif"/>';
  } else {
    imagemFinal = '<br><img class="final-photo" src="../img/fig-meiotermo.gif"/>';
  }

  if (acertos < 10) {
    complemento = 
      '<br><button id="batalhar" onclick="tentarNovamente()">Tentar Novamente</button>'
    ;
  } else {
    complemento = 
      '<br><img src="../img/img-medalha.png" class="vencedor-icon" onclick="irParaVencedor()" style="cursor: pointer;" /><br><span id="detalhe">Clique na medalha para receber sua recompensa</span>'
    ;
  }

  textoFinal.innerHTML = 
    `Você acertou ${acertos} de ${perguntas.length}
    ${imagemFinal}
    ${complemento}`
  ;

  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

function tentarNovamente() {
  location.reload(); // ou redireciona para a página inicial, se preferir
  // window.location.href = "index.html";
}

function irParaVencedor() {
  window.location.href = "vencedor.html"; // troque para o caminho correto da sua página de vencedor
}


// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();


