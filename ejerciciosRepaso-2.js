// ARRAY, OBJETOS, IF ELSE, Y CICLO FOR

// CREAR UN ARRAY DE PERSONAS CON LAS SIGUIENTES PROPIEDADES CADA UNA:
// NOMBRE, APELLIDO, EDAD, PROFESION, cantidadHermanos Y ADEMAS UN METODO QUE NOS RETORNE EL
// NOMBRE COMPLETO DE LA PERSONA

let personas = [
  {
    nombre: "Valeria",
    apellido: "Paparelli",
    edad: 35,
    profesion: "Developer",
    cantidadHermanos: 2,
    retornarNombreCompleto: function () {
      return this.nombre + " " + this.apellido;
    },
  },
  {
    nombre: "Francisco",
    apellido: "Lopez",
    edad: 40,
    profesion: "Developer",
    cantidadHermanos: 4,
    retornarNombreCompleto: function () {
      return this.nombre + " " + this.apellido;
    },
  },
  {
    nombre: "Maia",
    apellido: "Nardi",
    edad: 12,
    profesion: "Estudiante",
    cantidadHermanos: 1,
    retornarNombreCompleto: function () {
      return this.nombre + " " + this.apellido;
    },
  },
];

// for (let i = 0; i < personas.length; i++) {
//   console.log(personas[i].retornarNombreCompleto());
// }

// LUEGO CON UN BUCLE O CICLO INCREMENTAR LA CANTIDAD DE HERMANOS DE CADA PERSONA EN 3

// for (let i = 0; i < personas.length; i++) {
//   console.log(personas[i].cantidadHermanos + 3);
// }

// MATRICES
// DADA LA SIGUIENTE MATRIZ

let matriz = [
  [5, 1, 12, 24],
  [19, 2, 7, 11],
  [10, 3, 14, 27],
];

// CALCULAR LA SUMA TOTAL DE LA COLUMNA EN LA POSICION 1 ( RECORDA QUE EMPIEZA EN LA POSICION 0)

let sumaColumnaUno = 0;

for (let i = 0; i < matriz.length; i++) {
  sumaColumnaUno += matriz[i][1];
}

//console.log(sumaColumnaUno);

// CALCULAR EL RESULTADO DE MULTIPLICAR TODO LOS ELEMENTOS DE LA FILA EN LA POSICION 2
//( RECORDA QUE EMPIEZA EN LA POSICION 0)

let resultado = 1;

for (let i = 0; i < matriz[2].length; i++) {
  resultado = resultado * matriz[2][i];
}

//console.log(resultado);

// CALCULAR EL TOTAL DE LA SUMA DE TODO LOS ELEMENTOS DE LA MATRIZ

let sumaTotal = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    sumaTotal += matriz[i][j];
  }
}

//console.log(sumaTotal);

// CREAR UNA MATRIZ DE 5 X 5 CON LOS VALORES QUE TU QUIERAS

const matrizDeNumeros = [
  [41, 42, 43, 44, 45],
  [36, 37, 38, 39, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

// CREAR UNA FUNCION QUE NOS RETORNE EL TOTAL DE MULTIPLICAR TODOS LOS NUMEROS DE LA DIAGONAL PRINCIPAL

let multiplicarNumDiagPrin = (matriz) => {
  let resultadoMult = 1;
  for (let i = 0; i < matriz.length; i++) {
    resultadoMult *= matriz[i][i];
  }
  return resultadoMult;
};

let resultadoMult = multiplicarNumDiagPrin(matrizDeNumeros);
console.log(resultadoMult);

// CREAR UNA FUNCION QUE NOS RETORNE EL TOTAL DE SUMAR TODOS LOS NUMEROS DE LA DIAGONAL SECUNDARIA

let sumarNumDiagSec = (matriz) => {
  let resultadoSum = 0;
  for (let i = 0; i < matriz.length; i++) {
    resultadoSum += matriz[i][matriz.length - (1 + i)];
  }
  return resultadoSum;
};

let resultadoSum = sumarNumDiagSec(matrizDeNumeros);
console.log(resultadoSum);

// EN UNA VARIABLE GUARDAR EL RESULTADO DE DIAGONALPRINCIPAL MENOS DIAGONALSECUNDARIA

let resultadoRestaDiag = resultadoMult - resultadoSum;
console.log(resultadoRestaDiag);

// let resultadoRestaDiag = resultadoMult - resultadoSum;
// console.log(resultadoRestaDiag);

// ALGORITMO BUBBLE SORT
// DADO EL SIGUIENTE ARRAY DE NUMEROS, ORDENARLO DE FORMA ASCENDENTE Y LUEGO DESCENDETE

let numerosParaOrdenar = [12, 15, 2, 19, 4, 13, 22, 1];

let ordenarNumerosAsc = (array) => {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
};

//ordenarNumerosAsc(numerosParaOrdenar);

let ordenarNumerosDesc = (array) => {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
};

//ordenarNumerosDesc(numerosParaOrdenar);

// AHORA DEBERAS ORDENAR EL ARRAY DE PERSONAS QUE CREASTE AL INICIO DE FORMA ASCENDENTE
// EN BASE A LA CANTIDAD DE HERMANOS E IMPRIMIRLO POR CONSOLA PARA VERIFICAR

let ordenarPersonasAsc = (array) => {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].cantidadHermanos > array[j + 1].cantidadHermanos) {
        temp = array[j].cantidadHermanos;
        array[j].cantidadHermanos = array[j + 1].cantidadHermanos;
        array[j + 1].cantidadHermanos = temp;
      }
    }
  }
  console.log(array);
};

//ordenarPersonasAsc(personas);

// LUEGO DEBERAS ORDENARLO DE FORMA DESCENDENTE EN BASE A LA PROPIEDAD NOMBRE

let ordenarPersonasDesc = (array) => {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].nombre < array[j + 1].nombre) {
        temp = array[j].nombre;
        array[j].nombre = array[j + 1].nombre;
        array[j + 1].nombre = temp;
      }
    }
  }
  console.log(array);
};

//ordenarPersonasDesc(personas);
