// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push() - Add an element to the end of an array
// pop() - Remove an element from the end of an array
// shift() - Remove an element from the beginning of an array
// unshift() - Add an element to the beginning of an array
// concat() - Merge two or more arrays
// forEach() is used to iterate over an array and perform some action on each element.
// map() is used to iterate over an array and modify the elements.
// filter() is used to iterate over an array and filter out elements that don't pass a certain condition.
// reduce() is used to iterate over an array and reduce it to a single value.
// find() is used to find the first element in an array that passes a certain condition.
// sort() is used to sort the elements of an array.
// difference between slice and splice is that slice does not modify the original array, it returns a new array, splice modifies the original array.

// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr); // Original Array: [ 1, 2, 3 ]

    arr.push(element);
    console.log("After push:", arr); // After push: [ 1, 2, 3, 4 ]
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
    console.log("Original Array:", arr); //Original Array: [ 1, 2, 3 ]

    arr.pop();
    console.log("After pop:", arr); // After pop: [ 1, 2 ]
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
    console.log("Original Array:", arr); // Original Array: [ 1, 2, 3 ]

    arr.shift();
    console.log("After shift:", arr); // After shift: [ 2, 3 ]
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
    console.log("Original Array:", arr); // Original Array: [ 1, 2, 3 ]

    arr.unshift(element);
    console.log("After unshift:", arr); // After unshift: [ 0, 1, 2, 3 ]
    unshiftExample([1, 2, 3], 0);
}
// concat()
function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2); // Original Arrays: [ 1, 2, 3 ] [ 4, 5, 6 

    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3); // After concat: [ 1, 2, 3, 4, 5, 6 ]
}
concatExample([1, 2, 3], [4, 5, 6]);

const initialArray = [1, 2, 3]
const secondArray = [4, 5, 6]
for (let i = 0; i < secondArray.length; i++) {
    initialArray.push(secondArray[i]) // push second array elements to initial array
    // [ 1, 2, 3, 4, 5, 6 ]
}
console.log(initialArray);

// forEach()
function forEachExample(arr) {
    console.log("Original Array:", arr); // Original Array: [ 1, 2, 3 ]

    arr.forEach(function (item, index) {
        console.log(item, index);
        // 1 0
        // 2 1
        // 3 2
    });
}
forEachExample([1, 2, 3]);

// const arr = [1,23,3] // with also const keyword we can push and pop
// arr.push(2)
// console.log(arr);

const arr = [1, 2, 3]
function logThing(str) {
    console.log(str);
}
arr.forEach(logThing)
// 1
// 2
// 3

// map()
function mapExample(arr) {
    console.log("Original Array:", arr); // Original Array: [ 1, 2, 3 ]

    let newArr = arr.map(function (item) {
        return item * 2; // After map: [ 2, 4, 6 ]
    });
    console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
    console.log("Original Array:", arr); // Original Array: [ 1, 2, 3, 4, 5 ]

    let newArr = arr.filter(function (item) {
        return item > 3; // After filter: [ 4, 5 ]
    });
    console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
    console.log("Original Array:", arr); // Original Array: [ 1, 2, 3, 4, 5 ]

    let found = arr.find(function (item) {
        return item > 3; // After find: 4
        console.log("After find:", found);
    })
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
    console.log("Original Array:", arr); // Original Array: [ 5, 2, 3, 4, 1 

    arr.sort(function (a, b) {
        return a - b; // After sort: [ 1, 2, 3, 4, 5 ]
    });
    console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
