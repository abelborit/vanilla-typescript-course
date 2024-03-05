/* se coloca este export {}; para que este archivo sea como un módulo, ya que un módulo en TypeScript generalmente se define con export alrededor de funciones, clases, variables, etc., que queremos hacer accesibles desde otros archivos, pero como en este caso son funciones autoinvocadas entonces solo se pondrá un export vacío usando export {}; al inicio de cada archivo, ya que con eso para typescript cada archivo sería un modulo independiente */
export {};

(() => {
  // strictNullChecks
  let nada: undefined = undefined;
  console.log(nada);

  let isActive: boolean | null = null;
  console.log(isActive);
})();

/* ************************************************************************************************************************ */
/* ¿Cuál es la diferencia tecnica o como se explicaría la diferencia entre null y undefined? */
/* 
Es parecido, pero definitivamente no es igual:
  - Cuando definimos una variable null, estamos tratando de transmitir que la variable esta vacía.
  - Mientras que cuando usamos undefined significa que la variable no existe para el compilador.
*/
