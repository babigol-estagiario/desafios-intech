function isPangram(string){
    const frase = prompt("Digite uma Frase")
    letras = [
      'a', 'b', 'c', 'd', 'e',
      'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't',
      'u', 'v', 'w', 'x', 'y',
      'z'
    ];
    const isPangram = letras.every(letra => frase.includes(letra));
    console.log(isPangram ? "A Palavra é um Pangrama" : "A palavra não é um Pangrama");
  }
  isPangram()