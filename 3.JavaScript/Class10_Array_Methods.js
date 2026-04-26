let  cricketers = ['shanto','sakib','tamim','mushfiqur','mahmudullah'];

//let loadCricketers = [];

// for(let el of cricketers){
//     loadCricketers.push(el);
// }
// console.log(loadCricketers);

//or



// let loadCricketers = cricketers.map
// (function(el ,idx,arr){
//      console.log(el) ;
// });

//or 
let loadCricketers = cricketers.map((el) => 'lord ' + el);
console.log(loadCricketers);

const char = [
     { 
    name: 'shanto islam',
    age: 30,
    country: 'Bangladesh',
    eye_color: 'black' ,
    gender: 'male'
     },
     {
    name: 'jenyfer lopez', 
    age: 24,
    country: 'USA',
    eye_color: 'brown' ,
    gender: 'Female'
     } ,
     {
    name: 'Bilibili pil',
    age: 35,
    country: 'africa',
    eye_color: 'blue' ,
    gender : 'Female'
     } ,
     {
    name: 'susan mac',
    age: 28,
    country: 'UK',
    eye_color: 'blue' ,
    gender: 'male'
     } ,

] ;

//get an array of all names 
let allnames = char.map((el) => el.name);
console.log(allnames);

//get an array of all ages
let allages = char.map((el) => el.age);
console.log(allages);

//get an arrat of object with just name and age property
let sampleObj = char.map((el) => {
    return {
        name: el.name,
        age: el.age
    }
});
console.log(sampleObj);

//get an array of all the first names 
let allFirstNames = char.map((el) => {
     return el.name.split(' ')[0];
});
console.log(allFirstNames);
    

let arr1 = [1,2,3,4,5];
// get even numbers from the array
let even = arr1.filter(function(el){
    return el % 2 === 0;
});
console.log(even);

//get char with mass greater then 100 
let massGreaterThan100 = char.filter((el) => {
    return el.mass > 100 ;
});
console.log(massGreaterThan100);

// get char with height less than 200
let heightLessThan200 = char.filter((el) => {
    return el.height < 200 ;
});
console.log(heightLessThan200);

// get all male char 
let allmale = char.filter((el) =>
{
    return el.gender === 'male' ;
});
console.log(allmale);


// get all female char
let allfemale = char.filter((el) => {
    return el.gender === 'Female';
});
console.log(allfemale);


//EVERY 

let arr2  = [2,4,6,8,10];
// check if all the numbers in the array are even 
let isEven = arr2.every((el) => {
    return el % 2 === 0 ;
});
console.log(isEven);


//using every method check if all the char have blue eyes

let isblueEyed = char.every((el) => {
    return el.eye_color === 'blue';
});
console.log(isblueEyed);

// Does every character have mass more than 40?
let isMassGreaterThan40 = char.every((el) => {
    return el.mass > 40;
});
console.log(isMassGreaterThan40);

// Is every character shorter than 200?
let isShorterThan200 = char.every((el) => {
    return el.height < 200;
});
console.log(isShorterThan200);

// Is every character male?
let isMale = char.every((el) => {
    return el.gender === 'male';
});
console.log(isMale);


// SOME

let isThereMale = char.some((el) => {
    return el.gender === 'male';
});
console.log(isThereMale);

// Is there at least one character with blue eyes?
let isThereBlueEyed = char.some((el) => {
    return el.eye_color === 'blue';
});
console.log(isThereBlueEyed);

// Is there at least one character taller than 200?
let isThereTallerThan200 = char.some((el) => {
    return el.height > 200;
});
console.log(isThereTallerThan200);

// Is there at least one character that has mass less than 50?
let isThereMassLessThan50 = char.some((el) => {
    return el.mass < 50;
});
console.log(isThereMassLessThan50);


// sort method

let arr3 = [5,2,9,1,5,6 ,11,3,134,45,67,23,78,90];

arr3.sort(function(a,b){
    return a - b;
});
console.log(arr3);


// reduce method
let arr4 = [1,2,3,4,5];

// get the sum of all the numbers in the array
let sum = arr4.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

// get the product of all the numbers in the array
let product = arr4.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);
console.log(product);

// get the maximum number in the array
let max = arr4.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, -Infinity);
console.log(max);
