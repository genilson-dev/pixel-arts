// Get all color elements
const colors = document.querySelectorAll('.color');

// Add click event listener to each color
colors.forEach((color) => {
    color.addEventListener('click', () => {
        // Remove selected class from all colors
        colors.forEach((c) => c.classList.remove('selected'));
        // Add selected class to clicked color
        color.classList.add('selected');
    });
});
// Vou explicar o código passo a passo:
// Seleção dos elementos de cor
// Apply to script.js
// Usa querySelectorAll para selecionar todos os elementos que têm a classe 'color'
// Armazena esses elementos em uma constante chamada colors
// Adição dos eventos de clique
// Apply to script.js
// Usa forEach para percorrer cada elemento de cor
// Para cada cor, vamos adicionar um evento de clique
// Configuração do evento de clique
// Apply to script.js
// Adiciona um evento de clique em cada cor
// Quando a cor for clicada, a função arrow será executada
// Remoção da seleção de todas as cores
// Apply to script.js
// Percorre todas as cores novamente
// Remove a classe 'selected' de cada uma delas
// Isso garante que nenhuma cor esteja selecionada antes de selecionar a nova
// Seleção da cor clicada
// Apply to script.js
// Adiciona a classe 'selected' à cor que foi clicada
// Isso faz com que apenas uma cor tenha a classe 'selected' por vez
// Em resumo, o código:
// Seleciona todas as cores da paleta
// Adiciona um evento de clique em cada cor
// Quando uma cor é clicada:
// Remove a seleção de todas as cores
// Seleciona apenas a cor que foi clicada
// Isso garante que sempre haverá apenas uma cor selecionada por vez
// O resultado visual é que:
// A cor selecionada terá uma borda mais grossa (definida no CSS)
// Ao clicar em outra cor, a seleção muda automaticamente
// Nunca teremos duas cores selecionadas ao mesmo tempo