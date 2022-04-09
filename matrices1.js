//1) Primero vamos a crear una matriz de 2x2 con Js.

const matrizDosPorDos = [
  [1, 2],
  [3, 4],
];

//2) ¿Cómo accedo al valor almacenado en 1-1?

//console.log(matrizDosPorDos[1][1]);

//3) ¿Cómo puedo cambiar el valor almacenado en 1-0?

matrizDosPorDos[1][0] = 5;
//console.log(matrizDosPorDos[1][0]);

//console.table(matrizDosPorDos);

//4) Probemos ahora crear matrices que no sean cuadradas, ¿como lo haríamos?

const matrizNoCuadrada = [
  [3, 4, 5, 6],
  [1, 4],
  [9, 8, 7],
];

//console.table(matrizNoCuadrada);

let arrayMatriz = [];
let arrayX = ["x0", "x1", "x2"];
let arrayY = ["y0", "y1", "y2"];

arrayMatriz[0] = arrayX;
arrayMatriz[1] = arrayY;
console.table(arrayMatriz);

//Ahora bien, pensemos, con los conocimientos que ya tenemos, ¿cómo podemos optimizar el funcionamiento de una matriz?
//Si pensaste en un FOR estas en lo correcto, veamos cómo imprimir todos los valores

console.log(arrayMatriz.length);
for (let i = 0; i < arrayMatriz.length; i++) {
  console.log(arrayMatriz[i]);
}

//Pensemos ahora, cómo podemos imprimir con un ciclo for la primera columna solamente y, luego, solo la primera fila.
//Primera columna:

for (let i = 0; i < arrayMatriz.length; i++) {
  console.log(arrayMatriz[i][0]);
}

//Primera fila:

for (let i = 0; i < arrayMatriz.length; i++) {
  console.log(arrayMatriz[0][i]);
}

//Ahora que ya sabemos cómo recorrer una fila y una columna, ¿cómo podremos recorrer toda la matriz?
//Una opción muy común es usar un doble ciclo for, pensemos cómo se haría:

//Bucle que recorre el primer array
for (let i = 0; i < arrayMatriz.length; i++) {
  //Bucle que recorre el array que está en la posición i
  for (let j = 0; j < arrayMatriz[i].length; j++) {
    console.log(arrayMatriz[i][j]);
  }
}
