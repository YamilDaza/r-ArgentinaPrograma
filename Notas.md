# Curso JavaScript - r/ArgentinaPrograma 
   
   *Consejos*
   - Es importante definir bien las variables y las funciones de nuestro programa, el codigo se debe explicar solo.
   - Uso de git y github, nuestra biblioteca virtual para ver los cambios que vamos haciendo en nuestro codigo. Tambien el uso de buenos commits en importante.
   - Veremos sobre testing, poder ver nuestro codigo en varias alternativas o posibles casos de error para saber que realmente esta bien ante cualquier situación.
   - SUGERENCIA: Adquirir libro 'Clean Code' -> Escribir codigo limpio.
   
   *3 skills fundamentales*
   1) Aprender a leer e interpretar errores
   2) Aprender a leer documentación
   3) Aprender a googlear

   *Introduccion a la programación*
   - La programación en su definicion mas simple es decirle a una maquina que tiene que hacer. Y su aplicacion mas normal es para resolver un problema 
   **-- La caracteristica mas importante de un programador es entender cual es el problema, pensa en una solucion y luego recien escribir codigo que exprese esa solucion de una manera que la maquina lo entienda(lenguaje) --**
   - Una técnica que podemos usar es el seudocodigo, es decir, expresar la solucion de una manera coloquial.

   *Como vamos a trabajar*
   - Unirse al grupo de slack

   *Single Responsibility Principle. Princio de responsabilidad unica. Googlear*
   - Entender y crear funciones de responsabilidad unica, tanto su codigo como su nombre tiene que ser equivalentes, no mas ni menos.

   *Constantes*
   - Asignar variables con la palabra reservada const, si estoy seguro que el valor de dicho valor No cambio DURANTE LA EJECUCIÓN

   *Hoisting*
   - JavaScript revisa todo nuestro archivo/codigo, y todas nuestras variables declaradas con var y nuestras funciones declaradas con function, las sube arriba como primer linea de codigo.

   *SCOPE*
   - Es la limitación o alcanze de una variable en javascript, puede ser alcanze global o de bloque.

   *Expresiones de function(funciones expresaas)*
   - Es cuando declaramos una variable y le asignamos una funcion anonima, y dicha variable puede ejecutar la funcion que tiene almacenada.
   - let variableX = function(){hacer algo...}
   - typeof variableX -> function
   - variableX();

   *Pasar la refencia de la funcion*
   -Es cuando creamos una funcion que recibe otra funcion y argumentos sea 1 o mas, al momento de llamar a la funcion padre va a esperar recibir una funcion y al momento de hacerlo TENEMOS QUE HACERLO SIN PARENTESIS. Si lo pasamos con parentesis se estaria ejecutando dicha funcion en ese momento y despues el resultado esperado sera otro. Las funciones que se pasan por argumento pueden ser funciones declaradas o expresadas
   - ejemplo:
   // FUNCION DECLARADA
   function sumar(n1,n2){return n1 + n2}

   //FUNCION EXPRESADA
   const restar = function(n1,n2){return n1 - n2}

   function tareaOperador(funcionOperador, n1, n2){
      console.log(functionOperador(n1,n2))
   };

   tareaOperador(sumar,1,2); 
   tareaOperador(restar,4,2); 
   - PRESTAR ATENCION AL MOMENTO DE PASARLE LA FUNCION COMO PARAMETRO, LE ESTAMOS PASANDO LA REFERENCIA A LA FUNCION.

   *GIT Y GITHUB*
   - Git: control de versiones, lo necesitamos para saber como crece nuestro proyecto, los cambios a realizar y las nuevas implementaciones.

   *Ruta de trabajo:*
   - Crea una nueva rama, trabajo en esa rama con los ejercicios a realizar, subo los commits a mi repositorio remoto, realizo un pull request, espero confirmacion para hacer el merge pull request.


## Manipular HTML con JavaScript =========================================================================
   * textContent -> Solo nos da el contenido de dicha etiqueta
   * innerText -> Solo nos los elementos que estan visibles, renderizados en nuestra pagina.
   * innerHTML -> Literalmente nos da todo el elemento HTML(etiquetas + texto).
   
   * Agregar Clase -> classList.add('NombreClase');
   * Quitar Clase -> classList.remove('NombreClase');
   * Agregar atributo -> .src     .value    ... etc;
   
   *Podemos crear nuevos nodos(elementos) de HTML pero en memoria, todavia no esta en la pagina*
   * Crear -> const elementoDinamico = document.createElement('nombre-etiqueta'); <nombreEtiqueta></nombreEtiqueta>
           -> const textoDinamico = document.createTextNode('texto'); Creamos un texto
   * AppenChild -> Para pasar nuestro elementos creados dinamicamente en nuestra pagina HTML.

   * Evento onclick -> es una propiedad que espera una funcion. Podriamos darle una function anonima.
    - Ejemplo: 
    const $boton = documento.querySelector('button');
    $boton.onclick = function(){
        //instrucciones a realizar
        alert('Me diste click :D');
    };









