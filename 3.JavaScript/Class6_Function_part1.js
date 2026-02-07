// 1. Function Declaration
function add(a, b) {
  return a + b;
}
console.log("Declaration:", add(2, 3));


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
