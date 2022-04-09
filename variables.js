const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let nacimiento = prompt('Ingrese su año de nacimiento');
let edad = 2022 - nacimiento;

console.log(`${nombre} ${apellido} usted tiene ${edad} años`);