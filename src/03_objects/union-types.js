(function () {
    var myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
        /* El error al usar "return this.name" tanto en la FORMA 1 y FORMA 2 indica que la variable name puede ser de 3 tipos (string | number | Hero) pero this no sabe exactamente cual de 3 es en ese momento dado. Algo que se podría hacer es castear this como Hero, es decir, usar "this as Hero" y con eso ya se tendría acceso a sus propiedades */
        /* FORMA 1 */
        // getName() {
        //   // return this.name;
        //   return (this as Hero).name;
        // },
        /* FORMA 2 */
        getName: function () {
            // return this.name;
            return this.name;
        },
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
//# sourceMappingURL=union-types.js.map