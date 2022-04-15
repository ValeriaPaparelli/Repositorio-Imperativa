const edades = [33, 27, 34, 30, 34, 25];

//a. Desarrollar una función que ordene internamente de forma ascendente las
//edades, la misma deberá retornar él array ordenado.

let ordenarEdadesAsc = (array) => {
  let temporal;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        temporal = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporal;
      }
    }
  }
  console.log(array);
};

//ordenarEdadesAsc(edades);

//b. Desarrollar una función que ordene internamente de forma descendente
//las edades, la misma deberá retornar él array ordenado

let ordenarEdadesDesc = (array) => {
  let temporal;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) {
        temporal = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporal;
      }
    }
  }
  console.log(array);
};

//ordenarEdadesDesc(edades);

//2-¿Cómo pudieras ordenar el array anterior, alfabéticamente?

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"];

let ordenarAlf = (array) => {
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

//ordenarAlf(letras);

const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];

//a. Desarrollar una función que ordene internamente de forma ascendente según él
//saldo de cada cuenta, la misma deberá retornar él array ordenado .

let ordenarPorSaldoCuenta = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].saldo > arr[j + 1].saldo) {
        let temp = arr[j].saldo;
        arr[j].saldo = arr[j + 1].saldo;
        arr[j + 1].saldo = temp;
      }
    }
  }
  console.log(arr);
};

//ordenarPorSaldoCuenta(arrayCuentas);

//b. Desarrollar una función que ordene internamente de forma ascendente según la
//edad del titular de cada cuenta, la misma deberá retornar él array ordenado.

let ordenarPorEdadTitular = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].edadTitular > arr[j + 1].edadTitular) {
        temp = arr[j].edadTitular;
        arr[j].edadTitular = arr[j + 1].edadTitular;
        arr[j + 1].edadTitular = temp;
      }
    }
  }
  console.log(arr);
};

//ordenarPorEdadTitular(arrayCuentas);
