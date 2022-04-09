const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$3,253.40",
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3,229.45",
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1,360.19",
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: "$3,627.12",
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];

//a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

let menoresTreinta = (array) => {
  let nuevoArrayMenoresTreinta = [];
  for (let i = 0; i < array.length; i++) {
    if (arrayCuentas[i].edadTitular < 30) {
      nuevoArrayMenoresTreinta.push(arrayCuentas[i]);
    }
  }
  return nuevoArrayMenoresTreinta;
};

/* console.log(menoresTreinta(arrayCuentas)); */

//b. Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

let mayoresIgualesTreinta = (array) => {
  let nuevoArrayMayoresIgualesTreinta = [];
  for (let i = 0; i < array.length; i++) {
    if (arrayCuentas[i].edadTitular >= 30) {
      nuevoArrayMayoresIgualesTreinta.push(arrayCuentas[i]);
    }
  }
  return nuevoArrayMayoresIgualesTreinta;
};

/* console.log(mayoresIgualesTreinta(arrayCuentas)); */

//c. Obtener un nuevo array de cuentas cuyas edades sean igual a 30.

let igualesTreinta = (array) => {
  let nuevoArrayIgualesTreinta = [];
  for (let i = 0; i < array.length; i++) {
    if (arrayCuentas[i].edadTitular === 30) {
      nuevoArrayIgualesTreinta.push(arrayCuentas[i]);
    }
  }
  return nuevoArrayIgualesTreinta;
};

/* console.log(igualesTreinta(arrayCuentas)); */

//d. Obtener la cuenta con el titular de la misma más joven.

let titularMasJoven = (array) => {
  let masJoven = arrayCuentas[0];
  for (let i = 0; i < array.length; i++) {
    if (arrayCuentas[i].edadTitular < masJoven.edadTitular) {
      masJoven = arrayCuentas[i];
    }
  }
  return masJoven;
};

/* console.log(titularMasJoven(arrayCuentas)); */

//e. Obtener un nuevo array por cada tipo de cuenta.

let obtenerTipoDeCuenta = (array) => {
  let tipoCuentaSaldo = [];
  let tipoCuentaCorriente = [];
  for (let i = 0; i < array.length; i++) {
    if (arrayCuentas[i].tipoCuenta === "sueldo") {
      tipoCuentaSaldo.push(arrayCuentas[i]);
    } else {
      tipoCuentaCorriente.push(arrayCuentas[i]);
    }
  }
  return {
    tipoCuentaCorriente,
    tipoCuentaSaldo,
  };
};

/* let resultado = obtenerTipoDeCuenta(arrayCuentas);
console.log(resultado); */

//f. Obtener un nuevo array con las cuentas habilitadas.

let obtenerCuentasHabilitadas = (array) => {
  let cuentasHabilitadas = [];
  for (let i = 0; i < array.length; i++) {
    if (arrayCuentas[i].estaHabilitada === true) {
      cuentasHabilitadas.push(arrayCuentas[i]);
    }
  }
  return cuentasHabilitadas;
};

/* let cuentasHabilitadas = obtenerCuentasHabilitadas(arrayCuentas);
console.log(cuentasHabilitadas); */

//g. Obtener un nuevo array con las cuentas deshabilitadas.

let obtenerCuentasDeshabilitadas = (array) => {
  let cuentasDeshabilitadas = [];
  for (let i = 0; i < array.length; i++) {
    if (arrayCuentas[i].estaHabilitada !== true) {
      cuentasDeshabilitadas.push(arrayCuentas[i]);
    }
  }
  return cuentasDeshabilitadas;
};

/* let cuentasDeshabilitadas = obtenerCuentasDeshabilitadas(arrayCuentas);
console.log(cuentasDeshabilitadas); */

//h. Obtener la cuenta con el menor saldo.

/* let obtenerMenorSaldo = (array) => {
  let menorSaldo = arrayCuentas[0];
  for (let i = 0; i < array.length; i++) {
    if (arrayCuentas[i].saldo < menorSaldo) {
      ;
    }
  }
  return menorSaldo;
}; */
