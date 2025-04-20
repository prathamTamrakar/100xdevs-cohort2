// normal function
function sum(a, b) {
    return a + b
}

// arrow function 
const sumFunc = (a, b) => {
    return a + b
}

// map
// given an array , give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

//  map in javascript is a collection of key-value pairs. 
//  The keys are unique and the values can hold any type of values.
//  The keys are used to retrieve the values.


// Given an array, give me back a new array in which every value is multiplied by 2.

const arr = [1, 2, 3, 4, 5];


//1.  Using for loop
const newArrLoop = [];
for(let i = 0; i < arr.length; i++) {
    newArrLoop.push(arr[i] * 2);
}
console.log("Using Loop " + newArrLoop)

// 2. 
function transform(i){
    return i * 2;
}
const ans = arr.map(transform);
console.log(ans);


//3.  Using map
const newArr = arr.map((value) => {
    return value * 2;
});

console.log("Using Map " + newArr);


// 4.
// List the fullname of all the users
const users = [
    {firstname:"Chandan", lastname:"Kushwaha", age:22},
    {firstname:"Anjali", lastname:"Kumar", age:22},
    {firstname:"RajKumar", lastname:"Kush", age:33},
    {firstname:"Ram", lastname:"Sita", age:43},
    {firstname:"Suraj", lastname:"waha", age:50},
    {firstname:"Anshu", lastname:"Verma", age:25},
];

const fullname = users.map((user) => {
    return user.firstname + " " + user.lastname;
});
console.log(fullname);


const newArr1 = arr.map((value) => {
    return value % 2 === 0;
});
console.log(newArr1);


// Create a map function that takes an array and a tranform function as input and returns the transformed array as output 

const map = (arr,fn)=>{
    const transfromedArr = [];
    for (let i = 0; i < fn.length; i++) {
        transfromedArr.push(fn(arr[i]))  
    }
    return transfromedArr
}

