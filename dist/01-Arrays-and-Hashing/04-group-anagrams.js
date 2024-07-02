class Solution {
    arrayToString(arr) {
        return JSON.stringify(arr);
    }
    groupAnagrams(strs) {
        const res = new Map();
        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0);
            for (let j = 0; j < strs[i].length; j++) {
                const c = strs[i][j];
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            if (res.has(this.arrayToString(count))) {
                const val = res.get(this.arrayToString(count));
                res.set(this.arrayToString(count), [...val, strs[i]]);
            }
            else {
                res.set(this.arrayToString(count), [strs[i]]);
            }
        }
        let finalRes = [];
        for (const a of res) {
            finalRes.push(a[1]);
        }
        return finalRes;
    }
}
export {};
