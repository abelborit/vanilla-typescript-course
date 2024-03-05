/* se coloca este export {}; para que este archivo sea como un módulo, ya que un módulo en TypeScript generalmente se define con export alrededor de funciones, clases, variables, etc., que queremos hacer accesibles desde otros archivos, pero como en este caso son funciones autoinvocadas entonces solo se pondrá un export vacío usando export {}; al inicio de cada archivo, ya que con eso para typescript cada archivo sería un modulo independiente */
export {};

(() => {
  /* El operador void especifica una expresión que se evalúa sin devolver un valor y ¿En qué se diferencia void y undefined? La diferencia es que se puede sobreescribir o asignar un nuevo valor a undefined, mientras que void será vacío en tiempo de ejecución y compilación. En TypeScript, una función que no devuelve un valor, en realidad devuelve undefined */
  function callBatman(): void {
    return;
  }

  const callSuperman = (): void => {
    return;
  };

  const a = callBatman();
  console.log(a);

  const b = callSuperman();
  console.log(b);

  /* aquí veremos que en la consola igual se verá el valor de true aunque le hayamos colocado el tipo de void, porque básicamente estamos escribiendo en TypeScript lo cual nos ayudará a poder encontrar errores mientras vamos programando pero una vez transpilado a JavaScript entonces se pierde la parte del tipado y por eso en la consola del navegador se puede ver el true aunque aquí en el código nos de un error */
  const errorTypeScriptButNoJavaScript = (): void => {
    return true;
  };
  const errorTSButNoJS = errorTypeScriptButNoJavaScript();
  console.log(errorTSButNoJS);
})();
