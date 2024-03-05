# Vanilla TypeScript - RxJS Reactive Programming Course

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

1. Primera parte: **Tipos Básicos**

   - ¿Qué son los tipos de datos?
   - Una introducción a los diferentes tipos de datos que existen en TypeScript
   - Booleanos
   - Números
   - Strings
   - Tipo Any
   - Arreglos
   - Tuplas
   - Enumeraciones
   - Retorno void
   - Null
   - Undefined

### \* RECURSOS A USAR:

- TypeScript Documentation: https://www.typescriptlang.org/

### \* NOTAS:

- **¿Qué son los tipos de datos?**

  - TypeScript es un super set de JavaScript, por lo cual todo lo que conocemos de JavaScript es perfectamente aplicable con sus tipos aquí.

    - Los tipos de datos primitivos más comunes son strings números booleanos y todavía el symbol no es tan común, pero es bastante utilizado especialmente en otras tecnologías. El symbol usualmente es usado cuando necesitamos tener dentro de un objeto una propiedad que sea garantizada única, es decir, a pesar de que hayan diferentes objetos que también tienen la misma propiedad, si definimos un símbolo entonces a pesar de que los objetos hayan sido creados exactamente igual, van a tener ese símbolo que apunta a un espacio de memoria diferente.

    - Los tipos de datos compuestos tenemos objetos literales funciones, clases, arreglos y otros.

    - Tenemos también unos tipos especiales como null y undefined, que pueden ser considerados como otro tipo.

      - Usar null es cuando le decimos específicamente que algo es nulo.
      - Usar undefined es cuando no hemos asignado un valor propiamente a alguna propiedad, variable, objeto, etc.

    - TypeScript nos ofrece la posibilidad de crear nuevos tipos, de crear interfaces, de crear datos genéricos, de manejar tuplas, es más, no sólo tuplas que son pares de valores, sino que se pueden poner tres valores, cuatro valores, etc.

- **¿Qué es una función autoinvocada?**

  - Una función autoinvocada es aquella que se llama a sí misma. Esto es común en JavaScript y TypeScript. Algunos de los motivos por los que se usan estas funciones:

    - **Encapsulamiento:** Al envolver todo el código dentro de una función autoinvocada, se está creando un ámbito que limita el acceso a las variables y funciones definidas dentro de la función. Esto puede ser útil para evitar conflictos de nombres o colisiones de variables.

    - **Patrón de módulo:** Las funciones autoinvocadas se utilizan a menudo para implementar el patrón de módulo, que es una forma de organizar el código en unidades independientes y reutilizables. En este caso, la función autoinvocada actúa como el contenedor del módulo, y todo el código del módulo se encuentra dentro de la función.

    - **Inicialización de variables:** Al declarar e inicializar las variables en el interior de una función autoinvocada, estas variables no se vuelven a crear cada vez que se llama a la función. En su lugar, la función autoinvocada se ejecuta una vez para inicializar las variables, y luego se almacena en caché para su uso posterior.

    - **Carga diferida (Lazy loading):** En algunas situaciones, es posible que se desee cargar y ejecutar partes del código solo cuando sea necesario. Las funciones autoinvocadas se pueden utilizar para implementar este comportamiento, ya que solo se ejecutan cuando se llama a la función por primera vez.

  En resumen, las funciones autoinvocadas son útiles para encapsular código, implementar el patrón de módulo, inicializar variables y realizar carga diferida en JavaScript y TypeScript.

- **Para transpilar archivos .ts a .js de forma automática**

  - Para que automáticamente esté viendo los archivos .ts y los transpile a .js hay que usar `npx tsc src/01_basic-types/* --watch` para que mire y esté pendiente de los archivo de una ruta x, en este caso a todos los archivos de la ruta `src/01_basic-types/*`
