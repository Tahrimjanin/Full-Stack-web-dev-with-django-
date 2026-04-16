//function reusability, modularity, and organization in JavaScript. 

//"""has parameter no return"""
function sayhello(name){
    console.log("Hello" + name );
    num = 10 ; // accidental global variable cause it is not declared with var, let, or const
}
sayhello("Tahrim"); // calling the function to execute the code inside it
sayhello("Janin"); // calling the function again with a different argument
//argument is the value we pass to the function when we call it, and parameter is the variable that receives the value inside the function


// JavaScript Hoisting == js code execution ar age full code scan kore kore declar valuer jonno memory create kora suru kore then code execute kore 
console.log(num2); // undefined
  let num2 = 20; 


if(true){
  var num = 10 ; 
  console.log(num);  

}console .log(num); // var is function-scoped, so it is accessible outside the block

//""no parameter has return"""
function getNumber() {
  return 100;}
let num = getNumber();
console.log(num); // 100


///"""no parameter no return"""
function sayHi() {
  console.log("Hi!");}
sayHi(); // Hi!


// function expression is a function that is assigned to a variable. It can be anonymous or named. It is not hoisted, so it cannot be called before it is defined.
// (anonymous function assigned to a variable)
const greet = function(name) {
  return "Hello " + name;
};
console.log(greet("Tahrim")); // Hello Tahrim



let hello = function(){
  console.log("Hello World");
} ;
let hello2 = sayhello();
let hello3 = sayHi;

sayhello(); // Hello Tahrim
sayhello(); // Hello Janin
sayHi(); // Hi!


// 1. Function Declaration

// """has parameter has return"""""
function add(a, b) {
  return a + b;
}
console.log("Declaration:", add(2, 3));
console.log("Declaration with default:", add());

function add(n1, n2){
  if(!undefined) n1 = 0;
  if(!undefined) n2 = 0;
  return n1 + n2;
}
 //or 
 function add(n1, n2){
 n1 = n1 ? n1 : 0; //or n1 = n1 ?? 0;
 n2 = n2 ? n2 : 0;// or n2 = n2 ?? 0;
  return n1 + n2; }

//or
 function add(n1 =0 , n2 = 0){
   return n1 + n2; }



// 2. Function with Return
function square(x) {
  return x * x;
}
console.log("Return:", square(5));


// 3. Function Invocation
function hello() {
  return "Hello";
}
console.log("Invocation:", hello());


// 4. Function Expression
const sub = function (a, b) {
  return a - b;
};
console.log("Expression:", sub(10, 4));


// 5. Arrow Function
const mul = (a, b) => a * b;
console.log("Arrow:", mul(3, 4));


// 6. Default Parameter
function greet(name = "Guest") {
  return "Hi " + name;
}
console.log("Default:", greet());
console.log("Default:", greet("Tahrim"));


// 7. Function Hoisting
console.log("Hoisting:", hoistFunc());
function hoistFunc() {
  return "Hoisted";
}


// 8. Self Invoking Function (IIFE)
(function () {
  console.log("IIFE: Auto run");
})();


// 9. Function as Value
function show(x) {
  return x;
}
let f = show;
console.log("As value:", f(100));


// 10. Arguments Object
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log("Arguments:", sumAll(1, 2, 3));


// 11. Rest Parameter
function sumRest(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("Rest:", sumRest(5, 10, 15));


// 12. Function as Object
function demo(a, b) {
  return a + b;
}
console.log("Type:", typeof demo);
console.log("Length:", demo.length);


// 13. call()
function intro() {
  return this.name;
}
const person = { name: "Tahrim" };
console.log("call:", intro.call(person));


// 14. apply()
function add2(a, b) {
  return a + b;
}
console.log("apply:", add2.apply(null, [20, 30]));


// 15. bind()
function welcome() {
  return "Welcome " + this.name;
}
const user = { name: "Janin" };
const bound = welcome.bind(user);
console.log("bind:", bound());
