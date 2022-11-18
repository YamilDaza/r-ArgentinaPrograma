// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el operador es '+', vamos a usar la función para sumar.
//      Si no, vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si tenemos un operador igual a '+', llamamos la función 'sumar' con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//


function sumar(numero1, numero2){
   return numero1 + numero2;
}

function restar(numero1, numero2){
   return numero1 - numero2;
}

const operador = prompt('Que operacion desea realizar, sumar o restar, digite + o - ');
const numero1 = Number(prompt('Digita el número 1: '));
const numero2 = Number(prompt('Digita el número 2: '));

let resultado;

if(operador === '+'){
   resultado = sumar(numero1, numero2);
} else {
   resultado = restar(numero1, numero2);
};

console.log(`Tu resultado es: ${numero1} ${operador} ${numero2} -> ${resultado}`)


// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.
