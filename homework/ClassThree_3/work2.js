//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 2:

function validarEdad(edadUsuario){
   return (edadUsuario > 0);
};

const edadUsuario = Number(prompt('Bienvenido, Cuál es su edad?'));
const miEdad = 24;
let mensaje;


if(validarEdad(edadUsuario)){
   if(edadUsuario === miEdad){
      mensaje = `Que casualidad, tenemos la misma edad ${edadUsuario} años!.`;
   }else if(edadUsuario > miEdad){
      mensaje = `Eres mi mayor, tienes mas de ${miEdad} años.`;
   }else{
      mensaje = `Soy tu mayor, tienes menos de ${miEdad} años.`;
   }
}else{
   mensaje = 'Porfavor ingrese un dato valido(Solo numeros, numeros mayores que 0). Recargue la pagina y vuelva a intentarlo';
}

console.log(mensaje);

