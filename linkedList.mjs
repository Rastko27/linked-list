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

   prepend(value) {
      let newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
   }

   size() {
      let counter = 0;
      let currentNode = this.head;
      while (currentNode !== null) {
         counter++;
         currentNode = currentNode.nextNode;
      }
      return counter;
   }

   getHead() {
      return this.head;
   }

   tail() {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
         currentNode = currentNode.nextNode;
      }
      return currentNode;
   }

   at(index) {
      let currentNode = this.head;
      let i = 1;
      while (i !== index) {
         currentNode = currentNode.nextNode;
         i++;
      }
      return currentNode;
   }

   pop() {
      if (this.head === null) return; // List is empty
      if (this.head.nextNode === null) {
         // List has only one node
         this.head = null;
         return;
      }
      let currentNode = this.head;
      while (currentNode.nextNode.nextNode !== null) {
         currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = null;
   }

   contains(value) {
      let currentNode = this.head;
      while (currentNode !== null) {
         if (currentNode.value === value) {
            return true;
         }
         currentNode = currentNode.nextNode;
      }
      return false;
   }

   find(value) {
      let index = 1;
      let currentNode = this.head;
      while (currentNode !== null) {
         if (currentNode.value === value) {
            return index;
         }
         currentNode = currentNode.nextNode;
         index++;
      }
      return null;
   }

   toString() {
      let currentNode = this.head;
      let string = "";
      while (currentNode !== null) {
         if (currentNode.nextNode === null) {
            string += `( ${currentNode.value} ) -> null`;
            break;
         } else {
            string += `( ${currentNode.value} ) -> `;
         }
         currentNode = currentNode.nextNode;
      }
      return string;
   }

   insertAt(value, index) {
      if (index < 1) {
         console.error("Index must be greater than 0");
      }
      let newNode = new Node(value);
      if (index === 1) {
         newNode.nextNode = this.head;
         this.head = newNode;
         return;
      }
      let currentNode = this.head;
      let currentIndex = 1;
      while (currentNode !== null && currentIndex < index - 1) {
         currentNode = currentNode.nextNode;
         currentIndex++;
      }
      if (currentNode === null) {
         console.error("Index out of bounds");
      }
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
   }

   removeAt(index) {
      if (index < 1) {
         console.error("Index must be greater than 0");
      }
      if (index === 1) {
         let headNode = this.head;
         this.head = headNode.nextNode;
         return;
      }
      let currentNode = this.head;
      let currentIndex = 1;
      while (currentNode !== null && currentIndex < index - 1) {
         currentNode = currentNode.nextNode;
         currentIndex++;
      }
      if (currentNode === null || currentNode.nextNode === null) {
         console.error("Index out of bounds");
         return;
      }
      currentNode.nextNode = currentNode.nextNode.nextNode;
   }
}

class Node {
   constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
   }
}

export default LinkedList;