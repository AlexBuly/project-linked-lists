import { LinkedList } from "./linkedList.js";

const list = new LinkedList();


list.append("cat");
list.append("dog");
list.append("parrot");
list.append("snake");
list.append("turtle");

list.prepend("lion");

console.log(list.toString());