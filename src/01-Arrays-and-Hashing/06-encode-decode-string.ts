class Solution {
  delimiter = "#";
  encode(strs: string[]) {
    let encodedString = "";
    for (let i = 0; i < strs.length; i++) {
      encodedString = `${encodedString}${strs[i].length}${this.delimiter}${strs[i]}`;
    }
    return encodedString;
  }

  decode(str: string): string[] {
    let decodedStrsArr: string[] = [];
    let j = 0;
    for (let i = 0; i < str.length; ) {
      let temp = str[j];
      while (temp != "#") {
        j++;
        temp = str[j];
      }
      let length = parseInt(str.slice(i, j));
      let start = j + 1;
      let end = length + j + 1;
      let currentWord = str.slice(start, end);
      decodedStrsArr.push(currentWord);
      i = end;
      j = i;
    }
    return decodedStrsArr;
  }
}

export {};
