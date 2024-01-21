//Implement Queue Using Stacks
class QueueStack {
    constructor() {
        this.stack1= [];
        this.stack2= [];
    }
    push(x) {
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
        } 
        this.stack1.push(x);
        while(this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop())
        }
    }
    isEmpty() {
        return this.stack1.length === 0;
    }
    pop() {
        if(this.isEmpty()) return null;
        else return this.stack1.pop();
    }
    peek() {    
        return this.isEmpty() ? null : this.stack1.at(-1);
    }
    size() {
        return this.stack1.length;
    }
}

const qs= new QueueStack();
qs.push(10);
qs.push(20);
qs.push(30);
qs.push(40);
console.log(qs);
console.log(qs.pop());
console.log(qs.size());
console.log(qs.peek());
console.log(qs.isEmpty());