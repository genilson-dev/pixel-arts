function preenchimentoQuadros() {
  const line = document.createElement('div');
  for (let coluna = 0; coluna < 5; coluna += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    line.appendChild(pixel);
  }
  return line;
}

function quadroPixel() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let linha = 0; linha < 5; linha += 1) {
    pixelBoard.appendChild(preenchimentoQuadros()); // é uma div
  }
}

quadroPixel();

function clicarSelecionarCor() { // Função para pintar os quadro de pixel
  const corDaPaleta = document.querySelector('#color-palette');
  corDaPaleta.addEventListener('click', (event) => {
    const itemSelected = document.querySelector('.selected');
    itemSelected.classList.remove('selected');
    if (event.target.className === 'color') {
      event.target.className = 'color selected';
    }
  });
}
clicarSelecionarCor();

function selecionarCor() { // Tratamento do css
  const selecionado = document.querySelector('.selected');
  const cssElement = window.getComputedStyle(selecionado, null); // Localiza toda alteração feita no css
  const backgroundColor = cssElement.getPropertyValue('background-color');
  return backgroundColor;
}

const board = document.querySelector('#pixel-board');
const cores = document.querySelector('#color-palette');

function trocaCor(event) {
  if (event.target.classList.contains('color')) {
    const corAntiga = document.querySelector('.selected');
    corAntiga.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

cores.addEventListener('click', trocaCor);

function pintaPixel(event) {
  if (event.target.classList.contains('pixel')) {
    const cor = document.querySelector('.selected');
    const css = window.getComputedStyle(cor).getPropertyValue('background-color');
    event.target.style.backgroundColor = css;
  }
}

board.addEventListener('click', pintaPixel);

//Function para limpar a quadro de pixel
/* function limparQuadroDePixel(){
  const limpar = document.querySelector("#clear-board");
  limpar.addEventListener("click", function(){

  });

} */
const quadro = document.querySelector('#pixel-board');
function limparQuadroPixel() { // Tratamento do css
  quadro.innerHTML = '';
  quadroPixel();
}
const limpar = document.querySelector('#clear-board');
limpar.addEventListener('click', limparQuadroPixel);