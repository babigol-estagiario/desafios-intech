let totalPropriedades = 0;
document.querySelector("form").addEventListener("submit", getInfo);

function getInfo(event) {
  event.preventDefault(); // Prevent form submission

  const nomePro = document.getElementById("nomePro").value;
  const numPro = parseFloat(document.getElementById("numPro").value);
  const quartos = parseFloat(document.getElementById("quartos").value);
  const banheiros = parseFloat(document.getElementById("banheiros").value);

  const garagem = document.querySelector("input[name='garagem']:checked");
  const garagemValue = garagem ? garagem.value : null;

  let dados = {
    nomePro: nomePro,
    numPro: numPro,
    quartos: quartos,
    banheiros: banheiros,
    garagem: garagemValue,
  };
  console.log(dados); // Log the dados object

  totalPropriedades++;
  document.getElementById('numProps').innerHTML = totalPropriedades;

  const tabelaCorpo = document.getElementById("tabelaCorpo");
  const novaLinha = document.createElement("tr"); // Create a new table row

  novaLinha.innerHTML = `
        <td class="px-5">${nomePro}</td>
        <td class="px-5">${numPro}</td>
        <td class="px-5">${quartos}</td>
        <td class="px-5">${banheiros}</td>
        <td class="px-5">${garagemValue}</td>
    `;

  tabelaCorpo.appendChild(novaLinha);

  // Clear the form fields
  document.getElementById("nomePro").value = "";
  document.getElementById("numPro").value = "";
  document.getElementById("quartos").value = "";
  document.getElementById("banheiros").value = "";

  const garagemRadios = document.querySelectorAll("input[name='garagem']");
  garagemRadios.forEach((radio) => (radio.checked = false));
}

// Attach the getInfo function to the form submit event
