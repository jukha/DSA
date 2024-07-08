function lengthOfLongestSubstring(s: string): number {
  // if (s.length === 0) return 0;

  const seen = new Map();

  let maxLen = 0;
  let r = 0;
  let l = 0;

  for (r = 0; r < s.length; r++) {
    const idx = seen.has(s[r]) ? seen.get(s[r]) : -1;
    if (idx !== -1 && idx >= l) {
      maxLen = Math.max(maxLen, r - l);
      l = seen.get(s[r]) + 1;
    }             

    seen.set(s[r], r);
  }


  maxLen = Math.max(maxLen, r - l);
  return maxLen;
}

let s = "bbbbb";

s = "pwwkew";

s = "dvdf";

s = "abba";
s ="a";
// s = "abca";

// s = "abcabcbb";
//
// s = "cdd";
//
// s = "aaa";
//
// s = "aab";

let res = lengthOfLongestSubstring(s);

console.log(res);

export {};
