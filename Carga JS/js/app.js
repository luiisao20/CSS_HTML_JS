// Ejemplo de carga
console.log(document.getElementById('p2').innerText)
var progreso = '.';

for(let index = 0; index < 1000000; index++) {
    progreso = '.' + progreso;
}

console.log('Script cargado');