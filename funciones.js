const prompt = require("prompt-sync")({ sigint: true });

//1. Crear una función que convierta pulgadas en centímetros.
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros 

let pulgadas = prompt('Ingrese las pulgadas ');

let convertirPulgadas = (pulg) => {
    return pulg * 2.54 + 'cm';
}

/* console.log(convertirPulgadas(pulgadas)); */

//2. Crear una función que recibe un string y lo convierte en una URL.
//Ej: “pepito” es devuelto como “http://www.pepito.com” 

let nombreWeb = prompt('Ingrese el nombre de la web ');

let convertirWeb = (nombre) => {
    return `http://www.${nombre}.com`
}

/* console.log(convertirWeb(nombreWeb)); */

//3. Crear una función que recibe un string y devuelve la misma frase pero con
//admiración. 

let frase = prompt('Ingrese una frase');

let fraseAdmiracion = (algo) => {
    return '¡' + algo + '!'
}

/* console.log(fraseAdmiracion(frase)); */

//4. Crear una función que calcule la edad de los perros, considerando que 1 año
//para nosotros son 7 de ellos. 

let edadPerro = prompt('Ingrese la edad del perro ');

let calcularEdad = (edad) => {
    return 'La edad de su perro es de ' + edad * 7 + ' años';
}

/* console.log(calcularEdad(edadPerro)); */

//5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
//sueldo mensual como parámetro.
//PD: considerá que tu mes de trabajo tiene 40 horas.

let sueldoMensual = prompt('Ingrese su sueldo mensual ');

let calcularValorHora = (sueldo) => {
    return `Su hora de trabajo es de ${sueldo / 40} horas`;
}

/* console.log(calcularValorHora(sueldoMensual)); */

//6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
//kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
//probando diferentes valores.

//se calcula dividiendo los kilogramos de peso por el cuadrado de la estatura
//en metros (IMC = peso [kg]/ estatura [m2])*/

/* let ingresarAltura = prompt('Ingrese su altura ');
let ingresarPeso = prompt('Ingrese su peso ');

let calculadorIMC = (altura, peso) => {
    return `Su IMC es ${peso / (altura * altura)}`;
}

console.log(calculadorIMC(ingresarAltura, ingresarPeso));
 */
/* let calculadorIMC = (metros, kilogramos) => {
    let altura = Math.pow(metros, 2);

   return kilogramos / altura;
}

console.log(calculadorIMC(1.60, 50)); */

//FUNCIÓN EXPRESADA

/* let ingresarAltura = prompt('Ingrese su altura ');
let ingresarPeso = prompt('Ingrese su peso ');

function calculadorIMC(altura, peso){
    return `Su IMC es ${peso / (altura * altura)}`;
}

console.log(calculadorIMC(ingresarAltura, ingresarPeso)); */

/* 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase() */

/* let retornarMayuscula = (minuscula) => {
    return minuscula.toUpperCase();
}

console.log(retornarMayuscula('hola mundo')); */

/* 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.*/

/* let tipoDeDato = (dato) => {
    return typeof(dato);
}

console.log(tipoDeDato(5));
console.log(tipoDeDato('5'));
console.log(tipoDeDato(true)); */

/* 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi. */

/* 
let ingresarFrase = prompt('Ingrese una frase: ');

let imprimirFrase = (frase) => {
    console.log(frase);
}

imprimirFrase(ingresarFrase); */

/* 
let ingresarNombre = prompt('Ingrese su nombre: ');

let saludo = (nombre) => {
    console.log(`Hola ${nombre}!`)
}

saludo(ingresarNombre); */

/* let num1 = prompt('Ingrese un número: ');
let num2 = prompt('Ingrese otro número: ');

let suma = (numero1, numero2) => {
    console.log(parseInt(num1) + parseInt(num2));
}

suma(num1, num2); */

/* let anioNacimiento = prompt('Ingrese su año de nacimiento: ');

let imprimirEdad = (anioNac) => {

    let anioActual = 2022;

    console.log(`Usted tiene ${anioActual - anioNac} años`);
}

imprimirEdad(anioNacimiento); */

/* let numAleatorio = prompt('Ingrese un número: ');

let numeroAleatorio = (min, max) => {

    let numRandom = Math.floor(Math.random() * (10 - 0)) + 1;

    if(num === numRandom){
        console.log('Felicitaciones, era ese');
    } else {
        console.log('"Lo siento, intenta nuevamente');
    }
   
}

numeroAleatorio(numAleatorio); */

/* let imprimirNumPares = (numero) => { 

    for(let i = 0; i <= numero; i++){
        if(i % 2 == 0){
           console.log(i++)
        } 
    }
}

imprimirNumPares(100); */



