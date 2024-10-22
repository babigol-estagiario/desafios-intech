let produtosId = 0;
let carrinhoId = 0;
const container = document.getElementById("container");
const content = document.getElementById("produtosDiv");
const imagemCadastro = document.getElementById("imagemCadastro");

document.addEventListener("DOMContentLoaded", () => {
	if (window.location.pathname.includes("produtos.html")) {
		carregarProdutos();
	} else if (window.location.pathname.includes("carrinho.html")) {
		carregarCarrinho();
	}
});

function fecharContainer() {
	container.classList.add("hidden");
}

function abrirContainer() {
	container.classList.remove("hidden");
}


function salvarProdutos() {
	const nomeProduto = document.getElementById("nomeProduto").value;
	const valorProduto = document.getElementById("valorProduto").value;
	const descProduto = document.getElementById("descProduto").value;
	const freteProduto = document.getElementById("freteProduto").checked;
	const imagem = document.getElementById("fileImagem");

	if (!nomeProduto || !valorProduto || !descProduto) {
		alert("Por favor, preencha todos os campos antes de salvar.");
		return;
	}

	const reader = new FileReader();
	reader.onloadend = function() {
		produtosId = parseInt(localStorage.getItem("produtosId")) || 0;
		produtosId++;

		let produtoObj = {
			id: produtosId,
			nome: nomeProduto,
			valor: valorProduto,
			descricao: descProduto,
			freteGratis: freteProduto,
			imagemSrc: reader.result,
		};

		const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
		produtos.push(produtoObj);
		localStorage.setItem("produtos", JSON.stringify(produtos));
		localStorage.setItem("produtosId", produtosId);

		adicionarProdutoNaTela(produtoObj);

		document.getElementById("nomeProduto").value = "";
		document.getElementById("valorProduto").value = "";
		document.getElementById("descProduto").value = "";
		document.getElementById("fileImagem").value = "";
		document.getElementById("freteProduto").checked = false;

		fecharContainer();
	};

	if (imagem.files[0]) {
		reader.readAsDataURL(imagem.files[0]);
	} else {
		alert("Por favor, insira uma imagem.");
	}

}


function adicionarProdutoNaTela(produtoObj) {
	const produto = document.createElement("div");
	produto.setAttribute("produtoID", `produto${produtoObj.id}`);
	produto.classList.add("bg-gray-100", "text-black", "p-6", "m-4", "rounded", "h-[400px]", "shadow-2xl", "gap-8");

	if (produtoObj.imagemSrc) {
		const img = document.createElement("img");
		img.classList.add("w-52", "h-52", "m-auto");
		img.src = produtoObj.imagemSrc;
		produto.appendChild(img);
	}

	produto.innerHTML += `
          <p><strong class="font-[NeonBlitz]">Nome:</strong> ${produtoObj.nome}</p>
          <p><strong class="font-[NeonBlitz]">Valor:</strong> R$ ${produtoObj.valor}</p>
          <p><strong class="font-[NeonBlitz]">Descrição:</strong> ${produtoObj.descricao}</p>
          <p><strong class="font-[NeonBlitz]">Frete grátis:</strong> ${produtoObj.freteGratis ? "Sim" : "Não"}</p>
          <button onclick="apagarLocal(${produtoObj.id})" class="bg-black text-white font-[Faroeste] w-36 rounded">Apagar</button>
          <button onclick="adicionarCarrinho(${JSON.stringify(produtoObj).replace(/"/g, "&quot;")})" class="bg-black text-white font-[Faroeste] w-36 rounded">Adicionar ao Carrinho</button>
    `;

	content.appendChild(produto);
}

function carregarProdutos() {
	const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
	produtos.forEach((produto) => {
		adicionarProdutoNaTela(produto);
	});
}

function adicionarCarrinho(produtoObj) {
	let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
	carrinho.push(produtoObj);
	localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function carregarCarrinho() {
	const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
	const carrinhoContainer = document.getElementById("carrinho");

	carrinho.forEach((produto) => {
		const carrinhoDiv = document.createElement("div");
		carrinhoDiv.setAttribute("carrinhoID", `carrinho${produto.id}`);
		carrinhoDiv.classList.add("bg-gray-300", "text-black", "p-4", "m-2", "rounded", "shadow-lg", "transition", "hover:scale-[.97]");

		carrinhoDiv.innerHTML = `
            <p><strong>Nome:</strong> ${produto.nome}</p>
            <p><strong>Valor:</strong> R$ ${produto.valor}</p>
            <button class="bg-red-700 rounded-md w-24" onclick="apagarCarrinho(${produto.id})">Excluir<button/>
        `;

		carrinhoContainer.appendChild(carrinhoDiv);
	});

	const valorTotalCarrinho = carrinho.reduce((total, produto) => total + parseFloat(produto.valor), 0);
	document.getElementById("valorTotal").textContent = `R$ ${valorTotalCarrinho.toFixed(2)}`;
}

function apagarLocal(produtoID) {
	let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
	produtos = produtos.filter((produto) => produto.id !== produtoID);
	localStorage.setItem("produtos", JSON.stringify(produtos));

	const produtoElement = document.querySelector(`[produtoID="produto${produtoID}"]`);
	if (produtoElement) {
		produtoElement.remove();
	}
}

function preview() {
	const imagemCadastro = document.getElementById("imagemCadastro");
	const imagem = document.getElementById("fileImagem");

	if (imagem) {
		imagemCadastro.src = URL.createObjectURL(imagem.files[0]);
	}
}

function apagarCarrinho(produtoID) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const index = carrinho.findIndex(produto => produto.id === produtoID);
    
    if (index !== -1) {
        const produtoRemovido = carrinho[index];
        carrinho.splice(index, 1); 
        
        const valorTotalCarrinho = carrinho.reduce((total, produto) => total + parseFloat(produto.valor), 0);
        document.getElementById("valorTotal").textContent = `R$ ${valorTotalCarrinho.toFixed(2)}`;

        const carrinhoElement = document.querySelector(`[carrinhoID="carrinho${produtoID}"]`);
        if (carrinhoElement) {
            carrinhoElement.remove();
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
}
