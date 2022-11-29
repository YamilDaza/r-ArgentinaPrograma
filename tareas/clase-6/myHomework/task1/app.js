/*
TAREA1: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonSiguientPaso = document.querySelector('#siguiente-paso');
const $mostrarIntegrantes = document.querySelector('#integrantes');
const $formulario = document.querySelector('.formulario');
const $mensajeError = document.querySelector('#mensaje-error');

function mostrarMensajeError(){
   $mensajeError.style.display = 'block';
}

function quitarMensajeError(){
   $mensajeError.style.display = 'none';
}

function unIntegrante(index){
   const div = document.createElement('div');
   div.className = 'integrante';
   const label = document.createElement('label');
   const input = document.createElement('input');
   input.className = 'edad';

   label.textContent = `Integrante nro ${index} - Edad:`
   input.type = 'number';

   div.append(label,input)
   $mostrarIntegrantes.appendChild(div);
}

function crearIntegrantes(cantidadIntegrantes){
   if(cantidadIntegrantes > 0){
      document.querySelector('#calcular').className = '';
      quitarMensajeError();
      for (let i = 0; i < cantidadIntegrantes; i++) {
         unIntegrante(i+1);
      }
   }else{
      mostrarMensajeError();
   }
}

$botonSiguientPaso.onclick = (event) => {
   const $cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);
   
   borrarIntegrantes();
   crearIntegrantes($cantidadIntegrantes);
   
   event.preventDefault();
   $formulario.reset();
}

/* ================================================================= */

const $botonCalcular = document.querySelector('#calcular');

function mostrarResultados(){
   document.querySelector('#resultado').className = '';
}

function obtenerEdades(){
   const numeros = [];
   const integrantes = document.querySelectorAll('.edad');
   for (let i of integrantes) {
      let edad = Number(i.value);
      numeros.push(edad);
   }

return numeros;
}

function calcularMayorEdad(edades){
   let maximo = edades[0];
   for (let i = 1; i < edades.length; i++) {
      if(edades[i] > maximo){
         maximo = edades[i];
      }
   }
   return maximo;
}
function calcularMenorEdad(edades){
   let minimo = edades[0];
   for (let i = 1; i < edades.length; i++) {
      if(edades[i] < minimo){
         minimo = edades[i];
      }
   }
   return minimo;
}
function calcularPromedioEdad(edades){
   let sumaEdades = 0
   for (let i = 0; i < edades.length; i++) {
      sumaEdades += edades[i];
   }
   return sumaEdades / edades.length;
}

function asignarValores(){
   const edades = obtenerEdades();
   console.log(edades);
   const mayorEdad = calcularMayorEdad(edades);
   const menorEdad = calcularMenorEdad(edades);
   const promedioEdad = calcularPromedioEdad(edades);

   document.querySelector('#mayor-edad').textContent = mayorEdad;
   document.querySelector('#menor-edad').textContent = menorEdad;
   document.querySelector('#promedio-edad').textContent = promedioEdad;

}

$botonCalcular.onclick = (event) => {
   console.log('Diste click al boton calcular');
   asignarValores();
   mostrarResultados();
   event.preventDefault();
}

/* ===================================================================== */

function borrarIntegrantes(){
   const integrantes = document.querySelectorAll('.integrante');
   console.log(integrantes);
   for (let i of integrantes) {
      i.remove();
   }
}

function empezarDeNuevo(){
   borrarIntegrantes();
   document.querySelector('#resultado').className = 'ocultar';
   document.querySelector('#calcular').className = 'ocultar';
}

const $botonEmpezarDeNuevo = document.querySelector('#resetear');
$botonEmpezarDeNuevo.onclick = (event) => {
   console.log('Me diste click - empezar de nuevo');
   empezarDeNuevo();
   event.preventDefault();
}






