public class Solution {
    public bool IsPalindrome(string s) {
        if (s == null || s == string.Empty)
            return false;
        
        int i = 0,
            j = s.Length - 1;
        
        s = s.ToLower();
        
        while (i < j)
        {
            while (i < j && (s[i] < 'a' || s[i] > 'z') && (s[i] < '0' || s[i] > '9'))
                   i++;
                   
            while (i < j && (s[j] < 'a' || s[j] > 'z') && (s[j] < '0' || s[j] > '9'))
                   j--;
            if (s[i] != s[j])
                   return false;
                   
            i++;
            j--;
        }
        
        return true;
    }
}
