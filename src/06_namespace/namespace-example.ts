/* se coloca este export {}; para que este archivo sea como un módulo, ya que un módulo en TypeScript generalmente se define con export alrededor de funciones, clases, variables, etc., que queremos hacer accesibles desde otros archivos, pero como en este caso son funciones autoinvocadas entonces solo se pondrá un export vacío usando export {}; al inicio de cada archivo, ya que con eso para typescript cada archivo sería un modulo independiente */
export {};

/* Un namespace  es algo que no es tan habitual verlo o usarlo, pero un namespace es como un agrupador global de lógica (funciones, variables, clases, etc) que solo lo que exportemos es lo que se podrá utilizar en el exterior y lo que no se exporte quedaría como un código de implementación interna dentro del namespace */
namespace Validations {
  const textExample: string = "textExample";

  export const validateText = (text: string): boolean => {
    console.log(textExample);

    return text.length > 3 ? true : false;
  };

  export const validateDate = (myDate: Date): boolean => {
    // console.log(myDate);
    // console.log(myDate.valueOf());

    /* myDate es de tipo Date y para convertir la fecha a un número se puede usar el metodo .valueOf() que retorna el valor como un tipo de dato numérico, en ese punto ya se puede aplicar el isNaN() para conocer si es false o true */
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText("Fer"));
console.log(Validations.validateText("Fernando"));

console.log(Validations.validateDate(new Date()));

/* ************************************************************************************************************************ */
/* 
La gracia del namespace en TypeScript es agrupar código relacionado de manera lógica. Esto puede ser útil por varias razones:

  - Mejora la legibilidad y la mantenibilidad del código. Cuando el código está organizado de manera lógica, es más fácil entenderlo y mantenerlo.
  - Evita colisiones de nombres. Los namespaces proporcionan un ámbito para el código, lo que ayuda a evitar que los nombres de las variables, funciones, interfaces, etc., colisionen con los nombres de otras partes del código.
  - Permite la reusabilidad del código. El código agrupado en un namespace puede ser reutilizado fácilmente en otros proyectos o partes del proyecto.

Se podría también hacer un archivo helper pero el namespace validation agrupa las funciones relacionadas con la validación. Esto puede ser útil si tienes muchas funciones de validación, ya que te permite organizarlas en un solo lugar. Además, el namespace proporciona un ámbito para estas funciones, lo que ayuda a evitar que colisionen con los nombres de otras funciones.

Por supuesto, no es necesario usar namespaces para agrupar funciones. También puedes crear un archivo helper con funciones de ayuda. Sin embargo, los namespaces pueden ser una mejor opción si tienes muchas funciones relacionadas o si necesitas evitar colisiones de nombres.

En última instancia, la decisión de usar o no namespaces es una decisión de estilo. Sin embargo, si quieres mejorar la legibilidad, la mantenibilidad y la reusabilidad de tu código, los namespaces pueden ser una buena opción.
*/
