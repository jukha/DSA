class Solution {
  twoSum(nums: number[], target: number): number[] {
    const idxMap = new Map();
    const targetIndices: number[] = [];

    for (let i = 0; i < nums.length; i++) {
      const otherNo = target - nums[i];
      if (idxMap.has(otherNo)) {
        targetIndices.push(i, idxMap.get(otherNo));
        return targetIndices;
      } else idxMap.set(nums[i], i);
    }

    return targetIndices;
  }
}

export {};
