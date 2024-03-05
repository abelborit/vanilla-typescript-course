/* se coloca este export {}; para que este archivo sea como un módulo, ya que un módulo en TypeScript generalmente se define con export alrededor de funciones, clases, variables, etc., que queremos hacer accesibles desde otros archivos, pero como en este caso son funciones autoinvocadas entonces solo se pondrá un export vacío usando export {}; al inicio de cada archivo, ya que con eso para typescript cada archivo sería un modulo independiente */
export {};

(() => {
  /*  lo que se le está diciendo a la función prácticamente con never es que sea lo que sea que le mandes como parámetro o sea lo que sea que ejecutes dentro de la funcion esta no dejara de ser una función NEVER lo que significa que siempre servirá para comprobar un error. */
  const error = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }

    return 1;
  };

  error("Auxilio!");
  console.log("Hola Mundo"); // ya no llega a este punto porque con never es como que se corta todo
})();

(() => {
  /* cuando se tenga el tipo never es que es una función que habitualmente va a terminar con un error */
  function error(mensaje: string): never {
    throw new Error(mensaje);
  }

  error("Error critico");
})();

/* ************************************************************************************************************************ */
/* TypeScript el tipo never, que indica los valores que nunca ocurrirán. El tipo nunca (never) se usa cuando está seguro de que algo nunca va a ocurrir. Por ejemplo, usted escribe una función que no regresará a su punto final o siempre lanza una excepción. 

El tipo never se usa donde el código que lo usa nunca debe ser accesible. Incluso el compilador de verificación de tiempo de ejecucion puede reconocer estos casos inalcanzables. Al final le estas diciendo a typescript explicitamente que esa funcion nunca (never) regresara algo.

Aunque talves se confunda never con void:
  let miVariable: void = null;
  let nada: never = null; // Error: Type 'null' is not assignable to type 'never'
*/
