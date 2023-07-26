/*
/: This denotes the start and end of the regular expression pattern.

[^a-zA-Z0-9]: The ^ symbol inside square brackets [] is a negation or "not" symbol. It means that we want to match any character that is NOT listed inside the square brackets.

a-zA-Z0-9: These are character ranges inside the square brackets, representing all the uppercase and lowercase alphabets (a-z, A-Z) and all the digits (0-9). So, a-zA-Z0-9 matches any alphanumeric character.

/g: The g flag stands for "global" and is used to perform a global search. It means that the regular expression will find all matches in the input string, rather than stopping after the first match.
*/

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
