(() => {
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string; // que sea como una propiedad
    getName2?(): string; // que sea como un método
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Súper velocidad", "Viajar en el tiempo"],
    getName: function () {
      // declarar la función
      return this.name;
    },
    getName2() {
      // mandar a llamar de forma directa
      return this.name;
    },
  };

  let superman: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Clark Kent",
    age: 60,
    powers: ["Súper velocidad", "Súper fuerza"],
  };

  console.log("flash.getName", flash.getName);
  console.log("flash.getName2", flash.getName2);
  console.log("superman.getName", superman.getName);

  /* FORMA 1: hacer primero una validación con un if() */
  /* validar si tiene la propiedad getName y si es un truthy entonces recién la ejecuta con getName() */
  if (!!flash.getName) {
    console.log("flash.getName()", flash.getName());
  }
  if (!!flash.getName2) {
    console.log("flash.getName2()", flash.getName2());
  }

  if (!!superman.getName) {
    console.log("superman.getName()", superman.getName());
  } else {
    console.log("No existe el método");
  }

  /* FORMA 2: hacer una validación antes de invocar el método con el getName? y luego si existe entonces invoca el método y lo ejecuta usando .() para ingresar */
  /* se puede verificar si el método existe antes de invocarlo. Si existe el método, lo invoco y si no existe imprimo por consola que no existe el método */
  console.log(flash.getName?.() || "No existe el método");
  console.log(flash.getName2?.() || "No existe el método");
  console.log(superman.getName?.() || "No existe el método");
})();
