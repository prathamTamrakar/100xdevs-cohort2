const fs = require('fs')

// function readFile(fn){
//     fs.readFile("./a.txt","utf-8",function(err,data){
//         fn(data);
//     })
// }

// function onDone(data){
//     console.log(data);   
// }

// readFile(onDone)

function readFile() {
    return new Promise(function (resolve) {
        fs.readFile("./a.txt", "utf-8", function (err, data) {
            resolve(data);
        })
    })
}

function onDone(data){
    console.log(data);   
}

readFile().then(onDone)


let p = new Promise(function(resolve){

})
console.log(p);  // Promise { <pending> }

function asyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there");
    })
    return p;
}

const value = asyncFunction();
value.then(function(data){
    console.log(data); // hi there
    
})
