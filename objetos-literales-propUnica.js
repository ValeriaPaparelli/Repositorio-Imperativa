let arrayPersonas = [ 
    { 
      nombre: 'Lean', 
      apellido: 'Perez',
      edad: 27
    }, 

    { 
      nombre: 'Eze', 
      apellido: 'Lopez',
      edad: 49
    },
    { 
      nombre: 'Vale', 
      apellido: 'Gutierrez',
      edad: 35
    },
]

let propiedadUnica = (array, string) => {
    let nuevoArray = [];
    for(let i = 0; i < array.length; i++){
        nuevoArray.push(
            {
                [string]: array[i][string]
            }
        );
    }
    return nuevoArray;
}

const resultado = propiedadUnica(arrayPersonas, 'apellido');
console.log(resultado);


