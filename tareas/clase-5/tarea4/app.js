/*
TAREA4: En otro archivo distinto, Crear una lista de <ol> y <li> que contengan sólo números. Convertir esos números a un array y:
1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..." */

const $botonAgregarNumero = document.querySelector('.agregar-numero');
const $listaNumeros = document.querySelector('#lista-numeros');
const $formulario = document.querySelector('#formulario');
const arrayNumerosUsuario = [];

$botonAgregarNumero.onclick = (event) => {
   event.preventDefault();

   const $numeroUsuario = document.querySelector('#numero-usuario').value;
   const mensajeError = document.querySelector(".mensaje");

   if(!($numeroUsuario === '')){

      const itemNumero = document.createElement('li');
      itemNumero.textContent = $numeroUsuario;
      $listaNumeros.appendChild(itemNumero);
      
      arrayNumerosUsuario.push($numeroUsuario);

      mensajeError.classList.remove('mensaje-visible');
   }
   else{
      mensajeError.classList.add('mensaje-visible');
   }
   console.log(arrayNumerosUsuario);

   $formulario.reset();
}
console.log(arrayNumerosUsuario);


