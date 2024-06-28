class Solution {
  isValid(s: string): boolean {
    let stack = [];
    const openClose = new Map();
    openClose.set(")", "(");
    openClose.set("]", "[");
    openClose.set("}", "{");

    // ([{}])
    for (let i = 0; i < s.length; i++) {
      if (openClose.has(s[i])) {
        let pop = stack.pop();
        if (pop !== openClose.get(s[i])) return false;
      } else {
        stack.push(s[i]);
      }
    }
    if (stack.length) return false;
    return true;
  }
}

let sol = new Solution();

let s = ")";

let res = sol.isValid(s);

console.log(res);

export {}