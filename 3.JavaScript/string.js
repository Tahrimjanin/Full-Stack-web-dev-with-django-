

// 1. String Creation
let str1 = "Hello";             // double quotes
let str2 = 'World';             // single quotes
let str3 = `Hello ${str2}!`;    // backticks is template literal allows interpolation ,its use for multi-line string and expression evaluation

console.log("str1:", str1);
console.log("str2:", str2);
console.log("str3 (template literal):", str3);

// 2. String Properties
let text = "JavaScript";
console.log("\nLength:", text.length);
console.log("First character:", text[0]);
console.log("Last character:", text[text.length - 1]);

// 3. Concatenation
let combined = str1 + " " + str2;        // using +
console.log("\nConcatenated:", combined);
console.log(`Template literal: ${str1} ${str2}`); 

// 4. Case Conversion
console.log("\nUpper case:", text.toUpperCase()); //
console.log("Lower case:", text.toLowerCase());

// 5. Searching
console.log("\nIndex of 'Script':", text.indexOf("Script")); 
console.log("Includes 'Java':", text.includes("Java"));
console.log("Starts with 'Java':", text.startsWith("Java"));
console.log("Ends with 'Script':", text.endsWith("Script"));

// 6. Extracting Parts
console.log("\nSlice(0,4):", text.slice(0,4));
console.log("Substring(0,4):", text.substring(0,4));
console.log("Substr(4,6):", text.substr(4,6));

// 7. Modifying Strings
console.log("\nReplace 'Java' with 'Type':", text.replace("Java","Type"));
console.log("Repeat 2 times:", text.repeat(2));
console.log("Trim:", "   Hello   ".trim());
console.log("Trim Start:", "   Hello   ".trimStart());
console.log("Trim End:", "   Hello   ".trimEnd());

// 8. Splitting and Joining
let sentence = "I love JavaScript programming";
let words = sentence.split(" ");           // split into array
console.log("\nWords array:", words);
console.log("Join with '-':", words.join("-"));

// 9. Character Access (iteration)
console.log("\nIterating characters:");
for(let char of text){
    console.log(char);
}

// 10. Comparison
let a = "apple";
let b = "banana";
console.log("\nComparison:");
console.log("a == b:", a==b);
console.log("a < b:", a<b);
console.log("a > b:", a>b);

// 11. Template Literals with expressions
let name = "Tahrim";
let age = 20;
console.log(`\n${name} is ${age} years old. Next year, he will be ${age+1}.`);

// 12. Escape Sequences
console.log("\nEscape sequences:");
console.log("Line1\nLine2");
console.log("Tab\tSpace");
console.log("Quote: \"Hello\"");

// 13. Checking emptiness / undefined
let emptyStr = "";
console.log("\nEmpty string check:", emptyStr === "");

// 14. Advanced (includes chaining)
console.log("\nChaining example:");
console.log("   javascript   ".trim().toUpperCase().replace("JAVASCRIPT","JS"));

// 15. String to Array and back
let chars = Array.from("Hello");
console.log("\nArray from string:", chars);
console.log("Back to string:", chars.join(""));

// 16. Template literals multi-line
let multiLine = `This is line1
This is line2
This is line3`;
console.log("\nMulti-line template literal:\n", multiLine);


let str = "Hello World";

// at()
console.log("at():", str.at(1)); // e

// charAt()
console.log("charAt():", str.charAt(1)); // e

// charCodeAt()
console.log("charCodeAt():", str.charCodeAt(1)); // Unicode of 'e'

// codePointAt()
console.log("codePointAt():", str.codePointAt(1)); // Unicode value

// concat()
console.log("concat():", str.concat("!!!"));

// constructor
console.log("constructor:", str.constructor);

// endsWith()
console.log("endsWith():", str.endsWith("World"));

// String.fromCharCode()
console.log("fromCharCode():", String.fromCharCode(72, 105)); // Hi

// includes()
console.log("includes():", str.includes("Hello"));

// indexOf()
console.log("indexOf():", str.indexOf("o"));

// isWellFormed()
console.log("isWellFormed():", str.isWellFormed());

// lastIndexOf()
console.log("lastIndexOf():", str.lastIndexOf("o"));

// length
console.log("length:", str.length);

// localeCompare()
console.log("localeCompare():", "apple".localeCompare("banana"));

// match()
console.log("match():", str.match(/o/g));

// matchAll()
console.log("matchAll():", [...str.matchAll(/o/g)]);

// padEnd()
console.log("padEnd():", "5".padEnd(3, "0"));

// padStart()
console.log("padStart():", "5".padStart(3, "0"));

// prototype (concept demo)
String.prototype.sayHi = function () {
  return "Hi " + this;
};
console.log("prototype:", "Tahrim".sayHi());

// repeat()
console.log("repeat():", "Hi ".repeat(3));

// replace()
console.log("replace():", str.replace("World", "JS"));

// replaceAll()
console.log("replaceAll():", "a-b-a-b".replaceAll("a", "x"));

// search()
console.log("search():", str.search("World"));

// slice()
console.log("slice():", str.slice(0, 5));

// split()
console.log("split():", str.split(" "));

// startsWith()
console.log("startsWith():", str.startsWith("Hello"));

// substr() (deprecated)
console.log("substr():", str.substr(0, 5));

// substring()
console.log("substring():", str.substring(0, 5));

// toLocaleLowerCase()
console.log("toLocaleLowerCase():", str.toLocaleLowerCase());

// toLocaleUpperCase()
console.log("toLocaleUpperCase():", str.toLocaleUpperCase());

// toLowerCase()
console.log("toLowerCase():", str.toLowerCase());

// toString()
console.log("toString():", str.toString());

// toUpperCase()
console.log("toUpperCase():", str.toUpperCase());

// toWellFormed()
console.log("toWellFormed():", str.toWellFormed());

// trim()
console.log("trim():", "   Hello   ".trim());

// trimEnd()
console.log("trimEnd():", "   Hello   ".trimEnd());

// trimStart()
console.log("trimStart():", "   Hello   ".trimStart());

// valueOf()
console.log("valueOf():", str.valueOf());
