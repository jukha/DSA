function maxProfit(prices) {
    let maxProfit = 0;
    let l = 0;
    let r = 1;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];
            maxProfit = Math.max(maxProfit, profit);
        }
        else
            l = r;
        r++;
    }
    return maxProfit;
}
let prices = [7, 5, 3];
let res = maxProfit(prices);
console.log(res);
export {};
