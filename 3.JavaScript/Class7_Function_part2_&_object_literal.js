// call back function - this is a function that is passed as an argument to another function and is executed after some operation is completed. 
// It allows us to handle asynchronous operations and manage the flow of our code effectively.
function sayhello(){
  console.log("Hello World");
}
function callSayhello(func){
  func();
}
callSayhello(sayhello); // Hello World
// another example of callback function
 const btn = document.querySelector("button");
  btn.addEventListener("click", () => {
  } ); // this is a callback function that will be executed when the button is clicked

//JavaScript Invocation mane holo func run kora
//anonimous function mane holo nam na thaka function


function add(a,b){
  return a+b ;
}
function anotherFunc(){
  return add(5,10);
}
console.log(anotherFunc()); // 15


//rest parameter mane holo function er parameter gulo ke array akare receive kora
 function add(...numbers) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  } return result;
}
console.log(add(1, 2, 3, 4)); //10


 // more example of rest parameter
let arr = [1, 2, 3, 4];
//let newArr = [] ; for full array
let newArr =[...arr]; // with spread operator
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i]);
  //withour push --> newArr[i] = arr[i];
}
console.log(newArr); // [1, 2, 3, 4]


//object Literal - object create korar ekta syntax jekhane amra key-value pair diye object create kori.
//key-value pair mane holo object er property name (key) and tar corresponding value. Object literal syntax diye amra easily object create korte pari.

let Person = {
  name: "Tahrim",
  age: 22,
  country : "Bangladesh",
  sayHello : function() { //function is a method
      console.log("Hello, I am " + this.name);
  } ,
} ;

for(let el in person ){
  if(typeof person[el] !='function'){
    console.log(person[el]);
  } else {
    person[el]();
  }
}

// 1. Object Creation (Object Literal)
const person = {
  firstName: "Tahrim",
  lastName: "Janin",
  age: 22
};
console.log("Object:", person);


// 2. Access Object Properties
console.log("Dot:", person.firstName);
console.log("Bracket:", person["age"]);


// 3. Object Method
const user = {
  name: "Tahrim",
  greet: function () {
    return "Hello " + this.name;
  }
};
console.log("Method:", user.greet());


// 4. Add New Property
person.country = "Bangladesh";
console.log("Add property:", person);


// 5. Delete Property
delete person.age;
console.log("After delete:", person);


// 6. Nested Object
const student = {
  name: "Janin",
  marks: {
    math: 80,
    english: 75
  }
};
console.log("Nested:", student.marks.math);


// 7. Object Constructor
function Person(fname, lname, age) {
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
}
const p1 = new Person("Tahrim", "Janin", 22);
console.log("Constructor:", p1);


// 8. this Keyword
const car = {
  brand: "Toyota",
  model: "Corolla",
  info: function () {
    return this.brand + " " + this.model;
  }
};
console.log("this keyword:", car.info());


// 9. Object are Mutable
const x = person;
x.country = "India";
console.log("Mutable:", person);


// 10. Object Methods (Built-in)
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));


// 11. for...in Loop
for (let key in user) {
  console.log("for in:", key, user[key]);
}


// 12. Object.assign()
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = Object.assign(obj1, obj2);
console.log("assign:", obj3);


// 13. Object.freeze()
const freezeObj = { name: "Freeze" };
Object.freeze(freezeObj);
freezeObj.name = "Change";
console.log("freeze:", freezeObj);


// 14. Object.seal()
const sealObj = { name: "Seal" };
Object.seal(sealObj);
sealObj.name = "Updated";
console.log("seal:", sealObj);


// 15. hasOwnProperty()
console.log("hasOwnProperty:", user.hasOwnProperty("name"));


// 16. Convert Object to Array
const objectEntries = Object.entries(person);
console.log("Object to Array:", arr);


// 17. JSON stringify & parse
const jsonStr = JSON.stringify(person);
console.log("JSON String:", jsonStr);

const jsonObj = JSON.parse(jsonStr);
console.log("JSON Object:", jsonObj);
