const prompt = require("prompt-sync")({ sigint: true });

//Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos

//Luego, escribe un algoritmo para sumar todos los numeros en la matriz.

const matrizDeNumeros = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const nueros = [0, 1, 2, 3, 4];

let sumarNumerosMatriz = (arrayMatriz) => {
  let sumarNumeros = 0;
  for (let fila = 0; fila < arrayMatriz.length; fila++) {
    //Recorro un array de arrays
    //console.log("fila: ", fila, arrayMatriz[fila]);
    //length de la matriz, que es cada fila
    for (let col = 0; col < arrayMatriz[fila].length; col++) {
      //console.log(" - columna: ", col, arrayMatriz[fila][col]);
      //length de cada fila, que es cada columna
      sumarNumeros += arrayMatriz[fila][col];
    }
  }
  return sumarNumeros;
};

//console.log(sumarNumerosMatriz(matrizDeNumeros));

//Sumar Impares

let sumaImpares = 0;
for (let fila = 0; fila < matrizDeNumeros.length; fila++) {
  for (let col = 0; col < matrizDeNumeros[fila].length; col++) {
    if (matrizDeNumeros[fila][col] % 2 != 0) {
      sumaImpares += matrizDeNumeros[fila][col];
    }
  }
}

//console.log(sumaImpares);

console.table(matrizDeNumeros);

//2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10 números.
//a) crear una función que retorne la suma de todos los elementos de la matriz.

/* 3) Por último, vamos a generar dos funciones:
a) crear una función que nos retorne la sumatoria de la primer y última
columna (sumar la primera Y ya la última)
b) crear una función que nos retorne la sumatoria de la quinta y sexta fila (la
suma de ambas)
c) Una va a sumar los valores en la diagonal marcada en rojo.
d) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. */
