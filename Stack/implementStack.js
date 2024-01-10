class Stack {
    constructor () {
        this.stack=[];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if(this.isEmpty()) {
            return null;
        } 
        return this.stack.pop();
    }
    peek() {
        if(this.isEmpty()) return null;
        return this.stack[this.stack.length-1];
    }
    isEmpty() {
        return this.stack.length===0;
    }
    size() {
        return this.stack.length;
    }
}
const stack= new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
stack.push(50);
console.log(stack.peek());
console.log(stack.size());
console.log(stack);