type Input = number | string

function firstElement(arr: Input[]){
    return arr[0]
}

const answer = firstElement(['pratham','tamrkar'])

// User can send different types of values in inputs, without any type errors
// Typescript isn’t able to infer the right type of the return type

// 1st problem
// console.log(answer.toUpperCase());
// Property 'toUpperCase' does not exist on type 'number

// 2nd problem

const result = firstElement([1,2,'3'])


// Generics enable you to create components that work with any data type while still providing compile-time type safety.


function identity<T>(arg:T):T{
    return arg
}

let output1 = identity<string>('myString')
let output2 = identity<number>(100)

// ********************************************************

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement<string>(["pratham", "prathmesh"]);
console.log(el.toLowerCase())

