let alumno = {
  nombre: "Valeria",
  legajo: 123456,
  notas: [9, 4, 6],
  calcularPromedio: function () {
    let suma = 0;
    let promedio = 0;

    for (let i = 0; i < this.notas.length; i++) {
      suma += this.notas[i];
    }

    promedio = suma / this.notas.length;
    return promedio;
  },
  obtenerEstado: function (notaAprobacion) {
    let promedio = this.calcularPromedio();
    if (promedio >= notaAprobacion) {
      return "Aprobado";
    } else {
      return "Desaprobado";
    }
  },
};

/* console.log(alumno.calcularPromedio()); */
console.log(alumno.obtenerEstado(4));
