function isValid(s: string): boolean {
    const leftBrackets = ['(', '{', '[']
    const arr = [];

    for (let i = 0; i < s.length; i++) {
        if (leftBrackets.includes(s[i])) {
            arr.push(s[i]);
        }
        else {
            const lastBracket = arr.pop();
            switch (lastBracket) {
                case '(' : 
                {
                    if (s[i] != ')') return false;
                    break;
                }
                case '{' :
                {
                    if (s[i] != '}') return false;
                    break;
                }
                case '[':
                {
                    if (s[i] != ']') return false;
                    break;
                }
                default: 
                {
                    return false;
                }
            }
        }
    }

    if (arr.length > 0) return false;

    return true;
};
