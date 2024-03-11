"use strict";
/* DATO CURIOSO: en los genéricos se suele utilizar T por la palabra Template como se utilizaba en C++. Igual se puede utilizar cualquier letra o palabra solo que usar T es un estandar */
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericFunctionArrow = exports.genericFunction = exports.printObject = void 0;
var printObject = function (argument) {
    return argument;
};
exports.printObject = printObject;
function genericFunction(argument) {
    return argument;
}
exports.genericFunction = genericFunction;
/* Generic Arrow Functions: https://www.carlrippon.com/generic-arrow-functions/ */
var genericFunctionArrow = function (argument) { return argument; };
exports.genericFunctionArrow = genericFunctionArrow;
console.log("printObject", (0, exports.printObject)(123));
console.log("printObject", (0, exports.printObject)("123"));
console.log("printObject", (0, exports.printObject)(new Date()));
console.log("printObject", (0, exports.printObject)({ a: 1, b: 2 }));
console.log("printObject", (0, exports.printObject)([1, 2, 3, 4, 5]));
console.log("*********************************************");
console.log("genericFunction", genericFunction(123));
console.log("genericFunction", genericFunction("123"));
console.log("genericFunction", genericFunction(new Date()));
console.log("genericFunction", genericFunction({ a: 1, b: 2 }));
console.log("genericFunction", genericFunction([1, 2, 3, 4, 5]));
console.log("*********************************************");
console.log("genericFunctionArrow", (0, exports.genericFunctionArrow)(123));
console.log("genericFunctionArrow", (0, exports.genericFunctionArrow)("123"));
console.log("genericFunctionArrow", (0, exports.genericFunctionArrow)(new Date()));
console.log("genericFunctionArrow", (0, exports.genericFunctionArrow)({ a: 1, b: 2 }));
console.log("genericFunctionArrow", (0, exports.genericFunctionArrow)([1, 2, 3, 4, 5]));
