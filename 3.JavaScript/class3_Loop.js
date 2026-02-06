let i ; //undefine 
for ( i = 1; i <= 11; i++) {
  console.log(i);
}

console.log('outer i: ' , i); 

let name = ["John", "Jane", "Doe", "Smith"];
for (let i = 0; i < name .length; i++) {
  console.log(name[i]);
}

// nested loop
for(let i = 1; i<=10 ;i++ ){
    for(let j=1 ;j<5 ; j++){
        console.log(`i: ${i} j:${j}`) ;
    }
}

//while loop
let j = 1;
while (j <= 5) {
    console.log("j =", j);
    j++;
}

// Do...while loop
let k = 1;
do {
    console.log("k =", k);
    k++;
} while (k <= 5);


// Break statement in loop

for (let m = 1; m <= 10; m++) {
    if (m === 6) {
        console.log("Breaking loop at m =", m);
        break; // exits the loop completely
    }
    console.log("m =", m);
}

// Continue statement in loop

for (let n = 1; n <= 5; n++) {
    if (n === 3) {
        console.log("Skipping n =", n);
        continue; // skips current iteration
    }
    console.log("n =", n);
}


//for...in – iterate over object keys
let person = {name:"Tahrim", age:20};
for(let key in person){
    console.log(key, person[key]);
}

//for...of – iterate over iterable values
let arr = [10,20,30];
for(let value of arr){
    console.log(value);
}
//forEach – array method for iteration
arr.forEach((val,index)=>console.log(index,val));


// Array map Method
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled);

//  Array filter Method
let filtered = numbers.filter(num => num > 2);
console.log(filtered);

// Array reduce Method
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
