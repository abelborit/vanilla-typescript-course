export interface Hero {
  name: string;
  realName: string;
}

export interface Villain {
  name: string;
  dangerLevel: number;
}

export const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

export const genericFunctionArrow = <T>(argument: T): T => argument;

console.log(genericFunctionArrow(deadpool).dangerLevel);
console.log(genericFunctionArrow(deadpool).name);
console.log(genericFunctionArrow(deadpool).realName);
console.log("*********************************************");

/* usando el tipo genérico con la interface de Hero */
console.log(genericFunctionArrow<Hero>(deadpool).name);
console.log(genericFunctionArrow<Hero>(deadpool).realName);
console.log("*********************************************");

/* usando el tipo genérico con la interface de Villain */
console.log(genericFunctionArrow<Villain>(deadpool).name);
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
