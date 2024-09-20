import java.util.Stack;

public class ReverseStack {

    public static void reverseStack(Stack<Integer> stack) {
        if (stack.isEmpty()) {
            return;
        }

        int bottom = popBottom(stack);
        
        reverseStack(stack);

        stack.push(bottom);
    }

    public static int popBottom(Stack<Integer> stack) {
        int top = stack.pop();
        if (stack.isEmpty()) {

            return top;
        } else {
            int bottom = popBottom(stack);
            
            stack.push(top);
            return bottom;
        }
    }

    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        System.out.println("Original Stack: " + stack);

        reverseStack(stack);

        System.out.println("Reversed Stack: " + stack);
    }
}
