class Node {
    constructor(data) {
        this.data=data;
        this.next=null;
    }
}
class LinkedList {
    constructor() {
        this.head=null;
        this.size=0;

    }
    insertAtHead(data) {
        const newNode= new Node(data);
        newNode.next= this.head;
        this.head= newNode;
        this.size++;
    }

    insertAtIndex(index, data) {
        if(index < 0 || index > this.size) {
            return "Invalid index";
        }
        if(index === 0) {
            this.insertAtHead(data);
            return;
        }
        let newNode= new Node(data);
        let curr= this.head;
        for(let i=0;i<index-1;i++) {
            curr=curr.next;
        } 
        newNode.next= curr.next;
        curr.next=newNode;
        this.size++;
    }

    print() {
        let result="";
        let curr=this.head;
        while(curr) {
            result += `${curr.data} ->`;
            curr=curr.next;
        } return result;
    }

    isEmpty() {
        return this.size===0;
    }

    removeAtHead() {
        if(this.isEmpty()) {
            return "Empty List";
        }
        this.head= this.head.next;
        this.size--;
    }

    removeElement(data) {
        if(this.isEmpty()) {
            return "Empty List";
        }
        let curr=this.head;
        let prev=null;
        while(curr) {
        if(curr.data === data) {
            if(prev === null) {
                this.head == curr.next;
            } else {
                prev.next=curr.next;
            } 
            this.size--;
            return curr.next;
        } 
        prev=curr;
        curr=prev.next;
    } return -1;

    }

    searchElement(data) {
        let curr= this.head;
        let index=0;
        while(curr) {
            if(curr.data===data) return index;
            index++;
            curr=curr.next;
        } return -1;
    }

    middleNode() {
        let slow = this.head, fast = this.head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    };
    
    reverse() {
        let prev=null;
        let curr=this.head;
        while(curr) {
            let forw= curr.next;
            curr.next=prev;
            prev=curr;
            curr=forw;
        } 
        this.head=prev;
        // return prev;
    };

    isCycle() {
        let slow= this.head;
        let fast= this.head;
        while(fast && fast.next) {
            slow=slow.next;
            fast=fast.next;
            if(slow===fast) {
                return true;
            }
        } return false;
    }
}

    

let list= new LinkedList();
list.insertAtHead(50);
list.insertAtHead(40);
list.insertAtHead(30);
list.insertAtHead(20);
list.insertAtHead(10);
list.insertAtIndex(3,90);
list.removeAtHead();
console.log(list.isEmpty());
console.log(list.isCycle());
console.log(list.searchElement(90));
list.removeElement(90);
console.log(list.middleNode());
list.reverse();

console.log(list.print());