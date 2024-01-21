class Node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}

class CircularQueue {
    constructor(k) {
        this.capacity=k;
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    enqueue(data) {
        if(this.isFull) return false;
        const newNode= new Node(data);
        if(this.head === null) {
            this.head= newNode;
        } else {
            this.tail.next= newNode;
        } 
        this.tail= newNode;
        this.tail.next= this.head;
        size++;
        return true;
    }
    dequeue() {
        if(this.isEmpty) return false;
        if(this.head === this.tail) {
            this.head=null;
            this.tail=null;
        } else {
            this.head=this.head.next;
            this.tail.next=this.head;
        } this.size--;
        return true;
    }
    isEmpty() {
        return this.size === 0;
    }
    isFull() {
        return this.size === this.capacity;
    }
    front() {
        return this.isEmpty ? -1 : this.head.data;
    }
    rear() {
        return this.isEmpty ? -1 : this.tail.data;
    }
}
const cq= new CircularQueue();
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
console.log(cq.isEmpty())
console.log(cq.isFull());
console.log(cq.front());

// console.log(cq)

