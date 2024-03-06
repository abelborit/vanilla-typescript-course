(function () {
    var myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
        getName: function () {
            return this.name;
        },
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
