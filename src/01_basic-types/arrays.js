"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    // const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];
    // numbers.push(true);
    // numbers.push(11);
    // numbers.push("11");
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ["Omega Rojo", "Dormammu", "Duende Verde"];
    var users = [
        { nombre: "Kevin", apellido: "Durant" },
        { nombre: "Augusto", apellido: "Mayer" },
        { nombre: "Mike", apellido: "Dell" },
    ];
    console.log(numbers);
    villians.forEach(function (villian) { return console.log(villian.toUpperCase()); });
    users.forEach(function (user) { return console.log(user); });
})();
