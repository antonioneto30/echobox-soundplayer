/* EXEMPLO DE CÓDIGO POM E CLAP

function playSoundPom () {
    document.querySelector('#som_tecla_pom').play();
}

function playSoundClap() {
    document.querySelector('#som_tecla_clap').play();
}



document.querySelector('.tecla_pom').onclick = playSoundPom;
document.querySelector('.tecla_clap').onclick = playSoundClap;

*/

function playSoundPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = playSoundPom;

    contador = contador + 1;

    console.log(contador);
}