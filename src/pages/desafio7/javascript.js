function getInfo() {
    
    const nomePro = document.getElementById('nomePro').value;
    const numPro = parseFloat(document.getElementById('numPro').value); 
    const quartos = parseFloat(document.getElementById('quartos').value); 
    const banheiros = parseFloat(document.getElementById('banheiros').value); 


    const garagem = document.querySelector("input[name='garagem']:checked");
    const garagemValue = garagem ? garagem.value : null;


    let dados = {
        nomePro: nomePro,
        numPro: numPro,
        quartos: quartos,
        banheiros: banheiros,
        garagem: garagemValue
    };


    console.log(dados);

    const tabelaCorpo = document.getElementById('tabelaCorpo');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td class="px-5">${nomePro}</td>
        <td class="px-5">${numPro}</td>
        <td class="px-5">${quartos}</td>
        <td class="px-5">${banheiros}</td>
        <td class="px-5">${garagemValue}</td>
    `;

    tabelaCorpo.appendChild(novaLinha);

    document.getElementById('nomePro').value = '';
    document.getElementById('numPro').value = '';
    document.getElementById('quartos').value = '';
    document.getElementById('banheiros').value = '';

    const garagemRadios = document.querySelectorAll("input[name='garagem']");
    garagemRadios.forEach(radio => radio.checked = false);
}
