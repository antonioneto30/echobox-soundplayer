function playSound (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    playSound(idAudio);
  }
    contador = contador + 1;

}

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
