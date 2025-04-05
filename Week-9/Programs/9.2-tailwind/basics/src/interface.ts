
// function isLegal(user:{
//     firstName: string,
//     lastName: string,
//     age: number
// }) {
//     if (user.age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// function isLegal(user:{
//     firstName: string,
//     lastName: string,
//     age: number
// }) {
//     console.log(`Hello ${user.firstName}`);
// }

// in this problem is code repetation so


interface User{
    firstName: string,
    lastName: string,
    age: number
}

function isLegalorNot(user:User) {
    if (user.age >= 18) {
        return true
    } else {
        return false
    }
}

function greetingToPerson(user:User){
    console.log(`Hello ${user.firstName}`);
}

isLegalorNot({
    firstName: 'pratham',
    lastName: 'Tamrakar',
    age: 20
})

// Interfaces have another special property. You can implement interfaces as a class.

interface Person{
    name: string,
    age: number,
    greet(phrase: string): void
}

class Employee implements Person{
    name: string
    age:number

    constructor(n:string,a:number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string){
        console.log(`${phrase} ${this.name}`);
        
    }
}

const e = new Employee("pratham",20)
e.greet('hello')