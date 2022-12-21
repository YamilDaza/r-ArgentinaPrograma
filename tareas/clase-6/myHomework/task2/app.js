/*
TAREA2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $formulario = document.querySelector('#formulario');
const $botonAgregar = document.querySelector('#agregar');
const $botonReset = document.querySelector('#reset');
const $botonQuitar = document.querySelector('#quitar');
const $resultado = document.querySelector('#resultado');
const integrantes = []; 

$botonAgregar.onclick = (e) => {
   e.preventDefault();

   const div = document.createElement('div');
   let label = document.createElement('label');
   label.innerHTML = `Sueldo del integrante ${integrantes.length+1}`;
   let input = document.createElement('input');
   input.type = 'Number';
   input.placeholder = '$00000000';
   input.required;

   div.append(label,input);
   integrantes.push(div);
   $resultado.append(div);

   console.log(integrantes)
}

$botonQuitar.onclick = (e) => {
   let tamaño = integrantes.length-1;
   integrantes[tamaño].remove();
   e.preventDefault();
   console.log(integrantes)
   console.log('click');
}
