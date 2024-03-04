// LAS CLASES NOS SIRVEN PARA QUE CIERTAS PROPIEDADES Y FUNCIONALIDADES PUEDAN REUTILIZARCE PARA INSTANCIAR OBJETOS QUE TENGAN QUE BASARSE EN ESA CLASE

/* Una clase es como un molde donde adentro tendrá ciertas característica especiales que se colocarán para luego ser utilizado de nuevo. Se utilizan clases para que siempre el resultado sea el mismo, como para que se tenga ya una estructura de cómo hacer algo y se tenga controlado. El constructor vienen a ser los valores que le colocaremos a esas características del objeto. Entonces cada vez que se cree un objeto utilizando la clase Vehiculo entonces tendrán las mismas características */
class Vehiculo {
  /* aquí podemos hacer que sea público o privado. Recordar que en la programación orientada a objetos (POO), tenemos 3 objetivos fundamentales que son: */
  /* ENCAPSULAMIENTO que estamos logrando al colocar private: dentro de una clase no vamos a poder accionar de manera directa sobre las diferentes propiedades y solo vamos a poder accionar sobre ellas dentro de un método de dicha clase, por ejemplo, si no tuviera el private entonces se podría hacer de manera directa --ferrari.numPuertas = 4;-- pero con el private solo podría usar los métodos que en este caso serían los getters y los setters que se establezcan */
  /* HERENCIA: en este caso la clase Auto va a heredar las propiedades de la clase Vehiculo */
  /* POLIMORFISMO: en la clase padre Vehiculo hay una función que dará el número de puertas (getNumeroPuertas) pero eso se podría sobreescribir ahora que se extendió la clase. Esto quiere decir que polimorfismo es la capacidad de que algo se comporte de manera diferente de acuerdo al contexto donde este se encuentre. Esto quiere que decir no importa si es un Vehiculo o es un Auto o lo que fuese, el método es el mismo de obtener las puertas pero su comportamiento será diferente de acuerdo al contexto, es decir que será diferente si es un Vehiculo o es un Auto. IR A VER A LA CLASE AUTO... */
  /* ABSTRACCIÓN: */

  /* PÚBLICO */
  // numPuertas: number;
  // velocidad: number;
  // marca: string;

  /* PRIVADO (buena práctica) */
  private numPuertas: number;
  private velocidad: number;
  private marca: string;

  constructor(numPuertas: number, velocidad: number, marca: string) {
    /* aquí quiere decir que this._nombre_caracteristica_Auto = valor_asignado_en_constructor. Este this hace referencia al contexto de la clase auto, es decir hace referencia al lugar en donde nosotros declaramos nuestras características de la clase */
    this.numPuertas = numPuertas;
    this.velocidad = velocidad;
    this.marca = marca;
  }

  /* este :number nos dice que lo que va a retornar este método es de tipo number */
  getNumeroPuertas(): number {
    return this.numPuertas;
  }

  /* de esta forma estaría mal porque en pocas palabras estaríamos aceptando que se envíe cualquier valor, sea parámetro de tipo number, string, etc. En javascript lo que se podría hacer es que dentro del método hacer un if() y validar si el dato que se está mandando, es decir, si el parámetro es de tipo number y depende de ello hacer una u otra cosa */
  // setNumeroPuertas(numPuertas) {
  //   this.numPuertas = numPuertas;
  // }

  /* para evitar lo de arriba entonces se trabaja con typecript y para evitar lo del condicional y validarlo, solo se colocaría :number, y con eso ya estamos diciendo que solo acepta valores de tipo número, es decir que el parámetro que enviaremos solo tiene que ser de tipo número */
  setNumeroPuertas(numPuertas: number) {
    this.numPuertas = numPuertas;
  }
}

/* usando la clase Vehículo */
const ferrari = new Vehiculo(2, 300, "Ferrari");
/* aquí ya nos lanzaría un error porque solo se aceptan parámetros de tipo number, por ende no se podría compilar el código */
// ferrari.setNumeroPuertas("4");
/* aquí ya está funcionando normal porque el parámetro es tipo number */
ferrari.setNumeroPuertas(4);

const moto = new Vehiculo(2, 300, "Moto");

/* usando la herencia */
class Auto extends Vehiculo {
  private cantidadRuedas: number;

  constructor(
    numPuertas: number,
    velocidad: number,
    marca: string,
    cantidadRuedas: number
  ) {
    /* aquí el hacer la herencia se usará el super() que es un método que viene de las clases para decir que todo lo que tenga dentro del paréntesis se utilice en el constructor pero del padre */
    super(numPuertas, velocidad, marca);
    this.cantidadRuedas = cantidadRuedas;
  }

  getCantidadRuedas(): number {
    return this.cantidadRuedas;
  }

  setCantidadRuedas(cantidadRuedas: number) {
    this.cantidadRuedas = cantidadRuedas;
  }

  /* usando polimorfismo, aquí de la clase padre quiero usar el método getNumeroPuertas pero lo modificaremos sumando 2, entonces toyota tendría 4 puertas */
  getNumeroPuertas(): number {
    return super.getNumeroPuertas() + 2;
  }
}

const toyota = new Auto(2, 300, "Toyota", 4);
console.log(toyota.getNumeroPuertas());

/* esto funciona porque toyota y moto provienen de la clase Vehiculo, porque moto viene directamente de la clase Vehiculo y toyota es una extensión de la clase Vehiculo pero tiene cosas adicionales */
const arrayDeVehiculos: Vehiculo[] = [toyota, moto];

/* aquí por ejemplo se podrá ver la interpretación del polimorfismo */
for (const vehiculo of arrayDeVehiculos) {
  console.log(vehiculo.getNumeroPuertas());
}

/* ************************************************************************************************************************ */
class Persona {
  name: string;
  edad: number;
}
class Persona2 {
  name: string;
  edad: number;
}

let persona1 = new Persona();
let persona2 = new Persona2();
/* aquí está bien y sí es igual y funciona porque en clase Persona y en la clase Persona2 tienen la misma estructura, a typescript no le importa los nombres porque lo que realmente importa es la estructura que tienen en su interior, tienen el mismo shape o la misma forma */
let persona3: Persona = persona2;
