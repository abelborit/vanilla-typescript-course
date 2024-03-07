(() => {
  class Apocalipsis {
    /* crear una instancia que será el mismo tipo de la clase creada */
    static instance: Apocalipsis;

    /* el private constructor() ya no es tan utilizado pero sirve para controlar la manera en la que las instancias son ejecutadas y también controla cómo mis nuevas clases van a ser creadas, un caso en particular podría ser cuando se usan los singletons (patrón de diseño o principio) que sirve para crear una única instancia a través de toda la aplicación */
    /* usando el private constructor() solo se puede llamar desde esta misma clase, ya no desde afuera de la clase como en apocalipsis10, apocalipsis20, apocalipsis30 */
    private constructor(public name: string) {}

    /* este método static debería regresar una instancia de la clase creada */
    static callApocalipsis(): Apocalipsis {
      /* si no existe la instance de Apocalipsis entonces recién se va a crear una nueva instancia */
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy apocalipsis el único");
      }

      return Apocalipsis.instance;
    }

    /* se podría cambiar algo de la instancia y las veces que se llame a esta clase, entonces tendrán el mismo valor */
    changeName(newName: string): void {
      this.name = newName;
    }
  }

  /* generando varias instancias */
  // const apocalipsis10 = new Apocalipsis('Soy Apocalipsis1... el único')
  // const apocalipsis20 = new Apocalipsis('Soy Apocalipsis2... el único')
  // const apocalipsis30 = new Apocalipsis('Soy Apocalipsis3... el único')
  // console.log(apocalipsis10, apocalipsis20, apocalipsis30);

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  console.log(apocalipsis1);
  console.log(apocalipsis2);
  console.log(apocalipsis3);

  /* se podría cambiar algo de la instancia y las veces que se llame a esta clase, entonces tendrán el mismo valor */
  apocalipsis1.changeName("Xavier");

  console.log(apocalipsis1);
  console.log(apocalipsis2);
  console.log(apocalipsis3);
})();

/* Pasos:
- El patrón de diseño o principio Singleton básicamente funciona que cada vez que se quiera usar la clase, entonces siempre va a ser la misma isntancia que se generó y creó la primera y única vez, es decir:
    1. Como instance en un primer momento será null entonces al momento de entrar al condicional !Apocalipsis.instance y no existir el instance creará la nueva instancia de new Apocalipsis("Soy apocalipsis el único"); la cual se almacenará en instance como su nuevo valor
    2. Al crear varias constantes como apocalipsis1, apocalipsis2, apocalipsis3 y llamar al método estático de callApocalipsis(), que se tiene que llamar a través de la clase y no mediante una instancia, veremos que las tres constantes tienen la misma instancia (ya que en un primero momento fue null que fue donde se creó esa instancia pero al ya tenerla entonces no importa cuántas variables se creen siempre tendrán la misma instancia creada la primera y única vez)
*/

/* ************************************************************************************************************************ */
/* ¿Por qué ya no se debería usar el patrón Singleton? */
/* 
Primero que nada mencionar que no existe un patrón perfecto, tanto el singleton como el resto tienen sus ventajas y desventajas. ¿Por qué ya no se debería usar?

Muy fácil, el patrón singleton ofrece la posibilidad de crear una instancia única de la clase, y esto puede crear muchas desventajas en la reutilización del código. Sobre todo cuando se intenta utilizar el código en múltiple ocasiones. Otra desventaja es que al ser una instancia única se convierte en un recurso compartido en toda la app, por lo tanto, si un segmento de nuestra app modifica la instancia, esto podría afectar el funcionamiento de otros segmentos.

Como dato curioso es que a partir de ES6 javascript impulsa el uso del enfoque de modularización lo cual va en contra del singleton.

Durante los ejercicios realizados ahora se intenta aplicar el patrón de módulos, que intenta encapsular la lógica en funciones o clases y así lograr segmentar y reutilizar el código de la manera más eficiente.

Un ejemplo del patrón Singleton podría ser para controlar una conexión a MySQL para evitar nuevas instancias de la clase y prevenir múltiples conexiones a la base de datos.
*/
