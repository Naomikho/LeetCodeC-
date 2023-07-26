function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isEven = s.length % 2 == 0;

    let p1 = 0;
    let p2 = s.length - 1;

    let s1 = "";
    let s2 = "";

    if (isEven)
    {
        while (p1 - p2 != 1)
        {
            s1 += s[p1];
            s2 += s[p2];
            p1++; p2--;
        }
    }
    else 
    {
        while (p1 != p2)
        {
            s1 += s[p1];
            s2 += s[p2];
            p1++; p2--;
        }
    }
    if (s1 === s2) return true;

    return false;
};
