//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


//TAREA 3 - con modificaciones
function calcularAniosHastaMayoriaEdad(edadUsuario, aniosMayorDeEdad){
   return aniosMayorDeEdad - edadUsuario;
}

const usuarioTieneDocumento = prompt('Buenas noches, tiene documento?, conteste "si" o "no"').toUpperCase();

const RESPUESTA_SI = 'SI';
const RESPUESTA_NO = 'NO';
const ANIOS_MAYOR_EDAD = 18;
let mensaje;

if(usuarioTieneDocumento === RESPUESTA_SI){
   const edadUsuario = Number(prompt('Ok, Cual es tu edad?'));
   
   if(edadUsuario >= ANIOS_MAYOR_EDAD){
      mensaje = 'Bienvenido, Puedes entrar al bar, que disfrutes!';
   } else if(edadUsuario < ANIOS_MAYOR_EDAD){
      mensaje = `No puedes pasar, tienes ${edadUsuario} años, eres menor de edad. Vuelve dentro de ${calcularAniosHastaMayoriaEdad(edadUsuario, ANIOS_MAYOR_EDAD)} años`;
   } else{
      mensaje = 'No entiendo tu respuesta';
   }

} else if(usuarioTieneDocumento === RESPUESTA_NO){
   mensaje = 'No puedes entrar sin tu identificación';
} else{
   mensaje = 'No entiendo tu respuesta, vuelve otro dia';
}

console.log(mensaje);


