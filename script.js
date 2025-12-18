/* ==============================
   TROCAR TELAS
================================ */
function trocarTela(num) {
  document.querySelectorAll('.tela')
    .forEach(tela => tela.classList.remove('ativa'));

  document.getElementById('tela' + num)
    .classList.add('ativa');
}

/* ==============================
   BOTÕES
================================ */
const btnNao = document.getElementById('btnNao');
const btnSim = document.getElementById('btnSim');

let fugasSim = 0;

/* ==============================
   FUNÇÃO DE FUGA
================================ */
function fugir(botao, tipo = "normal") {
  const area = document.querySelector('.botoes');

  let maxX = area.clientWidth - botao.offsetWidth;
  let maxY = area.clientHeight - botao.offsetHeight;

  if (tipo === "longe") {
    maxX = area.clientWidth * 0.9;
    maxY = area.clientHeight * 0.9;
  }

  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  if (tipo === "longe" && Math.random() > 0.5) {
    x = Math.random() > 0.5 ? 10 : maxX - 10;
    y = Math.random() > 0.5 ? 10 : maxY - 10;
  }

  botao.style.left = x + 'px';
  botao.style.top = y + 'px';
}

/* ==============================
   EVENTOS
================================ */

/* NÃO → foge sempre */
btnNao.addEventListener('click', (e) => {
  e.preventDefault();
  fugir(btnNao);
});

/* SIM → foge mais longe só 3 vezes */
btnSim.addEventListener('click', (e) => {
  e.preventDefault();

  if (fugasSim < 3) {
    fugir(btnSim, "longe");
    fugasSim++;
  } else {
    trocarTela(3);
  }
});

/* ==============================
   CORAÇÕES ANIMADOS
================================ */
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.innerHTML = '💗';

  coracao.style.left = Math.random() * window.innerWidth + 'px';
  coracao.style.fontSize = (Math.random() * 20 + 12) + 'px';
  coracao.style.animationDuration = (Math.random() * 3 + 4) + 's';

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 7000);
}

setInterval(criarCoracao, 300);
