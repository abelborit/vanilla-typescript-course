/* https://www.typescriptlang.org/docs/handbook/utility-types.html */

/* al usar la interface es como un contrato que no se puede romper, es decir que nosotros colocaremos cómo queremos que sean las cosas y tiene que cumplirse, pero no tienen que ser exactamente de esa manera */

interface PersonaInterface2 {
  name: string;
  edad: number;
  dni: number;
}

/* aquí está creando un tipo por cada cosa que se está colocando, entonces al colocar de esa forma se cumple el contrato o los requerimientos de la interface. Aquí se coloca el Partial<nombre_interface> para decir que algunos datos se pueden colocar o no, esto quiere decir que se usa de forma parcial la interface de PersonaInterface2. Con eso nos evitamos de usar el signo de ? en alguna propiedad dentro de la interface */
const PersonaInterface2: Partial<PersonaInterface2> = {
  name: "Nombre",
  edad: 24,
  // dni: 12345678,
};

/* ************************************************************************************************************************ */
interface PersonaInterface3 {
  name: string;
  edad: number;
  dni?: number;
}

/* aquí se coloca el Required<nombre_interface> para decir que todos los datos son requeridos, esto quiere decir que se tiene que usar de forma requerida todas las propiedades de la interface de PersonaInterface3. Así que si en la interface está con ? en el nuevo objeto que se cree tiene que estar sí o sí. INTENTAR COMENTADO dni PARA QUE NOS SALGA EL ERROR DE QUE ES REQUERIDO */
const PersonaInterface3: Required<PersonaInterface3> = {
  name: "Nombre",
  edad: 24,
  dni: 12345678,
};

/* ************************************************************************************************************************ */
/* aquí se extiende de forma directa de PersonaInterface2 */
interface AlumnoInterface2 extends PersonaInterface2 {
  curso: string;
}

/* aquí se tiene que colocar tal cual nos pide tanto AlumnoInterface2 y su extensión de PersonaInterface2 porque sino nos dará un error. INTENTAR COMENTANDO ALGUNA PROPIEDAD, RECORDAR QUE dni ES OPCIONAL */
const AlumnoInterface2: AlumnoInterface2 = {
  name: "Nombre",
  edad: 24,
  dni: 12345678,
  curso: "Curso",
};

/* ************************************************************************************************************************ */
/* aquí se puede modificar aunque esté con el const porque, recordar que un objeto es una referencia a un espacio en memoria en cuyo interior están las propiedades: valores, entonces lo que se está haciendo es solo modificar ese valor que está ya dentro de la referencia en memoria, pero el const lo que no nos permitirá es modificar ese espacio en memoria ya dado */
const personaModificable: PersonaInterface3 = {
  name: "Juan",
  edad: 23,
};

/* nos dará un error porque es una constante y este ya tiene un espacio en memoria */
// personaModificable = {
//   name: "Pedro",
//   edad: 23,
// };
personaModificable.name = "Pedro";

/* usando el Readonly<nombre_interface> no se podrá hacer ninguna variación ya que impide que algún valor sea reasignado */
const personaModificable2: Readonly<PersonaInterface3> = {
  name: "Juan",
  edad: 23,
};
/* nos dará un error porque con el Readonly impide que algún valor sea reasignado */
// personaModificable2.name = "Pedro";

/* ************************************************************************************************************************ */
/* esta es la forma correcta para hacer lo anterior y con eso lo podremos reutilizar, podemos crear nuestros tipos y de ahú usar y reutilizar ese tipo */

type PersonaReadOnly = Readonly<PersonaInterface3>;

const personaModificable3: PersonaReadOnly = {
  name: "Juan",
  edad: 23,
};
/* nos dará un error porque con el Readonly impide que algún valor sea reasignado */
// personaModificable3.name = "Pedro";
