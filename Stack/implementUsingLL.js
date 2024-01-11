class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return "List is already empty"
        }
        const item = this.top.data;
        this.top = this.top.next;
        this.size--;
        return item;
    }

    peek(){
        return this.top.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const stack = new StackLinkedList()
stack.push(10)
stack.push(20)
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());

console.log(stack)