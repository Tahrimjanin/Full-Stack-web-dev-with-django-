//properties same value change 

// let phone1 = {
//     brand: "Apple",
//     model: "iPhone 17 Pro",
//     price: 235000 ,
//     isAvailable: true,
// } ;

// let phone2 = {
//     brand: "Samsung",
//     model: "Galaxy S23 Ultra",
//     price: 146720 ,
//     isAvailable: true,
// } ;

// let phone3 = {
//     brand: "Google",
//     model: "Pixel 7 Pro",
//     price: 89999 ,
//     isAvailable: false,
// } ;

// solve by using factory function
function createPhone(brand, model, price, Available) {
    return {
        brand: brand, //or use shorthand property if the parameter name is same as the property name
        model: model, // or model without model: model
        price ,
        isAvailable: Available
    };
}

let phone1 = createPhone("Apple", "iPhone 17 Pro", 235000, true);
let phone2 = createPhone("Samsung", "Galaxy S23 Ultra", 146720, true);
let phone3 = createPhone("Google", "Pixel 7 Pro", 89999, false);

//suppose phn1 need to customize anything then
phone1.software = 'iOS 17 Pro' ;
console.log(phone1);
phone2.software = 'Android 13' ;
console.log(phone2);

phone1.sayHello = () => {
    console.log("Hello from " + phone1.brand);
};
console.log(phone1);


//solve by using constructor function
class CreatePhone {
    constructor(brand, model, price, Available) {
        this.brand = brand ;
        this.model = model ;
        this.price = price ;
        this.isAvailable = Available ;
    }
}

let phone4 = new CreatePhone("Apple", "iPhone 17 Pro", 235000, true);
console.log(phone4);

//////this keyword
let person ={
    name :'janin',
    interest : ['coding', '3D modeling', 'Booking'],
    addr : 'Bogura',

    SayHello(){
        console.log("Hello, my name is " + this.name);
    },

    // printInterests: function (){
    //   this.interest.forEach(function(el){
    //     console.log(el);
    //   }) ;
    //} , or easy way
    
    printInterests: function (){
        this.interest.forEach(el => {
            console.log(this.name + " likes " + el);
        }) ;
    },
} ;
person.SayHello();
person.printInterests();

//this keyword use hoe dui jaegae _ 
// Function - global korle setate bole window
// method -this -> sei object kei refer korbe

