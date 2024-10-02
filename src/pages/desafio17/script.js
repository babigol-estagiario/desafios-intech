function findShort(s) {
    const words = s.split(' ');
    const lengths = words.map(word => word.length); return Math.min(...lengths); 
} 
const inputString = "Digite uma frase:" 
console.log(findShort(inputString));