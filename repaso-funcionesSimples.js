const prompt = require("prompt-sync")({ sigint: true });

let convertirPulgadas = (pulgadas) => {
    let centimetro = 2.54;
    return pulgadas * centimetro;
}

/* console.log(convertirPulgadas(parametro)); */

let convertirUrl = (string) => {
    return `http://www.${string}.com`;
}
/* 3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración. */

/*  Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.*/

/*  Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.*/

/*  Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores. */

/* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase() */

/* . Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof. */

/*  Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi. */

let parametro = prompt('Ingrese el parámetro: ')
console.log(convertirUrl(parametro));