var loadFile = function(event) {
    var output = document.getElementById("preview");
    
    var reader = new FileReader();
    reader.onloadend = function() {
        output.src = reader.result; // Aqui, a imagem é convertida para Base64
    };
    reader.readAsDataURL(event.target.files[0]);
};
function getInfo(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const pais = document.getElementById("pais").value;
    const contato = document.getElementById("contac0").value;
    const descricao = document.getElementById("descricao").value;
    const preview = document.getElementById("preview").src;

    let dados = {
        nome: nome,
        sobrenome: sobrenome,
        pais: pais,
        contato: contato,
        descricao: descricao,
        preview: preview, // Base64 da imagem
    };

    // Salvar os dados no localStorage
    let contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos.push(dados);
    localStorage.setItem('contatos', JSON.stringify(contatos));

    console.log('Contato salvo:', dados);

    // Limpar os campos de entrada
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("pais").value = "";
    document.getElementById("contac0").value = "";
    document.getElementById("descricao").value = "";

    // Atualizar a tabela
    addToTable(dados);
}
function addToTable(contato) {
    const tabelaCorpo = document.getElementById("tableBody");
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
        <td class="px-4 py-2"><img src="${contato.preview}" class="w-10 h-10 object-cover rounded-full" /></td>
        <td class="px-4 py-2">${contato.nome} ${contato.sobrenome}</td>
        <td class="px-4 py-2">${contato.pais} - ${contato.contato}</td>
        <td class="px-4 py-2">${contato.descricao}</td>
    `;
    tabelaCorpo.appendChild(novaLinha);
}

// Função para carregar os contatos salvos no localStorage ao iniciar a página
window.onload = function () {
    let contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos.forEach(contato => {
        addToTable(contato);
    });
};

    