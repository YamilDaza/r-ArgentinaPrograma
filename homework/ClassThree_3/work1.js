// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

// Tarea 1:
const nombreUsuario = prompt('Bienvenido, ¿Cuál es tu nombre?').toUpperCase();
const miNombre = 'Yamil';
const miAmigo = 'Ariel';

let mensajeAImprimir;

if(nombreUsuario === miNombre.toUpperCase()){
   mensajeAImprimir = `Hola, Tocayo! Yo también me llamo ${nombreUsuario}`;
}else if(nombreUsuario.toUpperCase() === miAmigo.toUpperCase()){
   mensajeAImprimir = `Hola ${nombreUsuario}, te llamas igual que a mi compañero de facultad`;
}else{
   mensajeAImprimir = `Hola ${nombreUsuario}`;
};

console.log(mensajeAImprimir);








