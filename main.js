import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");


console.log(list.toString());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(1));
console.log(list.getSize());