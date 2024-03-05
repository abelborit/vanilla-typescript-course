"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    /* El operador void especifica una expresión que se evalúa sin devolver un valor y ¿En qué se diferencia void y undefined? La diferencia es que se puede sobreescribir o asignar un nuevo valor a undefined, mientras que void será vacío en tiempo de ejecución y compilación. En TypeScript, una función que no devuelve un valor, en realidad devuelve undefined */
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
    var b = callSuperman();
    console.log(b);
    /* aquí veremos que en la consola igual se verá el valor de true aunque le hayamos colocado el tipo de void, porque básicamente estamos escribiendo en TypeScript lo cual nos ayudará a poder encontrar errores mientras vamos programando pero una vez transpilado a JavaScript entonces se pierde la parte del tipado y por eso en la consola del navegador se puede ver el true aunque aquí en el código nos de un error */
    var errorTypeScriptButNoJavaScript = function () {
        return true;
    };
    var errorTSButNoJS = errorTypeScriptButNoJavaScript();
    console.log(errorTSButNoJS);
})();
