const primeironome = prompt("Qual o Seu Primeiro Nome");
const segundonome = prompt("Qual o Seu Sobrenome?");
const estdo = prompt("Qual Sua Escola?")

const dia = parseInt(prompt("Qual o Dia do Seu Nascimento?"));
const mes = parseInt(prompt("Qual o Mês do Seu Nascimento?"));
const ano = parseInt(prompt("Qual o Ano do Seu Nascimento?"));

function calculo(dia, mes, ano) {

    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    const mesatual = hoje.getMonth() +1;
    const diaatual = hoje.getDate();
    
    if (mesatual < mes || (mesatual === mes && diaatual < dia)) {   
        return idade;
    }
}

const idade = calculo(dia, mes, ano);
alert(`Olá ${primeironome} ${segundonome}, você tem ${idade} anos. Estudante da escola : ${estdo}`);