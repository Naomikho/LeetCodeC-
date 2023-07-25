function containsDuplicate(nums: number[]): boolean {
    let charCount = {};

    for (let i: number = 0; i < nums.length; i++) {
        charCount.hasOwnProperty(nums[i])?charCount[nums[i]]++:charCount[nums[i]] = 1;
        if (charCount[nums[i]] > 1) return true;
    }

    return false;
};
