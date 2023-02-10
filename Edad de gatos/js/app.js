// Calculo de edad felina
var edadHumana = 1;
console.log('GATO     HUAMNO');
console.log('---------------');

for (let edadDeGato = 1; edadDeGato < 22; edadDeGato++) {
    
    if (edadDeGato == 1) {
        edadHumana = 15;
    } else if (edadDeGato == 2) {
        edadHumana = 24
    } else {
        edadHumana += 4;
    }

    console.log(edadDeGato + '        ' + edadHumana);
}