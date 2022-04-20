//Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos

//Luego, escribe un algoritmo para sumar todos los numeros en la matriz.

const matrizDeNumeros = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

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

//console.table(matrizDeNumeros);

//2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10 números.
//a) crear una función que retorne la suma de todos los elementos de la matriz.

let generarMatriz = () => {
  let matriz = [];
  let cantColumnas = 10;
  let cantFilas = 10;

  for (let nroFila = 0; nroFila < cantFilas; nroFila++) {
    let fila = [];
    for (let nroColumna = 0; nroColumna < cantColumnas; nroColumna++) {
      fila.push(nroColumna + 1 + cantColumnas * nroFila);
    }
    matriz.push(fila);
  }

  return matriz;
};

//let matriz = generarMatriz();
//console.table(matriz);

let sumarNumerosMatrizDiez = (varMatriz) => {
  let sumarNumeros = 0;
  for (let i = 0; i < varMatriz.length; i++) {
    for (let j = 0; j < varMatriz[i].length; j++) {
      sumarNumeros += varMatriz[i][j];
    }
  }
  return sumarNumeros;
};

//console.log(sumarNumerosMatrizDiez(matriz));

//3) Por último, vamos a generar dos funciones:
//a) crear una función que nos retorne la sumatoria de la primer y última
//columna (sumar la primera Y ya la última)

let sumarDiagPrincipal = (matriz) => {
  let sumaMatriz = 0;
  for (let i = 0; i < matriz.length; i++) {
    sumaMatriz += matriz[i][i];
  }
  return sumaMatriz;
};

//console.log(sumarDiagPrincipal(matriz));

//b) crear una función que nos retorne la sumatoria de la quinta y sexta fila (la
//suma de ambas)

let sumarDiagSecundaria = (matriz) => {
  let sumaMatriz = 0;
  for (let i = 0; i < matriz.length; i++) {
    sumaMatriz += matriz[i][matriz.length - (1 + i)];
  }
  return sumaMatriz;
};

//console.log(sumarDiagSecundaria(matriz));

//c) Una va a sumar los valores en la diagonal marcada en rojo.
//d) La otra va a marcar los valores de la diagonal marcada en verde.
//Ambas funciones deben devolver un resultado único.

//Dada una matriz, recorrer sus valores y sumar solo los números que estén por
//encima o sean iguales a 10, pero menores que 1000.

let numeros = [
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4],
];

let sumarNumeros = 0;
for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros[i].length; j++) {
    if (numeros[i][j] >= 10 && numeros[i][j] < 1000) {
      sumarNumeros += numeros[i][j];
    }
  }
}

//console.log(sumarNumeros);
