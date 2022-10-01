// ARRAYS IN JAVASCRIPT...
const array = [1, 2, 3, 4, 5, 'atwiine'];
array.push(10);
console.log(array);

// insert/remove from end - O(1);
// insert/remove from beginning - O(n)
// access - O(1)
// search - O(n)
// pop/push - O(1)
// shift/unshift/concat/slice/splice - O(n)
// forEach/map/filter/reduce - O(n);

// OBJECTS IN JAVASCRIPT...
const person = {
  name: 'Kiiza Atwiine Stephen',
  age: 100,
  ocupation: 'Software Developer',
  eat: function() { console.log('Eating...') },
  run: function() { console.log('Running...') }
};
console.log(person);
console.log(person.eat());
console.log(person.run());

// insert - O(1)
// remove - O(1)
// access - O(1)
// search - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)

// ========================

// SET IN JAVASCRIPT...
const set = new Set([1,2,3,4,5])
console.log(set)
console.log(set.add(6,6,7,8,9,10))
console.log(set.add(7))
console.log(set.add(8))
console.log(set.add(9))
console.log(set.add(10))
console.log(set.has(10))
console.log(set.delete(5))
console.log(set)
for(let data of set) {
  console.log(data)
};

// =========================

// MAPS IN JAVASCRIPT...
const map = new Map([['a', 1], ['b', 2]]);
console.log(map.set('c', 3))
console.log(map.has('c'))
console.log(map.delete('a'))
for(let [key, value] of map) {
  console.log(`${key}: ${value}`)
};

// =========================
console.log('\n')

// STACK IN JAVASCRIPT
console.log('===== STACKS IN JAVASCRIPT (LIFO Principle) ===== ')
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  print() {
    console.log(this.items.toString())
  }
};

const stack = new Stack();
console.log(stack.isEmpty())
stack.push(12)
stack.push(23)
stack.push(90)
stack.push(9)
stack.push(76)
stack.push(52)
console.log(stack.size())
console.log(stack.print())
console.log(stack.pop())
console.log(stack.peek())

// insert/remove - O(1)