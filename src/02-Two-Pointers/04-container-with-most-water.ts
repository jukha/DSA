class Solution {
  maxArea(height: number[]): number {
    // heights.sort((a, b) => a -)
    let maxAmount: number = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
      let area = (right - left) * Math.min(height[left], height[right]);
      maxAmount = Math.max(maxAmount, area);

      if (height[left] > height[right]) right--;
      else left++;
    }

    return maxAmount;
  }

  bruteForce(heights: number[]): number {
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
      for (let j = i + 1; j < heights.length; j++) {
        let area = (j - i) * Math.min(heights[i], heights[j]);
        res = Math.max(res, Math.abs(area));
      }
    }
    return res;
  }
}

const s = new Solution();

let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// heights = [1, 7, 2, 5, 4, 7, 3, 6];

// heights = [1, 1];

// heights = [2, 2, 2];

heights = [1, 7, 2, 5, 12, 3, 500, 500, 7, 8, 4, 7, 3, 6];

let maxAmount = s.maxArea(heights);

maxAmount = s.bruteForce(heights);

console.log(maxAmount);
