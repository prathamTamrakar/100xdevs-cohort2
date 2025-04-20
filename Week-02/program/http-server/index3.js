const express = require("express")
const app = express();

function calculateSum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

app.get('/',(req,res)=>{
    const n = req.query.n;
    const sum = calculateSum(n);
    // res.send("hi there");
    res.send(`Sum is the ${sum}`)
})

app.listen(3000, () => {
    console.log("Server is started on the port 3000");

})