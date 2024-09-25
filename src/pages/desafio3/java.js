const primeironome = prompt("Qual o Seu Primeiro Nome");
const segundonome = prompt("Qual o Seu Sobrenome?");
const estdo = prompt("Qual Sua Escola?");

const dia = parseFloat(prompt("Qual o Dia do Seu Nascimento?"));
const mes = parseFloat(prompt("Qual o Mês do Seu Nascimento?"));
const ano = parseFloat(prompt("Qual o Ano do Seu Nascimento?"));

function calculo(dia, mes, ano) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    const mesatual = hoje.getMonth() + 1;
    const diaatual = hoje.getDate();

    // Corrigido para retornar a idade mesmo se o aniversário não tiver ocorrido
    if (mesatual < mes || (mesatual === mes && diaatual < dia)) {
        idade--;
    }
    return idade; // Retorna a idade
}

const idade = calculo(dia, mes, ano);
alert(`Olá ${primeironome} ${segundonome}\nVocê tem: ${idade} anos.\nEstudante da escola: ${estdo}`);
