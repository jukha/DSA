function evalRPN(tokens: string[]): number | string | undefined {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const currentChar = tokens[i];
    if (currentChar === "+") {
      const x: number = Number(stack.pop());
      const y: number = Number(stack.pop());
      stack.push(x + y);
    } else if (currentChar === "-") {
      const x: number = Number(stack.pop());
      const y: number = Number(stack.pop());
      stack.push(y - x);
    } else if (currentChar === "/") {
      const x: number = Number(stack.pop());
      const y: number = Number(stack.pop());
      stack.push(Math.trunc(y / x));
    } else if (currentChar === "*") {
      const x: number = Number(stack.pop());
      const y: number = Number(stack.pop());
      stack.push(x * y);
    } else stack.push(currentChar);
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

export {};
