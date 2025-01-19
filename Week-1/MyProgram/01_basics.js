// Variable
var a = 1;
console.log(a); // 1 
a = 2
console.log(a); // 2

let b = 1;
console.log(b); // 1 
b = 2
console.log(b); // 2

const c = 1;
console.log(c); // 1 
// c = 2
// console.log(c); // error

// Datatypes
let firstName = "pratham"
let age = 19
let isMarried = false

console.log("this person name is " + firstName + " and their age is " + age);

if (isMarried) {
    console.log(firstName + " is Married");
} else {
    console.log(firstName + " is not Married");
}

let answer = 0
for (let i = 0; i <= 999; i++) {
    answer = answer + i
}
console.log(answer);

// 1. Write the program to greet a person given their first and last name
// 2. Write a program that greets a person based on their gender. (If else)
// 3. Write a program that counts from 0 - 1000 and prints (for loop)



const ages = [21, 45, 3, 4, 7, 85, 24, 87, 54, 34, 67, 43];
const numberOfPeople = ages.length;

// 4. Write a program prints all the even numbers in an array
for (let i = 0; i < numberOfPeople; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
    }
}
// 5. Write a program to print the biggest number in an array
let max = ages[0];
for (let i = 0; i < numberOfPeople; i++) {
    if (max < ages[i]) {
        max = ages[i];
    }
}
console.log("Biggest number is : " + max)

// 7. Write a program that reverses all the elements of an array
let start = 0;
let end = numberOfPeople-1;
while(start<end){
    // swap(ages[start],ages[end]);
    let temp = 0;
    temp = ages[start];
    ages[start]=ages[end];
    ages[end]=temp
    start++;
    end--;
}
console.log("Reverse order arrray is : ");

for (let i = 0; i < numberOfPeople; i++) {
    console.log(ages[i]+" ");
}


let user = [
    {
        firstName: "Pratham",
        gender: "Male"
    },
    {
        firstName: "Rajshri",
        gender: "Female"
    },
    {
        firstName: "Yash",
        gender: "Male"
    }
]

// 6. Write a program that prints all the male people’s first name given a complex object

for (let i = 0; i < user.length; i++) {
    if(user[i]["gender"]=="Male"){
        console.log(user[i]["firstName"]);
    }
}


// let sum = 0;
// for(let i=0;i<100000000000000;i++){
//     sum=sum+i;
// }
// console.log(sum);



