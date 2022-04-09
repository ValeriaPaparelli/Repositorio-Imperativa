const prompt = require("prompt-sync")({ sigint: true });

/* let sumarNumeros = () => {
    let resultado = 0; 
  
    for (let i = 1; i <= 2; i++) {
  
      console.log(resultado);
      resultado = resultado + i;
    }
  
    return resultado;
  };
  
  console.log(sumarNumeros()); */
  

/* function tablaDeMultiplicar(numero) {
	let i = 1;
    while(i <= 10){
        console.log(numero + ' * ' + i + ' = ' + numero * i);
        i++
    }
}

tablaDeMultiplicar(5); */

/* 1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes. */

/* let mostrarNumeros = (numero) => {

    for(let i = 1; i <= 10; i++){

        console.log(numero + i)
    }
}

mostrarNumeros(5); */

/* 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres. */

/* let numDeTresEnTres = () =>{

    for(let i = 6; i < 20; i+=3){
        console.log(i);
    }
}

numDeTresEnTres(); */


/* 3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100 */
/* 
let sumaNumeros = () => {

    let resultado = 0;

    for(let i = 1; i <= 100; i++){
        resultado = resultado + i;
    }

    return resultado;
}

console.log(sumaNumeros()); */

/* 4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.*/

/* let mostrarFactorial = ( numero )=>{

    let resultado = 1

    for( let i = numero ; i > 0 ; i--){

        resultado = resultado * i

    }

    return `el factorail de ${numero} es ${resultado}`

}

let numeroFactorial = prompt("ingresar numero")

console.log( mostrarFactorial( +numeroFactorial))
 */