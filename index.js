class LinkedList {
   constructor(head = null) {
      this.head = head;
   }

   append(value) {
      let newNode = new Node(value);

      if (this.head === null) {
         this.head = newNode;
      } else {
         let currentNode = this.head;
         while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
         }
         currentNode.nextNode = newNode;
      }
   }
}

class Node {
   constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
   }
}
