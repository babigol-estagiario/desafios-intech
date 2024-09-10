function resultado() {
    const carro1 = parseFloat(document.getElementById('carro1').value);
    const carro2 = parseFloat(document.getElementById('carro2').value);

    if (carro1 === carro2) {
        alert('EMPATE!');
    } else if (carro1 > carro2) {
        alert('CARRO 1 É O VENCEDOR');
    } else {
        alert('CARRO 2 É O VENCECDOR');
    }
}