const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let isJumping = false; // Controle de salto

// Função para o salto
const jump = () => {
    if (!isJumping) {
        isJumping = true;
        mario.classList.add('jump');

        // Remove a classe de pulo após 500ms
        setTimeout(() => {
            mario.classList.remove('jump');
            isJumping = false; // Permite outro salto após o término do atual
        }, 500);
    }
};

// Loop para verificar a colisão
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; // Posição do pipe
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // Posição do Mario (em pixels)

    // Verifica a colisão apenas quando Mario está no nível do solo
    if (pipePosition <= 100 && pipePosition > 0 && !isJumping && marioPosition < 70) {
        // Parar a animação do pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Parar a animação do Mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Muda a imagem do Mario para "game over"
        mario.src = './images/gameover.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Para o loop
        clearInterval(loop);
    }
}, 20); // Verificações a cada 20ms

document.addEventListener('keydown', jump); // Escuta o evento de tecla pressionada para fazer o Mario pular
