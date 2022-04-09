const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//a. Obtener en un nuevo array las edades menores a 18.

let arrayMenores = (array) => {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 18) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
};

/* let nuevoArray = arrayMenores(edades);
console.log(nuevoArray); */

//b. Obtener en un nuevo array las edades mayor o igual a 18.

let arrayMayores = (array) => {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 18) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
};

/* let nuevoArray = arrayMayores(edades);
console.log(nuevoArray); */

//c. Obtener en un nuevo array las edades igual a 18.

let arrayIguales = (array) => {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 18) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
};

/* let nuevoArray = arrayIguales(edades);
console.log(nuevoArray); */

//d. Obtener el menor.

let min = edades[0];

for (let i = 0; i < edades.length; i++) {
  if (edades[i] < min) {
    min = edades[i];
  }
}

/* console.log(min); */

//d. Obtener el mayor.

let mayor = edades[0];

for (let i = 0; i < edades.length; i++) {
  if (edades[i] > mayor) {
    mayor = edades[i];
  }
}

/* console.log(mayor); */

//Obtener el promedio de edades

let promedioEdades = (array) => {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma / array.length;
};

let promedio = promedioEdades(edades);
console.log(promedio);

/* const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]; */

//g. Incrementar en 1 todas las edades.

let incremetarEdades = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i]++;
  }
  return array;
};

console.log(incremetarEdades(edades));

let numeros = [2, 5, 12, 1, 6, 19, 23, 3];
// encontrar el numero mayor de un array

let mayorYmenor = (x) => {
  let numMayor = x[0];
  let numMenor = x[0];
  let arrResultado = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] > numMayor) {
      numMayor = x[i];
    } else if (x[i] < numMenor) {
      numMenor = x[i];
    }
  }

  arrResultado.push(numMayor, numMenor);
  return arrResultado;
};

/* let arrMaxMin = mayorYmenor(numeros)
console.log(arrMaxMin) */
