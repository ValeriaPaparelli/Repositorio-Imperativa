const prompt = require("prompt-sync")({ sigint: true });

/* ) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes. */

let numSiguientes = (numero) => {
    for(let i = 1; i <= 10; i++){
        console.log(numero + i);
    }
}

/* numSiguientes(5); */

/****************************************************************************************/
/*Imprimir los números del 0 al número que le pase*/

let imprimirNumeros = (numero) => {
    for(let i = 0; i <= numero; i++){
        console.log(i);
    }
}

/* imprimirNumeros(5); */

/********************************************************************************************/

/* Imprimir los números entre el 5 y el 20, saltando de tres en tres */

let numDeTresEnTres = () =>{
for(let i = 6; i < 20; i+=3){ 
    console.log(i)
 }
};

/* numDeTresEnTres(); */

/**********************************************************************************************/

/* Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100 */

let sumatoriaNum = () => {
    let sumatoria = 0;
    for(let i = 0; i <= 100; i++){
        sumatoria += i;
    }
    return sumatoria;
}

/* console.log(sumatoriaNum()); */

/*********************************************************************************************/

/* Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene 
multiplicando todos los números enteros positivos que hay entre el 1 y ese número. */

let mostrarFactorial = (numero)=>{
    let resultado = 1;


    for(let i = 1; i <= numero; i++){
        resultado = resultado * i;
    }

    return `el factorial de ${numero} es ${resultado}`;
}

/* let numeroFactorial = prompt("ingresar numero ");
console.log(mostrarFactorial(numeroFactorial)); */

/*********************************************************************************************/

/*Hacer un programa para calcular el promedio de 3 notas; 
si el promedio es mayor que 7 retornar aprobado, de lo contrario, mostrar desaprobado. */

let calcularNotas = (num1, num2, num3) => {
    let sumNotas = num1 + num2 + num3;
    let promedioNotas = sumNotas / 3;

    if(promedioNotas >= 7){
      return 'Aprobado';
    } else {
        return 'No aprobado';
    }
}

/* console.log(calcularNotas(7,6,6)); */ 

/*Elaborar un programa que permita ingresar un número entero del 1 al 12 
y muestre la tabla de multiplicar de dicho número.
1*1 = 1    1*2 = 2 */

let mostrarTabla = (numero) => {
    for(let i = 1; i <= 10; i++){
        if(numero >= 1 && numero <= 12){
            console.log(`${numero} X ${i} = ${i * numero} `)
        }
    }
}

/* mostrarTabla(2); */

/*Elaborar un programa que muestre la cantidad de números 
pares e impares entre 10 números. */

let mostrarCantidad = (numero) => {
    let pares = 0;
    let impares = 0;

    for(let i = numero; i < numero + 10; i++){
        if(i %2 === 0){
            pares += 1;
        }else{
            impares += 1;
        }
    }
    console.log(`Hay ${pares} números pares y ${impares} números impares`);
}

/* mostrarCantidad(35); */

/*Crear una funcion que reciba un numero por parametros y que muestre por consola
todos los impares que hay en entre el 0 y ese numero, y sumarle 5 a cada uno */

let mostraImpares = ( num )=>{
    
    for(let i = 1 ; i < num ; i++ ){

       if( i % 2 === 1 ){

        console.log(i + 5)
        }
    }
}

mostraImpares(15)