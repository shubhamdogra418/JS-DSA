//Queue using Array

class Queue {
    constructor() {
        this.queue=[];
    }

    enqueue(data) {
        this.queue.push(data);
    }
    dequeue() {
        return this.isEmpty() ? null : this.queue.shift();
    }
    isEmpty() {
        return this.queue.length===0;
    }
    size() {
        return this.queue.length;
    }
    front() {
        return this.isEmpty() ? null : this.queue.at(0);
    }
    back() {
        return this.isEmpty() ? null : this.queue.at(-1);
    }
}


const queue= new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
console.log(queue);
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.front());
console.log(queue.back());
