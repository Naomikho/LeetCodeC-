function isAnagram(s: string, t: string): boolean {
    let sCharCount = {};
    let tCharCount = {};

    if (s.length != t.length) return false;
    for (let i:number = 0; i < s.length; i++)
    {
        sCharCount.hasOwnProperty(s[i])?sCharCount[s[i]]++:sCharCount[s[i]] = 1;
        tCharCount.hasOwnProperty(t[i])?tCharCount[t[i]]++:tCharCount[t[i]] = 1;
    }
    
    if (Object.keys(sCharCount).length != Object.keys(tCharCount).length) return false;

    for (const key in sCharCount)
    {
        if (tCharCount[key] === undefined) return false;
        if (sCharCount[key] != tCharCount[key]) return false;
    }

    return true;
};
