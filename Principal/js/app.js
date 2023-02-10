/*
JS para la comprobacion de datos del formulario de entrada
*/

// Iniciando variables, objetos y DOM
const buttonJugar = document.getElementById('jugar');

// Funciones de evento
function comprobarForm() {
    console.log('Comprobamos el formulario');
}
function ejecutarAccion() {
    console.log('Ejecutar accion');
    buttonJugar.removeEventListener('click', ejecutarAccion);
}

buttonJugar.addEventListener('click', comprobarForm);
buttonJugar.addEventListener('click', ejecutarAccion);
