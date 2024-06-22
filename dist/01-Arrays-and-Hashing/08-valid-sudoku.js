"use strict";
class Solution {
    isValidSudoku(board) {
        const boardLength = board.length;
        const rowSet = new Set();
        const colSet = new Set();
        const boxSet = new Set();
        for (let i = 0; i < boardLength; i++) {
            for (let j = 0; j < boardLength; j++) {
                const boxSquareVal = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
                if (boxSquareVal !== ".") {
                    if (boxSet.has(boxSquareVal))
                        return false;
                    else
                        boxSet.add(boxSquareVal);
                }
                if (board[i][j] !== ".") {
                    if (rowSet.has(board[i][j]))
                        return false;
                    else
                        rowSet.add(board[i][j]);
                }
                if (board[j][i] !== ".") {
                    if (colSet.has(board[j][i]))
                        return false;
                    else
                        colSet.add(board[j][i]);
                }
            }
            rowSet.clear();
            colSet.clear();
            boxSet.clear();
        }
        return true;
    }
}
let board = [
    ["1", "", ".", ".", "4", "5", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// board = [
//   [".", ".", ".", ".", "5", ".", ".", "1", "."],
//   [".", "4", ".", "3", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "3", ".", ".", "1"],
//   ["8", ".", ".", ".", ".", ".", ".", "2", "."],
//   [".", ".", "2", ".", "7", ".", ".", ".", "."],
//   [".", "1", "5", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "2", ".", ".", "."],
//   [".", "2", ".", "9", ".", ".", ".", ".", "."],
//   [".", ".", "4", ".", ".", ".", ".", ".", "."],
// ];
const s = new Solution();
const res = s.isValidSudoku(board);
console.log(res);
