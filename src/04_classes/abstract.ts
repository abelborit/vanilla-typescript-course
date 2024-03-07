(() => {
  /* no se puede crear una instancia de una clase abstracta. Estas clases abstractas sirven más para poder crear otras clases */
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string,
      public power: string
    ) {}

    /* metodos obligatorios que deben implementar las clases hijas */
    public abstract atacar(): void;
    public abstract bio(): string;
  }

  class Xmen extends Mutante {
    /* no se necesita poner de nuevo el constructor pero si esta obligado a implementar los metodos abstractos de su clase padre, sino tendremos errores en cuanto a TypeScript */
    public atacar(): void {
      console.log("Ataca con su poder " + this.power);
    }
    public bio(): string {
      return `Nombre verdadero: ${this.realName}, Poder: ${this.power}`;
    }

    public salvarMundo() {
      return "Mundo salvado!";
    }
  }

  class Villian extends Mutante {
    /* no se necesita poner de nuevo el constructor pero si esta obligado a implementar los metodos abstractos de su clase padre, sino tendremos errores en cuanto a TypeScript */
    public atacar(): void {
      console.log("Ataca con su poder " + this.power);
    }
    public bio(): string {
      return `Nombre verdadero: ${this.realName}, Poder: ${this.power}`;
    }

    public conquistarMundo() {
      return "Mundo conquistado!";
    }
  }

  /* no se puede crear una instancia de una clase abstracta */
  // const ciclope = new Mutante("Ciclope", "Scott");
  const wolverine: Xmen = new Xmen("Wolverine", "Logan", "500");
  const magneto: Villian = new Villian("Magneto", "Magnus", "500");

  console.log(wolverine);
  console.log(magneto);

  wolverine.atacar(); // si se coloca un console.log() dará un undefined ya que la función no retorna nada
  magneto.atacar(); // si se coloca un console.log() dará un undefined ya que la función no retorna nada

  console.log(wolverine.bio());
  console.log(magneto.bio());

  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarMundo());

  /* con las clases abstractas se puede utilizar un argumento que sea de un tipo X pero que implemente las características de la clase abstracta, es decir, el argumento que recibe la función printName es un character que es de tipo Mutante pero al final se le está pasando a wolverine que es de la clase Xmen pero que extiende de la clase abstracta Mutante y también magneto que es de la clase Villian pero que extiende de la clase abstracta Mutante */
  const printName = (character: Mutante) => {
    console.log(character.realName);
  };
  printName(wolverine);
  printName(magneto);
})();

/* ************************************************************************************************************************ */

(() => {
  console.log("===============Clases Abstractas Ejemplo===============");

  enum Gender {
    Male,
    Feminine,
    Nonbinary,
  }

  enum Power {
    SuperVelocity,
    SuperStrength,
  }

  const AverageSpeedNormalPerson = "3 Km/hr";
  const AverageStrengthNormalPerson = "Normal Strength";

  abstract class Person {
    constructor(
      public name: string,
      public age: number,
      public gender: Gender,
      private _realName: string,
      public isMutant: boolean
    ) {}

    /* metodos obligatorios que deben implementar las clases hijas */
    public abstract Speed(): string;
    public abstract Strength(): string;

    public get realName(): string {
      return this._realName;
    }

    public set realName(newRealName: string) {
      this._realName = newRealName;
    }
  }

  class Mutant extends Person {
    constructor(
      name: string,
      age: number,
      gender: Gender,
      _realName: string,
      public powers: Power[]
    ) {
      super(name, age, gender, _realName, true);
    }

    public Speed(): string {
      for (const currentPower of this.powers) {
        if (currentPower === Power.SuperVelocity) {
          return "1000 Km/hr";
        }
      }
      return AverageSpeedNormalPerson;
    }

    public Strength(): string {
      for (const power of this.powers) {
        if (power === Power.SuperStrength) {
          return "A lot of Strength";
        }
      }
      return AverageStrengthNormalPerson;
    }
  }

  class NonMutant extends Person {
    constructor(
      name: string,
      age: number,
      gender: Gender,
      _realName: string,
      public hatesMutants: boolean
    ) {
      super(name, age, gender, _realName, false);
    }

    public Speed() {
      return AverageSpeedNormalPerson;
    }

    public Strength(): string {
      return AverageStrengthNormalPerson;
    }
  }

  //Denifinimos una array de personas
  const persons: Person[] = new Array<Person>();

  //agragamos 3 personas
  const erik: NonMutant = new NonMutant(
    "Erik",
    29,
    Gender.Male,
    "Erik Montes",
    false
  );

  const wolverin: Mutant = new Mutant(
    "Wolverin",
    50,
    Gender.Male,
    "James Howlett",
    [Power.SuperStrength]
  );

  const quicksilver: Mutant = new Mutant(
    "Quicksilver",
    30,
    Gender.Male,
    "Pietro Django Maximoff",
    [Power.SuperVelocity]
  );

  //agragamos las 3 personas creadas al array de personas
  persons.push(erik, wolverin, quicksilver);

  //imprimimos las 3 personas creadas
  console.log("=====Imprimimos las 3 personas creadas======");
  persons.forEach((element) => console.log(element));

  //Ahora imprimimos la velocidad de las tres personas creadas
  //se puede observar que gracias a una clase abstracta un metodo puede tener muchas implementaciones distintas dependiendo de lo que se programa en la clase hija que extiende de la clase abstracta
  console.log(
    "=====Ahora imprimimos la velocidad y fuerza de las 3 personas creadas======"
  );
  persons.forEach((e) =>
    console.log(
      `La persona ${
        e.realName
      } tiene una velocidad de ${e.Speed()} y una fuerza de ${e.Strength()}`
    )
  );
})();
