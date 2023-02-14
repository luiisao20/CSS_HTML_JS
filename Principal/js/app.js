/*
* JS para la comprobacion de datos del formulario de entrada
* @author Luis Bravo <bravo.luis.1995@gmail.com>
*/

// Iniciando variables, objetos y DOM
var nickInput;
var tamanoInput;
var emailInput;
var formEntrada;
var error;
var itemImg;
var avatarItems;
var avatarCont;

// Funciones de evento
function comprobarForm(event) {
    // Comprobar cambios
    if (nickInput.value.match(/(?<!\$)[0-9]/)){
        console.log('No hay nick');
        nickInput.focus();
        event.preventDefault();
        error.innerText = 'El campo de nick no puede comenzar con numero';
        return false
      } else if(tamanoInput.value == '0'){
        console.log('No se ha seleccionado tamaño de panel');
        tamanoInput.focus();
        event.preventDefault();
        error.innerText = 'Tienes que escojer el tamaño del juego'
        return false;
    }
    // Informacion es correcta
    datosUsuario(nickInput, tamanoInput, emailInput);
    historicoUsuario(nickInput);
    return true;
}

function moviendoImg(event){
  itemImg = event.target
  console.log(itemImg.src);
}

function cambiarImg(event){
  avatarCont.src = itemImg.src;
}

/**
 * Carga objetos del DOM comprobaciones y eventos del formulario
 */
function domCargado(){
  // La captura de todos los elementos necesarios
  nickInput = document.getElementById('nick');
  tamanoInput = document.getElementById('tamano');
  emailInput = document.getElementById('email');
  formEntrada = document.getElementById('formEntrada');
  error = document.getElementById('error');
  
  // Comprobar si hay algun error de juego.html
  if(sessionStorage.getItem('error')){
    error.innerText = sessionStorage.getItem('error');
    sessionStorage.removeItem('error');
  }
  
  formEntrada.addEventListener('submit', comprobarForm);
  
  // Eventos del D&D
  avatarItems = document.getElementsByClassName('avatarImgItem');
  
  for (let item of avatarItems){
    item.addEventListener('dragstart', moviendoImg);
  }
  avatarCont = document.getElementById('avatarImg');
  avatarCont.addEventListener('dragover', e=>{e.preventDefault()})
  avatarCont.addEventListener('drop', cambiarImg)
}

// Inicio de carga de eventos
document.addEventListener('DOMContentLoaded', domCargado);
datoGeoLocation();