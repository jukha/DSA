"use strict";
class Solution {
    trap(height) {
        let maxArea = 0;
        let maxLeft = new Array(height.length);
        let maxRight = new Array(height.length);
        let minLeftRight = [];
        let maxLeftVal = 0;
        let maxRightVal = 0;
        for (let i = 0; i < height.length; i++) {
            if (i === 0) {
                maxLeft[i] = 0;
            }
            else {
                maxLeftVal = Math.max(maxLeftVal, height[i - 1]);
                maxLeft[i] = maxLeftVal;
            }
        }
        for (let i = height.length - 1; i >= 0; i--) {
            if (i === height.length - 1) {
                maxRight[i] = 0;
            }
            else {
                maxRightVal = Math.max(maxRightVal, height[i + 1]);
                maxRight[i] = maxRightVal;
            }
        }
        for (let i = 0; i < height.length; i++) {
            const value = Math.min(maxLeft[i], maxRight[i]);
            minLeftRight.push(value);
        }
        for (let i = 0; i < height.length; i++) {
            let temp = minLeftRight[i] - height[i];
            if (temp > 0)
                maxArea += temp;
        }
        return maxArea;
    }
}
const s = new Solution();
let height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
// Output: 9
height = [2, 0, 0, 0, 2];
height = [2, 1, 0, 0];
height = [4, 2, 0, 3, 2, 5];
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let res = s.trap(height);
console.log(res);
// export {};
