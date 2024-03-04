/* al usar la interface es como un contrato que no se puede romper, es decir que nosotros colocaremos cómo queremos que sean las cosas y tiene que cumplirse, pero no tienen que ser exactamente de esa manera, puedeh haber condicionales también usando el nombre_propiedad y el "?" */

interface PersonaInterface {
  name: string;
  edad: number;
  /* aquí podemos colocar que el dni sea opcional, es decir que si queremos la colocamos y si no queremos simplemente que no vaya */
  dni?: number;
}

/* aquí está creando un tipo por cada cosa que se está colocando, entonces al colocar de esa forma se cumple el contrato o los requerimientos de la interface */
const PersonaInterface: PersonaInterface = {
  name: "Nombre",
  edad: 24,
  dni: 12345678,
};

/* aquí se extiende de forma directa de PersonaInterface */
interface AlumnoInterface extends PersonaInterface {
  curso: string;
}

/* aquí se tiene que colocar tal cual nos pide tanto AlumnoInterface y su extensión de PersonaInterface porque sino nos dará un error. INTENTAR COMENTANDO ALGUNA PROPIEDAD, RECORDAR QUE dni ES OPCIONAL */
const AlumnoInterface: AlumnoInterface = {
  name: "Nombre",
  edad: 24,
  dni: 12345678,
  curso: "Curso",
};
