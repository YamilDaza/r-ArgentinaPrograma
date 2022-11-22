const $formulario = document.querySelector('#formulario');
const $botonMostrarDatos = document.querySelector('#mostrar-datos');
const $listaDePersonas = document.querySelector('#contenedor-lista');

$botonMostrarDatos.onclick = (event) => {
   event.preventDefault();

   let li = document.createElement('li');

   const $primerNombreUsuario = document.querySelector('#primer-nombre').value;
   const $segundoNombreUsuario = document.querySelector('#segundo-nombre').value;
   const $apellidoUsuario = document.querySelector('#apellido-usuario').value;
   const $edadUsuario = document.querySelector('#edad-usuario').value;

   li.textContent = `Bienvenid@ ${$primerNombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario} ${$edadUsuario}`;
   $listaDePersonas.appendChild(li);

   $formulario.reset();
};



