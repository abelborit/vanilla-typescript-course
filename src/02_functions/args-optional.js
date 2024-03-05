(function () {
    var fullName = function (firstName, lastName) {
        if (firstName.length === 0 && (lastName === null || lastName === void 0 ? void 0 : lastName.length) === 0) {
            throw new Error("Debe de tener al menos un caracter");
        }
        return "".concat(firstName, " ").concat(lastName || "----");
    };
    var name1 = fullName("Tony", "Stark");
    console.log({ name1: name1 });
    var name2 = fullName("Tony");
    console.log({ name2: name2 });
    var name3 = fullName("", "");
    console.log({ name3: name3 });
})();
