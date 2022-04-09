//Escribir un programa que muestre en pantalla los números del 1 al 100,
//sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
//“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
//por la palabra “fizzbuzz”. Visiten este sandbox
//https://codesandbox.io/s/fizzbuzz-3e9uc?file=/src/index.js para realizar
//el ejercicio ahí. Recuerden desplegar la consola para ver sus resultados, y
//utilicen la función console.log para mostrar datos en la misma.

let fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`Fizz`);
    } else if (i % 5 === 0) {
      console.log(`Buzz`);
    } else {
      console.log(`${i}`);
    }
  }
};

/* console.log(fizzbuzz()); */

/* let escribirFizzBuzz =function(){
  let x=[];
  for(let i=1; i<=100; i++){
      if( i%3 == 0 ){
         x.push("Fizz") 
      }else if( i%5 == 0 ){
          x.push("Buzz")
  
      }else if( i%5 == 0 && i%3 == 0  ){
          x.push("FizzBuzz")
  
      }else{
          x.push(i)
      }
  }
  return x
  }
  
  escribirFizzBuzz()
  
  console.log(escribirFizzBuzz())
   */
