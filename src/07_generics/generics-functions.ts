/* DATO CURIOSO: en los genéricos se suele utilizar T por la palabra Template como se utilizaba en C++. Igual se puede utilizar cualquier letra o palabra solo que usar T es un estandar */

export const printObject = (argument: any) => {
  return argument;
};

export function genericFunction<T>(argument: T): T {
  return argument;
}

/* Generic Arrow Functions: https://www.carlrippon.com/generic-arrow-functions/ */
export const genericFunctionArrow = <T>(argument: T): T => argument;

console.log("printObject", printObject(123));
console.log("printObject", printObject("123"));
console.log("printObject", printObject(new Date()));
console.log("printObject", printObject({ a: 1, b: 2 }));
console.log("printObject", printObject([1, 2, 3, 4, 5]));
console.log("*********************************************");

console.log("genericFunction", genericFunction<number>(123));
console.log("genericFunction", genericFunction("123"));
console.log("genericFunction", genericFunction(new Date()));
console.log("genericFunction", genericFunction({ a: 1, b: 2 }));
console.log("genericFunction", genericFunction([1, 2, 3, 4, 5]));
console.log("*********************************************");

console.log("genericFunctionArrow", genericFunctionArrow(123));
console.log("genericFunctionArrow", genericFunctionArrow("123"));
console.log("genericFunctionArrow", genericFunctionArrow(new Date()));
console.log("genericFunctionArrow", genericFunctionArrow({ a: 1, b: 2 }));
console.log("genericFunctionArrow", genericFunctionArrow([1, 2, 3, 4, 5]));
