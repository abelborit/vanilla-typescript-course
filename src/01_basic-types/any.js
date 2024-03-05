"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = "Dr Strange";
    // console.log( avenger.charAt(0) );
    /* FORMA 1 de hacer un casteo: que lo trate como un tipo de dato colocando "as", en este caso como string. Con la finalidad de tener facilidades al programar, como utilizar su intellisense */
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    /* FORMA 2 de hacer un casteo: que lo trate como un tipo de dato colocando <tipo_dato>, en este caso como number. Con la finalidad de tener facilidades al programar, como utilizar su intellisense */
    console.log(avenger.toFixed(2)); // usando paréntesis que es igual que abajo
    console.log(avenger.toFixed(2)); // sin usar paréntesis que es igual que arriba
    console.log(exists); // sería undefined porque no tiene un valor
    console.log(power); // sería undefined porque no tiene un valor
})();
