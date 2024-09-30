function highAndLow(numbers) {
    const numeros = prompt("Digite alguns números:")
     const arrayNumbers = numeros.split(' ').map(Number);
     
     const max = Math.max(...arrayNumbers);
     const min = Math.min(...arrayNumbers);
     
     return `${max} ${min}`;
 }
 console.log(highAndLow());