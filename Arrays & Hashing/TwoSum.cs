public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int,int> lookup = new Dictionary<int,int>();
        int[] result = new int[2];
        for (int i = 0; i < nums.Length; i++)
        {
            int lookfor = target - nums[i];
            if (lookup.ContainsKey(lookfor))
            {
                result[0] = i;
                result[1] = lookup[lookfor];
								//optimal: return new[]{i, lookup[lookfor]};
            }
            else
            {
                if(!lookup.ContainsKey(nums[i])) lookup.Add(nums[i], i);
            }
        }
        
        return result; //optimal: return new[]{0,0};
    }
}
