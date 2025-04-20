 

// length
function getLength(str) {
    console.log("Original String:", str); // Original String: Hello World
    console.log("Length:", str.length); // Length: 11
}
getLength("Hello World");

// index0f
function findIndexOf(str, target) {
    console.log("Original Array:", str); // Original Array: Hello World
    console.log("Index:", str.indexOf(target)); //Index: 6
}
findIndexOf("Hello World", "World")

let str = "Pratham Tamrakar Tamrakar Tamrakar";
console.log(str.indexOf("Pratham")); // 0
console.log(str.indexOf("Tamrakar")); // 8
console.log(str.indexOf("random")); // -1
console.log(str.lastIndexOf("Tamrakar")); // 26


// lastIndexOf
function findLastIndexOf(str, target) {
    console.log("Original String:", str); // Original String: Hello World World
    console.log("Index:", str.lastIndexOf(target)); //Index: 12
}
findLastIndexOf("Hello World World", "World");


// slice
function getSlice(str, start, end) {
    console.log("Original Array:", str); // Original Array: Hello World
    console.log("After slice:", str.slice(start, end)); //After slice: Hello
}
getSlice("Hello World", 0, 5);

console.log("Pratham Tamrakar".slice(3, 9)); // tham T // 0 to 8
console.log("Pratham Tamrakar".substr(3, 9)); // tham Tamr
// starting from 3 and length is 9

// slice function logic
function cutIt(str, startIndex, endIndex) {
    let newstr = ""
    for (let i = 0; i < str.length; i++) {
        if (i >= startIndex && i < endIndex) {
            newstr = newstr + str[i]
        }
    }
    return newstr;
}
value = "Pratham Tamrakar"
console.log(value.slice(3, 9)); // tham T // 0 to 8
console.log(cutIt(value, 3, 9)); // tham T

// substring
function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 2, 7);

// study difference btw slice and substring

// replace
function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");
  
  // trim
  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");
  




