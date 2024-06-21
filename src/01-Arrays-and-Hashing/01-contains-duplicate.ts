class Solution {
  hasDuplicate(nums: number[]) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) return true;
      else set.add(nums[i]);
    }
    return false;
  }
}

export {}