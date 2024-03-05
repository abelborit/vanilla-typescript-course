/* se coloca este export {}; para que este archivo sea como un módulo, ya que un módulo en TypeScript generalmente se define con export alrededor de funciones, clases, variables, etc., que queremos hacer accesibles desde otros archivos, pero como en este caso son funciones autoinvocadas entonces solo se pondrá un export vacío usando export {}; al inicio de cada archivo, ya que con eso para typescript cada archivo sería un modulo independiente */
export {};

(() => {
  const batman: string = "Batman";
  // const linternaVerde: string = 'Linterna Verde';
  const volcanNegro: string = `Héroe: Volcan Negro`;

  /* para ver cómo transpila de .ts a .js usando caracteres especiales como la tilde según las comillas que tenga */
  let palabra: string = "Parábola";
  let palabra2: string = `Parábola`;
  // let palabra3: string = 'Parábola';

  console.log(`I'm ${batman}`);
  console.log(batman.toUpperCase());
  console.log(
    batman[10]?.toUpperCase() || "No está presente esa cantidad de caracteres"
  );
})();
