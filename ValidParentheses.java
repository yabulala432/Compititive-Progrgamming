class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        char x = s.charAt(0);
        stack.push(x);
        for (int i = 1; i < s.length(); i++) {
            x = s.charAt(i);
            if (!stack.empty()&&closer(x) == stack.peek()) {
                stack.pop();
            }
             else {
                stack.push(s.charAt(i));
            }
        }
        return stack.empty();
    }

    // utility function to check the closing bracket is valid;
    private char closer(char x) {
        if (x == ')') {
            return '(';
        } else if (x == '}') {
            return '{';
        } else if (x == ']') {
            return '[';
        }
        return Character.MIN_VALUE;
    }
}
