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
const arr = Object.entries(person);
console.log("Object to Array:", arr);


// 17. JSON stringify & parse
const jsonStr = JSON.stringify(person);
console.log("JSON String:", jsonStr);

const jsonObj = JSON.parse(jsonStr);
console.log("JSON Object:", jsonObj);
