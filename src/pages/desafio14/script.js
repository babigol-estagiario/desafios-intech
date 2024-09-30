function isPangram(frase) {
  const letras = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z'
  ];
  
  // Verifica se a frase contém todas as letras do alfabeto
  const isPangram = letras.every(letra => frase.includes(letra));
  
  // Imprime e retorna o resultado
  if (isPangram) {
    console.log("A frase é um Pangrama");
    return true;
  } else {
    console.log(`A frase não é um Pangrama (faltam letras): ${letras.filter(letra => !frase.includes(letra))}`);
    return false;
  }
}
console.log(isPangram("The quicsmps over the lazy dog"));