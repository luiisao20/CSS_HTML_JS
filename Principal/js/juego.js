/* 
* JS para el juego
* @author Luis Bravo <bravo.luis.1995@gmail.com>
*/

var iniciadoMarcado = false;
var adyacentes = [];
var idMarcados = [];
var classMarcada;
var tamanoPanel;
var idInterval;

function rellenarFormularioUsuario(){
    document.getElementById('nick').value = nick;
    document.getElementById('avatarimg').src = avatarImg;
    tamanoPanel = parseInt(tamano)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pintarPanelDeJuego(){
    document.getElementById('juego').style.gridTemplateColumns = "repeat("+tamano+", 1fr)";
    document.getElementById('juego').style.gridTemplateRows = "repeat("+tamano+", 1fr)";

    let items = '';
    let color = ['rojo', 'verde'];
    let colorRnd = 0;

    for (let index = 0; index < (parseInt(tamano)*parseInt(tamano)); index++) {
        if((index % 2) > 0) colorRnd = getRandomInt(2);
        items += `<div class="containerItem"><div id="${index}" class="item ${color[colorRnd]}"></div></div>`
    }

    document.getElementById('juego').innerHTML = items;
}

/**
 * Añadir los eventos
 */

/**
 * Calcula el array de los adyacentes
 * @param {} idMarcado numero marcado
 */

function calcularAdyacentes(idMarcado){
    adyacentes = [];
    // Adyacente superior
    if((idMarcado - tamanoPanel) >= 0) adyacentes.push(idMarcado - tamanoPanel);
    // Adyacente inferior
    if((idMarcado + tamanoPanel) < (tamanoPanel * tamanoPanel)) adyacentes.push(idMarcado + tamanoPanel);
    // Adyacente izquierda
    if((idMarcado % tamanoPanel) > 0) adyacentes.push(idMarcado - 1);
    // Adyacente derecha
    if(((idMarcado + 1) % tamanoPanel) > 0) adyacentes.push(idMarcado + 1);

    for (let index = 0; index < adyacentes.length; index++) {
        console.log(adyacentes[index]);   
    }
}

/**
 * Realiza el conteo regresivo
 */

function cuentaAtras(){
    let inputRestante = parseInt(document.getElementById('tmpo').value) - 1;
    document.getElementById('tmpo').value = inputRestante;
    if(inputRestante == 0){
        clearInterval(idInterval);
        // Finalizar todos los eventos
        const items = document.getElementsByClassName('item');
        for (let item of items) {
            item.removeEventListener('mousedown', comenzarMarcar);
            item.removeEventListener('mouseover', continuarMarcando);
        }
        document.removeEventListener('mouseup', finalizarMarcado);
        // Cambiar z-index de los paneles
        document.getElementById('juegoacabado').classList.add('juegoAcabadoColor');
        document.getElementById('juegoacabado').style.zIndex = '2';
        document.getElementById('juego').style.zIndex = '1';
        document.getElementById('nuevapartida').addEventListener('click', e => location.reload())
    }

}

/**
 * Inician los eventos del programa
 */
function programarEventosJuego(){
    const items = document.getElementsByClassName('item');
    for (let item of items) {
        item.addEventListener('mousedown', comenzarMarcar);
        item.addEventListener('mouseover', continuarMarcando);
    }
    document.addEventListener('mouseup', finalizarMarcado);
    // Cuenta regresiva
    idInterval = setInterval(cuentaAtras, 1000)
}

/**
 * Finaliza el marcado
 * @param {} event evento del mouse
 */

function finalizarMarcado(event){
    iniciadoMarcado = false;
    adyacentes = [];
    // Añadde la puntuacion
    const puntuacionInput = document.getElementById('puntuacion')

    if(idMarcados.length > 1){
        puntuacionInput.value = parseInt(puntuacionInput.value) + idMarcados.length;
    }
    // Trabajar con los marcados
    for (let index = 0; index < idMarcados.length; index++) {
        // Capturar el objeto
        let itemMarcado = document.getElementById(idMarcados[index]);
        itemMarcado.parentElement.classList.remove(classMarcada);
        let color = ['rojo', 'verde'];
        let colorRnd = getRandomInt(2);
        itemMarcado.classList.remove(classMarcada);
        itemMarcado.classList.add(color[colorRnd]);
    }
    idMarcados = [];
    console.log('Finalizar el marcado');
}

/**
 * Marca si da click
 * @param {} event
 */

function comenzarMarcar(event){
    let item = event.target;
    let containerItem = item.parentElement;
    if(item.classList.contains('rojo')){
        classMarcada = 'rojo';
        containerItem.classList.add('rojo')
    } else {
        classMarcada = 'verde';
        containerItem.classList.add('verde');
    }

    if (!iniciadoMarcado) iniciadoMarcado = true;

    console.log('Se ha pinchado sobre un circulo');
    // Guardar los marcados
    idMarcados.push(parseInt(item.id))
    // Calcular los adyacentes
    calcularAdyacentes(parseInt(item.id));
}

/**
 * Marca si pasa por encima
 * @param {} event
 */

function continuarMarcando(event){
    if (iniciadoMarcado) {
        let item = event.target;
        let idNuevo = parseInt(item.id);

        if(adyacentes.includes(idNuevo) && 
            item.classList.contains(classMarcada)){

            let containerItem = item.parentElement;
            if(item.classList.contains('rojo')) containerItem.classList.add('rojo');
            else containerItem.classList.add('verde');
            // Calcular los adyacentes
            idMarcados.push(parseInt(item.id))
            calcularAdyacentes(parseInt(item.id))
        }
    }

    console.log('Pasando sobre el circulo');
}
// Capturamos los datos del usuario
getDatosUsuario();
// Comprobamos los datos
if(!comprobacionDatosUsuario()) location = 'index.html';
// Rellenamos formulario
rellenarFormularioUsuario();
pintarPanelDeJuego();
programarEventosJuego();