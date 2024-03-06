(function () {
    var _a, _b, _c;
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Súper velocidad", "Viajar en el tiempo"],
        getName: function () {
            return this.name;
        },
        getName2: function () {
            return this.name;
        },
    };
    var superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Súper velocidad", "Súper fuerza"],
    };
    console.log("flash.getName", flash.getName);
    console.log("flash.getName2", flash.getName2);
    console.log("superman.getName", superman.getName);
    if (!!flash.getName) {
        console.log("flash.getName()", flash.getName());
    }
    if (!!flash.getName2) {
        console.log("flash.getName2()", flash.getName2());
    }
    if (!!superman.getName) {
        console.log("superman.getName()", superman.getName());
    }
    else {
        console.log("No existe el método");
    }
    console.log(((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash)) || "No existe el método");
    console.log(((_b = flash.getName2) === null || _b === void 0 ? void 0 : _b.call(flash)) || "No existe el método");
    console.log(((_c = superman.getName) === null || _c === void 0 ? void 0 : _c.call(superman)) || "No existe el método");
})();
