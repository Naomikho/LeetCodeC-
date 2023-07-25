/*
In order to achieve a target sum, two numbers are needed. 
Hence we KNOW what is the other pair value that is needed to achieve the sum based on the current value. 
Using this knowledge, we can do this check for every number in the array, but the next problem is finding its pair value. 
How do we do that? This is achieved by creating a lookup object that uses the pair value as the key(NOT ITS INDEX) and store its index as the value. 
By using the pair value as the key, we can query the lookup object using the pair value to check whether it exists. 
If it exists, then we can just return the current index plus the index of the pair value. Otherwise, it will just keep looping and repeat the same process. 
In Javascript, we can only use a lookup object, so we use the hasOwnProperty() function to check whether it has that property.
*/
function twoSum(nums: number[], target: number): number[] {
    let lookup = {};
    for (let i:number = 0; i < nums.length; i++)
    {
        const lookfor = target - nums[i];
        if (!lookup.hasOwnProperty(lookfor))
        {
            lookup[nums[i]] = i;
        }
        else 
        {
            return [lookup[lookfor], i];
        }
    }
};
