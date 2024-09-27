let tabuleiro = Array(9).fill(null);
let jogadorAtual = null;
let simboloComputador = null;
let jogoAtivo = true;

// Função para mostrar a mensagem inicial
function mostrarMensagem() {
    document.getElementById("mensagem").style.display = "block"; 
}

function fecharMensagem() {
    document.getElementById("mensagem").style.display = "none"; 
}

// Mostrar a mensagem após 2 segundos
setTimeout(mostrarMensagem, 2000);

// Função para o jogador escolher o símbolo
document.querySelectorAll('#mensagem button').forEach(button => {
    button.onclick = function () {
        escolherSimbolo(this.value);
    };
});

function escolherSimbolo(simbolo) {
    jogadorAtual = simbolo;
    simboloComputador = simbolo === 'X' ? 'O' : 'X'; // Define o símbolo do computador
    jogoAtivo = true;
    document.getElementById('mensagem').style.display = 'none'; 
    document.getElementById('tabuleiro').style.display = 'grid'; 
}

// Função do movimento do usuário
function userMove(index) {
    if (tabuleiro[index] || !jogoAtivo) return; // Verifica se a célula já tem símbolo ou se o jogo não está ativo
    tabuleiro[index] = jogadorAtual; // Atualiza o tabuleiro com o símbolo do jogador atual
    document.getElementsByClassName('cell')[index].innerText = jogadorAtual; // Atualiza o texto da célula

    if (verificarVitoria(jogadorAtual)) {
        exibirMensagem(`Você ganhou!! Clique para revanche.`);
    } else if (tabuleiro.every(cell => cell)) {
        exibirMensagem(`Empate!! Clique para revanche.`);
    } else {
        setTimeout(movimentoComputador, 500); // Espera meio segundo antes do movimento do computador
    }
}

// Função do movimento do computador
function movimentoComputador() {
    if (!jogoAtivo) return; // Se o jogo não está ativo, não faz nada
    let index;
    do {
        index = Math.floor(Math.random() * 9);
    } while (tabuleiro[index]); // Escolhe outra célula se a atual já tiver símbolo
    tabuleiro[index] = simboloComputador; // Simbolização do computador
    document.getElementsByClassName('cell')[index].innerText = simboloComputador; // Atualiza o texto da célula

    if (verificarVitoria(simboloComputador)) {
        exibirMensagem(`O computador ganhou! Clique para revanche.`);
    } else if (tabuleiro.every(cell => cell)) {
        exibirMensagem(`Empate!! Clique para revanche.`);
    }
}

// Função para verificar vitória
function verificarVitoria(simbolo) {
    const vitorias = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return vitorias.some(condicao => {
        return condicao.every(index => tabuleiro[index] === simbolo);
    });
}

// Função para exibir mensagens de vitória ou empate
function exibirMensagem(mensagem) {
    jogoAtivo = false; // Para o jogo
    const mensagemDiv = document.getElementById('mensagem-vitoria');
    mensagemDiv.style.display = 'block'; // Mostra a mensagem
    document.getElementById('vitoria-texto').innerText = mensagem;

    // Configura o botão de revanche
    document.getElementById('revanche').onclick = () => {
        reiniciarJogo();
        mensagemDiv.style.display = 'none'; // Esconde a mensagem
    };
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    tabuleiro.fill(null);
    jogadorAtual = null;
    simboloComputador = null;
    jogoAtivo = true;
    document.getElementById('tabuleiro').style.display = 'grid'; // Mostra o tabuleiro
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = ''; // Limpa o texto das células
    }
    // Reinicia a mensagem inicial
    setTimeout(mostrarMensagem, 200);
}

// Reinicia a página
function recarregarPagina() {
    window.location.reload();
}
