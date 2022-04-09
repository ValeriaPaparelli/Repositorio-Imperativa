/***********Colecciones de películas (y más…) */

let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

let convertirMayusculas = (array) => {
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase(); //sobrescribir
    }
    console.log(array)
}

convertirMayusculas(peliculas);

let peliculas2 = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

let agregarArray = (array1, array2) => {

    for(let i = 0; i < array2.length; i++){
        array1.push(array2[i]);
    }

    return  convertirMayusculas(array1);
}

console.log(agregarArray(peliculas, peliculas2));

let eliminarVideojuego = peliculas.pop();
console.log(eliminarVideojuego);

console.log(peliculas);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

let compararCalificaciones = (array1, array2, peliculas) => {
    for(let i = 0; i < peliculas.length; i++){
        if(array1[i] === array2[i]){
            console.log(`Las calificaciones para ${peliculas[i]} son iguales: ${array1[i]}`)
        } else {
            console.log(`Las calificaciones para ${peliculas[i]} son diferentes: ${array1[i]} y ${array2[i]}`)
        }
    }
}

compararCalificaciones(asiaScores, euroScores, peliculas);