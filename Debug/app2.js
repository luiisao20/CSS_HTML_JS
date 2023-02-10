function arbol(numPisos) {
    var estrellas = '*'
    var espacios = ' '.repeat(numPisos + 2)
    console.log(espacios + estrellas);
    for (var i = 0; i < numPisos; i++) {
        // 2n+1 stars per row i.e. 1, 3, 5, 7, ...
        var estrellas = '*'.repeat(2 * i);
        var espacios= ' '.repeat(numPisos - i + 2);
        if (i != 0) {
            console.log(espacios + estrellas);
        }
    }
}

arbol(4);