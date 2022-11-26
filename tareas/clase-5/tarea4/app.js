/*
TAREA4: En otro archivo distinto, Crear una lista de <ol> y <li> que contengan sólo números. Convertir esos números a un array y:
1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..." */

const $botonAgregarNumero = document.querySelector('.agregar-numero');
const $listaNumeros = document.querySelector('#lista-numeros');
const $formulario = document.querySelector('#formulario');
const $limpiarListaDeNumeros = document.querySelector('#limpiar-lista');
let arrayNumerosUsuario = [];

$botonAgregarNumero.onclick = (event) => {
   event.preventDefault();

   const $numeroUsuario = Number(document.querySelector('#numero-usuario').value);
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

   $formulario.reset();
}

$limpiarListaDeNumeros.onclick = (event) => {
   event.preventDefault();
   $listaNumeros.innerHTML = '';
   console.log(arrayNumerosUsuario)
   arrayNumerosUsuario = [];
   console.log(arrayNumerosUsuario)
}


function sumarNumerosDelVector(vector){
   let suma = 0;
   for (let numero of vector) {
      suma += numero;
   }
   return suma;
}

function buscarNumeroMasChico(vector){
   let auxiliarMinimo = 9999;
   for (let numero of vector) {
      if(numero < auxiliarMinimo){
         auxiliarMinimo = numero;
      }
   }
   return auxiliarMinimo;
}

function buscarNumeroMasGrande(vector){
   let auxiliarMaximo = 0;
   for (let numero of vector) {
      if(numero > auxiliarMaximo){
         auxiliarMaximo = numero;
      }
   }
   return auxiliarMaximo;
}

const $botonPromedio = document.getElementById('calcular-promedio');
const $botonNumeroMasChico = document.getElementById('numero-mas-chico');
const $botonNumeroMasGrande = document.getElementById('numero-mas-grande');
const $botonNumeroRepetido = document.getElementById('numero-repetido');

$botonPromedio.onclick = () => {
   let sumaTotal = sumarNumerosDelVector(arrayNumerosUsuario);
   const promedio = sumaTotal / arrayNumerosUsuario.length;
   const $em1 = document.getElementById('em1');
   $em1.textContent = promedio;
   console.log('El promedio de los numeros es ' + promedio);
}

$botonNumeroMasChico.onclick = () => {
   let numeroMinimo = buscarNumeroMasChico(arrayNumerosUsuario);
   const $em2 = document.getElementById('em2');
   $em2.textContent = numeroMinimo;
   console.log('Numero mas chico es ' + numeroMinimo);
}

$botonNumeroMasGrande.onclick = () => {
   let numeroMaximo = buscarNumeroMasGrande(arrayNumerosUsuario);
   const $em3 = document.getElementById('em3');
   $em3.textContent = numeroMaximo;
   console.log('Numero mas grande es ' + numeroMaximo);
}


$botonNumeroRepetido.onclick = () => {
   arrayNumerosUsuario.sort((a,b) => a - b);
   const contadorNumerosRepetidos = [];
   const numerosUnicos = [];
   let contador = 1;

   for (let i = 0; i < arrayNumerosUsuario.length; i++) {
      if(arrayNumerosUsuario[i+1] === arrayNumerosUsuario[i]){
         contador ++;
      }else{
         numerosUnicos.push(arrayNumerosUsuario[i]);
         contadorNumerosRepetidos.push(contador);
         contador = 1;
      }
   }

   console.log(numerosUnicos)
   console.log(contadorNumerosRepetidos)

   const $em4 = document.getElementById('em4');

   let maximoRepetido = 1;
   let indiceMax = 0;
   for (let i=0; i < contadorNumerosRepetidos.length; i++) {
      if(contadorNumerosRepetidos[i] > maximoRepetido){
         maximoRepetido = contadorNumerosRepetidos[i];
         indiceMax = numerosUnicos[i];
      }
   }
   console.log(maximoRepetido)
   console.log(indiceMax)
   maximoRepetido > 1 ? $em4.textContent = indiceMax : $em4.textContent = 'Ningun numero se repitio mas de una vez.'
   



}



