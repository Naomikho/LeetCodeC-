public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        Dictionary<int,int> freq = new Dictionary<int,int>();
        for (int i = 0; i < nums.Length; i++)
        {
            if (!freq.ContainsKey(nums[i])) freq.Add(nums[i], 1);
            else return true;
        }
        
        return false;
    }
}
