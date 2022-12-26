// // ARRAYS IN JAVASCRIPT...
// const array = [1, 2, 3, 4, 5, 'atwiine'];
// array.push(10);
// console.log(array);

// // insert/remove from end - O(1);
// // insert/remove from beginning - O(n)
// // access - O(1)
// // search - O(n)
// // pop/push - O(1)
// // shift/unshift/concat/slice/splice - O(n)
// // forEach/map/filter/reduce - O(n);

// // OBJECTS IN JAVASCRIPT...
// const person = {
//   name: 'Kiiza Atwiine Stephen',
//   age: 100,
//   ocupation: 'Software Developer',
//   eat: function() { console.log('Eating...') },
//   run: function() { console.log('Running...') }
// };
// console.log(person);
// console.log(person.eat());
// console.log(person.run());

// // insert - O(1)
// // remove - O(1)
// // access - O(1)
// // search - O(n)
// // Object.keys() - O(n)
// // Object.values() - O(n)
// // Object.entries() - O(n)

// // ========================

// // SET IN JAVASCRIPT...
// const set = new Set([1,2,3,4,5])
// console.log(set)
// console.log(set.add(6,6,7,8,9,10))
// console.log(set.add(7))
// console.log(set.add(8))
// console.log(set.add(9))
// console.log(set.add(10))
// console.log(set.has(10))
// console.log(set.delete(5))
// console.log(set)
// for(let data of set) {
//   console.log(data)
// };

// // =========================

// // MAPS IN JAVASCRIPT...
// const map = new Map([['a', 1], ['b', 2]]);
// console.log(map.set('c', 3))
// console.log(map.has('c'))
// console.log(map.delete('a'))
// for(let [key, value] of map) {
//   console.log(`${key}: ${value}`)
// };

// // =========================
// console.log('\n')

// // STACK IN JAVASCRIPT
// console.log('===== STACKS IN JAVASCRIPT (LIFO Principle) ===== ')
// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(element) {
//     this.items.push(element)
//   }
//   pop() {
//     return this.items.pop()
//   }
//   peek() {
//     return this.items[this.items.length - 1]
//   }
//   isEmpty() {
//     return this.items.length === 0
//   }
//   size() {
//     return this.items.length
//   }
//   print() {
//     console.log(this.items.toString())
//   }
// };

// const stack = new Stack();
// console.log(stack.isEmpty())
// stack.push(12)
// stack.push(23)
// stack.push(90)
// stack.push(9)
// stack.push(76)
// stack.push(52)
// console.log(stack.size())
// console.log(stack.print())
// console.log(stack.pop())
// console.log(stack.peek())

// // insert/remove - O(1)

            
// // =========================
// console.log('\n')

// // QUEUE IN JAVASCRIPT
// console.log('===== QUEUE IN JAVASCRIPT (FIFO Principle) ===== ');
// class Queue1 { // O(n) - Linear Time Complexity
//   constructor() {
//     this.items = [];
//   }
//   enqeue(element) {
//     this.items.push(element)
//   }
//   dequeue() {
//     return this.items.shift()
//   }
//   isEmpty() {
//     return this.items.length === 0
//   }
//   peek() {
//     if(!this.isEmpty()) {
//       return this.items[0]
//     }
//     return null
//   }
//   size() {
//     return this.items.length
//   }
//   print() {
//     console.log(this.items.toString())
//   }
// };

// const queue = new Queue1();
// console.log(queue.isEmpty());
// queue.enqeue(12)
// queue.enqeue(13)
// queue.enqeue(14)
// queue.enqeue(15)
// console.log(queue.size())
// queue.print()
// console.log(queue.dequeue())
// console.log(queue.peek());

// class Queue2 { // O(1) - Constant Time Complexity.
//   constructor() {
//     this.items = {};
//     this.back = 0;
//     this.front = 0;
//   }
//   enqueue(element) {
//     this.items[this.back] = element;
//     this.back++;
//   }
//   dequeue() {
//     const item = this.items[this.front];
//     delete this.items[this.front];
//     this.front++;
//     return item;
//   }
//   isEmpty() {
//     return this.back - this.front === 0;
//   }
//   peek() {
//     return this.items[this.front];
//   }
//   print() {
//     console.log(this.items)
//   }
// };

// const queue2 = new Queue2();
// console.log(queue2.isEmpty());
// queue2.enqueue(12)
// queue2.enqueue(13)
// queue2.enqueue(14)
// queue2.enqueue(15)
// queue2.print()
// console.log(queue2.dequeue())
// console.log(queue2.peek());


            
// // =========================
// console.log('\n');

// // CIRCULAR QUEUE IN JAVASCRIPT
// console.log('===== CIRCULAR QUEUE IN JAVASCRIPT (FIFO Principle) ===== ');
// class CircularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity);
//     this.capacity = capacity;
//     this.currentLength = 0;
//     this.back = -1;
//     this.front = -1;
//   }
//   isFull() {
//     return this.currentLength === this.capacity;
//   }
//   isEmpty() {
//     return this.currentLength === 0;
//   }
//   enqueue(element) {
//     if(!this.isFull()) {
//       this.items[this.back] = element;
//       this.back = (this.back + 1) % this.capacity;
//       this.currentLength += 1;
//       if(this.front === -1) {
//         this.back = this.front;
//       }
//     }
//   }
//   dequeue() {
//     if(!this.isEmpty) return null;
//     const item = this.items[this.front];
//     this.items[this.front] = null;
//     this.front = (this.front + 1) % this.capacity
//     this.currentLength -= 1;
//     if(!this.isEmpty()) {
//       this.front = -1;
//       this.back = -1;
//     }
//     return item;
//   }
//   peek() {
//     if(!this.isEmpty()) {
//       return this.items[this.front]
//     }
//     return null;
//   }
//   print() {
//     if(this.isEmpty()) {
//       consol.log('Queue Empty')
//     } else {
//       let i;
//       let str = '';
//       for(i = this.front; i !== this.back; i = (i + 1) % this.capacity) {
//         str += this.items[i] + ' '
//       }
//       str += this.items[i];
//       console.log(str);
//     }
//   }
// };

// const cicularQueue = new CircularQueue();
// console.log(cicularQueue.isEmpty())
// cicularQueue.enqueue(12)
// cicularQueue.enqueue(13)
// cicularQueue.enqueue(14)
// cicularQueue.enqueue(15)
// cicularQueue.enqueue(16)
// console.log(cicularQueue.isEmpty())
            
// // =========================
// console.log('\n');

// // LINKED LISTS IN JAVASCRIPT chapter 14 of the video
// console.log('===== LINKED LISTS IN JAVASCRIPT ===== ');











// // =================================
// // === JAVASCRIPT DATA STRUCTURES ==
// // =================================

// // =================================
// // A STACK DATA STRUCTURE. (Last In, First Out (LIFO))
// class Stack {
  
//   constructor() {
//     this.items = [];
//   };

//   push(element) {
//     this.items.push(element);  
//   };

//   pop() {
//     this.items.pop();
//   };

//   peek() {
//     if(this.items.length === 0) return null;
//     return this.items[this.items.length - 1]
//   };

//   getSize() {
//     return this.items.length;
//   };

//   isEmpty() {
//     return this.getSize() === 0;
//   }
  
// };

// // =================================
// // A QUEUE DATA STRUCTURE. (First In, First Out (FIFO))
// class Queue {

//   constructor() {
//     this.items = [];
//   };

//   enqueue(element) {
//     this.items.push(element);
//   };

//   dequeue() {
//     return this.items.shift()
//   };

//   peek() {
//     return this.items[0];
//   };

//   getSize() {
//     return this.items.length;
//   };

//   isEmpty() {
//     return this.items.length === 0;
//   }
  
// };

// // =================================
// // A LINKED LIST DATA STRUCTURE.
// class Node {
  
//   constructor(data, next=null) {
//     this.data = data;
//     this.next = next;
//   };
  
// };

// class LinkedList {
  
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   };

//   // insert first node.
//   insertFirstNode(data) {
//     this.head = new Node(data, this.head);
//     this.size++;
//   }

//   // insert last node.

//   // insert node at index.

//   // get node at index.

//   // remove node at index.

//   // clear linked list.
//   clearLinkedListData() {
//     this.head = null;
//     this.size = 0;
//   };

//   // print list data.
//   printLinkedListData() {
//     let current = this.head;
//     while(current) {
//       console.log(current.data);
//       current = current.next;
//     };
//   };
  
// };





// =================================================
// MORE ON JAVASCRIPT DATA STRUCTURES AND ALGORITHMS
// =================================================

// A Recursive Function without limit
// function recursiveFnWithoutLimit () {
//   console.log(`Recursive Function..`);
//   recursiveFnWithoutLimit();
// };
// recursiveFnWithoutLimit(); // will run into an infinite loop - will never stop


// A Recursive Function with Limit;
// let count = 1;
// function recursiveFnWithLimit() {
//   console.log(`Recursive Function with count: ${count}`);
//   if(count === 20) return;
//   count++;
//   recursiveFnWithLimit();
// };
// recursiveFnWithLimit();


// A Recursion Use Case.
// function oddArray(array) {
//   let result = [];
//   function helperRecursiveFn(array) {
//     if(array.length === 0) {
//       return;
//     } else if(array[0] % 2 !== 0) {
//       result.push(array[0]);
//     }
//     helperRecursiveFn(array.slice(1));
//   };
//   helperRecursiveFn(array);
//   console.log(result);
// };
// oddArray([1,2,3,4,5,6,7,8,9,10]);


// LINEAR ALGORITHMS
// - Searching through an array - O(n);

// let numbers = [1,12,13,34,45,756,23,89,23,6];
// function linearSearch(array, element) {
//   for(let i = 0; i < array.length; i++) {
//     if(element === array[i]) {
//       console.log(`${element} exists in array at index ${i}..`)
//     }
//   }
//   console.log(`${element} does not exist in the given array.`);
// };
// linearSearch(numbers, 10);
// linearSearch(numbers, 1);
// linearSearch(numbers, 23);
// linearSearch(numbers, 27);


// BINARY SEARCH ALGORITHM
// - Split an array into 2 halves and search for the element.
// function binarySearch(array, element) {
  
//     let firstIndex = 0;
//     let lastIndex = array.length - 1;
//     let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

//     while (array[middleIndex] !== element && firstIndex <= lastIndex) {
//         if(array[middleIndex] > element) {
//                 lastIndex = middleIndex - 1;
//         }else {
//                 firstIndex = middleIndex + 1;
//         }
//         middleIndex = Math.floor((firstIndex + lastIndex) / 2);
//     }
//     console.log(array[middleIndex] === element ? middleIndex : -1);
// }

// const array = [2, 3, 6, 8, 10, 12];
// binarySearch(array, 6);


// =========================================================================

// // NAIVE SEARCH ALGORITHM
// // - Searches a substring from within a main string.

// function naiveSearch(mainStr, subStr) {
//     if (subStr.length > mainStr.length) return false;

//     for(let i = 0; i < mainStr.length; i++) {
//        for(let j = 0; j < subStr.length; j++) {
//             if(mainStr[i + j] !== subStr[j]) break;
//             if(j === subStr.length - 1) console.log("true.."); 
//         }
//     }
// }
// naiveSearch("stephen", "hen");

// =========================================================================


// =========================================================================

// // BUBBLE SORT ALGORITHM
// // - Sorts elements in either ascending or descending order.

// function bubbleSort(array) {
//     let isSwapped;

//     for(let i = array.length; i > 0; i--) {
//         isSwapped = false;

//         for(let j = 0; j < i - 1; j++) {
//             if(array[j] > array[j + 1]) {
//                 [array[j], array[j+1]] = [array[j+1], array[j]];
//                 isSwapped = true;
//             }
//         }

//         if(!isSwapped) {
//             break;
//         }
//     }
//     console.log(array);
// }
// bubbleSort([12,54,7,2,89,3,1,787,354,5]);

// =========================================================================


// =========================================================================

// MERGE SORT ALGORITHM
// - Divides arrays and sorts them afterwords.

// function mergeSortedArray(array1, array2) {
//     let result = [];
//     let i = 0;
//     let j = 0;

//     while(i < array1.length && j < array2.length) {
//         if(array1[i] < array2[j]) {
//             result.push(array1[i]);
//             i++;
//         } else {
//             result.push(array2[j]);
//             j++;
//         }
//     }

//     while (i < array1.length) {
//         result.push(array1[i]);
//         i++;
//     }

//     while (j < array2.length) {
//         result.push(array2[j]);
//         j++;
//     }

//     console.log(result);
// }

// function mergeSortAlgorithm(array) {
//     if(array.length <= 1) return array;

//     let midPoint = Math.floor(array.length / 2);
//     let leftArray = mergeSortAlgorithm(array.slice(0, midPoint));
//     let rightArray = mergeSortAlgorithm(array.slice(midPoint));

//     console.log(mergeSortedArray(leftArray, rightArray));
// }

// mergeSortAlgorithm([12,45,67,12,43,6,13,86,2,43,8,34,8]);

// =========================================================================