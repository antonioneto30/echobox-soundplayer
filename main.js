function playSound (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

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
