// HOMEWORK:
/* 
1) crear una función que tome como parámetro el año actual y el año de nacimiento
y calcule la edad del usuario (más o menos).
Preguntarle estos datos al usuario y guardarlos en 2 variables.
Ejecutar la función con estos datos. Impriman el resultado en la consola
*/


// Version One
/* function calculateUserAge(currentYear, birthYear){
   return currentYear - birthYear;
};

const fullName = prompt('Welcome, What is your full name?')
let currentYear = Number(prompt('What year are we in?'));
let birthYear = Number(prompt('What year were you born?'));

console.log('Hello, ' + fullName + ', your age is ' + calculateUserAge(currentYear,birthYear) + ' years.') */

//Version Two with data validation
function calculateUserAge(currentYear, birthYear){
   return currentYear - birthYear;
};

function validateYear(message){
   let year = Number(prompt(message));
   if(year > 0){
      return year
   }else{
      alert('You have to enter a value greater than 0');
      validateYear(message);
   }
}

const fullName = prompt('Welcome, What is your full name?')
let currentYear =  validateYear('What year are we in?');
let birthYear = validateYear('What year were you born?');

console.log('Hello, ' + fullName + ', your age is ' + calculateUserAge(currentYear,birthYear) + ' years.');