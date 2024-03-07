(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger llamado");
    }

    /* con protected se van a poder acceder a estas propiedades protegidas (propiedades o métodos que funcionan dentro de la misma clase o clases que extiendan de esa clase) cuando se haga una extensión de esta clase padre sin exponerlos directamente fuera de la jerarquía de clases, por ejemplo en el método de getFullnameDesdeXmen que usa a super.getFullname() */
    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    /* el name y el realName son argumentos que se le están pasando al crear la instancia de la clase Xmen y se podría colocar public a ambos pero se estarían creando de nuevo esas variables que ya existen en la clase Avenger, por eso solo se pasa como argumento los cuales son los que se envían al super(name, realName) que van al constructor de la clase Avenger */
    /* El constructor solamente lo utilizamos para inicializar el objeto y dejarlo listo para usarlo */
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor Xmen llamado");
      // console.log(super.name);
      // console.log(super.realName);
    }

    get GetFullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    /* los setters solo pueden recibir un argumento y no hacen uso del return ya que no retornan nada */
    set SetFullName(name: string) {
      if (name.length < 3) {
        throw new Error(
          `EL name debe de ser mayor de 3 letras. Tú tienes ${name.length} letra(s)`
        );
      }
      this.name = name;
    }

    getFullnameDesdeXmen() {
      console.log("super.getFullname()", super.getFullname());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  /* haciendo uso del set para cambiar el valor del name */
  // wolverine.SetFullName = "Fe";

  console.log("wolverine.GetFullName", wolverine.GetFullName);

  wolverine.getFullnameDesdeXmen();
})();
