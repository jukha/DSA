class Solution {
  isPalindrome(s: string): boolean {
    let sanatizedString = "";

    for (let i = 0; i < s.length; i++) {
      const charCode = s[i].charCodeAt(0);
      const alphabetChar =
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122);
      const numberChar = charCode >= 48 && charCode <= 57;
      if (alphabetChar || numberChar) {
        if (alphabetChar) {
          sanatizedString += s[i].toLowerCase();
        } else {
          sanatizedString += s[i];
        }
      }
    }

    let j = sanatizedString.length - 1;
    for (let i = 0; i < sanatizedString.length; i++) {
      const letterOne = sanatizedString[i];
      const letterTwo = sanatizedString[j];
      if (letterOne !== letterTwo) return false;
      j--;
    }
    return true;
  }

  validChar(char: string): boolean {
    const charCode = char.charCodeAt(0);
    const isValid =
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57);

    return isValid;
  }

  test(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      if (!this.validChar(s[left])) {
        left++;
        continue;
      }

      if (!this.validChar(s[right])) {
        right--;
        continue;
      }

      if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
      else {
        left++;
        right--;
      }
    }
    return true;
  }
}
console.log("?".charCodeAt(0));
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

// 65-122

const sol = new Solution();

let s = "Was it a car or a cat I saw?";

s = "tab a cat";

s = "A man, a plan, a canal: Panama";

s = "race a car";

s = "abc";

console.log("_".charCodeAt(0));

// const res = sol.isPalindrome(s);
const res = sol.test(s);

console.log(res);

// Edge cases

// ?aba

// aba?

//  ?ab?ba?

export {}