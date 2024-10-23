let respostasCertas = 0
let respostasErradas = 0
let pontos = 0
let perguntaAtual = 1

document.addEventListener("DOMContentLoaded", function (e) {
	if (e) {
		gerarPergunta()
	}
})

const perguntas = [
	{ pergunta: "Qual é a capital da França?" },
	{ pergunta: "Qual é a fórmula da água?" },
	{ pergunta: "Qual é o maior planeta do sistema solar?" },
	{ pergunta: "Quem pintou a Mona Lisa?" },
	{ pergunta: "Quantos lados tem um hexágono?" },
	{ pergunta: "Em que ano o homem pisou na Lua pela primeira vez?" },
	{ pergunta: "Qual é o menor país do mundo?" },
	{ pergunta: "Quem desenvolveu a teoria da relatividade?" },
	{ pergunta: "Qual é o elemento químico representado pelo símbolo 'O'?" },
	{ pergunta: "Qual é o rio mais longo do mundo?" },
	{ pergunta: "Qual é a montanha mais alta do mundo?" },
	{ pergunta: "Qual é o oceano mais profundo?" },
	{ pergunta: "Qual é o maior deserto do mundo?" },
	{ pergunta: "Em que ano começou a Primeira Guerra Mundial?" },
	{ pergunta: "Qual é o maior mamífero do mundo?" },
	{ pergunta: "Quem escreveu 'Dom Quixote'?" },
	{ pergunta: "Qual é o idioma mais falado no mundo?" },
	{ pergunta: "Quem foi o primeiro presidente dos Estados Unidos?" },
	{ pergunta: "Qual é o país mais populoso do mundo?" },
	{ pergunta: "Qual é o símbolo químico do ouro?" },
	{ pergunta: "Quem descobriu o Brasil?" },
	{ pergunta: "Em que continente está localizado o Egito?" },
	{ pergunta: "Qual é a maior floresta tropical do mundo?" },
	{ pergunta: "Quem pintou o teto da Capela Sistina?" },
	{ pergunta: "Qual é a capital do Japão?" },
	{ pergunta: "Qual é a moeda oficial do Reino Unido?" },
	{ pergunta: "Quem inventou a lâmpada?" },
	{ pergunta: "Qual é o maior oceano do mundo?" },
]

function gerarPergunta() {
	const indice = Math.floor(Math.random() * perguntas.length)
	const perguntaAleatoria = perguntas[indice].pergunta
	document.getElementById("pergunta").innerText = perguntaAleatoria
	document.getElementById("resposta").value = ""
}

document.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		validarResposta()
	}
})

function validarResposta() {
	const resposta = document.getElementById("resposta").value.toLowerCase().trim()
	const pergunta = document.getElementById("pergunta").innerText.toLowerCase()

	perguntaAtual++

	switch (true) {
		case pergunta.includes("frança"):
			if (resposta === "paris") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("primeira guerra mundial"):
			if (resposta === "1914") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("maior mamífero"):
			if (resposta === "baleia azul" || resposta === "baleia-azul") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("dom quixote"):
			if (resposta === "miguel de cervantes" || resposta === "cervantes") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("idioma mais falado"):
			if (resposta === "mandarim" || resposta === "chinês" || resposta === "chines") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("presidente dos estados unidos"):
			if (resposta === "george washington" || resposta === "washington") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("país mais populoso"):
			if (resposta === "china") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("símbolo químico do ouro"):
			if (resposta === "au") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("descobriu o brasil"):
			if (resposta === "pedro Álvares cabral" || resposta === "cabral") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("egito"):
			if (resposta === "África" || resposta === "africa") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("maior floresta tropical"):
			if (resposta === "amazônia" || resposta === "amazonia") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("capela sistina"):
			if (resposta === "michelangelo" || resposta === "Michelangelo") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("capital do japão"):
			if (resposta === "tóquio" || resposta === "toquio") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("moeda oficial do reino unido"):
			if (resposta === "libra" || resposta === "libra esterlina") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("lâmpada"):
			if (resposta === "thomas edison" || resposta === "edison") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("maior oceano"):
			if (resposta === "pacífico" || resposta === "pacifico") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("maior deserto"):
			if (resposta === "saara" || resposta === "Saara") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("água"):
			if (resposta === "h2o") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("mais profundo"):
			if (
				resposta === "pacifico" ||
				resposta === "Pacífico" ||
				resposta === "oceano pacifico" ||
				resposta === "Oceano Pacífico"
			) {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break

		case pergunta.includes("sistema solar"):
			if (resposta === "júpiter" || resposta === "jupiter") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("montanha mais alta"):
			if (
				resposta === "Monte Everest" ||
				resposta === "monte everest" ||
				resposta === "everest"
			) {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break

		case pergunta.includes("mona lisa"):
			if (
				resposta === "davinci" ||
				resposta === "leonardo da vinci" ||
				resposta === "da vinci"
			) {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break

		case pergunta.includes("mundo"):
			if (resposta === "vaticano") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break

		case pergunta.includes("lua"):
			if (resposta === "1969") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("teoria da relatividade"):
			if (
				resposta === "albert einstein" ||
				resposta === "Albert Einstein" ||
				resposta === "einstein"
			) {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("representado"):
			if (resposta === "Oxigênio" || resposta === "oxigenio") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break
		case pergunta.includes("hexágono"):
			if (resposta === "6" || resposta === "6 lados") {
				alert("Você acertou")
				respostasCertas++
				pontos++
			} else {
				alert("Resposta errada")
				respostasErradas++
			}
			break

		default:
			alert("Pergunta desconhecida.")
			break
	}
	const perguntaAtualTexto = document.getElementById("perguntaAtual")
	perguntaAtualTexto.innerText = perguntaAtual
	if (perguntaAtual === 30) {
		alert(
			"Teste concluído, Respostas Certas: " +
				respostasCertas +
				" Respostas Erradas: " +
				respostasErradas
		)
		alert(`Seu total de pontos: ${pontos}`)
	}
	gerarPergunta()
}
