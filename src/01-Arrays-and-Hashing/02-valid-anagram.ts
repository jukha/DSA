class Solution {
  isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
      if (sMap.get(s[i])) {
        let prevCount = sMap.get(s[i]);
        sMap.set(s[i], ++prevCount);
      } else {
        sMap.set(s[i], 1);
      }
      if (tMap.get(t[i])) {
        let prevCount = tMap.get(t[i]);
        tMap.set(t[i], ++prevCount);
      } else {
        tMap.set(t[i], 1);
      }
    }

    for (let i = 0; i < s.length; i++) {
      const currentCharCountInS = sMap.get(s[i]);
      const currentCharCountInT = tMap.get(s[i]);

      if (currentCharCountInS !== currentCharCountInT) return false;
    }

    return true;
  }
}

export {};
