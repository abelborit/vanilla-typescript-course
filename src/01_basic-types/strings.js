"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    var _a;
    var batman = "Batman";
    // const linternaVerde: string = 'Linterna Verde';
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    /* para ver cómo transpila de .ts a .js usando caracteres especiales como la tilde según las comillas que tenga */
    var palabra = "Parábola";
    var palabra2 = "Par\u00E1bola";
    // let palabra3: string = 'Parábola';
    console.log("I'm ".concat(batman));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente esa cantidad de caracteres");
})();
