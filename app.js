let cartas = ["db", "jb", "jm", "js", "mj", "nj", "sc", "sp", "ty"]
const texto = ["Parabéns! Você obteve a carta com maior pontuação!"]

function jogar() {
    // Sorteia um jogador aleatoriamente usando cartas.length
    let jogadorSorteado = cartas[Math.floor(Math.random() * 9)];
    let captura = document.getElementById('centro');
    
    
    captura.innerHTML = ""

    
    captura.innerHTML = `<div><img src="./img/${jogadorSorteado}.png" alt="Imagem do jogador"></div>`;

    
    if (jogadorSorteado === "mj") {
        
        captura.innerHTML += `<div><p style="color: red; font-weight: bold; margin-top: 10px;">
            ${texto[0]}
        </p></div>`;
    }
}