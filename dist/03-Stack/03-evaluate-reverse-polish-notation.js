"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function evalRPN(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const currentChar = tokens[i];
        if (currentChar === "+") {
            const x = Number(stack.pop());
            const y = Number(stack.pop());
            stack.push(x + y);
        }
        else if (currentChar === "-") {
            const x = Number(stack.pop());
            const y = Number(stack.pop());
            stack.push(y - x);
        }
        else if (currentChar === "/") {
            const x = Number(stack.pop());
            const y = Number(stack.pop());
            stack.push(Math.trunc(y / x));
        }
        else if (currentChar === "*") {
            const x = Number(stack.pop());
            const y = Number(stack.pop());
            stack.push(x * y);
        }
        else
            stack.push(currentChar);
    }
    return stack.pop();
}
let tokens = ["2", "1", "+", "3", "*"];
// tokens = ["4", "13", "5", "/", "+"];
// tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
// tokens = ["18"];
// tokens = ["4", "-2", "/", "2", "-3", "-", "-"];
tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
let res = evalRPN(tokens);
console.log(res);
