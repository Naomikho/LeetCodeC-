public class Solution {
    public bool IsPalindrome(string s) {
        if (s == " ") return true;
        List<char> palindrome = new List<char>();
        for (int i = 0; i < s.Length; i++)
        {
            if (Char.IsLetter(s[i]) || Char.IsNumber(s[i]))
            {
                palindrome.Add(Char.ToLower(s[i]));
            }
        }
        
        if (palindrome.Count() == 1) return true;
        
        for (int i = 0; i < palindrome.Count(); i++)
        {
            if (palindrome[i] != palindrome[palindrome.Count() - 1 - i]) return false;
        }
        
        return true;
    }
}
