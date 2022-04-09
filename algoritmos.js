//2) Escriban una función que reciba dos parámetros: un array y un índice. La
//función deberá de mostrar por consola el valor del elemento según el
//índice dado. Por ejemplo, dada la siguiente array e índice, la función
//imprimirá '6'.
//let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;
//Visiten este sandbox para escribir su código.
//https://codesandbox.io/s/busqueda-en-array-025me?file=/src/index.js

let numeros = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

let index = 1;

let mostraNumero = (array, indice) => {
  return array[indice];
};

/* console.log(mostraNumero(numeros, index)) */ //Escribir una función que, dado un número de mes, devuelva la cantidad
//de días de ese mes —suponiendo que no es un año bisiesto—.
//https://codesandbox.io/s/dias-del-mes-jb0f2?file=/src/index.js

let diasDelMes = (mes, anio) => {
  return new Date(anio, mes, 0).getDate();
};

/* console.log(let diasDelMes = (mes, anio) => {
  (4, 2022)); */

let diasDelMes2 = function (numeroMes) {
  if (
    numeroMes == 1 ||
    numeroMes == 3 ||
    numeroMes == 5 ||
    numeroMes == 7 ||
    numeroMes == 8 ||
    numeroMes == 10 ||
    numeroMes == 12
  ) {
    return 31;
  } else if (
    numeroMes == 4 ||
    numeroMes == 6 ||
    numeroMes == 9 ||
    numeroMes == 11
  ) {
    return 30;
  } else {
    return 28;
  }
};

/* let resultadoDias= diasDelMes2(12)
  console.log(resultadoDias) */

//4) Escribir una función de JavaScript que invierta un número. Por ejemplo,
//si x = 32443, la salida debería ser 34423.
//https://codesandbox.io/s/inverter-jfwm7?file=/src/index.js

function reverse_a_number(num) {
  num = num + "";
  return num.split("").reverse().join("");
}

/* console.log(Number(reverse_a_number(32243))); */

/*Convierta un número en una cadena:
  Código: -> n = n + "";
  Nota: Hay diferentes formas de convertir un número a una cadena:
  
  Cadena literal -> str = "" + num + "";
  Constructor de cadenas -> str = String(num);
  toString -> str = num.toString();
  Cadena Literal simple -> str = "" + num;+/
  
  /*El método split() se usa para dividir un objeto String en una matriz de cadenas separando 
  la cadena en subcadenas.
  Código: consola.log('1000'.split(""));
  Salida: ["1", "0", "0", "0"]
  
  El método reverse() se usa para invertir una matriz en su lugar. 
  El primer elemento de la matriz se convierte en el último y el último en el primero.
  Código: console.log(["1", "0", "0", "0"].reverse());
  Salida: ["0", "0", "0", "1"]
  
  El método join() se usa para unir todos los elementos de una matriz en una cadena.
  Código: console.log(["1", "0", "0", "0"].reverse().
  El constructor Number contiene constantes y métodos para trabajar con números. 
  Los valores de otros tipos se pueden convertir en números utilizando la función Number().*/

//5) Escribir una función que reciba una array y solo imprima los valores que
//se repiten. Por ejemplo, dada la siguiente array e índice, la función
//imprimirá '6,23,33,100'. let array =
//[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

let arrayNumeros = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

let imprimirRepetidos = (array) => {};

/* console.log(imprimirRepetidos(arrayNumeros)); */
