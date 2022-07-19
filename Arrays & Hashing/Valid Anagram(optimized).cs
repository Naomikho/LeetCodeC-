public class Solution {
       public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length)
            return false;
        
        //char[] arrays can be sorted. Neat!
        char[] source = s.ToCharArray(), target = t.ToCharArray();
        
        Array.Sort(source);
        Array.Sort(target);
        
        for (int i = 0; i <= source.Length - 1; i++)
            if(source[i] != target[i])
                return false;
        
        return true;
    }
}
