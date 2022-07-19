public class Solution {
    public int MaxProfit(int[] prices) {
        //what the algorithm wants is only the biggest gap we can obtain from the buying and selling price
        //hence whenever there is a new lowest buying price, we can store that as min instead
        //because even if the calculation proceeds, if there is no new larger gap, the last recorded gap will not be updated.
        int min = prices[0]; 
        int profit = 0;
        
        for (int i = 1; i < prices.Length; i++) {
            min = Math.Min(min, prices[i]);
            profit = Math.Max(profit, prices[i] - min);
        }
        
        return profit;
    }
}
