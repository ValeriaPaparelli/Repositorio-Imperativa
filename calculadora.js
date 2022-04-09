const prompt = require("prompt-sync")({ sigint: true });

let numero1 = prompt('Ingrese un número ')
let numero2 = prompt('Ingrese otro número ')
let numero3 = prompt('Ingrese un tercer número ')

let sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

let restar = (num1, num2) => {
    return num1 - num2;
}

let multiplicar = (num1, num2) => {
    return num1 * num2;
}

let dividir = (num1, num2) => {
    return num1 / num2;
}

let cuadradoDeUnNumero = (num) => {
    return multiplicar(num, num);
}

let promedioDeTresNumeros = (num1, num2, num3) => {
    let resultado = sumar(num1, num2)
        resultado = sumar(resultado, num3, )

        return dividir(resultado, 3)
}

let calcularPorcentaje = (num1, num2) => {
    
    let porcentaje = dividir(num2, 100)
    return multiplicar(num1, porcentaje)
}

console.log(calcularPorcentaje(numero1, numero2))


/* let numero1 = prompt('Ingrese un número ');
let numero2 = prompt('Ingrese otro número ');
let numero3 = prompt('Ingrese otro número ');

let sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

let restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

let multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

let dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

let cuadradoDeUnNumero = (num) => {
    return multiplicar(num, num);
}

let promedioDeTresNumeros = (num1, num2, num3) => {
    // dividir(sumar(sumar(num1, num2), num3), 3);
    let sumaParcial = sumar(num1, num2); 
    let sumaTotal = sumar(sumaParcial, num3); 
    let promedio = dividir(sumaTotal, 3); 
    return promedio; 
}
    
  
console.log(promedioDeTresNumeros(numero1, numero2, numero3)); */

/* 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
creadas de nuestra calculadora.
//El tanto por ciento (A %) de cualquier cantidad (C) se calcula multiplicando 
esa cantidad C por el número A del porcentaje, y dividiendo el resultado por 100. 
(A% de C = C*A/100)
 
4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
retornar el porcentaje del primero con respecto al segundo.
Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones
previamente creadas de nuestra calculadora.
Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
200. */