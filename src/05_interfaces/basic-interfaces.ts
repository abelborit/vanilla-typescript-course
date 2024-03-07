(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: [1, 2],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: [1],
    getName() {
      return this.name;
    },
    // getName: function () {
    //   return this.name;
    // },
  };

  console.log(flash);
  console.log(
    flash.getName ? flash.getName() : "No existe el método getName()"
  );

  console.log(superman);
  console.log(
    superman.getName ? superman.getName() : "No existe el método getName()"
  );
})();
