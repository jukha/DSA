class Solution {
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1])
                continue;
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const threeSum = nums[i] + nums[left] + nums[right];
                if (threeSum > 0)
                    right--;
                else if (threeSum < 0)
                    left++;
                else {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    while (nums[left] === nums[left - 1] && left < right)
                        left++;
                }
            }
        }
        return res;
    }
}
let nums = [-1, 0, 1, 2, -1, -4]; // Output: [[-1,-1,2],[-1,0,1]]
// nums = [0, 1, 1]; // Output: []
// nums = [3, -2, 1, 0];
// nums = [0, 0, 0]; // Output: [[0,0,0]]
nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
const res = new Solution().threeSum(nums);
console.log(res);
export {};
