// TAREA1: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

//Version1:
const finDelCiclo = 22;

for (let i = 3; i < finDelCiclo; i+= 3) {
   console.log(`Nro: ${i}`)
}

//Version2:
let contador = 0;

for (let i = 0; i < finDelCiclo; i++) {
   if(contador === 3){
      console.log(`Nro: ${i}`);
      contador = 0;
   }
   contador++;
}

