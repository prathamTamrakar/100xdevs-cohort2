const fs = require("fs")

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);

})

console.log("hello one");

// it takes very long time then the file read
// but when goes to file read then thread is busy to execute this so after thread free then readfile output is show
let a = 1;
for (let i = 0; i < 1000000000; i++) {
    a++;
}
console.log(a);

console.log("hello two");
