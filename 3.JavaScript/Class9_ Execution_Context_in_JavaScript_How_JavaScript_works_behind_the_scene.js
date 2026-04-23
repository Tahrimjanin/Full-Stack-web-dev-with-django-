//js engine _ main part -
//1. memory heap - where all the memory allocation happens
//2. call stack - where the code is read and executed line by line

//AST - Abstract Syntax Tree - 
// it is a tree representation of the source code. It is used by the JavaScript engine to understand the structure of the code and to execute it.

//Execution Context - it is an abstract concept that holds information about the environment in which the current code is being executed. It contains information about the variables, functions, and the value of 'this' keyword.
//There are three types of execution context -
//1. Global Execution Context - it is the default execution context that is created when the JavaScript code is executed. It contains the global object and the 'this' keyword points to the global object.
//2. Function Execution Context - it is created when a function is called. It contains the local variables and the 'this' keyword points to the object that is calling the
//3. Eval Execution Context - it is created when the eval() function is called. It contains the code that is passed to the eval() function and the 'this' keyword points to the global object.

//Execution Context is created in two phases -
//1. Creation Phase - in this phase, the JavaScript engine creates the execution context and allocates memory for the variables and functions. It also sets the value of 'this' keyword.
//2. Execution Phase - in this phase, the JavaScript engine executes the code line by line and updates the values of the variables and functions.


//Runtime - it is the time when the code is executed. It is the time when the JavaScript engine reads and executes the code line by line. It is also the time when the execution context is created and destroyed.
//3 types of runtime -
//1. JS Engine Runtime - it is the time when the JavaScript engine reads and executes the code line by line. It is also the time when the execution context is created and destroyed.
//2.callback Runtime - it is the time when the callback functions are executed. It is the time when the event loop checks for the callback functions and executes them.
//3. Web API Runtime - it is the time when the web APIs are executed. It is the time when the web APIs are called and executed.

let num1 = 19;                                      
let num2 = 20;
function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(num1, num2);

//In the above code, when the JavaScript engine reads the code, it creates the global execution context and allocates memory for the variables num1, num2, sum and result. It also sets the value of 'this' keyword to the global object.
//When the sum function is called, the JavaScript engine creates a new execution context for the sum function and allocates memory for the parameters num1 and num2. It also sets the value of 'this' keyword to the object that is calling the sum function.

//variable environment - it is a part of the execution context that contains the variables and functions that are defined in the current execution context. It is used to store the variables and functions that are defined in the current execution context and to access them when needed.
//scope chain - it is a chain of variable environments that are created when the code is executed. It is used to access the variables and functions that are defined in the current execution context and in the parent execution contexts. It is also used to resolve the variables and functions that are not defined in the current execution context.
//this
//arguments - it is an array-like object that contains the arguments passed to a function. It is used to access the arguments passed to a function and to perform operations on them. It is also used to determine the number of arguments passed to a function and to access the individual arguments.
//runtime - it is the time when the code is executed. It is the time when the JavaScript engine reads and executes the code line by line. It is also the time when the execution context is created and destroyed
