// TAREA: Reescribamos el if-else que teníamos y extendámolos, agregando:
//       'else if' el 'operador' es igual a '-' - llamar a la función 'restar'
//       'else if' el 'operador' es igual a '/' - llamar a la función 'dividir'.
//       'else if' el 'operador' es igual a '*' - llamar a la función 'multiplicar'.
//       else console.log - "Perdón, no conozco ese operador".

function sumar(numero1, numero2){
   return numero1 + numero2;
}

function restar(numero1, numero2){
   return numero1 - numero2;
}

function dividir(numero1, numero2){
   return numero1 / numero2;
};

function multiplicar(numero1, numero2){
   return numero1 * numero2;
};

const operador = prompt('Que operacion desea realizar, digite + , - , / , *');
const numero1 = Number(prompt('Digita el número 1: '));
const numero2 = Number(prompt('Digita el número 2: '));

let resultado;

if ( operador === '+' ){
   resultado = sumar(numero1, numero2);
} else 
   if ( operador === '-' ){
   resultado = restar(numero1, numero2);
}else if ( operador === '/' ){
   resultado = dividir(numero1, numero2);
}else if ( operador === '*' ){
   resultado = multiplicar(numero1, numero2);
}else{
   console.error(`Perdón, no conozco ese operador -> ${operador}`);
};

if(operador === '+' || operador === '-' || operador === '/' || operador === '*'){
   console.log(`Tu resultado es: ${numero1} ${operador} ${numero2} -> ${resultado}`)
}else{
   console.error('Algo salio mal, Recarga la página e inténtalo nuevamente');
};