// TAREA4: Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

//Tarea4
const NOTAS_ALUMNO = [10,4,2,5,8];

function calcularPromedioAlumno(arrayNotas){
   let sumaNotas = 0;
   const CANTIDAD_NOTAS = arrayNotas.length;

   for (let i = 0; i < CANTIDAD_NOTAS; i++) {
      const nota = arrayNotas[i];
      sumaNotas += nota;
   }
   return sumaNotas / CANTIDAD_NOTAS;
};

const promedioNotasAlumno = calcularPromedioAlumno(NOTAS_ALUMNO);
console.log(`El promedio de tus notas es de ${promedioNotasAlumno}`);

