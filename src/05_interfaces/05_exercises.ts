// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto1 {
  encender: boolean;
  velocidadMaxima: number;
  // acelerar(): void;
  acelerar: () => void;
}

const conducirBatimovil = (auto: Auto1): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil1: Auto1 = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilizar el siguiente objeto usando propiedades opcionales
interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion
interface CiudadGotica {
  (ciudadanos: string[]): number;
}
const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase con las siguientes propiedades y metodos
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface Persona1 {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  // imprimirBio(): void;
  imprimirBio: () => void;
}

class Persona1 implements Persona1 {
  /* en cualquiera FORMA 1 o FORMA 2 no se podría colocar como private o protected porque las interfaces definen "contratos" para seguir el tipado en ellos, por lo tanto no se pueden establecer propiedades privadas o protegidas */
  /* FORMA 1: forma larga */
  // public nombre: string;
  // public edad: number;
  // public sexo: string;
  // public estadoCivil: string;

  // constructor(nombre: string, edad: number, sexo: string, estadoCivil: string) {
  //   this.nombre = nombre;
  //   this.edad = edad;
  //   this.sexo = sexo;
  //   this.estadoCivil = estadoCivil;
  // }

  /* FORMA 2: forma corta */
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ) {}

  public imprimirBio = () => {
    console.log("Clasee Persona1");
  };
}

const persona: Persona1 = new Persona1("Nombre", 25, "masculino", "soltero");
console.log(persona);
persona.imprimirBio(); // si se coloca un console.log() dará un undefined ya que la función no retorna nada
