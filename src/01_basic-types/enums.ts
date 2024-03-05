/* se coloca este export {}; para que este archivo sea como un módulo, ya que un módulo en TypeScript generalmente se define con export alrededor de funciones, clases, variables, etc., que queremos hacer accesibles desde otros archivos, pero como en este caso son funciones autoinvocadas entonces solo se pondrá un export vacío usando export {}; al inicio de cada archivo, ya que con eso para typescript cada archivo sería un modulo independiente */
export {};

(() => {
  /* lo enum nos ayuda mucho a trabajar números como si fueran palabras o variables, puede servir para manejar calificaciones de A, B, C, D, E, F.... y poder utilizarlos para hacer promedios con sus valores, etc. Hay que tener presente que el enum es un objeto, entonces si se coloca dentro de los template literal (``) y cuando se pasa un objeto a un string de esa forma, todos los objetos aparecen como [object Object] entonces hay que colocarlo con el JSON.stringify() o sino como otro argumento del console.log(`primer_argumento`, segundo_argumento) */
  enum AudioLevel {
    min = 1,
    medium, // sería 2 porque si no se coloca explícitamente entonces es el valor seguiente
    max = 10,
  }

  let currentAudio: AudioLevel = AudioLevel.max;

  console.log(currentAudio);
  console.log(AudioLevel); // Cuando se imprime directamente, el console.log lo muestra como un objeto
  console.log(`La variable enum es ${JSON.stringify(AudioLevel)}`);
  console.log(`La variable enum es `, AudioLevel);
})();

/* ************************************************************************************************************************ */

(() => {
  enum OperatorTypes {
    plus = "sumar",
    less = "restar",
    bad = "mala",
  }

  function operationA(
    numberA: number,
    numberB: number,
    receivedOperator: OperatorTypes
  ) {
    if (receivedOperator == OperatorTypes.plus) {
      return numberA + numberB;
    }

    if (receivedOperator == OperatorTypes.less) {
      return numberA - numberB;
    }
  }

  console.log(operationA(3, 2, OperatorTypes.plus) ?? 0);
  console.log(operationA(3, 2, OperatorTypes.less) ?? 0);
  console.log(operationA(3, 2, OperatorTypes.bad) ?? 0);

  function operationB(
    numberA: number,
    numberB: number,
    receivedOperator: OperatorTypes.plus | OperatorTypes.less
  ) {
    if (receivedOperator == OperatorTypes.less) {
      return numberA - numberB;
    }
    if (receivedOperator == OperatorTypes.plus) {
      return numberA + numberB;
    }
  }

  console.log(operationB(5, 3, OperatorTypes.plus));
  console.log(operationB(5, 3, OperatorTypes.less));
})();
