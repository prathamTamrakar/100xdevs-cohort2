function asyncFunction(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi There")
        },3000)
    })
}

// function main(){
//     asyncFunction().then(function(value){
//         console.log(value); // hi There
//         // console.log("hi there 2");
        
//     })
//     // console.log("hi there 2"); // instant logged
    
// }

// function main(){
//     let value = asyncFunction();
//     console.log(value); // Promise { <pending> }
    
// }

// async function main(){
//     let value = asyncFunction();
//     console.log(value); // Promise { <pending> }
    
// }

async function mainFunc(){
    let value = await asyncFunction();
    // after 3 seconds both are log
    console.log("hi there 2") // hi there 2
    console.log(value); // hi There
    
}
mainFunc()
console.log("hi there 3 ");
