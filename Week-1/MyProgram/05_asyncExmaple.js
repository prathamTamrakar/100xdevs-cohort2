
// first it is executed
console.log('Hello1')

// it send to wait for 3sec
setTimeout(()=>{
    console.log("Hello from async function 1");
    
},3000)

// it send to wait for 1sec
setTimeout(()=>{
    console.log("Hello from async function 2");
    
},1000)

// while it is start executing and thread is busy
for(let i =0;i<10000000000;i++){
    a=0;
    a++;
}

console.log('Hello2')

// then thread is free function2 which wait for 1 sec come to queue first and then function1 which wait for 3 sec come to queue

// and function 2 executed then function 1 executed

// Hello1
// Hello2
// Hello from async function 2
// Hello from async function 1

// 