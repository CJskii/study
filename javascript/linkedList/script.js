class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(headNode) {
    this.HEAD = new Node(headNode);
    this.HEAD.nextNode = null;
  }

  append(value) {
    // add new node with value to end of list
    const newNode = new Node(value);
    let head = this.HEAD;
    while (head.nextNode != null) {
      head = head.nextNode;
    }
    head.nextNode = newNode;
  }

  prepend(value) {
    // add new node with value to front of the list
    const newNode = new Node(value);
    newNode.nextNode = this.HEAD;
    this.HEAD = newNode;
  }

  size() {
    // return total number of nodes in the list
    let count = 0;
    let head = this.HEAD;
    while (head.nextNode != null) {
      head = head.nextNode;
      count++;
    }
    console.log(count);
    return count;
  }

  head() {
    // return value of first node in the list
    console.log(this.HEAD);
    return this.HEAD[0];
  }

  tail() {
    // return last node in the list
    let head = this.HEAD;
    while (head.nextNode != null) {
      head = head.nextNode;
    }
    console.log(head.value);
  }

  at(index) {
    // return node at given index
    let head = this.HEAD;
    let count = 0;
  }

  pop() {
    // remove last element from the list
    let head = this.HEAD;
    while (head.nextNode.nextNode != null) {
      head = head.nextNode;
    }
    head.nextNode = null;
  }

  contains(value) {
    // returns true if value is in the list, otherwise return false
    let head = this.HEAD;
    let status = false;
    while (head.nextNode != null) {
      head = head.nextNode;
      if (value == head.value) {
        return (status = true);
      }
    }
    return status;
  }

  find(value) {
    // returns index of node containing value, or null if not found
    let head = this.HEAD;
    let count = 0;
    while (head.nextNode != null) {
      if (head.value == value) return count;
      if (head.nextNode.value == value) return count + 1;
      count++;
      head = head.nextNode;
    }
    return null;
  }

  toString() {
    // return linked list objects as strings, so it can be printed in console
  }
}

const node = new Node("1");

const list = new LinkedList([1, 4, 5, 9, 10]);
//list.append("2");

const lista = new LinkedList("1");
lista.append("2");
lista.append("3");
lista.append("9");
lista.prepend("0");
//lista.size();
//lista.head();
//lista.at("2");
//lista.pop();
//lista.tail();
//console.log(lista.contains("9"));
console.log(lista.find("9"));
console.log(lista.at("4"));
