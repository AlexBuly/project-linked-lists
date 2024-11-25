import { LinkedList } from "./linkedList.js";

const list = new LinkedList();


list.append("cat");
list.append("dog");

console.log(list.toString(list.value, list.nextNode));
console.log(list);
