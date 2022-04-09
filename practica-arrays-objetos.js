// PRACTICAMOS FOR, ARREGLOS, OBJETOS y CONDICIONALES

// 1) DADO EL SIGUIENTE ARREGLO....

// DETERMINAR LA SUMA TOTAL DE ELLOS , SOLAMENTE SUMANDO LOS NUMEROS IMPARES
// Y GUARDARDO EN UNA VARIABLE QUE SE LLAME RESULTADO. PISTA :
// ( RECORDA QUE PODEMOS GUARDAR LA  EJECUCION DE UNA FUNCION
// Y LO QUE RETORNE SERA ASIGNADO A LA VARIABLE)

let numeros = [5, 9, 12, 25, 6, 7, 18, 1, 24, 4];

let sumarImpares = (array) => {
  let resultado = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      resultado += array[i];
    }
  }

  return resultado;
};

let resultado = sumarImpares(numeros);
console.log(resultado);

// 2) DADO EL SIGUEINTE ARREGLO...
// CREAR UNO NUEVO EL CUAL CONTENDRA LOS NUMERO DE ESTE ARREGLO
// PERO SOLO LOS NUMERO QUE SEAN MAYORES QUE 15 Y MENORES o IGUALES QUE 30

const arrayNumeros = [7, 16, 32, 27, 45, 27, 51, 12, 19, 21];

let crearArreglo = (array) => {
  let nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 15 && array[i] <= 30) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
};

/* console.log(crearArreglo(arrayNumeros));  */

// 3) DADO EL SIGUIENTE ARREGLO...
// crear una funcion para que le agregue un metodo a cada objeto
// lo que debe hacer el metodo es retornar un string con el nombre y su profesion
// por ejemplo , " mi nombre es juancito y soy programador"
// LUEGO NOS DIMOS CUENTA QUE NO LE AGREGAMOS LA EDAD A NINGUNA PERSONA
// DEMOS CREAR OTRA FUNCION QUE LE AGREGUE ESA PROPIEDAD A TODOS LOS OBJETOS
// DATO DE COLOR ( LA EDAD DE LAS PERSONAS ES UN AÑO MAS CADA UNA Y LA MAS JOVEN TIENE 41 )

let profesionales = [
  {
    nombre: "juancito",
    profesion: "programador",
  },
  {
    nombre: "maria",
    profesion: "comerciante",
  },
  {
    nombre: "pepito",
    profesion: "docente",
  },
];

/* console.log(profesionales[2].retornarString()); */

/* for(let i = 0; i < profesionales.length; i++){
    console.log(profesionales[i].retornarString());
} */

let agregarMetodo = () => {
  for (let i = 0; i < profesionales.length; i++) {
    profesionales[i].retornarString = function () {
      return `Me llamo ${profesionales[i].nombre} y soy ${profesionales[i].profesion}`;
    };
  }
};

let agregarEdad = () => {
  for (let i = 0; i < profesionales.length; i++) {
    profesionales[i].edad = i + 41;
  }
};

agregarMetodo();

profesionales[0].retornarString();

/* let agregarFuncion = ()=>{
    for (let i = 0; i < profesionales.length; i++) {
        profesionales[i].descripcion = function (){
            return `mi nombre es ${this.nombre} y soy ${this.profesion}`
        }
        
        
    }

}

agregarEdad()
agregarFuncion()

for (let i = 0; i < profesionales.length; i++) {
    console.log(profesionales[i].descripcion())  
}

let descripcionDescripcion = profesionales[] */
