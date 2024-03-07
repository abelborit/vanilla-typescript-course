/* FORMA 1: forma larga */
(() => {
  class Avenger {
    private name: string;
    private team: string;
    public realName?: string; // se coloca como opcional aquí y en el constructor. Aquí ya que es la definición y declaración de la variable que puede venir o no y en el constructor ya que puede ser enviada o no al momento de crear la instancia de la clase
    static averageAge: number = 35;
    static getAverageAge() {
      /* este this.name apunta al nombre de la clase porque al momento de acceder a las propiedades estáticas o métodos estáticos se accede mendiante la referencia de la clase y no mediante su instancia, es decir, Avenger.averageAge o Avenger.getAverageAge() */
      return this.name;
    }

    /* argumentos que se le pasarán al crear la instancia de la clase Avenger, luego se realizará la asignación de las propiedades con esos argumentos */
    /* realName se coloca aquí como opcional ya que puede ser enviada o no al momento de crear la instancia de la clase. Si solo colocamos como opcional aquí en el constructor para TypeScript esa propiedad no estaría siendo opcional, por lo que perderíamos esa parte del tipado y podríamos llegar a confundir que esa propiedad siempre viene y luego darnos cuenta que es null/undefined, por eso se definen en los dos lados */
    /* el constructor siempre retorna una nueva instancia del objeto que se está intentando crear */
    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  /* aquí veremos todas las propiedades public que se tengan */
  console.log(antman);
  console.log(antman.realName);
  console.log(antman.bio());

  /* para poder acceder a las propiedades static se tiene que acceder desde la definición de la clase (NO crear una nueva instancia). Entonces, para acceder a las propiedades static se puede acceder de manera global como cualquier otra propiedad pero hay que hacer referencia a la clase y no a sus instancia */
  console.log(Avenger.averageAge);
  console.log(Avenger.getAverageAge());
})();

/* FORMA 2: forma corta */
(() => {
  class Avenger {
    static averageAge: number = 35;
    static getAverageAge() {
      /* este this.name apunta al nombre de la clase porque al momento de acceder a las propiedades estáticas o métodos estáticos se accede mendiante la referencia de la clase y no mediante su instancia, es decir, Avenger.averageAge o Avenger.getAverageAge() */
      return this.name;
    }

    /* aquí se crea la propiedad y establece su valor y también la crea con el grado de acceso (private, public, ......) */
    /* el constructor siempre retorna una nueva instancia del objeto que se está intentando crear */
    constructor(
      private name: string,
      private team: string,
      public realName?: string //, averageAge: number = 60
    ) {
      /* para poder utilizar las propiedades estáticas creadas afuera aunque no es común modificar las propiedades estáticas de esta forma ya que son estáticas y solo se colocan afuera */
      // Avenger.averageAge = averageAge;
    }

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  /* aquí veremos todas las propiedades public que se tengan */
  console.log(antman);
  console.log(antman.realName);
  console.log(antman.bio());

  /* para poder acceder a las propiedades static se tiene que acceder desde la definición de la clase (NO crear una nueva instancia). Entonces, para acceder a las propiedades static se puede acceder de manera global como cualquier otra propiedad pero hay que hacer referencia a la clase y no a sus instancia */
  console.log(Avenger.averageAge);
  console.log(Avenger.getAverageAge());
})();
