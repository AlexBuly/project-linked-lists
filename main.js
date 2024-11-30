import { LinkedList } from "./linkedList.js";

const list = new LinkedList();


list.append("cat");
list.append("dog");
list.append("parrot");
list.append("snake");
list.append("turtle");
list.prepend("bear");

console.log(list.toString());
console.log(list.getHead());
console.log(list.getTail());