// Write a function that finds the sum of two numbers 

function findSum(a, b){
    return a+b
}
console.log(findSum(10,10));

// Callbacks

function sum(num1,num2,fnToCall){
    let result = num1 + num2;
    fnToCall(result)
}
let a= 10;
function displayResult(data){
    console.log("Result of the sum is : "+ data);
}

function displayResultPassive(data){
    console.log("Sum's result is : "+ data);
    
}

// only call one function after this so the diplayResult of the sum

sum(1,2,displayResult)


// function calculateArithematic(a,b,type){
//     if(type=="sum"){
//         return a+b;
//     }
//     if(type=="minus"){
//         return a-b;
//     }
// }
// const value = calculateArithematic(23,34,"sum");
// console.log(value);

function calculateArithematic(a,b,arithematicFunction){
    const ans = arithematicFunction(a,b)
    return ans
}
function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
const value = calculateArithematic(23,34,sum);
console.log(value);


function greet(){
    console.log("hello world");
}
setTimeout(greet,5*1000)
// setInterval(greet,500);


function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSquare(a,b){
    const val1 = square(a);
    const val2 = square(b);

    return val1+val2;
}

function sumOfCube(a,b){
    const val1 = cube(a);
    const val2 = cube(b);

    return val1+val2;
}

console.log(sumOfSquare(2,3));
console.log(sumOfCube(2,3));


function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);

    return val1+val2;
}

console.log(sumOfSomething(2,3,square));
console.log(sumOfSomething(2,3,cube));
console.log(sumOfSomething(2,3,function(n){
    return n*n*n*n;
}));
