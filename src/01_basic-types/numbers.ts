/* se coloca este export {}; para que este archivo sea como un módulo, ya que un módulo en TypeScript generalmente se define con export alrededor de funciones, clases, variables, etc., que queremos hacer accesibles desde otros archivos, pero como en este caso son funciones autoinvocadas entonces solo se pondrá un export vacío usando export {}; al inicio de cada archivo, ya que con eso para typescript cada archivo sería un modulo independiente */
export {};

(() => {
  let avengers: number = 10;
  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log("Estamos en problemas");
  } else {
    console.log("Nos salvamos");
  }

  avengers = Number("55A"); // sería un NaN, se tendría que hacer validaciones para ver si es un número o no lo que está dentro de Number()
  console.log({ avengers });
})();
