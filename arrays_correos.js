/* A partir de un array de correos, recorrerlo para corroborar si son válidos. 
Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y 
agregar aquellos que lo tengan al array de correos admitidos.
En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
Desarrollar una función que realice la verificación de cada elemento del array 
de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, 
agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
Mostrar por pantalla la cantidad y los elementos de cada array.*/

// LISTA DE CORREOS PENDIENTES

let arrayCorreosPendientes = [
    "iroman@digitalhouse.com",
    "loki%digitalhouse.com",
    "loki@digitalhouse.com",
    "thanosdigitalhouse.com",
    "thanos@digitalhouse.com",
  ];
  
  // array de correos admitidos
  let arrayCorreosAdmitidos = [
    "thor@digitalhouse.com",
    "tucuMan@digitalhouse.com",
    "wanda@digitalhouse.com",
  ];
  
  // array de correos descartados
  
let arrayCorreosDescartados = [];


let verificarCorreos = (arrayCorreos) => {

    for(let i = 0; i < arrayCorreos.length; i++){
        if(arrayCorreos[i].includes('@')){
            arrayCorreosAdmitidos.push(arrayCorreos[i]);
        } else {
            arrayCorreosDescartados.push(arrayCorreos[i]);
        }
    }

    arrayCorreosPendientes = [];

    console.log("pendientes", arrayCorreosPendientes)
    console.log("admitidos", arrayCorreosAdmitidos)
    console.log("descartados", arrayCorreosDescartados)
}

verificarCorreos(arrayCorreosPendientes);

