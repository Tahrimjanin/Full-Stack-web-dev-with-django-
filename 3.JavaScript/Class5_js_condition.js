let x = 15;

// 1. Simple if
if (x > 10) {
  console.log("1. x is greater than 10"); // runs because x=15
}

// 2. if...else
if (x % 2 === 0) {
  console.log("2. x is even");
} else {
  console.log("2. x is odd"); // runs because 15 is odd
}

// 3. if...else if...else
if (x < 10) {
  console.log("3. x is less than 10");
} else if (x === 15) {
  console.log("3. x is exactly 15"); // runs
} else {
  console.log("3. x is greater than 10 but not 15");
}

// 4. Nested if
if (x > 10) {
  if (x < 20) {
    console.log("4. x is between 10 and 20"); // runs
  } else {
    console.log("4. x is greater than or equal to 20");
  }
}

// 5. switch
let day = 3;
switch (day) {
  case 1:
    console.log("5. Monday");
    break;
  case 2:
    console.log("5. Tuesday");
    break;
  case 3:
    console.log("5. Wednesday"); // runs
    break;
  case 4:
    console.log("5. Thursday");
    break;
  default:
    console.log("5. Another day");
}


let X = 8;

// Check if x is even or odd using ternary
let result = (X % 2 === 0) ? "X is even" : "X is odd";
console.log("Ternary Result:", result); // X is even

// Another example: check age for voting eligibility
let age = 17;
console.log("Voting Eligibility:", (age >= 18) ? "Can vote" : "Cannot vote"); // Cannot vote

// You can also nest ternary (less readable though)
let score = 85;
let grade = (score >= 90) ? "A" : (score >= 75) ? "B" : (score >= 50) ? "C" : "F";
console.log("Grade:", grade); console.log(car);








/// method form w3schools

//two dimensional array
let persons = [
  ["John", "Doe", 30],
  ["Jane", "Smith", 25],
  ["Bob", "Johnson", 35]
];

console.log(persons[0][0]); //  "John" show korbe
console.log(persons[1][1]); // "Smith" show korbe
console.log(persons[2][2]); // 35 show korbe


//person[row]

for (let row = 0; row < persons.length; row++) {
  console.log("Person " + (row + 1) + ":");
  for (let col = 0; col < persons[row].length; col++) {
    console.log(persons[row][col]);
  }
}


let n1 = [10] ;
let n2 = [10] ;

console.log(n1 == n2 ); // false cause n1 and n2 are different array objects
console.log(n1 === n2); // false

let n3 = 10 ;
let n4 = 10 ;

console.log(n3 == n4); // true cause n3 and n4 are primitive values
console.log(n3 === n4); // true