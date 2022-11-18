//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function preguntarEdad(){
   return Number(prompt('¿Cual es tu edad?'))
}

function validarEdad(edadUsuario){
   if(edadUsuario > 0){
      return edadUsuario
   }else{
      alert('MAl')
   }
}

const edadUsuario = validarEdad(preguntarEdad());

