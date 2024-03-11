/* los decoradores son funciones que sirven para expandir el funcionamiento de alguna clase, método, etc. Los decoradores se ejecutan o disparan al momento de ejecución o transpilación del código. Usualmente se utiliza la palabra reservada function para crear esa función decoradora pero se puede trabajar también con funciones flecha. Es importante señalar que sería mejor usarlo con funciones normales, es decir, usando la palabra reservada function ya que se puede hacer un mejor uso del this ya que apunta al scope en donde está la función porque al usar las funciones flecha y usar el this puede ser que tome el scope de la función, el scope un poco más arriba o uno general entonces para evitar futuros problemas sería mejor usar las funciones tradicionales */
/* un decorador es una función y un factory decorator es una función que retorna otra función. Dependiendo de dónde se coloque el decorador se puede recibir el constructor o target o propertyKey o descriptor según como lo vayamos necesitando. Para una clase podría ser el constructor, para una función podría ser target, propertyKey, descriptor, para una propiedad podría ser target, propertyKey */
/* ************************************************************************************************************************ */
function printToConsole(constructor: Function) {
  console.log(constructor);
}

/* este es un factory decorator o factory constructor ya que se le está mandando argumentos al decoradorr al momento de ejecutar o disparar la clase a usar y estos argumentos serán utilizados dentro de la función del decorador. Este tipo de decorador de factory decorator tiene que retornar sí o sí una función */
const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    /* se está mandando como referencia y no como función, es decir, está como printToConsole y no como printToConsole() ya que la función printToConsole tendría que retornar una función al final */
    return printToConsole;
  } else {
    return () => {
      /* como esta función no tiene un cuerpo entonces no hará nada */
    };
  }
};

/* función decoradora para bloquear el prototipo de una clase, es decir, para que no se pueda expandir */
const bloquearPrototipo = function (constructor: Function) {
  /* Object.seal() donde Object sería todo el objeto y .seal() impide la modificación de atributos de propiedades existentes y evita la adición de nuevas propiedades */
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

/* este será un factory decorator ya que puede ser que más adelante se necesiten pasar argumentos, y este decorador será para usarlo en funciones como savePokemonToDB */
function CheckValidPokemonId() {
  /* si el decorador lo usamos como decorador de un método, es decir, este decorador CheckValidPokemonId es un factory decorator que retornará una función, y esa función se va a disparar con ciertos argumentos */
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log({ target, propertyKey, descriptor });

    const originalMethod = descriptor.value;

    /* si se coloca como descriptor.value = () => {} entonces los argumentos que tenga la función que usará este decorador, es decir, la función savePokemonToDB() usará el decorador CheckValidPokemonId, y los argumentos que tenga savePokemonToDB() serán los mismos argumentos que tendrá este descriptor.value = (id: number) => {} para poder utilizarlos */
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El id del pokemon debe de estar entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };

    /* al colocar con el descriptor.value que sea una función entonces sobreescribe lo que tenía la función savePokemonToDB y se mostrará ahora el "Hola mundo" */
    // descriptor.value = () => console.log("Hola mundo");
  };
}

/* NOTA: parece que esta función y restricción en TypeScript, es decir, la forma en como está hecha readonlyDecorator ya no funciona ya que se podría usar de forma directa la propiedad readonly que viene por defecto, pero igual se dejará la lógica para saber cómo se haría un decorador para una propiedad */
/* este será un factory decorator ya que puede ser que más adelante se necesiten pasar argumentos, y este decorador será para usarlo en métodos como publicApi */
function readonlyDecorator(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    console.log({ target, propertyKey });

    /* cuando es un decorador para una propiedad no hay el descriptor como tal ya que aparece undefined entonces por eso creamos el objeto descriptor de tipo PropertyDescriptor */
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this, "getter");
        return "Fernando";
      },

      set(this, value) {
        console.log(this, value, "setter");
        Object.defineProperty(this, propertyKey, {
          value: value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

/* los decoradores se van ejecutando de forma secuencial, es decir, primero se ejecutará el decorador que esté al principio, y luego los siguientes en orden de posición */
// @printToConsole
@printToConsoleConditional(false) // true o false
@bloquearPrototipo
export class Pokemon {
  @readonlyDecorator(true)
  public publicApi: string = "https://pokeapi.co";

  /* usando la propiedad readonly por defecto propio de TypeScript - JavaScript */
  public readonly publicApi2: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en DB ${id}`);
  }
}

const charmander = new Pokemon("Charmander");

/* aquí se está expandiendo su prototipo añadiéndole una nueva propiedad lo cual no se podrá ya que se tiene el @bloquearPrototipo. Se coloca como as any ya que TypeScript sabe que customName no existe entonces es solo para que no tire errores */
/* Un prototipo agrega la funcionalidad al prototipo del objeto, así todos los objetos de ese tipo, tienen el método agregado, es muy parecido a agregar una propiedad o método a una clase abstracta de la cual se heredan otras clases. */
// (Pokemon.prototype as any).customName = "Pikachu";

charmander.savePokemonToDB(10);
charmander.savePokemonToDB(8000);

/* cambiando las propiedades de la clase de publicApi y publicApi2 */
charmander.publicApi = "https://fernando-herrera.com";

/* aquí dará un error pero en TypeScript porque veremos en la consola que igual cambió el valor ya que como se transpila de TypeScript a JavaScript y al final tener el código ya en JavaScript entonces ahí no hay estas restricciones como tal */
charmander.publicApi2 = "https://fernando-herrera.com";

console.log(charmander);
