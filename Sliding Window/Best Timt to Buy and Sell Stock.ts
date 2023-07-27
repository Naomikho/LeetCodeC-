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
