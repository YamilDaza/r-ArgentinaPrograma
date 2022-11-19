// TAREA3: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

//Tarea3:
const finDelCiclo = 50;
const MULTIPLO_TRES = 3;
const MULTIPLO_CINCO = 5;

for (let i = 1; i <= finDelCiclo; i++) {
   let mensaje = '';

   if(i % MULTIPLO_TRES === 0){
      mensaje += 'Fizz';
   }
   if(i % MULTIPLO_CINCO === 0){
      mensaje += 'Buzz'
   }

   console.log(mensaje || i);
}

