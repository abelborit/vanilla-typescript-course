(function () {
    var fullName = function (firstName, lastName) {
        if (firstName.length === 0 && lastName.length === 0) {
            throw new Error("Debe de tener al menos un caracter");
        }
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName("Tony", "Stark");
    console.log({ name: name });
    var name2 = fullName("", "");
    console.log({ name2: name2 });
})();
