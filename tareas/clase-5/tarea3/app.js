const $botonAgregarClases = document.querySelector('#agregar-clases');
const $botonBorrarClases = document.querySelector('#borrar-clases');
const $botonCalcularTiempo = document.querySelector('#calcular-tiempo-total');
const $botonReestablecerValores = document.querySelector('#reestablecer-valores');
const $formularioClases = document.querySelector('#formulario-clases');
const $formularioUsuario = document.querySelector('#formulario-usuario');

function crearFormulario(cantidadClases){
   for (let i = 1; i <= cantidadClases; i++) {
      $formularioUsuario.innerHTML += `<form id="clase-${i}">
      <h3 class="clase">Clase ${i}</h3>
      <label for="horas-clase${i}">horas</label>
      <input type="number" name="horas" id="horas-clase${i}">
      <label for="minutos-clase${i}">minutos</label>
      <input type="number" name="minutos" id="minutos-clase${i}">
      <label for="segundos-clase${i}">segundos</label>
      <input type="number" name="segundos" id="segundos-clase${i}">
      </form> <br/><br/>`;
      
   }
};

$botonBorrarClases.onclick = () => {
   $formularioUsuario.innerHTML = '';
};

$botonAgregarClases.onclick = (event) => {
   event.preventDefault();

   let $cantidadClases = document.querySelector('#cantidad-clases').value;

   if($cantidadClases > 0 & $cantidadClases <= 25){
      crearFormulario($cantidadClases);
      $formularioClases.reset();
   }else{
      alert(`Valor ingresado ${$cantidadClases}, no es correcto. Valores de 1 - 25.`);
      $cantidadClases = 0;
      $formularioClases.reset();
   }

   console.log($cantidadClases);

};