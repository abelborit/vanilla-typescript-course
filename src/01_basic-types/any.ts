/* se coloca este export {}; para que este archivo sea como un módulo, ya que un módulo en TypeScript generalmente se define con export alrededor de funciones, clases, variables, etc., que queremos hacer accesibles desde otros archivos, pero como en este caso son funciones autoinvocadas entonces solo se pondrá un export vacío usando export {}; al inicio de cada archivo, ya que con eso para typescript cada archivo sería un modulo independiente */
export {};

(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Dr Strange";
  // console.log( avenger.charAt(0) );
  /* FORMA 1 de hacer un casteo: que lo trate como un tipo de dato colocando "as", en este caso como string. Con la finalidad de tener facilidades al programar, como utilizar su intellisense */
  console.log((avenger as string).charAt(0));

  avenger = 150.23256415;
  /* FORMA 2 de hacer un casteo: que lo trate como un tipo de dato colocando <tipo_dato>, en este caso como number. Con la finalidad de tener facilidades al programar, como utilizar su intellisense */
  console.log((<number>avenger).toFixed(2)); // usando paréntesis que es igual que abajo
  console.log(<number>avenger.toFixed(2)); // sin usar paréntesis que es igual que arriba

  console.log(exists); // sería undefined porque no tiene un valor
  console.log(power); // sería undefined porque no tiene un valor
})();
