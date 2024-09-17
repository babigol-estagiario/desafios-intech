const getinfo = () => {
    const nomeUs = document.getElementById('seuNome').value;
    const poderUs = parseFloat(document.getElementById('seuPoder').value);
    const nomeOp = document.getElementById('nomeOponente').value;
    const vidaOp = parseFloat(document.getElementById('vidaOponente').value);
    const defesaOp = parseFloat(document.getElementById('defesa').value);
    const escudo = verificarEscudo();
    return { nomeUs, poderUs, nomeOp, vidaOp, defesaOp, escudo };
}

const calcular = (poderUs, defesaOp, escudo) => {
    let dano;
    if (poderUs > defesaOp) {
        dano = poderUs - defesaOp;
        if (escudo) {
            dano /= 2;
        }
    } else {
        dano = 0;
    }
    return dano;
}

const verificarEscudo = () => {
    return document.querySelector('input[name="escudo"]:checked')?.value === "Sim";
}

const atualizacao = () => {
    const { nomeUs, poderUs, nomeOp, vidaOp, defesaOp, escudo } = getinfo();
    const dano = calcular(poderUs, defesaOp, escudo);
    const vidaApos = vidaOp - dano;
    document.getElementById('resultado').innerHTML = `
        <p>Nome do atacante: ${nomeUs}</p>
        <p>Poder de ataque: ${poderUs}</p>
        <p>Nome do oponente: ${nomeOp}</p>
        <p>Vida do oponente antes: ${vidaOp}</p>
        <p>Defesa do oponente: ${defesaOp}</p>
        <p>Escudo ativo: ${escudo ? 'Sim' : 'Não'}</p>
        <p>Dano causado: ${dano}</p>
        <p>Vida do oponente depois: ${vidaApos}</p>
    `;
}
