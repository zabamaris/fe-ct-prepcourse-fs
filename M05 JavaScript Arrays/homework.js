/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimoElemento = array[array.length - 1];
   return ultimoElemento;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let incremento = [];
   for (let i = 0; i < array.length; i++){
      incremento.push(array[i] + 1);
   }

   return incremento;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);

   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);

   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   let resultado = null;
   let existe = array.includes(elemento);
   if (existe) {
      resultado = true;
   } else {
      resultado = false;
   }

   return resultado;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < arrayOfNums.length; i++){
      suma += arrayOfNums[i];
   }

   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0, promedio = 0;
   for (let i = 0; i < resultadosTest.length; i++){
      suma += resultadosTest[i];
   }

   promedio = suma / resultadosTest.length;

   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let mayor = 0;
   for (let i = 0; i < arrayOfNums.length; i++){
      if (arrayOfNums[i] > mayor) {
         mayor = arrayOfNums[i];
      }
   }

   return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let producto = 1, aux = null;
   if (arguments.length === 0) {
      aux = 0;
   } else if (arguments.length === 1) {
      aux = arguments[0];
   } else {
      for (let i = 0; i < arguments.length; i++){
         producto = producto * arguments[i];
         aux = producto;
      }
   }

   return aux;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let aux = 0;
   array.forEach((num) => {
      if (num > 18) {
         aux += 1;
      }
   });

   return aux;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   let result = null;
   if (numeroDeDia === 7 || numeroDeDia === 1) {
      result = "Es fin de semana";
   } else {
      result = "Es dia laboral";
   }

   return result;
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let result = null, aux = num.toString();
   if (aux[0] === "9") {
      result = true;
   } else {
      result = false;
   }

   return result;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let aux = 0, result = null;
   for (let i = 0; i < array.length - 1; i++){
      aux = array[i];
      if (aux === array[i + 1]) {
         result = true;
      } else {
         result = false;
      }
   }

   return result;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let nuevoArray = [], result = null;
   for (let i = 0; i < array.length; i++){
      if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
         nuevoArray.push(array[i]);
      } 
   }

   if (nuevoArray.length === 3) {
      return nuevoArray;
   } else {
      return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let productoDelSeis = [], tableSeis = 0;
   for (let i = 0; i <= 10; i++){
      tableSeis = 6 * i;
      productoDelSeis.push(tableSeis);
   }

   return productoDelSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let nuevoArray = [];
   for (let i = 0; i < array.length; i++){
      if (array[i] > 100) {
         nuevoArray.push(array[i]);
      }
   }

   return nuevoArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let nuevoValor = [], suma = 0;
   for (let i = 1; i <= 10; i++){
      num = num + 2;
      suma = num;
      nuevoValor.push(suma);
      if (suma === i) {
         return "Se interrumpió la ejecución";
         break;
      }
   }

   return nuevoValor;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let nuevoValor = [];
   for (let i = 0; i < 10; i++){
      if (i === 5) {
         continue;
      } 
      num = num + 2;
      nuevoValor.push(num);
   }

   return nuevoValor;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
