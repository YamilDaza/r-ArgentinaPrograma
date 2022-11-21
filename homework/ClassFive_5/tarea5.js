// Practicando con HTML - CSS - JavaScript -> Tarea ingresar al bar.

const $formulario = document.querySelector('#formulario');
const $botonIngreso = document.querySelector('#botonEnviar');
const $mostrarResultado = document.querySelector('#resultado');

$botonIngreso.onclick = (event) => {
   event.preventDefault();

   const $nombreYApellidoUsuario = document.querySelector('#nombreYApellido').value;
   const $edadUsuario = document.querySelector('#edad').value;
   const $usuarioTieneDNI = document.querySelector('input[name=dni]:checked').value;

   const RESPUESTA_SI = 'Si';
   const RESPUESTA_NO = 'No';
   const ANIO_MAYOR_EDAD = 18;
   let mensaje = '';
   
   if($usuarioTieneDNI === RESPUESTA_SI){
      if($edadUsuario >= ANIO_MAYOR_EDAD){
         mensaje = `Bienvenido ${$nombreYApellidoUsuario}, puedes ingresar al bar, que lo disfrutes.`;
         $mostrarResultado.style.display = 'block';
         $mostrarResultado.classList.add('resultado');
         $mostrarResultado.classList.remove('resultado2');
      }else{
         mensaje = `Disculpa ${$nombreYApellidoUsuario}, no puedes ingresar, eres menor de edad.`;
         $mostrarResultado.style.display = 'block';
         $mostrarResultado.classList.remove('resultado');
         $mostrarResultado.classList.add('resultado2');
      }
   }else if($usuarioTieneDNI === RESPUESTA_NO){
      mensaje = `Disculpa ${$nombreYApellidoUsuario}, no se puede ingresar sin identificación.`;
      $mostrarResultado.style.display = 'block';
      $mostrarResultado.classList.add('resultado2');
      $mostrarResultado.classList.remove('resultado');
   }
   
   $mostrarResultado.textContent = mensaje;

   setTimeout(()=> {
      $mostrarResultado.style.display = 'none';
   },5000);
   
   $formulario.reset();
};



