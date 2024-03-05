(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || "----").toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || "----");
        }
    };
    var name1 = fullName("Tony", "Stark", true);
    console.log({ name1: name1 });
    var name2 = fullName("Tony", "Stark");
    console.log({ name2: name2 });
})();
