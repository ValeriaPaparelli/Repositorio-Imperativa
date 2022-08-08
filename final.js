//Ejercicio 1
//1-Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio.
//a-¿Qué tipo de dato es?
//La variable alumno es un array de objetos.

//b-¿Cuáles son las claves que puedes identificar?
//La claves son : Id, nombre, apellido, legajo, notas

const alumnos = [
  {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
  },
  {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
  },
  {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
  },
  {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
  },
  {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
  },
];

//2-Crear una función que ordene la estructura definida en el archivo final.js
//según la propiedad legajo de forma descendente. (*)

let ordenarPorLegajoDesc = (array) => {
  let temporal;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].legajo < array[j + 1].legajo) {
        temporal = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporal;
      }
    }
  }
};

console.log(alumnos);
ordenarPorLegajoDesc(alumnos);
console.log(alumnos);

//Ejercicio 2
//Dado el objeto

let alumno = {
  id: 5,
  nombre: "Lucas",
  apellido: "Astrada",
  legajo: 20220125,
  notas: [10, 6, 8, 7, 9],
  calcularPromedio: function () {
    let suma = 0;
    let promedio = 0;

    for (let i = 0; i < this.notas.length; i++) {
      suma += this.notas[i];
    }

    promedio = suma / this.notas.length;
    return promedio;
  },
};

//3-Crear un método que retorne el promedio de notas. (*)

console.log(`El promedio del alumno es: ${alumno.calcularPromedio()}`);

//4-Crear una función que ordene las notas del alumno de forma ascendente. (*)

let ordenarNotasAsc = (obj) => {
  let temp;
  for (let i = 0; i < obj.notas.length; i++) {
    for (let j = 0; j < obj.notas.length - 1; j++) {
      if (obj.notas[j] > obj.notas[j + 1]) {
        temp = obj.notas[j];
        obj.notas[j] = obj.notas[j + 1];
        obj.notas[j + 1] = temp;
      }
    }
  }
};

console.log(alumno);
ordenarNotasAsc(alumno);
console.log(alumno);

//Ejercicio 3
//a- Crea una matriz de 3x3, cuadrada, con números enteros negativos en cada una de sus posiciones.

let matriz = [
  [-1, -2, -3],
  [-4, -5, -6],
  [-7, -8, -9],
];

//b-Crear una función que retorne la suma de todos los números dentro de la matriz
// que sean múltiplos de 5.

let sumaMultiplosCinco = (arrMatriz) => {
  let suma = 0;
  for (let i = 0; i < arrMatriz.length; i++) {
    for (let j = 0; j < arrMatriz[i].length; j++) {
      if (arrMatriz[i][j] % 5 === 0) {
        suma += arrMatriz[i][j];
      }
    }
  }
  return suma;
};

console.log(
  `La suma de los números que son multiplos de 5 es:
${sumaMultiplosCinco(matriz)}`
);

//c-Crear una función que retorne un valor booleano dependiendo si la suma
// de todos los valores de la matriz es impar.

let retornarBoolean = (arrMatriz) => {
  let suma = 0;
  for (let i = 0; i < arrMatriz.length; i++) {
    for (let j = 0; j < arrMatriz[i].length; j++) {
      suma += arrMatriz[i][j];
    }
  }
  return suma % 2 !== 0;
};

console.log(retornarBoolean(matriz));

//d-Crear una función que retorne la multiplicación de las diagonales de la matriz.

let MultiplicarDiagonales = (arrMatriz) => {
  let multDiagPrincipal = -1;
  let multDiagSecundaria = -1;
  for (let i = 0; i < arrMatriz.length; i++) {
    multDiagPrincipal *= arrMatriz[i][i];
    multDiagSecundaria *= arrMatriz[i][arrMatriz.length - (1 + i)];
  }
  return `La multiplicación de las diagonales de la matriz es de ${
    multDiagPrincipal * multDiagSecundaria
  }`;
};

console.log(MultiplicarDiagonales(matriz));
