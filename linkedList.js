import { Node } from "./Node.js";

export class LinkedList {
   constructor(head) {
    this.head = null;
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
   }

   getHead() {
      let head = this.head;
      return head.value;
   }

   getTail() {
      // stores current node
      let current = this.head;
         // while current is not null
         while (current.nextNode != null) {
            current = current.nextNode;
         }

         const tail = current.value;

         return tail;
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
