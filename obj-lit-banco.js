let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    for (let i = 0; this.clientes.length; i++) {
      //clientes porque guardé mi array (arrayCuentas) ahí. Tengo que hacer referencia a la propiedad que guardé en clientes
      if (titular === this.clientes[i].titularCuenta) {
        return this.clientes[i];
      }
    }
    return null;
  },
  deposito: function (titular, dinero) {
    let titularCuenta = this.consultarCliente(titular);

    if (!titularCuenta) {
      console.log("Ingrese los datos correctos");
    } else {
      titularCuenta.saldoEnPesos += dinero;
      console.log(
        `Depósito realizado, su nuevo saldo es: ${titularCuenta.saldoEnPesos}`
      );
    }
  },
  extraccion: function (titular, dinero) {
    let titularCuenta = this.consultarCliente(titular);
    if (!titularCuenta) {
      console.log("Ingrese los datos correctos");
    }

    if (titularCuenta.saldoEnPesos - dinero < 0) {
      console.log("Su saldo es insuficiente");
    } else {
      titularCuenta.saldoEnPesos -= dinero;
      console.log(
        `Extracción realizada correctamente, su nuevo saldo es: ${titularCuenta.saldoEnPesos}`
      );
    }
  },
};

console.log(banco.consultarCliente("Jacki Shurmer"));
banco.deposito("Jacki Shurmer", 1000);
banco.extraccion("Jacki Shurmer", 14000);
