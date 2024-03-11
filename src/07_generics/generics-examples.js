"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericFunctionArrow = exports.deadpool = void 0;
exports.deadpool = {
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    dangerLevel: 130,
};
var genericFunctionArrow = function (argument) { return argument; };
exports.genericFunctionArrow = genericFunctionArrow;
console.log((0, exports.genericFunctionArrow)(exports.deadpool).dangerLevel);
console.log((0, exports.genericFunctionArrow)(exports.deadpool).name);
console.log((0, exports.genericFunctionArrow)(exports.deadpool).realName);
console.log("*********************************************");
/* usando el tipo genérico con la interface de Hero */
console.log((0, exports.genericFunctionArrow)(exports.deadpool).name);
console.log((0, exports.genericFunctionArrow)(exports.deadpool).realName);
console.log("*********************************************");
/* usando el tipo genérico con la interface de Villain */
console.log((0, exports.genericFunctionArrow)(exports.deadpool).name);
console.log((0, exports.genericFunctionArrow)(exports.deadpool).dangerLevel);
