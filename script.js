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
        <div class="face" >
        <img data-test="face-down-image" src="./img/back.png" />
        </div>
        <div class="face back-face" >
        <img src="${jogo[i]}" data-test="face-up-image"/>
        </div>
    </div>`;

}

let contador = 0;
let jogadas = 0;
let arrayFrenteCartas = [];
let arrayCostasCartas = [];

function virarCarta(cartaSelecionada) {

    if (contador < 2) {
        const costasCarta = cartaSelecionada.children[0];
        costasCarta.classList.add("back-face");

        const frenteCarta = cartaSelecionada.children[1];
        frenteCarta.classList.remove("back-face");

        arrayCostasCartas.push(costasCarta);
        arrayFrenteCartas.push(frenteCarta);

        contador++;
    }

    setTimeout(desvirarCarta, 2000);

    jogadas++;
}

let cartasIguais = 0;

function desvirarCarta() {
    if (arrayFrenteCartas[0].innerHTML !== arrayFrenteCartas[1].innerHTML) {
        arrayFrenteCartas[0].classList.add("back-face");
        arrayCostasCartas[0].classList.remove("back-face");
        arrayFrenteCartas[1].classList.add("back-face");
        arrayCostasCartas[1].classList.remove("back-face");

    } else {
        cartasIguais++;
        if (qtdeCartas / 2 === cartasIguais) {
            alert(`Você ganhou em ${jogadas} jogadas!`);
        }
    }

    if (contador === 2) {
        contador = 0;
        arrayFrenteCartas = [];
        arrayCostasCartas = [];
    }
}