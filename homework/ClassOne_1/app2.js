/* HOMEWORK
2) Preguntar el salario anual y calcular el salario mensual
Preguntar el salario mensual y calcular el anual
diario... semanal, por hora. etc. 
*/

function calculateAnnualSalary(monthlySalary){
   const monthsInAYear = 12;
   return monthlySalary * monthsInAYear;
};

function calculateMonthlySalary(annualSalary){
   const monthsInAYear = 12;
   return annualSalary / monthsInAYear;
};

function calculateWeeklySalary(annualSalary){
   const weeksInAYear = 52;
   return annualSalary / weeksInAYear; 
};

function calculateDailySalary(annualSalary){
   const daysInAYear = 352;
   return annualSalary / daysInAYear;
};

function calculateHourlyWage(dailySalary, hourlyWage){
   return dailySalary / hourlyWage;
}


let userAnnualSalary = Number(prompt('Welcome, what is your annual salary?'));
let userMonthlySalary = Number(prompt('What is your monthly salary?'));
let userWorkingHours = Number(prompt('How many hours do you work a day'))

console.log('Your annual salary is $' + calculateAnnualSalary(userMonthlySalary));
console.log('Your monthly salary is $' + calculateMonthlySalary(userAnnualSalary));
console.log('Your weeks salary is $' + calculateWeeklySalary(userAnnualSalary));

const dailySalary = calculateDailySalary(userAnnualSalary);

console.log('Your daily salary is $' + dailySalary);
console.log('Your hourly wage is $' + calculateHourlyWage(dailySalary, userWorkingHours));


