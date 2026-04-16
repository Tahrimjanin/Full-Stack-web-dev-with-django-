let x = 15;

if (x > 10) {
  console.log("1. x is greater than 10");
}

if (x % 2 === 0) {
  console.log("2. x is even");
} else {
  console.log("2. x is odd");
}

if (x < 10) {
  console.log("3. x is less than 10");
} else if (x === 15) {
  console.log("3. x is exactly 15");
} else {
  console.log("3. x is greater than 10 but not 15");
}

if (x > 10) {
  if (x < 20) {
    console.log("4. x is between 10 and 20");
  } else {
    console.log("4. x is greater than or equal to 20");
  }
}



let X = 8;
let result = (X % 2 === 0) ? "X is even" : "X is odd";
console.log("Ternary Result:", result);

let age = 17;
console.log("Voting Eligibility:", (age >= 18) ? "Can vote" : "Cannot vote");

let score = 85;
let grade = (score >= 90) ? "A" : (score >= 75) ? "B" : (score >= 50) ? "C" : "F";
console.log("Grade:", grade); // ✅ removed console.log(car)

// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//  this is a built in function to get the current date and time
let date = new Date(); 
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());

if (day== 0){
  console.log("Today is Sunday");
} 
else if (day == 1) {
  console.log("Monday");
} else if (day == 2) {
  console.log("Tuesday");
}
else if (day == 3) {
  console.log("Wednesday");
} else if (day == 4) {
  console.log("Thursday");
}
else if (day == 5) {
  console.log("Friday");
}
else if (day == 6) {
  console.log("Saturday");
} else {
  console.log("Invalid day");
}

//this code also use switch statement to get the current day of the week
switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

age = 20;
addr = "Dhaka";
if (age >= 18 && addr === "Dhaka") {
  console.log("You are eligible to vote in Dhaka");
}
else 
  console.log("get out of here");

//ternary operator with logical operators

let num ;
if (num == undefine){
  num = 0;
}
console.log(num);

// using ternary operator to check if num is undefined
num = (num === undefined) ? 0 : num;
console.log(num);






// Two dimensional array
let persons = [
  ["John", "Doe", 30],
  ["Jane", "Smith", 25],
  ["Bob", "Johnson", 35]
];

console.log(persons[0][0]); // "John"
console.log(persons[1][1]); // "Smith"
console.log(persons[2][2]); // 35

for (let row = 0; row < persons.length; row++) {
  console.log("Person " + (row + 1) + ":");
  for (let col = 0; col < persons[row].length; col++) {
    console.log(persons[row][col]);
  }
}