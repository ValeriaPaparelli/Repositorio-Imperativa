const prompt = require("prompt-sync")({ sigint: true });

let sandwicheBase = prompt(
  "Seleccione el tipo de sandwiche: pollo - Carne - Veggie: "
);
let tipoDePan = prompt(
  "Seleccione el tipo de pan: blanco (c/orégano y parmesano) - negro (c/avena) - Sin gluten: "
);
let adicionalQueso = prompt(
  "¿Con adicional de queso? (Ingrese x por si y enter por no)"
);
let adicionalTomate = prompt(
  "¿Con adicional de tomate? (Ingrese x por si y enter por no)"
);
let adicionalLechuga = prompt(
  "¿Con adicional de lechuga? (Ingrese x por si y enter por no)"
);
let adicionalCebolla = prompt(
  "¿Con adicional de cebolla? (Ingrese x por si y enter por no)"
);
let adicionalMayonesa = prompt(
  "¿Con adicional de mayonesa? (Ingrese x por si y enter por no)"
);
let adicionalMostaza = prompt(
  "¿Con adicional de mostaza? (Ingrese x por si y enter por no)"
);

const totalAPagar = (
  sandwicheBase,
  tipoDePan,
  adicionalQueso,
  adicionalTomate,
  adicionalLechuga,
  adicionalCebolla,
  adicionalMayonesa,
  adicionalMostaza
) => {
  let valor = 0;

  let sandwichePollo = 150;
  let sandwicheCarne = 200;
  let sandwicheVeggie = 100;
  let panBlanco = 50;
  let panNegro = 60;
  let panSinGluten = 75;

  if (sandwicheBase === "pollo") {
    total = sandwichePollo;
  } else if (sandwicheBase === "carne") {
    total = sandwicheCarne;
  } else if (sandwicheBase === "veggie") {
    total = sandwicheVeggie;
  } else {
    return "Ingrese una opción correcta";
  }

  if (tipoDePan === "blanco") {
    total += panBlanco;
  } else if (tipoDePan === "negro") {
    total += panNegro;
  } else if (tipoDePan === "sin gluten") {
    total += panSinGluten;
  } else {
    return total;
  }

  if (adicionalQueso) {
    total += 20;
  }

  if (adicionalTomate) {
    total += 15;
  }

  if (adicionalLechuga) {
    total += 10;
  }

  if (adicionalCebolla) {
    total += 15;
  }

  if (adicionalMayonesa) {
    total += 5;
  }

  if (adicionalMostaza) {
    total += 5;
  }

  return `El total es de $${total}`;
};

console.log(
  totalAPagar(
    sandwicheBase,
    tipoDePan,
    adicionalQueso,
    adicionalTomate,
    adicionalLechuga,
    adicionalCebolla,
    adicionalMayonesa,
    adicionalMostaza
  )
);
