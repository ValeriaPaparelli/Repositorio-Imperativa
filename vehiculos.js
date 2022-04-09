const prompt = require("prompt-sync")({ sigint: true });

let vehiculo = prompt("Ingrese su tipo de vehículo ");
let litrosConsumidos = prompt("Ingrese la cantidad de litros ");

let totalAPagar = (vehiculo, litrosConsumidos) => {
  // valores de la funciòn
  let litroCoche = 86;
  let litroMoto = 70;
  let litroAutobus = 55;
  // valor a retornar
  let total = 0;

  // calculo del valor a retornar
  if (vehiculo === "coche") {
    total = litroCoche * litrosConsumidos;
  } else if (vehiculo === "moto") {
    total = litroMoto * litrosConsumidos;
  } else if (vehiculo === "autobus") {
    total = litroAutobus * litrosConsumidos;
  } else {
    return "Ingrese un tipo de vehículo válido";
  }

  if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
    total += 50;
  } else if (litrosConsumidos >= 25) {
    total += 25;
  } else {
    return "Ingrese los litros consumidos";
  }

  return `El total a pagar es de: $${total}`;
};

console.log(totalAPagar(vehiculo, litrosConsumidos));
