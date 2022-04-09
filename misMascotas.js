let misMascotas = [
    {
        nombre: 'Misha',
        raza: 'persa',
        edad: 11,
        sonido: 'miau miau',
        retornarSonido: function(){
           return this.sonido
        }
    },
    {
        nombre: 'Coqui',
        raza: 'ovejero',
        edad: 7,
        sonido: 'guau guau',
        retornarSonido: function(){
           return this.sonido
        }
    },
]

//console.log(misMascotas[0, 1].retornarSonido());

for(let i = 0; i < misMascotas.length; i++){
    console.log(misMascotas[i].retornarSonido());
}

let aumentarEdad = () => {
    for(let i = 0; i < misMascotas.length; i++){
        misMascotas[i].edad = misMascotas[i].edad + 1;
    }
}

/* console.log(misMascotas);
aumentarEdad();
console.log(misMascotas); */

console.log(    )

let aumentarEdad2 = () => {
    for(let i = 0; i < misMascotas.length; i++){
       if(misMascotas[i].edad < 6){
            misMascotas[i].edad += 1;
       }else if(misMascotas[i].edad > 6 && misMascotas[i].edad < 10){
            misMascotas[i].edad += 2;
       }else if (misMascotas[i].edad > 10){
            misMascotas[i].edad += misMascotas[i].edad / 2;
       }
    }
}

/* aumentarEdad2();
console.log(misMascotas); */

let creadorId = () => {
    for(let i = 0; i < misMascotas.length; i++){
        misMascotas[i].id = i + 1;
    }
}

/* console.log(misMascotas)
creadorId()
console.log(misMascotas) */

console.log(misMascotas)

for(let i = 0; i < misMascotas.length; i++){

    delete misMascotas[i].raza

}

console.log(misMascotas)



