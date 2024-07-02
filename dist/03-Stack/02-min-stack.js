class MinStack {
    constructor() {
        this.stack = [];
        this.stackMin = [];
    }
    push(val) {
        if (this.stack.length === 0) {
            this.stackMin.push(val);
        }
        else {
            const currentMinVal = this.stackMin[this.stackMin.length - 1];
            if (val < currentMinVal) {
                this.stackMin.push(val);
            }
            else
                this.stackMin.push(this.stackMin[this.stackMin.length - 1]);
        }
        this.stack.push(val);
    }
    pop() {
        this.stack.pop();
        this.stackMin.pop();
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.stackMin[this.stackMin.length - 1];
    }
}
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-1);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
console.log(param_3);
console.log(param_4);
export {};
