public class Solution {
    public int MaxProfit(int[] prices) {
        int min = prices[0];
        int profit = 0;
        
        for (int i = 1; i < prices.Length; i++) {
            min = Math.Min(min, prices[i]);
            profit = Math.Max(profit, prices[i] - min);
        }
        
        return profit;
    }
}
