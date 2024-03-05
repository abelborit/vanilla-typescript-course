/* se coloca este export {}; para que este archivo sea como un módulo, ya que un módulo en TypeScript generalmente se define con export alrededor de funciones, clases, variables, etc., que queremos hacer accesibles desde otros archivos, pero como en este caso son funciones autoinvocadas entonces solo se pondrá un export vacío usando export {}; al inicio de cada archivo, ya que con eso para typescript cada archivo sería un modulo independiente */
export {};

(() => {
  let isSuperman: boolean = false;
  let isBatman: boolean = true;

  isSuperman = isBatman ? false : true;
  isBatman = isSuperman ? false : true;

  console.log({ isSuperman });
  console.log({ isBatman });
})();
