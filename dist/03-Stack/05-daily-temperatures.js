function dailyTemperatures(temperatures) {
    let result = new Array(temperatures.length);
    for (let i = 0; i < temperatures.length; i++) {
        if (i === temperatures.length - 1)
            result[result.length - 1] = 0;
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                result[i] = j - i;
                break;
            }
            else if (j === temperatures.length - 1 &&
                temperatures[i] >= temperatures[j]) {
                result[i] = 0;
            }
        }
    }
    return result;
}
function optimal(temperatures) {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);
    // debugger;
    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];
        while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
            const popped = stack.pop();
            if (popped) {
                const [stackT, stackIdx] = popped;
                result[stackIdx] = i - stackIdx;
            }
        }
        stack.push([temp, i]);
    }
    return result;
}
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
//
temperatures = [40];
// temperatures = [55, 38, 53, 81, 61, 93, 97, 32, 43, 78];
// temperatures = [34, 80, 80, 80, 34, 80, 80, 80, 34, 34];
temperatures = [34, 80, 80, 80, 34, 80, 80, 80, 34, 34];
temperatures = [34, 80, 80, 80, 34, 80, 80, 80, 34, 34];
// temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
temperatures = [72, 71, 74];
temperatures = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
temperatures = [40, 30, 50, 60];
/*
1,
2,
6,
5,
7
*/
let res = optimal(temperatures);
console.log(res);
export {};
