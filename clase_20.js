// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let cantLikes = [24, 65, 87, 90, 14, 75, 34, 63, 25, 56, 81, 23, 58, 71, 18];

let ordenarValores = (array) => {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

//console.log(ordenarValores(cantLikes));

// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.

let temperatura = [
  {
    dia: 1,
    mes: 5,
    tempMax: 33,
    tempMin: 9,
  },
  {
    dia: 2,
    mes: 5,
    tempMax: 31,
    tempMin: 10,
  },
  {
    dia: 3,
    mes: 5,
    tempMax: 35,
    tempMin: 15,
  },
  {
    dia: 4,
    mes: 5,
    tempMax: 29,
    tempMin: 5,
  },
];

// a) Ordenar por temperatura mínima de menor a mayor.

let ordenarTempMin = (array) => {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].tempMin > array[j + 1].tempMin) {
        temp = array[j].tempMin;
        array[j].tempMin = array[j + 1].tempMin;
        array[j + 1].tempMin = temp;
      }
    }
  }
};

/* console.log(temperatura);
ordenarTempMin(temperatura);
console.log(temperatura); */

// b) Ordenar por temperatura máxima de mayor a menor.

let ordenarTempMax = (array) => {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].tempMax < array[j + 1].tempMax) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

console.log(temperatura);
ordenarTempMax(temperatura);
console.log(temperatura);
