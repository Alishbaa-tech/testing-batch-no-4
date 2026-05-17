// strings Methods

// toUpperCase

let text = "hello";
console.log(text.toUpperCase()); // HELLO
 
// toLowerCase
let text1 = "HELLO";
console.log(text1.toLowerCase()); // hello

// includes
let text3 = "I love JavaScript";
console.log(text3.includes("love")); // true

// slice
let text4 = "JavaScript";
console.log(text4.slice(0, 4)); // Java
 
// replace
let text5 = "I like JS";
console.log(text5.replace("JS", "JavaScript"));
// I like JavaScript

// startsWith
let text6 = "Hello World";
console.log(text6.startsWith("Hello"));   // true
console.log(text6.startsWith("World"));   // false

// endsWith
let text7 = "Hello World";
console.log(text7.endsWith("World"));

// concat
let firstName = "Alishba";
let lastName = "Ashfaq";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

// charAt
let text8 = "JavaScript";
console.log(text8.charAt(0)); // J
console.log(text8.charAt(4)); // S

// padStart
let text9 = "5"; 
console.log(text9.padStart(3, "0")); // 005

// padEnd
let text10 = "5";
console.log(text10.padEnd(3, "0")); // 500

// trim
let text11 = "   Hello World   ";
console.log(text11.trim()); // "Hello World"

// repeat
let text12 = "Hello ";
console.log(text12.repeat(3)); // "Hello Hello Hello "

// replaceAll
let text13 = "I like JS. JS is great!";
console.log(text13.replaceAll("JS", "JavaScript"));
// I like JavaScript. JavaScript is great!

// indexOf
let text14 = "Hello World";
console.log(text14.indexOf("World")); // 6

// substring
let text15 = "JavaScript";
console.log(text15.substring(0, 4)); // Java

// split
let text16 = "I love JavaScript";
console.log(text16.split(" ")); // ["I", "love", "JavaScript"]

// length
let text17 = "Hello World";
console.log(text17.length); // 11