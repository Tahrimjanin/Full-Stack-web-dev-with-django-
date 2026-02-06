console.log("Hello, World!");
let name = "JavaScript"; // unvalid 
//valid way 
let name1;
name1 = "JavaScript";

console.log("Welcome to " + name1 + " programming.");
console.log(typeof name1);

let num = 42;
console.log(typeof num);

let und = undefined;
console.log(typeof und);

let bool = true;
console.log(typeof bool);

let n = null; //datatype but object
console.log(typeof n); // object (this is a known quirk in JavaScript)

//type casting
let strNum = "123";
let convertedNum = Number(strNum);
console.log(typeof convertedNum); // number


let strBool = "true";
let convertedBool = Boolean(strBool);
console.log(typeof convertedBool); // boolean
console.log(strBool.length);

//impotant - string , number, bool
let num2 = 100 ;
let num3 ='50a' ;

let sum = num2 + num3 // NaN
console.log("Sum: " + sum);
console.log(typeof sum);

let str ='NaN' ;
console.log(typeof str);


//information - properties 
//action  - methods
console.log(str.length); // property
console.log(str.toUpperCase()); // method


let text = 'please visit ms';
let newText = text.replace('ms', 'Microsoft');
console.log(newText);

let lastName = "Doe";
let lastname = "Peterson"; //The variables lastName and lastname, are different variables:

// var – declares a variable
var userName = "Tahrim";

// let – block variable
let age = 20;

// const – block constant
const country = "Bangladesh";

const x = 5;
const y = 6;
const z = x + y;
console.log("Sum of x and y is: " + z);

// if – condition
if (age >= 18) {
    console.log("Adult");
}

// switch – multiple cases
let day = 1;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    default:
        console.log("Invalid day");
}

// for – loop
for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}

// function – function declaration
function add(a, b) {
    // return – exit function with value
    return a + b;
}
console.log("Sum:", add(5, 3));

// try – error handling

//8 data type 

// 1. String
let myString = "Hello, world!";
console.log("String:", myString);

// 2. Number
let myNumber = 42;
console.log("Number:", myNumber);

// 3. BigInt
let myBigInt = 123456789012345678901234567890n;
console.log("BigInt:", myBigInt);

// 4. Boolean
let myBoolean = true;
console.log("Boolean:", myBoolean);

// 5. Object
let myObject = { name: "Tahrim", age: 20 };
console.log("Object:", myObject);

// 6. Undefined
let myUndefined;
console.log("Undefined:", myUndefined);

// 7. Null
let myNull = null;
console.log("Null:", myNull);

// 8. Symbol
let mySymbol = Symbol("uniqueId");
console.log("Symbol:", mySymbol);














// methode from W3school