/*
JS para la comprobacion de datos del formulario de entrada
*/

// Iniciando variables, objetos y DOM
const nickInput = document.getElementById('nick');
const tamanoInput = document.getElementById('tamano');
const formEntrada = document.getElementById('formEntrada');
const error = document.getElementById('error');

// Funciones de evento
function comprobarForm(event) {
    // Comprobar cambios
    if (nickInput.value.match(/(?<!\$)[0-9]/)){
        console.log('No hay nick');
        nickInput.focus();
        event.preventDefault();
        error.innerText= 'El campo de nick no puede comenzar con numero';
        return false
    } else if(tamanoInput.value == '0'){
        console.log('No se ha seleccionado tamaño de panel');
        tamanoInput.focus();
        event.preventDefault();
        error.innerText= 'Tienes que escojer el tamaño del juego'
        return false;
    }
    return true;
}
// Funcin parseInt
// Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarForm);