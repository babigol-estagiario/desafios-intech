alert("ESCOLHA UMA OPÇÃO:")
let escolha = prompt(` OPÇÃO 1: TRIÂNGULO\n OPÇÃO 2: RETÂNGULO\n OPÇÃO 3: QUADRADO\n OPÇÃO 4: TRAPÉZIO\n OPÇÃO 5: CÍRCULO\n SAIR`)
switch (escolha) {

    case "1" :
    let baseTri = prompt("INFORME A BASE DO TRIÂNGULO:");
    let alturaTri = prompt("INFORME A ALTURA DO TRIÂNGULO:");
    let areaTri = (baseTri * alturaTri) / 2;
    alert(`A ÁREA DO TRIÂNGULO É: ${areaTri}`);
    break

    case "2" :
    let baseRet = prompt("INFORME A BASE DO RETÂNGULO:");
    let alturaRet = prompt("INFORME A ALTURA DO RETÂNGULO:");
    let areaRet = baseRet * alturaRet;
    alert(`A ÁREA DO RETÂNGULO É: ${areaRet}`);
    break
    
    case "3" :
    let ladoQua = prompt("INFORME O LADO DO QUADRADO:");
    let areaQua = ladoQua * 2;
    alert(`A ÁREA DO QUADRADO É: ${areaQua}`);
    break

    case "4" :
    let baseMaior = prompt("INFORME A BASE MAIOR DO TRAPÉZIO:");
    let baseMenor = prompt("INFORME A BASE MENOR DO TRAPÉZIO:");
    let alturaTra = prompt("INFORME A ALTURA DO TRAPÉZIO:");
    let areaTra = Math.round((parseFloat(baseMaior) + parseFloat(baseMenor)) * alturaTra / 2);
    alert(`A ÁREA DO TRIÂNGULO É: ${areaTra}`);
    break

    case "5" :
    let raio = prompt("INFORME O RAIO DO CÍRCULO:");
    let areaCir = Math.round(parseFloat(Math.PI)) * parseFloat(Math.pow(raio,2));
    alert(`A ÁREA DO CÍRCULO É: ${areaCir}`);
    break
    default:
        alert(`INFELIZMENTE SUA VIDA ACABARÁ AQUI !!!`)
}
