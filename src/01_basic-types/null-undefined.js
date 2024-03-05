"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    // strictNullChecks
    var nada = undefined;
    console.log(nada);
    var isActive = null;
    console.log(isActive);
})();
/* ************************************************************************************************************************ */
/* ¿Cuál es la diferencia tecnica o como se explicaría la diferencia entre null y undefined? */
/*
Es parecido, pero definitivamente no es igual:
  - Cuando definimos una variable null, estamos tratando de transmitir que la variable esta vacía.
  - Mientras que cuando usamos undefined significa que la variable no existe para el compilador.
*/
