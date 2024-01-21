class MyStack {
    constructor () {
        this.q1=[];
        this.q2=[];
    }
    push(x) {
        while (this.q1.length !== 0) {
            this.q2.push(this.q1.shift())
        } this.q1.push(x);
        while(this.q2.length !==0) {
            this.q1.push(this.q2.shift())
        }
    }
    pop() {
        return this.q1.shift();
    }
    top() {
        return this.q1[0];
    }
    empty() {
        return this.q1.length === 0;
    }
}
 const singleQ= new MyStack();
 singleQ.push(10);
 singleQ.push(20);
 singleQ.push(30);
 singleQ.push(40);

console.log(singleQ);
console.log(singleQ.pop());
console.log(singleQ.top());
console.log(singleQ.empty())