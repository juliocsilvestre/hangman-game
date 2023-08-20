// Lista de palavras
const palavras = ["javascript", "angular", "programacao", "computador", "internet", "desenvolvimento"];

// Escolha aleatória de uma palavra
const palavra = palavras[Math.floor(Math.random() * palavras.length)];

// Array para rastrear letras adivinhadas
const letrasAdivinhadas = [];

// Número máximo de erros permitidos
const maxErros = 6;
let erros = 0;

// Elementos da DOM
const palavraSecreta = document.querySelector('.palavra-secreta');
const tentativaInput = document.getElementById('tentativa-input');
const tentativaButton = document.getElementById('tentativa-button');
const mensagem = document.querySelector('.mensagem');
const hangmanMembros = document.querySelectorAll('.hangman div');

// Inicializa a exibição da palavra
const exibePalavra = () => {
    const displayArray = palavra.split('').map(letra => letrasAdivinhadas.includes(letra) ? letra : '_');
    palavraSecreta.textContent = displayArray.join(' ');
};

// Verifica se o jogador venceu
const vencedor = () => {
    if (!palavraSecreta.textContent.includes('_')) {
        mensagem.textContent = 'Você venceu! Parabéns!';
        tentativaInput.disabled = true;
        tentativaButton.disabled = true;
    }
};

// Verifica se o jogador perdeu
const perdedor = () => {
    if (erros >= maxErros) {
        mensagem.textContent = 'Você perdeu! A palavra era: ' + palavra;
        tentativaInput.disabled = true;
        tentativaButton.disabled = true;
    }
};

// Lida com uma tentativa do jogador
const tentativaJogador = () => {
    const tentativa = tentativaInput.value.toLowerCase();
    tentativaInput.value = '';

    if (!letrasAdivinhadas.includes(tentativa)) {
        letrasAdivinhadas.push(tentativa);
        if (!palavra.includes(tentativa)) {
            erros++;
            hangmanMembros[erros - 1].style.backgroundColor = 'red';
        }
        exibePalavra();
        vencedor();
        perdedor();
    }
};

// Event listener para o botão de adivinhar
tentativaButton.addEventListener('click', tentativaJogador);

// Inicialização
exibePalavra();
