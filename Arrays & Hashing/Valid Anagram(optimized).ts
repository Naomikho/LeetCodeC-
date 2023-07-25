function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (let i = 0; i < s.length; i++) {
        charCount.hasOwnProperty(s[i]) ? charCount[s[i]]++ : (charCount[s[i]] = 1);
        charCount.hasOwnProperty(t[i]) ? charCount[t[i]]-- : (charCount[t[i]] = -1);
    }

    for (const key in charCount) {
        if (charCount[key] !== 0) return false;
    }

    return true;
}
