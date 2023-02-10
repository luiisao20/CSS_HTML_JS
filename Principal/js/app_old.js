/*
* comprobacion de datos del formulario
*/

// Capturar el valor del input nick
const nickInput = document.getElementById('nick');
console.log(nickInput.nodeType);
nickInput.value = 'Licenciado';
console.log(nickInput.value);

// Capturar el valor del select
const tamanoInput = document.getElementById('tamano');
console.log(tamanoInput.value);
console.log(tamanoInput.options[tamanoInput.selectedIndex].text);

// Ejemplo sobre eventos
function test(){
    console.log('EVENTO SOBRE EL MOUSE')
}

function test2(){
    let nickInput2 = document.getElementById('nick');
    console.log(nickInput2.value)
}
