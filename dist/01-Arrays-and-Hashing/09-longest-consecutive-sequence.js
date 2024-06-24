"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Solution {
    longestConsecutive(nums) {
        const onlyZerosInArray = nums.filter((value) => Boolean(value)).length === 0;
        if (nums.length === 1)
            return 1;
        if (nums.length === 0)
            return 0;
        if (onlyZerosInArray)
            return 1;
        let sequenceCount = 0;
        const seen = new Map();
        const uniqueElsArr = [];
        const sequencesCountArr = [];
        // Remove duplicates
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i]))
                continue;
            else {
                seen.set(nums[i], 1);
                uniqueElsArr.push(nums[i]);
            }
        }
        // Sort Unique Array
        uniqueElsArr.sort((a, b) => a - b);
        for (let i = 0; i < uniqueElsArr.length - 1; i++) {
            const nextElement = uniqueElsArr[i] + 1;
            if (seen.has(nextElement)) {
                sequenceCount++;
            }
            else {
                sequencesCountArr.push(sequenceCount);
                sequenceCount = 0;
            }
        }
        sequencesCountArr.push(sequenceCount);
        sequencesCountArr.sort((a, b) => a - b);
        sequenceCount = sequencesCountArr[sequencesCountArr.length - 1];
        // if (sequenceCount) sequenceCount++;
        return ++sequenceCount;
    }
    optimalSolution(nums) {
        const seen = new Set(nums);
        let longestSequence = 0;
        for (let i = 0; i < nums.length; i++) {
            if (!seen.has(nums[i] - 1)) {
                let length = 1;
                while (seen.has(nums[i] + length)) {
                    length++;
                }
                longestSequence = Math.max(length, longestSequence);
            }
        }
        return longestSequence;
    }
}
const s = new Solution();
let nums = [0, 3, 2, 5, 4, 6, 1, 1];
nums = [2, 20, 4, 10, 3, 4, 5];
nums = [100, 4, 200, 1, 3, 2];
nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
nums = [
    -4, -1, 4, -5, 1, -6, 9, -6, 0, 2, 2, 7, 0, 9, -3, 8, 9, -2, -6, 5, 0, 3, 4,
    -2,
];
nums = [3, 1, 2];
nums = [0];
const res = s.longestConsecutive(nums);
const r = s.optimalSolution(nums);
console.log(r);
