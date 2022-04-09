let alicia = [10, 80, 75]
let bob = [90, 20, 25]

function encontrarGanador(a, b){
    let puntosA = 0;
    let puntosB = 0;
    for (let i=0; i < a.length; i++){
        if (a[i]>b[i]){
            puntosA = puntosA + 1;
        }else if(a[i]<b[i]){
            puntosB = puntosB + 1;
        }
    }
    if (puntosA>puntosB){
        return `El ganador es Alicia`
    }else if(puntosA<puntosB){
        return `El ganador es Bob`
    }
}

console.log(encontrarGanador(alicia,bob))
