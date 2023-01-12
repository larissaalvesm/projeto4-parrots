const cartasJogo = ["./img/bobrossparrot.gif", "./img/revertitparrot.gif", "./img/tripletsparrot.gif", "./img/explodyparrot.gif", "./img/unicornparrot.gif", "./img/fiestaparrot.gif", "./img/metalparrot.gif"];

function comparador() {
    return Math.random() - 0.5;
}

cartasJogo.sort(comparador);

const jogo = [];

let qtdeCartas = parseInt(prompt("Você quer jogar com quantas cartas?"));

while (isNaN(qtdeCartas) || qtdeCartas < 4 || qtdeCartas > 14 || (qtdeCartas % 2) === 1) {
    qtdeCartas = parseInt(prompt("Você quer jogar com quantas cartas?"));
}


let cartas = document.querySelector('.cartas');

cartas.innerHTML = '';

for (let i = 0; i < qtdeCartas; i++) {
    jogo.push(cartasJogo[i]);
    jogo.push(cartasJogo[i]);

    cartas.innerHTML = cartas.innerHTML + `
    <div class="carta">
        <img src="./img/back.png" />
        <img src="${jogo[i]}" class="escondido" />
    </div>`;
}