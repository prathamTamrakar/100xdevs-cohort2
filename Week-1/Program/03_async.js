// Async allows your code to run in the background without blocking the execution of other code. 
// setTimeout, setInterval, FetchAPI, Axios, Promises, etc. are some of the examples of async code.


// 1. setTimeout - It is a Web API provided by the browser. It schedules a task to be put on the event queue after a given amount of time.


function findSum(n){
    let ans = 0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

//busy waiting
function syncSleep(){
    let a =1;
    for(let i=0;i<1000000000;i++){
        a++;
    }
    console.log(a);
    
}

syncSleep();
findSumTill100()
// setTimeout(findSumTill100,2000);

console.log("hello world");
