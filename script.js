function trocarTela(numero) {
  document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
  });

  document.getElementById("tela" + numero).classList.add("ativa");
}

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
  const areaRect = area.getBoundingClientRect();

  const maxX = areaRect.width - botao.offsetWidth;
  const maxY = areaRect.height - botao.offsetHeight;

  const fator = longe ? 0.9 : 0.5;

  const x = Math.random() * maxX * fator;
  const y = Math.random() * maxY * fator;

  botao.style.position = "absolute";
  botao.style.left = x + "px";
  botao.style.top = y + "px";
}
