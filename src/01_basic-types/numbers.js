"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("55A"); // sería un NaN, se tendría que hacer validaciones para ver si es un número o no lo que está dentro de Number()
    console.log({ avengers: avengers });
})();
