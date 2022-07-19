public class Solution {
    public bool IsAnagram(string s, string t) {
        
        if (s.Length != t.Length) return false;
        
        Dictionary<char, int> freq1 = new Dictionary<char,int>();
        Dictionary<char, int> freq2 = new Dictionary<char,int>();

        for (int i = 0; i < s.Length; i++)
        {
            if (freq1.ContainsKey(s[i]))freq1[s[i]]++;
            else freq1.Add(s[i],1);
            if (freq2.ContainsKey(t[i]))freq2[t[i]]++;
            else freq2.Add(t[i],1);
        }
        
        
        foreach(KeyValuePair<char, int> entry in freq1)
        {
            //check against each other
            if (!freq2.ContainsKey(entry.Key)) return false;
            if (entry.Value != freq2[entry.Key]) return false;
        }
        
        return true;
    }
    
}
