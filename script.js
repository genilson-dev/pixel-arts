// Seleciona os elementos necessários
const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const clearButton = document.getElementById('clear-board');

// Adiciona evento de clique para cada cor
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', () => {
    // Remove a classe selected de todas as cores
    for (let j = 0; j < colors.length; j += 1) {
      colors[j].classList.remove('selected');
    }
    // Adiciona a classe selected à cor clicada
    colors[i].classList.add('selected');
  });
}

// Adiciona evento de clique para cada pixel
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', () => {
    // Pega a cor selecionada
    const selectedColor = document.querySelector('.color.selected');
    if (selectedColor) {
      // Pega a cor de fundo da cor selecionada
      const { backgroundColor } = selectedColor.style;
      // Aplica a cor ao pixel clicado
      pixels[i].style.backgroundColor = backgroundColor;
    }
  });
}

// Adiciona evento de clique para o botão de limpar
clearButton.addEventListener('click', () => {
  // Reseta todos os pixels para branco
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '#ffffff';
  }
});
