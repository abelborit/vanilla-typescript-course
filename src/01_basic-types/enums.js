"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    /* lo enum nos ayuda mucho a trabajar números como si fueran palabras o variables, puede servir para manejar calificaciones de A, B, C, D, E, F.... y poder utilizarlos para hacer promedios con sus valores, etc. Hay que tener presente que el enum es un objeto, entonces si se coloca dentro de los template literal (``) y cuando se pasa un objeto a un string de esa forma, todos los objetos aparecen como [object Object] entonces hay que colocarlo con el JSON.stringify() o sino como otro argumento del console.log(`primer_argumento`, segundo_argumento) */
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel); // Cuando se imprime directamente, el console.log lo muestra como un objeto
    console.log("La variable enum es ".concat(JSON.stringify(AudioLevel)));
    console.log("La variable enum es ", AudioLevel);
})();
/* ************************************************************************************************************************ */
(function () {
    var _a, _b, _c;
    var OperatorTypes;
    (function (OperatorTypes) {
        OperatorTypes["plus"] = "sumar";
        OperatorTypes["less"] = "restar";
        OperatorTypes["bad"] = "mala";
    })(OperatorTypes || (OperatorTypes = {}));
    function operationA(numberA, numberB, receivedOperator) {
        if (receivedOperator == OperatorTypes.plus) {
            return numberA + numberB;
        }
        if (receivedOperator == OperatorTypes.less) {
            return numberA - numberB;
        }
    }
    console.log((_a = operationA(3, 2, OperatorTypes.plus)) !== null && _a !== void 0 ? _a : 0);
    console.log((_b = operationA(3, 2, OperatorTypes.less)) !== null && _b !== void 0 ? _b : 0);
    console.log((_c = operationA(3, 2, OperatorTypes.bad)) !== null && _c !== void 0 ? _c : 0);
    function operationB(numberA, numberB, receivedOperator) {
        if (receivedOperator == OperatorTypes.less) {
            return numberA - numberB;
        }
        if (receivedOperator == OperatorTypes.plus) {
            return numberA + numberB;
        }
    }
    console.log(operationB(5, 3, OperatorTypes.plus));
    console.log(operationB(5, 3, OperatorTypes.less));
})();
