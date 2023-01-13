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

for (let i = 0; i < qtdeCartas / 2; i++) {
    jogo.push(cartasJogo[i]);
    jogo.push(cartasJogo[i]);
}

jogo.sort(comparador);

for (let i = 0; i < jogo.length; i++) {
    cartas.innerHTML = cartas.innerHTML + `
    <div data-test="card" class="carta" onclick="virarCarta(this)">
        <img data-test="face-down-image" src="./img/back.png" />
        <img src="${jogo[i]}" class="escondido" data-test="face-up-image"/>
    </div>`;

}

function virarCarta(cartaSelecionada) {

    const costasCarta = cartaSelecionada.children[0];

    costasCarta.classList.add("escondido");

    const frenteCarta = cartaSelecionada.children[1];

    frenteCarta.classList.remove("escondido");

}