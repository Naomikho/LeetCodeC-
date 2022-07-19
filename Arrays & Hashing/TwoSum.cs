/*
In order to achieve a target sum, two numbers are needed. 
Hence we KNOW what is the other pair value that is needed to achieve the sum based on the current value. 
Using this knowledge, we can do this check for every number in the array, but the next problem is finding its pair value. 
How do we do that? This is achieved by creating a HashMap or Dictionary that uses the pair value as the key(NOT ITS INDEX) and store its index as the value. 
By using the pair value as the key, we can query the dictionary using the pair value to check whether it exists. 
If it exists, then we can just return the current index plus the index of the pair value. Otherwise, it will just keep looping and repeat the same process. 
Oh, and it’s def possible for multiple same values to appear, but a Dictionary cannot hold duplicate values, so whenever it goes to the storing process, 
we have to check whether this pair value already exists in the Dictionary. 
*/
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
