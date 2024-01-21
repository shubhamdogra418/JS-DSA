// class MyStack {
//     constructor() {
//         this.q=[];
//     }
//     push(x) {
//         this.q.push(x);
//         for(let i=0;i<this.q.length-1;i++) {
//             this.q.push(this.q.shift());
//         }
//     }
//     pop() {
//         return this.q.shift(); //first element
//     }
//     size(){
//         return this.q.length;
//     }
//     isEmpty() {
//         return this.q.length === 0;
//     }
//     peek() {
//         return this.q[0];
//     }

// }




const queueStack=  new MyStack();
queueStack.push(10);
queueStack.push(20);
queueStack.push(30);
queueStack.push(40);
console.log(queueStack.pop())
console.log(queueStack.peek());
console.log(queueStack.size());
console.log(queueStack.isEmpty());

console.log(queueStack);