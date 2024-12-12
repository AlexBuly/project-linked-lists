import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("rabbit");


console.log(list.toString());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(3));
console.log(list.getSize());
console.log(list.contains("snake"));
console.log(list.contains("snail"));
console.log(list.find("parrot"));
