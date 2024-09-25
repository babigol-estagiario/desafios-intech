const getinfo = () => {
    const nomeTurista = prompt("Qual o seu nome?");

    const cidades = [];

    let resposta = prompt("Você já visitou alguma cidade sim/nao");

    while (resposta === "sim") {

        const cidade = prompt("Qual cidade você visitou?")

        cidades.push(cidade);
        
        resposta = prompt("Você visitou alguma ouutra cidade? sim/nao");
    }

    let mensagem = "Nome do turista: " + nomeTurista + "\n";
    mensagem += "Número de cidades visitadas: " + cidades.length + "\n";
    mensagem += "Cidades visitadas: " + (cidades.length > 0 ? cidades.join(", ") : "Nenhuma cidade visitada");

    alert(mensagem);
}
getinfo();