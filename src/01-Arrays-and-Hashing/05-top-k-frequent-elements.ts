class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      let currentCount = map.get(nums[i]) || 0;
      map.set(nums[i], currentCount + 1);
    }

    let frequencyArr: [number, number][] = [];
    map.forEach((value, key) => {
      frequencyArr.push([value, key]);
    });

    frequencyArr.sort((a, b) => b[0] - a[0]);

    let kFrequentEls: number[] = [];

    for (let i = 0; i < k; i++) {
      kFrequentEls.push(frequencyArr[i][1]);
    }

    return kFrequentEls;
  }
}

export {};
