//1. Crear una función que imprima todos los dígitos decimales, del 0 al 9, usando un ciclo For.

//2. Crear una función que imprima los números entre el 5 y el 20, saltando de tres en tres.

let numerosTresEnTres = () => {
  for (let i = 6; i < 20; i += 3) {
    console.log(i);
  }
};

//numerosTresEnTres();

//3. Crear una función que imprima la sumatoria de todos los números entre el 0 y el 100.

let sumarNumeros = () => {
  let suma = 0;
  for (let i = 0; i <= 100; i++) {
    suma += i;
  }
  console.log(suma);
};

//sumarNumeros();

//4. Crear una función que reciba un string y luego imprimir la cantidad de
//vocales que se encuentran en dicha frase.

let imprimirVocales = (string) => {
  if (string.indexOf("a", "e", "i", "o", "u")) {
  }
};

imprimirVocales("Valeria");

//5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
//contenido sea igual a la original pero invertida.

//6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente forma :
//1
//22
//333
//4444
//55555
//666666
