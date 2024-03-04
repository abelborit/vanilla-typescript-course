/* se crea esta interface Curso porque abajo se tendrán los cursos que será un arreglo donde adentro tendrá datos de tipo Curso, es decir que tenga su estructura de tipo Curso */
interface Curso {
  nombre: string;
  duracion: number;
}

interface GentlemanProgramming {
  nombre: string;
  edad: string;
  cursos: Curso[];
}

/* esto es de tipo T que es genérico. Esto nos dice que va a tener un tipo que va a ser asignado al momento de la utilización y de ese tipo va a ser la variable que se meta adentro */
const logger = <T>(variable: T) => {
  console.log(variable);
};
logger<string>("Hola");
logger<number>(2);

interface GenerycType<T> {
  variable: T;
}

const variable: GenerycType<string> = { variable: "Esto es un string" };
const variable2: GenerycType<number> = { variable: 2 };

/* ************************************************************************************************************************ */
/* ********** UNIFICACIÓN DE TIPOS (UNION TYPES) ********** */
interface Persona4 {
  nombre: string;
  edad: number;
}

interface Alumno {
  curso: string;
}

/* aquí por ejemplo hay problemas y salta un error porque lo que se coloque dentro en el objeto tiene que satisfacer por lo menos a alguna interface que se le esté pasando, en este caso al colocar solo nombre entonces no satisface a ninguna interface por ende hay error */
// const alumnoOPersona: Persona | Alumno = {
//   nombre: "nombre",
// };

/* en este caso se añadió curso entonces con esa propiedad ya satisface por lo menos a la interface Alumno y por ende no hay errores */
const alumnoOPersona: Persona4 | Alumno = {
  nombre: "nombre",
  curso: "react",
};

/* en este caso tiene que satisfacer a ambas interfaces sí o sí, porque si no entonces salta un error */
const alumnoOPersona1: Persona4 & Alumno = {
  nombre: "nombre",
  edad: 23,
  curso: "react",
};
