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
    return count;
  }

  head() {
    // return value of first node in the list
    return this.HEAD[0];
  }

  tail() {
    // return last node in the list
    let head = this.HEAD;
    while (head.nextNode != null) {
      head = head.nextNode;
    }
    return head;
  }

  at(index) {
    // return node at given index
    let head = this.HEAD;
    let count = 0;
    while (head.nextNode != null || head.value != null) {
      if (count == index) return head;
      count++;
      head = head.nextNode;
    }
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
    let head = this.HEAD;
    let string = "";
    while (head != null) {
      string += `(${head.value}) => `;
      head = head.nextNode;
    }
    string += "(null)";
    return string;
  }
}
