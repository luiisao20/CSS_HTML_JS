/* 
* JS para la gestion de los datos del usuario
* @author Luis Bravo <bravo.luis.1995@gmail.com>
* {@link https://github.com/luiisao20/CSS_HTML_JS GitHub}.
*/
var nick;
var tamano;
var email;
var geoLocationtTxt;

/** Tomar los datos del usuario
* @param {HTMLElement} nick
* @param {HTMLElement} tamano
* @param {HTMLElement} email
*/

function datosUsuario(nick, tamano, email){
  sessionStorage.setItem('nick', nick.value);
  sessionStorage.setItem('tamano', tamano.value);
  sessionStorage.setItem('email', email.value);
  sessionStorage.setItem('geoLocationtTxt', geoLocationtTxt)
}

function getDatosUsuario(){
  nick = sessionStorage.getItem('nick');
  tamano = sessionStorage.getItem('tamano');
  email = sessionStorage.getItem('email');
  console.log(nick);
}

function comprobacionDatosUsuario(){
  if(nick == null){
    sessionStorage.setItem('error', 'No se ha rellenado correctamente el formulario');
    return false;
  }
  return true;
}

function datoGeoLocation(){
  if(!navigator.geolocation){
    geoLocationtTxt = 'El navegador no es compatible con API Geolocation';
  } else {
    navigator.geolocation.getCurrentPosition(
      // Cuando hay exito
      (position) =>{geoLocationtTxt = 'Latitud: ' + position.coords.latitude + ', Longitud:   ' + position.coords.longitude},
      // Error
      () => {geoLocationtTxt = 'La geolocalizacion no se ha podido realizar'}
    )
  }
}

/** Guardar en el local los datos del usuario
* @param {Array} historico
* @param {JSON} registroUsuario
*/

function historicoUsuario(nick){
  let historicoStorage = localStorage.getItem('historico')
  let historico;
  if (historicoStorage == null){
    historico = []
  } else{
    historico = JSON.parse(historicoStorage);
  }
  let registroUsuario = {
    user: nick.value,
    fecha: Date.now()
  }
  historico.push(registroUsuario);
  localStorage.setItem('historico', JSON.stringify(historico));
}