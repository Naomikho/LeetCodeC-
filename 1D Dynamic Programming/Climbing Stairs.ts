function climbStairs(n: number): number {
    let x = 1, y = 1;
    
    for (let i = 0; i < n - 1; i++)
    {
        let temp = x;
        x = x + y;
        y = temp;
    }

    return x;
};
