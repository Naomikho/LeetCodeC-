/*
The thinking behind this solution is by knowing whether it is possibel to get an even better profit in the future. Hence, what we need to do is keep the current best profit.
Firstly, we want to buy whichever that is the cheapest, but we also don't want to forgo what we bought if it's not possible to gain better profit. This is why the current highest profit is kept, and we only need to use
one variable to keep the current lowest price.
The next point is how to determine whether it is plausible to gain profit. Namely, you will gain profit when your selling price is higher than your latest buying price. But you also need to know whether this selling price
nets you more profit than you previously can obtain(otherwise how would you get more profit?), which is why we check prices[i] - low > profit. If yes, we overwrite the latest selling price. 
*/
function maxProfit(prices: number[]): number {
  let low = prices[0];
  let high = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++)
  {
      if (prices[i] < low) {
          low = prices[i];
      }
      else if (prices[i] > low && prices[i] - low > profit) {
          high = prices[i];
          profit = high - low;
      }
  }

  return profit;
};
