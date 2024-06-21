"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // 1) By divide operator
        let answer = [];
        let wholeProduct = 1;
        let zeroCount = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0)
                zeroCount++;
            wholeProduct *= nums[i];
        }
        if (zeroCount === 1) {
            wholeProduct = 1;
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] !== 0)
                    wholeProduct *= nums[i];
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount === 1) {
                if (nums[i] == 0)
                    answer.push(wholeProduct);
                else
                    answer.push(0);
            }
            else {
                if (nums[i] === 0)
                    answer.push(0);
                else
                    answer.push(wholeProduct / nums[i]);
            }
        }
        return answer;
    }
}
