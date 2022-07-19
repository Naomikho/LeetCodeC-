public class Solution {
    public bool IsValid(string s) {
        Stack<char> stack = new Stack<char>();
        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] == '(' || s[i] == '[' || s[i] == '{') stack.Push(s[i]);
            else if (s[i] == ')' || s[i] == ']' || s[i] == '}')
            {
                if (stack.Count != 0)
                {
                    switch (s[i])
                    {
                        case ')':
                            {
                                if(stack.Peek() == '(') stack.Pop();
                                else return false;
                                break;
                            }
                        case ']':
                            {
                                if(stack.Peek() == '[') stack.Pop();
                                else return false;
                                break;
                            }
                        case '}':
                            {
                                if(stack.Peek() == '{') stack.Pop();
                                else return false;
                                break;
                            }
                    }
                }
                else return false;
            }
        }
        
        
        if (stack.Count == 0) return true;
        else return false;
    }
}
