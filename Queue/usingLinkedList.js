class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList {
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    enqueue(data) {
        const temp= new Node(data);
        if( this.head === null) {
            this.head= temp;
        } else{
            this.tail.next=temp;
        } 
        this.tail= temp;
        this.size++;
    }

    dequeue () {
        if(this.isEmpty()) return null;
        const deletedItem= this.head.data;
        this.head= this.head.next;
        this.size--;
        return deletedItem;
    }

    front() {
        return this.isEmpty() ? null : this.head.data;
    }
    back() {
        return this.isEmpty() ? null : this.tail.data;
    }

    isEmpty() {
        return this.size===0;
    }  
}

const qll= new QueueLinkedList;
qll.enqueue(10);
qll.enqueue(20);
qll.enqueue(30);
qll.enqueue(40);
console.log(qll);
console.log(qll.dequeue());
console.log(qll.front());
console.log(qll.back());
console.log(qll.isEmpty());






