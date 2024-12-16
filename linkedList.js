import { Node } from "./Node.js";

export class LinkedList {
   constructor() {
    this.head = null;
    this.size = 0;
   }


   append(value) {
      // add new node in memory 
      let newNode = new Node(value);

      // stores current node
      let current;

      // list is empty, make node head
      if (this.head == null) 
         this.head = newNode;

      // get head 
      else {
         current = this.head;

         // while current is not null
         while (current.nextNode != null) {
            current = current.nextNode;
         }

         // replace last with new node 
         current.nextNode = newNode;
      }
      // Increment size by 1
      this.size++;
   }

   getSize() {
      const size = this.size;
      return `Total nodes: ${size}`;
   }

   at(index) {
      let current = this.head;
      // while current is less than index passed
      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }

      const value = current.value;

      return `Node at index ${index}: ${value}`;
  }

  pop() {
   if (!this.head) {
      return null; // Empty list
    }

    if (!this.head.nextNode) {
      // Only one node in the list
      this.head = null; 
      return;
    }

    let current = this.head;
    // is the current's next has a non-null next
    while (current.nextNode.nextNode != null) {
      current = current.nextNode;
    }

    current.nextNode = null; // Remove the last node
    this.size--;
  }
   getHead() {
      let head = this.head;
      return `Head: ${head.value}`;
   }

   getTail() {
      // stores current node
      let current = this.head;
         // while current is not null
         while (current.nextNode != null) {
            current = current.nextNode;
         }

         const tail = current.value;

         return `Tail: ${tail}`;
   }

   
      getHead() {
         let head = this.head;
         return `Head: ${head.value}`;
      }
   

   prepend(value) {
      // current head 
      let current = this.head;

      // create new node 
      let node = new Node(value);

      // make next reference to current head 
      node.nextNode = current;

      // update head to be new node 
      this.head = node;

      this.size++;
   
   }

  contains(value) {
    let current = this.head;
    while (current.nextNode != null) {
      current = current.nextNode;
      let str = JSON.stringify(current);
      return `Lists includes ${value}?: ${str.includes(value)}`;
    }
   }

   find(value) {
      let curr = this.head;
      let str = "";
      let arr;
      while (curr != null) {
         str += `${curr.value} `;
         curr = curr.nextNode;
         arr = str.split(" ");
      }

      if (arr.includes(value)) return arr.indexOf(value);  
      return null;
   }

   toString() {
      let curr = this.head;
      let str = "";
      while (curr != null) {
         str += `( ${curr.value} ) -> ${curr.nextNode}`;
         curr = curr.nextNode;
         str = str.replace('[object Object]', "");
      }
      return str  
   }
   
}
