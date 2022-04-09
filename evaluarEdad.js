const prompt = require("prompt-sync")({ sigint: true });

let edad = prompt("Ingrese su edad ");

const evaluarEdad = (edad) => {
  if (edad < 0) {
    return "Error, edad inválida. Por favor ingrese un número válido";
  } else if (edad === 21) {
    return "Bienvenido y felicitaciones por haber llegado a la mayoría de edad.";
  } else if (edad % 2 == 1) {
    console.log("¿Sabías que tu edad es impar?");
  } else {
    return "Puede pasar al bar y tomar alcohol.";
  }
};

console.log(evaluarEdad(edad));
