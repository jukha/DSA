"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Solution {
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            let nextNumber = target - numbers[i];
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[j] === nextNumber)
                    return [i + 1, j + 1];
            }
        }
        return [];
    }
    optimalSolution(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        while (left < right) {
            const currentSum = numbers[left] + numbers[right];
            if (currentSum < target) {
                left++;
            }
            if (currentSum > target) {
                right--;
            }
            if (currentSum === target)
                return [left + 1, right + 1];
        }
        return [];
    }
}
const s = new Solution();
let numbers = [2, 7, 11, 15];
let target = 9;
numbers = [2, 3, 4];
target = 6;
numbers = [-1, 0];
target = -1;
// numbers = [1, 2, 3, 4];
// target = 3;
let res = s.twoSum(numbers, target);
res = s.optimalSolution(numbers, target);
console.log(res);
/*
  numbers = [2,7,11,15], target = 9
   [2,3,4]



*/
