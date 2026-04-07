

const cars = ["Saab", "Volvo", "BMW"];

let names = 'saab'; //  age declare kora hoyni tai let add kora
console.log(cars);

const cars2 = [
  "Saab",
  "Volvo",
  "BMW"
];

let num = 10;
let newnum = num;
num = 20;
console.log(newnum);

let names1 = ['kiki']; // ❗ names → names1
let newnames = names1;
names1[0] = 'jiji'; // extra [] remove kore string kora
console.log(newnames); // ['jiji']

//pass by value means that when you assign a variable to another variable, it creates a copy of the value.
//pass by reference means that when you assign a variable to another variable, it creates a reference.

let names2 = ['kiki','aetu','jiji']; // names → names2

// add end of the array 9using length method
names2[names2.length] = 'lala';
names2.push('flower');
console.log(names2);

//array tostring
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let mylist = fruits.toString();
console.log(mylist); //returns the elements of an array as a comma separated string.

// array at method use kore index er value show kora
let myfruits = fruits.at(2);
console.log(myfruits); // Apple show korbe

//Array join method use kore array er element ke string e convert kora

let myfruitlist = fruits.join(" - ");
console.log(myfruitlist); // Banana - Orange - Apple - Mango show korbe

//array pop method use kore last element remove kora
let lastfruit = fruits.pop();
console.log(lastfruit);

//array push method use kore array er last e element add kora
fruits.push("Grapes");
console.log(fruits);

//array shift method use kore first element remove kora
let firstfruit = fruits.shift();
console.log(firstfruit); // Banana show korbe

//array unshift method use kore array er first e element add kora
fruits.unshift("Strawberry");
console.log(fruits); // Strawberry show korbe

//array isArray method use kore check kora je variable ta array kina
console.log(Array.isArray(fruits)); // true

//Array concat() method use kore duita array ke combine kora
let morefruits = ["Pineapple", "Kiwi"];
let allfruits = fruits.concat(morefruits);
console.log(allfruits); // Strawberry, Orange, Apple, Grapes, Pineapple, Kiwi show korbe

//array flat method use kore nested array ke single level array te convert kora
let nestedArray = [1, 2, [3, 4], [5, 6]];
let flatArray = nestedArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6] show korbe





//add first of the array
names2.unshift('mimi'); 

// delete in the array
delete names2[1];
console.log(names2);

//pop removes the last element
let lastElement = names2.pop();
console.log(lastElement);


// Base Data
const arr = [1, 2, 3, 2, 4];
const nums = [10, 2, 5];
const strArr = ["b", "a", "c"];

const users = [
  { id: 1, name: "A", age: 20 },
  { id: 2, name: "B", age: 25 },
  { id: 3, name: "C", age: 30 }
];


// Searching Methods

// indexOf → first occurrence index
arr.indexOf(2); // 1

// lastIndexOf → last occurrence index
arr.lastIndexOf(2); // 3

// includes → check existence (true/false)
arr.includes(3); // true

// find → first value matching condition
arr.find(x => x > 2); // 3

// findIndex → index of first match
arr.findIndex(x => x > 2); // 2

// findLast → last value matching condition
arr.findLast(x => x > 2); // 4

// findLastIndex → index of last match
arr.findLastIndex(x => x > 2); // 4



// Sorting

// Alphabetic sort (string)
strArr.sort(); // ["a","b","c"]

// Reverse (mutates original array)
[1, 2, 3].reverse(); // [3,2,1]

// toSorted → sorted copy (does not change original)
nums.toSorted(); // [2,5,10]

// toReversed → reversed copy (does not change original)
nums.toReversed(); // [5,2,10]



// Numeric Sorting

// Ascending
nums.sort((a, b) => a - b); // [2,5,10]

// Descending
nums.sort((a, b) => b - a); // [10,5,2]

// Random shuffle (not perfect but common)
nums.sort(() => Math.random() - 0.5);



// Min / Max

Math.min(...nums); // smallest value
Math.max(...nums); // largest value

// Custom Min
function myMin(array) {
  let min = array[0];
  for (let val of array) {
    if (val < min) min = val;
  }
  return min;
}

// Custom Max
function myMax(array) {
  let max = array[0];
  for (let val of array) {
    if (val > max) max = val;
  }
  return max;
}



// Iteration Methods

// forEach → loop (no return)
arr.forEach(x => console.log(x));

// map → transform array
arr.map(x => x * 2); // [2,4,6,4,8]

// flatMap → map + flatten
[1,2,3].flatMap(x => [x, x * 2]); // [1,2,2,4,3,6]

// filter → select elements
arr.filter(x => x > 2); // [3,4]

// reduce → accumulate value
arr.reduce((sum, x) => sum + x, 0); // total sum

// reduceRight → same as reduce but right to left
arr.reduceRight((sum, x) => sum + x, 0);



// Condition Methods

// every → all elements must satisfy condition
arr.every(x => x > 0); // true

// some → at least one element satisfies
arr.some(x => x > 3); // true



// Array Creation & Utilities

// Array.from → convert to array
Array.from("abc"); // ["a","b","c"]

// keys → index iterator
[...arr.keys()]; // [0,1,2,3,4]

// entries → [index, value]
[...arr.entries()]; // [[0,1],[1,2],...]

// with → replace value at index (immutable)
arr.with(1, 100); // [1,100,3,2,4]



// Spread & Rest

// Spread → copy / merge
const copy = [...arr];
const merged = [...arr, ...nums];

// Rest → collect values
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
sum(1,2,3); // 6



let n1 = [10] ;
let n2 = [10] ;

console.log(n1 == n2 ); // false cause n1 and n2 are different array objects
console.log(n1 === n2); // false

let n3 = 10 ;
let n4 = 10 ;

console.log(n3 == n4); // true cause n3 and n4 are primitive values
console.log(n3 === n4); // true


