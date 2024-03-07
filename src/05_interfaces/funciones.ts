(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  /* La razón por la que TypeScript no está marcando un error en este caso es debido a la forma en que TypeScript maneja la asignación de funciones a variables con tipos de interfaz. En este caso, se está asignando una función que no toma argumentos y devuelve un número a una variable que se supone que debe ser una función que toma dos números y devuelve un número. TypeScript permite esto porque la función que se está asignando (() => 10) es un subtipo de la interfaz addTwoNumbers. En otras palabras, la función asignada es una versión más "restringida" de la interfaz, ya que no toma ningún argumento. */
  // addNumbersFunction = () => 10;
  // console.log(addNumbersFunction(5, 2));

  addNumbersFunction = (a: number, b: number) => {
    return a + b;
  };
  console.log(addNumbersFunction(5, 2));
})();

(() => {
  /* La razón por la que TypeScript no está marcando un error en este caso es debido a la forma en que TypeScript maneja la asignación de funciones a variables con tipos de interfaz. En este caso, se está asignando una función que no toma argumentos y devuelve un número a una variable que se supone que debe ser una función que toma dos números y devuelve un número. TypeScript permite esto porque la función que se está asignando (() => 10) es un subtipo de la interfaz addTwoNumbers. En otras palabras, la función asignada es una versión más "restringida" de la interfaz, ya que no toma ningún argumento. */
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  const addNumbersFunction: addTwoNumbers = () => 10;
  console.log(addNumbersFunction(5, 2));
})();

(() => {
  //las interfaces para las funciones muy pocas veces se usan porque normalmente siempre definimos a la funcion desde que se crea sin embargo si en algun momento necesitas definir una intefaz para una funcion, eso se hace de esta manera:
  //1.- se hace igual que cuando defines una interfaz normal, solo que no le pones el nombre a la funcion, ya que ese nombre se lo pones al memento de implementar dicha interfaz

  //Esta es la interfaz para una funcion
  interface IOperation {
    (num1: number, num2: number): number;
  }

  /**************
   * Interfaces *
   **************/
  interface ISuma extends IOperation {}
  interface IResta extends IOperation {}
  interface IMultiplicacion extends IOperation {}
  interface IDivision extends IOperation {}

  const sumar: ISuma = (n1: number, n2: number): number => n1 + n2;
  const restar: IResta = (n1: number, n2: number) => n1 - n2;
  const multiplicar: IMultiplicacion = function (n1: number, n2: number) {
    return n1 * n2;
  };
  const dividir: IDivision = (n1: number, n2: number) => n1 / n2;

  //Aqui usamos las funciones definidas de arriba
  let operations: IOperation[] = [sumar, restar, multiplicar, dividir];

  const numero1: number = 20;
  const numero2: number = 10;

  /* también al colocar estas funciones se puede mandar a llamar antes de crear la función. Sería preferible hacerlo con función flecha para que se tenga que crear y luego recién llamar siguiendo un orden */
  // ejecutarFunciones(operations, numero1, numero2);
  function ejecutarFunciones(
    arrayFunctions: IOperation[],
    num1: number,
    num2: number
  ) {
    arrayFunctions.forEach((element) =>
      console.log(
        `Aplicando la funcion "${
          element.name
        }" a los numeros ${num1} y ${num2} obtenemos este resultado: ${element(
          num1,
          num2
        )}`
      )
    );
  }

  ejecutarFunciones(operations, numero1, numero2);
})();
