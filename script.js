function trocarTela(numero) {
  document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
  });
  document.getElementById("tela" + numero).classList.add("ativa");
}

// BOTÕES
const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");

let fugidasSim = 0;

if (btnSim && btnNao) {
  btnNao.addEventListener("click", () => {
    moverBotao(btnNao);
  });

  btnSim.addEventListener("click", () => {
    if (fugidasSim < 3) {
      moverBotao(btnSim, true);
      fugidasSim++;
    } else {
      trocarTela(3);
    }
  });
}

function moverBotao(botao, longe = false) {
  const area = document.querySelector(".botoes");
  const rect = area.getBoundingClientRect();

  const maxX = rect.width - botao.offsetWidth;
  const maxY = rect.height - botao.offsetHeight;

  const fator = longe ? 0.8 : 0.5;

  botao.style.position = "absolute";
  botao.style.left = Math.random() * maxX * fator + "px";
  botao.style.top = Math.random() * maxY * fator + "px";
}

// CORAÇÕES
const containerCoracoes = document.getElementById("coracoes");

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.innerHTML = Math.random() > 0.5 ? "💜" : "💗";

  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 12 + 14 + "px";
  coracao.style.animationDuration = Math.random() * 3 + 4 + "s";

  containerCoracoes.appendChild(coracao);

  setTimeout(() => coracao.remove(), 7000);
}

setInterval(criarCoracao, 500);
