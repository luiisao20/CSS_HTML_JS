const objeto = document.getElementById('objeto');
const contenedor = document.getElementById('contenedor');

objeto.addEventListener('dragstart', 
    e => {console.log('El objeto comienza a moverse');}
);
objeto.addEventListener('dragend', 
    e => {console.log('El objeto deja de moverse');}
);
// objeto.addEventListener('drag', 
//     e => {console.log('El objeto se esta moviendo');}
// );
contenedor.addEventListener('dragenter',
    e =>{console.log('Ha entrado el objeto');}
)
contenedor.addEventListener('dragleave', 
    e => {console.log('El objeto ha salido');}
)
contenedor.addEventListener('dragover', 
    e => {
        e.preventDefault();
        console.log('El objeto esta dentro');
    }
)
contenedor.addEventListener('drop', 
    e => {console.log('El objeto se suelta en el contenedor');}
)