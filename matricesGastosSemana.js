// MATRIZ DE 4 X 7

/* let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950],
  ]; */

// CALCULAR GASTO TOTAL DE LA TERCER SEMANA
//Para sacar el gasto de una semana tengo que recoorer una fila

/* let totalSemanaTres = 0;

for (let i = 0; i < gastos[2].length; i++) {
  //Si recorro una fila especifica pongo la fila que quiero recorrer (gastos[2].length)
  totalSemanaTres += gastos[2][i]; //Lo fijo [2] es la fila que quiero que recorra, lo variable [i] son las columnas.
} */

//Esto lo hacemos para recorrer una fila-Una fila estática y una columna dinámica

//console.log(totalSemanaTres);

// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO EN LOS DIAS JUEVES ( JUEVES = POSICION 3)
// ¿COMO LO HARIAS?

/* let totalJueves = 0;

for (let i = 0; i < gastos.length; i++) {
  //Siempre la cantidad de columnas que tenga va a ser el gasto.length
  totalJueves += gastos[i][3];
}
 */
//console.log(totalJueves);

// CALCULAR EL TOTAL GASTADO DEL MES

/* let gastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100],
  [1750, 1890, 1900, 1300, 898, 1750, 2800],
  [1700, 1150, 1690, 1900, 1770, 4500, 2560],
  [800, 1250, 1430, 2100, 1980, 1270, 950],
]; */

/* let sumaGastoMensual = 0;

for (let i = 0; i < gastos.length; i++) {
  for (let j = 0; j < gastos[i].length; j++) {
    //este for me recorre los días. Recorro una semana
    //Si le pongo .length me reccore 4 porque el .length de gastos es 4
    //Este for se ejecuta 7 veces por cada semana que recorra
    sumaGastoMensual += gastos[i][j];
  }
} */

//console.log(sumaGastoMensual);

// CALCULAR EL GASTO TOTAL DE CADA SEMANA Y MOSTRARLO EN CONSOLA
// CREAR UN ARRAY CON EL TOTAL DE CADA SEMANA
// REPORTAR CUAL FUE LA SEMANA EN QUE MAS SE GASTO

let gastos = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100],
  [1750, 1890, 1900, 1300, 898, 1750, 2800],
  [1700, 1150, 1690, 1900, 1770, 4500, 2560],
  [800, 1250, 1430, 2100, 1980, 1270, 950],
];

let arrGastosSemana = [];
let gastoSemanal = 0; //Recorro una fila y eso me dà el gasto semanal, eso me dà un número
//que tengo que pushear a arrGastosSemana y después paso a otra fila
//Antes de pasar a otra fila tengo que resetear la variable gastoSemanal

for (let i = 0; i < gastos.length; i++) {
  for (j = 0; j < gastos[i].length; j++) {
    gastoSemanal += gastos[i][j];
  }
  arrGastosSemana.push(gastoSemanal); //Antes de pasar a la siguiente semana lo pusheo
  gastoSemanal = 0; // y lo reseteo
  //Pao a la siguiente semana y hago lo mismo
  //Si antes no hago esto me suma el total
}

//console.log(arrGastosSemana);

let encontrarMayor = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

let resultado = encontrarMayor(
  encontrarMayor(arrGastosSemana[0], arrGastosSemana[1]),
  encontrarMayor(arrGastosSemana[2], arrGastosSemana[3])
);
console.log(resultado);

let posicionSemana = arrGastosSemana.indexOf(resultado);
console.log(`La semana que más se gastó fue la número ${posicionSemana + 1}`);

//let algo = ['hola', 'chau', 'bye']
//algo.indexOf(bye)-Llamo al arreglo, le pregunto por el índice de algún elemento especifico,
//por ejemplo de bye. Esto entra al arreglo y va a buscar la posición dónde se encuentra bye
//Me devuelve la posisción
