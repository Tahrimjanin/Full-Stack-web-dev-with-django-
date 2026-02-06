// +, -, * ,/, ** ,% , ++ ,-- 

let a = 10;
let b = 3;

console.log("Addition: " + (a + b));

let a2 = 10;
let b2 = '3';
console.log("a2 + b2 = " + (a2 + b2));

console.log("a2-b2 = " + (a2 - b2)); // js compiler / engine situation onujai type convertion korte pare

console.log("Multiplication: " + (a ** b));

console.log("Modulus: " + (a % b));

console.log("Increment a: " + (++a)); 

console.log("Decrement b: " + (--b));

let num1 = 13;

let newNum = num1++ ;

console.log("newNum: " + newNum); // 13 

console.log("num1 after increment: " + num1); // 14

let num2 = 13.876;
console.log (Math.round(num2)); // 13
console.log (Math.ceil( num2 + 0.2)); // 14 causes to upper integer
console.log (Math.floor( num2 + 0.8)); // 13 causes to lower integer



console.log(Math.pow(2, 3)); // 2^3


///boolean

let X = 5; // example value

// Equal to
console.log("x == 8:", X == 8); // false

// Not equal to
console.log("x != 8:", X != 8); // true

// Greater than
console.log("x > 8:", X > 8); // false

// Less than
console.log("x < 8:", X < 8); // true

// Optional: Greater than or equal to
console.log("x >= 5:", X >= 5); // true

// Optional: Less than or equal to
console.log("x <= 3:", X <= 3); // false


//JavaScript Logical Operators
let A = true;
let B = false;

// Logical AND (&&)
console.log("A && B:", A && B); 

// Logical OR (||)
console.log("A || B:", A || B); 

// Logical NOT (!)
console.log("!A:", !A); 
console.log("!B:", !B); 





//short circuit in js 
// operator presedence




