class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */

  productExceptSelf(nums: number[]): number[] {
    // 1) By divide operator
    let answer: number[] = [];

    let wholeProduct = 1;

    let zeroCount = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) zeroCount++;
      wholeProduct *= nums[i];
    }

    if (zeroCount === 1) {
      wholeProduct = 1;
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) wholeProduct *= nums[i];
      }
    }

    for (let i = 0; i < nums.length; i++) {
      if (zeroCount === 1) {
        if (nums[i] == 0) answer.push(wholeProduct);
        else answer.push(0);
      } else {
        if (nums[i] === 0) answer.push(0);
        else answer.push(wholeProduct / nums[i]);
      }
    }
    return answer;
  }

  prefixPostfixArray(nums: number[]): number[] {
    let answer: number[] = [];
    let prefixArr: number[] = new Array(nums.length);
    let postfixArr: number[] = new Array(nums.length);

    // Populate prefix array
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) prefixArr[i] = nums[i];
      else {
        const currElement = prefixArr[i - 1];
        prefixArr[i] = currElement * nums[i];
      }
    }

    // Populate postfix array
    for (let i = nums.length - 1; i >= 0; i--) {
      i;
      if (i === nums.length - 1) postfixArr[i] = nums[i];
      else {
        const currElement = postfixArr[i + 1];
        postfixArr[i] = currElement * nums[i];
      }
    }

    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        answer.push(1 * postfixArr[i + 1]);
      } else if (i === nums.length - 1) {
        answer.push(1 * prefixArr[i - 1]);
      } else {
        answer.push(prefixArr[i - 1] * postfixArr[i + 1]);
      }
    }

    answer;

    return answer;
  }

  optimalSolution(nums: number[]): number[] {
    let answer: number[] = [];

    let prefix = 1;
    let postfix = 1;

    // 1st Pass: Calculate prefix
    answer.push(prefix);
    for (let i = 0; i < nums.length - 1; i++) {
      prefix *= nums[i];
      answer.push(prefix);
    }

    // 2nd Pass: Calculate postfix
    const lastIndex = nums.length - 1;
    const secondLastIndex = nums.length - 2;

    postfix *= nums[lastIndex];

    for (let i = secondLastIndex; i >= 0; i--) {
      answer[i] = answer[i] * postfix;
      postfix *= nums[i];
    }

    return answer;
  }
}

const s = new Solution();

/*
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/

let nums = [1, 2, 3, 4];

nums = [-1, 1, 0, -3, 3];

nums = [-1, 0, 1, 2, 3];

nums = [2, 3, 5, 0];

const res = s.optimalSolution(nums);

console.log(res);

export {};
