let tabuleiro = ['', '', '', '', '', '', '', '', ''];

function userMove(index) {
    const player = 'X';
    if (tabuleiro[index] === '') {
        tabuleiro[index] = player;
        document.querySelectorAll('.cell')[index].textContent = player;

        if (!checkWin(tabuleiro, player) && !TabuleiroCheio()) {
            bestMove();
        } else if (checkWin(tabuleiro, player)) {
            alert("Jogador Venceu!");
        } else if (TabuleiroCheio()) {
            alert("Empate");
        }
    }
}

function bestMove() {
    const ai = 'O';
    let move = findBestMove();

    if (move !== undefined) {
        tabuleiro[move] = ai;
        document.querySelectorAll('.cell')[move].textContent = ai;
        if (checkWin(tabuleiro, ai)) {
            alert("Você perdeu!");
        }
    }
}

function TabuleiroCheio() {
    return tabuleiro.every(cell => cell !== '');
}

function checkWin(tabuleiro, player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern =>
        pattern.every(index => tabuleiro[index] === player)
    );
}

function findBestMove() {
    const ai = 'O';
    const player = 'X';

    
    for (let i = 0; i < tabuleiro.length; i++) {
        if (tabuleiro[i] === '') {
            tabuleiro[i] = ai;
            if (checkWin(tabuleiro, ai)) {
                return i;
            }
            tabuleiro[i] = ''; 
        }
    }

    
    for (let i = 0; i < tabuleiro.length; i++) {
        if (tabuleiro[i] === '') {
            tabuleiro[i] = player;
            if (checkWin(tabuleiro, player)) {
                tabuleiro[i] = ''; 
                return i; 
            }
            tabuleiro[i] = ''; 
        }
    }

    
    for (let i = 0; i < tabuleiro.length; i++) {
        if (tabuleiro[i] === '') {
            return i;
        }
    }

    return undefined; 
}
    function recarregarPagina(){
        window.location.reload();
    }