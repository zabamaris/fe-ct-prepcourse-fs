/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   let respuesta = null;
   if (x === y) {
      respuesta = true;
   } else {
      respuesta = false;
   }

   return respuesta;
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   let respuesta = null;
   if (str1.length == str2.length) {
      respuesta = true;
   } else {
      respuesta = false;
   }

   return respuesta;
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   let result = null;
   if (num < 90) {
      result = true;
   } else {
      result = false;
   }

   return result;
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   let result = null;
   if (num > 50) {
      result = true;
   } else {
      result = false;
   }

   return result;
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   let result = null;
   if (num % 2 == 0) {
      result = true;
   } else {
      result = false;
   }

   return result;
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   let result = null;
   if (num % 2 != 0) {
      result = true;
   } else {
      result = false;
   }

   return result;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
