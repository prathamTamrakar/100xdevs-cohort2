"use strict";
// javascript is losely type language
// people relised that js is very powerful language but it is not type safe
// so they created typescript which is superset of javascript
// typescript is a strict syntactical superset of javascript which means it has all the features of javascript and more
// typescript is a compiled language which means it is converted to javascript before it is run
// when ts is compiled to js you get type checking. if there is an error the coversion to js fails
// tsc is the typescript compiler which is used to convert ts to js
// others are esbuild, swc


let x: number = 10; // x is a number
console.log(x); // 10


// x = "pratham" // error: Type 'string' is not assignable to type 'number'.

function greet(firstName: string){
    console.log(`Hello ${firstName}`);
}

greet("Pratham"); // Hello Pratham // function greet(firstName: string): void
greet("raj"); // Hello raj


function sum(a:number,b:number):number{
    return a+b;
}

const value = sum(10,20);
console.log(value);

// if we not give function return type then ts will infer the return type from the function body
// is is called type inference

function isLegal(age:number):boolean{
    if(age>=18){
        return true;
    }else{
        return false;
    }
}
let ans = isLegal(20); // x is boolean
console.log(x); // true

function runAfter1S(fn:() => void) {
    // fn is a function which takes no arguments and returns nothing
    setTimeout(fn, 1000);
}

runAfter1S(() => {
    console.log("Hello after 1 second");
});

// The tsconfig file has a bunch of options that you can change to change the compilation process.
// 1. target
// The target option in a tsconfig.json file specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.

const greeting = (name: string) => `Hello, ${name}!`;

// 2. rootDir
// Where should the compiler look for .ts files. Good practise is for this to be the src folder

// 3. outDir
// Where should the compiler look for spit out the .js files.

// 4. noImplicitAny
// Try enabling it and see the compilation errors on the following code - 
// const greet1 = (name) => `Hello, ${name}!`;
// when true its complain

// 5. removeComments
// Weather or not to include comments in the final js file
 

function runAfter2S(fn:()=>void){
    setTimeout(fn,2000)
}

const doSomething = ()=>{
    console.log('heelo');
    return 5
}

runAfter2S(doSomething)