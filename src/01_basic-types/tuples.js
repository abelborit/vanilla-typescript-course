"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    /* sería considerado un arreglo que puede permitir string o number o boolean */
    var heroArray = ["Dr Strange", 100, true];
    console.log(heroArray);
    /* para que sea considerado una tupla, es decir, que sí o sí el primer elemento sea un string, el segundo un number y el tercero un boolean */
    var hero = ["Dr Strange", 100, true];
    console.log(hero);
    /* aquí se está cambiando el valor del arreglo, donde el arreglo es una constante, pero hay que tener en cuenta que no se puede redeclarar una constante, pero realmente lo que se guarda en la variable, es el espacio en memoria donde almacenamos el objeto, no el objeto en si, por lo que no podemos modificar esa constante, pero el objeto/arreglo que va asociada a ella sí.
     */
    // hero = ['Ironman', 99, true]; // Error al estar redeclarando la variable hero
    hero[0] = "Ironman"; // Totalmente válido al estar modificando directamente la data del arreglo en si, y no el espacio en memoria que almacena la variable
    hero[1] = 50;
    hero[2] = false;
    // hero.push(nuevoValor); // Permitido (si tu arreglo cumple las condiciones, en este caso chocaría con el tipado que se ha colocado, pero no por ser const)
    console.log(hero);
    /* hacer un array bidimensional */
    var heroes = [
        ["Dr. strange", 100],
        ["spiderman", 140],
        ["Ironman", 50],
    ];
    console.log(heroes);
    console.log(heroes[0]);
    console.log(heroes[2]);
})();
/* ************************************************************************************************************************ */
/* PREGUNTA: El tipo de dato TUPLA, ¿solo funciona en la inicialización o en la asignación? ¿Sigue siendo un arreglo mutable? Se usa el tipo de dato tupla solamente con una inicialización, o con una re-asignación a través de la posición, pero no se hace ningún ejemplo con por ejemplo `.push()` o `.pop()`...

Se hizo la prueba y al declarar e inicializar una tupla, si luego intento hacerle un `.push()` de cualquier tipo de dato, lo permite sin problema. La pregunta es... La definición de la tupla, ¿solo se tendrá en cuenta para la inicialización o asignación directa a través de la posición? ¿Al hacer pushes no se tiene en cuenta? */
/*
RESPUESTA: Entonces para responder, básicamente es un arreglo de elementos que están tipados. De esta manera cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla, ahora, se tiene toda la razon, se permite eso y no deberia, pero typescript, segun veo, no ha resuelto ese problema todavia, (tuplas en typescript)[https://github.com/microsoft/TypeScript/issues/6325] asi que parece que debemos tener en cuenta que el método push es una excepción de la regla y TypeScript no va a poder detectar que nos estamos saltando este tipo.
*/
/* ************************************************************************************************************************ */
/* PREGUNTA: ¿Por qué puedo añadir valores las tuplas com0 si fueran arrays? He probado a hacer y compila. Entendí que las tuplas no pueden extenderse. Ahora tiene tres valores: Jonh, 30 y true. ¿debería dar un error de compilación?

let tupla: [string, number] = ["John", 30];
tupla.push(true);
*/
/*
RESPUESTA: Es cierto que las tuplas en TypeScript no se pueden extender de forma nativa. Sin embargo, el código que describes compila porque TypeScript permite la asignación de valores a una tupla existente, incluso si la cantidad de valores no coincide con la definición original. Esto se debe a que TypeScript realiza una "colocación implícita de tipos" cuando se asignan valores a una tupla. En este caso, al agregar un tercer valor (true) a la tupla (tupla: [string, number]), TypeScript infiere el tipo del nuevo valor como boolean y expande la tupla para que coincida tupla: [string, number, boolean].

Si bien este código compila, se considera una práctica no recomendable. La razón principal es que puede generar confusión y errores inesperados. Cuando se define una tupla con un tamaño y tipos específicos, se espera que se cumpla esa definición. Agregar valores adicionales sin actualizar la definición de la tupla puede romper la lógica del código y dificultar la comprensión del mismo.

Si pruebas el código en https://www.typescriptlang.org/es/play yendo a "https://www.typescriptlang.org/es/play?#code/DYUwLgBGCuAOwEMBcEDaBnMAnAlgOwHMAaCPaAWwCMQsBdCAXjQCIApAewAs9mSBmAAy0A3AFgAUDHgIAdLGjpOACmzQQASmFA" te darás cuenta de que el código compila pero da un error de tipado el cual sería "Argument of type 'boolean' is not assignable to parameter of type 'string | number'."
*/
